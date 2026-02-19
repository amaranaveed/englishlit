import { NextRequest, NextResponse } from "next/server";

// ─── AQA Geography Examiner Prompts by Mark Tariff ───

function build4MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Geography examiner with 15+ years experience.

TASK: Mark this 4-mark "Describe" question against the AQA Geography mark scheme.

AQA LEVELS (4-mark questions):
Level 1 (1-2): Basic. One or two simple points with limited or no development.
Level 2 (3-4): Clear. Developed description with specific detail, accurate geographical terminology, and linked points.

ASSESSMENT OBJECTIVES (4 marks total):
AO1 (2 marks): Demonstrate knowledge of locations, places, processes, environments and different scales.
AO2 (2 marks): Demonstrate geographical understanding of concepts, processes, interactions and change.

Respond ONLY in this JSON format:
{
  "level": <1-2>,
  "mark": <0-4>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-2>, "feedback": "<specific feedback on knowledge recall>" },
  "ao2": { "mark": <0-2>, "feedback": "<specific feedback on understanding>" },
  "ao3": { "mark": 0, "feedback": "Not assessed in 4-mark questions." },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>"],
  "mistakes": [
    { "topic": "<what they got wrong>", "correction": "<what they should know>" }
  ],
  "modelParagraph": "<Write a model answer for this question at the level specified below>"
}`;

  if (targetGrade) {
    prompt += `\n\nSTUDENT CONTEXT: Target grade is ${targetGrade}. Frame feedback relative to that grade.\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade ${targetGrade} level.`;
  } else {
    prompt += `\n\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade 8/9 level.`;
  }
  return prompt;
}

function build6MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Geography examiner with 15+ years experience.

TASK: Mark this 6-mark "Explain" question against the AQA Geography mark scheme.

AQA LEVELS (6-mark questions):
Level 1 (1-2): Basic. Limited knowledge shown. Simple statements, little or no use of examples.
Level 2 (3-4): Clear. Some knowledge and understanding. Partial explanations with some links between factors. Some use of geographical terminology.
Level 3 (5-6): Detailed. Thorough knowledge and understanding. Well-developed explanations with clear links. Accurate use of geographical terminology. Specific named examples where appropriate.

ASSESSMENT OBJECTIVES (6 marks total):
AO1 (2 marks): Demonstrate knowledge of locations, places, processes, environments and different scales.
AO2 (2 marks): Demonstrate geographical understanding of concepts, processes, interactions and change.
AO3 (2 marks): Apply knowledge and understanding to interpret, analyse and evaluate geographical information.

Respond ONLY in this JSON format:
{
  "level": <1-3>,
  "mark": <0-6>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-2>, "feedback": "<specific feedback on knowledge>" },
  "ao2": { "mark": <0-2>, "feedback": "<specific feedback on understanding>" },
  "ao3": { "mark": <0-2>, "feedback": "<specific feedback on application/analysis>" },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>"],
  "mistakes": [
    { "topic": "<what they got wrong>", "correction": "<what they should know>" }
  ],
  "modelParagraph": "<Write a model answer for this question at the level specified below>"
}`;

  if (targetGrade) {
    prompt += `\n\nSTUDENT CONTEXT: Target grade is ${targetGrade}. Frame feedback relative to that grade.\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade ${targetGrade} level.`;
  } else {
    prompt += `\n\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade 8/9 level.`;
  }
  return prompt;
}

function build9MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Geography examiner with 15+ years experience.

TASK: Mark this 9-mark "Evaluate/Discuss" question against the AQA Geography mark scheme. Note: SPaG (Spelling, Punctuation, and Grammar) is assessed separately for +3 marks — do NOT include SPaG in the 9-mark total but DO comment on SPaG quality in your feedback.

