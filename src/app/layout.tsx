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
    "An autonomous digital archaeology engine and dual-engine web browser that exhumes decaying late-1990s websites and resurrects them into living, interactive software.",
  keywords: [
    "digital archaeology",
    "web preservation",
    "dual-engine browser",
    "digital heritage",
    "web resurrection",
    "open-source"
  ],
  authors: [{ name: "DeadNet Team", url: "https://github.com" }],
  creator: "DeadNet Digital Archaeology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deadnet-browser.tech",
    title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology",
    description:
      "Exhuming decaying 1990s and 2000s websites into living, interactive modern software in real time.",
    siteName: "DeadNet Ectoplasm Browser"
  },
  twitter: {
    card: "summary_large_image",
    title: "DeadNet Ectoplasm Browser — Autonomous Digital Archaeology",
    description: "Autonomous digital archaeology and web resurrection engine for early-web digital heritage."
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
