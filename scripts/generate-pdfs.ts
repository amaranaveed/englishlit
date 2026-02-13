/**
 * generate-pdfs.ts
 * Generates professional A4 study-material PDFs for An Inspector Calls exam prep.
 * Run: npx tsx scripts/generate-pdfs.ts
 */
import fs from "fs";
import path from "path";
// pdfmake v0.3 exports Printer from js/Printer.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PdfPrinter = require("pdfmake/js/Printer").default;
import type { TDocumentDefinitions, Content, TableCell } from "pdfmake/interfaces";

import {
  INSPECTOR_CALLS_ESSAYS,
  INSPECTOR_CALLS_EXTRACTS,
  INSPECTOR_CALLS_ESSAY_PLANS,
  INSPECTOR_CALLS_EXAM_QUESTIONS,
} from "../src/data/exam-prep-inspector-calls";

// ─── Colours ───
const C = {
  teal: "#0D9488",
  tealLight: "#F0FDFA",
  navy: "#1E3A5F",
  dark: "#1F2937",
  text: "#374151",
  grey: "#6B7280",
  lightGrey: "#F3F4F6",
  purple: "#6B4EAA",
  purpleLight: "#F5F3FF",
  orange: "#D46A27",
  orangeLight: "#FFF7ED",
  blue: "#3B7DDD",
  blueLight: "#EFF6FF",
  green: "#16A34A",
  greenLight: "#F0FDF4",
  red: "#DC2626",
  redLight: "#FEF2F2",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

const AO_COLOURS: Record<string, { bg: string; text: string }> = {
  AO1: { bg: C.blue, text: C.white },
  AO2: { bg: C.purple, text: C.white },
  AO3: { bg: C.orange, text: C.white },
};

const ANNOTATION_COLOURS: Record<string, string> = {
  red: C.red,
  green: C.green,
  blue: C.blue,
  purple: C.purple,
  orange: C.orange,
};

// ─── Font setup ───
const fontDir = path.resolve("node_modules/pdfmake/fonts/Roboto");
const fonts = {
  Roboto: {
    normal: path.join(fontDir, "Roboto-Regular.ttf"),
    bold: path.join(fontDir, "Roboto-Medium.ttf"),
    italics: path.join(fontDir, "Roboto-Italic.ttf"),
    bolditalics: path.join(fontDir, "Roboto-MediumItalic.ttf"),
  },
};

const printer = new PdfPrinter(fonts);
const OUT_DIR = path.resolve("public/downloads/inspector-calls");

// ─── Helpers ───

function spacer(h: number): Content {
  return { text: "", margin: [0, 0, 0, h] };
}

function hrLine(colour = C.teal, width = 495): Content {
  return {
    canvas: [{ type: "line", x1: 0, y1: 0, x2: width, y2: 0, lineWidth: 2, lineColor: colour }],
    margin: [0, 5, 0, 5],
  };
}

function sectionHeader(title: string, colour = C.teal): Content {
  return {
    stack: [
      { text: title.toUpperCase(), fontSize: 13, bold: true, color: colour, characterSpacing: 1.5, margin: [0, 0, 0, 4] },
      { canvas: [{ type: "line", x1: 0, y1: 0, x2: 495, y2: 0, lineWidth: 2, lineColor: colour }], margin: [0, 0, 0, 10] },
    ],
    margin: [0, 15, 0, 0],
  };
}

function calloutBox(title: string, body: Content[], borderColour: string, bgColour: string): Content {
  return {
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              { text: title.toUpperCase(), fontSize: 9, bold: true, color: borderColour, characterSpacing: 1, margin: [0, 0, 0, 6] },
              ...body,
            ],
            margin: [12, 10, 12, 10],
            fillColor: bgColour,
          },
        ],
      ],
    },
    layout: {
      hLineWidth: () => 0,
      vLineWidth: (i: number) => (i === 0 ? 4 : 0),
      vLineColor: () => borderColour,
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    margin: [0, 6, 0, 6],
  };
}

function aoBadge(ao: string): Content {
  const c = AO_COLOURS[ao] || AO_COLOURS.AO1;
  return {
    text: ` ${ao} `,
    fontSize: 8,
    bold: true,
    color: c.text,
    background: c.bg,
    margin: [0, 0, 4, 0],
  };
}

