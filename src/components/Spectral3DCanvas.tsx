"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Orbit, Maximize2, Minimize2, Eye } from "lucide-react";

interface Spectral3DCanvasProps {
  sliderValue: number; // 0 (1998), 50 (X-Ray), 100 (2026)
  isLoading?: boolean;
  className?: string;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  label?: string;
  type?: "html" | "image" | "link" | "cgi";
}

export function Spectral3DCanvas({ sliderValue, isLoading, className = "" }: Spectral3DCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [stats, setStats] = useState({ nodes: 18, fps: 60 });

  // Camera angles
  const rotRef = useRef({ x: 0.3, y: 0.4, vx: 0.005, vy: 0.008 });
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0 });

  // 3D Nodes representing an exhumed website's DOM topology
  const nodesRef = useRef<Point3D[]>([
    { x: 0, y: -90, z: 0, label: "<HTML>", type: "html" },
    { x: -70, y: -40, z: -40, label: "<HEAD>", type: "html" },
    { x: 70, y: -40, z: -40, label: "<TITLE>", type: "html" },
    { x: 0, y: -20, z: 60, label: "<BODY>", type: "html" },
    { x: -80, y: 30, z: 30, label: "<TABLE>", type: "html" },
    { x: 80, y: 30, z: 30, label: "<MARQUEE>", type: "html" },
    { x: -50, y: 80, z: -60, label: "<IMG 0x0>", type: "image" },
    { x: 50, y: 80, z: -60, label: "<A 404>", type: "link" },
    { x: 0, y: 100, z: 40, label: "/cgi-bin/guestbook.pl", type: "cgi" },
    { x: -100, y: 0, z: 0, label: "<FONT>", type: "html" },
    { x: 100, y: 0, z: 0, label: "<CENTER>", type: "html" },
    { x: 0, y: 0, z: -100, label: "<FRAMESET>", type: "html" },
    { x: -40, y: 60, z: 50, label: "<TR>", type: "html" },
    { x: 40, y: 60, z: 50, label: "<TD>", type: "html" },
    { x: 0, y: -60, z: -60, label: "<META>", type: "html" },
    { x: -30, y: -10, z: -80, label: "<B>", type: "html" },
    { x: 30, y: -10, z: -80, label: "<I>", type: "html" },
    { x: 0, y: 50, z: -30, label: "counter.cgi", type: "cgi" }
  ]);

  // Edges connecting the 3D topology
  const edgesRef = useRef<[number, number][]>([
    [0, 1], [0, 2], [0, 3],
    [1, 14], [2, 15], [3, 4], [3, 5],
    [4, 6], [4, 12], [12, 13], [5, 7],
    [4, 8], [5, 17], [0, 9], [0, 10], [0, 11],
    [6, 8], [7, 8], [9, 12], [10, 13]
  ]);

  // Ambient floating background particles
  const particlesRef = useRef<Array<{ x: number; y: number; z: number; sz: number; speed: number }>>([]);

  useEffect(() => {
    // Generate 60 ambient particles
    const parts = [];
    for (let i = 0; i < 70; i++) {
      parts.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        z: (Math.random() - 0.5) * 400,
        sz: Math.random() * 2 + 1,
        speed: Math.random() * 0.02 + 0.005
      });
    }
    particlesRef.current = parts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = (time: number) => {
      animId = requestAnimationFrame(render);

      // FPS tracking
      frameCount++;
      if (time - fpsTimer > 1000) {
        setStats({ nodes: nodesRef.current.length, fps: Math.round((frameCount * 1000) / (time - fpsTimer)) });
        frameCount = 0;
        fpsTimer = time;
      }

      const rect = containerRef.current?.getBoundingClientRect();
      const width = rect?.width || 300;
      const height = rect?.height || 220;

      ctx.clearRect(0, 0, width, height);

      // Color scheme according to the Ectoplasm Slider state
      let primaryColor = "#00FFCC";
      let secondaryColor = "#FF9900";
      let ectoGlow = "rgba(0, 255, 204, 0.4)";
      let wireColor = "rgba(0, 255, 204, 0.25)";

      if (sliderValue === 50) {
        // 50% Haunted X-Ray Mode: Emerald Ectoplasm
        primaryColor = "#39FF14";
        secondaryColor = "#00FF88";
        ectoGlow = "rgba(57, 255, 20, 0.6)";
        wireColor = "rgba(57, 255, 20, 0.35)";
      } else if (sliderValue === 100) {
        // 100% 2026 Reincarnated: Modern Cyan & Violet
        primaryColor = "#38BDF8";
        secondaryColor = "#A855F7";
        ectoGlow = "rgba(56, 189, 248, 0.5)";
        wireColor = "rgba(56, 189, 248, 0.3)";
      }

      // Auto rotation when mouse isn't dragging
      if (!mouseRef.current.isDown) {
        const speedMultiplier = isLoading ? 2.5 : 1.0;
        rotRef.current.x += rotRef.current.vx * speedMultiplier;
        rotRef.current.y += rotRef.current.vy * speedMultiplier;
      }

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      const fov = 280;
      const cx = width / 2;
      const cy = height / 2;

      // Project 3D Point to 2D Screen
      const project = (p: Point3D | { x: number; y: number; z: number }) => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX + 320; // Camera distance

        const scale = fov / Math.max(z2, 10);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          z: z2
        };
      };

      // 1. Render ambient floating particles
      for (const pt of particlesRef.current) {
        pt.y -= pt.speed * 20;
        if (pt.y < -200) pt.y = 200;

        const proj = project(pt);
        if (proj.z > 0) {
          ctx.fillStyle = sliderValue === 50 ? "rgba(57, 255, 20, 0.4)" : "rgba(100, 200, 255, 0.25)";
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, Math.max(0.5, pt.sz * proj.scale), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Project Nodes
      const projectedNodes = nodesRef.current.map((node) => ({
        ...node,
        proj: project(node)
      }));

      // 3. Render 3D Wireframe Edges
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = wireColor;

      for (const [i1, i2] of edgesRef.current) {
        const p1 = projectedNodes[i1]?.proj;
        const p2 = projectedNodes[i2]?.proj;
        if (!p1 || !p2) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // 4. Render Nodes & Labels
      // Sort nodes by depth (painter's algorithm)
      const sortedNodes = [...projectedNodes].sort((a, b) => b.proj.z - a.proj.z);

      for (const node of sortedNodes) {
        const { x, y, scale } = node.proj;
        const r = Math.max(3, 6 * scale);

        let nodeColor = primaryColor;
        let nodeGlow = ectoGlow;

        if (node.type === "image") {
          nodeColor = "#FF3366";
          nodeGlow = "rgba(255, 51, 102, 0.6)";
        } else if (node.type === "cgi") {
          nodeColor = "#FF9900";
          nodeGlow = "rgba(255, 153, 0, 0.6)";
        } else if (node.type === "link") {
          nodeColor = "#00FFFF";
          nodeGlow = "rgba(0, 255, 255, 0.6)";
        }

        // Outer glow
        ctx.shadowColor = nodeGlow;
        ctx.shadowBlur = sliderValue === 50 ? 15 : 8;

        // Node circle
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, r * 0.4), 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;

        // Label if zoomed enough or expanded
        if (node.label && (isExpanded || scale > 0.85)) {
          ctx.font = `${Math.max(9, Math.round(11 * scale))}px monospace`;
          ctx.fillStyle = "rgba(240, 240, 240, 0.85)";
          ctx.fillText(node.label, x + r + 4, y + 3);
        }
      }

      // 5. Loading Scanning Laser Beam
      if (isLoading) {
        const laserY = (Math.sin(time * 0.004) * 0.5 + 0.5) * height;
        const grad = ctx.createLinearGradient(0, laserY - 12, 0, laserY + 12);
        grad.addColorStop(0, "rgba(57, 255, 20, 0)");
        grad.addColorStop(0.5, "rgba(57, 255, 20, 0.75)");
        grad.addColorStop(1, "rgba(57, 255, 20, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, laserY - 10, width, 20);

        ctx.strokeStyle = "#39FF14";
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#39FF14";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(0, laserY);
        ctx.lineTo(width, laserY);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [sliderValue, isLoading, isExpanded]);

  // Mouse drag handlers for 3D orbital control
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current.isDown) return;
    const dx = e.clientX - mouseRef.current.lastX;
    const dy = e.clientY - mouseRef.current.lastY;

    rotRef.current.y += dx * 0.01;
    rotRef.current.x += dy * 0.01;

    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUp();
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`relative rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur-md overflow-hidden cursor-grab active:cursor-grabbing select-none transition-all ${
        isExpanded ? "h-80" : "h-44 sm:h-52"
      } ${className}`}
    >
      {/* 3D Holocron Header HUD */}
      <div className="absolute top-2 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono pointer-events-none">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-emerald-400 shadow-sm">
          <Orbit className="w-3.5 h-3.5 animate-spin text-emerald-400" />
          <span className="font-bold tracking-wider">3D DOM HOLOCRON</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-900/80 text-slate-400 text-[10px]">
            {stats.fps} FPS • {stats.nodes} NODES
          </span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse 3D HUD" : "Expand 3D HUD"}
            className="p-1 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Orbital Hint Footer */}
      <div className="absolute bottom-1.5 left-3 right-3 z-20 flex items-center justify-between text-[10px] font-mono text-slate-500 pointer-events-none">
        <span className="hidden sm:inline">DRAG TO ROTATE 3D HOLOCRON</span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{sliderValue === 0 ? "1998 VECTOR" : sliderValue === 50 ? "ECTOPLASM" : "2026 MESH"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

