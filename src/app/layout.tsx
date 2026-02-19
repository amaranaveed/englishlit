import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AuthProvider from "@/components/AuthProvider";
import OnboardingModal from "@/components/OnboardingModal";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Straight Nines — GCSE Revision Platform",
  description: "English Literature, Geography & more — Exam Practice, Flashcards, Quizzes & Revision Tools for GCSE",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning className="antialiased min-h-screen bg-bg text-text flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJH57NYC0E"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJH57NYC0E');
          `}
        </Script>
        <AuthProvider>
          <Header />
          <main className="relative flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <OnboardingModal />
          <CookieBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
