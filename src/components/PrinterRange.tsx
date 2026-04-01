"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";

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
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#F26522] font-bold tracking-[0.2em] text-xs mb-4 block">OUR SYSTEMS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight uppercase">
              Industrial 3D Printing <br />
              <span className="text-black/30">Product Lineup</span>
            </h2>
          </div>
          <Link 
            href="/3d-printers" 
            className="inline-flex items-center gap-3 text-[13px] font-bold text-[#1a1a1a] hover:text-[#F26522] transition-colors group"
          >
            VIEW ALL PRODUCTS
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#F26522] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="group bg-[#f8f8f8] rounded-2xl overflow-hidden hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-black/5 flex flex-col"
            >
              <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="block">
                <div className="aspect-square relative flex items-center justify-center p-12">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";
                    }}
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white px-4 py-2 rounded-full text-[11px] font-bold tracking-widest text-[#F26522] shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-8 md:p-10 pt-0 flex flex-col flex-grow">
                <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="hover:text-[#F26522] transition-colors">
                  <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">{product.name}</h3>
                </Link>
                <p className="text-black/60 text-[15px] mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-black/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={product.id === "custom" ? "/3d-printers" : `/3d-printers/${product.id}`} className="mt-auto">
                  <button className="w-full py-4 bg-white border border-black/10 rounded-lg text-[13px] font-bold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 uppercase">
                    Product Details
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
