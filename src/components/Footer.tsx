"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, Users, Search, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = {
  products: [
    { name: { EN: "Industrial Silicone", TR: "Endüstriyel Silikon" }, href: "/3d-printing" },
    { name: { EN: "Quad-Head Tech", TR: "Dört Kafalı Teknoloji" }, href: "/3d-printing" },
    { name: { EN: "Multi-Material", TR: "Çoklu Malzeme" }, href: "/3d-printing" },
    { name: { EN: "Thermal Curing", TR: "Termal Kürleme" }, href: "/3d-printing" },
  ],
  solutions: [
    { name: { EN: "Medical & Healthcare", TR: "Medikal & Sağlık" }, href: "/industries#medical" },
    { name: { EN: "Aerospace & Defense", TR: "Havacılık & Savunma" }, href: "/industries#aerospace" },
    { name: { EN: "Automotive & Mobility", TR: "Otomotiv & Mobilite" }, href: "/industries#automotive" },
    { name: { EN: "Industrial & Robotics", TR: "Endüstri & Robotik" }, href: "/industries#robotics" },
  ],
  company: [
    { name: { EN: "About Us", TR: "Hakkımızda" }, href: "/about-us" },
    { name: { EN: "Products", TR: "Ürünler" }, href: "/3d-printers" },
    { name: { EN: "Materials", TR: "Malzemeler" }, href: "/materials" },
    { name: { EN: "Contact", TR: "İletişim" }, href: "/contact" },
  ]
};

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Contact */}
          <div className="space-y-8">
            <div className="flex items-end gap-6 mb-8">
              <Link href="/">
                <img 
                  src="/images/Saydam zeminde orijinal_V4.webp" 
                  alt="LayersTech Logo" 
                  className="h-10 w-auto" 
                />
              </Link>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col justify-end h-12 pb-1">
                <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase mb-2">Powered by</span>
                <img src="/images/3DDT_logo2.webp" alt="3DDT Logo" className="h-6 w-[auto] object-contain" />
              </div>
            </div>
            
            <div className="space-y-6">

               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <MapPin className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-white/40 mb-1 uppercase">{t({ EN: "Turkey Office", TR: "Türkiye Ofisi" })}</p>
                    <p className="text-[14px] text-white/70 leading-relaxed group-hover:text-white transition-colors">
                      Bahçelievler Mahallesi Fevzi Çakmak 2 Caddesi No:1ANT <br />
                      (Güzelşehir Site Giriş Yanı Bağımsız Bölüm 1 ) <br />
                      Büyükçekmece/İSTANBUL
                    </p>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <Phone className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <a href="tel:+902124656805" className="text-[14px] text-white/70 group-hover:text-white transition-colors">
                    +90 (212) 465 68 05
                  </a>
               </div>
               
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <Mail className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <a href="mailto:info@3ddt.com.tr" className="text-[14px] text-white/70 group-hover:text-white transition-colors">
                    info@3ddt.com.tr
                  </a>
               </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
               {[Globe, Share2, Users, Search].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">{t({ EN: "Technologies", TR: "Teknolojiler" })}</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">{t({ EN: "Industries", TR: "Sektörler" })}</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">{t({ EN: "Company", TR: "Şirket" })}</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[13px] text-white/30">
            © {currentYear} 3 Dimension Design Technologies / 3DDT {t({ EN: "All rights reserved.", TR: "Tüm hakları saklıdır." })}
          </p>
          
          <div className="flex items-center gap-8 text-[12px] font-bold tracking-widest text-white/30 uppercase">
            <Link href="/contact" className="hover:text-white transition-colors">{t({ EN: "Imprint", TR: "Künye" })}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t({ EN: "Privacy", TR: "Gizlilik" })}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t({ EN: "Legal Notice", TR: "Yasal Uyarı" })}</Link>
          </div>
          
          <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">{t({ EN: "Part of", TR: "Bir parçasıdır" })}</span>
            <div className="h-6 w-px bg-white/20 mx-2" />
            <span className="text-[14px] font-bold text-white tracking-widest uppercase">3 Dimension Design Technologies / 3DDT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
