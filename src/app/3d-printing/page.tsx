"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Box, Layers, Zap, Settings2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SectorGallery = ({ images, title, t, priority = false }: { images: string[], title: any, t: any, priority?: boolean }) => {
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
            priority={priority && i === 0}
            loading={priority && i === 0 ? "eager" : "lazy"}
            className={`w-full h-full transition-transform duration-[6000ms] group-hover:scale-105 ${img.includes('robot') || img.includes('giyim') || img.includes('yaz') ? 'object-contain p-8' : 'object-cover'}`} 
            style={{ imageRendering: 'auto' }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 ${img.includes('robot') || img.includes('giyim') || img.includes('yaz') ? 'hidden' : ''}`}></div>
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
        techs: { EN: "Our 3D Technologies", TR: "3D TEKNOLOJİLERİMİZ" }
      },
      title: { EN: "Our 3D Technologies", TR: "3D TEKNOLOJİLERİMİZ" }
    },
    section1: {
      title: { EN: "The World's First Quad-Head Industrial Silicone 3D Printing System", TR: "DÜNYANIN İLK DÖRT KAFALI ENDÜSTRİYEL SİLİKON 3D BASKI SİSTEMİ" },
      subtitle: { EN: "LayersTech redefines additive manufacturing with its unique Quad-Nozzle technology.", TR: "LayersTech, benzersiz Dört Nozüllü teknolojisi ile katmanlı üretimi yeniden tanımlıyor." },
      desc: { EN: "Configure your system with 4 unique silicone materials, 4 vibrant colors, or 3 silicones plus dissolvable support for unmatched complex geometry and functional performance. Skip molding, print production-ready elastomers directly.", TR: "Sisteminizi 4 benzersiz silikon malzeme, 4 canlı renk veya rakipsiz karmaşık geometriler için 3 silikon artı çözünür destek malzemesi ile yapılandırın. Kalıplamayı atlayın, doğrudan kullanıma hazır elastomerler üretin." },
      features: [
        { EN: "World's First Quad-Head", TR: "Dünyanın İlk Dört Kafalı" },
        { EN: "Industrial-grade Silicone", TR: "Endüstriyel Sınıf Silikon" },
        { EN: "Production-ready Elastomers", TR: "Üretime Hazır Elastomerler" },
        { EN: "Active Thermal Curing", TR: "Aktif Termal Kürleme" },
        { EN: "IR Layer-by-Layer Curing", TR: "IR Katman Bazlı Kürleme" },
        { EN: "No Molding Required", TR: "Kalıp Gerektirmez" },
        { EN: "High Temperature Stable", TR: "Yüksek Sıcaklık Kararlılığı" },
        { EN: "Chemical & UV Resistance", TR: "Kimyasal ve UV Direnci" }
      ],
      images: ["/images/4xtool.png", "/images/industrial_hero.png"]
    },
    section2: {
      title: { EN: "LayersTech Toolchanger Technology: Multimaterial and Dissolvable Support", TR: "LAYERSTECH TOOLCHANGER TEKNOLOJİSİ: ÇOK MALZEMELİ VE ÇÖZÜNÜR DESTEK" },
      p1: { EN: "Engineers are no longer limited by geometric complexity. Our <strong class=\"text-[#f26522]\">Toolchanger System</strong> handles intricate internal structures with specialized support materials, unlocking designs that were once considered impossible.", TR: "Mühendisler artık geometrik karmaşıklıkla sınırlı değil. <strong class=\"text-[#f26522]\">Toolchanger Sistemimiz</strong>, özel destek malzemeleri ile karmaşık iç yapıları yöneterek bir zamanlar imkansız görülen tasarımların kapılarını açar." },
      p2: { EN: "Four independent slots provide total material autonomy. Whether you need multiple grades of silicone, distinct colors, industrial FDM toolheads, or complex dissolvable supports, our system adapts to your unique workflow without fixed configuration limits.", TR: "Dört bağımsız yuva, tam malzeme özerkliği sağlar. İster birden fazla silikon derecesine, ister farklı renklere, endüstriyel FDM kafalarına veya karmaşık çözünür desteklere ihtiyacınız olsun; sistemimiz sabit yapılandırma sınırları olmadan benzersiz iş akışınıza uyum sağlar." },
      stats: [
        { label: { EN: "Modular Slots", TR: "Modüler Yuva" }, value: { EN: "4", TR: "4" } },
        { label: { EN: "Control", TR: "Kontrol" }, value: { EN: "Independent", TR: "Bağımsız" } },
        { label: { EN: "Geometry Limit", TR: "Geometri Sınırı" }, value: { EN: "Zero", TR: "Sıfır" } }
      ],
      images: ["/images/3d-silicone-printing--use-case--hp.webp", "/images/w_parts.png"]
    },
    thermal: {
      title: { EN: "Active IR Thermal Curing", TR: "AKTİF IR TERMAL KÜRLEME" },
      subtitle: { EN: "Ready-to-Use Resilience", TR: "Kullanıma Hazır Dayanıklılık" },
      p1: { EN: "LayersTech’s secret to industrial durability lies in our integrated <strong class=\"text-white\">Infrared (IR) Layer-by-Layer Curing</strong> process.", TR: "LayersTech'in endüstriyel dayanıklılık sırrı, entegre <strong class=\"text-white\">Kızılötesi (IR) Katman Bazlı Kürleme</strong> sürecimizde yatmaktadır." },
      p2: { EN: "Unlike standard elastomer printing, our integrated IR system cures every single layer as it is printed. This ensures that every part is fully cross-linked and ready for immediate use right off the build plate—no secondary oven curing or post-processing required.", TR: "Standart elastomer baskıdan farklı olarak, entegre IR sistemimiz her bir katmanı basıldığı anda kürler. Bu, her parçanın yapı plakasından çıktığı anda moleküler olarak tam çapraz bağlanmış ve hemen kullanıma hazır olmasını sağlar; ikincil fırın kürleme veya sonradan işleme gerektirmez." },
      cards: [
        { title: { EN: "Instant Curing", TR: "Anında Kürleme" }, desc: { EN: "Zero wait time. Production-ready parts instantly.", TR: "Bekleme süresi yok. Anında üretime hazır parçalar." } },
        { title: { EN: "Dimensional Stability", TR: "Boyutsal Kararlılık" }, desc: { EN: "Eliminates shrinkage common in oven-cured silicones.", TR: "Fırında kürlenen silikonlarda yaygın olan büzülmeyi ortadan kaldırır." } }
      ],
      label: { EN: "Molecular Bonding", TR: "Moleküler Bağlanma" }
    },
    section3: {
      title: { EN: "Variable Shore Hardness: 4-Head Material Diversity", TR: "DEĞİŞKEN SHORE SERTLİĞİ: 4 KAFALI MALZEME ÇEŞİTLİLİĞİ" },
      subtitle: { EN: "LayersTech isn't just about colors; it's about <strong class=\"text-primary\">total modular freedom</strong> across 4 independent tool slots.", TR: "LayersTech sadece renklerden ibaret değildir; 4 bağımsız kafa yuvasında <strong class=\"text-primary\">tam modüler özgürlük</strong> sunar." },
      desc: { EN: "Our quad-head system offers absolute flexibility. You can assign any tool—Silicone (Shore A5 to A80), FDM, or Support—to <strong class=\"text-[#f26522]\">any of the 4 slots</strong>. This allows for true functional grading, seamlessly integrating soft, energy-absorbing zones with rigid, load-bearing structures in a single print.", TR: "Dört kafalı sistemimiz mutlak esneklik sunar. Silikon (Shore A5 - A80), FDM veya Destek fark etmeksizin; dilediğiniz aracı <strong class=\"text-[#f26522]\">4 yuvadan herhangi birine</strong> atayabilirsiniz. Bu, yumuşak bölgelerin sert yapılarla tek bir baskıda sorunsuz entegrasyonunu sağlayarak gerçek fonksiyonel derecelendirme sunar." },
      infoCards: [
        { title: { EN: "Any Tool, Any Slot", TR: "İstediğin Araç, İstediğin Kafa" }, desc: { EN: "Zero restrictions on head placement. Configure your own hybrid factory.", TR: "Kafa yerleşiminde sıfır kısıtlama. Kendi hibrit fabrikanızı yapılandırın." } },
        { title: { EN: "Functional Grading", TR: "Fonksiyonel Derecelendirme" }, desc: { EN: "Seamless transition from soft gaskets to rigid connectors without assembly.", TR: "Montaj gerektirmeden yumuşak contalardan sert konektörlere sorunsuz geçiş." } }
      ],
      features: [
        { EN: "4 Fully Modular Slots", TR: "4 Tam Modüler Yuva" },
        { EN: "Independent Shore A Control", TR: "Bağımsız Shore A Kontrolü" },
        { EN: "Soft-to-Rigid Integration", TR: "Yumuşaktan Serte Entegrasyon" },
        { EN: "Vibration Dampening Zones", TR: "Titreşim Sönümleme Bölgeleri" },
        { EN: "Zero-Interface Bonding", TR: "Arayüzsüz Bağlanma" }
      ],
      badge: { title: { EN: "Any Slot Modular", TR: "Tam Modüler Yuvalar" }, desc: { EN: "Mix Silicone, FDM, and Support in any combination across 4 tools.", TR: "Silikon, FDM ve Desteği 4 kafa üzerinde dilediğiniz gibi karıştırın." } },
      images: ["/images/fashion_detail.webp", "/images/robot1.webp"]
    },
    section4: {
      title: { EN: "Hybrid Capabilities: Any Tool, Any Slot Freedom", TR: "HİBRİT YETENEKLER: İSTEDİĞİN ARAÇ, İSTEDİĞİN KAFA" },
      p1: { EN: "Unleash total modularity with <strong class=\"text-[#f26522]\">Integrated Hybrid Support</strong>. Any of the 4 tool slots can be equipped with either a Silicone head or an industrial FDM extruder, providing unparalleled production flexibility.", TR: "Toplam modülerliği <strong class=\"text-[#f26522]\">Entegre Hibrit Desteği</strong> ile serbest bırakın. 4 kafa yuvasından herhangi biri, Silikon kafa veya endüstriyel bir FDM ekstrüderi ile donatılabilir; bu da benzersiz bir üretim esnekliği sağlar." },
      p2: { EN: "No fixed configurations. Seamlessly mix and match Silicone and FDM tools across 4 independent slots to build your perfect manufacturing setup. From multi-material elastomers to rigid-soft-support hybrids, the choice is yours.", TR: "Sabit konfigürasyonlara son. Kendi mükemmel üretim kurulumunuzu oluşturmak için 4 bağımsız yuva üzerinde Silikon ve FDM araçlarını dilediğiniz gibi birleştirin. Çok malzemeli elastomerlerden sert-yumuşak-destek hibritlerine kadar seçim tamamen size ait." },
      info: [
        { label: { EN: "Modular Slots", TR: "Modüler Yuvalar" }, val: { EN: "4 Tool-Change Stations", TR: "4 Kafa Değiştirme İstasyonu" } },
        { label: { EN: "Any Tool", TR: "İstediğin Araç" }, val: { EN: "Silicone, LSR, FDM, Support", TR: "Silikon, LSR, FDM, Destek" } }
      ],
      images: ["/images/industrial_spool_fallback.jpg", "/images/industrial_hero.png"]
    },
    cta: {
      title: { EN: "Ready to Start Your Project?", TR: "Projenize Başlamaya Hazır Mısınız?" },
      desc: { EN: "Contact our engineering team today to discuss your technical requirements and get a professional consultation.", TR: "Teknik gereksinimlerinizi tartışmak ve profesyonel danışmanlık almak için bugün mühendislik ekibimizle iletişime geçin." },
      button: { EN: "GET A QUOTE", TR: "TEKLİF ALIN" }
    },
    section5: {
      title: { EN: "Smart Ecosystem: Web-Based Control & Remote Monitoring", TR: "AKILLI EKOSİSTEM: WEB TABANLI KONTROL VE UZAKTAN İZLEME" },
      subtitle: { EN: "1. Intuitive Machine GUI | 2. Advanced Web Application", TR: "1. Sezgisel Makine Arayüzü (GUI) | 2. Gelişmiş Web Uygulaması" },
      desc: { EN: "LayersTech bridges the gap between hardware and user with a two-tier software approach. First, an on-machine Full-HD HMI screen provides raw, lag-free local control for daily operations. Second, a cross-platform web application allows for total remote management, live camera feeds, and multi-printer synchronization from any device, anywhere.", TR: "LayersTech, donanım ve kullanıcı arasındaki boşluğu iki aşamalı bir yazılım yaklaşımıyla doldurur. İlk olarak; makine üzerindeki Full-HD dokunmatik ekran (HMI), günlük operasyonlar için gecikmesiz, yerel kontrol sağlar. İkinci olarak; çapraz platform web uygulaması, her yerden ve her cihazdan toplam uzaktan yönetim, canlı kamera akışları ve çoklu yazıcı senkronizasyonu sunar." },
      features: [
        { EN: "Machine GUI (Local Control)", TR: "Makine Arayüzü (Yerel Kontrol)" },
        { EN: "Web Application (Remote Access)", TR: "Web Uygulaması (Uzaktan Erişim)" },
        { EN: "Real-time Monitoring", TR: "Gerçek Zamanlı İzleme" },
        { EN: "Secure Cloud Connectivity", TR: "Güvenli Bulut Bağlantısı" },
        { EN: "Live Camera Integration", TR: "Canlı Kamera Entegrasyonu" },
        { EN: "Global Multi-Printer Sync", TR: "Küresel Yazıcı Senkronizasyonu" }
      ],
      images: ["/images/yaz1.png", "/images/yaz2.png"]
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-[#1a1a1a] py-20 text-white relative overflow-hidden">
          {/* Subtle Background Watermark Logo */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
            <Image 
              src="/images/Saydam zeminde beyaz .svg" 
              alt="LayersTech Logo Watermark" 
              width={800} 
              height={800} 
              className="w-auto h-[120%] rotate-12"
            />
          </div>
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 mb-4">
              <a href="/" className="hover:text-white transition-colors">{t(content.header.breadcrumb.home)}</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t(content.header.breadcrumb.techs)}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-white uppercase tracking-tighter leading-none">{t(content.header.title)}</h1>
            <div className="w-20 h-1 bg-[#f26522]"></div>
          </div>
        </section>

        {/* Section 1: Industrial Silicone Leadership */}
        <section className="py-12 bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-white via-[#fffaf8] to-[#f26522]/15 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
              {/* Corner Watermark */}
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] transition-opacity dark:opacity-[0.05] pointer-events-none">
                <Image src="/images/Saydam zeminde siyah .svg" alt="logo" width={300} height={300} className="dark:invert" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] dark:text-white uppercase">{t(content.section1.title)}</h2>
                  </div>
                  <div className="space-y-6 text-[#777777] dark:text-white/50 text-sm leading-relaxed">
                    <p className="text-lg font-medium text-[#1a1a1a]/80 dark:text-white/80">
                      {t(content.section1.subtitle)}
                    </p>
                    <p>
                      {t(content.section1.desc)}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {content.section1.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-bold text-[#1a1a1a] dark:text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 group/img">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                     <SectorGallery images={content.section1.images} title={content.section1.title} t={t} priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Versatility & Support Material */}
        <section className="py-12 bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-[#F8F9FA] via-[#fffaf8] to-[#f26522]/15 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
              {/* Corner Watermark */}
              <div className="absolute bottom-0 left-0 p-10 opacity-[0.03] transition-opacity dark:opacity-[0.05] pointer-events-none">
                <Image src="/images/Saydam zeminde siyah .svg" alt="logo" width={300} height={300} className="dark:invert" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="group/img">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                     <SectorGallery images={content.section2.images} title={content.section2.title} t={t} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] dark:text-white uppercase">{t(content.section2.title)}</h2>
                  </div>
                  <div className="space-y-6 text-[#777777] dark:text-white/50 text-sm leading-relaxed">
                    <p className="text-lg dark:text-white/80" dangerouslySetInnerHTML={{ __html: t(content.section2.p1) }} />
                    <p>{t(content.section2.p2)}</p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {content.section2.stats.map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-gradient-to-br from-white via-[#fffaf8] to-[#f26522]/10 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[32px] shadow-xl border border-black/5 dark:border-white/10 hover:border-[#f26522]/50 transition-all duration-500 group">
                          <p className="text-4xl font-black text-[#f26522] mb-2 tracking-tighter group-hover:scale-110 transition-transform">{t(stat.value)}</p>
                          <p className="text-[10px] uppercase font-black text-black/60 dark:text-white/40 tracking-[0.2em] leading-tight">{t(stat.label)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Patented Thermal Crosslinking */}
        <section className="py-12 bg-transparent overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-br from-[#1a1c1e] via-[#1a1c1e] to-[#f26522]/10 rounded-[60px] p-12 md:p-20 border border-white/10 shadow-[0_0_100px_rgba(242,101,34,0.1)] relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-10 bg-[#f26522]/40 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/10 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] via-[#f26522]/5 to-transparent">
                  <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight text-[#FFF5F0] tracking-tighter">
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
          </div>
        </section>

        {/* Section 3: Multi-Shore Hardness & Functional Material Grading */}
        <section className="py-12 bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-white via-[#fffaf8] to-[#f26522]/15 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
              {/* Center Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
                <Image src="/images/MODEL LOGO_V2.svg" alt="LT Logo" width={800} height={800} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                      <Settings2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] dark:text-white uppercase">
                      {t(content.section3.title)}
                    </h2>
                  </div>
                  <div className="space-y-6 text-[#777777] dark:text-white/50 text-sm leading-relaxed">
                    <p className="text-lg font-medium text-[#1a1a1a]/80 dark:text-white/80" dangerouslySetInnerHTML={{ __html: t(content.section3.subtitle) }} />
                    <p dangerouslySetInnerHTML={{ __html: t(content.section3.desc) }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {content.section3.infoCards.map((card, i) => (
                        <div key={i} className="p-8 md:p-10 bg-gradient-to-br from-white/95 via-white/80 to-[#f26522]/10 dark:from-white/[0.03] dark:to-[#f26522]/5 rounded-[32px] md:rounded-[40px] border border-[#f26522]/40 dark:border-white/10 shadow-xl hover:border-[#f26522] transition-all duration-500 group">
                          <h4 className="font-black text-[#1a1a1a] dark:text-white text-xs mb-2 uppercase">{t(card.title)}</h4>
                          <p className="text-[11px]">{t(card.desc)}</p>
                        </div>
                      ))}
                    </div>
  
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {content.section3.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-bold text-[#1a1a1a] dark:text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 group/img">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                     <SectorGallery images={content.section3.images} title={content.section3.title} t={t} />
                     {/* Optional Technical Badge Overlay */}
                      <div className="absolute bottom-10 right-10 z-30 bg-[#1a1a1a]/95 backdrop-blur-md p-8 rounded-3xl border border-[#f26522]/30 dark:border-white/20 max-w-[220px] text-white shadow-2xl">
                        <p className="text-[10px] font-black tracking-widest text-[#f26522] mb-1 uppercase">{t(content.section3.badge.title)}</p>
                        <p className="text-[10px] opacity-70 leading-normal">{t(content.section3.badge.desc)}</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Hybrid FDM Capability */}
        <section className="py-12 bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-[#F8F9FA] via-[#fffaf8] to-[#f26522]/15 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="group/img">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98]">
                     <SectorGallery images={content.section4.images} title={content.section4.title} t={t} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                      <Settings2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] dark:text-white uppercase">{t(content.section4.title)}</h2>
                  </div>
                  <div className="space-y-6 text-[#1a1a1a]/60 dark:text-white/70 text-sm leading-relaxed">
                    <p className="text-lg text-[#1a1a1a]/80 dark:text-white/80" dangerouslySetInnerHTML={{ __html: t(content.section4.p1) }} />
                    <p>{t(content.section4.p2)}</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.section4.info.map((item, i) => (
                        <div key={i} className="bg-white dark:bg-white/[0.05] p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-500">
                          <p className="text-sm font-bold text-[#f26522] mb-1 tracking-tighter">{t(item.label)}</p>
                          <p className="text-[10px] text-[#1a1a1a]/50 dark:text-white/50 uppercase tracking-widest font-bold">{t(item.val)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Software & Connectivity */}
        <section className="py-12 bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-white via-[#fffaf8] to-[#f26522]/15 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#f26522]/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#f26522] flex items-center justify-center text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] dark:text-white uppercase">{t(content.section5.title)}</h2>
                  </div>
                  <div className="space-y-6 text-[#777777] dark:text-white/50 text-sm leading-relaxed">
                    <p className="text-lg font-medium text-[#1a1a1a]/80 dark:text-white/80">
                      {t(content.section5.subtitle)}
                    </p>
                    <p>
                      {t(content.section5.desc)}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {content.section5.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-bold text-[#1a1a1a] dark:text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 lg:order-2 group/img">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover/img:scale-[0.98] bg-[#f8f8f8] dark:bg-[#111]">
                     <SectorGallery images={content.section5.images} title={content.section5.title} t={t} />
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
