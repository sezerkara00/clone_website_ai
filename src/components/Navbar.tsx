"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "INDUSTRIES", href: "/industries" },
  { name: "TECHNOLOGIES", href: "/3d-printing" },
  { name: "PRODUCTS", href: "/3d-printers" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTransparent 
            ? "bg-transparent py-6" 
            : "bg-[#1a1a1a] py-4 shadow-xl border-b border-white/5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img 
              src="https://layerstech.co.uk/wp-content/uploads/2026/02/s_logo-scaled.png" 
              alt="LayersTech Logo" 
              className="h-8 md:h-10 w-auto" 
            />
          </Link>
          
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "text-[12px] font-bold tracking-[0.2em] transition-all duration-300 hover:text-[#F26522]",
                    isActive ? "text-[#F26522]" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-4 relative z-[60]" key={language}>
              <div className="flex gap-2">
                <button 
                  type="button"
                  onClick={() => {
                    console.log("Setting to EN");
                    setLanguage("EN");
                  }}
                  className={cn(
                    "text-[10px] font-bold py-1 px-2 rounded transition-all cursor-pointer",
                    language === "EN" ? "bg-[#F26522] text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  EN
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    console.log("Setting to TR");
                    setLanguage("TR");
                  }}
                  className={cn(
                    "text-[10px] font-bold py-1 px-2 rounded transition-all cursor-pointer",
                    language === "TR" ? "bg-[#F26522] text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  TR
                </button>
              </div>
              <a 
                href="tel:+447776449775"
                className="flex items-center gap-2 text-white text-[12px] font-bold hover:text-[#F26522] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F26522]" />
                <span>(+44) 7776 449775</span>
              </a>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col p-10 pt-24 xl:hidden animate-in slide-in-from-top duration-500">
          <div className="flex flex-col gap-6 relative z-50">
            <div className="flex gap-4 border-b border-white/10 pb-6 mb-2 pointer-events-auto">
               <button 
                 type="button"
                 onClick={() => {
                   console.log("Setting to EN");
                   setLanguage("EN");
                 }} 
                 className={cn("text-lg font-bold cursor-pointer", language === "EN" ? "text-[#F26522]" : "text-white/30")}
               >
                 EN
               </button>
               <button 
                 type="button"
                 onClick={() => {
                   console.log("Setting to TR");
                   setLanguage("TR");
                 }} 
                 className={cn("text-lg font-bold cursor-pointer", language === "TR" ? "text-[#F26522]" : "text-white/30")}
               >
                 TR
               </button>
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-bold tracking-widest transition-colors border-b border-white/5 pb-4",
                  pathname === link.href ? "text-[#F26522]" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+447776449775" className="flex items-center gap-3 text-white text-lg font-bold mt-4 py-4">
              <Phone className="w-6 h-6 text-[#F26522]" />
              <span>(+44) 7776 449775</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
