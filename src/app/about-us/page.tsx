"use client";

import React from "react";
import { ChevronRight, Target, Users, ShieldCheck, Cpu, Globe, Rocket, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 font-sans">
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-[#1a1a1a] py-32 md:py-48 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F26522]/40 via-transparent to-transparent blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F26522]/10 rounded-full blur-[120px] -mr-40 -mb-40"></div>
          </div>
          
          {/* Technical Data Overlay (To fill right-side space) Haus */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:flex flex-col justify-center gap-12 pr-24 select-none opacity-60 hover:opacity-100 transition-opacity duration-1000 z-10">
             {[
               { label: "PRECISION", val: "0.05 MM" },
               { label: "TOOLHEADS", val: "QUAD-HEAD" },
               { label: "RELIABILITY", val: "99.9%" },
               { label: "LOCATIONS", val: "GLOBAL" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-end border-r-2 border-[#F26522]/60 pr-8">
                 <span className="text-[10px] font-black tracking-[0.5em] text-[#F26522] mb-1">{stat.label}</span>
                 <span className="text-5xl font-black tracking-tighter text-white/70">{stat.val}</span>
               </div>
             ))}
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase font-black tracking-[0.4em] text-white/40 mb-8">
              <Link href="/" className="hover:text-white transition-colors">{t({EN: "Home", TR: "Anasayfa"})}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t({EN: "About Us", TR: "Hakkımızda"})}</span>
            </div>
            <h1 className="text-6xl md:text-[140px] font-black mb-8 uppercase tracking-tighter leading-[0.8] text-white">
               {t({ EN: "Our Story", TR: "Hikayemiz" })} <br />
               <span className="text-[#F26522]">& {t({ EN: "Mission", TR: "Misyon" })}</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-xl md:text-2xl font-light leading-relaxed mb-16">
              {t({
                EN: "Redefining industrial boundaries through advanced silicone additive manufacturing and multi-material precision engineering. We don't just print; we industrialize your innovation.",
                TR: "Gelişmiş silikon eklemeli imalat ve çok malzemeli hassas mühendislik yoluyla endüstriyel sınırları yeniden tanımlıyoruz. Sadece baskı yapmıyoruz; inovasyonunuzu endüstriyelleştiriyoruz."
              })}
            </p>
            <div className="w-48 h-2 bg-gradient-to-r from-[#F26522] to-transparent mx-auto md:mx-0"></div>
          </div>
        </section>

        {/* Core Identity Section Haus */}
        <section className="py-24 md:py-40 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
              <div className="space-y-12">
                <div>
                  <span className="text-[#F26522] font-black tracking-[0.3em] text-[11px] mb-6 block uppercase whitespace-nowrap border-l-4 border-[#F26522] pl-6 leading-none">{t({ EN: "LAYERS TECHNOLOGY ECOSYSTEM", TR: "LAYERS TEKNOLOJİ EKOSİSTEMİ" })}</span>
                  <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white mb-10 uppercase tracking-tighter leading-none">{t({ EN: "Innovating Beyond Limits", TR: "Sınırların Ötesinde İnovasyon" })}</h2>
                </div>
                
                <div className="space-y-8 text-black/70 dark:text-white/60 text-lg md:text-xl font-light leading-relaxed">
                  <p>
                    <strong className="text-[#F26522] font-black">LayersTech</strong> {t({ 
                      EN: "is a global engineering leader established to disrupt the traditional manufacturing paradigm. We specialize in the most complex sector of high-performance elastomeric production: multi-material liquid silicone injection printing.", 
                      TR: "geleneksel üretim paradigmasını sarsmak için kurulmuş küresel bir mühendislik lideridir. Yüksek performanslı elastomerik üretimin en karmaşık sektöründe uzmanlaşıyoruz: çok malzemeli sıvı silikon enjeksiyon baskı." 
                    })}
                  </p>
                  <p>
                    {t({
                      EN: "Our world-first quad-head technology allows for simultaneous deposition of structural, functional, and support materials, effectively eliminating the need for assembly and molding in specialized industrial sectors like aerospace, medical, and defense.",
                      TR: "Dünyanın ilk dört kafalı teknolojisi; yapısal, fonksiyonel ve destek malzemelerinin eşzamanlı olarak biriktirilmesine olanak tanıyor; havacılık, medikal ve savunma gibi özel endüstriyel sektörlerde montaj ve kalıplama ihtiyacını ortadan kaldırıyor."
                    })}
                  </p>
                  <p className="border-t border-black/5 dark:border-white/5 pt-10 font-medium text-[#1a1a1a] dark:text-white italic">
                    {t({
                      EN: "We transform blueprints into functional realities with clinical precision and repeatable industrial standards.",
                      TR: "Planları, klinik hassasiyet ve tekrarlanabilir endüstriyel standartlarla fonksiyonel gerçekliklere dönüştürüyoruz."
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                   <div className="flex flex-col gap-6 group">
                      <div className="w-20 h-20 rounded-3xl bg-[#F26522]/5 dark:bg-[#F26522]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F26522] transition-all duration-700">
                         <Rocket className="w-10 h-10 text-[#F26522] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-black text-[#1a1a1a] dark:text-white uppercase text-lg tracking-widest leading-none">{t({ EN: "Deep R&D", TR: "Derin Ar-Ge" })}</h4>
                      <p className="text-[14px] text-black/50 dark:text-white/40 leading-relaxed">{t({ EN: "Years of scientific material analysis ensures every part exceeds industry durability tests.", TR: "Yıllarca süren bilimsel malzeme analiziyle, her parçanın endüstriyel dayanıklılık testlerini aşmasını sağlıyoruz." })}</p>
                   </div>
                   <div className="flex flex-col gap-6 group">
                      <div className="w-20 h-20 rounded-3xl bg-[#F26522]/5 dark:bg-[#F26522]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F26522] transition-all duration-700">
                         <Globe className="w-10 h-10 text-[#F26522] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-black text-[#1a1a1a] dark:text-white uppercase text-lg tracking-widest leading-none">{t({ EN: "Global Operations", TR: "Küresel Operasyon" })}</h4>
                      <p className="text-[14px] text-black/50 dark:text-white/40 leading-relaxed">{t({ EN: "Supporting high-stakes projects across 20+ countries with localized engineering support.", TR: "20'den fazla ülkede yüksek riskli projeleri, yerelleştirilmiş mühendislik desteğiyle destekliyoruz." })}</p>
                   </div>
                </div>
              </div>

              <div className="relative group lg:mt-24">
                <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border-4 border-black/5 dark:border-white/10 group-hover:rotate-1 transition-all duration-1000">
                  <img src="/images/GALERI-scaled.jpg" alt="LayersTech High-Tech Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[8000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#1a1a1a]/20 to-transparent"></div>
                  
                  {/* Floating Tech Badge Haus */}
                  <div className="absolute top-12 right-12 z-20 bg-white/10 backdrop-blur-xl p-8 rounded-[40px] border border-white/20 text-white animate-pulse">
                     <Cpu className="w-8 h-8 text-[#F26522] mb-2" />
                     <p className="text-[8px] font-black tracking-widest uppercase opacity-60">Tech Status</p>
                     <p className="text-xl font-black uppercase tracking-tighter">AI READY</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-16 -left-16 bg-gradient-to-br from-[#F26522] to-[#D35400] p-16 rounded-[60px] shadow-2xl hidden xl:block group-hover:-translate-y-8 transition-transform duration-700 group-hover:rotate-[-2deg]">
                   <ShieldCheck className="w-20 h-20 text-white mb-6 opacity-40" />
                   <div className="flex items-baseline gap-2">
                     <p className="text-white font-black text-8xl tracking-tighter">14</p>
                     <p className="text-white font-black text-2xl uppercase tracking-widest">Yrs</p>
                   </div>
                   <p className="text-white/60 text-[10px] uppercase font-black tracking-[0.5em] mt-2 whitespace-nowrap">{t({ EN: "Manufacturing Trust", TR: "Üretim Güvencesi" })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section (Fills the gap and adds more content) Haus */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
              <div className="lg:col-span-1 py-12 pr-12 border-b lg:border-b-0 lg:border-r border-white/10">
                <span className="text-[#F26522] font-black tracking-[0.4em] text-[11px] mb-4 block uppercase leading-none">{t({ EN: "OUR FOUNDATION", TR: "TEMELLERİMİZ" })}</span>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{t({ EN: "Core Engineering Values", TR: "Mühendislik Değerlerimiz" })}</h3>
                <p className="text-white/40 mt-8 text-sm font-light leading-relaxed">{t({ EN: "We adhere to rigorous standards that define every layer of our technological output.", TR: "Teknolojik üretimimizin her katmanını tanımlayan titiz standartlara bağlıyız." })}</p>
              </div>
              
              {[
                { 
                  icon: <Zap className="w-8 h-8 text-[#F26522]" />, 
                  title: { EN: "AGILE SPEED", TR: "ÇEVİK HIZ" }, 
                  desc: { EN: "Reducing production cycles from months to days without losing micron-level accuracy.", TR: "Mikron düzeyindeki doğruluktan ödün vermeden üretim döngülerini aylardan günlere indiriyoruz." } 
                },
                { 
                  icon: <Target className="w-8 h-8 text-[#F26522]" />, 
                  title: { EN: "CLINICAL PRECISION", TR: "KLİNİK HASSASİYET" }, 
                  desc: { EN: "Zero-tolerance for error. Every voxel is scientifically calculated for optimal performance.", TR: "Hataya sıfır tolerans. Her voksel, en iyi performans için bilimsel olarak hesaplanır." } 
                },
                { 
                  icon: <Heart className="w-8 h-8 text-[#F26522]" />, 
                  title: { EN: "PARTNERSHIP", TR: "ORTAKLIK" }, 
                  desc: { EN: "We integrate with your R&D teams as a technical extension, not just a service provider.", TR: "Sadece bir servis sağlayıcı değil, teknik bir uzantı olarak Ar-Ge ekiplerinize entegre oluyoruz." } 
                }
              ].map((value, idx) => (
                <div key={idx} className="lg:col-span-1 p-12 hover:bg-white/[0.03] transition-all duration-500 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 group">
                   <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{value.icon}</div>
                   <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-4">{t(value.title)}</h4>
                   <p className="text-white/40 text-[13px] font-light leading-relaxed">{t(value.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Expertise & Experience Section Haus */}
        <section className="py-32 md:py-48 bg-[#F8F9FA] dark:bg-white/[0.01] transition-colors duration-500 relative">
          <div className="container mx-auto px-6 max-w-[1400px]">
             <div className="max-w-4xl mb-24">
                <span className="text-[#F26522] font-black tracking-[0.4em] text-[11px] mb-4 block uppercase leading-none">{t({ EN: "CUMULATIVE MASTERY", TR: "BİRİKİMLİ USTALIK" })}</span>
                <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white mb-10 tracking-tighter uppercase leading-[0.8]">{t({ EN: "25 Years of Technical Synergy", TR: "25 Yıllık Teknik Sinerji" })}</h2>
                <p className="text-black/50 dark:text-white/40 text-xl font-light max-w-2xl">{t({ EN: "Our board of engineers combines decades of experience from aerospace, silicone chemistry, and CNC robotics.", TR: "Mühendislik kurulumuz; havacılık, silikon kimyası ve CNC robotiği alanlarındaki onlarca yıllık deneyimi birleştirir." })}</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[60px] overflow-hidden">
                {[
                  { 
                    title: { EN: "ADVANCED PROTOTYPING", TR: "İLERİ PROTOTİPLEME" }, 
                    text: { EN: "Rapid iterative cycles for complex elastomeric parts, providing functional verification in record time.", TR: "Karmaşık elastomerik parçalar için hızlı yinelemeli döngüler, rekor sürede fonksiyonel doğrulama sağlar." } 
                  },
                  { 
                    title: { EN: "STRUCTURAL ENGINEERING", TR: "YAPISAL MÜHENDİSLİK" }, 
                    text: { EN: "Integrated FEA analysis and topological lattice design for optimized weight-to-performance ratios.", TR: "Optimize edilmiş ağırlık-performans oranları için entegre FEA analizi ve topolojik kafes tasarımı." } 
                  },
                  { 
                    title: { EN: "INDUSTRIAL PRODUCTION", TR: "ENDÜSTRİYEL ÜRETİM" }, 
                    text: { EN: "Bridging small-batch flexibility with large-scale industrial repeatability using our proprietary M1 series.", TR: "Kendi mülkiyetimizdeki M1 serisini kullanarak küçük grup esnekliğini büyük ölçekli endüstriyel tekrarlanabilirlikle buluşturuyoruz." } 
                  }
                ].map((item, i) => (
                  <div key={i} className="p-16 bg-white dark:bg-transparent hover:bg-[#F26522]/5 dark:hover:bg-[#F26522]/5 transition-all duration-700 group">
                    <div className="w-12 h-1 bg-[#F26522] mb-8 group-hover:w-24 transition-all duration-700"></div>
                    <h3 className="text-[#1a1a1a] dark:text-white font-black mb-8 tracking-[0.3em] uppercase text-xs">{t(item.title)}</h3>
                    <p className="text-[16px] text-black/60 dark:text-white/50 leading-relaxed font-light">{t(item.text)}</p>
                  </div>
                ))}
             </div>
             
             {/* Final CTA-like block to fill the very bottom of About Us Haus */}
             <div className="mt-32 p-12 md:p-24 bg-gradient-to-br from-[#1a1a1a] to-black rounded-[60px] text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#F26522] opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>
                <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 max-w-3xl mx-auto">{t({ EN: "Ready to Industrialize Your Next Complex Project?", TR: "Bir Sonraki Karmaşık Projenizi Endüstriyelleştirmeye Hazır Mısınız?" })}</h3>
                <Link href="/contact" className="inline-flex items-center gap-4 bg-[#F26522] text-white px-12 py-6 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all shadow-2xl uppercase">
                   {t({ EN: "Consult with Our Engineers", TR: "Mühendislerimizle Görüşün" })}
                   <ChevronRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
