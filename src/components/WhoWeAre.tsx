import React from "react";
import { ChevronDown } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-heading mb-8">Who We Are</h2>
          <div className="space-y-6 text-[#777777] leading-relaxed text-sm md:text-base">
            <p>
              Thanks to our extensive <strong className="text-heading font-black italic">3D printing services</strong>, <strong className="text-heading font-black italic">laser sintering technologies</strong>, and software systems, we have provided and continue to provide <strong className="text-heading font-black italic">rapid prototyping</strong> services to countless companies across various industrial sectors such as aerospace, defense, medical, automotive, manufacturing, and mold-making. We are one of the pioneering and well-established companies in Turkey that set standards in this field. We are fully aware of the significance of design in <strong className="text-heading font-black italic">3D modeling</strong> and <strong className="text-heading font-black italic">rapid prototyping</strong>. We prioritize the confidentiality of our clients' data and ideas and are committed to their protection. Our long-standing and growing client base, built over more than 14 years of working with <strong className="text-heading font-black italic">3D modeling</strong> technology, is a testament to the trust we have earned.
            </p>
            <p className="font-bold text-heading/80">
              Layerstech
            </p>
            <p>
              With over 25 years of experience in <strong className="text-heading font-bold">3D modeling</strong> technology and <strong className="text-heading font-bold">rapid 3D prototyping</strong>, we serve the industry with pride. We operate <strong className="text-heading font-bold">SLS (Selective Laser Sintering)</strong> and <strong className="text-heading font-bold">DMLS (Direct Metal Laser Sintering)</strong> system park.
            </p>
            <p>
              Understanding that speed is one of the most critical factors in <strong className="text-heading font-bold">3D modeling</strong> and <strong className="text-heading font-bold">rapid prototyping</strong>, we plan our projects to achieve the fastest possible results. We carry out model production in accordance with essential standards such as part quality, dimensional accuracy, and durability.
            </p>
          </div>
          
          <div className="mt-12 group cursor-pointer inline-flex items-center gap-2">
            <span className="text-primary font-black uppercase text-sm tracking-widest border-b-2 border-primary pb-1 group-hover:border-transparent transition-all">Find Out More</span>
            <ChevronDown className="w-5 h-5 text-primary group-hover:translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Oval Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-20">
          <div className="relative aspect-video md:aspect-[4/5] overflow-hidden rounded-[100px_40px_100px_40px] shadow-xl hover:scale-105 transition-transform duration-500">
            <img src="/images/ALUMIDE-1.webp" alt="3D Printed Part" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative aspect-video md:aspect-[4/6] overflow-hidden rounded-[40px_100px_40px_100px] shadow-2xl hover:scale-105 transition-transform duration-500 md:-translate-y-12">
            <img src="/images/METAL-URETIM.png" alt="Metal 3D Printing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative aspect-video md:aspect-[4/5] overflow-hidden rounded-[100px_40px_100px_40px] shadow-xl hover:scale-105 transition-transform duration-500">
            <img src="/images/DAHA-HAFIF-PARCALAR.png" alt="Lightweight Parts" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
