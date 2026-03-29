"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/video1-1_25.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video1-1.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Giant Text (Middle Layer) */}
        <h1 className="text-[20vw] font-black tracking-[-0.05em] text-black/10 select-none leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          LAYERSTECH
        </h1>

        {/* Foreground Content */}
        <div className="text-center px-4 max-w-4xl">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] text-heading uppercase mb-4 drop-shadow-sm">
            PIONEERING AND INNOVATIVE WORK IN THE INDUSTRY
          </p>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Bottom Floating Scroll Indicator */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-heading">Scroll Down</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
    </section>
  );
}
