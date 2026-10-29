import fs from "fs";

async function verify() {
  const env = {};
  if (fs.existsSync(".env.local")) {
    const lines = fs.readFileSync(".env.local", "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
        const idx = trimmed.indexOf("=");
        env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  }

  console.log("\n=======================================================");
  console.log("       DEADNET ECTOPLASM BROWSER — ENV AUDIT");
  console.log("=======================================================\n");

  // 1. Browserbase
  if (env.BROWSERBASE_API_KEY) {
    console.log("🟢 BROWSERBASE_API_KEY: Set and ready for Stagehand cloud browsing.");
  } else {
    console.log("⚪ BROWSERBASE_API_KEY: Not set.");
  }

  // 2. OpenRouter (Gemma Open-Weight Cloud Fallback)
  if (env.OPENROUTER_API_KEY) {
    try {
      const res = await fetch("https://openrouter.ai/api/v1/auth/key", {
        headers: { Authorization: `Bearer ${env.OPENROUTER_API_KEY}` }
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`🟢 OPENROUTER_API_KEY: Valid! Active for Gemma 2/3 inference.`);
      } else {
        console.log(`🔴 OPENROUTER_API_KEY: Server returned error:`, data);
      }
    } catch (e) {
      console.log(`⚠️ OPENROUTER_API_KEY check error:`, e.message);
    }
  } else {
    console.log("⚪ OPENROUTER_API_KEY: Not set.");
  }

  // 3. ElevenLabs
  if (env.ELEVENLABS_API_KEY) {
    try {
      const res = await fetch("https://api.elevenlabs.io/v1/user", {
        headers: { "xi-api-key": env.ELEVENLABS_API_KEY }
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`🟢 ELEVENLABS_API_KEY: Valid! Tier: ${data.subscription?.tier || "active"}`);
        // Test audio synthesis
        const ttsRes = await fetch("https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": env.ELEVENLABS_API_KEY
          },
          body: JSON.stringify({
            text: "An ethereal echo awakens. Exhuming the lost digital ancestors of 1999.",
            model_id: "eleven_turbo_v2_5"
          })
        });
        if (ttsRes.ok) {
          const audioBuf = await ttsRes.arrayBuffer();
          console.log(`🔊 ElevenLabs TTS Generation: SUCCESS! Generated ${audioBuf.byteLength} bytes of ghostly audio.`);
        }
      } else {
        console.log(`🔴 ELEVENLABS_API_KEY: Server returned error:`, data);
      }
    } catch (e) {
      console.log(`⚠️ ELEVENLABS_API_KEY check error:`, e.message);
    }
  } else {
    console.log("⚪ ELEVENLABS_API_KEY: Not set.");
  }

  // 4. Sentry DSN & Auth Token
  if (env.NEXT_PUBLIC_SENTRY_DSN) {
    console.log(`🟢 NEXT_PUBLIC_SENTRY_DSN: Configured (${env.NEXT_PUBLIC_SENTRY_DSN.slice(0, 42)}...)`);
  } else {
    console.log("⚪ NEXT_PUBLIC_SENTRY_DSN: Not set.");
  }
  if (env.SENTRY_AUTH_TOKEN) {
    console.log(`🟢 SENTRY_AUTH_TOKEN: Configured (sntryu_...)`);
  }

  // 5. SerpApi
  if (env.SERPAPI_API_KEY) {
    console.log(`🟢 SERPAPI_API_KEY: Configured.`);
  } else {
    console.log(`⚪ SERPAPI_API_KEY: Blank (DeadNet will use built-in offline historical citations).`);
  }

  console.log("\n=======================================================\n");
}

verify();