function aoBadgesInline(aos: string[]): Content {
  return {
    columns: aos.map((ao) => ({
      width: "auto",
      text: ` ${ao} `,
      fontSize: 8,
      bold: true,
      color: AO_COLOURS[ao]?.text || C.white,
      background: AO_COLOURS[ao]?.bg || C.blue,
      margin: [0, 0, 6, 0],
    })),
    columnGap: 0,
    margin: [0, 4, 0, 4],
  };
}

function quoteBox(text: string): Content {
  return {
    table: {
      widths: ["*"],
      body: [[{
        text,
        fontSize: 10,
        italics: true,
        color: C.dark,
        margin: [14, 10, 14, 10],
        fillColor: C.lightGrey,
        lineHeight: 1.5,
      }]],
    },
    layout: {
      hLineWidth: () => 0,
      vLineWidth: (i: number) => (i === 0 ? 3 : 0),
      vLineColor: () => C.grey,
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    margin: [0, 6, 0, 6],
  };
}

function coverPage(title: string, subtitle: string, details: string[], colour: string): Content[] {
  return [
    spacer(120),
    { text: "An Inspector Calls", fontSize: 34, bold: true, color: C.navy, alignment: "center" as const },
    { text: "by J.B. Priestley", fontSize: 14, italics: true, color: C.grey, alignment: "center" as const, margin: [0, 8, 0, 30] },
    {
      canvas: [{ type: "line", x1: 170, y1: 0, x2: 325, y2: 0, lineWidth: 3, lineColor: colour }],
      alignment: "center" as const,
    },
    spacer(25),
    { text: title, fontSize: 24, bold: true, color: colour, alignment: "center" as const },
    { text: subtitle, fontSize: 13, color: C.grey, alignment: "center" as const, margin: [0, 8, 0, 30] },
    ...details.map((d) => ({
      text: d,
      fontSize: 11,
      color: C.text,
      alignment: "center" as const,
      margin: [0, 3, 0, 3] as [number, number, number, number],
    })),
    spacer(60),
    { text: "GCSE English Literature  |  AQA Paper 2, Section A", fontSize: 10, color: C.grey, alignment: "center" as const },
    { text: "Grade 9 Targeted", fontSize: 12, bold: true, color: colour, alignment: "center" as const, margin: [0, 8, 0, 0] },
    { text: "", pageBreak: "after" as const },
  ];
}

function pageHeader(titleLeft: string, titleRight: string, colour: string) {
  return (currentPage: number, pageCount: number): Content => {
    if (currentPage === 1) return { text: "" };
    return {
      columns: [
        { text: titleLeft, fontSize: 8, bold: true, color: colour, margin: [50, 20, 0, 0] },
        { text: titleRight, fontSize: 8, color: C.grey, alignment: "right" as const, margin: [0, 20, 50, 0] },
      ],
    };
  };
}

function pageFooter(colour: string) {
  return (currentPage: number, pageCount: number): Content => {
    if (currentPage === 1) return { text: "" };
    return {
      columns: [
        { text: "GCSE Literature Revision", fontSize: 7, color: C.grey, margin: [50, 0, 0, 0] },
        { text: `${currentPage} / ${pageCount}`, fontSize: 8, color: colour, bold: true, alignment: "right" as const, margin: [0, 0, 50, 0] },
      ],
      margin: [0, 10, 0, 0],
    };
  };
}

// ─── ESSAYS PDF ───

async function generateEssaysPDF(): Promise<void> {
  const content: Content[] = [
    ...coverPage(
      "Grade 9 Model Essays",
      "with Technique Dissection & Examiner Commentary",
      [
        `${INSPECTOR_CALLS_ESSAYS.length} full-length Grade 9 essays`,
        "Technique-by-technique dissection showing what scored marks",
        "Paragraph-by-paragraph examiner commentary",
        "Overall verdict explaining the grade",
      ],
      C.teal
    ),
  ];

  INSPECTOR_CALLS_ESSAYS.forEach((essay, idx) => {
    // Question header
    content.push(
      calloutBox("Exam Question", [
        { text: essay.question, fontSize: 12, bold: true, color: C.dark, lineHeight: 1.4 },
      ], C.teal, C.tealLight)
    );

    // Grade badge
    content.push({
      table: {
        widths: ["auto"],
        body: [[{ text: `  ${essay.grade}  `, fontSize: 10, bold: true, color: C.white, fillColor: C.teal, margin: [8, 4, 8, 4] }]],
      },
      layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 0, paddingBottom: () => 0 },
      margin: [0, 8, 0, 12],
    });

    // Essay text
    content.push(sectionHeader("Model Essay", C.navy));

    const paragraphs = essay.essay.split("\n\n");
    paragraphs.forEach((p) => {
      content.push({ text: p, fontSize: 10.5, color: C.dark, lineHeight: 1.65, margin: [0, 0, 0, 10] });
    });

    // ── Technique Dissection ──
    content.push(sectionHeader("Technique Dissection", C.purple));

    content.push(
      calloutBox("What makes this a Grade 9 essay?", [
        { text: "Below we break down each technique the student used — the terminology, the quote, the Assessment Objective it targets, and why the examiner would reward it.", fontSize: 9.5, color: C.text, lineHeight: 1.4 },
      ], C.purple, C.purpleLight)
    );

    essay.techniqueDissections.forEach((td, tIdx) => {
      const items: Content[] = [
        { text: `${tIdx + 1}. ${td.technique}`, fontSize: 11, bold: true, color: C.purple, margin: [0, 0, 0, 4] },
        { text: [{ text: "Term used: ", bold: true, color: C.grey, fontSize: 9 }, { text: td.termUsed, italics: true, color: C.text, fontSize: 9.5 }], margin: [0, 0, 0, 3] },
      ];

      if (td.quote !== "N/A — contextual framing" && !td.quote.startsWith("structural analysis") && !td.quote.startsWith("conceptual argument")) {
        items.push({ text: [{ text: "Quote: ", bold: true, color: C.grey, fontSize: 9 }, { text: td.quote, italics: true, color: C.text, fontSize: 9.5 }], margin: [0, 0, 0, 3] });
      }

      items.push(
        aoBadge(td.ao),
        { text: td.whyItScores, fontSize: 9.5, color: C.text, lineHeight: 1.45, margin: [0, 4, 0, 0] },
      );

      content.push({
        table: {
          widths: ["*"],
          body: [[{ stack: items, margin: [12, 10, 12, 10], fillColor: idx % 2 === 0 ? C.purpleLight : C.white }]],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => "#E9E4F5",
          vLineColor: () => "#E9E4F5",
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 4, 0, 4],
      });
    });

    // ── Examiner Commentary ──
    content.push(sectionHeader("Examiner Commentary", C.orange));

    content.push(
      calloutBox("Paragraph-by-paragraph breakdown", [
        { text: "This section shows what the examiner would notice in each paragraph, which Assessment Objectives are covered, and why the work reaches Grade 9.", fontSize: 9.5, color: C.text, lineHeight: 1.4 },
      ], C.orange, C.orangeLight)
    );

    essay.examinerCommentary.forEach((ec) => {
      content.push({
        table: {
          widths: ["*"],
          body: [[{
            stack: [
              {
                columns: [
                  { width: "auto", text: `¶${ec.paragraph}`, fontSize: 9, bold: true, color: C.white, background: C.orange, margin: [0, 0, 8, 0] },
                  { width: "*", text: ec.label, fontSize: 11, bold: true, color: C.orange },
                ],
                margin: [0, 0, 0, 6],
              },
              { text: [{ text: "What the examiner sees: ", bold: true, fontSize: 9, color: C.grey }, { text: ec.whatExaminerSees, fontSize: 9.5, color: C.text }], lineHeight: 1.4, margin: [0, 0, 0, 4] },
              aoBadgesInline(ec.aoCoverage),
              { text: [{ text: "Grade justification: ", bold: true, fontSize: 9, color: C.grey }, { text: ec.gradeJustification, fontSize: 9.5, color: C.text }], lineHeight: 1.4 },
            ],
            margin: [12, 10, 12, 10],
            fillColor: C.orangeLight,
          }]],
        },
        layout: {
          hLineWidth: () => 0,
          vLineWidth: (i: number) => (i === 0 ? 3 : 0),
          vLineColor: () => C.orange,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 4, 0, 4],
      });
    });

    // ── Overall Verdict ──
    content.push(
      calloutBox("Overall Verdict", [
        { text: essay.overallVerdict, fontSize: 10, color: C.dark, lineHeight: 1.5 },
      ], C.green, C.greenLight)
    );

    // Page break between essays (not after last)
    if (idx < INSPECTOR_CALLS_ESSAYS.length - 1) {
      content.push({ text: "", pageBreak: "after" });
    }
  });

  const docDef: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [50, 55, 50, 50],
    header: pageHeader("AN INSPECTOR CALLS", "Grade 9 Model Essays", C.teal),
    footer: pageFooter(C.teal),
    content,
    defaultStyle: { font: "Roboto", fontSize: 10, color: C.dark },
  };

  await writePDF(docDef, "example-essays.pdf");
}

