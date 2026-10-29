"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Shield, AlertTriangle, CheckCircle, Flame, ExternalLink, Activity, Orbit, ChevronDown, ChevronUp, Radio } from "lucide-react";
import { ResurrectedBundle, TelemetryLogEntry } from "@/types";
import { Spectral3DCanvas } from "./Spectral3DCanvas";

interface ArchaeologyTerminalProps {
  bundle: ResurrectedBundle | null;
  logs: TelemetryLogEntry[];
  isLoading: boolean;
}

export function ArchaeologyTerminal({ bundle, logs, isLoading }: ArchaeologyTerminalProps) {
  const [showProvenanceDrawer, setShowProvenanceDrawer] = useState(false);
  const [show3dCanvas, setShow3dCanvas] = useState(true);
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll logs as new entries stream in
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTo({
        top: logContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-slate-950 border-r border-slate-800 font-mono text-xs select-text">
      {/* Terminal Title Bar with Live Indicators */}
      <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">PARANORMAL DOM INSPECTOR</span>
          {isLoading && (
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] animate-pulse flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE EXHUMATION
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* 3D Holocron HUD Toggle */}
          <button
            onClick={() => setShow3dCanvas(!show3dCanvas)}
            title="Toggle 3D DOM Topology HUD"
            className="flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-950/70 hover:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-500/40 transition-colors shadow-sm"
          >
            <Orbit className={`w-3 h-3 ${show3dCanvas ? "animate-spin" : ""}`} />
            <span>3D HUD</span>
          </button>

          {bundle?.browserbaseSessionId && (
            <a
              href={`https://www.browserbase.com/sessions/${bundle.browserbaseSessionId}`}
              target="_blank"
              rel="noreferrer"
              title="Open Cloud Session Replay"
              className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/70 hover:bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-500/40 transition-colors shadow-sm"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Live Replay</span>
            </a>
          )}
        </div>
      </div>

      {/* Embedded Interactive 3D DOM Topology Holocron */}
      {show3dCanvas && (
        <div className="border-b border-slate-800 p-2 bg-slate-950/90 animate-card-reveal">
          <Spectral3DCanvas sliderValue={isLoading ? 50 : 0} isLoading={isLoading} />
        </div>
      )}

      {/* Pathology Counter Bar with Sonar Radar Effect */}
      {bundle && (
        <div className="relative overflow-hidden bg-slate-900/60 border-b border-slate-800 px-3 py-2 grid grid-cols-3 gap-2 text-center text-[11px]">
          {/* Sweeping Sonar Radar Light Beam */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full animate-[shimmerFlow_3s_infinite]" />

          <div className="relative p-1 rounded bg-slate-950 border border-slate-800 transition-all hover:border-amber-500/40">
            <span className="block text-slate-400">Images Healed</span>
            <span className="font-bold text-amber-400 text-sm">
              {bundle.manifest.brokenImages.length}
            </span>
          </div>
          <div className="relative p-1 rounded bg-slate-950 border border-slate-800 transition-all hover:border-cyan-500/40">
            <span className="block text-slate-400">Links Exhumed</span>
            <span className="font-bold text-cyan-400 text-sm">
              {bundle.manifest.deadLinks.length}
            </span>
          </div>
          <div className="relative p-1 rounded bg-slate-950 border border-slate-800 transition-all hover:border-emerald-500/40">
            <span className="block text-slate-400">CGI Scripts Shimmed</span>
            <span className="font-bold text-emerald-400 text-sm">
              {bundle.manifest.defunctScriptsAndForms.length}
            </span>
          </div>
        </div>
      )}

      {/* Log Stream Body with Smooth Auto-Scroll */}
      <div ref={logContainerRef} className="flex-1 overflow-y-auto p-3 space-y-2 scroll-smooth">
        {logs.map((log) => {
          let badgeColor = "text-blue-400 bg-blue-950/60 border-blue-500/40";
          let borderGlow = "border-slate-800/80";
          let Icon = Activity;

          if (log.level === "warn") {
            badgeColor = "text-amber-400 bg-amber-950/60 border-amber-500/40";
            borderGlow = "border-amber-500/30";
            Icon = AlertTriangle;
          } else if (log.level === "ectoplasm") {
            badgeColor = "text-emerald-400 bg-emerald-950/60 border-emerald-500/40 shadow-[0_0_8px_rgba(57,255,20,0.2)]";
            borderGlow = "border-emerald-500/50 shadow-[0_0_12px_rgba(57,255,20,0.15)]";
            Icon = Flame;
          } else if (log.level === "success") {
            badgeColor = "text-cyan-400 bg-cyan-950/60 border-cyan-500/40";
            borderGlow = "border-cyan-500/30";
            Icon = CheckCircle;
          }

          return (
            <div
              key={log.id}
              className={`p-2.5 rounded-lg bg-slate-900/60 border transition-all duration-300 leading-relaxed animate-card-reveal ${borderGlow}`}
            >
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                <span className="text-slate-400">[{log.timestamp}]</span>
                <span className={`px-1.5 py-0.5 rounded border flex items-center gap-1 ${badgeColor}`}>
                  <Icon className="w-3 h-3" />
                  {log.stage}
                </span>
              </div>
              <p className="text-slate-200 text-xs">{log.message}</p>
            </div>
          );
        })}

        {logs.length === 0 && (
          <div className="text-center py-10 text-slate-500">
            <Terminal className="w-8 h-8 mx-auto mb-2 opacity-40 text-emerald-500" />
            <p>Select a Graveyard Preset or enter a URL above to begin autonomous exhumation.</p>
          </div>
        )}
      </div>

      {/* Historical Lore Grounding Drawer Toggle */}
      {bundle && bundle.lore.length > 0 && (
        <div className="border-t border-slate-800 bg-slate-900/80 p-2">
          <button
            onClick={() => setShowProvenanceDrawer(!showProvenanceDrawer)}
            className="w-full py-1.5 px-2 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs flex items-center justify-between transition-colors shadow-sm"
          >
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Shield className="w-3.5 h-3.5" /> Historical Provenance Citations ({bundle.lore.length})
            </span>
            <span className="text-slate-500">{showProvenanceDrawer ? "▲ Hide" : "▼ Expand"}</span>
          </button>

          {showProvenanceDrawer && (
            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto p-1 animate-card-reveal">
              {bundle.lore.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded bg-slate-950 border border-slate-800/80 text-[11px] hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="font-semibold text-slate-200">{item.sourceTitle}</span>
                    <span className="text-emerald-400 text-[10px]">Confidence: {(item.relevanceConfidence * 100).toFixed(0)}%</span>
                  </div>
                  <p className="text-slate-300 italic mb-1">"{item.forumSnippet}"</p>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 text-[10px]"
                  >
                    <span>View Archival Record</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
