import React from "react";
import Link from "next/link";
import { Ghost, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col items-center justify-center p-6 text-center font-mono relative overflow-hidden crt-overlay">
      <div className="relative z-10 max-w-lg p-8 rounded-2xl bg-slate-950/90 border border-emerald-500/40 shadow-[0_0_30px_rgba(57,255,20,0.25)]">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 animate-float-slow">
          <Ghost className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-black text-emerald-400 tracking-wider mb-2 font-mono">
          HTTP 404 — DIGITAL VOID
        </h1>

        <p className="text-amber-400 text-sm mb-4">
          [ ERROR: SPECIFIED CYBERSPACE COORDINATE DOES NOT EXIST ]
        </p>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          The link you followed has decomposed into digital dust. No snapshot exists at this exact leaf in the Wayback Machine or local preset vault.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO ECTOPLASM BROWSER</span>
        </Link>
      </div>
    </div>
  );
}