// ─── EXTRACTS PDF ───

async function generateExtractsPDF(): Promise<void> {
  const content: Content[] = [
    ...coverPage(
      "Annotated Key Extracts",
      "Colour-coded annotations with analysis",
      [
        `${INSPECTOR_CALLS_EXTRACTS.length} key extracts from across the play`,
        "Colour-coded phrase annotations",
        "Context notes for each extract",
        "Key analysis points for revision",
      ],
      C.purple
    ),
  ];

  INSPECTOR_CALLS_EXTRACTS.forEach((ext, idx) => {
    // Title
    content.push({
      table: {
        widths: ["*"],
        body: [[{
          stack: [
            { text: ext.title, fontSize: 14, bold: true, color: C.white },
            { text: `${ext.act}  —  An Inspector Calls`, fontSize: 10, color: "#D1FAE5", margin: [0, 4, 0, 0] },
          ],
          margin: [14, 12, 14, 12],
          fillColor: C.teal,
        }]],
      },
      layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 0, paddingBottom: () => 0 },
      margin: [0, 0, 0, 10],
    });

    // Context
    content.push(
      calloutBox("Context", [
        { text: ext.context, fontSize: 10, color: C.text, lineHeight: 1.45 },
      ], C.grey, C.lightGrey)
    );

    // Extract
    content.push(sectionHeader("Extract", C.navy));
    content.push(quoteBox(ext.extract));

    // Annotations
    content.push(sectionHeader("Annotations", C.purple));

    ext.annotations.forEach((ann, aIdx) => {
      const colour = ANNOTATION_COLOURS[ann.colour] || C.red;
      content.push({
        table: {
          widths: ["*"],
          body: [[{
            stack: [
              { text: `"${ann.phrase}"`, fontSize: 10, italics: true, bold: true, color: colour, margin: [0, 0, 0, 4] },
              { text: ann.note, fontSize: 9.5, color: C.text, lineHeight: 1.4 },
            ],
            margin: [12, 8, 12, 8],
          }]],
        },
        layout: {
          hLineWidth: () => 0,
          vLineWidth: (i: number) => (i === 0 ? 4 : 0),
          vLineColor: () => colour,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 3, 0, 3],
      });
    });

    // Key Analysis Points
    content.push(sectionHeader("Key Analysis Points", C.green));

    content.push(
      calloutBox("Exam Tip", [
        { text: "Use these analysis points in your essays. Each one connects language/structure (AO2) to Priestley's purpose (AO3).", fontSize: 9, italics: true, color: C.green, lineHeight: 1.3 },
      ], C.green, C.greenLight)
    );

    const analysisList: Content = {
      ul: ext.overallAnalysis.map((point) => ({
        text: point,
        fontSize: 10,
        color: C.text,
        lineHeight: 1.5,
        margin: [0, 2, 0, 2] as [number, number, number, number],
      })),
      margin: [5, 5, 0, 5],
    };
    content.push(analysisList);

    if (idx < INSPECTOR_CALLS_EXTRACTS.length - 1) {
      content.push({ text: "", pageBreak: "after" });
    }
  });

  const docDef: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [50, 55, 50, 50],
    header: pageHeader("AN INSPECTOR CALLS", "Annotated Extracts", C.purple),
    footer: pageFooter(C.purple),
    content,
    defaultStyle: { font: "Roboto", fontSize: 10, color: C.dark },
  };

  await writePDF(docDef, "annotated-extracts.pdf");
}

