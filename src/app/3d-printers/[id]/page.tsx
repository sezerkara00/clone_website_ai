"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Lucide from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Asset URLs mapping
const materialImages = {
  pla: "/images/materials/pla.jpg",
  abs: "/images/materials/abs.jpg",
  pva: "/images/materials/pva.jpg",
  hips: "/images/materials/hips.jpg",
  tpu: "/images/materials/tpu.jpg",
  cbn: "/images/materials/cbn.jpg",
  pc: "/images/materials/pc.jpg",
  petg: "/images/materials/petg.jpg",
  lsr: "/images/materials/lsr.jpg",
  rtv: "/images/materials/rtv.jpg",
};

interface Feature {
  title: string;
  desc: string;
  bullets: string[];
  image: string;
}

const productData = {
  m1: {
    name: "LayersTech M1",
    subtitle: "Industrial FFF/FDM 3D Printer",
    description: "Built for repeatable, production-ready parts with high-temperature capability and advanced AI monitoring. Engineered for industrial 24/7 reliability.",
    image: "/images/m1pro_dark.png",
    features: [
      {
        title: "Industrial Stability, Thermal Control, Consistent Output",
        desc: "LayersTech M1 is engineered for stable, repeatable FFF/FDM production. A rigid industrial frame and enclosed chamber reduce external variation, while PID-controlled temperatures keep the bed, nozzle, and chamber steady throughout long print cycles. This results in predictable layer placement, consistent dimensions, and reliable surface finish—run after run.",
        bullets: [
          "300 × 300 × 320 mm build volume for functional parts and fixtures",
          "PID control: bed up to 140°C, nozzle up to 380°C, chamber up to 65°C",
          "Enclosed, insulated chamber for more stable printing conditions",
          "Engineered for industrial 24/7 production reliability"
        ],
        image: "/images/w_parts.png"
      },
      {
        title: "High-Throughput Multi-Material Printing (4-Tool System)",
        desc: "Built for speed and flexibility, M1 uses a direct-drive toolhead with four interchangeable tool slots—ideal for fast multi-color prints or multi-material workflows without constant manual swapping. From prototyping to small-batch runs, the system is designed to keep throughput high and downtime low.",
        bullets: [
          "4-tool workflow for multi-color or multi-material printing",
          "Direct-drive extrusion for responsive material control",
          "Optimized for repeatable production runs and continuous operation",
          "Compatible with additional tool types for expanding use cases"
        ],
        image: "/images/tools.png"
      },
      {
        title: "Smart Calibration: Automatic Z + Camera-Assisted XY Alignment",
        desc: "M1 reduces setup time with calibration tools designed for production. Eddy-current sensing enables automatic nozzle Z offset control for consistent first layers, while camera-assisted calibration makes XY offset alignment quicker and more repeatable—especially valuable in multi-tool configurations.",
        bullets: [
          "Eddy-current sensing for automatic nozzle Z offset control",
          "Camera-assisted XY offset calibration for faster alignment",
          "Better repeatability when switching tools/materials",
          "More reliable first layers with less trial-and-error"
        ],
        image: "/images/nozzle-calibrate.png"
      },
      {
        title: "AI Print Monitoring: Catch Failures Early, Save Time and Material",
        desc: "Production reliability depends on visibility. M1’s chamber camera and AI monitoring help detect common failures—such as “spaghetti” errors—early in the process. This improves supervision during long prints, reduces wasted material, and helps teams run jobs with more confidence.",
        bullets: [
          "Chamber monitoring for real-time visibility",
          "AI detection for spaghetti/print failure indicators",
          "Print cycle monitoring for better production oversight",
          "Supports more reliable unattended printing"
        ],
        image: "/images/spaghetti.png"
      },
      {
        title: "Materials, Software, and Secure Connectivity for Teams",
        desc: "M1 supports a wide range of materials—from general-purpose plastics to advanced engineering polymers—backed by a modern software stack. Compatibility with popular slicers, plus secure identity and organization controls, makes it suitable for professional environments where access, accountability, and remote workflows matter.",
        bullets: [
          "Materials support: PLA/ABS/PETG/ASA and engineering polymers (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)",
          "Slicer compatibility: PrusaSlicer, Orca Slicer, LayersTech Slicer",
          "Secure access: 2FA, organization admin roles, SSO",
          "Ethernet connectivity and wireless updates; remote access and camera workflow"
        ],
        image: "/images/parts.png"
      },
      {
        title: "Support & Service for Production Teams",
        desc: "Support that keeps production moving. LayersTech M1 is backed by a professional service workflow designed for industrial uptime—from onboarding and operator guidance to remote assistance and preventive maintenance planning. Teams can monitor prints via the chamber camera, manage jobs over the network, and keep systems updated through secure connectivity features.",
        bullets: [
          "Setup onboarding and operator guidance",
          "Remote support-ready workflow with camera visibility",
          "Maintenance planning for long-term reliability",
          "Secure access controls (2FA / roles / SSO) for team environments"
        ],
        image: "/images/support.png"
      }
    ],
    materials: [
      { name: "PLA", icon: materialImages.pla, type: "Standard" },
      { name: "ABS", icon: materialImages.abs, type: "Standard" },
      { name: "PVA", icon: materialImages.pva, type: "Support" },
      { name: "HIPS", icon: materialImages.hips, type: "Support" },
      { name: "TPU", icon: materialImages.tpu, type: "Flexible" },
      { name: "CARBON FIBER", icon: materialImages.cbn, type: "Composite" },
      { name: "PC", icon: materialImages.pc, type: "Engineering" },
      { name: "PETG", icon: materialImages.petg, type: "Standard" }
    ],
    specs: {
      "System Specifications": [
        { label: "Printing Process", value: "FFF (Fused Filament Fabrication)" },
        { label: "Build Volume", value: "300 × 300 × 320 mm" },
        { label: "Printer Category", value: "Industrial Multi-Head System" },
        { label: "Tool Slots", value: "2 / 4 (Independently Interchangeable)" },
        { label: "Slicing Software", value: "LayersTech Slicer, Cura, PrusaSlicer" }
      ],
      "Thermal Performance": [
        { label: "Max Nozzle Temp", value: "300°C (Optional 500°C Extended Nozzle)" },
        { label: "Max Bed Temp", value: "120°C (PID Controlled)" },
        { label: "Chamber Temp", value: "Active Heating up to 65°C" },
        { label: "Thermal Curing", value: "Integrated Passive Insulation" }
      ],
      "Mechanical Accuracy": [
        { label: "X/Y Resolution", value: "6.25 μm" },
        { label: "Z Resolution", value: "1.25 μm" },
        { label: "Layer Height", value: "0.05 mm - 0.4 mm" },
        { label: "Max Travel Speed", value: "300 mm/s" },
        { label: "Positioning Accuracy", value: "± 0.05 mm" }
      ],
      "Software & Security": [
        { label: "Connectivity", value: "Ethernet, Wi-Fi, USB, LayersOS Cloud" },
        { label: "Security", value: "2FA, VPN Secure, Admin Audit Trail" },
        { label: "AI & Monitoring", value: "1080p Camera (Optional AI Monitoring)" },
        { label: "User Interface", value: "7-inch Industrial Touchscreen" }
      ],
      "Facilities & Safety": [
        { label: "Filtration", value: "HEPA H13 + Active Carbon Filter" },
        { label: "Power Matrix", value: "3000 W (Peak) / 1250 W (Normal)" },
        { label: "Weight", value: "240 kg" },
        { label: "Dimensions", value: "1065 × 711 × 1975 mm" }
      ]
    }
  },
  m1pro: {
    name: "LayersTech M1PRO",
    subtitle: "Industrial Silicone & LSR System",
    description: "The M1PRO is designed for liquid-to-solid conversion of high-grade silicons and rubbers (LSR/RTV) alongside engineering polymers.",
    image: "/images/m1pro_dark.png",
    features: [
      {
        title: "Advanced Silicone (LSR) Printing System",
        desc: "LayersTech M1PRO is engineered as a true industrial silicone 3D printer, enabling reliable Liquid Silicone Rubber (LSR) printing for flexible, functional, and production-ready parts. The system supports precise deposition of silicone materials with different Shore hardness values, making it suitable for seals, gaskets, soft-touch components, and elastomer-like end-use parts. Unlike conventional systems, M1PRO integrates controlled curing and multi-tool support to ensure consistent layer bonding, dimensional accuracy, and repeatable mechanical performance throughout the entire print process.",
        bullets: [
          "LSR printing with multiple Shore hardness options",
          "Dedicated support material workflow for silicone printing",
          "Integrated heater rail for layer-by-layer silicone curing",
          "Production-ready silicone manufacturing"
        ],
        image: "/images/silion_parts.png"
      },
      {
        title: "Industrial Stability, Thermal Control, Consistent Output",
        desc: "LayersTech M1Pro is engineered for stable, repeatable FFF/FDM production. A rigid industrial frame and enclosed chamber reduce external variation, while PID-controlled temperatures keep the bed, nozzle, and chamber steady throughout long print cycles. This results in predictable layer placement, consistent dimensions, and reliable surface finish—run after run.",
        bullets: [
          "300 × 300 × 320 mm build volume for functional parts and fixtures",
          "PID control: bed up to 140°C, nozzle up to 380°C, chamber up to 65°C",
          "Enclosed, insulated chamber for more stable printing conditions",
          "Designed for industrial continuous production"
        ],
        image: "/images/silicone-card.jpg"
      },
      {
        title: "High-Throughput Multi-Material Printing (4-Tool System)",
        desc: "Built for speed and flexibility, M1Pro uses a direct-drive toolhead with four interchangeable tool slots—ideal for fast multi-color prints or multi-material workflows without constant manual swapping. From prototyping to small-batch runs, the system is designed to keep throughput high and downtime low.",
        bullets: [
          "4-tool workflow for multi-color or multi-material printing",
          "Direct-drive extrusion for responsive material control",
          "Optimized for repeatable production runs and continuous operation",
          "Compatible with additional tool types for expanding use cases"
        ],
        image: "/images/tools.png"
      },
      {
        title: "Smart Calibration: Automatic Z + Camera-Assisted XY Alignment",
        desc: "M1Pro reduces setup time with calibration tools designed for production. Eddy-current sensing enables automatic nozzle Z offset control for consistent first layers, while camera-assisted calibration makes XY offset alignment quicker and more repeatable—especially valuable in multi-tool configurations.",
        bullets: [
          "Eddy-current sensing for automatic nozzle Z offset control",
          "Camera-assisted XY offset calibration for faster alignment",
          "Better repeatability when switching tools/materials",
          "More reliable first layers with less trial-and-error"
        ],
        image: "/images/nozzle-calibrate.png"
      },
      {
        title: "AI Print Monitoring: Catch Failures Early, Save Time and Material",
        desc: "Production reliability depends on visibility. M1Pro’s chamber camera and AI monitoring help detect common failures—such as “spaghetti” errors—early in the process. This improves supervision during long prints, reduces wasted material, and helps teams run jobs with more confidence.",
        bullets: [
          "Chamber monitoring for real-time visibility",
          "AI detection for spaghetti/print failure indicators",
          "Print cycle monitoring for better production oversight",
          "Supports more reliable unattended printing"
        ],
        image: "/images/spaghetti.png"
      },
      {
        title: "Materials, Software, and Secure Connectivity for Teams",
        desc: "M1Pro supports a wide range of materials—from general-purpose plastics to advanced engineering polymers—backed by a modern software stack. Compatibility with popular slicers, plus secure identity and organization controls, makes it suitable for professional environments where access, accountability, and remote workflows matter.",
        bullets: [
          "Materials support: PLA/ABS/PETG/ASA and engineering polymers (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)",
          "Slicer compatibility: PrusaSlicer, Orca Slicer, LayersTech Slicer",
          "Secure access: 2FA, organization admin roles, SSO",
          "Ethernet connectivity and wireless updates; remote access and camera workflow"
        ],
        image: "/images/parts.png"
      },
      {
        title: "Support & Service for Production Teams",
        desc: "Support that keeps production moving. LayersTech M1Pro is backed by a professional service workflow designed for industrial uptime—from onboarding and operator guidance to remote assistance and preventive maintenance planning. Teams can monitor prints via the chamber camera, manage jobs over the network, and keep systems updated through secure connectivity features.",
        bullets: [
          "Setup onboarding and operator guidance",
          "Remote support-ready workflow with camera visibility",
          "Maintenance planning for long-term reliability",
          "Secure access controls (2FA / roles / SSO) for team environments"
        ],
        image: "/images/support.png"
      }
    ],
    materials: [
      { name: "LSR Silicone", icon: materialImages.lsr, type: "Industrial Silicone" },
      { name: "RTV Silicone", icon: materialImages.rtv, type: "Silicone Rubber" },
      { name: "ASA", icon: "/images/materials/asa.jpg", type: "Engineering" },
      { name: "PA", icon: "/images/materials/pa.jpg", type: "Engineering" },
      { name: "PC-ABS", icon: "/images/materials/pcabs.jpg", type: "Engineering" },
      { name: "PEEK", icon: "/images/materials/peek.jpg", type: "High-Performance" },
      { name: "PEI", icon: "/images/materials/pei.jpg", type: "High-Performance" },
      { name: "GF", icon: "/images/materials/gf.jpg", type: "Composite" },
      { name: "KF", icon: "/images/materials/kf.jpg", type: "Composite" },
      { name: "CBN", icon: materialImages.cbn, type: "Composite" },
      { name: "PLA", icon: materialImages.pla, type: "Standard" },
      { name: "ABS", icon: materialImages.abs, type: "Standard" },
      { name: "PVA", icon: materialImages.pva, type: "Support" },
      { name: "HIPS", icon: materialImages.hips, type: "Support" },
      { name: "PETG", icon: materialImages.petg, type: "Standard" },
      { name: "TPU", icon: materialImages.tpu, type: "Flexible" }
    ],
    specs: {
      "System Specifications": [
        { label: "Printing Process", value: "Industrial LSR & FDM Hybrid" },
        { label: "Build Volume", value: "300 × 300 × 320 mm" },
        { label: "Tool Slots", value: "4 (Standart Industrial Multi-Head)" },
        { label: "LSR Head", value: "Soğutmalı Nozul & Volümetrik Dozaj" },
        { label: "Slicing Software", value: "LayersTech Professional Slicer (ASM Optimized)" }
      ],
      "Thermal & Curing": [
        { label: "Infrared System", value: "Integrated IR Curing for Silicone Vulcanization" },
        { label: "Max Nozzle Temp", value: "300°C (FFF) / Cooled LSR Interface" },
        { label: "Max Bed Temp", value: "120°C (PID Controlled)" },
        { label: "Chamber Temp", value: "Active Heating + High Efficiency Insulation" }
      ],
      "Mechanical Performance": [
        { label: "X/Y Resolution", value: "6.25 μm" },
        { label: "Z Resolution", value: "1.25 μm" },
        { label: "Layer Thickness", value: "0.05 mm - 0.5 mm" },
        { label: "Travel Speed", value: "300 mm/s (Industrial Grade)" },
        { label: "Position Accuracy", value: "± 0.05 mm" }
      ],
      "Software & Interface": [
        { label: "Connectivity", value: "Wi-Fi, Ethernet, USB, Cloud, VPN Secure Connection" },
        { label: "Security", value: "SSO, 2FA, VPN, Admin Audit Trail" },
        { label: "Monitoring", value: "4K Camera + Advanced AI Print Monitoring Control" },
        { label: "User Interface", value: "10.1-inch Industrial PC Touchscreen" }
      ],
      "Infrastructure & Safety": [
        { label: "Filtration", value: "HEPA H13 + Active Carbon + Active Volatiles Filtration" },
        { label: "Power Max", value: "3200 W (Peak Demand)" },
        { label: "Weight", value: "260 kg" },
        { label: "Dimensions", value: "1065 × 711 × 1975 mm" }
      ]
    }
  }
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = productData[id as keyof typeof productData];
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("features");
  const [mounted, setMounted] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace("#", "");
    if (hash && ["features", "compatibility", "specs"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    if (tabRef.current) {
      const offset = tabRef.current.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  if (!mounted) return <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" />;
  if (!product) return null;

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500">
      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] dark:bg-white/[0.03] border-b border-black/5 dark:border-white/5 py-4 transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <nav className="flex items-center gap-3 text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#F26522]">{t({ EN: "Home", TR: "Anasayfa" })}</Link>
            <Lucide.ChevronRight className="w-3 h-3" />
            <Link href="/3d-printers" className="hover:text-[#F26522]">{t({ EN: "3D Printers", TR: "3D Yazıcılar" })}</Link>
            <Lucide.ChevronRight className="w-3 h-3" />
            <span className="text-[#F26522]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-32 bg-[#f8f8f8] dark:bg-white/[0.03] transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <span className="text-[#F26522] font-black text-[11px] tracking-[0.5em] uppercase block mb-8 leading-none underline underline-offset-8 decoration-2 decoration-[#F26522]/20">{product.subtitle}</span>
               <h1 className="text-5xl sm:text-7xl lg:text-[120px] font-black text-[#1a1a1a] dark:text-white uppercase leading-[0.8] tracking-tighter mb-12">
                 {product.name.includes("PRO") ? (
                   <>
                     {product.name.replace("PRO", "")}
                     <span className="text-[#F26522]">PRO</span>
                   </>
                 ) : (
                   product.name
                 )}
               </h1>
               <p className="text-lg md:text-2xl text-black/70 dark:text-white/70 font-light leading-relaxed max-w-xl mb-16">{product.description}</p>
               <Button className="h-16 px-12 bg-[#1a1a1a] dark:bg-white dark:text-black text-white rounded-full text-[11px] font-extrabold tracking-[0.2em] hover:bg-[#F26522] dark:hover:bg-[#F26522] dark:hover:text-white transition-all uppercase">
                 {t({ EN: "Request a Quote", TR: "Teklif Alın" })}
               </Button>
            </div>
            <div className="relative aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain dark:brightness-90 dark:contrast-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div id="product-nav" ref={tabRef} className="sticky top-[80px] z-[40] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-y border-black/5 dark:border-white/10 shadow-xl transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
            {["features", "compatibility", "specs"].map((tab) => (
              <button
                key={tab}
                id={`btn-tab-${tab}`}
                data-tab={tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "vanilla-tab-btn px-6 h-20 md:px-12 flex items-center text-[10px] font-extrabold tracking-[0.2em] md:tracking-[0.4em] uppercase transition-all relative cursor-pointer",
                  activeTab === tab ? "text-[#F26522]" : "text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white"
                )}
              >
                {t({ EN: tab, TR: tab === "features" ? "ÖZELLİKLER" : tab === "compatibility" ? "UYUMLULUK" : "TEKNİK" })}
                {activeTab === tab ? <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F26522] tab-indicator" /> : <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent tab-indicator" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main>
        <div id="tab-content-features" className={activeTab === "features" ? "block" : "hidden"}>
          <section className="py-20 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="container mx-auto px-6 max-w-[1400px]">
              <div className="flex flex-col gap-12">
                {product.features.map((f, i) => (
                  <div key={i} className="bg-gradient-to-br from-white via-[#fffaf8] to-[#F26522]/5 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#F26522]/5 rounded-[32px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 flex flex-col lg:flex-row gap-20 items-center overflow-hidden transition-all duration-1000 group shadow-md hover:shadow-2xl hover:border-[#F26522]/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/0 via-[#F26522]/0 to-[#F26522]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    <div className={cn("flex-1 order-2 relative z-10", i % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
                       <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#F26522] dark:from-white dark:via-white dark:to-[#F26522] group-hover:from-[#F26522] group-hover:to-[#D35400] transition-all duration-700">
                          {f.title}
                       </h3>
                       <p className="text-black/70 dark:text-white/70 text-xl font-light leading-relaxed mb-10 max-w-2xl">{f.desc}</p>
                       <ul className="space-y-4">
                         {(f.bullets || []).map((bullet, idx) => (
                           <li key={idx} className="flex items-start gap-4 group/bullet hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
                             <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#F26522] to-[#D35400] mt-2 shrink-0 group-hover/bullet:scale-150 transition-all duration-300 shadow-sm shadow-[#F26522]/40" />
                             <span className="text-black/90 dark:text-white/90 text-lg font-medium leading-tight transition-colors group-hover/bullet:text-[#F26522] dark:group-hover/bullet:text-[#F26522]">{bullet}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className={cn("flex-1 w-full order-1", i % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                      <div className="aspect-[4/3] bg-white/50 dark:bg-black/20 rounded-[40px] overflow-hidden border border-black/5 dark:border-white/10 p-4">
                         <img src={f.image} alt={f.title} className="w-full h-full object-contain dark:brightness-110 transition-transform duration-1000 group-hover:scale-105" 
                           onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x600/ffffff/F26522?text=${f.title}`; }}
                         />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div id="tab-content-compatibility" className={activeTab === "compatibility" ? "block" : "hidden"}>
          <section className="py-40 animate-in fade-in slide-in-from-bottom-12 duration-700 bg-white dark:bg-[#0a0a0a] transition-colors">
            <div className="container mx-auto px-6 max-w-[1400px]">
              <div className="text-center mb-16 md:mb-32">
                  <span className="text-[#F26522] font-black text-xs tracking-[0.4em] uppercase block mb-8">{t({ EN: "Industrial Excellence", TR: "Endüstriyel Mükemmellik" })}</span>
                  <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-[#1a1a1a] dark:text-white leading-none">{t({ EN: "Manufacturing Ecosystem", TR: "Üretim Ekosistemi" })}</h2>
               </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {product.materials.map((m, idx) => (
                   <div key={idx} className="bg-white dark:bg-white/[0.03] rounded-[32px] md:rounded-[50px] border border-black/10 dark:border-white/10 shadow-md hover:border-[#F26522]/50 hover:shadow-2xl transition-all duration-700 p-6 group">
                      <div className="aspect-square w-full rounded-[40px] overflow-hidden bg-white dark:bg-black/40 mb-8 border border-black/5 dark:border-white/10 relative flex items-center justify-center transition-colors">
                        <img 
                          src={m.icon} 
                          alt={m.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.style.backgroundImage = 'url("/images/industrial_spool_fallback.jpg")';
                            target.parentElement!.style.backgroundSize = 'cover';
                            target.parentElement!.style.backgroundPosition = 'center';
                            target.parentElement!.innerHTML = `
                              <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                                <span class="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">${m.type}</span>
                                <div class="w-12 h-[1px] bg-[#F26522] mb-4"></div>
                                <span class="text-white font-bold text-4xl leading-[0.8] uppercase tracking-tighter text-wrap">${m.name}</span>
                              </div>`;
                          }}
                        />
                      </div>
                      <div className="px-4">
                        <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#F26522] uppercase mb-3">{m.type}</p>
                        <h4 className="text-4xl font-black uppercase tracking-tighter leading-none text-[#1a1a1a] dark:text-white">{m.name}</h4>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div id="tab-content-specs" className={activeTab === "specs" ? "block" : "hidden"}>
          <section className="py-20 md:py-40 animate-in fade-in slide-in-from-bottom-12 duration-700 bg-[#0c0c0c] text-white">
            <div className="container mx-auto px-6 max-w-[1400px]">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                  <div className="lg:col-span-4">
                    <div className="sticky top-40">
                      <span className="text-[#F26522] font-black text-xs tracking-[0.4em] uppercase block mb-10">{t({ EN: "Technical Documentation", TR: "Teknik Dokümantasyon" })}</span>
                      <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-white">{t({ EN: "Full Datasheet", TR: "Tam Veri Sayfası" })}</h2>
                      <p className="text-white/70 text-xl font-light mb-16 leading-relaxed">{t({ EN: "Official manufacturing specifications verified for industrial grade output and 24/7 reliability standards.", TR: "Endüstriyel sınıf çıktı ve 24/7 güvenilirlik standartları için doğrulanmış resmi üretim özellikleri." })}</p>
                      <Button className="h-16 px-12 bg-white text-black font-extrabold text-[11px] tracking-[0.2em] uppercase hover:bg-[#F26522] hover:text-white transition-all rounded-full w-full">
                         {t({ EN: "Download Catalog PDF", TR: "Kataloğu PDF İndir" })}
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-8 flex flex-col gap-32">
                    {Object.entries(product.specs).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="flex items-center gap-4 text-[#F26522] text-[11px] font-black tracking-[0.5em] uppercase mb-12 pb-6 border-b border-white/10">
                          {category}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-0">
                           {(items as {label: string, value: string}[]).map((item, idx) => (
                             <div key={idx} className="flex flex-col py-8 border-b border-white/5 hover:bg-white/5 px-6 transition-all group">
                               <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 group-hover:text-[#F26522] transition-colors">{item.label}</span>
                               <span className="text-2xl font-black text-white leading-none tracking-tight">{item.value}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
