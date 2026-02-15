import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Straight Nines",
  description: "Get in touch with the Straight Nines team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <h1 className="font-display text-[28px] sm:text-[34px] font-bold text-text mb-2">
        Contact Us
      </h1>
      <p className="font-ui text-[15px] text-grey mb-10 leading-relaxed">
        Have a question, suggestion, or found something that needs fixing? We&rsquo;d love to hear from you.
      </p>

      <div className="space-y-8">
        {/* Email card */}
        <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-text mb-1">Email</h2>
              <p className="font-ui text-[14px] text-grey mb-3">
                The best way to reach us. We aim to respond within 48 hours.
              </p>
              <a
                href="mailto:hello@straightnines.co.uk"
                className="inline-flex items-center gap-2 font-ui text-[14px] font-medium text-purple hover:text-purple-dark transition-colors"
              >
                hello@straightnines.co.uk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Common topics */}
        <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
          <h2 className="font-display text-[18px] font-semibold text-text mb-4">
            Common topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Content errors",
                desc: "Spotted a wrong quote, typo, or inaccuracy? Let us know and we\u2019ll fix it.",
              },
              {
                title: "Feature suggestions",
                desc: "Have an idea for a new feature or improvement? We\u2019re all ears.",
              },
              {
                title: "Bug reports",
                desc: "Something not working as expected? Tell us what happened and which browser you\u2019re using.",
              },
              {
                title: "Data requests (GDPR)",
                desc: "Want to access, correct, or delete your data? We\u2019ll respond within 30 days.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-bg p-4 border border-border-subtle/50">
                <p className="font-ui text-[14px] font-medium text-text mb-1">{item.title}</p>
                <p className="font-ui text-[13px] text-grey leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="font-ui text-[14px] text-grey">
          <p>
            For privacy questions, see our{" "}
            <Link href="/privacy" className="text-purple hover:underline">Privacy Policy</Link>.
            For terms of use, see our{" "}
            <Link href="/terms" className="text-purple hover:underline">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
