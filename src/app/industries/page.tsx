import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Plane, Car, Shield, Activity, Factory, Cpu, Zap, Cog } from "lucide-react";

const industries = [
  { 
    title: "AEROSPACE", 
    description: "Lightweight components and high-temperature resistant parts for the most demanding flight conditions.", 
    icon: Plane,
    image: "/images/DAHA-HAFIF-PARCALAR.png"
  },
  { 
    title: "AUTOMOTIVE", 
    description: "Rapid prototyping and end-use functional parts for vehicle testing and production cycles.", 
    icon: Car,
    image: "/images/ALUMIDE-1.webp"
  },
  { 
    title: "DEFENSE", 
    description: "Rugged, high-strength polyamide and metal parts for tactical and infrastructure support.", 
    icon: Shield,
    image: "/images/METAL-URETIM.png"
  },
  { 
    title: "MEDICAL", 
    description: "Bio-compatible materials for surgical tools, orthotics, and specialized medical device prototyping.", 
    icon: Activity,
    image: "/images/TPU.png"
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-heading py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Industries We Serve</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Smarter Industries</h1>
            <p className="text-white/60 max-w-2xl text-sm md:text-base mb-8">
              We provide cutting-edge additive manufacturing solutions across global industrial sectors, enabling innovation and speed to market.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Industrial Sector Deep Dive Haus */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="flex items-center gap-3 text-primary mb-6">
                    <Factory className="w-10 h-10" />
                    <div className="h-[2px] w-12 bg-primary"></div>
                 </div>
                 <h2 className="text-4xl font-black text-heading mb-8 uppercase tracking-tight">Industrial Sector SLS Solutions</h2>
                 <p className="text-[#777777] text-sm leading-relaxed mb-8">
                    Selective Laser Sintering (SLS) is a revolutionary technology for the industrial sector, offering high efficiency, lower costs, and complete design freedom. LayersTech LTD specializes in high-performance factory floor applications.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Cpu, title: "Automation", desc: "Customized gripper end-effectors and robotic assembly parts." },
                      { icon: Cog, title: "Machinery", desc: "Wear-resistant gears, custom molds, and mechanical fixtures." },
                      { icon: Zap, title: "Spare Parts", desc: "Rapid on-demand manufacturing to minimize supply chain gaps." },
                      { title: "Heavy Duty", desc: "Impact and chemical-resistant components for harsh environments." }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        {item.icon && <item.icon className="w-5 h-5 text-primary" />}
                        <h4 className="font-black text-heading uppercase text-xs">{item.title}</h4>
                        <p className="text-[11px] text-[#777777]">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img src="/images/Secici-lazer-sinterleme-2.png" alt="Industrial 3D Printing" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -top-10 -right-10 bg-heading p-8 rounded-3xl shadow-xl hidden lg:block -rotate-3">
                    <p className="text-primary font-black text-4xl">0.1mm</p>
                    <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">Accuracy Precision</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Grid Haus */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-black text-heading mb-16 text-center uppercase tracking-widest">Other Key Verticals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {industries.map((ind, i) => (
                <div key={i} className="group relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-heading/90 via-heading/50 to-transparent p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-primary mb-4">
                      <ind.icon className="w-8 h-8" />
                      <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform">{ind.title}</h2>
                    <p className="text-white/70 max-w-xs text-xs md:text-sm font-medium leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Section Haus Haus */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-6">
             <h2 className="text-2xl md:text-3xl font-black text-heading mb-8">Optimizing for the Future</h2>
             <p className="text-[#777777] max-w-3xl mx-auto text-sm leading-loose mb-12">
               We don't just print parts; we solve engineering challenges. Whether you're aiming for a 40% weight reduction in aerospace or a 10x faster lead time in medical tools, our industrial tech is the key to your competitive advantage.
             </p>
             <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all">
                <img src="/images/1200px-safran_-_logo_2016.webp" alt="Partner" className="h-8 md:h-12 object-contain" />
                <img src="/images/s_logo-scaled.png" alt="Partner" className="h-8 md:h-12 object-contain" />
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
