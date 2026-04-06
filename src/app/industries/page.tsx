"use client";

import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft,
  Stethoscope, 
  Plane, 
  Car, 
  Factory, 
  Smartphone, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function IndustriesPage() {
  const { t } = useLanguage();

  const sectors = [
    {
      id: "medical",
      icon: Stethoscope,
      title: {
        en: "Medical & Healthcare",
        tr: "MEDİKAL VE SAĞLIK"
      },
      badge: {
        en: "Highest Impact",
        tr: "En Güçlü Alan"
      },
      description: {
        en: "Biocompatible silicone and 4-head technology revolutionize medical manufacturing with varying hardness in a single part.",
        tr: "Silikonun biyouyumluluğu ve 4 kafa ile farklı sertlikleri aynı anda basabilme yeteneği tıbbi üretimde devrim yaratır."
      },
      items: [
        {
          name: { en: "Anatomical Models", tr: "ANATOMİK MODELLER" },
          detail: { 
            en: "Patient-specific pre-surgical models with realistic tissue feel (bone-hard internal, soft external).",
            tr: "Gerçek doku hissi veren (kemik sertliğinde iç yapı, yumuşak doku dış yapı) ameliyat öncesi prova modelleri."
          }
        },
        {
          name: { en: "Prosthetics & Orthotics", tr: "PROTEZ VE ORTEZLER" },
          detail: { 
            en: "Custom-fit parts with soft contact surfaces that prevent irritation and durable outer structures.",
            tr: "Vücuda tam oturan, tahriş etmeyen yumuşak temas yüzeyli ancak dayanıklı dış yapılı protez parçaları."
          }
        },
        {
          name: { en: "Soft Robotics", tr: "YUMUŞAK ROBOTİK" },
          detail: { 
            en: "Flexible, precision-engineered medical grippers for surgical applications.",
            tr: "Ameliyatlarda kullanılan esnek ve hassas hareket edebilen tıbbi tutucular."
          }
        }
      ],
      images: ["/images/kulak.jpg", "/images/el.webp", "/images/aort.webp"]
    },
    {
      id: "aerospace",
      icon: Plane,
      title: {
        en: "Aerospace & Defense",
        tr: "HAVACILIK VE SAVUNMA"
      },
      description: {
        en: "Critical sealing and extreme temperature resistance for high-performance applications.",
        tr: "Havacılıkta sızdırmazlık ve aşırı sıcaklık dayanımı kritiktir."
      },
      items: [
        {
          name: { en: "Custom Seals", tr: "ÖZEL CONTALAR" },
          detail: { 
            en: "Complex geometry fuel or air seals operating between -60°C and +250°C.",
            tr: "-60°C ile +250°C arası çalışan, karmaşık geometrili yakıt veya hava sızdırmazlık elemanları."
          }
        },
        {
          name: { en: "Vibration Damping", tr: "TİTREŞİM SÖNÜMLEYİCİLER" },
          detail: { 
            en: "Multi-shore shock absorbers designed to protect sensitive electronic devices.",
            tr: "Hassas elektronik cihazları korumak için farklı Shore değerlerinde basılmış darbe emici takozlar."
          }
        },
        {
          name: { en: "Cabin Insulation", tr: "KABİN İÇİ İZOLASYON" },
          detail: { 
            en: "Flame retardant silicone cable channels and connectors.",
            tr: "Yanmazlık (Flame Retardant) özelliği olan silikonlarla üretilen özel kablo kanalları."
          }
        }
      ],
      images: ["/images/hava1.jpg", "/images/hava2.webp", "/images/hava_ai.png"]
    },
    {
      id: "automotive",
      icon: Car,
      title: {
        en: "Automotive & Mobility",
        tr: "OTOMOTİV VE HAREKETLİLİK"
      },
      description: {
        en: "Eliminate tooling costs and deliver rapid solutions with real silicone properties.",
        tr: "Kalıp maliyetlerini ortadan kaldırarak gerçek silikon özellikleriyle hızlı çözümler sunar."
      },
      items: [
        {
          name: { en: "Functional Prototyping", tr: "FONKSİYONEL PROTOTİPLEME" },
          detail: { 
            en: "Pre-production hoses, bellows, and keypads with actual material performance.",
            tr: "Seri üretim öncesi gerçek silikon özelliklerine sahip hortumlar, körükler ve tuş takımları."
          }
        },
        {
          name: { en: "EV Battery Insulation", tr: "BATARYA İZOLASYONU" },
          detail: { 
            en: "High-insulation heat barriers for thermal management in electric vehicles.",
            tr: "Isı yönetimi gerektiren bölmelerde yüksek yalıtkanlık sağlayan silikon bariyerler."
          }
        },
        {
          name: { en: "Sensor Protectors", tr: "SENSÖR KORUYUCULAR" },
          detail: { 
            en: "Flexible, UV and oil-resistant enclosures for harsh outdoor environments.",
            tr: "UV, yağ ve dış ortama dayanıklı esnek sensör kılıfları."
          }
        }
      ],
      images: ["/images/oto1_ai.png", "/images/blue_gasket_ai.png", "/images/oto3.webp"]
    },
    {
      id: "robotics",
      icon: Factory,
      title: {
        en: "Industrial & Robotics",
        tr: "ENDÜSTRİYEL ÜRETİM VE ROBOTİK"
      },
      description: {
        en: "Make 'impossible' parts possible with 4-head technology and soluble supports.",
        tr: "4 kafa ve destek malzemesi ile 'imkansız' parçaları mümkün kılar."
      },
      items: [
        {
          name: { en: "Vacuum Grippers", tr: "VANTUZLAR VE TUTUCULAR" },
          detail: { 
            en: "Custom soft-touch grippers for handling delicate items without damage.",
            tr: "Ürünleri zarar vermeden kavrayabilen içi boş veya karmaşık yapılı vakum kafaları."
          }
        },
        {
          name: { en: "Lab Equipment", tr: "LABORATUVAR EKİPMANLARI" },
          detail: { 
            en: "Chemical-resistant custom tubes, connectors, and sealing caps.",
            tr: "Kimyasallara dayanıklı özel borular, bağlantı elemanları ve sızdırmazlık kapakları."
          }
        },
        {
          name: { en: "Food Industry", tr: "GIDA ENDÜSTRİSİ" },
          detail: { 
            en: "FDA-approved silicone parts for food production lines.",
            tr: "FDA onaylı silikonlarla basılmış gıda hatlarında güvenle kullanılabilen esnek parçalar."
          }
        }
      ],
      images: ["/images/robot1.webp", "/images/robot2.webp"]
    },
    {
      id: "electronics",
      icon: Smartphone,
      title: {
        en: "Consumer & Wearables",
        tr: "TÜKETİCİ VE GİYİLEBİLİR TEKNOLOJİ"
      },
      description: {
        en: "Ready-to-use seals and skin-friendly wearable prototypes with multi-hardness zones.",
        tr: "Cilde dost, farklı yumuşaklık bölgelerine sahip 'Ready-to-use' giyilebilir ürün prototipleri."
      },
      items: [
        {
          name: { en: "Smartwatch Straps", tr: "Akıllı Saat Kordonları" },
          detail: { 
            en: "Ergonomic, multi-durometer prototypes for high-end consumer devices.",
            tr: "Ergonomik, farklı yumuşaklık bölgelerine sahip giyilebilir teknoloji prototipleri."
          }
        },
        {
          name: { en: "IP Grade Seals", tr: "IP Sınıfı Contalar" },
          detail: { 
            en: "Custom-fit seals to protect devices from water and dust ingress.",
            tr: "Cihazları su ve tozdan koruyan, tam ölçüsünde basılmış contalar."
          }
        }
      ],
      images: ["/images/giyim1.jpg", "/images/giyim2.webp", "/images/giyim3.jpg"]
    }
  ];

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] py-32 md:py-48 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F26522] via-transparent to-transparent blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
                  <Link href="/" className="hover:text-white transition-colors">{t({EN: "Home", TR: "Anasayfa"})}</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white">{t({EN: "Industries", TR: "Sektörler"})}</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-[100px] font-black mb-8 uppercase tracking-tighter leading-[0.85] text-white">
                  {t({ EN: "Industries", TR: "HİZMET VERDİĞİMİZ" })} <br />
                  <span className="text-[#F26522]">{t({ EN: "We Serve.", TR: "SEKTÖRLER." })}</span>
                </h1>
                <p className="text-white/40 max-w-2xl text-xl font-light leading-relaxed mb-12">
                  {t({
                    en: "Tailored additive manufacturing solutions for the most demanding technical environments. From medical grade biocompatibility to aerospace-standard thermal resistance.",
                    tr: "En zorlu teknik ortamlar için özelleştirilmiş eklemeli imalat çözümleri. Medikal sınıf biyouyumluluktan havacılık standardı termal dirence kadar."
                  })}
                </p>
                <div className="w-32 h-1.5 bg-[#F26522] mx-auto lg:mx-0"></div>
              </div>
              <div className="flex-1 w-full max-w-xl lg:max-w-none">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F26522] to-white/10 rounded-[60px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative aspect-square overflow-hidden rounded-[60px] border border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl">
                    <Image 
                      src="/images/industrial_hero.png" 
                      alt="Industrial 3D Silicone Printing Hero" 
                      fill
                      unoptimized
                      priority
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Navigation Grid */}
        <section className="py-24 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {sectors.map((s) => (
                 <a 
                   key={s.id} 
                   href={`#${s.id}`}
                   className="flex flex-col items-center justify-center p-8 rounded-[30px] bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-[#F26522] dark:hover:border-[#F26522] shadow-md hover:shadow-xl transition-all group gap-4 text-center"
                 >
                    <s.icon className="w-8 h-8 text-black dark:text-white/60 group-hover:text-[#F26522] transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-white/40 group-hover:text-[#F26522]">{t(s.title)}</span>
                 </a>
               ))}
            </div>
          </div>
        </section>

        {/* Sectors Detail - Enhanced Glassmorphism & Split Hybrid */}
        {sectors.map((sector, idx) => {
          const isDarkSection = idx % 2 === 1;
          return (
            <section 
              id={sector.id} 
              key={sector.id} 
              className={`py-32 relative overflow-hidden transition-colors duration-500 ${
                isDarkSection 
                  ? 'bg-[#1a1a1a] text-white' 
                  : 'bg-[#fcfcfc] dark:bg-[#0c0c0c] text-black dark:text-white'
              }`}
            >
              {/* Background Accent for Silicone Look */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-10 pointer-events-none transition-all duration-1000 ${isDarkSection ? 'bg-[#F26522]/40' : 'bg-[#F26522]/20'}`}></div>

              <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                 <div className={`flex flex-col lg:flex-row gap-20 items-center ${isDarkSection ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Left Side: Technical Info with Glassmorphism & Color Gradient */}
                    <div className="flex-1 space-y-10">
                       <div className={`p-10 rounded-[50px] border backdrop-blur-3xl transition-all duration-700 shadow-2xl ${
                         isDarkSection 
                           ? 'bg-gradient-to-br from-white/[0.05] via-[#F26522]/5 to-transparent border-white/10 shadow-black/40 hover:from-white/[0.08] hover:via-[#F26522]/10' 
                           : 'bg-gradient-to-br from-white/95 via-white/80 to-[#F26522]/10 dark:from-white/5 dark:via-[#F26522]/5 dark:to-transparent border-black/10 dark:border-white/10 hover:to-[#F26522]/20 dark:hover:via-[#F26522]/10 shadow-xl shadow-black/5'
                       }`}>
                          <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none ${isDarkSection ? 'text-white' : 'text-[#1a1a1a] dark:text-white'}`}>
                            {t(sector.title)}
                          </h2>
                          <p className={`text-xl font-light leading-relaxed mb-10 ${isDarkSection ? 'text-white/60' : 'text-black/60 dark:text-white/40'}`}>
                            {t(sector.description)}
                          </p>

                          <div className="space-y-6">
                             {sector.items.map((item, i) => (
                               <div key={i} className={`group border-l-2 pl-6 transition-colors duration-500 ${isDarkSection ? 'border-white/10 hover:border-[#F26522]' : 'border-[#F26522]/20 hover:border-[#F26522]'}`}>
                                  <h4 className={`text-lg font-bold uppercase tracking-tight transition-colors mb-1 ${isDarkSection ? 'text-white group-hover:text-[#F26522]' : 'text-[#1a1a1a] dark:text-white/90 group-hover:text-[#F26522]'}`}>
                                    {t(item.name)}
                                  </h4>
                                  <p className={`leading-relaxed text-sm font-light ${isDarkSection ? 'text-white/40' : 'text-black/50 dark:text-white/40'}`}>
                                    {t(item.detail)}
                                  </p>
                               </div>
                             ))}
                          </div>
                          
                          <div className="pt-10 border-t border-black/5 dark:border-white/5 mt-10">
                             <Link 
                                href="/contact" 
                                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] transition-all group ${isDarkSection ? 'text-white hover:text-[#F26522]' : 'text-[#1a1a1a] dark:text-white hover:text-[#F26522]'}`}
                             >
                                {t({ EN: "Request Application Guide", TR: "Uygulama Kılavuzu İste" })}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                             </Link>
                          </div>
                       </div>
                    </div>

                    {/* Right Side: High-Detail Visual with Auto-Sliding Carousel */}
                    <div className="flex-1 w-full group/img">
                       <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover/img:scale-[0.98] border border-white/5 bg-[#f8f8f8] dark:bg-[#1a1a1a]">
                          <SectorGallery images={sector.images} title={sector.title} t={t} />
                       </div>
                    </div>
                 </div>
              </div>
            </section>
          );
        })}

        {/* Final CTA */}
        <section className="py-40 bg-[#0a0a0a] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter text-white leading-none">
               {t({ EN: "Ready for the", TR: "Sıradaki Devrime" })} <br /> 
               <span className="text-[#F26522]">{t({ EN: "Industrial Revolution?", TR: "Hazır mısınız?" })}</span>
            </h2>
            <p className="mb-16 text-white/40 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              {t({
                en: "Contact our engineering team to discuss your multi-material and high-performance silicone requirements.",
                tr: "Çoklu malzeme ve yüksek performanslı silikon gereksinimlerinizi görüşmek için mühendislik ekibimizle iletişime geçin."
              })}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="group/cta relative bg-[#F26522] text-white px-16 py-8 rounded-full font-black tracking-[0.3em] text-[12px] overflow-hidden shadow-2xl transition-all hover:scale-110 active:scale-95">
                <span className="relative z-10 text-white group-hover/cta:text-[#1a1a1a] transition-colors duration-500">{t({ EN: "CONSULT AN EXPERT", TR: "UZMANA DANIŞIN" })}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500"></div>
              </Link>
              <Link href="/3d-printers/m1pro" className="group/cta2 px-16 py-8 rounded-full font-black tracking-[0.3em] text-[12px] bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-4">
                {t({ EN: "EXPLORE M1PRO SYSTEM", TR: "M1PRO SİSTEMİNİ KEŞFET" })}
                <ArrowRight className="w-5 h-5 group-hover/cta2:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}



