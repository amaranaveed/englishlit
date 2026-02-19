import { describe, it, expect } from "vitest";
import { TEXT_REGISTRY, TEXT_ICONS, getAllTexts, getActiveTexts, getTextBySlug } from "./text-registry";

describe("TEXT_REGISTRY", () => {
  it("has at least one paper group", () => {
    expect(TEXT_REGISTRY.length).toBeGreaterThan(0);
  });

  it("every group has a label, paper, section, and texts", () => {
    for (const group of TEXT_REGISTRY) {
      expect(group.label).toBeTruthy();
      expect(group.paper).toBeTruthy();
      expect(group.section).toBeTruthy();
      expect(group.texts.length).toBeGreaterThan(0);
    }
  });

  it("every text has required fields", () => {
    for (const text of getAllTexts()) {
      expect(text.slug).toBeTruthy();
      expect(text.title).toBeTruthy();
      expect(text.author).toBeTruthy();
      expect(["active", "coming-soon"]).toContain(text.status);
    }
  });
});

describe("getAllTexts", () => {
  it("returns a flat array of all texts", () => {
    const all = getAllTexts();
    const expected = TEXT_REGISTRY.reduce((n, g) => n + g.texts.length, 0);
    expect(all.length).toBe(expected);
  });
});

describe("getActiveTexts", () => {
  it("returns only active texts", () => {
    const active = getActiveTexts();
    expect(active.length).toBeGreaterThan(0);
    for (const t of active) {
      expect(t.status).toBe("active");
    }
  });

  it("is a subset of all texts", () => {
    expect(getActiveTexts().length).toBeLessThanOrEqual(getAllTexts().length);
  });
});

describe("getTextBySlug", () => {
  it("finds an existing text", () => {
    const first = getAllTexts()[0];
    const found = getTextBySlug(first.slug);
    expect(found).toBeDefined();
    expect(found!.slug).toBe(first.slug);
  });

  it("returns undefined for unknown slug", () => {
    expect(getTextBySlug("nonexistent-slug-xyz")).toBeUndefined();
  });
});

describe("TEXT_ICONS", () => {
  it("has at least some icons defined", () => {
    const iconCount = Object.keys(TEXT_ICONS).length;
    expect(iconCount).toBeGreaterThan(0);
  });

  it("icon values are image paths", () => {
    for (const path of Object.values(TEXT_ICONS)) {
      expect(path).toMatch(/\.(png|jpg|jpeg|svg|webp)$/);
    }
  });
});
