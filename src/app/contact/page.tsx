"use client";

import React from "react";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <main className="pt-20">
        {/* Cinematic Header section Haus */}
        <section className="bg-[#1a1a1a] py-32 md:py-48 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F26522]/40 via-transparent to-transparent blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F26522]/10 rounded-full blur-[120px] -mr-40 -mb-40"></div>
          </div>

          {/* Technical Data Overlay (To fill right-side space) Haus */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:flex flex-col justify-center gap-12 pr-24 select-none opacity-60 hover:opacity-100 transition-opacity duration-1000 z-10">
             {[
               { label: { EN: "GLOBAL REACH", TR: "KÜRESEL ERİŞİM" }, val: { EN: "24/7", TR: "7/24" } },
               { label: { EN: "AVG RESPONSE", TR: "ORT. YANIT SÜRESİ" }, val: { EN: "< 12 HR", TR: "< 12 SA" } },
               { label: { EN: "ENGINEERS", TR: "MÜHENDİS DESTEĞİ" }, val: { EN: "ACTIVE", TR: "AKTİF" } },
               { label: { EN: "PROTOCOL", TR: "GİZLİLİK PROTOKOLÜ" }, val: { EN: "SECURE", TR: "GÜVENLİ" } }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-end border-r-2 border-[#F26522]/60 pr-8">
                 <span className="text-[10px] font-black tracking-[0.5em] text-[#F26522] mb-1">{t(stat.label)}</span>
                 <span className="text-5xl font-black tracking-tighter text-white/70">{t(stat.val)}</span>
               </div>
             ))}
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase font-black tracking-[0.4em] text-white/40 mb-8">
              <Link href="/" className="hover:text-white transition-colors">{t({EN: "Home", TR: "Anasayfa"})}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t({EN: "Contact", TR: "İletişim"})}</span>
            </div>
            <h1 className="text-6xl md:text-[130px] font-black mb-8 uppercase tracking-tighter leading-[0.8] text-white">
               {t({ EN: "Global", TR: "Bize" })} <br />
               <span className="text-[#F26522]">{t({ EN: "Support", TR: "Ulaşın" })}</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-xl md:text-2xl font-light leading-relaxed mb-16">
              {t({
                EN: "Direct access to our engineering command center. For inquiries, quotes, or technical deep-dives.",
                TR: "Mühendislik komuta merkezimize doğrudan erişim. Sorularınız, fiyat teklifleri veya teknik analizler için."
              })}
            </p>
            <div className="w-48 h-2 bg-gradient-to-r from-[#F26522] to-transparent mx-auto md:mx-0"></div>
          </div>
        </section>

        {/* Contact Details & Form Haus */}
        <section className="py-32 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Contact Info Haus */}
              <div className="space-y-12">
                <div>
                  <span className="text-[#F26522] font-black tracking-[0.4em] text-[10px] mb-4 block uppercase leading-none">{t({ EN: "DIRECT ACCESS", TR: "DOĞRUDAN ERİŞİM" })}</span>
                  <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] dark:text-white uppercase tracking-tighter leading-none">{t({ EN: "Get in Touch", TR: "Bize Ulaşın" })}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-10">
                      <div className="flex flex-col gap-3 group">
                         <div className="flex items-center gap-2 text-[#F26522] font-black text-[10px] uppercase tracking-widest">
                            <Phone className="w-4 h-4" />
                            <span>{t({ EN: "Phone", TR: "Telefon" })}</span>
                         </div>
                         <p className="text-2xl font-black text-[#1a1a1a] dark:text-white transition-colors tracking-tighter">(+90) 212 465 68 05</p>
                      </div>
                      <div className="flex flex-col gap-3 group">
                         <div className="flex items-center gap-2 text-[#F26522] font-black text-[10px] uppercase tracking-widest">
                            <Mail className="w-4 h-4" />
                            <span>{t({ EN: "Email", TR: "E-Posta" })}</span>
                         </div>
                         <div className="space-y-1">
                            <p className="text-lg font-bold text-[#1a1a1a] dark:text-white/80">erkan.ates@layerstech.co.uk</p>
                            <p className="text-lg font-bold text-[#1a1a1a] dark:text-white/80">sales@layerstech.co.uk</p>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-10">
                      <div className="flex flex-col gap-3 group">
                         <div className="flex items-center gap-2 text-[#F26522] font-black text-[10px] uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            <span>{t({ EN: "Address", TR: "Adres" })}</span>
                         </div>
                         <p className="text-[15px] text-black/60 dark:text-white/40 leading-relaxed font-light">
                            Bahçelievler Mahallesi Fevzi Çakmak 2 Caddesi No:1ANT <br />
                            (Güzelşehir Site Giriş Yanı Bağımsız Bölüm 1 ) <br />
                            Büyükçekmece/İSTANBUL
                         </p>
                      </div>
                      <div className="flex flex-col gap-3 group">
                         <div className="flex items-center gap-2 text-[#F26522] font-black text-[10px] uppercase tracking-widest">
                            <Clock className="w-4 h-4" />
                            <span>{t({ EN: "Hours", TR: "Çalışma Saatleri" })}</span>
                         </div>
                         <div className="text-[15px] text-black/60 dark:text-white/40 leading-relaxed font-light">
                            <p><strong className="text-[#1a1a1a] dark:text-white/80 font-bold">{t({ EN: "Assistance:", TR: "Destek:" })}</strong> {t({ EN: "Mon - Sat, 9am - 8pm", TR: "Pzt - Cmt, 09:00 - 20:00" })}</p>
                            <p><strong className="text-[#1a1a1a] dark:text-white/80 font-bold">{t({ EN: "Sales:", TR: "Satış:" })}</strong> {t({ EN: "Mon - Sat, 9am - 6pm", TR: "Pzt - Cmt, 09:00 - 18:00" })}</p>
                            <p className="italic opacity-60">({t({ EN: "Sunday Closed", TR: "Pazar Kapalı" })})</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Embed Map Haus */}
                <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group">
                   <iframe src="https://maps.google.com/maps?q=3D+DESIGN+TECHNOLOGIES+LTD,+Büyükçekmece,+İstanbul&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative z-10"></iframe>
                   <div className="absolute inset-0 bg-[#F26522]/5 mix-blend-overlay z-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>

              {/* Secure Direct Contact Block (No Inputs) Haus */}
              <div className="bg-[#1a1a1a] p-12 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/10 rounded-full -mr-24 -mt-24 blur-[80px] pointer-events-none group-hover:bg-[#F26522]/20 transition-colors duration-1000"></div>
                 
                 <div className="relative z-10 mb-12">
                   <span className="text-[#F26522] font-black tracking-[0.4em] text-[10px] mb-4 block uppercase leading-none">{t({ EN: "SECURE PROTOCOL", TR: "GÜVENLİ PROTOKOL" })}</span>
                   <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">{t({ EN: "Direct Communication", TR: "Doğrudan İletişim" })}</h3>
                   <p className="text-white/50 text-lg font-light leading-relaxed">
                     {t({ 
                       EN: "To ensure the highest level of security and accurate technical routing, we utilize direct executive channels. Please initiate requests directly through our verified digital mailrooms.", 
                       TR: "En yüksek düzeyde güvenlik ve doğru teknik yönlendirmeyi sağlamak için dışa açık web formları kullanmıyoruz. Lütfen taleplerinizi doğrudan doğrulanmış kanallarımız üzerinden başlatın." 
                     })}
                   </p>
                 </div>

                 <div className="relative z-10 space-y-6">
                    <a href="mailto:sales@layerstech.co.uk" className="group/link w-full bg-white/5 border border-white/10 hover:border-[#F26522]/50 p-8 rounded-[30px] flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
                       <div className="flex flex-col gap-2">
                         <span className="text-white font-black text-xs tracking-widest uppercase">{t({ EN: "Sales & Quotes", TR: "Satış ve Teklifler" })}</span>
                         <span className="text-white/40 text-sm font-light">sales@layerstech.co.uk</span>
                       </div>
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-[#F26522] transition-colors shadow-lg">
                          <Send className="w-5 h-5 text-white" />
                       </div>
                    </a>

                    <a href="mailto:erkan.ates@layerstech.co.uk" className="group/link w-full bg-white/5 border border-white/10 hover:border-[#F26522]/50 p-8 rounded-[30px] flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
                       <div className="flex flex-col gap-2">
                         <span className="text-white font-black text-xs tracking-widest uppercase">{t({ EN: "Engineering & Tech", TR: "Mühendislik ve Teknik" })}</span>
                         <span className="text-white/40 text-sm font-light">erkan.ates@layerstech.co.uk</span>
                       </div>
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-[#F26522] transition-colors shadow-lg">
                          <Cpu className="w-5 h-5 text-white" />
                       </div>
                    </a>
                 </div>

                 <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_10px_#10b981]"></div>
                    <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">{t({ EN: "Channels active & monitored", TR: "Kanallar aktif ve izleniyor" })}</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
