import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Box, Layers, Zap } from "lucide-react";

export default function ThreeDPrinting() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-[#2d2f31] py-20 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Our 3D Technologies</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">Our 3D Technologies</h1>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* SLS Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading">SLS - Selective Laser Sintering</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p>
                    <strong className="text-heading">Selective Laser Sintering (SLS)</strong> is a modular plastic 3D printing technology that allows for the creation of functional prototypes and industrial-scale final products. The process utilizes a high-power laser to fuse small particles of plastic powder into a solid structure based on a 3D model.
                  </p>
                  <p>
                    This technology is particularly well-suited for parts that require high durability and complex geometries. Because the unsintered powder acts as a natural support for the part during the build process, SLS allows for the creation of intricate designs that would be impossible with other manufacturing methods.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {[
                      "No support structures needed",
                      "High mechanical strength",
                      "Complex internal geometries",
                      "Batch production capable",
                      "Excellent thermal stability",
                      "Wide range of polyamides"
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 font-bold text-heading">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/images/all-printer-s300xliq.webp" alt="SLS Printer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DMLS Section Haus */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/images/METAL-URETIM.png" alt="Metal 3D Printing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading">DMLS - Direct Metal Laser Sintering</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p>
                    <strong className="text-heading">Direct Metal Laser Sintering (DMLS)</strong> is the pinnacle of additive manufacturing for metal components. It produces high-quality, fully dense metal parts that rival the properties of traditionally manufactured components.
                  </p>
                  <p>
                    DMLS is widely used in aerospace, medical, and automotive industries where weight reduction and high-performance materials are critical. By sintering metal powder layer by layer, we can create parts with internal cooling channels and optimized topologies that are impossible to machine.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-black text-primary">Steel</p>
                      <p className="text-[10px] uppercase font-bold text-heading/50">Industrial</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-black text-primary">Alu</p>
                      <p className="text-[10px] uppercase font-bold text-heading/50">Aerospace</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-2xl font-black text-primary">Ti</p>
                      <p className="text-[10px] uppercase font-bold text-heading/50">Medical</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Haus */}
        <section className="py-20 primary-gradient text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-wider">Ready to Start Your Project?</h2>
            <p className="mb-10 text-white/80 max-w-2xl mx-auto">
              Contact our engineering team today to discuss your technical requirements and get a professional consultation.
            </p>
            <a href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded font-black tracking-widest hover:bg-heading hover:text-white transition-all shadow-xl">
              GET A QUOTE
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