AQA LEVELS (9-mark questions):
Level 1 (1-3): Basic. Limited knowledge and understanding. Simple statements with limited evidence. Little or no evaluation/judgement.
Level 2 (4-6): Clear. Some knowledge and understanding with evidence. Attempts evaluation but may be one-sided or lack balance. Some use of geographical terminology.
Level 3 (7-9): Detailed. Thorough knowledge and understanding with specific, accurate evidence. Balanced evaluation with well-reasoned judgement. Accurate and consistent use of geographical terminology. Named case studies/examples used effectively.

ASSESSMENT OBJECTIVES (9 marks total):
AO1 (3 marks): Demonstrate knowledge of locations, places, processes, environments and different scales.
AO2 (3 marks): Demonstrate geographical understanding of concepts, processes, interactions and change.
AO3 (3 marks): Apply knowledge and understanding to interpret, analyse and evaluate geographical information and issues to make judgements.

Respond ONLY in this JSON format:
{
  "level": <1-3>,
  "mark": <0-9>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-3>, "feedback": "<specific feedback on knowledge and case studies>" },
  "ao2": { "mark": <0-3>, "feedback": "<specific feedback on understanding and explanation>" },
  "ao3": { "mark": <0-3>, "feedback": "<specific feedback on evaluation, balance and judgement>" },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>"],
  "mistakes": [
    { "topic": "<what they got wrong>", "correction": "<what they should know>" }
  ],
  "modelParagraph": "<Write a model answer for this question at the level specified below>"
}`;

  if (targetGrade) {
    prompt += `\n\nSTUDENT CONTEXT: Target grade is ${targetGrade}. Frame feedback relative to that grade.\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade ${targetGrade} level.`;
  } else {
    prompt += `\n\nMODEL PARAGRAPH GRADE: Write the modelParagraph at Grade 8/9 level.`;
  }
  return prompt;
}

function getExaminerPrompt(marks: number, targetGrade?: number): string {
  if (marks <= 4) return build4MarkPrompt(targetGrade);
  if (marks <= 6) return build6MarkPrompt(targetGrade);
  return build9MarkPrompt(targetGrade);
}

// ─── Request/Response types ───
interface MarkRequest {
  topicName: string;
  question: string;
  answer: string;
  marks: number;
  targetGrade?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as MarkRequest;

    if (!body.topicName || !body.question || !body.answer || !body.marks) {
      return NextResponse.json(
        { error: "Missing required fields: topicName, question, answer, marks" },
        { status: 400 }
      );
    }

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

    const systemPrompt = getExaminerPrompt(body.marks, body.targetGrade);
    const userMessage = `TOPIC: ${body.topicName}\nQUESTION: ${body.question}\n\nSTUDENT RESPONSE:\n${body.answer}`;

    let marking;

    if (provider === "gemini") {
      const model = process.env.GEMINI_MODEL || "gemini-3-flash-preview";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
          generationConfig: { responseMimeType: "application/json", maxOutputTokens: 4000 },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `Gemini API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) return NextResponse.json({ error: "Empty response from Gemini API" }, { status: 502 });
      marking = JSON.parse(text);
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
          system: systemPrompt,
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `Anthropic API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      const text = data.content?.[0]?.text;
      if (!text) return NextResponse.json({ error: "Empty response from API" }, { status: 502 });
      marking = JSON.parse(text);
    } else {
      const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
      const model = process.env.OPENAI_MODEL || "gpt-4o";

      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          max_tokens: 4000,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return NextResponse.json({ error: `OpenAI API error: ${res.status} ${err}` }, { status: 502 });
      }

      const data = await res.json();
      const text = data.choices?.[0]?.message?.content;
      if (!text) return NextResponse.json({ error: "Empty response from API" }, { status: 502 });
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
      return NextResponse.json({ error: "Invalid response format from AI", raw: marking }, { status: 502 });
    }

    marking.strengths = marking.strengths || [];
    marking.improvements = marking.improvements || [];
    marking.mistakes = marking.mistakes || [];
    marking.modelParagraph = marking.modelParagraph || "";

    return NextResponse.json({ marking });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
