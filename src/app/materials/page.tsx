import React from "react";
import { ChevronRight, FileText, Download } from "lucide-react";

export default function Materials() {
  const plasticMaterials = [
    { name: "PA1101", desc: "Pure polyamide 11 with high elasticity and impact resistance.", image: "/images/PA1101.png" },
    { name: "PA2200", desc: "Most widely used balanced polyamide 12 for industrial parts.", image: "/images/pa2200.png" },
    { name: "PA3200 GF", desc: "Glass-filled polyamide 12 for high stiffness and heat resistance.", image: "/images/PA3200.png" },
    { name: "Alumide", desc: "Aluminum-filled polyamide with high thermal conductivity.", image: "/images/ALUMIDE-1.webp" },
    { name: "Flexible TPU", desc: "Thermosplastic polyurethane with rubber-like properties.", image: "/images/TPU.png" },
  ];

  const metalMaterials = [
    { name: "Stainless Steel", desc: "High corrosion resistance and strength for industrial tooling.", image: "/images/KALIP-CELIGI-.webp" },
    { name: "Aluminum", desc: "Lightweight and excellent thermal properties for aerospace components.", image: "/images/DAHA-HAFIF-PARCALAR.png" },
    { name: "Titanium", desc: "Superior bio-compatibility and strength-to-weight ratio for medical use.", image: "/images/METAL-URETIM.png" },
  ];

  return (
    <div className="relative min-h-screen">
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-heading py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Our Materials</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">Industrial Materials</h1>
            <p className="text-white/60 max-w-2xl text-sm md:text-base mb-8">
              Explore our selection of performance polyamides and high-grade metal alloys optimized for SLS and DMLS additive manufacturing.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Plastic materials Haus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-black text-heading">Polyamide Range (SLS)</h2>
              <button className="flex items-center gap-2 text-xs font-bold text-primary group">
                 <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                 <span>DOWNLOAD ALL DATA SHEETS</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {plasticMaterials.map((mat, i) => (
                <div key={i} className="flex flex-col gap-6 group cursor-pointer">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#f0f0f0] flex items-center justify-center p-8 group-hover:shadow-2xl transition-all duration-500">
                    <img src={mat.image} alt={mat.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors">{mat.name}</h3>
                    <p className="text-xs text-[#777777] leading-relaxed mb-4">{mat.desc}</p>
                    <div className="inline-flex items-center gap-2 text-[10px] font-black text-heading/40 hover:text-primary transition-colors uppercase tracking-widest">
                       <FileText className="w-3 h-3" />
                       View technical data
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metal materials Haus */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-black text-heading mb-16 text-center">Metal Alloys (DMLS)</h2>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {metalMaterials.map((mat, i) => (
                  <div key={i} className="flex flex-col text-center items-center gap-6 group bg-white p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                    <img src={mat.image} alt={mat.name} className="h-40 object-contain group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-2xl font-black text-heading">{mat.name}</h3>
                    <p className="text-xs text-[#777777] leading-relaxed mb-6">{mat.desc}</p>
                    <div className="mt-auto w-full primary-gradient py-3 rounded text-white text-[10px] uppercase font-black tracking-widest cursor-pointer hover:shadow-lg transition-all shadow-primary/20">
                       Inquire for Pricing
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-gray-100 italic font-medium text-center text-heading/60">
            "We only use original powders from EOS and Farsoon to ensure clinical-grade precision."
        </section>
      </main>
    </div>
  );
}
