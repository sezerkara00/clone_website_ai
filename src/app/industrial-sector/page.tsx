"use client";

import React from "react";
import { 
  ChevronRight, 
  Stethoscope, 
  Plane, 
  Car, 
  Factory, 
  Smartphone, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustrialSector() {
  const { t } = useLanguage();

  const sectors = [
    {
      id: "medical",
      icon: Stethoscope,
      title: {
        en: "Medical & Healthcare",
        tr: "Medikal ve Sağlık"
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
          name: { en: "Anatomical Models", tr: "Anatomik Modeller" },
          detail: { 
            en: "Patient-specific pre-surgical models with realistic tissue feel (bone-hard internal, soft external).",
            tr: "Gerçek doku hissi veren (kemik sertliğinde iç yapı, yumuşak doku dış yapı) ameliyat öncesi prova modelleri."
          }
        },
        {
          name: { en: "Prosthetics & Orthotics", tr: "Protez ve Ortezler" },
          detail: { 
            en: "Custom-fit parts with soft contact surfaces that prevent irritation and durable outer structures.",
            tr: "Vücuda tam oturan, tahriş etmeyen yumuşak temas yüzeyli ancak dayanıklı dış yapılı protez parçaları."
          }
        },
        {
          name: { en: "Soft Robotics", tr: "Yumuşak Robotik" },
          detail: { 
            en: "Flexible, precision-engineered medical grippers for surgical applications.",
            tr: "Ameliyatlarda kullanılan esnek ve hassas hareket edebilen tıbbi tutucular."
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1584982329699-0915a6ba4321?w=800&q=80"
    },
    {
      id: "aerospace",
      icon: Plane,
      title: {
        en: "Aerospace & Defense",
        tr: "Havacılık ve Savunma"
      },
      description: {
        en: "Critical sealing and extreme temperature resistance for high-performance applications.",
        tr: "Havacılıkta sızdırmazlık ve aşırı sıcaklık dayanımı kritiktir."
      },
      items: [
        {
          name: { en: "Custom Seals", tr: "Özel Contalar" },
          detail: { 
            en: "Complex geometry fuel or air seals operating between -60°C and +250°C.",
            tr: "-60°C ile +250°C arası çalışan, karmaşık geometrili yakıt veya hava sızdırmazlık elemanları."
          }
        },
        {
          name: { en: "Vibration Damping", tr: "Titreşim Sönümleyiciler" },
          detail: { 
            en: "Multi-shore shock absorbers designed to protect sensitive electronic devices.",
            tr: "Hassas elektronik cihazları korumak için farklı Shore değerlerinde basılmış darbe emici takozlar."
          }
        },
        {
          name: { en: "Cabin Insulation", tr: "Kabin İçi İzolasyon" },
          detail: { 
            en: "Flame retardant silicone cable channels and connectors.",
            tr: "Yanmazlık (Flame Retardant) özelliği olan silikonlarla üretilen özel kablo kanalları."
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80"
    },
    {
      id: "automotive",
      icon: Car,
      title: {
        en: "Automotive & Mobility",
        tr: "Otomotiv ve Hareketlilik"
      },
      description: {
        en: "Eliminate tooling costs and deliver rapid solutions with real silicone properties.",
        tr: "Kalıp maliyetlerini ortadan kaldırarak gerçek silikon özellikleriyle hızlı çözümler sunar."
      },
      items: [
        {
          name: { en: "Functional Prototyping", tr: "Fonksiyonel Prototipleme" },
          detail: { 
            en: "Pre-production hoses, bellows, and keypads with actual material performance.",
            tr: "Seri üretim öncesi gerçek silikon özelliklerine sahip hortumlar, körükler ve tuş takımları."
          }
        },
        {
          name: { en: "EV Battery Insulation", tr: "Batarya İzolasyonu" },
          detail: { 
            en: "High-insulation heat barriers for thermal management in electric vehicles.",
            tr: "Isı yönetimi gerektiren bölmelerde yüksek yalıtkanlık sağlayan silikon bariyerler."
          }
        },
        {
          name: { en: "Sensor Protectors", tr: "Sensör Koruyucular" },
          detail: { 
            en: "Flexible, UV and oil-resistant enclosures for harsh outdoor environments.",
            tr: "UV, yağ ve dış ortama dayanıklı esnek sensör kılıfları."
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
    },
    {
      id: "robotics",
      icon: Factory,
      title: {
        en: "Industrial & Robotics",
        tr: "Endüstriyel Üretim ve Robotik"
      },
      description: {
        en: "Make 'impossible' parts possible with 4-head technology and soluble supports.",
        tr: "4 kafa ve destek malzemesi ile 'imkansız' parçaları mümkün kılar."
      },
      items: [
        {
          name: { en: "Vacuum Grippers", tr: "Vantuzlar ve Tutucular" },
          detail: { 
            en: "Custom soft-touch grippers for handling delicate items without damage.",
            tr: "Ürünleri zarar vermeden kavrayabilen içi boş veya karmaşık yapılı vakum kafaları."
          }
        },
        {
          name: { en: "Lab Equipment", tr: "Laboratuvar Ekipmanları" },
          detail: { 
            en: "Chemical-resistant custom tubes, connectors, and sealing caps.",
            tr: "Kimyasallara dayanıklı özel borular, bağlantı elemanları ve sızdırmazlık kapakları."
          }
        },
        {
          name: { en: "Food Industry", tr: "Gıda Endüstrisi" },
          detail: { 
            en: "FDA-approved silicone parts for food production lines.",
            tr: "FDA onaylı silikonlarla basılmış gıda hatlarında güvenle kullanılabilen esnek parçalar."
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1565043581454-220239ed75d4?w=800&q=80"
    },
    {
      id: "electronics",
      icon: Smartphone,
      title: {
        en: "Consumer & Wearables",
        tr: "Tüketici ve Giyilebilir Teknoloji"
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
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white" suppressHydrationWarning>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F26522] via-transparent to-transparent blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
              <a href="/" className="hover:text-white transition-colors">{t({EN: "Home", TR: "Anasayfa"})}</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t({EN: "Industrial", TR: "Endüstriyel"})}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none text-white">
              Industry <br />
              <span className="text-[#F26522]">Focus.</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-xl font-light leading-relaxed mb-12">
              {t({
                en: "Tailored additive manufacturing solutions for the most demanding technical environments. From medical grade biocompatibility to aerospace-standard thermal resistance.",
                tr: "En zorlu teknik ortamlar için özelleştirilmiş eklemeli imalat çözümleri. Medikal sınıf biyouyumluluktan havacılık standardı termal dirence kadar."
              })}
            </p>
            <div className="w-32 h-1.5 bg-[#F26522] mx-auto md:mx-0"></div>
          </div>
        </section>

        {/* Industry Navigation Grid */}
        <section className="py-24 border-b border-black/5 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {sectors.map((s) => (
                 <a 
                   key={s.id} 
                   href={`#${s.id}`}
                   className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#fcfcfc] border border-black/5 hover:border-[#F26522] hover:bg-white transition-all group gap-4 text-center"
                 >
                    <s.icon className="w-8 h-8 text-black group-hover:text-[#F26522] transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t(s.title)}</span>
                 </a>
               ))}
            </div>
          </div>
        </section>

        {/* Sectors Detail */}
        {sectors.map((sector, idx) => (
          <section 
            id={sector.id} 
            key={sector.id} 
            className={`py-32 ${idx % 2 === 1 ? 'bg-[#fcfcfc]' : 'bg-white'}`}
          >
            <div className="container mx-auto px-6 max-w-[1400px]">
               <div className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-12">
                     <div>
                        {sector.badge && (
                          <span className="px-4 py-1.5 bg-[#F26522]/10 text-[#F26522] rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            {t(sector.badge)}
                          </span>
                        )}
                        <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-8 leading-none">
                          {t(sector.title)}
                        </h2>
                        <p className="text-xl text-black/60 font-light leading-relaxed">
                          {t(sector.description)}
                        </p>
                     </div>

                     <div className="space-y-8">
                        {sector.items.map((item, i) => (
                          <div key={i} className="group border-l-2 border-black/5 pl-8 hover:border-[#F26522] transition-colors">
                             <h4 className="text-xl font-bold text-[#1a1a1a] mb-2 uppercase tracking-tight group-hover:text-[#F26522] transition-colors">
                               {t(item.name)}
                             </h4>
                             <p className="text-black/60 leading-relaxed text-sm">
                               {t(item.detail)}
                             </p>
                          </div>
                        ))}
                     </div>
                     
                     <div className="pt-8">
                        <button className="flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#F26522] transition-all group">
                           Request Industry Guide
                           <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                     </div>
                  </div>
                  <div className="flex-1 w-full">
                     <div className="aspect-[4/5] rounded-[50px] overflow-hidden shadow-2xl relative bg-black/5">
                        <img 
                          src={sector.image} 
                          alt={t(sector.title)} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </div>
                  </div>
               </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="py-32 bg-[#1a1a1a] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter text-white text-white">Ready for the <br /> <span className="text-[#F26522]">Next Industrial Revolution?</span></h2>
            <p className="mb-12 text-white/50 max-w-2xl mx-auto text-xl font-light">
              Contact our engineering team to discuss your multi-material and high-performance silicone requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="bg-[#F26522] text-white px-12 py-6 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all shadow-2xl">
                CONSULT AN EXPERT
              </a>
              <a href="/3d-printers/m1pro" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-full font-black tracking-[0.2em] text-[11px] hover:bg-white/10 transition-all backdrop-blur-sm">
                EXPLORE M1PRO SYSTEM
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
