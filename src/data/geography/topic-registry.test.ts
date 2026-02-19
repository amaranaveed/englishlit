import { describe, it, expect } from "vitest";
import { GEOGRAPHY_REGISTRY, getAllTopics, getActiveTopics, getTopicBySlug } from "./topic-registry";

describe("GEOGRAPHY_REGISTRY", () => {
  it("has at least one topic group", () => {
    expect(GEOGRAPHY_REGISTRY.length).toBeGreaterThan(0);
  });

  it("every group has a label, paper, and topics", () => {
    for (const group of GEOGRAPHY_REGISTRY) {
      expect(group.label).toBeTruthy();
      expect(group.paper).toBeTruthy();
      expect(typeof group.section).toBe("string");
      expect(group.topics.length).toBeGreaterThan(0);
    }
  });

  it("every topic has required fields", () => {
    for (const topic of getAllTopics()) {
      expect(topic.slug).toBeTruthy();
      expect(topic.title).toBeTruthy();
      expect(["active", "coming-soon"]).toContain(topic.status);
    }
  });

  it("no duplicate slugs", () => {
    const slugs = getAllTopics().map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getActiveTopics", () => {
  it("returns only active topics", () => {
    const active = getActiveTopics();
    expect(active.length).toBeGreaterThan(0);
    for (const t of active) {
      expect(t.status).toBe("active");
    }
  });
});

describe("getTopicBySlug", () => {
  it("finds an existing topic", () => {
    const first = getAllTopics()[0];
    const found = getTopicBySlug(first.slug);
    expect(found).toBeDefined();
    expect(found!.slug).toBe(first.slug);
  });

  it("returns undefined for unknown slug", () => {
    expect(getTopicBySlug("nonexistent-topic-xyz")).toBeUndefined();
  });
});
