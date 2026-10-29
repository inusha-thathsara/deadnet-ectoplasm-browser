"use client";

import React, { useState, useEffect, useRef } from "react";
import { GOLDEN_PRESETS } from "@/presets";
import { ResurrectedBundle, TelemetryLogEntry } from "@/types";
import { Header } from "@/components/Header";
import { EctoplasmSlider } from "@/components/EctoplasmSlider";
import { ArchaeologyTerminal } from "@/components/ArchaeologyTerminal";
import { DualDomViewport } from "@/components/DualDomViewport";

export default function DeadNetBrowserHome() {
  const defaultPreset = GOLDEN_PRESETS[0];

  const [selectedPresetId, setSelectedPresetId] = useState<string>(defaultPreset.id);
  const [currentUrl, setCurrentUrl] = useState<string>(defaultPreset.originalUrl);
  const [sliderValue, setSliderValue] = useState<number>(0); // 0 = 1998, 50 = X-Ray, 100 = 2026
  const [bundle, setBundle] = useState<ResurrectedBundle | null>(defaultPreset.bundle);
  const [logs, setLogs] = useState<TelemetryLogEntry[]>(defaultPreset.bundle.telemetryLogs);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isTerminalCollapsed, setIsTerminalCollapsed] = useState<boolean>(false);

  const audioContextRef = useRef<AudioContext | null>(null);

  // Synthesize retro computer sound effect (Web Audio API)
  const playRetroSound = (freq = 800, type: OscillatorType = "sine", duration = 0.08) => {
    if (!audioEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Synthesize authentic ghostly voice whisper via ElevenLabs
  const playElevenLabsWhisper = async (text: string) => {
    if (!audioEnabled) return;
    try {
      const res = await fetch("/api/whisper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      if (res.ok) {
        const blob = await res.blob();
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.volume = 0.85;
        audio.play().catch(() => {});
      }
    } catch {
      // Audio fallback
    }
  };

  const handleSliderChange = (newVal: number) => {
    setSliderValue(newVal);
    playRetroSound(newVal === 50 ? 520 : newVal === 100 ? 1200 : 380, "square", 0.09);
  };

  const handleSelectPreset = async (presetId: string) => {
    const preset = GOLDEN_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    setSelectedPresetId(preset.id);
    setCurrentUrl(preset.originalUrl);
    setIsLoading(true);
    setLogs([]);
    playRetroSound(440, "sawtooth", 0.12);

    try {
      const response = await fetch("/api/exhume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ presetId: preset.id })
      });

      if (!response.body) {
        setBundle(preset.bundle);
        setLogs(preset.bundle.telemetryLogs);
        setIsLoading(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        streamBuffer += decoder.decode(value, { stream: true });
        const lines = streamBuffer.split("\n\n");
        streamBuffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const payload = JSON.parse(line.slice(6));
              if (payload.type === "log") {
                setLogs((prev) => [...prev, payload.log]);
                playRetroSound(700 + Math.random() * 200, "triangle", 0.04);
              } else if (payload.type === "complete") {
                setBundle(payload.bundle);
                playRetroSound(950, "sine", 0.15);
                playElevenLabsWhisper(`A digital ancestor awakens from ${payload.bundle.era}. ${payload.bundle.title}.`);
              }
            } catch {
              // ignore malformed chunks
            }
          }
        }
      }
    } catch (err) {
      console.warn("Stream error, falling back to instant preset:", err);
      setBundle(preset.bundle);
      setLogs(preset.bundle.telemetryLogs);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExhumeCustomUrl = async (url: string) => {
    setSelectedPresetId("");
    setCurrentUrl(url);
    setIsLoading(true);
    setLogs([]);
    playRetroSound(300, "sawtooth", 0.15);

    try {
      const response = await fetch("/api/exhume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      if (!response.body) {
        setIsLoading(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        streamBuffer += decoder.decode(value, { stream: true });
        const lines = streamBuffer.split("\n\n");
        streamBuffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const payload = JSON.parse(line.slice(6));
              if (payload.type === "log") {
                setLogs((prev) => [...prev, payload.log]);
                playRetroSound(600 + Math.random() * 300, "sine", 0.04);
              } else if (payload.type === "complete") {
                setBundle(payload.bundle);
                playRetroSound(1100, "sine", 0.18);
                playElevenLabsWhisper(`A digital ancestor awakens from ${payload.bundle.era}. ${payload.bundle.title}.`);
              }
            } catch {
              // ignore malformed chunks
            }
          }
        }
      }
    } catch (err) {
      console.warn("Exhumation stream failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-mono">
      {/* 1. Header with Golden Presets & URL Summoner */}
      <Header
        currentUrl={currentUrl}
        selectedPresetId={selectedPresetId}
        isLoading={isLoading}
        onSelectPreset={handleSelectPreset}
        onExhumeCustomUrl={handleExhumeCustomUrl}
      />

      {/* 2. Signature Ectoplasm Slider (0% - 50% - 100%) */}
      <EctoplasmSlider
        sliderValue={sliderValue}
        onChange={handleSliderChange}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled(!audioEnabled)}
      />

      {/* 3. Main Split-Screen Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Pane: Split-Screen Archaeological Telemetry Terminal */}
        <div
          className={`transition-all duration-300 border-r border-slate-800 ${
            isTerminalCollapsed
              ? "hidden lg:flex lg:w-12 items-center justify-center bg-slate-950 cursor-pointer"
              : "w-full lg:w-96 xl:w-[420px] h-64 lg:h-full shrink-0"
          }`}
          onClick={() => isTerminalCollapsed && setIsTerminalCollapsed(false)}
        >
          {isTerminalCollapsed ? (
            <div className="py-4 text-center transform -rotate-90 whitespace-nowrap text-xs text-slate-400 font-mono flex items-center gap-2">
              <span>▶ OPEN DOM INSPECTOR</span>
            </div>
          ) : (
            <div className="h-full relative flex flex-col">
              <ArchaeologyTerminal bundle={bundle} logs={logs} isLoading={isLoading} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTerminalCollapsed(true);
                }}
                className="hidden lg:block absolute top-2 right-2 text-[10px] text-slate-500 hover:text-slate-300 px-1 rounded bg-slate-900 border border-slate-800"
                title="Collapse Terminal"
              >
                ◀
              </button>
            </div>
          )}
        </div>

        {/* Right Pane: Dual-DOM Viewport (1998 CRT / 50% X-Ray / 2026 Modern) */}
        <DualDomViewport bundle={bundle} sliderValue={sliderValue} isLoading={isLoading} />
      </div>
    </div>
  );
}
