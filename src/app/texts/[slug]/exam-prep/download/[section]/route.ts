import { NextResponse } from "next/server";
import { getTextBySlug } from "@/data/text-registry";
import {
  INSPECTOR_CALLS_ESSAYS,
  INSPECTOR_CALLS_EXTRACTS,
  INSPECTOR_CALLS_ESSAY_PLANS,
  INSPECTOR_CALLS_EXAM_QUESTIONS,
  type ExampleEssay,
  type AnnotatedExtract,
  type ExtractAnnotation,
  type EssayPlan,
  type ExamPrepQuestion,
} from "@/data/exam-prep-inspector-calls";

/* ─── Colour constants (light theme) ─── */
const C = {
  teal: "#0E8A7D",    tealLight: "#E8F5F3",
  purple: "#6B4EAA",  purpleLight: "#F0ECF8",
  blue: "#3B7DDD",    blueLight: "#EBF2FC",
  orange: "#D46A27",  orangeLight: "#FDF2E9",
  green: "#2E8B57",   greenLight: "#E9F5EF",
  red: "#C0392B",     redLight: "#FBEAEA",
  text: "#1D1D1B",    grey: "#5F6368",
  border: "#E0E0DD",  bg: "#F7F7F5",
  surface: "#FFFFFF",
};

const CM: Record<string, { main: string; light: string }> = {
  red:    { main: C.red,    light: C.redLight },
  green:  { main: C.green,  light: C.greenLight },
  blue:   { main: C.blue,   light: C.blueLight },
  purple: { main: C.purple, light: C.purpleLight },
  orange: { main: C.orange, light: C.orangeLight },
  teal:   { main: C.teal,   light: C.tealLight },
};

const AO_COLOURS: Record<string, { bg: string; text: string }> = {
  AO1: { bg: C.tealLight,   text: C.teal },
  AO2: { bg: C.purpleLight, text: C.purple },
  AO3: { bg: C.orangeLight, text: C.orange },
};

/* ─── Helpers ─── */
function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function aoBadge(ao: string): string {
  const c = AO_COLOURS[ao] || AO_COLOURS.AO1;
  return `<span style="display:inline-flex;align-items:center;border-radius:9999px;background:${c.bg};color:${c.text};font-family:'Inter',sans-serif;font-weight:700;font-size:9px;padding:2px 8px;">${esc(ao)}</span>`;
}

function highlightExtract(text: string, annotations: ExtractAnnotation[]): string {
  let html = esc(text);
  const sorted = [...annotations].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const ann of sorted) {
    const col = CM[ann.colour] || CM.red;
    const escapedPhrase = esc(ann.phrase);
    html = html.replace(
      escapedPhrase,
      `<mark style="background:${col.light};border-bottom:2px solid ${col.main};padding:1px 3px;border-radius:2px;color:inherit;">${escapedPhrase}</mark>`
    );
  }
  return html.split("\n\n").map(p => `<p style="margin-bottom:0.75em;line-height:1.7;">${p}</p>`).join("");
}

