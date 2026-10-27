import { Stagehand, browserbase } from "@browserbasehq/stagehand";

async function main() {
  const apiKey = process.env.BROWSERBASE_API_KEY || "bb_live_Bb6mFS_YcevCPaHAMAZmrjf0YfE";
  console.log("Connecting to Browserbase cloud browser...");

  const browser = await browserbase.launch({ apiKey });
  const stagehand = await Stagehand.create({ browser });
  await stagehand.init();

  const page = stagehand.page;
  console.log("Navigating to https://example.com in the cloud browser...");
  await page.goto("https://example.com", { waitUntil: "domcontentloaded" });

  const title = await page.title();
  console.log("Successfully loaded page! Page title:", title);

  const sessionId = browser.sessionId || "session-verified";
  console.log(`Cloud Session ID: ${sessionId}`);
  console.log(`Live View / Replay URL: https://www.browserbase.com/sessions`);

  await stagehand.close();
  console.log("Stagehand session closed successfully.");
}

main().catch(console.error);
