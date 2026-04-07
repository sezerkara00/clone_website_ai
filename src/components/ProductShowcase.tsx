import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Alumide Part", image: "/images/ALUMIDE-1.webp", category: "SLS Technology" },
  { name: "Metal Production", image: "/images/METAL-URETIM.webp", category: "DMLS Technology" },
  { name: "PA1101 High Performance", image: "/images/PA1101.webp", category: "Materials" },
  { name: "PA3200 Glass Filled", image: "/images/PA3200.webp", category: "Materials" },
  { name: "Lightweight Parts", image: "/images/DAHA-HAFIF-PARCALAR.webp", category: "Sintering" },
  { name: "Flexible TPU", image: "/images/TPU.webp", category: "3D Printing" },
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-heading mb-4">Sample Production</h2>
        <p className="text-[#777777] max-w-2xl mx-auto mb-16 text-sm">
          A selection of our high-precision 3D printed parts across various industries and materials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-left">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-heading/60 hover:text-primary cursor-pointer transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 pointer-events-none transition-all"></div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 primary-gradient px-8 py-3 rounded text-white text-xs font-bold tracking-widest hover:shadow-lg transition-all"
          >
            SEE ALL PORTFOLIO
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