/* ─── Base CSS ─── */
const BASE_CSS = `
*{margin:0;padding:0;box-sizing:border-box;}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
body{font-family:'Inter',system-ui,sans-serif;color:${C.text};background:white;line-height:1.6;font-size:13px;padding:0;margin:0;}
h1,h2,h3{font-family:'Lora',Georgia,serif;}
.page{max-width:210mm;margin:0 auto 1.5rem;padding:1.5rem;page-break-inside:avoid;}
.page-break{page-break-after:always;}
.no-print-bar{position:sticky;top:0;z-index:100;background:${C.teal};padding:12px 24px;display:flex;align-items:center;justify-content:space-between;}
.no-print-bar h1{color:white;font-size:16px;margin:0;}
.print-btn{background:white;color:${C.teal};border:none;padding:8px 20px;border-radius:8px;font-family:'Inter',sans-serif;font-weight:600;font-size:13px;cursor:pointer;}
.print-btn:hover{background:#f0f0f0;}
.card{background:white;border:1px solid ${C.border};border-radius:12px;overflow:hidden;margin-bottom:1.25rem;}
.card-header{padding:0.875rem 1.25rem;border-bottom:1px solid ${C.border};}
.card-body{padding:1.25rem;}
.badge{display:inline-flex;align-items:center;border-radius:9999px;font-family:'Inter',sans-serif;font-weight:700;font-size:11px;padding:3px 10px;}
.extract-grid{display:grid;grid-template-columns:1fr 2.2fr 1fr;gap:12px;align-items:start;}
.ann-col{display:flex;flex-direction:column;gap:8px;}
.ann-card{border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.4;}
.ann-card .phrase{font-style:italic;font-weight:600;margin-bottom:3px;font-size:10px;}
.ann-card .note{color:${C.text};}
mark{color:inherit;padding:1px 3px;border-radius:2px;}
.label{font-family:'Inter',sans-serif;font-weight:700;font-size:9px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;}
.essay-body p{margin-bottom:0.8em;line-height:1.7;font-size:13px;}
.td-card{border-left:3px solid ${C.purple};background:${C.purpleLight};border-radius:8px;padding:10px 12px;margin-bottom:6px;}
.ec-card{border-left:3px solid ${C.orange};background:${C.orangeLight};border-radius:8px;padding:10px 12px;margin-bottom:6px;}
.verdict-box{border:1px solid ${C.orange};background:${C.orangeLight};border-radius:8px;padding:12px;margin-top:8px;}
.analysis-box{background:${C.tealLight};border:1px solid rgba(14,138,125,0.2);border-radius:8px;padding:12px;margin-top:12px;}
.analysis-box ul{list-style:none;padding:0;}
.analysis-box li{display:flex;gap:6px;margin-bottom:5px;font-size:11.5px;line-height:1.4;}
.analysis-box li::before{content:'•';color:${C.teal};font-weight:bold;flex-shrink:0;}
.plan-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;}
.plan-cell .cell-label{font-family:'Inter',sans-serif;font-weight:600;font-size:9px;color:${C.grey};margin-bottom:2px;}
.blank-line{height:20px;border-bottom:2px dashed ${C.border};margin-bottom:3px;}
.extract-box{background:${C.bg};border:1px solid ${C.border};border-radius:8px;padding:14px;margin-bottom:14px;white-space:pre-line;font-size:12px;line-height:1.6;}
.q-box{border-radius:8px;padding:14px;margin-bottom:14px;}
.planning-lines .line{height:18px;border-bottom:1px dashed #ccc;}
.why-box{background:${C.tealLight};border:1px solid rgba(14,138,125,0.2);border-radius:6px;padding:8px 10px;margin-top:6px;}
.grade-box{background:${C.redLight};border:1px solid rgba(192,57,43,0.2);border-radius:6px;padding:8px 10px;margin-top:6px;}
.footer{text-align:right;font-family:'Inter',sans-serif;font-size:7px;color:${C.grey};border-top:1px solid ${C.border};padding:4px 12px;margin-top:0;}
@media print{
  @page{size:A4 portrait;margin:8mm;}
  body{font-size:10px;}
  .no-print,.no-print-bar{display:none!important;}
  .page{max-width:none;margin:0;padding:0;}
  .card{border-radius:0;page-break-inside:avoid;}
  .extract-grid{gap:6px;}
  .ann-card{font-size:8.5px;padding:5px 7px;}
  .ann-card .phrase{font-size:8px;}
  h1{font-size:14px;}h2{font-size:12px;}h3{font-size:10px;}
  .essay-body p{font-size:10px;margin-bottom:0.5em;line-height:1.5;}
  .td-card,.ec-card{padding:6px 8px;margin-bottom:4px;font-size:9px;}
  .plan-row{gap:6px;}
  .footer{font-size:6px;}
}
`;

