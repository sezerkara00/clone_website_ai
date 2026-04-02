"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const products = [
  { 
    id: "m1",
    name: "LayersTech M1", 
    image: "https://layerstech.co.uk/wp-content/uploads/2026/01/M1-New--822x1024.jpg",
    category: "INDUSTRIAL FFF/FDM",
    description: "Built for repeatable, production-ready plastic parts with high-temperature capability and AI-assisted monitoring.",
    features: ["High-Temp (380°C)", "300 x 300 x 320 mm", "AI Failure Detection"]
  },
  { 
    id: "m1pro",
    name: "LayersTech M1PRO", 
    image: "https://layerstech.co.uk/wp-content/uploads/2026/01/m1pro_front_view.png",
    category: "SILICONE / LSR SYSTEM",
    description: "Specialized industrial 3D printer for flexible silicone and rubber parts with advanced process control.",
    features: ["Real Silicone (LSR)", "4 Tool Change System", "Industrial Enclosure"]
  },
  { 
    id: "custom",
    name: "Custom Solutions", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    category: "ENGINEERING",
    description: "Tailored additive manufacturing systems designed for specific industrial requirements and large-scale projects.",
    features: ["Custom Build Volumes", "Multi-Material Setup", "Full Integration"]
  },
];

export function PrinterRange() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#F26522] font-bold tracking-[0.2em] text-xs mb-4 block uppercase leading-none">{t({ EN: "OUR SYSTEMS", TR: "SİSTEMLERİMİZ" })}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white leading-tight uppercase tracking-tighter">
              {t({ EN: "Industrial 3D Printing", TR: "Endüstriyel 3D Baskı" })} <br />
              <span className="text-black/30 dark:text-white/20">{t({ EN: "Product Lineup", TR: "Ürün Yelpazesi" })}</span>
            </h2>
          </div>
          <Link 
            href="/3d-printers" 
            className="inline-flex items-center gap-3 text-[13px] font-bold text-[#1a1a1a] dark:text-white/80 hover:text-[#F26522] transition-colors group"
          >
            {t({ EN: "VIEW ALL PRODUCTS", TR: "TÜM ÜRÜNLERİ GÖR" })}
            <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-[#F26522] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="group bg-[#f8f8f8] dark:bg-white/[0.03] rounded-3xl overflow-hidden hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-[0_40px_80px_-20px_rgba(242,101,34,0.15)] transition-all duration-700 border border-transparent hover:border-black/5 dark:hover:border-white/10 flex flex-col"
            >
              <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="block">
                <div className="aspect-square relative flex items-center justify-center p-12 bg-white/[0.8] dark:bg-white/[0.02]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-[2000ms]" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";
                    }}
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white dark:bg-[#1a1a1a] px-5 py-2 rounded-full text-[10px] font-black tracking-widest text-[#F26522] shadow-xl border border-black/5 dark:border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-10 pt-10 flex flex-col flex-grow">
                <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="hover:text-[#F26522] transition-colors">
                  <h3 className="text-3xl font-black text-[#1a1a1a] dark:text-white mb-4 tracking-tighter uppercase leading-none">{product.name}</h3>
                </Link>
                <p className="text-black/60 dark:text-white/40 text-[15px] mb-8 leading-relaxed font-light">
                  {t({ 
                    [product.description]: product.description,
                    "Built for repeatable, production-ready plastic parts with high-temperature capability and AI-assisted monitoring.": { EN: "Built for repeatable, production-ready plastic parts with high-temperature capability and AI-assisted monitoring.", TR: "Yüksek sıcaklık kabiliyeti ve AI destekli kontrol ile üretime hazır parçalar için tasarlandı." },
                    "Specialized industrial 3D printer for flexible silicone and rubber parts with advanced process control.": { EN: "Specialized industrial 3D printer for flexible silicone and rubber parts with advanced process control.", TR: "Esnek silikon ve kauçuk parçalar için gelişmiş süreç kontrollü endüstriyel 3D yazıcı." },
                    "Tailored additive manufacturing systems designed for specific industrial requirements and large-scale projects.": { EN: "Tailored additive manufacturing systems designed for specific industrial requirements and large-scale projects.", TR: "Endüstriyel gereksinimler ve büyük ölçekli projeler için tasarlanmış özel çözümler." }
                  }[product.description]) || product.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[12px] font-bold text-black/80 dark:text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                      {t({
                        [feature]: feature,
                        "High-Temp (380°C)": { EN: "High-Temp (380°C)", TR: "Yüksek Sıcaklık (380°C)" },
                        "Real Silicone (LSR)": { EN: "Real Silicone (LSR)", TR: "Gerçek Silikon (LSR)" },
                        "4 Tool Change System": { EN: "4 Tool Change System", TR: "4 Kafa Değiştirme Sistemi" }
                      }[feature]) || feature}
                    </li>
                  ))}
                </ul>

                <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="mt-auto">
                  <button className="w-full py-4 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-[11px] font-black tracking-widest text-[#1a1a1a] dark:text-white hover:bg-[#F26522] hover:text-white hover:border-[#F26522] transition-all duration-500 uppercase">
                    {t({ EN: "Product Details", TR: "Ürün Detayları" })}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
