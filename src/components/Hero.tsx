"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Play, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const HERO_IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
];

export function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("printer-range");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let isScrolling = false;
    let touchStartY = 0;

    const performScroll = () => {
      const nextSection = document.getElementById("printer-range");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY < 50 && e.deltaY > 0 && !isScrolling) {
        e.preventDefault(); 
        isScrolling = true;
        performScroll();
        setTimeout(() => { isScrolling = false; }, 1000);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY < 50 && !isScrolling) {
        const currentY = e.touches[0].clientY;
        if (touchStartY - currentY > 30) {
          e.preventDefault();
          isScrolling = true;
          performScroll();
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images Cycling */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-white text-5xl md:text-7xl lg:text-[80px] xl:text-[95px] font-black leading-[0.95] mb-8 lg:mb-10 tracking-tighter drop-shadow-2xl uppercase italic">
            {t({ EN: "Industrial 3D", TR: "ENDÜSTRİYEL 3D" })} <br />
            <span className="text-white">{t({ EN: "Printing", TR: "YAZICI" })}</span> <br />
            <span className="text-[#F26522] not-italic">{t({ EN: "Systems", TR: "SİSTEMLERİ" })}</span>
          </h1>
          
          <div className="mb-10 lg:mb-16">
            <span className="text-white/40 text-[10px] sm:text-xs lg:text-sm font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase">
               POWERED BY LAYERSTECH
            </span>
          </div>
          
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-12 lg:mb-20 font-light leading-relaxed lg:leading-loose drop-shadow-lg px-4 sm:px-0">
            {t({
              EN: "Bringing your most complex designs to life with precision and speed. From rapid prototyping to small-batch production, we deliver industrial-grade additive manufacturing solutions.",
              TR: "En karmaşık tasarımlarınızı hassasiyet ve hızla hayata geçiriyoruz. Hızlı prototiplemeden düşük adetli üretime kadar endüstriyel sınıf katmanlı üretim çözümleri sunuyoruz."
            })}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={scrollToContent}
              className="bg-[#F26522] text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-[#D35400] transition-all duration-500 shadow-[0_20px_40px_rgba(242,101,34,0.3)] hover:scale-105 active:scale-95 group uppercase"
            >
              {t({ EN: "DISCOVER MORE", TR: "DAHA FAZLASINI KEŞFET" })}
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-white/20 transition-all duration-500 flex items-center gap-3 active:scale-95 uppercase"
            >
              <Play className="w-4 h-4 fill-[#F26522] text-[#F26522]" />
              {t({ EN: "WATCH VIDEO", TR: "VİDEOYU İZLE" })}
            </button>
          </div>
        </div>
      </div>

      <div 
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer hover:opacity-100 transition-opacity opacity-70"
      >
        <span className="text-white text-[11px] font-bold tracking-[0.3em] uppercase">
          {t({ EN: "SCROLL", TR: "KAYDIR" })}
        </span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#F26522] animate-bounce-slow" />
        </div>
      </div>

      {/* Video Modal Placeholder */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl transition-all duration-500">
           <button 
             onClick={() => setIsVideoOpen(false)}
             className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
           >
             <X className="w-10 h-10" />
           </button>
           <div className="w-full max-w-5xl aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/mBJ73Feg8w8?autoplay=1" // Örnek video linki
                title="LayersTech Industrial 3D Printing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
           </div>
        </div>
      )}
    </section>
  );
}
