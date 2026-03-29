import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, Users, Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-heading pt-20 pb-24 text-white/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="flex flex-col gap-8">
            <img src="/images/Saydam-zeminde-orijinal-2.png" alt="LayersTech" className="h-10 self-start" />
            <p className="text-xs leading-relaxed max-w-xs">
              LayersTech is a leading industrial 3D printing and modeling solutions provider, bringing precision and innovation to global industrial sectors.
            </p>
            <div className="flex items-center gap-4 text-white">
              <Globe className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Share2 className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Users className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Activity className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">Our Offices</h4>
            <div className="flex flex-col gap-4 text-[11px] font-bold">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-white mb-1">TURKEY - ISTANBUL</p>
                  <p className="font-medium text-white/60 uppercase">Cumhuriyet Mah. Yeniyol Sk. No: 12 Bomonti Business Center Şişli/İstanbul</p>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-white mb-1">UNITED KINGDOM</p>
                  <p className="font-medium text-white/60 uppercase">Suite 129, 2nd Floor, 8-10 Hill Street, Mayfair, London, W1J 5NQ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-[13px] font-medium">
              <a href="tel:+447776449775" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 7776449775</span>
              </a>
              <a href="tel:+902122340333" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+90 212 234 0333</span>
              </a>
              <a href="mailto:info@layerstech.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@layerstech.co.uk</span>
              </a>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">Contact Us</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none text-white" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none text-white" 
              />
              <textarea 
                placeholder="Message" 
                rows={3}
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none text-white resize-none" 
              />
              <button 
                type="submit" 
                className="primary-gradient py-2 rounded text-[10px] font-black uppercase tracking-widest text-white shadow-lg hover:shadow-primary/20 transition-all"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">
            © {new Date().getFullYear()} LAYERSTECH. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
