import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { validateTargetUrl, sanitizeTextInput } from "../src/lib/security.ts";
import { parseWaybackInputUrl } from "../src/lib/waybackClient.ts";
import { extractDomPathology } from "../src/lib/stagehandExtractor.ts";
import { DeadDomManifestSchema } from "../src/types/index.ts";

describe("DeadNet Production Security Suite", () => {
  test("allows valid public web URLs", () => {
    const res1 = validateTargetUrl("http://www.geocities.com/Tokyo/Flats/9999/");
    assert.equal(res1.isValid, true);
    assert.equal(res1.sanitizedUrl, "http://www.geocities.com/Tokyo/Flats/9999/");

    const res2 = validateTargetUrl("https://archive.org/web/1999/");
    assert.equal(res2.isValid, true);
  });

  test("blocks SSRF attempts on loopback addresses", () => {
    const res1 = validateTargetUrl("http://localhost:3000/admin");
    assert.equal(res1.isValid, false);
    assert.match(res1.error, /restricted for security/i);

    const res2 = validateTargetUrl("http://127.0.0.1:8080/secret");
    assert.equal(res2.isValid, false);
  });

  test("blocks cloud metadata service endpoints (AWS/GCP/Azure)", () => {
    const res = validateTargetUrl("http://169.254.169.254/latest/meta-data/");
    assert.equal(res.isValid, false);
    assert.match(res.error, /restricted for security/i);
  });

  test("blocks private RFC1918 subnets", () => {
    assert.equal(validateTargetUrl("http://192.168.1.1/router").isValid, false);
    assert.equal(validateTargetUrl("http://10.0.0.1/internal").isValid, false);
    assert.equal(validateTargetUrl("http://172.16.0.1/dev").isValid, false);
  });

  test("sanitizes text input properly", () => {
    const dirty = "<script>alert('xss')</script>Hello World";
    const clean = sanitizeTextInput(dirty, 50);
    assert.equal(clean.includes("<"), false);
    assert.equal(clean.includes(">"), false);
    assert.equal(clean.includes("Hello World"), true);
  });
});

describe("Wayback Client & URL Parsing", () => {
  test("extracts original URL from direct Wayback snapshots", () => {
    const waybackUrl = "https://web.archive.org/web/19990909120000/http://www.dreamcast.com/";
    const res = parseWaybackInputUrl(waybackUrl);
    assert.equal(res.originalUrl, "http://www.dreamcast.com/");
    assert.equal(res.explicitTimestamp, "19990909120000");
  });

  test("handles id_ modifier in Wayback snapshot URLs", () => {
    const waybackUrl = "https://web.archive.org/web/19990909120000id_/http://www.dreamcast.com/";
    const res = parseWaybackInputUrl(waybackUrl);
    assert.equal(res.originalUrl, "http://www.dreamcast.com/");
    assert.equal(res.explicitTimestamp, "19990909120000");
  });

  test("passes through standard URLs unchanged", () => {
    const standardUrl = "http://www.angelfire.com/games/pokemonsecrets/";
    const res = parseWaybackInputUrl(standardUrl);
    assert.equal(res.originalUrl, standardUrl);
    assert.equal(res.explicitTimestamp, undefined);
  });
});

describe("DOM Pathology Extractor & Zod Schema", () => {
  test("autonomously synthesizes rich period DOM when input is empty", async () => {
    const targetUrl = "http://www.angelfire.com/games/pokemonsecrets/";
    const { manifest } = await extractDomPathology("", targetUrl);

    // Validate against strict Zod schema
    const parsed = DeadDomManifestSchema.safeParse(manifest);
    assert.equal(parsed.success, true);

    assert.equal(manifest.brokenImages.length > 0, true);
    assert.equal(manifest.deadLinks.length > 0, true);
    assert.equal(manifest.defunctScriptsAndForms.length > 0, true);
    assert.match(manifest.siteTitle, /PokéSecrets|Pokémon/i);
    assert.equal(manifest.survivingMainContent.length > 50, true);
  });

  test("correctly parses real archival HTML elements", async () => {
    const sampleHtml = `
      <html>
        <head><title>Sega Underground 1999</title></head>
        <body>
          <h1>Welcome to the Dreamcast Hub</h1>
          <img src="flame_swirl.gif" alt="Spinning Flame Swirl">
          <a href="vmu_tool.zip">Download VMU Tool</a>
          <form action="/cgi-bin/guestbook.pl" method="POST">
            <input name="msg">
          </form>
        </body>
      </html>
    `;

    const { manifest } = await extractDomPathology(sampleHtml, "http://example.com/dc");
    assert.equal(manifest.siteTitle, "Sega Underground 1999");
    assert.equal(manifest.brokenImages.length, 1);
    assert.equal(manifest.deadLinks.length, 1);
    assert.equal(manifest.defunctScriptsAndForms.length, 1);
    assert.match(manifest.survivingMainContent, /Dreamcast Hub/i);
  });
});

