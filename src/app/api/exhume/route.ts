import { NextRequest, NextResponse } from "next/server";
import { GOLDEN_PRESETS } from "@/presets";
import { executeResurrectionPipeline } from "@/temporal/workflows";
import { ResurrectedBundle, TelemetryLogEntry } from "@/types";
import { validateTargetUrl } from "@/lib/security";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, presetId } = body;

    // Check if user requested one of our Golden Presets
    if (presetId) {
      const preset = GOLDEN_PRESETS.find((p) => p.id === presetId);
      if (preset) {
        // Stream the preset's real telemetry logs with micro-delays for an authentic live experience
        const stream = new ReadableStream({
          async start(controller) {
            const encoder = new TextEncoder();

            for (const log of preset.bundle.telemetryLogs) {
              const data = JSON.stringify({ type: "log", log });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
              await new Promise((r) => setTimeout(r, 280));
            }

            // Stream final bundle
            const finalData = JSON.stringify({ type: "complete", bundle: preset.bundle });
            controller.enqueue(encoder.encode(`data: ${finalData}\n\n`));
            controller.close();
          }
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive"
          }
        });
      }
    }

    // Security Validation & SSRF Prevention
    let targetUrl = "http://www.geocities.com/Tokyo/Flats/9999/dreamcast_underground.html";
    if (url) {
      const validation = validateTargetUrl(url);
      if (!validation.isValid) {
        return NextResponse.json({ error: validation.error || "Invalid target URL" }, { status: 400 });
      }
      targetUrl = validation.sanitizedUrl!;
    }

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        try {
          const bundle: ResurrectedBundle = await executeResurrectionPipeline(
            { targetUrl },
            (log: TelemetryLogEntry) => {
              const data = JSON.stringify({ type: "log", log });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          );

          const finalData = JSON.stringify({ type: "complete", bundle });
          controller.enqueue(encoder.encode(`data: ${finalData}\n\n`));
        } catch (err) {
          const errorLog: TelemetryLogEntry = {
            id: `err-${Date.now()}`,
            timestamp: "00:09.999",
            stage: "DURABILITY",
            level: "warn",
            message: `Pipeline encountered exception: ${err instanceof Error ? err.message : String(err)}. Falling back to cached preset.`
          };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "log", log: errorLog })}\n\n`));
          // Fallback to default preset
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "complete", bundle: GOLDEN_PRESETS[0].bundle })}\n\n`));
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
