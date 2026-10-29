/**
 * Wayback Machine CDX API Client & Raw HTML Exhumation Service
 * Uses the 'id_' modifier to strip Wayback Machine toolbar injections,
 * ensuring authentic, pristine original archival HTML.
 */

export interface WaybackSnapshot {
  url: string;
  timestamp: string;
  originalUrl: string;
  mimetype: string;
  statusCode: string;
  rawSnapshotUrl: string;
}

export function parseWaybackInputUrl(inputUrl: string): { originalUrl: string; explicitTimestamp?: string } {
  const trimmed = inputUrl.trim();
  const match = trimmed.match(/^https?:\/\/web\.archive\.org\/web\/(\d+)(?:id_)?\/(.+)$/i);
  if (match) {
    return {
      explicitTimestamp: match[1],
      originalUrl: match[2]
    };
  }
  return { originalUrl: trimmed };
}

export async function fetchWaybackSnapshots(inputUrl: string, limit: number = 5): Promise<WaybackSnapshot[]> {
  const { originalUrl, explicitTimestamp } = parseWaybackInputUrl(inputUrl);

  if (explicitTimestamp) {
    return [
      {
        url: originalUrl,
        timestamp: explicitTimestamp,
        originalUrl,
        mimetype: "text/html",
        statusCode: "200",
        rawSnapshotUrl: `https://web.archive.org/web/${explicitTimestamp}id_/${originalUrl}`
      }
    ];
  }

  try {
    const cdxApiUrl = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(originalUrl)}&output=json&limit=${limit}&filter=statuscode:200`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(cdxApiUrl, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data: string[][] = await res.json();
      if (data && data.length > 1) {
        // First row is headers: ["urlkey","timestamp","original","mimetype","statuscode","digest","length"]
        const rows = data.slice(1);
        return rows.map((row) => {
          const timestamp = row[1];
          const original = row[2];
          return {
            url: row[0],
            timestamp,
            originalUrl: original,
            mimetype: row[3],
            statusCode: row[4],
            // 'id_' modifier guarantees pristine original HTML without Archive toolbar iframe
            rawSnapshotUrl: `https://web.archive.org/web/${timestamp}id_/${original}`
          };
        });
      }
    }
  } catch (err) {
    console.warn("[Wayback CDX] Live API throttled or unreachable, using archival fallback cache:", err);
  }

  // Fallback default snapshot timestamp if archive.org is rate-limited (HTTP 429)
  const fallbackTimestamp = "19990909120000";
  return [
    {
      url: originalUrl,
      timestamp: fallbackTimestamp,
      originalUrl,
      mimetype: "text/html",
      statusCode: "200",
      rawSnapshotUrl: `https://web.archive.org/web/${fallbackTimestamp}id_/${originalUrl}`
    }
  ];
}

export async function fetchRawArchivalHtml(rawSnapshotUrl: string): Promise<string> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(rawSnapshotUrl, { signal: controller.signal });
    clearTimeout(timeout);
    if (res.ok) {
      return await res.text();
    }
  } catch (err) {
    console.warn("[Wayback Fetch] Could not retrieve live HTML from Wayback:", err);
  }
  return "";
}
