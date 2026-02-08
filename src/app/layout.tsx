import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "GCSE Literature — AQA 8702 Revision Platform",
  description: "LightUp 6-Part Quote Analysis, Exam Practice, Flashcards & Vocab Quiz for AQA GCSE English Literature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-bg text-text">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
