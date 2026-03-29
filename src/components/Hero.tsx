"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/GALERI-scaled.jpg",
    title: "PIONEERING AND INNOVATIVE WORK IN THE INDUSTRY",
    subtitle: "LAYERSTECH",
    description: "High-precision industrial 3D printing and modeling solutions."
  },
  {
    image: "/images/video1-1_25.jpeg",
    title: "Industrial 3D Printing Systems by LAYERSTECH",
    subtitle: "PRECISION",
    description: "Advanced SLS and DMLS technologies for global industrial sectors."
  },
  {
    image: "/images/product.png",
    title: "10,000+ DIFFERENT CUSTOMERS SUCCESSFULLY SERVED",
    subtitle: "EXPERIENCE",
    description: "Reliable partner for complex engineering and production solutions."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides Haus */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.1)"
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content Haus */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="container mx-auto max-w-6xl">
              <h4 className="text-[#00c0f3] font-black tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {slide.subtitle}
              </h4>
              <h1 className="text-white text-4xl md:text-8xl font-black leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                {slide.title}
              </h1>
              <div className="w-24 h-1 bg-[#00c0f3] mx-auto mb-8 animate-in fade-in zoom-in duration-1000" />
              <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {slide.description}
              </p>
              <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                 <button className="bg-[#00c0f3] text-white px-10 py-5 rounded-sm font-black tracking-[0.2em] text-xs hover:bg-[#B8281F] transition-all">
                    GET STARTED
                 </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows Haus */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-auto md:inset-y-0 z-30 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white transition-all group backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 group-active:scale-90" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white transition-all group backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 md:w-10 md:h-10 group-active:scale-90" />
        </button>
      </div>

      {/* Progress Indicators Haus */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="group py-4 px-2 focus:outline-none"
          >
            <div className={cn(
              "h-1 transition-all duration-500 rounded-full",
              i === currentSlide ? "w-16 bg-[#00c0f3]" : "w-8 bg-white/20 group-hover:bg-white/40"
            )} />
          </button>
        ))}
      </div>

      {/* Scroll Down Haus */}
      <div className="absolute bottom-10 right-10 z-30 animate-bounce hidden xl:block">
        <div className="flex flex-col items-center gap-2">
           <span className="text-white/30 text-[10px] uppercase font-black tracking-widest [writing-mode:vertical-lr]">SCROLL</span>
           <ChevronDown className="text-[#00c0f3] w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
