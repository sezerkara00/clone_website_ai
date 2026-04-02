"use client";

import React from "react";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-[#1a1a1a] py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F26522] via-transparent to-transparent blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
              <Link href="/" className="hover:text-white transition-colors">{t({EN: "Home", TR: "Anasayfa"})}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t({EN: "Contact Us", TR: "İletişim"})}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">{t({ EN: "How Can We Help You?", TR: "Nasıl Yardımcı Olabiliriz?" })}</h1>
            <p className="text-white/50 max-w-2xl text-xl font-light leading-relaxed mb-12">
              {t({
                EN: "Reach out to our engineering and sales teams for inquiries, quotes, or technical consultations.",
                TR: "Sorularınız, fiyat teklifleri veya teknik danışmanlık için mühendislik ve satış ekiplerimize ulaşın."
              })}
            </p>
            <div className="w-32 h-1.5 bg-[#F26522] mx-auto md:mx-0"></div>
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
                         <p className="text-2xl font-black text-[#1a1a1a] dark:text-white transition-colors tracking-tighter">(+44) 7776 449775</p>
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
                            136 Richmond Hill, Flat 4, 2 The Terrace, <br />
                            TW10 6RN, United Kingdom.
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
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.94827056230616!2d-0.3015509630094056!3d51.45500003058444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c6d70d49b2b%3A0xc0f3e69a0a0a0a0a!2sRichmond%20Hill%2C%20Richmond!5e0!3m2!1sen!2suk!4v1711728000000!5m2!1sen!2suk" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative z-10"></iframe>
                   <div className="absolute inset-0 bg-[#F26522]/5 mix-blend-overlay z-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>

              {/* Contact Form Haus */}
              <div className="bg-[#fcfcfc] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 p-12 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                 <h3 className="text-3xl font-black text-[#1a1a1a] dark:text-white mb-10 uppercase tracking-tighter">{t({ EN: "Message Us", TR: "Bize Yazın" })}</h3>
                 <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-black uppercase text-[#1a1a1a]/40 dark:text-white/30 tracking-[0.2em] ml-2">{t({ EN: "Full Name", TR: "Ad Soyad" })}</label>
                          <input type="text" className="bg-white dark:bg-white/[0.03] border-2 border-transparent border-b-black/10 dark:border-b-white/10 focus:border-[#F26522] dark:focus:border-[#F26522] px-6 py-4 text-sm focus:outline-none transition-all placeholder:text-black/20 dark:placeholder:text-white/10 rounded-2xl" placeholder={t({ EN: "John Doe", TR: "Örn: Ahmet Yılmaz" })} />
                       </div>
                       <div className="flex flex-col gap-3">
                          <label className="text-[10px] font-black uppercase text-[#1a1a1a]/40 dark:text-white/30 tracking-[0.2em] ml-2">{t({ EN: "Email Address", TR: "E-Posta Adresi" })}</label>
                          <input type="email" className="bg-white dark:bg-white/[0.03] border-2 border-transparent border-b-black/10 dark:border-b-white/10 focus:border-[#F26522] dark:focus:border-[#F26522] px-6 py-4 text-sm focus:outline-none transition-all placeholder:text-black/20 dark:placeholder:text-white/10 rounded-2xl" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase text-[#1a1a1a]/40 dark:text-white/30 tracking-[0.2em] ml-2">{t({ EN: "Subject", TR: "Konu" })}</label>
                       <input type="text" className="bg-white dark:bg-white/[0.03] border-2 border-transparent border-b-black/10 dark:border-b-white/10 focus:border-[#F26522] dark:focus:border-[#F26522] px-6 py-4 text-sm focus:outline-none transition-all placeholder:text-black/20 dark:placeholder:text-white/10 rounded-2xl" placeholder={t({ EN: "Technical Inquiry", TR: "Örn: Teknik Danışmanlık" })} />
                    </div>
                    <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase text-[#1a1a1a]/40 dark:text-white/30 tracking-[0.2em] ml-2">{t({ EN: "Message", TR: "Mesajınız" })}</label>
                       <textarea rows={6} className="bg-white dark:bg-white/[0.03] border-2 border-transparent border-b-black/10 dark:border-b-white/10 focus:border-[#F26522] dark:focus:border-[#F26522] px-6 py-4 text-sm focus:outline-none transition-all placeholder:text-black/20 dark:placeholder:text-white/10 rounded-2xl resize-none" placeholder={t({ EN: "How can we help you?", TR: "Size nasıl yardımcı olabiliriz?" })}></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-br from-[#F26522] to-[#D35400] py-6 rounded-[20px] flex items-center justify-center gap-4 text-white font-black tracking-[0.2em] text-[11px] shadow-2xl shadow-[#F26522]/20 hover:scale-[1.03] active:scale-95 transition-all uppercase">
                       <Send className="w-4 h-4" />
                       {t({ EN: "SUBMIT ENQUIRY", TR: "TALEBİ GÖNDER" })}
                    </button>
                    <p className="text-[10px] text-center text-black/40 dark:text-white/30 italic mt-6 font-light">
                       {t({ EN: "We typically respond within 12 - 24 business hours.", TR: "Genellikle 12 - 24 iş saati içinde dönüş yapıyoruz." })}
                    </p>
                 </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
