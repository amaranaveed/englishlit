import { NextRequest, NextResponse } from "next/server";

// ─── AQA Examiner System Prompt ───
const BASE_EXAMINER_PROMPT = `You are a senior AQA GCSE English Literature examiner with 15+ years experience.

TASK: Mark the student's response against the AQA mark scheme.

AQA LEVELS (for 30-mark questions):
Level 1 (1-4): Simple comments, limited textual reference
Level 2 (5-10): Supported response, some relevant features identified
Level 3 (11-16): Thoughtful response, appropriate references, relevant context
Level 4 (17-22): Critical, exploratory response, precise references, context integrated
Level 5 (23-26): Convincing, critical analysis, judicious references, context embedded
Level 6 (27-30): Assured, personal response, discriminating references, sophisticated context

ASSESSMENT OBJECTIVES:
AO1 (6 marks): Critical style, informed personal response, quotations
AO2 (18 marks): Language/form/structure analysis, writer methods, terminology
AO3 (6 marks): Context — social, historical, cultural relationships

Respond ONLY in this JSON format:
{
  "level": <1-6>,
  "mark": <0-30>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-6>, "feedback": "<specific feedback>" },
  "ao2": { "mark": <0-18>, "feedback": "<specific feedback>" },
  "ao3": { "mark": <0-6>, "feedback": "<specific feedback>" },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>"],
  "mistakes": [
    { "topic": "<what they got wrong>", "correction": "<what they should know>" }
  ],
  "modelParagraph": "<Write one example paragraph for this question (see MODEL PARAGRAPH GRADE below)>"
}`;

function buildExaminerPrompt(targetGrade?: number): string {
  if (!targetGrade) return BASE_EXAMINER_PROMPT + `

MODEL PARAGRAPH GRADE: Write the modelParagraph at Grade 8/9 level.`;

  return BASE_EXAMINER_PROMPT + `

STUDENT CONTEXT:
This student's target grade is ${targetGrade}. When providing feedback:
- Frame your feedback relative to what a Grade ${targetGrade} response requires.
- Clearly state whether they are currently below, at, or above their target.
- In "improvements", prioritise the specific skills that would help them reach Grade ${targetGrade}.
- If they are already at or above their target, suggest what would push them to the next grade.

MODEL PARAGRAPH GRADE: Write the modelParagraph at Grade ${targetGrade} level — UNLESS the student's achieved grade is already ${targetGrade} or higher, in which case write it at one grade above their achieved grade (max Grade 9).`;
}

// ─── Request/Response types ───
interface MarkRequest {
  textName: string;
  question: string;
  answer: string;
  modelParagraph?: string;
  targetGrade?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as MarkRequest;

    if (!body.textName || !body.question || !body.answer) {
      return NextResponse.json(
        { error: "Missing required fields: textName, question, answer" },
        { status: 400 }
      );
    }

    // Try configured API key (env var) — priority: Gemini > Anthropic > OpenAI
    const geminiKey = process.env.GEMINI_API_KEY;
    const apiKey = geminiKey || process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
    const provider =
      process.env.AI_PROVIDER ||
      (geminiKey ? "gemini" : process.env.ANTHROPIC_API_KEY ? "anthropic" : "openai");

    if (!apiKey) {
      return NextResponse.json(
        { error: "No AI API key configured. Set GEMINI_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY in .env.local" },
        { status: 503 }
      );
    }

    const userMessage = body.modelParagraph
      ? `TEXT: ${body.textName}\nQUESTION: ${body.question}\n\nHere is a Grade 8/9 model paragraph for reference — use this as the benchmark for quality when marking, and return it as the modelParagraph in your response:\n${body.modelParagraph}\n\nSTUDENT RESPONSE:\n${body.answer}`
      : `TEXT: ${body.textName}\nQUESTION: ${body.question}\nSTUDENT RESPONSE:\n${body.answer}`;

    let marking;

    if (provider === "gemini") {
      // ─── Google Gemini API ───
      const model = process.env.GEMINI_MODEL || "gemini-3-flash-preview";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: buildExaminerPrompt(body.targetGrade) }],
          },
          contents: [
            { role: "user", parts: [{ text: userMessage }] },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            maxOutputTokens: 2000,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json(
          { error: `Gemini API error: ${res.status} ${err}` },
          { status: 502 }
        );
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        return NextResponse.json({ error: "Empty response from Gemini API" }, { status: 502 });
      }
      marking = JSON.parse(text);
    } else if (provider === "anthropic") {
      // ─── Anthropic Claude API ───
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: buildExaminerPrompt(body.targetGrade),
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json(
          { error: `Anthropic API error: ${res.status} ${err}` },
          { status: 502 }
        );
      }

      const data = await res.json();
      const text = data.content?.[0]?.text;
      if (!text) {
        return NextResponse.json({ error: "Empty response from API" }, { status: 502 });
      }
      marking = JSON.parse(text);
    } else {
      // ─── OpenAI-compatible API (GPT, Copilot, etc.) ───
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
          max_tokens: 2000,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: buildExaminerPrompt(body.targetGrade) },
            { role: "user", content: userMessage },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json(
          { error: `OpenAI API error: ${res.status} ${err}` },
          { status: 502 }
        );
      }

      const data = await res.json();
      const text = data.choices?.[0]?.message?.content;
      if (!text) {
        return NextResponse.json({ error: "Empty response from API" }, { status: 502 });
      }
      marking = JSON.parse(text);
    }

    // Validate required fields
    if (
      typeof marking.level !== "number" ||
      typeof marking.mark !== "number" ||
      !marking.grade ||
      !marking.ao1 ||
      !marking.ao2 ||
      !marking.ao3
    ) {
      return NextResponse.json(
        { error: "Invalid response format from AI", raw: marking },
        { status: 502 }
      );
    }

    // Ensure arrays exist
    marking.strengths = marking.strengths || [];
    marking.improvements = marking.improvements || [];
    marking.mistakes = marking.mistakes || [];
    // Use curated model paragraph if provided, otherwise keep AI-generated one
    if (body.modelParagraph) {
      marking.modelParagraph = body.modelParagraph;
    } else {
      marking.modelParagraph = marking.modelParagraph || "";
    }

    return NextResponse.json({ marking });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
