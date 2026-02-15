import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AuthProvider from "@/components/AuthProvider";
import OnboardingModal from "@/components/OnboardingModal";

export const metadata: Metadata = {
  title: "Straight Nines — GCSE English Literature Revision",
  description: "6-Part Quote Analysis, Exam Practice, Flashcards & Vocab Quiz for AQA GCSE English Literature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased min-h-screen bg-bg text-text flex flex-col">
        <AuthProvider>
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
          <OnboardingModal />
          <CookieBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
