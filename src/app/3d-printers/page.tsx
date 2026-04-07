"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import FounderVision from "@/components/FounderVision";
import SmartSolutions from "@/components/SmartSolutions";

export default function PrintersPage() {
  const { t } = useLanguage();

  const printers = [
    {
      id: "m1",
      name: "M1",
      fullName: "LayersTech M1",
      tagline: { EN: "THE INDUSTRIAL STANDARD", TR: "ENDÜSTRİYEL STANDART" },
      type: { EN: "FFF / FDM SYSTEM", TR: "FFF / FDM SİSTEMİ" },
      description: { 
        EN: "Built for repeatable, production-ready plastic parts with high-temperature capability and AI-assisted monitoring.", 
        TR: "Yüksek sıcaklık kabiliyeti ve yapay zeka destekli izleme ile tekrarlanabilir, üretime hazır plastik parçalar için üretildi." 
      },
      image: "/images/product.webp",
      specs: [
        { EN: "380°C Nozzle", TR: "380°C Nozül" },
        { EN: "AI Failure Detection", TR: "Yapay Zeka Hata Tespiti" },
        { EN: "65°C Chamber", TR: "65°C Kabin" }
      ]
    },
    {
      id: "m1pro",
      name: "M1PRO",
      fullName: "LayersTech M1PRO",
      tagline: { EN: "THE SILICONE PIONEER", TR: "SİLİKONUN ÖNCÜSÜ" },
      type: { EN: "SILICONE / LSR HYBRID", TR: "SİLİKON / LSR HİBRİT" },
      description: { 
        EN: "Specialized industrial 3D printer for flexible silicone and rubber parts with advanced process control and 4-tool modularity.", 
        TR: "Gelişmiş proses kontrolü ve 4 kafa modülerliği ile esnek silikon ve kauçuk parçalar için özelleşmiş endüstriyel 3D yazıcı." 
      },
      image: "/images/product.webp",
      specs: [
        { EN: "LSR / RTV Printing", TR: "LSR / RTV Baskı" },
        { EN: "4 Tool Change", TR: "4 Kafa Değişimi" },
        { EN: "Multi-Material", TR: "Çoklu Malzeme" },
        { EN: "380°C Nozzle", TR: "380°C Nozül" },
        { EN: "AI Failure Detection", TR: "Yapay Zeka Hata Tespiti" },
        { EN: "65°C Chamber", TR: "65°C Kabin" }
      ]
    }
  ];

  const [activeSlot, setActiveSlot] = React.useState(0);
  const [tools, setTools] = React.useState([
    { id: 1, type: "silicone", label: "SILICONE", detail: "Shore A20 (Soft)", color: "#F26522" },
    { id: 2, type: "silicone", label: "SILICONE", detail: "Shore A60 (Medium)", color: "#F26522" },
    { id: 3, type: "support", label: "SUPPORT", detail: "Soluble Material", color: "#E0E0E0" },
    { id: 4, type: "fdm", label: "FDM", detail: "PA12-CF (Rigid)", color: "#FFFFFF" },
  ]);

  const materialOptions = [
    { type: "silicone", label: "Silicone (Soft)", detail: "Shore A5 - A30" },
    { type: "silicone", label: "Silicone (Firm)", detail: "Shore A40 - A80" },
    { type: "fdm", label: "FDM (Thermoplastic)", detail: "PA12, TPU, PEEK" },
    { type: "support", label: "Support Material", detail: "Soluble / Breakaway" },
  ];

  const updateTool = (type: string, label: string, detail: string) => {
    const newTools = [...tools];
    newTools[activeSlot] = { 
      ...newTools[activeSlot], 
      type, 
      label: type.toUpperCase(), 
      detail,
      color: type === 'silicone' ? '#F26522' : type === 'fdm' ? '#FFFFFF' : '#E0E0E0'
    };
    setTools(newTools);
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#F26522]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <header className="max-w-4xl">
            <span className="text-[#F26522] font-black text-xs tracking-[0.5em] uppercase mb-6 block">
              {t({ EN: "OUR PRODUCTION ECOSYSTEM", TR: "ÜRETİM EKOSİSTEMİMİZ" })}
            </span>
            <h1 className="text-6xl md:text-[120px] font-black text-[#1a1a1a] dark:text-white uppercase leading-[0.85] tracking-tighter mb-10">
              {t({ EN: "Industrial", TR: "Endüstriyel" })} <br />
              <span className="text-black/10 dark:text-white/20">{t({ EN: "Powerhouse.", TR: "Güç Merkezi." })}</span>
            </h1>
            <p className="text-xl text-black/50 dark:text-white/50 font-light max-w-2xl leading-relaxed">
              {t({
                EN: "Redefining additive manufacturing with world-first quad-tool flexibility and thermal curing technology.",
                TR: "Dünyanın ilk dört kafa esnekliği ve termal kürleme teknolojisi ile katmanlı üretimi yeniden tanımlıyoruz."
              })}
            </p>
          </header>
        </div>
      </section>

      {/* NEW PRODUCT SHOWCASE */}
      <section className="py-20 relative">
        <div className="space-y-40">
          {printers.map((printer, idx) => (
            <div key={printer.id} className="relative group overflow-hidden">
              <div className="container mx-auto px-6 lg:px-12">
                <div className={`flex flex-col lg:items-center gap-16 lg:gap-24 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <div className="flex-1 relative">
                    <div className="absolute -inset-20 bg-[#F26522]/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-[60px] overflow-hidden bg-gray-50/50 dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-3xl flex items-center justify-center p-12 transition-all duration-1000 group-hover:bg-white/[0.08]">
                       <div className="relative w-full h-full">
                         <Image 
                          src={printer.image}
                          alt={printer.name}
                          fill
                          unoptimized
                          priority
                          className="object-contain transform transition-transform duration-[3000ms] group-hover:scale-110"
                         />
                       </div>
                       
                       {/* Floating Technical Badge */}
                       <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                          <span className="px-5 py-2 bg-[#F26522] rounded-full text-[10px] font-black tracking-widest text-white shadow-xl">
                            {t(printer.type as any)}
                          </span>
                       </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="flex-1">
                    <div className="space-y-10">
                       <div>
                         <span className="text-[#F26522] font-black text-xs tracking-widest uppercase mb-4 block">
                           {t(printer.tagline)}
                         </span>
                         <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white uppercase tracking-tighter leading-none">
                           {printer.fullName.includes("PRO") ? (
                             <>
                               {printer.fullName.replace("PRO", "")}
                               <span className="text-[#F26522]">PRO</span>
                             </>
                           ) : (
                             printer.fullName
                           )}
                         </h2>
                       </div>

                       <p className="text-lg text-black/60 dark:text-white/40 font-light leading-relaxed max-w-lg transition-colors">
                         {t(printer.description)}
                       </p>

                       <div className="flex flex-wrap gap-4">
                          {printer.specs.map((spec, i) => (
                            <div key={i} className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.02] text-[11px] font-black uppercase tracking-widest text-black/60 dark:text-white/60">
                               {t(spec as any)}
                            </div>
                          ))}
                       </div>

                       <div className="pt-6">
                         <Link href={`/3d-printers/${printer.id}`}>
                             <button className="group/btn relative px-10 py-5 bg-[#1a1a1a] dark:bg-white text-white dark:text-black font-black text-xs tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
                               <span className="relative z-10">{t({ EN: "SYSTEM OVERVIEW", TR: "SİSTEME GÖZ AT" })}</span>
                               <div className="absolute inset-0 bg-[#F26522] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                            </button>
                         </Link>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Massive Indexed Background Number */}
               <div className={`absolute top-1/2 -translate-y-1/2 text-[30vw] font-black text-black/[0.03] dark:text-white/[0.02] pointer-events-none select-none z-0 ${idx % 2 === 0 ? '-right-20' : '-left-20'}`}>
                  0{idx + 1}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CONFIGURATOR SECTION */}
       <section className="container mx-auto px-6 lg:px-12 py-32">
        <div className="relative py-24 px-8 md:px-16 rounded-[60px] bg-gray-50/50 dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-3xl overflow-hidden text-black dark:text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F26522]/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F26522]/10 rounded-full blur-[120px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#F26522] font-bold text-xs tracking-[0.4em] uppercase">
                {t({ EN: "ADVANCED VERSATILITY", TR: "İLERİ SEVİYE ÇOK YÖNLÜLÜK" })}
              </span>
               <h2 className="mt-6 text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8 text-[#1a1a1a] dark:text-[#FFF5F0]">
                {t({ EN: "The Quad-Tool", TR: "Dört Kafalı" })} <br/> 
                <span className="text-[#F26522]">{t({ EN: "Engine.", TR: "Motor." })}</span>
              </h2>
               <p className="text-black/60 dark:text-white/70 text-lg font-light max-w-md leading-relaxed mb-12">
                {t({
                  EN: "Total modular freedom. Assign any tool—Silicone, FDM, or Support—to any of the four available slots. Build your own hybrid manufacturing platform with zero restrictions on head placement.",
                  TR: "Tam modüler özgürlük. Silikon, FDM veya Destek fark etmeksizin; dört istasyondan herhangi birine dilediğiniz kafayı atayın. Kafa yerleşimi konusunda sıfır kısıtlama ile kendi hibrit üretim platformunuzu oluşturun."
                })}
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-widest text-[#F26522] uppercase opacity-60">
                   {t({ EN: `SELECT MATERIAL FOR TOOL ${activeSlot + 1}`, TR: `KAFA ${activeSlot + 1} İÇİN MALZEME SEÇİN` })}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {materialOptions.map((opt, i) => (
                     <button
                      key={i}
                      onClick={() => updateTool(opt.type, opt.label, opt.detail)}
                      className={`p-6 rounded-2xl border text-left transition-all duration-300 group ${
                        tools[activeSlot].detail === opt.detail 
                        ? 'bg-[#F26522] border-[#F26522] text-white shadow-[0_20px_40px_rgba(242,101,34,0.2)]' 
                        : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-[#F26522]/50 text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      <p className={`text-xs font-black uppercase tracking-tighter mb-1 ${tools[activeSlot].detail === opt.detail ? 'text-white' : 'text-[#1a1a1a] dark:text-[#FFF5F0]'}`}>
                        {t({
                          "Silicone (Soft)": { EN: "Silicone (Soft)", TR: "Silikon (Yumuşak)" },
                          "Silicone (Firm)": { EN: "Silicone (Sert)", TR: "Silikon (Sert)" },
                          "FDM (Thermoplastic)": { EN: "FDM (Thermoplastic)", TR: "FDM (Plastik)" },
                          "Support Material": { EN: "Support Material", TR: "Destek Malzemesi" }
                        }[opt.label]) || opt.label}
                      </p>
                      <p className="text-[10px] opacity-60 font-medium">
                        {t({
                          "Shore A5 - A30": { EN: "Shore A5 - A30", TR: "Sertlik A5 - A30" },
                          "Shore A40 - A80": { EN: "Shore A40 - A80", TR: "Sertlik A40 - A80" },
                          "PA12, TPU, PEEK": { EN: "PA12, TPU, PEEK", TR: "Endüstriyel Filamentler" },
                          "Soluble / Breakaway": { EN: "Soluble / Breakaway", TR: "Çözünür veya Kırılabilir" }
                        }[opt.detail]) || opt.detail}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative bg-white/[0.02] rounded-[40px] p-12 border border-black/10 dark:border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group/viz">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover/viz:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {tools.map((tool, idx) => (
                  <div 
                    key={tool.id}
                    onClick={() => setActiveSlot(idx)}
                    className={`relative cursor-pointer transition-all duration-500 transform ${
                      activeSlot === idx ? 'scale-105' : 'scale-100 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className={`aspect-square rounded-3xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-500 ${
                      activeSlot === idx ? 'border-[#F26522] bg-gray-50 dark:bg-white/5 shadow-[0_0_50px_rgba(242,101,34,0.1)]' : 'border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20'
                    }`}>
                      <div className={cn(
                        "p-4 rounded-full transition-colors duration-500",
                        tool.type === 'silicone' ? "bg-[#F26522]/10" :
                        tool.type === 'fdm' ? "bg-black/5 dark:bg-white/10" :
                        "bg-black/5 dark:bg-charcoal/40 dark:bg-white/5"
                      )}>
                         {tool.type === 'silicone' ? <Layers className="w-8 h-8 text-[#F26522]" /> : 
                          tool.type === 'fdm' ? <Cpu className="w-8 h-8 text-black/80 dark:text-white" /> :
                          <Zap className="w-8 h-8 text-black/30 dark:text-white/40" />}
                      </div>
                      <div className="text-center">
                         <p className="text-[10px] font-black tracking-widest text-black/40 dark:text-white/60 mb-1">
                          {t({ EN: "TOOL", TR: "KAFA" })} 0{tool.id}
                        </p>
                         <p className="text-sm font-bold tracking-tight text-black dark:text-white/90">
                           {t({ "SILICONE": { EN: "SILICONE", TR: "SİLİKON" }, "FDM": { EN: "FDM", TR: "FDM" }, "SUPPORT": { EN: "SUPPORT", TR: "DESTEK" } }[tool.label]) || tool.label}
                        </p>
                      </div>
                      
                      {activeSlot === idx && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F26522] animate-ping"></div>
                      )}
                    </div>
                    
                    <div className={`mt-4 text-center transition-all duration-500 ${activeSlot === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                       <p className="text-[10px] text-[#F26522] font-black uppercase tracking-widest">
                          {t({
                             "Shore A20 (Soft)": { EN: "Shore A20 (Soft)", TR: "Shore A20 (Yumuşak)" },
                             "Shore A60 (Medium)": { EN: "Shore A60 (Orta)", TR: "Shore A60 (Orta)" },
                             "Soluble Material": { EN: "Soluble Material", TR: "Çözünür Malzeme" },
                             "PA12-CF (Rigid)": { EN: "PA12-CF (Rigid)", TR: "PA12-CF (Sert)" }
                          }[tool.detail]) || tool.detail}
                       </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 text-center">
                <div className="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#65f222] animate-pulse"></div>
                       <span className="text-[10px] font-black tracking-widest uppercase text-black dark:text-white">
                         {t({ EN: "READY TO PRINT", TR: "BASKIYA HAZIR" })}
                      </span>
                   </div>
                    <div className="w-[1px] h-4 bg-black/10 dark:bg-white/10"></div>
                   <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-[#F26522] tracking-widest uppercase">
                        {t({ EN: "ANY TOOL. ANY SLOT.", TR: "İSTEDİĞİN ARAÇ. İSTEDİĞİN KAFA." })}
                      </span>
                       <span className="text-[8px] font-light text-black/40 dark:text-white/40 uppercase tracking-widest mt-1">
                        {t({ EN: "FULLY MODULAR", TR: "TAM MODÜLER SİSTEM" })}
                      </span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartSolutions />
      <FounderVision />
    </div>
  );
}
