import React from "react";
import Image from "next/image";

export function Industries() {
  const industries = [
    { title: "R&D", image: "/images/tech-metier.webp" },
    { title: "Healthcare", image: "/images/3d-silicone-printing--use-case--hp.webp" },
    { title: "Design & Fashion", image: "/images/lynxter-detail-3dprinting-softrobot-silicone.webp" }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-heading text-xs tracking-widest uppercase">OUR MARKETS</span>
            <h2 className="mt-4 text-5xl md:text-6xl font-heading text-black uppercase leading-tight">
              One tech, <br />
              Endless applications.
            </h2>
          </div>
          <button className="font-heading text-xs tracking-[0.3em] text-black/50 border-b border-black/10 pb-2 hover:text-black hover:border-black transition-all">
            VIEW ALL INDUSTRIES
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden bg-black/5">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-heading text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
