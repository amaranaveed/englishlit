import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — Straight Nines",
  description: "How Straight Nines uses cookies and local storage on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <h1 className="font-display text-[28px] sm:text-[34px] font-bold text-text mb-2">
        Cookie Policy
      </h1>
      <p className="font-ui text-[13px] text-grey mb-10">
        Last updated: 14 February 2026
      </p>

      <div className="space-y-8 font-ui text-[15px] text-grey leading-relaxed">
        <Section title="1. What are cookies?">
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience. We also use browser <strong>local storage</strong>, which works similarly but can store more data on your device.
          </p>
        </Section>

        <Section title="2. How we use cookies &amp; local storage">
          <p>We use the following types of cookies and storage:</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-[13px] border border-border-subtle rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface-hover">
                  <th className="text-left px-4 py-3 font-semibold text-text">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-text">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold text-text">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border-subtle">
                  <td className="px-4 py-3 font-medium text-text">Essential cookies</td>
                  <td className="px-4 py-3">Authentication session, cookie consent preference</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-t border-border-subtle bg-surface">
                  <td className="px-4 py-3 font-medium text-text">Local storage</td>
                  <td className="px-4 py-3">Flashcard progress, exam results, vocab scores, study preferences, onboarding state</td>
                  <td className="px-4 py-3">Yes (for features to work)</td>
                </tr>
                <tr className="border-t border-border-subtle">
                  <td className="px-4 py-3 font-medium text-text">Authentication cookies</td>
                  <td className="px-4 py-3">Supabase session tokens to keep you signed in</td>
                  <td className="px-4 py-3">Yes (if signed in)</td>
                </tr>
                <tr className="border-t border-border-subtle bg-surface">
                  <td className="px-4 py-3 font-medium text-text">Analytics cookies</td>
                  <td className="px-4 py-3">Anonymised usage data to help us improve the site</td>
                  <td className="px-4 py-3">No (optional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="3. Essential cookies">
          <p>
            These cookies are necessary for the Site to function. They cannot be disabled. They include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>sn_cookie_consent</strong> &mdash; Remembers your cookie preference (accept/reject). Stored in local storage.</li>
            <li><strong>Supabase auth tokens</strong> &mdash; Manage your sign-in session. Set only when you log in.</li>
          </ul>
        </Section>

        <Section title="4. Local storage data">
          <p>
            We store the following data in your browser&rsquo;s local storage to power site features:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Flashcard decks and spaced repetition schedules</li>
            <li>Exam practice responses and results</li>
            <li>Vocabulary quiz scores</li>
            <li>Onboarding completion state</li>
            <li>Search preferences</li>
          </ul>
          <p className="mt-2">
            This data stays on your device and is not sent to our servers unless you are signed in, in which case it may be synced to your account.
          </p>
        </Section>

        <Section title="5. Analytics cookies">
          <p>
            We may use analytics cookies to understand how visitors use the Site. These cookies collect anonymised information such as pages visited, time spent, and general location (country level). You can accept or reject these cookies via our cookie banner.
          </p>
        </Section>

        <Section title="6. Third-party cookies">
          <p>
            When you sign in with Google, Google may set their own cookies. These are governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:underline"
            >
              Google&rsquo;s Privacy Policy
            </a>.
          </p>
        </Section>

        <Section title="7. Managing cookies">
          <p>You can control cookies in several ways:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Cookie banner</strong> &mdash; Use the banner that appears when you first visit to accept or reject non-essential cookies.</li>
            <li><strong>Browser settings</strong> &mdash; Most browsers allow you to block or delete cookies. Check your browser&rsquo;s help documentation for instructions.</li>
            <li><strong>Clear local storage</strong> &mdash; You can clear local storage through your browser&rsquo;s developer tools (this will reset your flashcard progress and quiz scores).</li>
          </ul>
          <p className="mt-2">
            Note: Blocking essential cookies may prevent parts of the Site from working correctly.
          </p>
        </Section>

        <Section title="8. Changes to this policy">
          <p>
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.
          </p>
        </Section>

        <Section title="9. More information">
          <p>
            For more details about how we handle your data, see our{" "}
            <Link href="/privacy" className="text-purple hover:underline">Privacy Policy</Link>.
            For questions, contact us at{" "}
            <a href="mailto:hello@straightnines.co.uk" className="text-purple hover:underline">
              hello@straightnines.co.uk
            </a>.
          </p>
        </Section>
      </div>
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
