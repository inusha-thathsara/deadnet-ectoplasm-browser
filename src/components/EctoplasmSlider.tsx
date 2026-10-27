"use client";

import React from "react";
import { Eye, Monitor, Sparkles, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface EctoplasmSliderProps {
  sliderValue: number; // 0, 50, or 100
  onChange: (val: number) => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
}

export function EctoplasmSlider({
  sliderValue,
  onChange,
  audioEnabled,
  onToggleAudio
}: EctoplasmSliderProps) {
  const getModeLabel = () => {
    if (sliderValue < 30) {
      return {
        title: "0% — 1998 CRT MODE",
        desc: "Pristine healed HTML 3.2 with working client-side CGI shims and CRT scanlines.",
        badgeColor: "text-amber-400 bg-amber-950/60 border-amber-500/40"
      };
    } else if (sliderValue < 75) {
      return {
        title: "50% — HAUNTED X-RAY MODE",
        desc: "Emerald ectoplasm highlighting AI-reconstructed nodes with hovering SerpApi provenance citations.",
        badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40 shadow-[0_0_12px_rgba(57,255,20,0.3)]"
      };
    } else {
      return {
        title: "100% — 2026 REINCARNATED",
        desc: "Extracted semantic entities rendered into a clean, modern, responsive Next.js application.",
        badgeColor: "text-cyan-400 bg-cyan-950/60 border-cyan-500/40"
      };
    }
  };

  const mode = getModeLabel();

  return (
    <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Slider Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
            <span className="font-bold text-slate-200">ECTOPLASM SLIDER:</span>
          </div>

          <div className="flex-1 md:w-72 flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              step="50"
              value={sliderValue}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
            />
          </div>

          {/* Quick-Hop Mode Buttons */}
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <button
              onClick={() => onChange(0)}
              className={`px-2 py-0.5 rounded border transition-colors ${
                sliderValue === 0
                  ? "bg-amber-950 border-amber-500 text-amber-300 font-bold"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              1998 CRT (0%)
            </button>
            <button
              onClick={() => onChange(50)}
              className={`px-2 py-0.5 rounded border transition-colors ${
                sliderValue === 50
                  ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_8px_rgba(57,255,20,0.3)]"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              X-Ray (50%)
            </button>
            <button
              onClick={() => onChange(100)}
              className={`px-2 py-0.5 rounded border transition-colors ${
                sliderValue === 100
                  ? "bg-cyan-950 border-cyan-500 text-cyan-300 font-bold"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              2026 Modern (100%)
            </button>
          </div>
        </div>

        {/* Current Mode Description Banner & Ambiance Toggle */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto font-mono text-xs">
          <div className={`px-2.5 py-1 rounded-md border flex items-center gap-2 ${mode.badgeColor}`}>
            {sliderValue === 0 && <Monitor className="w-3.5 h-3.5 text-amber-400" />}
            {sliderValue === 50 && <Eye className="w-3.5 h-3.5 text-emerald-400" />}
            {sliderValue === 100 && <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />}
            <span className="font-bold">{mode.title}:</span>
            <span className="hidden xl:inline text-[11px] opacity-90">{mode.desc}</span>
          </div>

          <button
            onClick={onToggleAudio}
            title="Toggle Retro CRT & Dial-up Ambiance"
            className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
