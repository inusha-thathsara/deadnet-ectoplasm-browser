"use client";

import React, { useState } from "react";
import { Terminal, Shield, AlertTriangle, CheckCircle, Flame, ExternalLink, Activity } from "lucide-react";
import { ResurrectedBundle, TelemetryLogEntry } from "@/types";

interface ArchaeologyTerminalProps {
  bundle: ResurrectedBundle | null;
  logs: TelemetryLogEntry[];
  isLoading: boolean;
}

export function ArchaeologyTerminal({ bundle, logs, isLoading }: ArchaeologyTerminalProps) {
  const [showProvenanceDrawer, setShowProvenanceDrawer] = useState(false);

  return (
    <div className="flex flex-col h-full bg-slate-950 border-r border-slate-800 font-mono text-xs select-text">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">PARANORMAL DOM INSPECTOR</span>
          {isLoading && (
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] animate-pulse">
              LIVE EXHUMATION
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {bundle?.browserbaseSessionId && (
            <a
              href={`https://www.browserbase.com/sessions/${bundle.browserbaseSessionId}`}
              target="_blank"
              rel="noreferrer"
              title="Open Browserbase Cloud Session Replay"
              className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/70 hover:bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-500/40 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Browserbase Session</span>
            </a>
          )}
          {bundle?.sentryTraceId && (
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Trace:</span>
              <span className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">
                {bundle.sentryTraceId.slice(0, 14)}...
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Pathology Counter Bar */}
      {bundle && (
        <div className="bg-slate-900/60 border-b border-slate-800 px-3 py-2 grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="p-1 rounded bg-slate-950 border border-slate-800">
            <span className="block text-slate-400">Images Healed</span>
            <span className="font-bold text-amber-400 text-sm">
              {bundle.manifest.brokenImages.length}
            </span>
          </div>
          <div className="p-1 rounded bg-slate-950 border border-slate-800">
            <span className="block text-slate-400">Links Exhumed</span>
            <span className="font-bold text-cyan-400 text-sm">
              {bundle.manifest.deadLinks.length}
            </span>
          </div>
          <div className="p-1 rounded bg-slate-950 border border-slate-800">
            <span className="block text-slate-400">CGI Scripts Shimmed</span>
            <span className="font-bold text-emerald-400 text-sm">
              {bundle.manifest.defunctScriptsAndForms.length}
            </span>
          </div>
        </div>
      )}

      {/* Log Stream Body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {logs.map((log) => {
          let badgeColor = "text-blue-400 bg-blue-950/60 border-blue-500/40";
          let Icon = Activity;

          if (log.level === "warn") {
            badgeColor = "text-amber-400 bg-amber-950/60 border-amber-500/40";
            Icon = AlertTriangle;
          } else if (log.level === "ectoplasm") {
            badgeColor = "text-emerald-400 bg-emerald-950/60 border-emerald-500/40 shadow-[0_0_8px_rgba(57,255,20,0.2)]";
            Icon = Flame;
          } else if (log.level === "success") {
            badgeColor = "text-cyan-400 bg-cyan-950/60 border-cyan-500/40";
            Icon = CheckCircle;
          }

          return (
            <div key={log.id} className="p-2 rounded bg-slate-900/50 border border-slate-800/80 leading-relaxed">
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                <span className="text-slate-400">[{log.timestamp}]</span>
                <span className={`px-1.5 py-0.2 rounded border flex items-center gap-1 ${badgeColor}`}>
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
            className="w-full py-1.5 px-2 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs flex items-center justify-between transition-colors"
          >
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Shield className="w-3.5 h-3.5" /> SerpApi Provenance Citations ({bundle.lore.length})
            </span>
            <span className="text-slate-500">{showProvenanceDrawer ? "▲ Hide" : "▼ Expand"}</span>
          </button>

          {showProvenanceDrawer && (
            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto p-1">
              {bundle.lore.map((item, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px]">
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