function baseHTML(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>${BASE_CSS}</style>
</head>
<body>
<div class="no-print-bar no-print">
  <h1>${esc(title)}</h1>
  <button onclick="window.print()" class="print-btn">Print / Save as PDF</button>
</div>
${body}
</body>
</html>`;
}

/* ═══════════════════════════════════════════════════
   ESSAYS GENERATOR
   ═══════════════════════════════════════════════════ */
function generateEssays(textTitle: string, essays: ExampleEssay[]): string {
  return essays.map((essay, idx) => {
    const paras = essay.essay.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("");

    const tdSection = essay.techniqueDissections.length > 0 ? `
      <div class="card" style="border-color:rgba(107,78,170,0.3);">
        <div class="card-header" style="background:${C.purpleLight};border-color:rgba(107,78,170,0.2);">
          <h3 style="color:${C.purple};font-size:14px;">Technique Dissection</h3>
          <p style="font-size:10px;color:${C.grey};margin-top:2px;">Every technique this essay uses, why the student used it, and what made the examiner reward it</p>
        </div>
        <div class="card-body" style="padding:12px;">
          ${essay.techniqueDissections.map(td => `
            <div class="td-card">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                <span style="font-family:'Inter',sans-serif;font-weight:700;font-size:12px;color:${C.purple};">${esc(td.technique)}</span>
                ${aoBadge(td.ao)}
              </div>
              <div style="margin-bottom:5px;">
                <p class="label" style="color:${C.grey};">How the student used it</p>
                <p style="font-style:italic;font-size:11px;line-height:1.4;">${esc(td.termUsed)}</p>
              </div>
              <div style="margin-bottom:5px;">
                <p class="label" style="color:${C.grey};">Quote referenced</p>
                <p style="font-style:italic;font-size:11px;color:${C.purple};">${esc(td.quote)}</p>
              </div>
              <div class="why-box">
                <p class="label" style="color:${C.teal};">Why the examiner rewards this</p>
                <p style="font-size:11px;line-height:1.4;">${esc(td.whyItScores)}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>` : "";

    const ecSection = essay.examinerCommentary.length > 0 ? `
      <div class="card" style="border-color:rgba(212,106,39,0.3);">
        <div class="card-header" style="background:${C.orangeLight};border-color:rgba(212,106,39,0.2);">
          <h3 style="color:${C.orange};font-size:14px;">Examiner Commentary</h3>
          <p style="font-size:10px;color:${C.grey};margin-top:2px;">What the examiner sees in each paragraph and why it reaches Grade 9</p>
        </div>
        <div class="card-body" style="padding:12px;">
          ${essay.examinerCommentary.map(ec => `
            <div class="ec-card">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap;">
                <span style="font-family:'Inter',sans-serif;font-weight:700;font-size:12px;color:${C.orange};">Para ${ec.paragraph}: ${esc(ec.label)}</span>
                ${ec.aoCoverage.map(ao => aoBadge(ao)).join(" ")}
              </div>
              <div style="margin-bottom:5px;">
                <p class="label" style="color:${C.grey};">What the examiner sees</p>
                <p style="font-size:11px;line-height:1.4;">${esc(ec.whatExaminerSees)}</p>
              </div>
              <div class="grade-box">
                <p class="label" style="color:${C.red};">Why this is Grade 9</p>
                <p style="font-size:11px;line-height:1.4;">${esc(ec.gradeJustification)}</p>
              </div>
            </div>
          `).join("")}
        </div>
        ${essay.overallVerdict ? `
          <div style="padding:12px;border-top:1px solid rgba(212,106,39,0.2);background:${C.orangeLight};">
            <p class="label" style="color:${C.orange};">Overall Verdict</p>
            <p style="font-size:11.5px;line-height:1.5;">${esc(essay.overallVerdict)}</p>
          </div>
        ` : ""}
      </div>` : "";

    return `
      <div class="page ${idx < essays.length - 1 ? "page-break" : ""}">
        <div class="card">
          <div class="card-header" style="background:${C.tealLight};">
            <div style="display:flex;align-items:flex-start;gap:10px;">
              <span class="badge" style="background:${C.teal};color:white;flex-shrink:0;margin-top:2px;">${esc(essay.grade)}</span>
              <p style="font-family:'Lora',Georgia,serif;font-weight:700;font-size:13px;line-height:1.4;">${esc(essay.question)}</p>
            </div>
          </div>
          <div class="card-body essay-body">${paras}</div>
          <div class="footer">${esc(textTitle)} — Example Essay ${idx + 1} — GCSE Literature Revision</div>
        </div>
        ${tdSection}
        ${ecSection}
      </div>`;
  }).join("");
}

