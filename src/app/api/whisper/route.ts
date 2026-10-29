import { NextRequest } from "next/server";
import { sanitizeTextInput } from "@/lib/security";

export async function POST(req: NextRequest) {
  try {
    const { text, voiceId } = await req.json();
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ELEVENLABS_API_KEY not configured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const sanitizedText = sanitizeTextInput(text, 250);

    // Default to an eerie / mysterious voice (e.g. 'George' or 'Rachel')
    const selectedVoiceId = voiceId || "JBFqnCBsd6RMkjVDRZzb"; // George (British, deep, narrative)

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${selectedVoiceId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey
      },
      body: JSON.stringify({
        text: sanitizedText || "An ethereal echo awakens. Exhuming the lost digital ancestors of nineteen ninety nine.",
        model_id: "eleven_turbo_v2_5",
        voice_settings: {
          stability: 0.35,
          similarity_boost: 0.75,
          style: 0.45,
          use_speaker_boost: true
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({ error: errText }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    const audioBuffer = await response.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Internal Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
