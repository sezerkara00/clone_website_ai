"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "3D PRINTING", href: "/3d-printing" },
  { name: "MATERIALS", href: "/materials" },
  { name: "INDUSTRIES", href: "/industries" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparency Rule: Only transparent on Home at the very top.
  // Solid Dark Charcoal everywhere else for visibility.
  const isTransparent = isHome && !scrolled;

  return (
    <>
      {/* Desktop Navbar (Top) Haus */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isTransparent 
            ? "bg-transparent py-8" 
            : "bg-[#333940] py-4 shadow-lg"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img 
              src="/images/Saydam-zeminde-orijinal-2.png" 
              alt="LayersTech Logo" 
              className="h-10" 
            />
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "text-xs font-black tracking-[0.15em] transition-colors",
                    isActive ? "text-[#00c0f3]" : "text-white hover:text-[#00c0f3]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <a 
              href="tel:+447776449775"
              className="flex items-center gap-2 font-black text-white text-xs tracking-widest ml-4"
            >
              <Phone className="w-4 h-4 text-[#00c0f3]" />
              <span>(+44) 7776449775</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Bottom) Haus */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#2d2f31] border-t border-white/10 h-16 px-4">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <img 
              src="/images/Saydam-zeminde-orijinal-2.png" 
              alt="LayersTech Logo" 
              className="h-8" 
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <a href="tel:+447776449775" className="text-white flex items-center gap-2 text-[10px] font-black tracking-tighter">
              <Phone className="w-3 h-3 text-[#00c0f3]" />
              <span className="hidden xs:inline">(+44) 7776449775</span>
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-[#00c0f3] rounded text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Haus */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#2d2f31] flex flex-col items-center justify-center md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-black tracking-widest transition-colors",
                  pathname === link.href ? "text-[#00c0f3]" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
