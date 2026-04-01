import React from "react";
import { ChevronRight, Target, Users, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-heading py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Our Story & Mission</h1>
            <p className="text-white/60 max-w-2xl text-sm md:text-base mb-8">
              Pioneering industrial 3D printing solutions with a focus on precision, speed, and customer-centric engineering.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Content Section Haus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-black text-heading mb-8">About Us in the Industry</h2>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p>
                    <strong className="text-heading">LayersTech</strong> was founded with a singular mission: to provide reliable, fast, and high-quality 3D printing solutions that bridge the gap between design and production. By specializing in <strong className="text-heading">Selective Laser Sintering (SLS)</strong>, we enable our partners to produce complex, durable parts without the constraints of traditional manufacturing.
                  </p>
                  <p>
                    Our philosophy rejects the "standard production line" mentality. Instead, we prioritize building long-term relationships based on trust and technical excellence. Whether it's a single functional prototype for a startup or a batch production run for a defense contractor, we approach every project with the same clinical precision.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                     <div className="flex flex-col gap-3">
                        <Target className="w-8 h-8 text-primary" />
                        <h4 className="font-black text-heading uppercase text-xs">Precision Focused</h4>
                        <p className="text-[11px]">We target micron-level accuracy in every layer of our SLS and DMLS processes.</p>
                     </div>
                     <div className="flex flex-col gap-3">
                        <Users className="w-8 h-8 text-primary" />
                        <h4 className="font-black text-heading uppercase text-xs">Customer Centric</h4>
                        <p className="text-[11px]">Your goals define our engineering approach. We are partners, not just vendors.</p>
                     </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/images/GALERI-scaled.jpg" alt="LayersTech Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                   <ShieldCheck className="w-12 h-12 text-white mb-2" />
                   <p className="text-white font-black text-3xl">14+</p>
                   <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section Haus */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-4xl font-black text-heading mb-16 tracking-tight">25 Years of Combined Expertise</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: "PROTOTYPING", text: "From initial CAD to functional assembly-ready parts in days." },
                  { title: "ENGINEERING", text: "Topological optimization and structural analysis for additive." },
                  { title: "PRODUCTION", text: "Scaling your designs from one to thousands using industrial SLS." }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-primary font-black mb-4 tracking-widest uppercase text-sm">{item.title}</h3>
                    <p className="text-xs text-[#777777] leading-relaxed">{item.text}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
