import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "SLS Technology",
    description: "Selective Laser Sintering for high-durability polyamide parts.",
    icon: "/images/SLS2.webp",
  },
  {
    title: "DMLS Technology",
    description: "Direct Metal Laser Sintering for high-performance metal components.",
    icon: "/images/DMLS2-4.webp",
  },
  {
    title: "3D Modeling",
    description: "Expert 3D modeling and engineering services for rapid development.",
    icon: "/images/3d-baski-hizmeti-1-1.webp",
  },
  {
    title: "Additive Manufacturing",
    description: "Industrial scale additive manufacturing solutions for batch production.",
    icon: "/images/eklemeli-imalat-1.webp",
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl font-black text-heading mb-4">What We Do</h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-[#777777] text-sm leading-relaxed">
              We provide state-of-the-art 3D printing and modeling services using the latest technologies and high-quality materials to bring your most complex industrial designs to life.
            </p>
          </div>
          <div className="flex-shrink-0 group cursor-pointer inline-flex items-center gap-2 pb-2 border-b-2 border-primary">
            <span className="text-xs font-black tracking-widest text-heading group-hover:text-primary transition-colors">VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-start group">
              <div className="w-16 h-16 mb-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-black tracking-widest text-heading/50 hover:text-primary cursor-pointer transition-colors">
                <span>READ MORE</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
