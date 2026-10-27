import { z } from "zod";

export const BrokenImageSchema = z.object({
  src: z.string(),
  altText: z.string().optional(),
  surroundingContext: z.string().describe("Text or table cell surrounding the broken image"),
  width: z.number().optional(),
  height: z.number().optional()
});

export const DeadLinkSchema = z.object({
  href: z.string(),
  anchorText: z.string(),
  expectedTopic: z.string().describe("Topic or destination inferred from context or anchor text")
});

export const DefunctFormSchema = z.object({
  actionUrl: z.string().describe("e.g., '/cgi-bin/guestbook.pl' or 'counter.cgi'"),
  formHtml: z.string(),
  intendedBehavior: z.string().describe("What the CGI script was supposed to do")
});

export const DeadDomManifestSchema = z.object({
  siteTitle: z.string(),
  estimatedEra: z.string().describe("e.g., 'Late 1998 GeoCities HTML 3.2'"),
  originalAuthorHandle: z.string().optional(),
  survivingMainContent: z.string(),
  brokenImages: z.array(BrokenImageSchema),
  deadLinks: z.array(DeadLinkSchema),
  defunctScriptsAndForms: z.array(DefunctFormSchema),
  rawMetadata: z.record(z.string(), z.string()).optional(),
  browserbaseSessionId: z.string().optional()
});

export type DeadDomManifest = z.infer<typeof DeadDomManifestSchema>;

export interface HistoricalLoreSnippet {
  sourceTitle: string;
  sourceUrl: string;
  forumSnippet: string;
  year: number;
  relevanceConfidence: number;
}

export interface ReconstructedEntity {
  id: string;
  type: "article" | "download" | "guestbook_entry" | "spec" | "log";
  title: string;
  date?: string;
  author?: string;
  content: string;
  tags: string[];
  originalUrl?: string;
  confidence: number;
  isAiReconstructed: boolean;
  evidenceCitation?: string;
}

export interface Reincarnated2026View {
  brandName: string;
  tagline: string;
  navItems: { label: string; href: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  entities: ReconstructedEntity[];
  guestbookEntries: Array<{ name: string; date: string; message: string; isAiSimulated: boolean }>;
  footerStats: {
    originalHits: number;
    resurrectedLinksCount: number;
    yearEstablished: string;
  };
}

export interface ResurrectedBundle {
  targetUrl: string;
  era: string;
  title: string;
  manifest: DeadDomManifest;
  lore: HistoricalLoreSnippet[];
  // 0% Pure Restored 1998 HTML with client CGI shims
  restoredHtml1998: string;
  // 50% X-Ray HTML with data-ectoplasm and provenance tooltips
  xrayHtml1998: string;
  // 100% Modern 2026 Structured App Data
  modernView: Reincarnated2026View;
  telemetryLogs: TelemetryLogEntry[];
  sentryTraceId?: string;
  browserbaseSessionId?: string;
  browserbaseReplayUrl?: string;
}

export interface TelemetryLogEntry {
  id: string;
  timestamp: string;
  stage: "DISCOVERY" | "EXHUMATION" | "HISTORICAL_GROUNDING" | "NECROMANCY" | "DURABILITY";
  level: "info" | "warn" | "success" | "ectoplasm";
  message: string;
  details?: Record<string, unknown>;
}

export interface PresetSite {
  id: string;
  name: string;
  year: string;
  category: "Indie Gaming Shrine" | "Open-Source Library" | "Paranormal Webring";
  originalUrl: string;
  tagline: string;
  description: string;
  pathologySummary: {
    brokenImages: number;
    deadLinks: number;
    defunctCgi: number;
  };
  bundle: ResurrectedBundle;
}
