import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Factory, Cpu, Cog, Zap, Shield, Target } from "lucide-react";

export default function IndustrialSector() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section Haus */}
        <section className="bg-heading py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Industrial Sector</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Industrial Sector</h1>
            <p className="text-white/60 max-w-2xl text-sm md:text-base mb-8">
              Revolutionizing traditional manufacturing with high-performance SLS solutions for factories and production lines.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Detailed Content Haus */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                 <h2 className="text-3xl font-black text-heading uppercase">Why SLS for Industry?</h2>
                 <p className="text-[#777777] text-sm leading-relaxed">
                    The industrial sector requires precision, durability, and cost-efficiency. Our <strong className="text-heading">SLS (Selective Laser Sintering)</strong> technology eliminates the need for expensive molding and tooling for low to medium-volume production.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-6 bg-[#fcfcfc] rounded-2xl border border-gray-100">
                       <Cpu className="w-8 h-8 text-primary mb-4" />
                       <h4 className="font-black text-heading mb-2 uppercase text-xs">Automation & Robotics</h4>
                       <p className="text-[11px] text-[#777777]">Customized gripper end-effectors, robotic arm components, and flexible connectors designed for high-cycle production.</p>
                    </div>
                    <div className="p-6 bg-[#fcfcfc] rounded-2xl border border-gray-100">
                       <Cog className="w-8 h-8 text-primary mb-4" />
                       <h4 className="font-black text-heading mb-2 uppercase text-xs">Machinery Parts</h4>
                       <p className="text-[11px] text-[#777777]">Wear-resistant gears, custom jigs, fixtures, and internal cooling channels for complex mechanical assemblies.</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-black text-heading">Spare Parts on Demand</h3>
                    <p className="text-[#777777] text-sm leading-relaxed">
                       Minimize downtime and supply chain risks with on-site manufacturing. We produce industrial-grade spare parts tailored to your specific machinery requirements.
                    </p>
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
                    <img src="/images/Secici-lazer-sinterleme-2.png" alt="Industrial Gears" className="w-full h-full object-cover shadow-2xl" />
                 </div>
                 <div className="bg-[#333940] p-10 rounded-[40px] text-white">
                    <h3 className="text-2xl font-black mb-6 uppercase">Key Advantages</h3>
                    <ul className="space-y-4">
                       {[
                         "High Strength-to-Weight Ratio",
                         "Chemical and Heat Resistance",
                         "No Support Structures Required",
                         "Rapid Iteration & Prototype Testing",
                         "Isotropic Mechanical Properties"
                       ].map((adv) => (
                         <li key={adv} className="flex items-center gap-3 font-bold text-xs">
                            <Zap className="w-4 h-4 text-[#00c0f3]" />
                            {adv}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Section Haus Haus Haus */}
        <section className="py-20 primary-gradient text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black mb-6 uppercase">Modernize Your Production Line</h2>
            <p className="mb-10 text-white/80 max-w-2xl mx-auto">
              Contact our industrial engineering division to discuss how additive manufacturing can optimize your operations.
            </p>
            <a href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded font-black tracking-widest hover:bg-heading hover:text-white transition-all shadow-xl">
              CONSULT AN EXPERT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
