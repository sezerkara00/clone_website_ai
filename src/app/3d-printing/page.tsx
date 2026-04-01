"use client";

import React from "react";
import { ChevronRight, Box, Layers, Zap, Settings2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
      ]
    },
    section2: {
      title: { EN: "LayersTech 4-Extruder Technology: Multimaterial and Dissolvable Support", TR: "LayersTech 4-Ekstrüder Teknolojisi: Çok Malzemeli ve Çözünür Destek" },
      p1: { EN: "Engineers face constant challenges with complex geometries. Our <strong class=\"text-heading\">Dissolvable Support</strong> solves this by allowing intricate internal structures that are impossible with standard methods.", TR: "Mühendisler karmaşık geometrilerde sürekli zorluklarla karşılaşır. <strong class=\"text-heading\">Çözünür Destek</strong> teknolojimiz, standart yöntemlerle imkansız olan karmaşık iç yapıları mümkün kılarak bu sorunu çözer." },
      p2: { EN: "With four independent heads, you can utilize 3 different silicone materials plus 1 dedicated dissolvable support head, ensuring flawless surface finishes and geometric freedom for your most complex parts.", TR: "Dört bağımsız kafa sayesinde, en karmaşık parçalarınız için kusursuz yüzey kalitesi ve geometrik özgürlük sağlayan 3 farklı silikon malzeme artı 1 özel çözünür destek kafası kullanabilirsiniz." },
      stats: [
        { label: { EN: "Hybrid Config", TR: "Hibrit Yapı" }, value: { EN: "3+1", TR: "3+1" } },
        { label: { EN: "Geometry Limit", TR: "Geometri Sınırı" }, value: { EN: "Zero", TR: "Sıfır" } },
        { label: { EN: "Dissolvable", TR: "Çözünür" }, value: { EN: "100%", TR: "100%" } }
      ]
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
      badge: { title: { EN: "Dynamic Hardness", TR: "Dinamik Sertlik" }, desc: { EN: "Achieve Shore A5 (Ultra-Soft) and Shore A80 (Rigid) within the same geometric boundary.", TR: "Aynı geometrik sınır içinde Shore A5 (Ultra Yumuşak) ve Shore A80 (Sert) elde edin." } }
    },
    section4: {
      title: { EN: "Hybrid Capabilities: Optional FDM Printing Support", TR: "Hibrit Yetenekler: Opsiyonel FDM Baskı Desteği" },
      p1: { EN: "Expand your manufacturing range with <strong class=\"text-heading\">Integrated FDM Support</strong>. LayersTech systems are optionally configurable to handle standard thermoplastic filaments alongside silicone.", TR: "İmalat yelpazenizi <strong class=\"text-heading\">Entegre FDM Desteği</strong> ile genişletin. LayersTech sistemleri, silikonun yanı sıra standart termoplastik filamentleri de işleyecek şekilde opsiyonel olarak yapılandırılabilir." },
      p2: { EN: "This versatility makes our printers the ultimate tool for R&D departments and production facilities that need both high-performance elastomers and rigid functional components in one workspace.", TR: "Bu çok yönlülük, yazıcılarımızı tek bir çalışma alanında hem yüksek performanslı elastomerlere hem de sert fonksiyonel bileşenlere ihtiyaç duyan Ar-Ge departmanları ve üretim tesisleri için nihai araç haline getirir." },
      info: [
        { label: { EN: "FDM Support", TR: "FDM Desteği" }, val: { EN: "Standard & Advanced Filaments", TR: "Standart ve Gelişmiş Filamentler" } },
        { label: { EN: "All-in-One", TR: "Hepsi Bir Arada" }, val: { EN: "Single Industrial Platform", TR: "Tek Endüstriyel Platform" } }
      ]
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
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Section 1: Industrial Silicone Leadership */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading uppercase">{t(content.section1.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg font-medium text-heading/80">
                    {t(content.section1.subtitle)}
                  </p>
                  <p>
                    {t(content.section1.desc)}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {content.section1.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-bold text-heading">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/images/all-printer-s300xliq.webp" alt="Silicone 3D Printer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Versatility & Support Material */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/images/3d-silicone-printing--use-case--hp.webp" alt="Silicone Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading uppercase">{t(content.section2.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t(content.section2.p1) }} />
                  <p>{t(content.section2.p2)}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {content.section2.stats.map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm border border-black/5">
                        <p className="text-xl font-black text-primary">{t(stat.value)}</p>
                        <p className="text-[10px] uppercase font-bold text-heading/50">{t(stat.label)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Patented Thermal Crosslinking */}
        <section className="py-24 bg-[#1a1c1e] text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase leading-tight text-white">
                  {t(content.thermal.title)}: <br/>
                  <span className="text-primary">{t(content.thermal.subtitle)}</span>
                </h2>
                <div className="space-y-6 text-white/70 text-sm">
                  <p className="text-lg text-white/90" dangerouslySetInnerHTML={{ __html: t(content.thermal.p1) }} />
                  <p>{t(content.thermal.p2)}</p>
                  <div className="grid grid-cols-2 gap-6 mt-10">
                    {content.thermal.cards.map((card, i) => (
                      <div key={i} className="border-l-2 border-primary pl-4">
                        <h4 className="font-black text-white uppercase text-xs mb-1">{t(card.title)}</h4>
                        <p className="text-[11px]">{t(card.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full aspect-square max-w-md rounded-full border border-white/10 p-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 animate-pulse bg-primary/5 rounded-full"></div>
                  <div className="text-primary opacity-50 relative">
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
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading uppercase">
                    {t(content.section3.title)}
                  </h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p className="text-lg font-medium text-heading/80" dangerouslySetInnerHTML={{ __html: t(content.section3.subtitle) }} />
                  <p dangerouslySetInnerHTML={{ __html: t(content.section3.desc) }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {content.section3.infoCards.map((card, i) => (
                      <div key={i} className="p-4 bg-[#F8F9FA] rounded-xl border-l-4 border-primary">
                        <h4 className="font-black text-heading text-xs mb-2 uppercase">{t(card.title)}</h4>
                        <p className="text-[11px]">{t(card.desc)}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {content.section3.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-bold text-heading">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                     <img src="/images/lynxter-detail-3dprinting-softrobot-silicone.webp" alt="Multi-Durometer Silicone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  {/* Teknik Bilgi Kartı */}
                  <div className="absolute -bottom-6 -left-6 bg-heading text-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                    <p className="text-[10px] uppercase tracking-widest mb-2 text-primary">{t(content.section3.badge.title)}</p>
                    <p className="text-xs leading-relaxed font-medium">
                      {t(content.section3.badge.desc)}
                    </p>
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
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/images/industrial_spool_fallback.jpg" alt="Hybrid FDM Printing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-heading uppercase">{t(content.section4.title)}</h2>
                </div>
                <div className="space-y-6 text-[#777777] text-sm leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t(content.section4.p1) }} />
                  <p>{t(content.section4.p2)}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {content.section4.info.map((item, i) => (
                      <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-black/5">
                        <p className="text-sm font-bold text-heading mb-1 text-primary">{t(item.label)}</p>
                        <p className="text-[10px] text-[#777777]">{t(item.val)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Haus */}
        <section className="py-20 primary-gradient text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-wider">{t(content.cta.title)}</h2>
            <p className="mb-10 text-white/80 max-w-2xl mx-auto">
              {t(content.cta.desc)}
            </p>
            <a href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded font-black tracking-widest hover:bg-heading hover:text-white transition-all shadow-xl">
              {t(content.cta.button)}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
