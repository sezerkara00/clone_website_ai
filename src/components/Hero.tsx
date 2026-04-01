"use client";

import React from "react";
import { ChevronDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105 opacity-70"
        >
          <source src="https://www.innovatiq.com/hubfs/Video_IndDruck_1280x720_en.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]" />
      </div>
      
      {/* Content Center */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight drop-shadow-2xl uppercase">
            Industrial 3D Printing <br />
            <span className="text-[#F26522]">Systems by LAYERSTECH</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
            Bringing your most complex designs to life with precision and speed. 
            From rapid prototyping to small-batch production, we deliver industrial-grade additive manufacturing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#F26522] text-white px-10 py-5 rounded-sm font-bold tracking-widest text-[13px] hover:bg-[#D35400] transition-all duration-300 shadow-[0_0_20px_rgba(242,101,34,0.3)] hover:scale-105 active:scale-95 group uppercase">
              DISCOVER MORE
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-sm font-bold tracking-widest text-[13px] hover:bg-white/20 transition-all duration-300 flex items-center gap-3 active:scale-95 uppercase">
              <Play className="w-4 h-4 fill-[#F26522] text-[#F26522]" />
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer hover:opacity-100 transition-opacity opacity-70">
        <span className="text-white text-[11px] font-bold tracking-[0.3em] uppercase">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#F26522] animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
