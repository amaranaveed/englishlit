import type { Metadata } from "next";
import { AnimatedPage, AnimatedHeading, AnimatedDiv, AnimatedSection, AnimatedRevealLine, AnimatedListItem } from "@/components/AnimatedWrappers";

export const metadata: Metadata = {
  title: "Accessibility — Straight Nines",
  description: "Our commitment to making Straight Nines accessible to all students.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <AnimatedPage>
        <AnimatedHeading as="h1" className="font-display text-[28px] sm:text-[34px] font-bold text-text mb-2">
          Accessibility Statement
        </AnimatedHeading>
        <AnimatedDiv delay={0.1}>
          <p className="font-ui text-[13px] text-grey mb-10">
            Last updated: 14 February 2026
          </p>
        </AnimatedDiv>

        <div className="space-y-8 font-ui text-[15px] text-grey leading-relaxed">
          <AnimatedSection delay={0.05}>
            <Section title="Our commitment">
              <p>
                Straight Nines is committed to making our revision resources accessible to all GCSE students, including those with disabilities. We aim to conform to the{" "}
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1
                </a>{" "}
                at Level AA.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.1}>
            <Section title="What we do">
              <p>We strive to ensure that our website:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Can be navigated using a keyboard alone.</li>
                <li>Works with screen readers and other assistive technologies.</li>
                <li>Uses sufficient colour contrast for text and interactive elements.</li>
                <li>Uses clear, readable fonts at appropriate sizes.</li>
                <li>Provides visible focus indicators for keyboard navigation.</li>
                <li>Uses semantic HTML for proper document structure.</li>
                <li>Is responsive and works across different screen sizes and devices.</li>
                <li>Avoids content that could cause seizures or physical reactions.</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.15}>
            <Section title="Known limitations">
              <p>
                While we work to ensure accessibility, some areas may have limitations:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Mind map visualisations may be difficult to navigate with screen readers. We provide alternative text-based content where possible.</li>
                <li>PDF downloads may not be fully accessible. We recommend using the on-screen content where possible.</li>
                <li>Some interactive features (flashcard flipping, drag-and-drop) may work differently with assistive technologies.</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.2}>
            <Section title="Browser compatibility">
              <p>
                The Site is designed to work with the latest versions of:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.25}>
            <Section title="Feedback">
              <p>
                We welcome your feedback on the accessibility of Straight Nines. If you encounter any barriers or have suggestions for improvement, please contact us:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Email:{" "}
                  <a href="mailto:hello@straightnines.com" className="text-purple hover:underline">
                    hello@straightnines.com
                  </a>
                </li>
              </ul>
              <p className="mt-2">
                We aim to respond to accessibility feedback within 5 working days and to resolve issues as quickly as possible.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.3}>
            <Section title="Enforcement">
              <p>
                If you are not satisfied with our response, you can contact the{" "}
                <a
                  href="https://www.equalityadvisoryservice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Equality Advisory Support Service (EASS)
                </a>.
              </p>
            </Section>
          </AnimatedSection>
        </div>
      </AnimatedPage>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[18px] font-semibold text-text mb-3">{title}</h2>
      {children}
    </section>
  );
}
