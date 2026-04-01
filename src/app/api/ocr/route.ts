import { NextRequest, NextResponse } from "next/server";

const OCR_PROMPT = `You are an OCR assistant. The user has uploaded a photo of their handwritten or printed GCSE English Literature essay response.

TASK: Extract ALL the text from the image as accurately as possible.

RULES:
- Preserve paragraph breaks
- Fix obvious spelling errors only if you are very confident (e.g. clearly malformed letters), otherwise keep the student's original spelling
- Do not add, remove, or rephrase any content
- If the handwriting is partially illegible, make your best guess and include it
- Return ONLY the extracted text, nothing else — no commentary, no labels, no markdown formatting`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { image } = body as { image: string }; // base64 data URL

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Extract base64 data and mime type from data URL
    const match = image.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) {
      return NextResponse.json({ error: "Invalid image format. Expected base64 data URL." }, { status: 400 });
    }
    const mimeType = match[1];
    const base64Data = match[2];

    // Detect provider — same priority as /api/mark
    const geminiKey = process.env.GEMINI_API_KEY;
    const apiKey = geminiKey || process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
    const provider =
      process.env.AI_PROVIDER ||
      (geminiKey ? "gemini" : process.env.ANTHROPIC_API_KEY ? "anthropic" : "openai");

    if (!apiKey) {
      return NextResponse.json(
        { error: "No AI API key configured." },
        { status: 503 }
      );
    }

    let extractedText: string;

    if (provider === "gemini") {
      const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: OCR_PROMPT },
                { inline_data: { mime_type: mimeType, data: base64Data } },
              ],
            },
          ],
          generationConfig: { maxOutputTokens: 4000 },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `Gemini API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      extractedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } else if (provider === "anthropic") {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514",
          max_tokens: 4000,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: { type: "base64", media_type: mimeType, data: base64Data },
                },
                { type: "text", text: OCR_PROMPT },
              ],
            },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `Anthropic API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      extractedText = data.content?.[0]?.text || "";
    } else {
      // OpenAI-compatible
      const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
      const model = process.env.OPENAI_MODEL || "gpt-4o";

      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          max_tokens: 4000,
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: OCR_PROMPT },
                { type: "image_url", image_url: { url: image } },
              ],
            },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `OpenAI API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      extractedText = data.choices?.[0]?.message?.content || "";
    }

    if (!extractedText.trim()) {
      return NextResponse.json({ error: "Could not extract any text from the image." }, { status: 422 });
    }

    return NextResponse.json({ text: extractedText.trim() });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
