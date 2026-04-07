"use client";

import React from "react";
import { 
  ChevronRight, 
  Target, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Rocket, 
  Zap, 
  Heart,
  Layers,
  Settings,
  Clock,
  CheckCircle2,
  Minimize2
} from "lucide-react";
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
          
          {/* Technical Data Overlay Haus */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden xl:flex flex-col justify-center gap-12 pr-24 select-none opacity-60 hover:opacity-100 transition-opacity duration-1000 z-10">
             {[
               { label: { EN: "PRECISION", TR: "HASSASİYET" }, val: "0.05 MM" },
               { label: { EN: "EXPERIENCE", TR: "TECRÜBE" }, val: "20+ YRS" },
               { label: { EN: "RELIABILITY", TR: "GÜVENİRLİK" }, val: "99.9%" },
               { label: { EN: "LOCATIONS", TR: "LOKASYON" }, val: "GLOBAL" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-end border-r-2 border-[#F26522]/60 pr-8">
                 <span className="text-[10px] font-black tracking-[0.5em] text-[#F26522] mb-1">{t(stat.label)}</span>
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
               {t({ EN: "Shaping", TR: "GELECEĞİ" })} <br />
               <span className="text-[#F26522]">{t({ EN: "The Future", TR: "ŞEKİLLENDİRİYORUZ" })}</span>
            </h1>
            <p className="text-white/60 max-w-3xl text-xl md:text-2xl font-light leading-relaxed mb-16">
              {t({
                EN: "With over 20 years of experience, 3 Dimension Design Technologies / 3DDT leads the industry in SLS and DMLS 3D printing solutions. We don't just supply products; we provide transformative engineering excellence.",
                TR: "20 yılı aşkın tecrübesiyle 3 Dimension Design Technologies / 3DDT, SLS ve DMLS 3D baskı çözümlerinde sektöre liderlik ediyor. Sadece ürün tedarik etmiyoruz; dönüştürücü mühendislik mükemmelliği sunuyoruz."
              })}
            </p>
            <div className="w-48 h-2 bg-gradient-to-r from-[#F26522] to-transparent mx-auto md:mx-0"></div>
          </div>
        </section>

        {/* Core Identity Section */}
        <section className="py-24 md:py-40 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
              <div className="space-y-12">
                <div>
                  <span className="text-[#F26522] font-black tracking-[0.3em] text-[11px] mb-6 block uppercase whitespace-nowrap border-l-4 border-[#F26522] pl-6 leading-none">{t({ EN: "OVER 20 YEARS OF INNOVATION", TR: "20 YILI AŞKIN İNOVASYON" })}</span>
                  <img src="/images/3DDT_logo2.webp" alt="3DDT" className="h-16 md:h-20 w-auto object-contain mb-8 drop-shadow-xl" />
                  <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white mb-10 uppercase tracking-tighter leading-none">{t({ EN: "Pioneering Precise Tech", TR: "HASSAS TEKNOLOJİNİN ÖNCÜSÜ" })}</h2>
                </div>
                
                <div className="space-y-8 text-black/70 dark:text-white/60 text-lg md:text-xl font-light leading-relaxed">
                  <p>
                    <strong className="text-[#F26522] font-black">3 Dimension Design Technologies / 3DDT</strong> {t({ 
                      EN: "has established itself as a global leader in high-tech 3D printing solutions. Our expertise lies in the rapid production of functional, durable, and highly precise parts using Selective Laser Sintering (SLS) and Direct Metal Laser Sintering (DMLS) technology.", 
                      TR: "yüksek teknolojili 3D baskı çözümlerinde kendisini küresel bir lider olarak konumlandırmıştır. Uzmanlığımız; Seçici Lazer Sinterleme (SLS) ve Doğrudan Metal Lazer Sinterleme (DMLS) teknolojilerini kullanarak fonksiyonel, dayanıklı ve son derece hassas parçaların hızlı üretimine dayanmaktadır." 
                    })}
                  </p>
                  <p>
                    {t({
                      EN: "Each project we undertake is approached with meticulous attention to detail. Our team consistently reviews and refines our processes to minimize errors and enhance the quality of the final product, from medical devices to aerospace components.",
                      TR: "Üstlendiğimiz her projeye titiz bir detaycılıkla yaklaşıyoruz. Ekibimiz, tıbbi cihazlardan havacılık bileşenlerine kadar, hataları en aza indirmek ve nihai ürün kalitesini artırmak için süreçlerimizi sürekli gözden geçirip geliştiriyor."
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                   <div className="flex flex-col gap-6 group">
                      <div className="w-20 h-20 rounded-3xl bg-[#F26522]/5 dark:bg-[#F26522]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F26522] transition-all duration-700">
                         <Layers className="w-10 h-10 text-[#F26522] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-black text-[#1a1a1a] dark:text-white uppercase text-lg tracking-widest leading-none">{t({ EN: "SLS Mastery", TR: "SLS Uzmanlığı" })}</h4>
                      <p className="text-[14px] text-black/50 dark:text-white/40 leading-relaxed">{t({ EN: "Direct part production without molding costs, enabling rapid design iterations.", TR: "Kalıp maliyeti olmadan doğrudan parça üretimi, hızlı tasarım yinelemelerine olanak tanır." })}</p>
                   </div>
                   <div className="flex flex-col gap-6 group">
                      <div className="w-20 h-20 rounded-3xl bg-[#F26522]/5 dark:bg-[#F26522]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F26522] transition-all duration-700">
                         <Globe className="w-10 h-10 text-[#F26522] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-black text-[#1a1a1a] dark:text-white uppercase text-lg tracking-widest leading-none">{t({ EN: "Global Trust", TR: "Küresel Güven" })}</h4>
                      <p className="text-[14px] text-black/50 dark:text-white/40 leading-relaxed">{t({ EN: "Trusted partner for industries requiring high mechanical strength and fine detail resolution.", TR: "Yüksek mekanik mukavemet ve ince detay hassasiyeti gerektiren sektörlerin güvenilir ortağıyız." })}</p>
                   </div>
                </div>
              </div>

              <div className="relative group lg:mt-24">
                <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border-4 border-black/5 dark:border-white/10 group-hover:rotate-1 transition-all duration-1000">
                  <img src="/images/GALERI-scaled.webp" alt="LayersTech R&D Center" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[8000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#1a1a1a]/20 to-transparent"></div>
                  
                  <div className="absolute top-12 right-12 z-20 bg-white/10 backdrop-blur-xl p-8 rounded-[40px] border border-white/20 text-white animate-pulse">
                     <Cpu className="w-8 h-8 text-[#F26522] mb-2" />
                     <p className="text-[8px] font-black tracking-widest uppercase opacity-60">Operations</p>
                     <p className="text-xl font-black uppercase tracking-tighter">SLS & DMLS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Layerstech - 4 Column Layout */}
        <section className="py-32 bg-[#F8F9FA] dark:bg-white/[0.02] transition-colors duration-500">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="text-center md:text-left mb-24">
               <span className="text-[#F26522] font-black tracking-[0.4em] text-[11px] mb-4 block uppercase leading-none">{t({ EN: "THE COMPETITIVE EDGE", TR: "REKABETÇİ ÜSTÜNLÜĞÜMÜZ" })}</span>
               <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white uppercase tracking-tighter leading-[0.8]">{t({ EN: "Why Choose 3DDT?", TR: "Neden 3DDT?" })}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 {
                   icon: <Minimize2 className="w-8 h-8" />,
                   title: { EN: "No Tooling Costs", TR: "Kalıp Maliyeti Yok" },
                   desc: { EN: "Direct production eliminates initial investments, speeding up your time-to-market significantly.", TR: "Doğrudan üretim, başlangıç yatırımlarını ortadan kaldırır ve pazara çıkış sürenizi önemli ölçüde hızlandırır." }
                 },
                 {
                   icon: <Rocket className="w-8 h-8" />,
                   title: { EN: "Aerospace Grade", TR: "Havacılık Standartı" },
                   desc: { EN: "Lightweight yet durable parts capable of enduring extreme conditions and critical performance needs.", TR: "Aşırı koşullara ve kritik performans ihtiyaçlarına dayanabilen hafif ancak dayanıklı parçalar." }
                 },
                 {
                   icon: <Target className="w-8 h-8" />,
                   title: { EN: "Fine Resolution", TR: "Mükemmel Detay" },
                   desc: { EN: "Superior mechanical strength and detail resolution for both prototyping and final end-use serial production.", TR: "Hem prototipleme hem de seri üretim için üstün mekanik mukavemet ve detay çözünürlüğü." }
                 },
                 {
                   icon: <Settings className="w-8 h-8" />,
                   title: { EN: "Flexible Volumes", TR: "Esnek Hacimler" },
                   desc: { EN: "From low quantities for start-ups to full-scale manufacturing for established global enterprises.", TR: "Start-up'lar için düşük adetli projelerden, global şirketler için tam ölçekli seri üretime kadar esneklik." }
                 }
               ].map((item, idx) => (
                 <div key={idx} className="group p-10 bg-white dark:bg-white/5 rounded-[40px] border border-black/5 dark:border-white/10 hover:border-[#F26522] transition-all duration-500 shadow-xl shadow-black/5">
                    <div className="w-16 h-16 rounded-2xl bg-[#F26522]/10 flex items-center justify-center text-[#F26522] mb-8 group-hover:scale-110 group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500">
                       {item.icon}
                    </div>
                    <h4 className="text-xl font-black text-[#1a1a1a] dark:text-white uppercase tracking-tighter mb-4">{t(item.title)}</h4>
                    <p className="text-[14px] text-black/50 dark:text-white/40 leading-relaxed font-light">{t(item.desc)}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Understanding SLS Technology Section */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden text-white">
          <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="flex-1">
                  <span className="text-[#F26522] font-black tracking-[0.4em] text-[11px] mb-6 block uppercase">{t({ EN: "TECHNOLOGY INSIGHT", TR: "TEKNOLOJİ BİLGİSİ" })}</span>
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">{t({ EN: "Understanding SLS Technology", TR: "SLS Teknolojisini Anlamak" })}</h2>
                  <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
                    <p>
                      {t({
                        EN: "Selective Laser Sintering (SLS) is an advanced manufacturing process that uses a laser to sinter powdered material, binding it together to create a solid, functional structure. This method supports a variety of high-performance materials, including advanced polymers and metals.",
                        TR: "Seçici Lazer Sinterleme (SLS), toz malzemeyi sinterlemek için bir lazer kullanan, katı ve fonksiyonel bir yapı oluşturmak için parçacıkları birbirine bağlayan gelişmiş bir üretim sürecidir. Bu yöntem, gelişmiş polimerler ve metaller de dahil olmak üzere çeşitli yüksek performanslı malzemeleri destekler."
                      })}
                    </p>
                    <p>
                      {t({
                        EN: "The versatility of SLS makes it ideal for both prototyping and final production runs. It enables customization at scale, which is particularly beneficial for industries requiring unique parts tailored to specific applications.",
                        TR: "SLS teknolojisinin çok yönlülüğü, onu hem prototipleme hem de son üretim aşamaları için ideal kılar. Ölçeklenebilir özelleştirmeye olanak tanıyarak, belirli uygulamalara göre uyarlanmış benzersiz parçalar gerektiren sektörler için büyük avantaj sağlar."
                      })}
                    </p>
                  </div>
               </div>
               <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { EN: "Industrial SLS/DMLS", TR: "Endüstriyel SLS/DMLS" },
                    { EN: "International Standards", TR: "Uluslararası Standartlar" },
                    { EN: "Customer-Centered Design", TR: "Müşteri Odaklı Tasarım" },
                    { EN: "Fast & Reliable Delivery", TR: "Hızlı ve Güvenilir Teslimat" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                       <CheckCircle2 className="w-6 h-6 text-[#F26522]" />
                       <span className="font-bold text-sm tracking-widest uppercase">{t(item)}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Global Synergies (Years of experience) */}
        <section className="py-40 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
           <div className="container mx-auto px-6 max-w-[1400px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <span className="text-[#F26522] font-black tracking-[0.4em] text-[11px] mb-6 block uppercase">{t({ EN: "CUMULATIVE MASTERY", TR: "BİRİKİMLİ USTALIK" })}</span>
                    <h2 className="text-5xl md:text-8xl font-black text-[#1a1a1a] dark:text-white uppercase tracking-tighter leading-[0.8] mb-12">{t({ EN: "20 Years of Synergy", TR: "20 Yıllık Sinerji" })}</h2>
                    <div className="space-y-6 text-black/60 dark:text-white/40 text-lg font-light leading-relaxed">
                       <p>{t({
                          EN: "Our board of engineers combines decades of experience from aerospace, silicone chemistry, and CNC robotics. We utilize advanced scheduling and logistics strategies to ensure timely delivery of every order, handling everything from simple prototypes to complex assemblies.",
                          TR: "Mühendislik kurulumuz; havacılık, silikon kimyası ve CNC robotiği alanlarındaki onlarca yıllık deneyimi birleştirir. Basit prototiplerden karmaşık montajlara kadar her siparişin zamanında teslimatını sağlamak için gelişmiş planlama ve lojistik stratejileri kullanıyoruz."
                       })}</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="p-10 md:p-12 bg-[#F26522] rounded-[40px] md:rounded-[60px] text-white">
                       <p className="text-5xl md:text-6xl font-black mb-2 tracking-tighter text-white">20+</p>
                       <p className="text-base md:text-lg font-black uppercase tracking-tighter leading-none">{t({ EN: "Years in 3D Printing", TR: "3D Baskıda 20+ Yıl" })}</p>
                    </div>
                    <div className="p-10 md:p-12 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[40px] md:rounded-[60px]">
                       <p className="text-5xl md:text-6xl font-black mb-2 tracking-tighter text-[#F26522]">Global</p>
                       <p className="text-base md:text-lg font-black uppercase tracking-tighter leading-none text-[#1a1a1a] dark:text-white">{t({ EN: "Standard Certified", TR: "Standart Sertifikalı" })}</p>
                    </div>
                 </div>
              </div>

              {/* Call to Action Haus */}
              <div className="mt-20 md:mt-40 p-8 md:p-32 bg-gradient-to-br from-[#1a1a1a] to-black rounded-[40px] md:rounded-[80px] text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#F26522] opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>
                <h3 className="text-white text-3xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12 max-w-4xl mx-auto leading-none">
                  {t({ EN: "Ready to take your production to new heights?", TR: "Üretiminizi yeni zirvelere taşımaya hazır mısınız?" })}
                </h3>
                <Link href="/contact" className="inline-flex items-center gap-4 md:gap-6 bg-[#F26522] text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl uppercase">
                   <span className="text-[11px] md:text-[12px]">{t({ EN: "Consult an Expert", TR: "Bir Uzmana Danışın" })}</span>
                   <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
