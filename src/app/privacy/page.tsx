import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedPage, AnimatedHeading, AnimatedDiv, AnimatedSection, AnimatedRevealLine, AnimatedListItem } from "@/components/AnimatedWrappers";

export const metadata: Metadata = {
  title: "Privacy Policy — Straight Nines",
  description: "How Straight Nines collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <AnimatedPage>
        <AnimatedHeading as="h1" className="font-display text-[28px] sm:text-[34px] font-bold text-text mb-2">
          Privacy Policy
        </AnimatedHeading>
        <AnimatedDiv delay={0.1}>
          <p className="font-ui text-[13px] text-grey mb-10">
            Last updated: 14 February 2026
          </p>
        </AnimatedDiv>

        <div className="space-y-8 font-ui text-[15px] text-grey leading-relaxed">
          <AnimatedSection delay={0.05}>
            <Section title="1. Who we are">
              <p>
                Straight Nines (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website <strong>straightnines.co.uk</strong>, a free revision resource for AQA GCSE English Literature (8702). If you have any questions about this policy, please contact us at{" "}
                <a href="mailto:hello@straightnines.co.uk" className="text-purple hover:underline">
                  hello@straightnines.co.uk
                </a>.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.1}>
            <Section title="2. What data we collect">
              <p>We may collect the following personal data:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Account data</strong> &mdash; When you sign in with Google, we receive your name, email address, and profile picture from Google OAuth.</li>
                <li><strong>Usage data</strong> &mdash; Pages visited, features used (flashcards, exams, vocab quizzes), and study progress.</li>
                <li><strong>Device data</strong> &mdash; Browser type, operating system, screen resolution, and IP address (anonymised where possible).</li>
                <li><strong>Cookies &amp; local storage</strong> &mdash; We use cookies and browser local storage to remember your preferences and progress. See our <Link href="/cookies" className="text-purple hover:underline">Cookie Policy</Link> for details.</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.15}>
            <Section title="3. How we use your data">
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain the service (saving your flashcard progress, exam results, etc.).</li>
                <li>Authenticate your account via Google sign-in.</li>
                <li>Improve the website through anonymised usage analytics.</li>
                <li>Respond to your queries if you contact us.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell your personal data to third parties. We do <strong>not</strong> use your data for advertising or marketing purposes.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.2}>
            <Section title="4. Legal basis for processing (GDPR)">
              <p>Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following bases:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Consent</strong> &mdash; For analytics cookies (you can accept or reject these via our cookie banner).</li>
                <li><strong>Legitimate interest</strong> &mdash; To provide the service, save your study progress, and improve the site.</li>
                <li><strong>Contract performance</strong> &mdash; To provide the service you&apos;ve signed up for.</li>
              </ul>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.25}>
            <Section title="5. Data storage &amp; security">
              <p>
                Your data is stored securely using <strong>Supabase</strong> (hosted on AWS in the EU). We use HTTPS encryption for all data in transit and follow industry-standard security practices. Local storage data (flashcard progress, quiz scores) is stored only on your device.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.3}>
            <Section title="6. Data sharing">
              <p>We share data only with the following third-party services that are essential to running the site:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Supabase</strong> &mdash; Database and authentication provider.</li>
                <li><strong>Google</strong> &mdash; OAuth authentication (sign in with Google).</li>
                <li><strong>Vercel / Netlify</strong> &mdash; Website hosting.</li>
              </ul>
              <p className="mt-3">
                Each provider has their own privacy policy and is compliant with GDPR.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.35}>
            <Section title="7. Data retention">
              <p>
                We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days. Anonymised analytics data may be retained indefinitely.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.4}>
            <Section title="8. Your rights">
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Access</strong> &mdash; Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong> &mdash; Ask us to correct inaccurate data.</li>
                <li><strong>Erasure</strong> &mdash; Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                <li><strong>Restrict processing</strong> &mdash; Ask us to limit how we use your data.</li>
                <li><strong>Data portability</strong> &mdash; Receive your data in a structured, machine-readable format.</li>
                <li><strong>Object</strong> &mdash; Object to processing based on legitimate interest.</li>
                <li><strong>Withdraw consent</strong> &mdash; Withdraw consent at any time for consent-based processing.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@straightnines.co.uk" className="text-purple hover:underline">
                  hello@straightnines.co.uk
                </a>. We will respond within 30 days.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.45}>
            <Section title="9. Children&rsquo;s privacy">
              <p>
                Our service is designed for GCSE students, many of whom are under 18. We do not knowingly collect more data than is necessary to provide the service. We do not use data from minors for marketing. If you are a parent or guardian and believe we have collected data about your child inappropriately, please contact us and we will delete it promptly.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.5}>
            <Section title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on the website. Your continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.55}>
            <Section title="11. Complaints">
              <p>
                If you are unhappy with how we handle your data, you have the right to lodge a complaint with the{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Information Commissioner&rsquo;s Office (ICO)
                </a>, the UK&rsquo;s data protection authority.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedRevealLine />

          <AnimatedSection delay={0.6}>
            <Section title="12. Contact us">
              <p>
                For any privacy-related questions, contact us at:{" "}
                <a href="mailto:hello@straightnines.co.uk" className="text-purple hover:underline">
                  hello@straightnines.co.uk
                </a>
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
