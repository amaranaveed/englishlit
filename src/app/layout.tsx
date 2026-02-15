import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AuthProvider from "@/components/AuthProvider";
import OnboardingModal from "@/components/OnboardingModal";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Straight Nines — GCSE English Literature Revision",
  description: "6-Part Quote Analysis, Exam Practice, Flashcards & Vocab Quiz for AQA GCSE English Literature",
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
      <body className="antialiased min-h-screen bg-bg text-text flex flex-col">
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