/* ═══════════════════════════════════════════════════
   EXTRACTS GENERATOR (margin annotations)
   ═══════════════════════════════════════════════════ */
function generateExtracts(textTitle: string, extracts: AnnotatedExtract[]): string {
  return extracts.map((ext, idx) => {
    const left = ext.annotations.filter(a => a.side === "left");
    const right = ext.annotations.filter(a => a.side === "right");

    function annCard(ann: ExtractAnnotation, side: "left" | "right"): string {
      const col = CM[ann.colour] || CM.red;
      const borderSide = side === "left" ? "border-right" : "border-left";
      return `<div class="ann-card" style="background:${col.light};${borderSide}:3px solid ${col.main};">
        <div class="phrase" style="color:${col.main};">"${esc(ann.phrase)}"</div>
        <div class="note">${esc(ann.note)}</div>
      </div>`;
    }

    return `
      <div class="page ${idx < extracts.length - 1 ? "page-break" : ""}">
        <div class="card">
          <div class="card-header" style="background:${C.tealLight};">
            <h2 style="font-size:15px;">${esc(ext.title)}</h2>
            <p style="font-size:10px;color:${C.grey};margin-top:2px;">${esc(ext.act)} — ${esc(textTitle)}</p>
          </div>
          <div class="card-body">
            <div style="margin-bottom:12px;">
              <p class="label" style="color:${C.grey};">Context</p>
              <p style="font-size:12px;line-height:1.5;">${esc(ext.context)}</p>
            </div>
            <div class="extract-grid">
              <div class="ann-col">${left.map(a => annCard(a, "left")).join("")}</div>
              <div style="background:${C.bg};border:1px solid ${C.border};border-radius:8px;padding:14px;font-size:12px;">
                ${highlightExtract(ext.extract, ext.annotations)}
              </div>
              <div class="ann-col">${right.map(a => annCard(a, "right")).join("")}</div>
            </div>
            <div class="analysis-box">
              <p class="label" style="color:${C.teal};">Key Analysis Points</p>
              <ul>${ext.overallAnalysis.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
            </div>
          </div>
          <div class="footer">${esc(textTitle)} — Annotated Extract — GCSE Literature Revision</div>
        </div>
      </div>`;
  }).join("");
}

/* ═══════════════════════════════════════════════════
   PLANS GENERATOR
   ═══════════════════════════════════════════════════ */
const ROW_COLOURS = [C.tealLight, C.purpleLight, C.blueLight, C.orangeLight, C.greenLight];
const ROW_ACCENTS = [C.teal, C.purple, C.blue, C.orange, C.green];

