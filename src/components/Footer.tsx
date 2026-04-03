"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, Users, Search, ChevronRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Industrial Silicone", href: "/3d-printing" },
    { name: "Quad-Head Tech", href: "/3d-printing" },
    { name: "Multi-Material", href: "/3d-printing" },
    { name: "Thermal Curing", href: "/3d-printing" },
  ],
  solutions: [
    { name: "Medical & Healthcare", href: "/industries#medical" },
    { name: "Aerospace & Defense", href: "/industries#aerospace" },
    { name: "Automotive & Mobility", href: "/industries#automotive" },
    { name: "Industrial & Robotics", href: "/industries#robotics" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/3d-printers" },
    { name: "Materials", href: "/materials" },
    { name: "Contact", href: "/contact" },
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Contact */}
          <div className="space-y-8">
            <Link href="/">
              <img 
                src="https://layerstech.co.uk/wp-content/uploads/2026/02/s_logo-scaled.png" 
                alt="LayersTech Logo" 
                className="h-10 w-auto mb-8" 
              />
            </Link>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <MapPin className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-white/40 mb-1 uppercase">UK Office</p>
                    <p className="text-[14px] text-white/70 leading-relaxed group-hover:text-white transition-colors">
                      136 Richmond Hill, Flat 4, 3 The Terrace, <br />
                      TW10 6RN, Richmond, United Kingdom
                    </p>
                  </div>
               </div>

               <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <MapPin className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-white/40 mb-1 uppercase">Turkey Office</p>
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
                  <a href="tel:+447776449775" className="text-[14px] text-white/70 group-hover:text-white transition-colors">
                    +44 7776 449775
                  </a>
               </div>
               
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#F26522]/20 transition-colors">
                     <Mail className="w-5 h-5 text-[#F26522]" />
                  </div>
                  <a href="mailto:erkan.ates@layerstech.co.uk" className="text-[14px] text-white/70 group-hover:text-white transition-colors">
                    erkan.ates@layerstech.co.uk
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
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">Technologies</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-10 text-[#F26522] uppercase">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F26522]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[13px] text-white/30">
            © {currentYear} LAYERSTECH GMBH & CO. KG. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-[12px] font-bold tracking-widest text-white/30 uppercase">
            <Link href="/contact" className="hover:text-white transition-colors">Imprint</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Legal Notice</Link>
          </div>
          
          <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Part of</span>
            <div className="h-6 w-px bg-white/20 mx-2" />
            <span className="text-[14px] font-bold text-white tracking-widest uppercase">LayersTech Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
