import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "GCSE Literature — AQA 8702 Revision Platform",
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
      <body className="antialiased min-h-screen bg-bg text-text">
        <AuthProvider>
          <Header />
          <main className="relative">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