function generatePlans(textTitle: string, plans: EssayPlan[]): string {
  let html = "";

  for (let idx = 0; idx < plans.length; idx++) {
    const plan = plans[idx];
    html += `
      <div class="page page-break">
        <div class="card">
          <div class="card-header" style="background:${C.tealLight};">
            <div style="display:flex;align-items:flex-start;gap:10px;">
              <span class="badge" style="background:${C.teal};color:white;flex-shrink:0;margin-top:2px;">EXAMPLE</span>
              <p style="font-family:'Lora',Georgia,serif;font-weight:700;font-size:13px;line-height:1.4;">${esc(plan.question)}</p>
            </div>
          </div>
          <div style="padding:0;">
            <div style="padding:10px 16px;border-bottom:1px solid ${C.border};">
              <p class="label" style="color:${C.red};">Line of Argument</p>
              <p style="font-size:11.5px;line-height:1.4;">${esc(plan.lineOfArgument)}</p>
            </div>
            <div style="padding:10px 16px;border-bottom:1px solid ${C.border};background:${C.bg};">
              <p class="label" style="color:${C.grey};">Introduction</p>
              <p style="font-size:11.5px;line-height:1.4;">${esc(plan.intro)}</p>
            </div>
            ${plan.parts.map((part, pIdx) => `
              <div style="padding:10px 16px;border-bottom:1px solid ${C.border};background:${ROW_COLOURS[pIdx % ROW_COLOURS.length]};">
                <p class="label" style="color:${ROW_ACCENTS[pIdx % ROW_ACCENTS.length]};">${esc(part.label)}</p>
                <div class="plan-row">
                  <div class="plan-cell"><div class="cell-label">Point</div><p style="font-size:11px;line-height:1.4;">${esc(part.point)}</p></div>
                  <div class="plan-cell"><div class="cell-label">Quote</div><p style="font-size:11px;line-height:1.4;font-style:italic;">${esc(part.quote)}</p></div>
                  <div class="plan-cell"><div class="cell-label">Analysis</div><p style="font-size:11px;line-height:1.4;">${esc(part.analysis)}</p></div>
                </div>
              </div>
            `).join("")}
            <div style="padding:10px 16px;background:${C.bg};">
              <p class="label" style="color:${C.grey};">Conclusion</p>
              <p style="font-size:11.5px;line-height:1.4;">${esc(plan.conclusion)}</p>
            </div>
          </div>
          <div class="footer">${esc(textTitle)} — Essay Plan — GCSE Literature Revision</div>
        </div>
      </div>`;
  }

  // Blank templates
  for (let idx = 0; idx < plans.length; idx++) {
    const plan = plans[idx];
    html += `
      <div class="page page-break">
        <div class="card">
          <div class="card-header" style="background:${C.orangeLight};">
            <div style="display:flex;align-items:flex-start;gap:10px;">
              <span class="badge" style="background:${C.orange};color:white;flex-shrink:0;margin-top:2px;">BLANK</span>
              <p style="font-family:'Lora',Georgia,serif;font-weight:700;font-size:13px;line-height:1.4;">${esc(plan.question)}</p>
            </div>
          </div>
          <div style="padding:0;">
            <div style="padding:12px 16px;border-bottom:1px solid ${C.border};">
              <p class="label" style="color:${C.red};">Line of Argument</p>
              <div class="blank-line"></div><div class="blank-line"></div>
            </div>
            <div style="padding:12px 16px;border-bottom:1px solid ${C.border};">
              <p class="label" style="color:${C.grey};">Introduction</p>
              <div class="blank-line"></div><div class="blank-line"></div>
            </div>
            ${plan.parts.map((part, pIdx) => `
              <div style="padding:12px 16px;border-bottom:1px solid ${C.border};background:${ROW_COLOURS[pIdx % ROW_COLOURS.length]};">
                <p class="label" style="color:${ROW_ACCENTS[pIdx % ROW_ACCENTS.length]};">${esc(part.label)}</p>
                <div class="plan-row">
                  <div class="plan-cell"><div class="cell-label">Point</div><div class="blank-line"></div></div>
                  <div class="plan-cell"><div class="cell-label">Quote</div><div class="blank-line"></div></div>
                  <div class="plan-cell"><div class="cell-label">Analysis</div><div class="blank-line"></div></div>
                </div>
              </div>
            `).join("")}
            <div style="padding:12px 16px;">
              <p class="label" style="color:${C.grey};">Conclusion</p>
              <div class="blank-line"></div><div class="blank-line"></div>
            </div>
          </div>
          <div class="footer">${esc(textTitle)} — Blank Essay Plan — GCSE Literature Revision</div>
        </div>
      </div>`;
  }

  return html;
}

/* ═══════════════════════════════════════════════════
   QUESTIONS GENERATOR
   ═══════════════════════════════════════════════════ */
