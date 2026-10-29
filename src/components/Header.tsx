"use client";

import React, { useState } from "react";
import { Ghost, Sparkles, Terminal, Globe, Flame, ShieldAlert, Cpu } from "lucide-react";
import { GOLDEN_PRESETS } from "@/presets";

interface HeaderProps {
  currentUrl: string;
  selectedPresetId: string;
  isLoading: boolean;
  onSelectPreset: (presetId: string) => void;
  onExhumeCustomUrl: (url: string) => void;
}

export function Header({
  currentUrl,
  selectedPresetId,
  isLoading,
  onSelectPreset,
  onExhumeCustomUrl
}: HeaderProps) {
  const [inputUrl, setInputUrl] = useState(currentUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onExhumeCustomUrl(inputUrl.trim());
    }
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo and Challenge Badge */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(57,255,20,0.3)] animate-float-slow">
            <Ghost className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black tracking-wider text-lg text-emerald-400">
                DEADNET
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono shadow-sm">
                ECTOPLASM BROWSER
              </span>
              <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-mono">
                v0.1.0 Open-Source
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Autonomous Digital Archaeology & Web Resurrection Engine • Powered by Open-Weight Gemma 3
            </p>
          </div>
        </div>

        {/* Live Engine Badges */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Gemma 3 (Open Weights)</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
            <span>Temporal Durable State</span>
          </div>
        </div>
      </div>

      {/* Preset Selector & Custom URL Summoner Bar */}
      <div className="max-w-7xl mx-auto mt-3 pt-2 border-t border-slate-800/60 flex flex-col sm:flex-row items-center gap-2 justify-between">
        {/* 1-Click Golden Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
            <Flame className="w-3.5 h-3.5 text-orange-400" /> Presets:
          </span>
          {GOLDEN_PRESETS.map((preset) => {
            const isSelected = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => {
                  setInputUrl(preset.originalUrl);
                  onSelectPreset(preset.id);
                }}
                disabled={isLoading}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-all border whitespace-nowrap flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98] ${
                  isSelected
                    ? "bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(57,255,20,0.4)] ring-1 ring-emerald-500/50"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <span>{preset.year}</span>
                <span className="font-semibold text-slate-200">{preset.name.split(":")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Live URL Exhumation Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Globe className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Exhume custom dead URL or Wayback link..."
              className="w-full pl-8 pr-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-600 hover:bg-emerald-500 text-slate-950 transition-colors flex items-center gap-1.5 shadow-[0_0_10px_rgba(57,255,20,0.3)] disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Sparkles className="w-3.5 h-3.5 animate-spin" /> Exhuming...
              </>
            ) : (
              <>
                <Terminal className="w-3.5 h-3.5" /> Summon
              </>
            )}
          </button>
        </form>
      </div>
    </header>
  );
}
