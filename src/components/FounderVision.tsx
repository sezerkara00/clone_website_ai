"use client";

import React from "react";
import { Quote, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FounderVision() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 relative">
             <Quote className="absolute -top-12 -left-12 w-24 h-24 text-[#F26522]/10" />
             <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] dark:text-white uppercase leading-[0.9] tracking-tighter mb-12">
               {t({
                 EN: "Making a global impact from local roots.",
                 TR: "Yerelden, küresel ses getiren fark oluşturan teknolojiler."
               })}
             </h2>
             
             <blockquote className="border-l-4 border-[#F26522] pl-8 py-4 mb-12">
                <p className="text-xl md:text-2xl font-light text-black/70 dark:text-white/70 italic leading-relaxed">
                  {t({
                    EN: "\"We want to be a serious player in Turkey and have the goal of making a difference and making a splash abroad.\"",
                    TR: "\"Türkiye’de ciddi bir oyuncu olmak istiyoruz ve yurtdışında da bir fark oluşturma ve ses getirme hedefimiz var.\""
                  })}
                </p>
                <footer className="mt-6">
                   <p className="text-[#F26522] font-black text-xs tracking-widest uppercase">Erkan Ateş</p>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                     {t({ EN: "TECHNICAL MANAGER", TR: "TEKNİK MÜDÜR" })} / LAYERSTECH
                   </p>
                </footer>
             </blockquote>

             <a 
               href="https://www.3ddt.com.tr/blog-post/3d-design-technologies-ses-getirmeyi-hedefliyor/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 group/link"
             >
               <span className="text-xs font-black tracking-[0.2em] text-black dark:text-white border-b border-black dark:border-white pb-1 group-hover/link:text-[#F26522] group-hover/link:border-[#F26522] transition-colors uppercase">
                 {t({ EN: "READ FULL STORY", TR: "HİKAYEMİZİN TAMAMINI OKU" })}
               </span>
               <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
             </a>
          </div>

          <div className="hidden md:block w-96 h-[500px] relative">
             <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-2xl -rotate-6 scale-95 group-hover:rotate-0 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-[#F26522]/5 rounded-2xl backdrop-blur-xl border border-black/5 dark:border-white/5 flex items-center justify-center p-12">
                <div className="text-center">
                   <p className="text-6xl font-black text-[#F26522] mb-4">100%</p>
                   <p className="text-[10px] font-black tracking-widest text-black dark:text-white uppercase">
                     {t({ EN: "DEDICATED TO EXCELLENCE", TR: "MÜKEMMELLİĞE ADANMIŞLIK" })}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
