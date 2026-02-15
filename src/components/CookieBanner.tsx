"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "sn_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6 animate-slide-up">
      <div className="max-w-3xl mx-auto bg-surface-raised border border-border rounded-2xl shadow-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-ui text-[14px] text-text font-medium mb-1">
            We value your privacy
          </p>
          <p className="font-ui text-[13px] text-grey leading-relaxed">
            We use essential cookies to make the site work. We&apos;d also like
            to use analytics cookies to help us improve.{" "}
            <Link href="/cookies" className="text-purple hover:underline">
              Read our Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="font-ui text-[13px] font-medium text-grey hover:text-text px-4 py-2 rounded-full border border-border hover:border-grey transition-colors cursor-pointer"
          >
            Reject All
          </button>
          <button
            onClick={accept}
            className="font-ui text-[13px] font-medium text-white bg-purple hover:bg-purple-dark px-5 py-2 rounded-full transition-colors cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
