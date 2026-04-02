"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Box, Layers, Zap, Settings2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SectorGallery = ({ images, title, t }: { images: string[], title: any, t: any }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= current) setCurrent(0);
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, current]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full group/gallery bg-[#f8f8f8]">
      {images.map((img, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
        >
          <Image 
            src={img} 
            alt={`${t(title)} - ${i + 1}`} 
            fill
            unoptimized
            className={`w-full h-full transition-transform duration-[6000ms] group-hover:scale-105 ${img.includes('robot') || img.includes('giyim') ? 'object-contain p-8' : 'object-cover'}`} 
            style={{ imageRendering: 'auto' }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 ${img.includes('robot') || img.includes('giyim') ? 'hidden' : ''}`}></div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/gallery:opacity-100 transition-all hover:bg-[#F26522] hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/gallery:opacity-100 transition-all hover:bg-[#F26522] hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-[#F26522] w-6' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ThreeDPrinting() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#1a1a1a]" />;
  }

  const content = {
    header: {
      breadcrumb: {
        home: { EN: "Home", TR: "Anasayfa" },
        techs: { EN: "Our 3D Technologies", TR: "3D Teknolojilerimiz" }
      },
      title: { EN: "Our 3D Technologies", TR: "3D Teknolojilerimiz" }
    },
    section1: {
      title: { EN: "The World's First Quad-Head Industrial Silicone 3D Printing System", TR: "Dünyanın İlk Dört Kafalı Endüstriyel Silikon 3D Baskı Sistemi" },
      subtitle: { EN: "LayersTech redefines additive manufacturing with its unique Quad-Nozzle technology.", TR: "LayersTech, benzersiz Dört Nozüllü teknolojisi ile katmanlı üretimi yeniden tanımlıyor." },
      desc: { EN: "Configure your system with 4 unique silicone materials, 4 vibrant colors, or 3 silicones plus dissolvable support for unmatched complex geometry and functional performance. Skip molding, print production-ready elastomers directly.", TR: "Sisteminizi 4 benzersiz silikon malzeme, 4 canlı renk veya rakipsiz karmaşık geometriler için 3 silikon artı çözünür destek malzemesi ile yapılandırın. Kalıplamayı atlayın, doğrudan kullanıma hazır elastomerler üretin." },
      features: [
        { EN: "World's First Quad-Head", TR: "Dünyanın İlk Dört Kafalı" },
        { EN: "Industrial-grade Silicone", TR: "Endüstriyel Sınıf Silikon" },
        { EN: "Production-ready Elastomers", TR: "Üretime Hazır Elastomerler" },
        { EN: "Active Thermal Curing", TR: "Aktif Termal Kürleme" },
        { EN: "Patented Crosslinking Process", TR: "Patentli Çapraz Bağlanma" },
        { EN: "No Molding Required", TR: "Kalıp Gerektirmez" },
        { EN: "High Temperature Stable", TR: "Yüksek Sıcaklık Kararlılığı" },
        { EN: "Chemical & UV Resistance", TR: "Kimyasal ve UV Direnci" }
      ],
      images: ["/images/all-printer-s300xliq.webp", "/images/industrial_hero.png"]
    },
    section2: {
      title: { EN: "LayersTech 4-Extruder Technology: Multimaterial and Dissolvable Support", TR: "LayersTech 4-Ekstrüder Teknolojisi: Çok Malzemeli ve Çözünür Destek" },
      p1: { EN: "Engineers face constant challenges with complex geometries. Our <strong class=\"text-heading\">Dissolvable Support</strong> solves this by allowing intricate internal structures that are impossible with standard methods.", TR: "Mühendisler karmaşık geometrilerde sürekli zorluklarla karşılaşır. <strong class=\"text-heading\">Çözünür Destek</strong> teknolojimiz, standart yöntemlerle imkansız olan karmaşık iç yapıları mümkün kılarak bu sorunu çözer." },
      p2: { EN: "With four independent heads, you can utilize 3 different silicone materials plus 1 dedicated dissolvable support head, ensuring flawless surface finishes and geometric freedom for your most complex parts.", TR: "Dört bağımsız kafa sayesinde, en karmaşık parçalarınız için kusursuz yüzey kalitesi ve geometrik özgürlük sağlayan 3 farklı silikon malzeme artı 1 özel çözünür destek kafası kullanabilirsiniz." },
      stats: [
        { label: { EN: "Hybrid Config", TR: "Hibrit Yapı" }, value: { EN: "3+1", TR: "3+1" } },
        { label: { EN: "Geometry Limit", TR: "Geometri Sınırı" }, value: { EN: "Zero", TR: "Sıfır" } },
        { label: { EN: "Dissolvable", TR: "Çözünür" }, value: { EN: "100%", TR: "100%" } }
      ],
      images: ["/images/3d-silicone-printing--use-case--hp.webp", "/images/w_parts.png"]
    },
    thermal: {
      title: { EN: "Patented Thermal Crosslinking", TR: "Patentli Termal Çapraz Bağlanma" },
      subtitle: { EN: "Ready-to-Use Resilience", TR: "Kullanıma Hazır Dayanıklılık" },
      p1: { EN: "LayersTech’s secret to industrial durability lies in our integrated <strong class=\"text-white\">Thermal Crosslinking</strong> process.", TR: "LayersTech'in endüstriyel dayanıklılık sırrı, entegre <strong class=\"text-white\">Termal Çapraz Bağlanma</strong> sürecimizde yatmaktadır." },
      p2: { EN: "Unlike standard elastomer printing, our patented technology triggers molecular cross-linking during the extrusion phase. This ensures that every part is fully cured and ready for immediate use right off the build plate—no secondary oven curing required.", TR: "Standart elastomer baskıdan farklı olarak, patentli teknolojimiz ekstrüzyon aşamasında moleküler çapraz bağlanmayı tetikler. Bu, her parçanın yapı plakasından çıktığı anda tamamen kürlenmiş ve hemen kullanıma hazır olmasını sağlar; ikincil fırın kürleme gerektirmez." },
      cards: [
        { title: { EN: "Instant Curing", TR: "Anında Kürleme" }, desc: { EN: "Zero wait time. Production-ready parts instantly.", TR: "Bekleme süresi yok. Anında üretime hazır parçalar." } },
        { title: { EN: "Dimensional Stability", TR: "Boyutsal Kararlılık" }, desc: { EN: "Eliminates shrinkage common in oven-cured silicones.", TR: "Fırında kürlenen silikonlarda yaygın olan büzülmeyi ortadan kaldırır." } }
      ],
      label: { EN: "Molecular Bonding", TR: "Moleküler Bağlanma" }
    },
    section3: {
      title: { EN: "Multi-Durometer Manufacturing: 4-Head Mechanical Diversity", TR: "Çoklu Durometre Üretimi: 4 Kafalı Mekanik Çeşitlilik" },
      subtitle: { EN: "LayersTech isn't just about colors; it's about <strong class=\"text-primary\">variable mechanical properties</strong> in a single print session.", TR: "LayersTech sadece renklerden ibaret değildir; tek bir baskı seansında <strong class=\"text-primary\">değişken mekanik özellikler</strong> sunar." },
      desc: { EN: "With our quad-head system, you can load four different silicone types with varying <strong class=\"text-heading\">Shore Hardness (A5 to A80)</strong>. This allows for true functional grading—creating complex parts that require soft, energy-absorbing zones seamlessly integrated with rigid, load-bearing structures.", TR: "Dört kafalı sistemimizle, <strong class=\"text-heading\">Shore Sertliği (A5 - A80)</strong> değişen dört farklı silikon tipi yükleyebilirsiniz. Bu, yumuşak, enerji emici bölgelerin sert, yük taşıyan yapılarla sorunsuz bir şekilde entegre edilmesini gerektiren karmaşık parçalar oluşturarak gerçek fonksiyonel derecelendirme sağlar." },
      infoCards: [
        { title: { EN: "Functional Grading", TR: "Fonksiyonel Derecelendirme" }, desc: { EN: "Seamless transition from soft gaskets to rigid connectors without assembly.", TR: "Montaj gerektirmeden yumuşak contalardan sert konektörlere sorunsuz geçiş." } },
        { title: { EN: "Custom Shore Blending", TR: "Özel Shore Karışımı" }, desc: { EN: "Define specific hardness zones for medical implants or industrial seals.", TR: "Tıbbi implantlar veya endüstriyel contalar için belirli sertlik bölgeleri tanımlayın." } }
      ],
      features: [
        { EN: "Independent Shore A Control", TR: "Bağımsız Shore A Kontrolü" },
        { EN: "4 Distinct Material Properties", TR: "4 Belirgin Malzeme Özelliği" },
        { EN: "Soft-to-Rigid Integration", TR: "Yumuşaktan Serte Entegrasyon" },
        { EN: "Vibration Dampening Zones", TR: "Titreşim Sönümleme Bölgeleri" },
        { EN: "Anatomical Tissue Mimicking", TR: "Anatomik Doku Taklidi" },
        { EN: "Zero-Interface Bonding", TR: "Arayüzsüz Bağlanma" }
      ],
      badge: { title: { EN: "Dynamic Hardness", TR: "Dinamik Sertlik" }, desc: { EN: "Achieve Shore A5 (Ultra-Soft) and Shore A80 (Rigid) within the same geometric boundary.", TR: "Aynı geometrik sınır içinde Shore A5 (Ultra Yumuşak) ve Shore A80 (Sert) elde edin." } },
      images: ["/images/fashion_detail.webp", "/images/robot1.webp"]
    },
    section4: {
      title: { EN: "Hybrid Capabilities: Optional FDM Printing Support", TR: "Hibrit Yetenekler: Opsiyonel FDM Baskı Desteği" },
      p1: { EN: "Expand your manufacturing range with <strong class=\"text-heading\">Integrated FDM Support</strong>. LayersTech systems are optionally configurable to handle standard thermoplastic filaments alongside silicone.", TR: "İmalat yelpazenizi <strong class=\"text-heading\">Entegre FDM Desteği</strong> ile genişletin. LayersTech sistemleri, silikonun yanı sıra standart termoplastik filamentleri de işleyecek şekilde opsiyonel olarak yapılandırılabilir." },
      p2: { EN: "This versatility makes our printers the ultimate tool for R&D departments and production facilities that need both high-performance elastomers and rigid functional components in one workspace.", TR: "Bu çok yönlülük, yazıcılarımızı tek bir çalışma alanında hem yüksek performanslı elastomerlere hem de sert fonksiyonel bileşenlere ihtiyaç duyan Ar-Ge departmanları ve üretim tesisleri için nihai araç haline getirir." },
      info: [
        { label: { EN: "FDM Support", TR: "FDM Desteği" }, val: { EN: "Standard & Advanced Filaments", TR: "Standart ve Gelişmiş Filamentler" } },
        { label: { EN: "All-in-One", TR: "Hepsi Bir Arada" }, val: { EN: "Single Industrial Platform", TR: "Tek Endüstriyel Platform" } }
      ],
      images: ["/images/industrial_spool_fallback.jpg", "/images/industrial_hero.png"]
    },
    cta: {
      title: { EN: "Ready to Start Your Project?", TR: "Projenize Başlamaya Hazır Mısınız?" },
      desc: { EN: "Contact our engineering team today to discuss your technical requirements and get a professional consultation.", TR: "Teknik gereksinimlerinizi tartışmak ve profesyonel danışmanlık almak için bugün mühendislik ekibimizle iletişime geçin." },
      button: { EN: "GET A QUOTE", TR: "TEKLİF ALIN" }
    }
  };

  return (
    <div className="relative min-h-screen">
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-[#1a1a1a] py-20 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 mb-4">
              <a href="/" className="hover:text-white transition-colors">{t(content.header.breadcrumb.home)}</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t(content.header.breadcrumb.techs)}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-white">{t(content.header.title)}</h1>
            <div className="w-20 h-1 bg-[#f26522]"></div>
          </div>
        </section>

        {/* Section 1: Industrial Silicone Leadership */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1a1a1a] uppercase">{t(content.section1.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg font-medium text-[#1a1a1a]/80">
                    {t(content.section1.subtitle)}
                  </p>
                  <p>
                    {t(content.section1.desc)}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {content.section1.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-bold text-[#1a1a1a]">
                        <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2 group/img">
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                   <SectorGallery images={content.section1.images} title={content.section1.title} t={t} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Versatility & Support Material */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="group/img">
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                   <SectorGallery images={content.section2.images} title={content.section2.title} t={t} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1a1a1a] uppercase">{t(content.section2.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(content.section2.p1) }} />
                  <p>{t(content.section2.p2)}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {content.section2.stats.map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm border border-black/5">
                        <p className="text-xl font-black text-[#f26522]">{t(stat.value)}</p>
                        <p className="text-[10px] uppercase font-bold text-[#1a1a1a]/50">{t(stat.label)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Patented Thermal Crosslinking */}
        <section className="py-24 bg-[#1a1c1e] text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-10 bg-[#f26522]/40 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative p-10 rounded-[40px] border border-white/10 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] via-[#f26522]/5 to-transparent">
                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight text-white tracking-tighter">
                  {t(content.thermal.title)}: <br/>
                  <span className="text-[#f26522]">{t(content.thermal.subtitle)}</span>
                </h2>
                <div className="space-y-6 text-white/70 text-sm">
                  <p className="text-lg text-white/90" dangerouslySetInnerHTML={{ __html: t(content.thermal.p1) }} />
                  <p>{t(content.thermal.p2)}</p>
                  <div className="grid grid-cols-2 gap-6 mt-10">
                    {content.thermal.cards.map((card, i) => (
                      <div key={i} className="border-l-2 border-[#f26522] pl-4 group hover:border-white transition-colors duration-500">
                        <h4 className="font-black text-white uppercase text-xs mb-1 group-hover:text-[#f26522]">{t(card.title)}</h4>
                        <p className="text-[11px]">{t(card.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full aspect-square max-w-md rounded-full border border-white/10 p-8 flex items-center justify-center relative bg-white/[0.02]">
                  <div className="absolute inset-0 animate-pulse bg-[#f26522]/10 rounded-full"></div>
                  <div className="text-[#f26522] opacity-50 relative">
                     <Zap className="w-32 h-32" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-[10px] font-black tracking-widest text-white/40 uppercase rotate-90 origin-center">{t(content.thermal.label)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Durometer & Functional Material Grading */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1a1a1a] uppercase">
                    {t(content.section3.title)}
                  </h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg font-medium text-[#1a1a1a]/80" dangerouslySetInnerHTML={{ __html: t(content.section3.subtitle) }} />
                  <p dangerouslySetInnerHTML={{ __html: t(content.section3.desc) }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {content.section3.infoCards.map((card, i) => (
                      <div key={i} className="p-6 bg-gradient-to-br from-white/90 via-white/80 to-[#f26522]/10 rounded-2xl border border-[#f26522]/20 hover:border-[#f26522] transition-colors duration-500">
                        <h4 className="font-black text-[#1a1a1a] text-xs mb-2 uppercase">{t(card.title)}</h4>
                        <p className="text-[11px]">{t(card.desc)}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {content.section3.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-bold text-[#1a1a1a]">
                        <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2 group/img">
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                   <SectorGallery images={content.section3.images} title={content.section3.title} t={t} />
                   {/* Optional Technical Badge Overlay */}
                   <div className="absolute bottom-10 right-10 z-30 bg-[#1a1a1a]/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 max-w-[200px] text-white shadow-2xl">
                      <p className="text-[10px] font-black tracking-widest text-[#f26522] mb-1 uppercase">{t(content.section3.badge.title)}</p>
                      <p className="text-[10px] opacity-70 leading-normal">{t(content.section3.badge.desc)}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Hybrid FDM Capability */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="group/img">
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                   <SectorGallery images={content.section4.images} title={content.section4.title} t={t} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1a1a1a] uppercase">{t(content.section4.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(content.section4.p1) }} />
                  <p>{t(content.section4.p2)}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {content.section4.info.map((item, i) => (
                      <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-[#f26522]/30 transition-colors">
                        <p className="text-sm font-bold text-[#1a1a1a] mb-1 text-[#f26522] tracking-tighter">{t(item.label)}</p>
                        <p className="text-[10px] text-[#777777] opacity-80 uppercase tracking-widest font-bold">{t(item.val)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Haus */}
        <section className="py-32 bg-[#1a1a1a] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">{t(content.cta.title)}</h2>
            <p className="mb-10 text-white/50 max-w-2xl mx-auto text-xl font-light">
              {t(content.cta.desc)}
            </p>
            <Link href="/contact" className="inline-block bg-[#f26522] text-white px-12 py-5 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-white hover:text-[#1a1a1a] transition-all shadow-2xl">
              {t(content.cta.button)}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
