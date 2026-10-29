"use client";

import React, { useState, useRef, useEffect } from "react";
import { ResurrectedBundle } from "@/types";
import { Sparkles, Download, FileText, CheckCircle, Flame, ExternalLink, Calendar, User, ArrowUp, Orbit, Layers } from "lucide-react";
import { Card3D } from "./Card3D";
import { Spectral3DCanvas } from "./Spectral3DCanvas";

interface DualDomViewportProps {
  bundle: ResurrectedBundle | null;
  sliderValue: number;
  isLoading: boolean;
}

export function DualDomViewport({ bundle, sliderValue, isLoading }: DualDomViewportProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [show3dHolocron, setShow3dHolocron] = useState(true);

  // Track scroll progress in 100% modern view
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const totalHeight = el.scrollHeight - el.clientHeight;
    if (totalHeight > 0) {
      const progress = (el.scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(el.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading && !bundle) {
    return (
      <div className="flex-1 relative flex flex-col items-center justify-center bg-slate-950 p-6 text-center font-mono overflow-hidden">
        {/* Animated Laser Scanning Line */}
        <div className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_15px_#39ff14] animate-laser-scan pointer-events-none" />

        {/* 3D Holocron in Loading State */}
        <div className="w-full max-w-sm mb-6">
          <Spectral3DCanvas sliderValue={50} isLoading={true} className="border-emerald-500/50 shadow-[0_0_25px_rgba(57,255,20,0.25)]" />
        </div>

        <h3 className="text-emerald-400 font-bold text-base mb-1 tracking-wider animate-pulse flex items-center gap-2">
          <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
          EXHUMING ARCHIVAL DOM TREE...
        </h3>
        <p className="text-slate-400 text-xs max-w-md leading-relaxed">
          Headless scanners are inspecting broken assets while the digital archaeology engine executes multi-pass reconstruction.
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

  // 100% Mode: Clean 2026 Reincarnated Modern View with 3D Card Tilts and Scrolling Effects
  if (sliderValue === 100) {
    const { modernView } = bundle;
    return (
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 relative overflow-y-auto bg-slate-950 text-slate-100 p-6 sm:p-10 font-sans scroll-smooth"
      >
        {/* Scrolling Ectoplasm Progress Bar */}
        <div className="fixed top-[118px] right-0 left-0 lg:left-80 h-1 bg-slate-900/60 z-40 backdrop-blur-sm pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Modern Hero Header with Ambient Float */}
          <div className="border-b border-slate-800 pb-6 relative">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  2026 REINCARNATION
                </span>
                <span>•</span>
                <span className="text-slate-400 font-mono">ORIGINAL ERA: {bundle.era}</span>
              </div>

              {/* 3D Holocron Toggle Pill */}
              <button
                onClick={() => setShow3dHolocron(!show3dHolocron)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 transition-all shadow-sm"
              >
                <Orbit className={`w-3.5 h-3.5 ${show3dHolocron ? "animate-spin text-cyan-400" : ""}`} />
                <span>{show3dHolocron ? "Hide 3D Topology" : "Show 3D Topology"}</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {modernView.heroHeadline}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
              {modernView.heroSubheadline}
            </p>

            {/* Optional 3D Holocron Topology Panel */}
            {show3dHolocron && (
              <div className="mt-6 animate-card-reveal">
                <Spectral3DCanvas sliderValue={100} className="border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]" />
              </div>
            )}
          </div>

          {/* Extracted Entities Grid with 3D Tilt Cards */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2 font-mono">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>Preserved Knowledge & Reconstructed Artifacts</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono font-normal">
                {modernView.entities.length} items
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modernView.entities.map((entity, idx) => (
                <Card3D
                  key={entity.id}
                  delayMs={idx * 80}
                  glowColor={entity.isAiReconstructed ? "emerald" : "cyan"}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 font-mono text-[11px] border border-slate-700/60">
                        {entity.type.toUpperCase()}
                      </span>
                      {entity.isAiReconstructed ? (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                          <Flame className="w-3 h-3 text-emerald-400" /> Reconstructed ({Math.round(entity.confidence * 100)}%)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                          <CheckCircle className="w-3 h-3" /> Original Archival
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{entity.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4 whitespace-pre-line">{entity.content}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-500" /> {entity.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" /> {entity.date}
                    </span>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Reincarnated Guestbook with 3D Tilt Cards */}
          {modernView.guestbookEntries.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h2 className="text-xl font-bold text-slate-200 font-mono flex items-center gap-2">
                <span>Community Memory Vault (Perpetual Guestbook)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modernView.guestbookEntries.map((entry, idx) => (
                  <Card3D key={idx} delayMs={idx * 100} glowColor="purple" className="bg-slate-900/50">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="font-bold text-slate-200 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        {entry.name}
                      </span>
                      <span className="text-slate-500 text-[11px]">{entry.date}</span>
                    </div>
                    <p className="text-sm text-slate-300 italic">"{entry.message}"</p>
                  </Card3D>
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

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-950/90 border border-emerald-500/60 text-emerald-400 shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:bg-emerald-900 hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // 0% (1998 CRT Mode) or 50% (Haunted X-Ray Mode) rendered via sandboxed <iframe>
  const targetHtml = sliderValue === 50 ? bundle.xrayHtml1998 : bundle.restoredHtml1998;
  const isCrt = sliderValue === 0;

  return (
    <div className={`flex-1 relative h-full w-full bg-black overflow-hidden ${isCrt ? "crt-overlay" : ""}`}>
      {/* 50% X-Ray Mode Notification Banner with Glow */}
      {sliderValue === 50 && (
        <div className="absolute top-2 right-4 z-30 pointer-events-none px-3 py-1 rounded bg-emerald-950/90 border border-emerald-500/80 text-emerald-300 font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.4)] animate-pulse">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-400" />
          <span>PROVENANCE X-RAY ACTIVE: GREEN GLOW MARKS AI RECONSTRUCTIONS</span>
        </div>
      )}

      {/* 0% Mode Retro CRT Monitor Bezel Indicator */}
      {isCrt && (
        <div className="absolute top-2 left-4 z-30 pointer-events-none px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono text-[11px] shadow-sm">
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
