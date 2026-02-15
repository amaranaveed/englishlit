import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedPage, AnimatedHeading, AnimatedDiv, AnimatedSection, AnimatedRevealLine, AnimatedListItem } from "@/components/AnimatedWrappers";

export const metadata: Metadata = {
  title: "Terms & Conditions — Straight Nines",
  description: "Terms and conditions for using the Straight Nines revision platform.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <AnimatedPage>
        <AnimatedHeading as="h1" className="font-display text-[28px] sm:text-[34px] font-bold text-text mb-2">
          Terms &amp; Conditions
        </AnimatedHeading>
        <AnimatedDiv delay={0.1}>
          <p className="font-ui text-[13px] text-grey mb-10">
            Last updated: 14 February 2026
          </p>
        </AnimatedDiv>

        <div className="space-y-8 font-ui text-[15px] text-grey leading-relaxed">
          <AnimatedSection delay={0.05}>
            <Section title="1. About these terms">
              <p>
                These terms and conditions govern your use of the Straight Nines website at <strong>straightnines.com</strong> (&ldquo;the Site&rdquo;). By using the Site, you agree to be bound by these terms. If you do not agree, please do not use the Site.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.1}>
            <Section title="2. What we provide">
              <p>
                Straight Nines is a free educational revision resource for AQA GCSE English Literature (specification 8702). We provide study guides, quote analysis, flashcards, vocabulary quizzes, essay structure guides, and exam practice materials.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.15}>
            <Section title="3. No guarantee of results">
              <p>
                While we strive to provide accurate and helpful revision content, we make no guarantees about exam results. Our materials are supplementary study aids and should be used alongside your school teaching and official AQA resources.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.2}>
            <Section title="4. Intellectual property">
              <p>
                All content on the Site &mdash; including text, design, graphics, and code &mdash; is owned by Straight Nines unless otherwise stated. Literary quotations are used for educational purposes under fair dealing provisions of the Copyright, Designs and Patents Act 1988.
              </p>
              <p className="mt-2">
                You may use our materials for personal, non-commercial revision purposes. You may not reproduce, distribute, or sell our content without written permission.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.25}>
            <Section title="5. User accounts">
              <p>
                You may sign in using Google OAuth. You are responsible for maintaining the security of your account. You must not share your account credentials or allow others to access your account.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.3}>
            <Section title="6. Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the Site for any unlawful purpose.</li>
                <li>Attempt to gain unauthorised access to the Site or its systems.</li>
                <li>Scrape, copy, or redistribute content from the Site without permission.</li>
                <li>Introduce viruses, malware, or any harmful code.</li>
                <li>Use the Site in any way that could damage or impair its performance.</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.35}>
            <Section title="7. Availability">
              <p>
                We aim to keep the Site available at all times, but we do not guarantee uninterrupted access. We may suspend or discontinue the Site (or any part of it) at any time without notice. We are not liable for any loss resulting from the Site being unavailable.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.4}>
            <Section title="8. Third-party services">
              <p>
                The Site uses third-party services including Google (authentication), Supabase (data storage), and Vercel/Netlify (hosting). Your use of these services is subject to their respective terms. We are not responsible for the actions of third-party providers.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.45}>
            <Section title="9. Disclaimer &amp; limitation of liability">
              <p>
                The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>We are not liable for any indirect, incidental, or consequential damages.</li>
                <li>We are not responsible for the accuracy of third-party content or quotations.</li>
                <li>Our total liability shall not exceed the amount you have paid to use the Site (which is zero, as it&rsquo;s free).</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.5}>
            <Section title="10. AQA disclaimer">
              <p>
                Straight Nines is an independent revision resource and is <strong>not affiliated with, endorsed by, or connected to AQA</strong> (Assessment and Qualifications Alliance) in any way. AQA is a registered trademark of AQA Education. All specification references are for informational purposes only.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.55}>
            <Section title="11. Changes to these terms">
              <p>
                We may update these terms from time to time. Continued use of the Site after changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.6}>
            <Section title="12. Governing law">
              <p>
                These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.65}>
            <Section title="13. Contact">
              <p>
                Questions about these terms? Contact us at{" "}
                <a href="mailto:hello@straightnines.com" className="text-purple hover:underline">
                  hello@straightnines.com
                </a>{" "}
                or visit our <Link href="/contact" className="text-purple hover:underline">Contact page</Link>.
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
