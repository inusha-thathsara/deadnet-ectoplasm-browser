import React from "react";
import { Ghost, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="relative w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(57,255,20,0.3)] animate-pulse">
        <Ghost className="w-8 h-8 animate-float-slow" />
      </div>

      <h2 className="text-sm font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-2">
        <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
        INITIALIZING DIGITAL EXHUMATION MATRIX...
      </h2>
      <p className="text-[11px] text-slate-500">
        Syncing Wayback CDX snapshots & Open-Weight inference endpoints
      </p>
    </div>
  );
}

