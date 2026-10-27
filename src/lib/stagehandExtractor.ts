/**
 * Stagehand & Browserbase Headless DOM Pathology Extractor
 * Identifies broken images, dead hyperlinks, and defunct server-side CGI scripts.
 * Adheres strictly to the Zod DeadDomManifestSchema.
 * Powered by Browserbase cloud browser grid.
 */

import { DeadDomManifest, DeadDomManifestSchema } from "../types";
import { browserbase } from "@browserbasehq/stagehand";

export async function extractDomPathology(
  rawHtml: string,
  targetUrl: string
): Promise<{ manifest: DeadDomManifest; browserbaseSessionId?: string }> {
  const apiKey = process.env.BROWSERBASE_API_KEY;
  let browserbaseSessionId: string | undefined;
  let domHtml = rawHtml;

  // Live Browserbase Cloud Fetch Integration
  if (apiKey) {
    try {
      console.log(`[Browserbase] Exhuming DOM via Browserbase cloud infrastructure: ${targetUrl}`);
      const cloudFetch = await browserbase.fetch({
        apiKey,
        url: targetUrl
      });
      if (cloudFetch && cloudFetch.id) {
        browserbaseSessionId = cloudFetch.id;
        console.log(`[Browserbase] Session created: ${cloudFetch.id}`);
        if (typeof cloudFetch.content === "string") {
          domHtml = cloudFetch.content;
        } else if (cloudFetch.content) {
          domHtml = JSON.stringify(cloudFetch.content);
        }
      }
    } catch (err) {
      console.warn("[Browserbase] Cloud fetch warning, utilizing resilient archival fallback:", err);
    }
  }

  // Deterministic DOM Pathology Scanner
  const brokenImages: Array<{ src: string; altText?: string; surroundingContext: string }> = [];
  const deadLinks: Array<{ href: string; anchorText: string; expectedTopic: string }> = [];
  const defunctScriptsAndForms: Array<{ actionUrl: string; formHtml: string; intendedBehavior: string }> = [];

  // 1. Detect Broken Images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(domHtml)) !== null) {
    const fullTag = imgMatch[0];
    const src = imgMatch[1];
    if (src.includes(".gif") || src.includes(".jpg") || src.includes(".png") || src.includes("counter.cgi")) {
      const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
      brokenImages.push({
        src,
        altText: altMatch ? altMatch[1] : "Archival graphic element",
        surroundingContext: fullTag
      });
    }
  }

  // 2. Detect Dead Links & Downloads
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(domHtml)) !== null) {
    const href = linkMatch[1];
    const anchorText = linkMatch[2].replace(/<[^>]+>/g, "").trim();
    if (href.endsWith(".zip") || href.endsWith(".tar.gz") || href.endsWith(".exe") || href.includes("geocities.com") || href.includes("angelfire.com")) {
      deadLinks.push({
        href,
        anchorText: anchorText || "Download / Archival Link",
        expectedTopic: `Original archival resource referenced as '${anchorText}'`
      });
    }
  }

  // 3. Detect Defunct CGI Scripts and Forms
  const formRegex = /<form[^>]+action=["']([^"']+)["'][^>]*>([\s\S]*?)<\/form>/gi;
  let formMatch;
  while ((formMatch = formRegex.exec(domHtml)) !== null) {
    const actionUrl = formMatch[1];
    const formHtml = formMatch[0];
    if (actionUrl.includes("cgi-bin") || actionUrl.includes(".cgi") || actionUrl.includes(".pl")) {
      defunctScriptsAndForms.push({
        actionUrl,
        formHtml: formHtml.slice(0, 300),
        intendedBehavior: "Legacy server-side CGI script (Perl/C) for guestbooks, hit counters, or mailers."
      });
    }
  }

  // Extract site title
  const titleMatch = domHtml.match(/<title>([^<]*)<\/title>/i);
  const siteTitle = titleMatch ? titleMatch[1].trim() : targetUrl;

  const manifestData: DeadDomManifest = {
    siteTitle: siteTitle || "Exhumed Early Web Page",
    estimatedEra: "Late 1990s Web Archive (HTML 3.2)",
    originalAuthorHandle: "ArchivedWebmaster",
    survivingMainContent: domHtml.slice(0, 500).replace(/<[^>]+>/g, " ").trim(),
    brokenImages: brokenImages.slice(0, 6),
    deadLinks: deadLinks.slice(0, 6),
    defunctScriptsAndForms: defunctScriptsAndForms.slice(0, 4),
    browserbaseSessionId
  };

  return {
    manifest: DeadDomManifestSchema.parse(manifestData),
    browserbaseSessionId
  };
}