// ─── PLANS PDF ───

async function generatePlansPDF(): Promise<void> {
  const content: Content[] = [
    ...coverPage(
      "Essay Plans & Templates",
      "Point-Quote-Analysis structure for exam success",
      [
        `${INSPECTOR_CALLS_ESSAY_PLANS.length} completed essay plans`,
        "Blank templates for self-practice",
        "Clear line of argument for each question",
        "PQA structure for every paragraph",
      ],
      C.blue
    ),
  ];

  // Completed plans
  INSPECTOR_CALLS_ESSAY_PLANS.forEach((plan, idx) => {
    // Question
    content.push(
      calloutBox("Exam Question", [
        { text: plan.question, fontSize: 12, bold: true, color: C.dark, lineHeight: 1.4 },
      ], C.blue, C.blueLight)
    );

    // Line of argument
    content.push(
      calloutBox("Line of Argument", [
        { text: plan.lineOfArgument, fontSize: 10, color: C.dark, lineHeight: 1.45, italics: true },
      ], C.teal, C.tealLight)
    );

    // Introduction
    content.push(sectionHeader("Introduction", C.navy));
    content.push({ text: plan.intro, fontSize: 10, color: C.text, lineHeight: 1.5, margin: [0, 0, 0, 10] });

    // PQA table
    content.push(sectionHeader("Essay Plan — Point · Quote · Analysis", C.blue));

    const tableBody: TableCell[][] = [
      [
        { text: "", fillColor: C.blue, color: C.white, bold: true, fontSize: 9, margin: [4, 6, 4, 6] },
        { text: "POINT", fillColor: C.blue, color: C.white, bold: true, fontSize: 9, margin: [4, 6, 4, 6] },
        { text: "QUOTE", fillColor: C.blue, color: C.white, bold: true, fontSize: 9, margin: [4, 6, 4, 6] },
        { text: "ANALYSIS", fillColor: C.blue, color: C.white, bold: true, fontSize: 9, margin: [4, 6, 4, 6] },
      ],
    ];

    const rowBgs = [C.blueLight, C.white];
    plan.parts.forEach((part, pIdx) => {
      const bg = rowBgs[pIdx % 2];
      tableBody.push([
        { text: part.label, fontSize: 9, bold: true, color: C.blue, fillColor: bg, margin: [4, 6, 4, 6] },
        { text: part.point, fontSize: 9, color: C.dark, fillColor: bg, margin: [4, 6, 4, 6], lineHeight: 1.3 },
        { text: part.quote, fontSize: 9, italics: true, color: C.dark, fillColor: bg, margin: [4, 6, 4, 6], lineHeight: 1.3 },
        { text: part.analysis, fontSize: 9, color: C.dark, fillColor: bg, margin: [4, 6, 4, 6], lineHeight: 1.3 },
      ]);
    });

    content.push({
      table: { headerRows: 1, widths: [45, 110, 130, "*"], body: tableBody },
      layout: {
        hLineWidth: () => 0.5,
        vLineWidth: () => 0.5,
        hLineColor: () => C.border,
        vLineColor: () => C.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 5, 0, 10],
    });

    // Conclusion
    content.push(sectionHeader("Conclusion", C.navy));
    content.push({ text: plan.conclusion, fontSize: 10, color: C.text, lineHeight: 1.5, margin: [0, 0, 0, 10] });

    if (idx < INSPECTOR_CALLS_ESSAY_PLANS.length - 1) {
      content.push({ text: "", pageBreak: "after" });
    }
  });

  // ── Blank Templates ──
  content.push({ text: "", pageBreak: "after" });

  for (let t = 0; t < 2; t++) {
    content.push({
      table: {
        widths: ["*"],
        body: [[{
          text: `Blank Essay Plan Template ${t + 1}`,
          fontSize: 16, bold: true, color: C.white,
          margin: [14, 12, 14, 12],
          fillColor: C.blue,
        }]],
      },
      layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 0, paddingBottom: () => 0 },
      margin: [0, 0, 0, 12],
    });

    // Question line
    content.push({ text: "Question:", fontSize: 10, bold: true, color: C.dark, margin: [0, 0, 0, 4] });
    for (let l = 0; l < 2; l++) {
      content.push({ canvas: [{ type: "line", x1: 0, y1: 0, x2: 495, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 12, 0, 0] });
    }

    content.push(spacer(8));

    // Line of Argument
    content.push({ text: "Line of Argument:", fontSize: 10, bold: true, color: C.dark, margin: [0, 8, 0, 4] });
    for (let l = 0; l < 3; l++) {
      content.push({ canvas: [{ type: "line", x1: 0, y1: 0, x2: 495, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 12, 0, 0] });
    }

    content.push(spacer(5));

    // PQA rows
    const labels = ["Introduction", "Point 1", "Point 2", "Point 3", "Point 4", "Point 5", "Conclusion"];
    labels.forEach((label) => {
      content.push({
        table: {
          widths: ["*"],
          body: [[{
            stack: [
              { text: label, fontSize: 10, bold: true, color: C.blue, margin: [0, 0, 0, 6] },
              ...(label !== "Introduction" && label !== "Conclusion"
                ? [
                    { text: "Point:", fontSize: 9, color: C.grey, margin: [0, 0, 0, 2] as [number, number, number, number] },
                    { canvas: [{ type: "line", x1: 0, y1: 0, x2: 465, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 8, 0, 4] as [number, number, number, number] },
                    { text: "Quote:", fontSize: 9, color: C.grey, margin: [0, 4, 0, 2] as [number, number, number, number] },
                    { canvas: [{ type: "line", x1: 0, y1: 0, x2: 465, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 8, 0, 4] as [number, number, number, number] },
                    { text: "Analysis:", fontSize: 9, color: C.grey, margin: [0, 4, 0, 2] as [number, number, number, number] },
                    { canvas: [{ type: "line", x1: 0, y1: 0, x2: 465, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 8, 0, 0] as [number, number, number, number] },
                  ]
                : [
                    { canvas: [{ type: "line", x1: 0, y1: 0, x2: 465, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 8, 0, 4] as [number, number, number, number] },
                    { canvas: [{ type: "line", x1: 0, y1: 0, x2: 465, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 4, space: 2 } }], margin: [0, 8, 0, 0] as [number, number, number, number] },
                  ]),
            ],
            margin: [10, 8, 10, 8],
            fillColor: C.blueLight,
          }]],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => C.border,
          vLineColor: () => C.border,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 3, 0, 3],
      });
    });

    if (t < 1) {
      content.push({ text: "", pageBreak: "after" });
    }
  }

  const docDef: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [50, 55, 50, 50],
    header: pageHeader("AN INSPECTOR CALLS", "Essay Plans & Templates", C.blue),
    footer: pageFooter(C.blue),
    content,
    defaultStyle: { font: "Roboto", fontSize: 10, color: C.dark },
  };

  await writePDF(docDef, "essay-plans.pdf");
}

// ─── QUESTIONS PDF ───

async function generateQuestionsPDF(): Promise<void> {
  const THEME_COLOURS: Record<string, string> = {
    "Character: Mr Birling": C.red,
    "Social Responsibility": C.teal,
    "Class & Power": C.purple,
    "Generational Divide": C.blue,
    "Gender & Exploitation": C.orange,
    "Artifice & Pretence": C.navy,
  };

  const content: Content[] = [
    ...coverPage(
      "Practice Exam Questions",
      "AQA-style extract-based questions",
      [
        `${INSPECTOR_CALLS_EXAM_QUESTIONS.length} exam-style questions with extracts`,
        "Covers every major theme and character",
        "30-mark questions with AO breakdown",
        "Planning space included for each question",
      ],
      C.orange
    ),
  ];

  // Instructions page
  content.push(
    calloutBox("How to Use These Questions", [
      { text: "Each question follows the AQA Paper 2, Section A format:", fontSize: 10, color: C.dark, margin: [0, 0, 0, 6] },
      {
        ul: [
          { text: "Read the extract carefully", fontSize: 10, color: C.text },
          { text: "Spend 5 minutes planning your response in the planning space provided", fontSize: 10, color: C.text },
          { text: "Write for 45 minutes (aim for 5-6 paragraphs)", fontSize: 10, color: C.text },
          { text: "Cover both the extract AND the wider play", fontSize: 10, color: C.text },
        ],
        margin: [0, 0, 0, 6] as [number, number, number, number],
      },
    ], C.orange, C.orangeLight)
  );

  content.push(
    calloutBox("Assessment Objectives — What the examiner is looking for", [
      {
        columns: [
          {
            width: "auto",
            stack: [
              aoBadge("AO1"),
              { text: "Read, understand and respond to texts. Use textual references to support and illustrate interpretations.", fontSize: 9, color: C.text, lineHeight: 1.3, margin: [0, 2, 0, 0] },
            ],
            margin: [0, 0, 15, 6],
          },
        ],
      },
      {
        columns: [
          {
            width: "auto",
            stack: [
              aoBadge("AO2"),
              { text: "Analyse language, form and structure used by a writer to create meanings and effects.", fontSize: 9, color: C.text, lineHeight: 1.3, margin: [0, 2, 0, 0] },
            ],
            margin: [0, 0, 15, 6],
          },
        ],
      },
      {
        columns: [
          {
            width: "auto",
            stack: [
              aoBadge("AO3"),
              { text: "Show understanding of the relationships between texts and the contexts in which they were written.", fontSize: 9, color: C.text, lineHeight: 1.3, margin: [0, 2, 0, 0] },
            ],
            margin: [0, 0, 15, 0],
          },
        ],
      },
    ], C.blue, C.blueLight)
  );

  content.push({ text: "", pageBreak: "after" });

  // Questions
  INSPECTOR_CALLS_EXAM_QUESTIONS.forEach((q, idx) => {
    const colour = THEME_COLOURS[q.theme] || C.teal;

    // Theme badge + question number
    content.push({
      columns: [
        {
          width: "auto",
          table: {
            widths: ["auto"],
            body: [[{ text: `  Question ${idx + 1}  `, fontSize: 10, bold: true, color: C.white, fillColor: colour, margin: [6, 3, 6, 3] }]],
          },
          layout: { hLineWidth: () => 0, vLineWidth: () => 0, paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 0, paddingBottom: () => 0 },
        },
        {
          width: "auto",
          table: {
            widths: ["auto"],
            body: [[{ text: `  ${q.theme}  `, fontSize: 9, bold: true, color: colour, margin: [6, 4, 6, 4] }]],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colour,
            vLineColor: () => colour,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [8, 0, 0, 0],
        },
      ],
      margin: [0, 0, 0, 10],
    });

    // Extract
    content.push({ text: `Read the following extract from ${q.extractAct} of An Inspector Calls and then answer the question that follows.`, fontSize: 9.5, italics: true, color: C.grey, margin: [0, 0, 0, 8] });
    content.push(quoteBox(q.extract));

    // Question
    content.push({
      table: {
        widths: ["*"],
        body: [[{
          stack: [
            { text: q.question, fontSize: 11.5, bold: true, color: C.dark, lineHeight: 1.4 },
            spacer(4),
            { text: "Write about:", fontSize: 9.5, color: C.grey, margin: [0, 0, 0, 2] },
            {
              ul: [
                { text: "how Priestley presents ideas in this extract", fontSize: 9.5, color: C.text },
                { text: "how Priestley presents these ideas in the play as a whole.", fontSize: 9.5, color: C.text },
              ],
            },
            spacer(4),
            { text: "[30 marks]  AO1 · AO2 · AO3", fontSize: 9, bold: true, color: C.grey },
          ],
          margin: [14, 12, 14, 12],
          fillColor: C.lightGrey,
        }]],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colour,
        vLineColor: () => colour,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 8, 0, 12],
    });

    // Planning space
    content.push({ text: "PLANNING SPACE", fontSize: 9, bold: true, color: C.grey, characterSpacing: 1.5, margin: [0, 0, 0, 6] });
    for (let l = 0; l < 8; l++) {
      content.push({ canvas: [{ type: "line", x1: 0, y1: 0, x2: 495, y2: 0, lineWidth: 0.5, lineColor: C.border, dash: { length: 3, space: 3 } }], margin: [0, 10, 0, 0] });
    }

    if (idx < INSPECTOR_CALLS_EXAM_QUESTIONS.length - 1) {
      content.push({ text: "", pageBreak: "after" });
    }
  });

  const docDef: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [50, 55, 50, 50],
    header: pageHeader("AN INSPECTOR CALLS", "Practice Exam Questions", C.orange),
    footer: pageFooter(C.orange),
    content,
    defaultStyle: { font: "Roboto", fontSize: 10, color: C.dark },
  };

  await writePDF(docDef, "practice-questions.pdf");
}

// ─── Write PDF to file ───

async function writePDF(docDef: TDocumentDefinitions, filename: string): Promise<void> {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, filename);

  // pdfmake v0.3: createPdfKitDocument is async
  const doc = await printer.createPdfKitDocument(docDef);
  const chunks: Buffer[] = [];

  return new Promise<void>((resolve) => {
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => {
      const result = Buffer.concat(chunks);
      fs.writeFileSync(outPath, result);
      const kb = Math.round(result.length / 1024);
      console.log(`  ✓ ${filename} (${kb} KB)`);
      resolve();
    });
    doc.end();
  });
}

// ─── Main ───

async function main() {
  console.log("\nGenerating PDFs...\n");
  await generateEssaysPDF();
  await generateExtractsPDF();
  await generatePlansPDF();
  await generateQuestionsPDF();
  console.log("\nDone! Files saved to public/downloads/inspector-calls/\n");
}

main().catch(console.error);
