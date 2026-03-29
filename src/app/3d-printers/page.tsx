import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PrintersPage() {
  const printers = [
    {
      name: "S300X",
      type: "LIQ21 | LIQ11",
      description: "Industrial 3D printer specialized for silicone and liquid materials. High precision for medical and functional prototypes.",
      image: "/images/all-printer-s300xliq.webp",
      specs: ["Dual Extrusion", "Silicone Ready", "Production Speed"]
    },
    {
      name: "S300X",
      type: "FIL11 | FIL11",
      description: "Industrial 3D printer for high-performance thermoplastics and engineering filaments.",
      image: "/images/all-printer-s300xliq.webp",
      specs: ["PBT/PA/PEI", "Industrial Grade", "Modular Heads"]
    },
    {
      name: "S600D",
      type: "MODULAR OPEN TECH",
      description: "The ultimate research and production platform. Modular toolheads for paste, filament, and liquids.",
      image: "/images/freedom-of-materials_2.webp",
      specs: ["Interchangeable Tools", "Open System", "Infinite Materials"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <header className="mb-20">
          <span className="text-primary font-heading text-xs tracking-widest uppercase">3D PRINTERS</span>
          <h1 className="mt-6 text-6xl md:text-8xl font-heading text-black uppercase leading-tight">
            Our Industrial <br />
            ecosystem.
          </h1>
          <p className="mt-8 text-xl font-sans font-light text-black/60 max-w-2xl">
            Modular, precise, and material-open. Our printers are designed to bridge 
            the gap between R&D and production.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printers.map((printer, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[30px] overflow-hidden bg-black/5 p-8 flex items-center justify-center">
                <Image 
                  src={printer.image} 
                  alt={printer.name} 
                  fill 
                  className="object-contain group-hover:scale-105 transition-all duration-700 p-8" 
                />
              </div>
              <div className="mt-8">
                <span className="text-primary font-heading text-[10px] tracking-[0.4em] uppercase">{printer.type}</span>
                <h3 className="mt-2 text-4xl font-heading text-black uppercase">{printer.name}</h3>
                <p className="mt-4 text-black/60 font-sans font-light text-sm line-clamp-2">{printer.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {printer.specs.map(spec => (
                    <li key={spec} className="px-3 py-1 bg-black/5 rounded-full text-[10px] uppercase tracking-widest text-black/40 font-heading">
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="outline" className="rounded-full border-black/10 text-black font-heading text-xs tracking-widest group-hover:bg-black group-hover:text-white transition-all">
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
