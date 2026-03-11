"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";

const DRAG_SENSITIVITY = 1.4;
const INERTIA_FRICTION = 0.92;
const MIN_VELOCITY = 0.2;

export default function InteractiveOrb() {
  const [rotation, setRotation] = useState({ x: 22, y: -26 });
  const isDragging = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const velocity = useRef({ x: 0, y: 0 });
  const inertiaId = useRef<number | null>(null);

  const transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (inertiaId.current != null) {
      cancelAnimationFrame(inertiaId.current);
      inertiaId.current = null;
    }
    isDragging.current = true;
    lastPos.current = { x: event.clientX, y: event.clientY };
    velocity.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !lastPos.current) return;

    const deltaX = event.clientX - lastPos.current.x;
    const deltaY = event.clientY - lastPos.current.y;

    lastPos.current = { x: event.clientX, y: event.clientY };

    velocity.current = {
      x: -deltaY * DRAG_SENSITIVITY,
      y: deltaX * DRAG_SENSITIVITY,
    };

    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x - deltaY * DRAG_SENSITIVITY)),
      y: prev.y + deltaX * DRAG_SENSITIVITY,
    }));
  };

  const runInertia = () => {
    const v = velocity.current;
    if (Math.abs(v.x) < MIN_VELOCITY && Math.abs(v.y) < MIN_VELOCITY) {
      inertiaId.current = null;
      return;
    }
    velocity.current = { x: v.x * INERTIA_FRICTION, y: v.y * INERTIA_FRICTION };
    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x + v.x)),
      y: prev.y + v.y,
    }));
    inertiaId.current = requestAnimationFrame(runInertia);
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    lastPos.current = null;
    inertiaId.current = requestAnimationFrame(runInertia);
  };

  useEffect(() => {
    const handleWindowMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      lastPos.current = null;
      inertiaId.current = requestAnimationFrame(runInertia);
    };

    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleWindowMouseUp);
      if (inertiaId.current != null) cancelAnimationFrame(inertiaId.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-auto relative hidden cursor-grab md:block md:h-64 md:w-64"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500/15 blur-3xl" />

      <div
        className="relative h-full w-full rounded-full border border-emerald-400/40 bg-gradient-to-br from-emerald-500/40 via-emerald-900/90 to-black shadow-[0_0_80px_rgba(16,185,129,0.6)] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-6 rounded-full border border-emerald-300/25"
          style={{ transform: "translateZ(12px)" }}
        />
        <div
          className="absolute inset-10 rounded-full border border-emerald-400/25"
          style={{ transform: "translateZ(18px)" }}
        />
        <div
          className="absolute inset-14 rounded-full border border-emerald-500/30"
          style={{ transform: "translateZ(24px)" }}
        />

        <div
          className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-emerald-400/40 blur-xl"
          style={{ transform: "translateZ(30px)" }}
        />
        <div
          className="absolute bottom-6 right-2 h-16 w-16 rounded-full bg-cyan-400/40 blur-xl"
          style={{ transform: "translateZ(30px)" }}
        />

        <div
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(8,145,178,0.7),transparent_55%),radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.95),rgba(0,0,0,1))] mix-blend-screen"
          style={{ transform: "translateZ(26px)" }}
        />

        <div
          className="absolute inset-4 rounded-full border border-emerald-200/15"
          style={{
            transform: "translateZ(32px)",
            boxShadow:
              "0 0 40px rgba(16,185,129,0.45), 0 0 80px rgba(6,182,212,0.35)",
          }}
        />

        {/* Foto central dentro do globo */}
        <div
          className="pointer-events-none absolute inset-12 flex items-center justify-center"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-emerald-300/60 bg-zinc-900/90 shadow-[0_0_30px_rgba(16,185,129,0.55)]">
            <Image
              src="/ewerton.png"
              alt="Foto de Ewerton Alexander"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

