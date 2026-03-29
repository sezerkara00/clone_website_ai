import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Plane, Car, Shield, Activity, Factory } from "lucide-react";

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
  { 
    title: "MANUFACTURING", 
    description: "Industrial jigs, fixtures, and custom tooling to optimize assembly line efficiency.", 
    icon: Factory,
    image: "/images/ALUMIDE-1.webp"
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

        {/* Industry Grid Haus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
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
                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-all">
                      <button className="text-[10px] font-black tracking-widest text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors">LEARN MORE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F8F9FA] text-center">
          <div className="container mx-auto px-6">
             <h2 className="text-2xl md:text-3xl font-black text-heading mb-8">Optimizing for the Future</h2>
             <p className="text-[#777777] max-w-3xl mx-auto text-sm leading-loose">
               We don't just print parts; we solve engineering challenges. Whether you're aiming for a 40% weight reduction in aerospace or a 10x faster lead time in medical tools, our industrial tech is the key to your competitive advantage.
             </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
