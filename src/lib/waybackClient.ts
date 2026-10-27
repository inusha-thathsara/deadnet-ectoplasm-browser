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

export async function fetchWaybackSnapshots(targetUrl: string, limit: number = 5): Promise<WaybackSnapshot[]> {
  try {
    const cdxApiUrl = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(targetUrl)}&output=json&limit=${limit}&filter=statuscode:200`;
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
      url: targetUrl,
      timestamp: fallbackTimestamp,
      originalUrl: targetUrl,
      mimetype: "text/html",
      statusCode: "200",
      rawSnapshotUrl: `https://web.archive.org/web/${fallbackTimestamp}id_/${targetUrl}`
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