const THEME_CM: Record<string, { main: string; light: string }> = {
  "Social Responsibility":   { main: C.teal,   light: C.tealLight },
  "Class & Power":           { main: C.purple, light: C.purpleLight },
  "Generational Divide":     { main: C.blue,   light: C.blueLight },
  "Gender & Exploitation":   { main: C.red,    light: C.redLight },
  "Artifice & Pretence":     { main: C.orange, light: C.orangeLight },
  "Character: Mr Birling":   { main: C.red,    light: C.redLight },
};
const DEFAULT_THEME = { main: C.grey, light: C.bg };

function generateQuestions(textTitle: string, questions: ExamPrepQuestion[]): string {
  return questions.map((q, idx) => {
    const tc = THEME_CM[q.theme] || DEFAULT_THEME;
    return `
      <div class="page ${idx < questions.length - 1 ? "page-break" : ""}">
        <div class="card">
          <div class="card-header" style="display:flex;align-items:center;justify-content:space-between;">
            <p style="font-family:'Inter',sans-serif;font-weight:700;font-size:12px;">Question ${idx + 1}</p>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="badge" style="background:${tc.light};color:${tc.main};">${esc(q.theme)}</span>
              <span style="font-size:10px;color:${C.grey};">${esc(q.extractAct)}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="extract-box">
              <p class="label" style="color:${C.teal};margin-bottom:6px;">Read the following extract from ${esc(q.extractAct)} and then answer the question that follows.</p>
              ${esc(q.extract)}
            </div>
            <div class="q-box" style="background:${tc.light};border:1px solid ${tc.main}20;">
              <p style="font-family:'Lora',Georgia,serif;font-weight:700;font-size:13px;line-height:1.4;">${esc(q.question)}</p>
              <p style="font-size:10px;color:${C.grey};margin-top:6px;">Write about the whole text in your answer.<br>[30 marks] AO1, AO2, AO3</p>
            </div>
            <div class="planning-lines" style="margin-top:12px;">
              <p class="label" style="color:${C.grey};">Planning Space</p>
              ${Array.from({ length: 8 }).map(() => '<div class="line"></div>').join("")}
            </div>
          </div>
          <div class="footer">${esc(textTitle)} — Practice Question ${idx + 1} — GCSE Literature Revision</div>
        </div>
      </div>`;
  }).join("");
}

/* ═══════════════════════════════════════════════════
   ROUTE HANDLER
   ═══════════════════════════════════════════════════ */
function getData(slug: string) {
  if (slug === "inspector-calls") {
    return {
      essays: INSPECTOR_CALLS_ESSAYS,
      extracts: INSPECTOR_CALLS_EXTRACTS,
      plans: INSPECTOR_CALLS_ESSAY_PLANS,
      questions: INSPECTOR_CALLS_EXAM_QUESTIONS,
    };
  }
  return null;
}

interface RouteParams {
  params: Promise<{ slug: string; section: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const { slug, section } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const data = getData(slug);
  if (!data) {
    return NextResponse.json({ error: "No exam prep data" }, { status: 404 });
  }

  let html = "";
  let filename = "";

  switch (section) {
    case "essays":
      html = baseHTML(
        `Example Essays — ${text.title}`,
        generateEssays(text.title, data.essays),
      );
      filename = `${slug}-example-essays.html`;
      break;
    case "extracts":
      html = baseHTML(
        `Annotated Extracts — ${text.title}`,
        generateExtracts(text.title, data.extracts),
      );
      filename = `${slug}-annotated-extracts.html`;
      break;
    case "plans":
      html = baseHTML(
        `Essay Plans — ${text.title}`,
        generatePlans(text.title, data.plans),
      );
      filename = `${slug}-essay-plans.html`;
      break;
    case "questions":
      html = baseHTML(
        `Practice Questions — ${text.title}`,
        generateQuestions(text.title, data.questions),
      );
      filename = `${slug}-practice-questions.html`;
      break;
    default:
      return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
