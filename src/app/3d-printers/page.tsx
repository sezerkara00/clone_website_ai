"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrintersPage() {
  const { t } = useLanguage();

  const printers = [
    {
      id: "m1",
      name: "LayersTech M1",
      type: "INDUSTRIAL FFF/FDM",
      description: "Built for repeatable, production-ready plastic parts with high-temperature capability and AI-assisted monitoring.",
      image: "https://layerstech.co.uk/wp-content/uploads/2026/02/m1-scaled.jpg",
      specs: ["380°C Nozzle", "AI Failure Detection", "65°C Chamber"]
    },
    {
      id: "m1pro",
      name: "LayersTech M1PRO",
      type: "SILICONE / LSR SYSTEM",
      description: "Specialized industrial 3D printer for flexible silicone and rubber parts with advanced process control.",
      image: "https://layerstech.co.uk/wp-content/uploads/2026/02/m1pro-scaled.jpg",
      specs: ["LSR / RTV Printing", "4 Tool Change", "Multi-Material"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <header className="mb-24">
          <span className="text-[#F26522] font-bold text-xs tracking-[0.3em] uppercase">OUR ECOSYSTEM</span>
          <h1 className="mt-6 text-6xl md:text-8xl font-bold text-[#1a1a1a] uppercase leading-[0.9] tracking-tighter">
            Industrial <br />
            <span className="text-black/20">Solutions.</span>
          </h1>
          <p className="mt-10 text-xl font-light text-black/60 max-w-2xl leading-relaxed">
            Revolutionizing manufacturing with intelligent thermal control, multi-material flexibility, and industrial precision.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {printers.map((printer, i) => (
            <div key={i} className="group overflow-hidden">
              <Link href={`/3d-printers/${printer.id}`} className="block">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-[#f8f8f8] border border-black/5 flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700">
                  <div className="p-12 relative w-full h-full">
                    <img 
                      src={printer.image} 
                      alt={printer.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white rounded-full text-[10px] font-bold tracking-[0.2em] text-[#F26522] shadow-sm">
                      {printer.type}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="mt-12 px-2">
                <h3 className="text-4xl font-bold text-[#1a1a1a] uppercase tracking-tighter">{printer.name}</h3>
                <p className="mt-6 text-black/60 font-light text-lg leading-relaxed line-clamp-2 max-w-lg">{printer.description}</p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  {printer.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[11px] font-bold text-black/40">
                      <div className="w-1 h-1 rounded-full bg-[#F26522]" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href={`/3d-printers/${printer.id}`}>
                    <Button variant="outline" className="h-14 px-8 rounded-lg border-black/10 text-black text-[13px] font-bold tracking-[0.1em] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all group/btn">
                      EXPLORE DETAILS
                      <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
