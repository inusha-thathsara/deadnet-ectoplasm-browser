"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, Ghost } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[DeadNet Error Boundary Captured]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden">
      {/* Background scanline glow */}
      <div className="absolute inset-0 bg-red-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-lg p-8 rounded-2xl bg-slate-900/80 border border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
        <div className="w-14 h-14 mx-auto rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 mb-4 animate-pulse">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h2 className="text-xl font-black text-red-400 tracking-wider mb-2">
          500 — PARANORMAL EXHUMATION FAULT
        </h2>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          The archaeology agent encountered an unexpected fracture in the digital spacetime fabric. The archival stream was severed or rate-limited.
        </p>

        {error.digest && (
          <div className="mb-6 p-2 rounded bg-black/60 border border-slate-800 text-[11px] text-slate-500 font-mono">
            Error Digest: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Exhumation</span>
          </button>

          <a
            href="/"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Vault</span>
          </a>
        </div>
      </div>
    </div>
  );
}

