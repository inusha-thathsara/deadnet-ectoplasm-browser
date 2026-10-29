"use client";

import React, { useState, useRef } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "emerald" | "cyan" | "purple" | "amber";
  delayMs?: number;
}

export function Card3D({
  children,
  className = "",
  glowColor = "emerald",
  delayMs = 0
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [sheenPosition, setSheenPosition] = useState({ x: 50, y: 50, opacity: 0 });

  const getGlowBorder = () => {
    switch (glowColor) {
      case "cyan":
        return "hover:border-cyan-500/60 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)]";
      case "purple":
        return "hover:border-purple-500/60 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)]";
      case "amber":
        return "hover:border-amber-500/60 hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]";
      case "emerald":
      default:
        return "hover:border-emerald-500/60 hover:shadow-[0_10px_30px_rgba(57,255,20,0.2)]";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max rotation in degrees
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Sheen position
    setSheenPosition({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setSheenPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease",
        animationDelay: `${delayMs}ms`
      }}
      className={`relative rounded-xl border border-slate-800 bg-slate-900/70 p-5 preserve-3d animate-card-reveal overflow-hidden transition-all duration-200 ${getGlowBorder()} ${className}`}
    >
      {/* 3D Dynamic Specular Sheen */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
          opacity: sheenPosition.opacity
        }}
      />

      {/* Floating 3D Content */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </div>
  );
}

