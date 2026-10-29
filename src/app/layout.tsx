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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://deadnet-browser.tech"),
  title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology & Web Resurrection",
  description:
    "An autonomous digital archaeology agent and dual-engine web browser powered by open-weight Gemma 3, Stagehand headless DOM exhumation, SerpApi historical grounding, and Temporal durable workflows.",
  keywords: [
    "open-source ai",
    "gemma 3",
    "digital preservation",
    "stagehand",
    "browserbase",
    "temporal",
    "web archaeology"
  ],
  authors: [{ name: "DeadNet Team", url: "https://github.com" }],
  creator: "DeadNet Digital Archaeology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deadnet-browser.tech",
    title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology",
    description:
      "Exhuming decaying 1990s and 2000s websites into living, interactive modern software using open-weight AI and headless DOM exhumation.",
    siteName: "DeadNet Ectoplasm Browser"
  },
  twitter: {
    card: "summary_large_image",
    title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology",
    description: "Exhuming the lost digital ancestors of 1999 with Gemma 3, Browserbase, and Temporal."
  }
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
