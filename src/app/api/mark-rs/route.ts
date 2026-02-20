import { NextRequest, NextResponse } from "next/server";

// ─── AQA RS (Religious Studies) Examiner Prompts by Mark Tariff ───

function build1MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Religious Studies (Specification A) examiner with 15+ years experience.

TASK: Mark this 1-mark question against the AQA GCSE RS A mark scheme.

AQA MARKING (1-mark questions):
Award 1 mark for a correct, simple identification or definition.
0 marks for an incorrect or irrelevant response.

ASSESSMENT OBJECTIVES (1 mark total):
AO1 (1 mark): Demonstrate knowledge and understanding of religion and belief, including beliefs, practices, sources of authority, influence on individuals, communities, and societies.

Respond ONLY in this JSON format:
{
  "level": <0 or 1>,
  "mark": <0-1>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-1>, "feedback": "<specific feedback on knowledge recall>" },
  "ao2": { "mark": 0, "feedback": "Not assessed in 1-mark questions." },
  "ao3": { "mark": 0, "feedback": "" },
  "strengths": ["<strength 1>"],
  "improvements": ["<improvement 1>"],
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

function build2MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Religious Studies (Specification A) examiner with 15+ years experience.

TASK: Mark this 2-mark question against the AQA GCSE RS A mark scheme.

AQA MARKING (2-mark questions):
Award 1 mark for each simple point made, up to 2 marks.
Alternatively, award 1 mark for a simple point and 1 mark for development of that point.
0 marks for an incorrect or irrelevant response.

ASSESSMENT OBJECTIVES (2 marks total):
AO1 (2 marks): Demonstrate knowledge and understanding of religion and belief, including beliefs, practices, sources of authority, influence on individuals, communities, and societies.

Respond ONLY in this JSON format:
{
  "level": <0-1>,
  "mark": <0-2>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-2>, "feedback": "<specific feedback on knowledge recall>" },
  "ao2": { "mark": 0, "feedback": "Not assessed in 2-mark questions." },
  "ao3": { "mark": 0, "feedback": "" },
  "strengths": ["<strength 1>"],
  "improvements": ["<improvement 1>"],
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

function build4MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Religious Studies (Specification A) examiner with 15+ years experience.

TASK: Mark this 4-mark "Explain two" question against the AQA GCSE RS A mark scheme.

AQA MARKING (4-mark questions):
Award up to 2 marks for each of two beliefs/teachings/practices explained.
For each point: 1 mark for a simple explanation, 2 marks for a developed explanation showing clear understanding.

ASSESSMENT OBJECTIVES (4 marks total):
AO1 (4 marks): Demonstrate knowledge and understanding of religion and belief, including beliefs, practices, sources of authority, influence on individuals, communities, and societies.

Respond ONLY in this JSON format:
{
  "level": <1-2>,
  "mark": <0-4>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-4>, "feedback": "<specific feedback on knowledge and development of explanations>" },
  "ao2": { "mark": 0, "feedback": "Not assessed in 4-mark questions." },
  "ao3": { "mark": 0, "feedback": "" },
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

function build5MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Religious Studies (Specification A) examiner with 15+ years experience.

TASK: Mark this 5-mark "Explain two beliefs + refer to scripture/source of wisdom" question against the AQA GCSE RS A mark scheme.

AQA MARKING (5-mark questions):
Award up to 2 marks for each of two beliefs/teachings explained (4 marks max for explanations).
Award 1 additional mark for a relevant reference to scripture or another source of wisdom and authority.
For each explanation: 1 mark for a simple explanation, 2 marks for a developed explanation.
The scripture/source of wisdom reference must be relevant and applied, not just named.

ASSESSMENT OBJECTIVES (5 marks total):
AO1 (5 marks): Demonstrate knowledge and understanding of religion and belief, including sources of wisdom and authority.

Respond ONLY in this JSON format:
{
  "level": <1-2>,
  "mark": <0-5>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-5>, "feedback": "<specific feedback on knowledge, development, and use of scripture/sources of wisdom>" },
  "ao2": { "mark": 0, "feedback": "Not assessed in 5-mark questions." },
  "ao3": { "mark": 0, "feedback": "" },
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

function build12MarkPrompt(targetGrade?: number): string {
  let prompt = `You are a senior AQA GCSE Religious Studies (Specification A) examiner with 15+ years experience.

TASK: Mark this 12-mark "Evaluate a statement" question against the AQA GCSE RS A mark scheme. Note: SPaG (Spelling, Punctuation, Grammar, and specialist terminology) is assessed separately for +3 marks — do NOT include SPaG in the 12-mark total but DO comment on SPaG quality in your feedback.

AQA LEVELS (12-mark questions):
Level 1 (1-3): Basic. Limited knowledge. Simple, unsupported opinions. Limited or no use of specialist terminology.
Level 2 (4-6): Clear. Some relevant knowledge and understanding. Viewpoints developed with some reasoning. Some use of specialist terminology.
Level 3 (7-9): Good. Mostly accurate knowledge and understanding. Arguments well-developed with some balance. Good use of specialist terminology. Reference to sources of wisdom and authority.
Level 4 (10-12): Excellent. Accurate, relevant, and detailed knowledge and understanding. Thorough, well-balanced evaluation. Well-reasoned, justified conclusion. Consistent, accurate use of specialist terminology. Effective reference to sources of wisdom and authority. Consideration of divergent viewpoints (religious and non-religious).

ASSESSMENT OBJECTIVES (12 marks total):
AO1 (6 marks): Demonstrate knowledge and understanding of religion and belief, including beliefs, practices, sources of wisdom and authority, influence on individuals, communities, and societies.
AO2 (6 marks): Analyse and evaluate aspects of religion and belief, including significance, influence, and making reasoned and informed judgements.

The student must:
- Present arguments FOR and AGAINST the statement
- Refer to religious arguments and, where appropriate, non-religious arguments
- Reference sources of wisdom and authority (e.g. scripture, religious leaders, scholars)
- Consider divergent viewpoints within and between religions
- Reach a justified conclusion

Respond ONLY in this JSON format:
{
  "level": <1-4>,
  "mark": <0-12>,
  "grade": "<estimated 1-9>",
  "ao1": { "mark": <0-6>, "feedback": "<specific feedback on knowledge of beliefs, teachings, sources of wisdom>" },
  "ao2": { "mark": <0-6>, "feedback": "<specific feedback on analysis, evaluation, balance of arguments, quality of conclusion>" },
  "ao3": { "mark": 0, "feedback": "" },
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
  if (marks <= 1) return build1MarkPrompt(targetGrade);
  if (marks <= 2) return build2MarkPrompt(targetGrade);
  if (marks <= 4) return build4MarkPrompt(targetGrade);
  if (marks <= 5) return build5MarkPrompt(targetGrade);
  return build12MarkPrompt(targetGrade);
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
      !marking.ao2
    ) {
      return NextResponse.json({ error: "Invalid response format from AI", raw: marking }, { status: 502 });
    }

    // Ensure ao3 is always present with zero values for RS (only 2 AOs)
    marking.ao3 = { mark: 0, feedback: "" };
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
