import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function LogoCloud() {
  const { t } = useLanguage();
  const logos = [
    "/images/1200px-safran_-_logo_2016.webp",
    // Adding placeholders or other logos if I had them, but I'll use this one multiple times for demo
    "/images/1200px-safran_-_logo_2016.webp",
    "/images/1200px-safran_-_logo_2016.webp",
    "/images/1200px-safran_-_logo_2016.webp",
    "/images/1200px-safran_-_logo_2016.webp",
  ];

  return (
    <section className="bg-white py-12 border-b border-black/5">
      <div className="container mx-auto px-4 md:px-10">
        <p className="text-[10px] font-heading tracking-[0.4em] text-black/30 uppercase text-center mb-10">
          {t({
            EN: "THEY USE OUR INDUSTRIAL 3D PRINTERS",
            TR: "ENDÜSTRİYEL 3D YAZICILARIMIZI KULLANIYORLAR"
          })}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, i) => (
            <div key={i} className="h-8 md:h-12 w-32 md:w-40 relative">
              <Image src={logo} alt="Partner Logo" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
