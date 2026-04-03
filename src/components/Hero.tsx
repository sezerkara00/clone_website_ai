"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images Cycling (GIF-like effect) */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? "opacity-70 scale-105" : "opacity-0 scale-100"
            )}
            style={{ transition: "opacity 1s ease-in-out, transform 8s linear" }}
          >
            <Image
              src={src}
              alt={`Industrial 3D Printing ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
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
