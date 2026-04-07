import React from "react";
import Link from "next/link";
import { ArrowRight, Settings, Droplet, Headset, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const highlights = [
  {
    title: { EN: "20+ Years Experience", TR: "20+ Yıl Deneyim" },
    description: { 
      EN: "Our long-standing and growing client base, built over more than 20 years, is a testament to the trust we have earned.",
      TR: "20 yılı aşkın süredir inşa edilen ve sürekli büyüyen müşteri portföyümüz, kazandığımız güvenin en büyük kanıtıdır."
    },
    icon: Settings,
  },
  {
    title: { EN: "20,000+ Clients", TR: "20.000+ Müşteri" },
    description: {
      EN: "Successfully served thousands of companies across aerospace, defense, medical, and automotive sectors.",
      TR: "Havacılık, savunma, medikal ve otomotiv sektörlerinde binlerce şirkete başarıyla hizmet verildi."
    },
    icon: Droplet,
  },
  {
    title: { EN: "Global Presence", TR: "Küresel Varoluş" },
    description: {
      EN: "Direct operations in London, UK and Istanbul, Turkey to serve global industrial markets.",
      TR: "Küresel endüstriyel pazarlara hizmet vermek üzere İngiltere (Londra) ve Türkiye (İstanbul) operasyonları."
    },
    icon: Headset,
  }
];

export default function SmartSolutions() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#F8F9FA] dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-[#F26522] font-black tracking-[0.4em] text-[10px] mb-4 block uppercase">{t({ EN: "PIONEERS IN 3D PRINTING", TR: "3B BASKIDA ÖNCÜ" })}</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 uppercase text-[#1a1a1a] dark:text-white tracking-tighter">
            {t({ EN: "Setting Standards in", TR: "Standartları Belirliyoruz:" })} <br />
            <span className="text-black/20 dark:text-white/30">{t({ EN: "Industrial Prototyping", TR: "Endüstriyel Prototipleme" })}</span>
          </h2>
          <p className="text-black/60 dark:text-white/50 text-lg font-light leading-relaxed">
            {t({
              EN: "Thanks to our extensive 3D printing services, laser sintering technologies, and software systems, we have provided rapid prototyping services to countless companies across diversos industrial sectors.",
              TR: "Kapsamlı 3D baskı hizmetlerimiz, lazer sinterleme teknolojilerimiz ve yazılım sistemlerimiz sayesinde sayısız endüstriyel şirkete hızlı prototipleme hizmetleri sağladık."
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-center text-center p-10 rounded-[40px] bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 hover:shadow-[0_40px_80px_-20px_rgba(242,101,34,0.1)] transition-all duration-700 overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#F26522]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-10 h-10 text-[#F26522]" />
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-[#1a1a1a] dark:text-white uppercase tracking-tighter">{t(item.title)}</h3>
              <p className="text-black/50 dark:text-white/40 text-[14px] leading-relaxed mb-8 max-w-sm font-light">
                {t(item.description)}
              </p>
              
              <Link href="/contact" className="mt-auto flex items-center gap-3 text-[11px] font-black tracking-widest text-[#F26522] group-hover:translate-x-2 transition-transform duration-300 cursor-pointer uppercase">
                <span>{t({ EN: "READ MORE", TR: "DAHA FAZLA" })}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-32 p-12 md:p-24 rounded-[60px] bg-gradient-to-br from-[#F26522] to-[#D35400] relative overflow-hidden group shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
            <div>
              <h3 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none text-white">
                {t({ EN: "Ready for Series Production?", TR: "Seri Üretime Hazır Mısınız?" })}
              </h3>
              <p className="text-white/90 text-lg mb-10 max-w-xl font-light leading-relaxed">
                {t({ 
                  EN: "We accompany you on your way to industrial 3D printing. Discover the possibilities for your industry.", 
                  TR: "Endüstriyel 3D baskı yolculuğunuzda size eşlik ediyoruz. Sektörünüz için sunduğumuz olanakları keşfedin." 
                })}
              </p>
              <button className="bg-white text-[#1a1a1a] px-10 py-5 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 flex items-center gap-3 uppercase shadow-xl hover:scale-105">
                <BookOpen className="w-5 h-5" />
                {t({ EN: "EXPLORE CASE STUDIES", TR: "BAŞARI HİKAYELERİNİ İNCELE" })}
              </button>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute -inset-10 bg-white/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-[3000ms]"></div>
               <img 
                 src="/images/series-production-parts.webp" 
                 alt="Series Production Parts" 
                 className="relative z-10 rounded-3xl shadow-2xl transform transition-transform duration-[3000ms] group-hover:scale-105"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
