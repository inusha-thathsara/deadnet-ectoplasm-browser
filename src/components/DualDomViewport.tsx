"use client";

import React from "react";
import { ResurrectedBundle } from "@/types";
import { Sparkles, Download, FileText, CheckCircle, Flame, ExternalLink, Calendar, User } from "lucide-react";

interface DualDomViewportProps {
  bundle: ResurrectedBundle | null;
  sliderValue: number;
  isLoading: boolean;
}

export function DualDomViewport({ bundle, sliderValue, isLoading }: DualDomViewportProps) {
  if (isLoading && !bundle) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-950 p-6 text-center font-mono">
        <div className="w-16 h-16 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin mb-4 shadow-[0_0_20px_rgba(57,255,20,0.3)]" />
        <h3 className="text-emerald-400 font-bold text-base mb-1">EXHUMING ARCHIVAL DOM TREE...</h3>
        <p className="text-slate-400 text-xs max-w-md">
          Stagehand and Browserbase are inspecting broken assets while Gemma 3 executes multi-pass reanimation.
        </p>
      </div>
    );
  }

  if (!bundle) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-950 p-6 text-center font-mono text-slate-500">
        <p>No website currently loaded. Select a Graveyard Preset to begin.</p>
      </div>
    );
  }

  // 100% Mode: Clean 2026 Reincarnated Modern View
  if (sliderValue === 100) {
    const { modernView } = bundle;
    return (
      <div className="flex-1 overflow-y-auto bg-slate-950 text-slate-100 p-6 sm:p-10 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Modern Hero Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                2026 REINCARNATION
              </span>
              <span>•</span>
              <span>ORIGINAL ERA: {bundle.era}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {modernView.heroHeadline}
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              {modernView.heroSubheadline}
            </p>
          </div>

          {/* Extracted Entities Grid */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2 font-mono">
              <FileText className="w-5 h-5 text-emerald-400" />
              Preserved Knowledge & Reconstructed Artifacts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modernView.entities.map((entity) => (
                <div
                  key={entity.id}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                        {entity.type.toUpperCase()}
                      </span>
                      {entity.isAiReconstructed ? (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                          <Flame className="w-3 h-3" /> Reconstructed ({Math.round(entity.confidence * 100)}%)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                          <CheckCircle className="w-3 h-3" /> Original Archival
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{entity.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{entity.content}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {entity.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {entity.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reincarnated Guestbook */}
          {modernView.guestbookEntries.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h2 className="text-xl font-bold text-slate-200 font-mono">
                Community Memory Vault (Perpetual Guestbook)
              </h2>
              <div className="space-y-3">
                {modernView.guestbookEntries.map((entry, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-slate-200">{entry.name}</span>
                      <span className="text-slate-500">{entry.date}</span>
                    </div>
                    <p className="text-sm text-slate-300 italic">"{entry.message}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modern Footer Stats */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <div>Resurrected from {modernView.footerStats.yearEstablished} via DeadNet Engine</div>
            <div>Original Hit Counter State: {modernView.footerStats.originalHits.toLocaleString()} visits</div>
          </div>
        </div>
      </div>
    );
  }

  // 0% (1998 CRT Mode) or 50% (Haunted X-Ray Mode) rendered via sandboxed <iframe>
  const targetHtml = sliderValue === 50 ? bundle.xrayHtml1998 : bundle.restoredHtml1998;
  const isCrt = sliderValue === 0;

  return (
    <div className={`flex-1 relative h-full w-full bg-black overflow-hidden ${isCrt ? "crt-overlay" : ""}`}>
      {/* 50% X-Ray Mode Notification Banner */}
      {sliderValue === 50 && (
        <div className="absolute top-2 right-4 z-30 pointer-events-none px-3 py-1 rounded bg-emerald-950/90 border border-emerald-500/80 text-emerald-300 font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-400" />
          <span>PROVENANCE X-RAY ACTIVE: GREEN GLOW MARKS AI RECONSTRUCTIONS</span>
        </div>
      )}

      {/* 0% Mode Retro CRT Monitor Bezel Indicator */}
      {isCrt && (
        <div className="absolute top-2 left-4 z-30 pointer-events-none px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono text-[11px]">
          [ CRT SCANLINE FILTER: 800x600 60Hz TRINITRON ]
        </div>
      )}

      {/* Sandboxed Iframe (Guarantees zero CSS pollution to modern Next.js parent) */}
      <iframe
        title="Archival Viewport"
        srcDoc={targetHtml}
        sandbox="allow-scripts allow-forms allow-modals"
        className="w-full h-full border-0 bg-black"
      />
    </div>
  );
}
