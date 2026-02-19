import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/texts/:path*", destination: "/englishlit/texts/:path*", permanent: true },
      { source: "/texts", destination: "/englishlit/texts", permanent: true },
      { source: "/aos", destination: "/englishlit/aos", permanent: true },
      { source: "/essay-structure", destination: "/englishlit/essay-structure", permanent: true },
      { source: "/exam/:path*", destination: "/englishlit/exam/:path*", permanent: true },
      { source: "/exam", destination: "/englishlit/exam", permanent: true },
      { source: "/flashcards", destination: "/englishlit/flashcards", permanent: true },
      { source: "/vocab", destination: "/englishlit/vocab", permanent: true },
    ];
  },
};

export default nextConfig;
