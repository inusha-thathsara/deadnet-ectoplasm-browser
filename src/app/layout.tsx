import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology & Web Resurrection",
  description:
    "An autonomous digital archaeology agent and dual-engine web browser powered by open-weight Gemma 3, Stagehand headless DOM exhumation, SerpApi historical grounding, and Temporal durable workflows. Hacktoberfest Week 4: Ghost in the Machine.",
  keywords: [
    "hacktoberfest",
    "open-source ai",
    "gemma",
    "digital preservation",
    "stagehand",
    "browserbase",
    "temporal",
    "web archaeology",
    "devchallenge"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden">{children}</body>
    </html>
  );
}
