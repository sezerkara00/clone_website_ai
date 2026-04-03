"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
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
            : "bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md py-4 shadow-xl border-b border-black/5 dark:border-white/5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img 
              src="https://layerstech.co.uk/wp-content/uploads/2026/02/s_logo-scaled.png" 
              alt="LayersTech Logo" 
              className={cn(
                "h-8 md:h-10 w-auto transition-all",
                !isTransparent && theme === 'light' ? "invert hue-rotate-180 saturate-150" : ""
              )} 
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
                    isActive ? "text-[#F26522]" : isTransparent ? "text-white/90" : "text-[#1a1a1a] dark:text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/20 pl-6 ml-4 relative z-[60]" key={language}>
              <div className="flex gap-2 mr-2">
                <button 
                  onClick={toggleTheme}
                  className={cn(
                    "p-2 rounded-full border transition-all",
                    isTransparent 
                      ? "bg-white/5 border-white/10 text-white/70 hover:text-[#F26522]" 
                      : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[#1a1a1a] dark:text-white/70 hover:text-[#F26522]"
                  )}
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#F26522]" />}
                </button>
              </div>
              <div className="flex gap-2">
                <button 
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={cn(
                    "text-[10px] font-bold py-1 px-2 rounded transition-all cursor-pointer",
                    language === "EN" 
                      ? "bg-[#F26522] text-white" 
                      : isTransparent ? "text-white/50 hover:text-white" : "text-[#1a1a1a]/50 hover:text-[#1a1a1a] dark:text-white/50 dark:hover:text-white"
                  )}
                >
                  EN
                </button>
                <button 
                  type="button"
                  onClick={() => setLanguage("TR")}
                  className={cn(
                    "text-[10px] font-bold py-1 px-2 rounded transition-all cursor-pointer",
                    language === "TR" 
                      ? "bg-[#F26522] text-white" 
                      : isTransparent ? "text-white/50 hover:text-white" : "text-[#1a1a1a]/50 hover:text-[#1a1a1a] dark:text-white/50 dark:hover:text-white"
                  )}
                >
                  TR
                </button>
              </div>
              <a 
                href="tel:+447776449775"
                className={cn(
                  "flex items-center gap-2 text-[12px] font-bold hover:text-[#F26522] transition-colors",
                  isTransparent ? "text-white" : "text-[#1a1a1a] dark:text-white"
                )}
              >
                <Phone className="w-4 h-4 text-[#F26522]" />
                <span>(+44) 7776 449775</span>
              </a>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "xl:hidden p-2 rounded-lg transition-colors",
              isTransparent ? "text-white hover:bg-white/10" : "text-[#1a1a1a] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-[#1a1a1a] flex flex-col p-10 pt-24 xl:hidden animate-in slide-in-from-right duration-500 transition-colors">
          <div className="flex flex-col gap-6 relative z-50">
            <div className="flex gap-4 border-b border-black/5 dark:border-white/10 pb-6 mb-2 pointer-events-auto">
               <button 
                 type="button"
                 onClick={() => setLanguage("EN")} 
                 className={cn("text-lg font-bold cursor-pointer", language === "EN" ? "text-[#F26522]" : "text-[#1a1a1a]/30 dark:text-white/30")}
               >
                 EN
               </button>
               <button 
                 type="button"
                 onClick={() => setLanguage("TR")} 
                 className={cn("text-lg font-bold cursor-pointer", language === "TR" ? "text-[#F26522]" : "text-[#1a1a1a]/30 dark:text-white/30")}
               >
                 TR
               </button>
               <button 
                 onClick={toggleTheme}
                 className="ml-auto p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"
               >
                 {theme === 'light' ? <Moon className="w-5 h-5 text-[#1a1a1a]" /> : <Sun className="w-5 h-5 text-[#F26522]" />}
               </button>
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-black tracking-widest transition-colors border-b border-black/5 dark:border-white/5 pb-4 uppercase",
                  pathname === link.href ? "text-[#F26522]" : "text-[#1a1a1a] dark:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+447776449775" className={cn("flex items-center gap-3 text-lg font-bold mt-4 py-4", theme === 'light' ? "text-[#1a1a1a]" : "text-white")}>
              <Phone className="w-6 h-6 text-[#F26522]" />
              <span>(+44) 7776 449775</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
