"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Lucide from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Asset URLs mapping
const materialImages = {
  pla: "/images/materials/pla.jpg",
  abs: "/images/materials/abs.jpg",
  pva: "/images/materials/pva.jpg",
  hips: "/images/materials/hips.jpg",
  tpu: "/images/materials/tpu.jpg",
  cbn: "/images/materials/cbn.jpg",
  pc: "/images/materials/pc.jpg",
  petg: "/images/materials/petg.jpg",
  lsr: "/images/materials/lsr.jpg",
  rtv: "/images/materials/rtv.jpg",
};

interface Translation {
  EN: string;
  TR: string;
}

interface Feature {
  title: Translation;
  desc: Translation;
  bullets: Translation[];
  image: string;
}

interface Material {
  name: string;
  icon: string;
  type: Translation;
}

interface SpecItem {
  label: Translation;
  value: Translation;
}

interface SpecSection {
  category: Translation;
  items: SpecItem[];
}

interface Product {
  name: string;
  subtitle: Translation;
  description: Translation;
  image: string;
  features: Feature[];
  materials: Material[];
  specs: SpecSection[];
}

const productData: Record<string, Product> = {
  m1: {
    name: "LayersTech M1",
    subtitle: { EN: "Industrial FFF/FDM 3D Printer", TR: "Endüstriyel FFF/FDM 3D Yazıcı" },
    description: { EN: "Built for repeatable, production-ready parts with high-temperature capability and advanced AI monitoring. Engineered for industrial 24/7 reliability.", TR: "Yüksek sıcaklık kapasitesi ve gelişmiş AI izleme ile tekrarlanabilir, üretime hazır parçalar için tasarlandı. Endüstriyel 7/24 güvenilirlik için geliştirildi." },
    image: "/images/m1pro_dark.png",
    features: [
      {
        title: { EN: "Industrial Stability, Thermal Control, Consistent Output", TR: "Endüstriyel Stabilite, Termal Kontrol, Tutarlı Çıktı" },
        desc: { EN: "LayersTech M1 is engineered for stable, repeatable FFF/FDM production. A rigid industrial frame and enclosed chamber reduce external variation, while PID-controlled temperatures keep the bed, nozzle, and chamber steady throughout long print cycles. This results in predictable layer placement, consistent dimensions, and reliable surface finish—run after run.", TR: "LayersTech M1, stabil, tekrarlanabilir FFF/FDM üretimi için tasarlandı. Sert endüstriyel gövde ve kapalı kabin dış varyasyonları azaltırken, PID kontrollü sıcaklıklar uzun baskı döngüleri boyunca yatak, nozül ve kabini sabit tutar. Bu, her seferinde öngörülebilir katman yerleşimi, tutarlı boyutlar ve güvenilir yüzey kalitesi sağlar." },
        bullets: [
          { EN: "300 × 300 × 320 mm build volume for functional parts and fixtures", TR: "Fonksiyonel parçalar ve fikstürler için 300 × 300 × 320 mm baskı hacmi" },
          { EN: "PID control: bed up to 140°C, nozzle up to 380°C, chamber up to 65°C", TR: "PID kontrolü: 140°C'ye kadar yatak, 380°C'ye kadar nozül, 65°C'ye kadar kabin" },
          { EN: "Enclosed, insulated chamber for more stable printing conditions", TR: "Daha stabil baskı koşulları için kapalı, yalıtımlı kabin" },
          { EN: "Engineered for industrial 24/7 production reliability", TR: "Endüstriyel 7/24 üretim güvenilirliği için üretildi" }
        ],
        image: "/images/w_parts.png"
      },
      {
        title: { EN: "High-Throughput Multi-Material Printing (4-Tool System)", TR: "Yüksek Verimli Çoklu Malzeme Baskısı (4-Araçlık Sistem)" },
        desc: { EN: "Built for speed and flexibility, M1 uses a direct-drive toolhead with four interchangeable tool slots—ideal for fast multi-color prints or multi-material workflows without constant manual swapping. From prototyping to small-batch runs, the system is designed to keep throughput high and downtime low.", TR: "Hız ve esneklik için tasarlanan M1, sürekli manuel değiştirme gerektirmeden hızlı çok renkli baskılar veya çoklu malzeme iş akışları için ideal olan, dört değiştirilebilir araç yuvasına sahip doğrudan tahrikli bir araç kafası kullanır. Prototiplemeden küçük parti üretimlere kadar sistemi yüksek verimlilik ve düşük kesinti süresi ile çalıştırmak için tasarlandı." },
        bullets: [
          { EN: "4-tool workflow for multi-color or multi-material printing", TR: "Çoklu renk veya çoklu malzeme baskısı için 4 araçlık iş akışı" },
          { EN: "Direct-drive extrusion for responsive material control", TR: "Hassas malzeme kontrolü için doğrudan tahrikli ekstrüzyon" },
          { EN: "Optimized for repeatable production runs and continuous operation", TR: "Tekrarlanabilir üretim çalışmaları ve sürekli operasyon için optimize edildi" },
          { EN: "Compatible with additional tool types for expanding use cases", TR: "Genişleyen kullanım senaryoları için ek araç türleriyle uyumlu" }
        ],
        image: "/images/tools.png"
      },
      {
        title: { EN: "Smart Calibration: Automatic Z + Camera-Assisted XY Alignment", TR: "Akıllı Kalibrasyon: Otomatik Z + Kamera Destekli XY Hizalama" },
        desc: { EN: "M1 reduces setup time with calibration tools designed for production. Eddy-current sensing enables automatic nozzle Z offset control for consistent first layers, while camera-assisted calibration makes XY offset alignment quicker and more repeatable—especially valuable in multi-tool configurations.", TR: "M1, üretim için tasarlanmış kalibrasyon araçlarıyla kurulum süresini azaltır. Eddy akımı algılama, tutarlı ilk katmanlar için otomatik nozül Z ofseti kontrolü sağlarken, kamera destekli kalibrasyon XY ofseti hizalamasını daha hızlı ve tekrarlanabilir hale getirir — özellikle çoklu araç yapılandırmalarında çok değerlidir." },
        bullets: [
          { EN: "Eddy-current sensing for automatic nozzle Z offset control", TR: "Otomatik nozül Z ofseti kontrolü için Eddy akımı algılama" },
          { EN: "Camera-assisted XY offset calibration for faster alignment", TR: "Daha hızlı hizalama için kamera destekli XY ofseti kalibrasyonu" },
          { EN: "Better repeatability when switching tools/materials", TR: "Araçları/malzemeleri değiştirirken daha iyi tekrarlanabilirlik" },
          { EN: "More reliable first layers with less trial-and-error", TR: "Daha az deneme-yanılma ile daha güvenilir ilk katmanlar" }
        ],
        image: "/images/smart-calibration.png"
      },
      {
        title: { EN: "AI Print Monitoring: Catch Failures Early, Save Time and Material", TR: "Yapay Zeka Baskı İzleme: Hataları Erken Yakalayın, Zaman ve Malzeme Tasarrufu Sağlayın" },
        desc: { EN: "Production reliability depends on visibility. M1’s chamber camera and AI monitoring help detect common failures—such as “spaghetti” errors—early in the process. This improves supervision during long prints, reduces wasted material, and helps teams run jobs with more confidence.", TR: "Üretim güvenilirliği görünürlüğe bağlıdır. M1'in kabin kamerası ve yapay zeka izlemesi, süreçteki 'spagetti' hataları gibi yaygın sorunları erken tespit etmeye yardımcı olur. Bu, uzun baskılar sırasında denetimi artırır, boşa giden malzemeyi azaltır ve ekiplerin daha güvenle iş yapmasına yardımcı olur." },
        bullets: [
          { EN: "Chamber monitoring for real-time visibility", TR: "Gerçek zamanlı görünürlük için kabin izleme" },
          { EN: "AI detection for spaghetti/print failure indicators", TR: "Spagetti/baskı hatası göstergeleri için yapay zeka tespiti" },
          { EN: "Print cycle monitoring for better production oversight", TR: "Daha iyi üretim denetimi için baskı döngüsü izleme" },
          { EN: "Supports more reliable unattended printing", TR: "Daha güvenilir gözetimsiz baskıyı destekler" }
        ],
        image: "/images/spaghetti.png"
      },
      {
        title: { EN: "Materials, Software, and Secure Connectivity for Teams", TR: "Ekipler için Malzemeler, Yazılım ve Güvenli Bağlantı" },
        desc: { EN: "M1 supports a wide range of materials—from general-purpose plastics to advanced engineering polymers—backed by a modern software stack. Compatibility with popular slicers, plus secure identity and organization controls, makes it suitable for professional environments where access, accountability, and remote workflows matter.", TR: "M1, genel amaçlı plastiklerden gelişmiş mühendislik polimerlerine kadar geniş bir malzeme yelpazesini modern bir yazılım yapısıyla destekler. Popüler dilimleyicilerle uyumluluğun yanı sıra güvenli kimlik ve organizasyon kontrolleri, erişim, hesap verebilirlik ve uzaktan iş akışlarının önemli olduğu profesyonel ortamlar için uygun hale getirir." },
        bullets: [
          { EN: "Materials support: PLA/ABS/PETG/ASA and engineering polymers (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)", TR: "Malzeme desteği: PLA/ABS/PETG/ASA ve mühendislik polimerleri (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)" },
          { EN: "Slicer compatibility: PrusaSlicer, Orca Slicer, LayersTech Slicer", TR: "Dilimleyici uyumluluğu: PrusaSlicer, Orca Slicer, LayersTech Slicer" },
          { EN: "Secure access: 2FA, organization admin roles, SSO", TR: "Güvenli erişim: 2FA, organizasyon yönetici rolleri, SSO" },
          { EN: "Ethernet connectivity and wireless updates; remote access and camera workflow", TR: "Ethernet bağlantısı ve kablosuz güncellemeler; uzaktan erişim ve kamera iş akışı" }
        ],
        image: "/images/parts.png"
      },
      {
        title: { EN: "Support & Service for Production Teams", TR: "Üretim Ekipleri için Destek ve Servis" },
        desc: { EN: "Support that keeps production moving. LayersTech M1 is backed by a professional service workflow designed for industrial uptime—from onboarding and operator guidance to remote assistance and preventive maintenance planning. Teams can monitor prints via the chamber camera, manage jobs over the network, and keep systems updated through secure connectivity features.", TR: "Üretimi devam ettiren destek. LayersTech M1, eğitime ve operatör yönlendirmesinden uzaktan yardıma ve önleyici bakım planlamasına kadar endüstriyel çalışma süresi için tasarlanmış profesyonel bir servis akışına sahiptir. Ekipler, kabin kamerası ile baskıları izleyebilir, ağ üzerinden işleri yönetebilir ve güvenli bağlantı özellikleri ile sistemleri güncel tutabilir." },
        bullets: [
          { EN: "Setup onboarding and operator guidance", TR: "Kurulum eğitimi ve operatör yönlendirmesi" },
          { EN: "Remote support-ready workflow with camera visibility", TR: "Kamera görünürlüğü ile uzaktan desteğe hazır iş akışı" },
          { EN: "Maintenance planning for long-term reliability", TR: "Uzun vadeli güvenilirlik için bakım planlaması" },
          { EN: "Secure access controls (2FA / roles / SSO) for team environments", TR: "Ekip ortamları için güvenli erişim kontrolleri (2FA / roller / SSO)" }
        ],
        image: "/images/support.png"
      }
    ],
    materials: [
      { name: "PLA", icon: materialImages.pla, type: { EN: "Standard", TR: "Standart" } },
      { name: "ABS", icon: materialImages.abs, type: { EN: "Standard", TR: "Standart" } },
      { name: "PVA", icon: materialImages.pva, type: { EN: "Support", TR: "Destek" } },
      { name: "HIPS", icon: materialImages.hips, type: { EN: "Support", TR: "Destek" } },
      { name: "TPU", icon: materialImages.tpu, type: { EN: "Flexible", TR: "Esnek" } },
      { name: "CARBON FIBER", icon: materialImages.cbn, type: { EN: "Composite", TR: "Kompozit" } },
      { name: "PC", icon: materialImages.pc, type: { EN: "Engineering", TR: "Mühendislik" } },
      { name: "PETG", icon: materialImages.petg, type: { EN: "Standard", TR: "Standart" } }
    ],
    specs: [
      {
        category: { EN: "System Specifications", TR: "Sistem Özellikleri" },
        items: [
          { label: { EN: "Printing Process", TR: "Baskı İşlemi" }, value: { EN: "FFF (Fused Filament Fabrication)", TR: "FFF (Erimiş Filament Üretimi)" } },
          { label: { EN: "Build Volume", TR: "Baskı Hacmi" }, value: { EN: "300 × 300 × 320 mm", TR: "300 × 300 × 320 mm" } },
          { label: { EN: "Printer Category", TR: "Yazıcı Kategorisi" }, value: { EN: "Industrial Multi-Head System", TR: "Endüstriyel Çok Kafalı Sistem" } },
          { label: { EN: "Tool Slots", TR: "Araç Yuvaları" }, value: { EN: "2 / 4 (Independently Interchangeable)", TR: "2 / 4 (Bağımsız Olarak Değiştirilebilir)" } },
          { label: { EN: "Slicing Software", TR: "Dilimleme Yazılımı" }, value: { EN: "LayersTech Slicer, Cura, PrusaSlicer", TR: "LayersTech Slicer, Cura, PrusaSlicer" } }
        ]
      },
      {
        category: { EN: "Thermal Performance", TR: "Termal Performans" },
        items: [
          { label: { EN: "Max Nozzle Temp", TR: "Maksimum Nozül Sıcaklığı" }, value: { EN: "300°C (Optional 500°C Extended Nozzle)", TR: "300°C (Opsiyonel 500°C Uzatılmış Nozül)" } },
          { label: { EN: "Max Bed Temp", TR: "Maksimum Yatak Sıcaklığı" }, value: { EN: "120°C (PID Controlled)", TR: "120°C (PID Kontrollü)" } },
          { label: { EN: "Chamber Temp", TR: "Kabin Sıcaklığı" }, value: { EN: "Active Heating up to 65°C", TR: "65°C'ye Kadar Aktif Isıtma" } },
          { label: { EN: "Thermal Curing", TR: "Termal Kürleme" }, value: { EN: "Integrated Passive Insulation", TR: "Entegre Pasif İzolasyon" } }
        ]
      },
      {
        category: { EN: "Mechanical Accuracy", TR: "Mekanik Hassasiyet" },
        items: [
          { label: { EN: "X/Y Resolution", TR: "X/Y Çözünürlüğü" }, value: { EN: "6.25 μm", TR: "6.25 μm" } },
          { label: { EN: "Z Resolution", TR: "Z Çözünürlüğü" }, value: { EN: "1.25 μm", TR: "1.25 μm" } },
          { label: { EN: "Layer Height", TR: "Katman Yüksekliği" }, value: { EN: "0.05 mm - 0.4 mm", TR: "0.05 mm - 0.4 mm" } },
          { label: { EN: "Max Travel Speed", TR: "Maksimum Hareket Hızı" }, value: { EN: "300 mm/s", TR: "300 mm/s" } },
          { label: { EN: "Positioning Accuracy", TR: "Konumlandırma Hassasiyeti" }, value: { EN: "± 0.05 mm", TR: "± 0.05 mm" } }
        ]
      },
      {
        category: { EN: "Software & Security", TR: "Yazılım ve Güvenlik" },
        items: [
          { label: { EN: "Connectivity", TR: "Bağlantı" }, value: { EN: "Ethernet, Wi-Fi, USB, LayersOS Cloud", TR: "Ethernet, Wi-Fi, USB, LayersOS Bulut" } },
          { label: { EN: "Security", TR: "Güvenlik" }, value: { EN: "2FA, VPN Secure, Admin Audit Trail", TR: "2FA, Güvenli VPN, Yönetici Denetim İzi" } },
          { label: { EN: "AI & Monitoring", TR: "Yapay Zeka ve İzleme" }, value: { EN: "1080p Camera (Optional AI Monitoring)", TR: "1080p Kamera (Opsiyonel Yapay Zeka İzleme)" } },
          { label: { EN: "User Interface", TR: "Kullanıcı Arayüzü" }, value: { EN: "7-inch Industrial Touchscreen", TR: "7 inç Endüstriyel Dokunmatik Ekran" } }
        ]
      },
      {
        category: { EN: "Facilities & Safety", TR: "Tesisler ve Güvenlik" },
        items: [
          { label: { EN: "Filtration", TR: "Filtrasyon" }, value: { EN: "HEPA H13 + Active Carbon Filter", TR: "HEPA H13 + Aktif Karbon Filtre" } },
          { label: { EN: "Power Matrix", TR: "Güç Matrisi" }, value: { EN: "3000 W (Peak) / 1250 W (Normal)", TR: "3000 W (Tepe) / 1250 W (Normal)" } },
          { label: { EN: "Weight", TR: "Ağırlık" }, value: { EN: "240 kg", TR: "240 kg" } },
          { label: { EN: "Dimensions", TR: "Boyutlar" }, value: { EN: "1065 × 711 × 1975 mm", TR: "1065 × 711 × 1975 mm" } }
        ]
      }
    ]
  },
  m1pro: {
    name: "LayersTech M1PRO",
    subtitle: { EN: "Industrial Silicone & LSR System", TR: "Endüstriyel Silikon & LSR Sistemi" },
    description: { EN: "The M1PRO is designed for liquid-to-solid conversion of high-grade silicons and rubbers (LSR/RTV) alongside engineering polymers.", TR: "M1PRO, mühendislik polimerlerinin yanı sıra yüksek kaliteli silikonların ve kauçukların (LSR/RTV) sıvıdan katıya dönüştürülmesi için tasarlanmıştır." },
    image: "/images/m1pro_dark.png",
    features: [
      {
        title: { EN: "Advanced Silicone (LSR) Printing System", TR: "Gelişmiş Silikon (LSR) Baskı Sistemi" },
        desc: { EN: "LayersTech M1PRO is engineered as a true industrial silicone 3D printer, enabling reliable Liquid Silicone Rubber (LSR) printing for flexible, functional, and production-ready parts. The system supports precise deposition of silicone materials with different Shore hardness values, making it suitable for seals, gaskets, soft-touch components, and elastomer-like end-use parts. Unlike conventional systems, M1PRO integrates controlled curing and multi-tool support to ensure consistent layer bonding, dimensional accuracy, and repeatable mechanical performance throughout the entire print process.", TR: "LayersTech M1PRO, esnek, işlevsel ve üretime hazır parçalar için güvenilir Sıvı Silikon Kauçuk (LSR) baskısı sağlayan gerçek bir endüstriyel silikon 3D yazıcı olarak tasarlanmıştır. Sistem, farklı Shore sertlik değerlerine sahip silikon malzemelerin hassas bir şekilde biriktirilmesini destekleyerek contalar, yumuşak dokunuşlu bileşenler ve elastomer benzeri son kullanım parçaları için uygun hale getirir. Geleneksel sistemlerin aksine, M1PRO tüm baskı süreci boyunca tutarlı katman yapışması, boyutsal doğruluk ve tekrarlanabilir mekanik performans sağlamak için kontrollü kürleme ve çoklu araç desteğini entegre eder." },
        bullets: [
          { EN: "LSR printing with multiple Shore hardness options", TR: "Çoklu Shore sertliği seçenekleriyle LSR baskısı" },
          { EN: "Dedicated support material workflow for silicone printing", TR: "Silikon baskı için özel destek malzemesi iş akışı" },
          { EN: "Integrated heater rail for layer-by-layer silicone curing", TR: "Katman katman silikon kürleme için entegre ısıtıcı rayı" },
          { EN: "Production-ready silicone manufacturing", TR: "Üretime hazır silikon üretimi" }
        ],
        image: "/images/silion_parts.png"
      },
      {
        title: { EN: "Industrial Stability, Thermal Control, Consistent Output", TR: "Endüstriyel Stabilite, Termal Kontrol, Tutarlı Çıktı" },
        desc: { EN: "LayersTech M1Pro is engineered for stable, repeatable FFF/FDM production. A rigid industrial frame and enclosed chamber reduce external variation, while PID-controlled temperatures keep the bed, nozzle, and chamber steady throughout long print cycles. This results in predictable layer placement, consistent dimensions, and reliable surface finish—run after run.", TR: "LayersTech M1Pro, stabil, tekrarlanabilir FFF/FDM üretimi için tasarlandı. Sert endüstriyel gövde ve kapalı kabin dış varyasyonları azaltırken, PID kontrollü sıcaklıklar uzun baskı döngüleri boyunca yatak, nozül ve kabini sabit tutar. Bu, her seferinde öngörülebilir katman yerleşimi, tutarlı boyutlar ve güvenilir yüzey kalitesi sağlar." },
        bullets: [
          { EN: "300 × 300 × 320 mm build volume for functional parts and fixtures", TR: "Fonksiyonel parçalar ve fikstürler için 300 × 300 × 320 mm baskı hacmi" },
          { EN: "PID control: bed up to 140°C, nozzle up to 380°C, chamber up to 65°C", TR: "PID kontrolü: 140°C'ye kadar yatak, 380°C'ye kadar nozül, 65°C'ye kadar kabin" },
          { EN: "Enclosed, insulated chamber for more stable printing conditions", TR: "Daha stabil baskı koşulları için kapalı, yalıtımlı kabin" },
          { EN: "Designed for industrial continuous production", TR: "Endüstriyel sürekli üretim için tasarlandı" }
        ],
        image: "/images/silicone-card.jpg"
      },
      {
        title: { EN: "High-Throughput Multi-Material Printing (4-Tool System)", TR: "Yüksek Verimli Çoklu Malzeme Baskısı (4-Araçlık Sistem)" },
        desc: { EN: "Built for speed and flexibility, M1Pro uses a direct-drive toolhead with four interchangeable tool slots—ideal for fast multi-color prints or multi-material workflows without constant manual swapping. From prototyping to small-batch runs, the system is designed to keep throughput high and downtime low.", TR: "Hız ve esneklik için tasarlanan M1Pro, sürekli manuel değiştirme gerektirmeden hızlı çok renkli baskılar veya çoklu malzeme iş akışları için ideal olan, dört değiştirilebilir araç yuvasına sahip doğrudan tahrikli bir araç kafası kullanır. Prototiplemeden küçük parti üretimlere kadar sistemi yüksek verimlilik ve düşük kesinti süresi ile çalıştırmak için tasarlandı." },
        bullets: [
          { EN: "4-tool workflow for multi-color or multi-material printing", TR: "Çoklu renk veya çoklu malzeme baskısı için 4 araçlık iş akışı" },
          { EN: "Direct-drive extrusion for responsive material control", TR: "Hassas malzeme kontrolü için doğrudan tahrikli ekstrüzyon" },
          { EN: "Optimized for repeatable production runs and continuous operation", TR: "Tekrarlanabilir üretim çalışmaları ve sürekli operasyon için optimize edildi" },
          { EN: "Compatible with additional tool types for expanding use cases", TR: "Genişleyen kullanım senaryoları için ek araç türleriyle uyumlu" }
        ],
        image: "/images/tools.png"
      },
      {
        title: { EN: "Smart Calibration: Automatic Z + Camera-Assisted XY Alignment", TR: "Akıllı Kalibrasyon: Otomatik Z + Kamera Destekli XY Hizalama" },
        desc: { EN: "M1Pro reduces setup time with calibration tools designed for production. Eddy-current sensing enables automatic nozzle Z offset control for consistent first layers, while camera-assisted calibration makes XY offset alignment quicker and more repeatable—especially valuable in multi-tool configurations.", TR: "M1Pro, üretim için tasarlanmış kalibrasyon araçlarıyla kurulum süresini azaltır. Eddy akımı algılama, tutarlı ilk katmanlar için otomatik nozül Z ofseti kontrolü sağlarken, kamera destekli kalibrasyon XY ofseti hizalamasını daha hızlı ve tekrarlanabilir hale getirir — özellikle çoklu araç yapılandırmalarında çok değerlidir." },
        bullets: [
          { EN: "Eddy-current sensing for automatic nozzle Z offset control", TR: "Otomatik nozül Z ofseti kontrolü için Eddy akımı algılama" },
          { EN: "Camera-assisted XY offset calibration for faster alignment", TR: "Daha hızlı hizalama için kamera destekli XY ofseti kalibrasyonu" },
          { EN: "Better repeatability when switching tools/materials", TR: "Araçları/malzemeleri değiştirirken daha iyi tekrarlanabilirlik" },
          { EN: "More reliable first layers with less trial-and-error", TR: "Daha az deneme-yanılma ile daha güvenilir ilk katmanlar" }
        ],
        image: "/images/smart-calibration.png"
      },
      {
        title: { EN: "AI Print Monitoring: Catch Failures Early, Save Time and Material", TR: "Yapay Zeka Baskı İzleme: Hataları Erken Yakalayın, Zaman ve Malzeme Tasarrufu Sağlayın" },
        desc: { EN: "Production reliability depends on visibility. M1Pro’s chamber camera and AI monitoring help detect common failures—such as “spaghetti” errors—early in the process. This improves supervision during long prints, reduces wasted material, and helps teams run jobs with more confidence.", TR: "Üretim güvenilirliği görünürlüğe bağlıdır. M1Pro'nun kabin kamerası ve yapay zeka izlemesi, süreçteki 'spagetti' hataları gibi yaygın sorunları erken tespit etmeye yardımcı olur. Bu, uzun baskılar sırasında denetimi artırır, boşa giden malzemeyi azaltır ve ekiplerin daha güvenle iş yapmasına yardımcı olur." },
        bullets: [
          { EN: "Chamber monitoring for real-time visibility", TR: "Gerçek zamanlı görünürlük için kabin izleme" },
          { EN: "AI detection for spaghetti/print failure indicators", TR: "Spagetti/baskı hatası göstergeleri için yapay zeka tespiti" },
          { EN: "Print cycle monitoring for better production oversight", TR: "Daha iyi üretim denetimi için baskı döngüsü izleme" },
          { EN: "Supports more reliable unattended printing", TR: "Daha güvenilir gözetimsiz baskıyı destekler" }
        ],
        image: "/images/spaghetti.png"
      },
      {
        title: { EN: "Materials, Software, and Secure Connectivity for Teams", TR: "Ekipler için Malzemeler, Yazılım ve Güvenli Bağlantı" },
        desc: { EN: "M1Pro supports a wide range of materials—from general-purpose plastics to advanced engineering polymers—backed by a modern software stack. Compatibility with popular slicers, plus secure identity and organization controls, makes it suitable for professional environments where access, accountability, and remote workflows matter.", TR: "M1Pro, genel amaçlı plastiklerden gelişmiş mühendislik polimerlerine kadar geniş bir malzeme yelpazesini modern bir yazılım yapısıyla destekler. Popüler dilimleyicilerle uyumluluğun yanı sıra güvenli kimlik ve organizasyon kontrolleri, erişim, hesap verebilirlik ve uzaktan iş akışlarının önemli olduğu profesyonel ortamlar için uygun hale getirir." },
        bullets: [
          { EN: "Materials support: PLA/ABS/PETG/ASA and engineering polymers (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)", TR: "Malzeme desteği: PLA/ABS/PETG/ASA ve mühendislik polimerleri (PA, PC, PC-ABS, PEEK, PEI, CF/GF, TPU/TPE)" },
          { EN: "Slicer compatibility: PrusaSlicer, Orca Slicer, LayersTech Slicer", TR: "Dilimleyici uyumluluğu: PrusaSlicer, Orca Slicer, LayersTech Slicer" },
          { EN: "Secure access: 2FA, organization admin roles, SSO", TR: "Güvenli erişim: 2FA, organizasyon yönetici rolleri, SSO" },
          { EN: "Ethernet connectivity and wireless updates; remote access and camera workflow", TR: "Ethernet bağlantısı ve kablosuz güncellemeler; uzaktan erişim ve kamera iş akışı" }
        ],
        image: "/images/parts.png"
      },
      {
        title: { EN: "Support & Service for Production Teams", TR: "Üretim Ekipleri için Destek ve Servis" },
        desc: { EN: "Support that keeps production moving. LayersTech M1Pro is backed by a professional service workflow designed for industrial uptime—from onboarding and operator guidance to remote assistance and preventive maintenance planning. Teams can monitor prints via the chamber camera, manage jobs over the network, and keep systems updated through secure connectivity features.", TR: "Üretimi devam ettiren destek. LayersTech M1Pro, eğitime ve operatör yönlendirmesinden uzaktan yardıma ve önleyici bakım planlamasına kadar endüstriyel çalışma süresi için tasarlanmış profesyonel bir servis akışına sahiptir. Ekipler, kabin kamerası ile baskıları izleyebilir, ağ üzerinden işleri yönetebilir ve güvenli bağlantı özellikleri ile sistemleri güncel tutabilir." },
        bullets: [
          { EN: "Setup onboarding and operator guidance", TR: "Kurulum eğitimi ve operatör yönlendirmesi" },
          { EN: "Remote support-ready workflow with camera visibility", TR: "Kamera görünürlüğü ile uzaktan desteğe hazır iş akışı" },
          { EN: "Maintenance planning for long-term reliability", TR: "Uzun vadeli güvenilirlik için bakım planlaması" },
          { EN: "Secure access controls (2FA / roles / SSO) for team environments", TR: "Ekip ortamları için güvenli erişim kontrolleri (2FA / roller / SSO)" }
        ],
        image: "/images/support.png"
      }
    ],
    materials: [
      { name: "LSR Silicone", icon: materialImages.lsr, type: { EN: "Industrial Silicone", TR: "Endüstriyel Silikon" } },
      { name: "RTV Silicone", icon: materialImages.rtv, type: { EN: "Silicone Rubber", TR: "Silikon Kauçuk" } },
      { name: "ASA", icon: "/images/materials/asa.jpg", type: { EN: "Engineering", TR: "Mühendislik" } },
      { name: "PA", icon: "/images/materials/pa.jpg", type: { EN: "Engineering", TR: "Mühendislik" } },
      { name: "PC-ABS", icon: "/images/materials/pcabs.jpg", type: { EN: "Engineering", TR: "Mühendislik" } },
      { name: "PEEK", icon: "/images/materials/peek.jpg", type: { EN: "High-Performance", TR: "Yüksek Performans" } },
      { name: "PEI", icon: "/images/materials/pei.jpg", type: { EN: "High-Performance", TR: "Yüksek Performans" } },
      { name: "GF", icon: "/images/materials/gf.jpg", type: { EN: "Composite", TR: "Kompozit" } },
      { name: "KF", icon: "/images/materials/kf.jpg", type: { EN: "Composite", TR: "Kompozit" } },
      { name: "CBN", icon: materialImages.cbn, type: { EN: "Composite", TR: "Kompozit" } },
      { name: "PLA", icon: materialImages.pla, type: { EN: "Standard", TR: "Standart" } },
      { name: "ABS", icon: materialImages.abs, type: { EN: "Standard", TR: "Standart" } },
      { name: "PVA", icon: materialImages.pva, type: { EN: "Support", TR: "Destek" } },
      { name: "HIPS", icon: materialImages.hips, type: { EN: "Support", TR: "Destek" } },
      { name: "PETG", icon: materialImages.petg, type: { EN: "Standard", TR: "Standart" } },
      { name: "TPU", icon: materialImages.tpu, type: { EN: "Flexible", TR: "Esnek" } }
    ],
    specs: [
      {
        category: { EN: "System Specifications", TR: "Sistem Özellikleri" },
        items: [
          { label: { EN: "Printing Process", TR: "Baskı İşlemi" }, value: { EN: "Industrial LSR & FDM Hybrid", TR: "Endüstriyel LSR ve FDM Hibrit" } },
          { label: { EN: "Build Volume", TR: "Baskı Hacmi" }, value: { EN: "300 × 300 × 320 mm", TR: "300 × 300 × 320 mm" } },
          { label: { EN: "Tool Slots", TR: "Araç Yuvaları" }, value: { EN: "4 (Standart Industrial Multi-Head)", TR: "4 (Standart Endüstriyel Çok Kafalı)" } },
          { label: { EN: "LSR Head", TR: "LSR Kafası" }, value: { EN: "Cooled Nozzle & Volumetric Dosing", TR: "Soğutmalı Nozul ve Volümetrik Dozaj" } },
          { label: { EN: "Slicing Software", TR: "Dilimleme Yazılımı" }, value: { EN: "LayersTech Professional Slicer (ASM Optimized)", TR: "LayersTech Profesyonel Slicer (ASM Optimize)" } }
        ]
      },
      {
        category: { EN: "Thermal & Curing", TR: "Termal ve Kürleme" },
        items: [
          { label: { EN: "Infrared System", TR: "Kızılötesi Sistem" }, value: { EN: "Integrated IR Curing for Silicone Vulcanization", TR: "Silikon Vulkanizasyonu için Entegre IR Kürleme" } },
          { label: { EN: "Max Nozzle Temp", TR: "Maksimum Nozül Sıcaklığı" }, value: { EN: "300°C (FFF) / Cooled LSR Interface", TR: "300°C (FFF) / Soğutmalı LSR Arayüzü" } },
          { label: { EN: "Max Bed Temp", TR: "Maksimum Yatak Sıcaklığı" }, value: { EN: "120°C (PID Controlled)", TR: "120°C (PID Kontrollü)" } },
          { label: { EN: "Chamber Temp", TR: "Kabin Sıcaklığı" }, value: { EN: "Active Heating + High Efficiency Insulation", TR: "Aktif Isıtma + Yüksek Verimli Yalıtım" } }
        ]
      },
      {
        category: { EN: "Mechanical Performance", TR: "Mekanik Performans" },
        items: [
          { label: { EN: "X/Y Resolution", TR: "X/Y Çözünürlüğü" }, value: { EN: "6.25 μm", TR: "6.25 μm" } },
          { label: { EN: "Z Resolution", TR: "Z Çözünürlüğü" }, value: { EN: "1.25 μm", TR: "1.25 μm" } },
          { label: { EN: "Layer Thickness", TR: "Katman Kalınlığı" }, value: { EN: "0.05 mm - 0.5 mm", TR: "0.05 mm - 0.5 mm" } },
          { label: { EN: "Travel Speed", TR: "Hareket Hızı" }, value: { EN: "300 mm/s (Industrial Grade)", TR: "300 mm/s (Endüstriyel Sınıf)" } },
          { label: { EN: "Position Accuracy", TR: "Konumlandırma Hassasiyeti" }, value: { EN: "± 0.05 mm", TR: "± 0.05 mm" } }
        ]
      },
      {
        category: { EN: "Software & Interface", TR: "Yazılım ve Arayüz" },
        items: [
          { label: { EN: "Connectivity", TR: "Bağlantı" }, value: { EN: "Wi-Fi, Ethernet, USB, Cloud, VPN Secure Connection", TR: "Wi-Fi, Ethernet, USB, Bulut, VPN Güvenli Bağlantı" } },
          { label: { EN: "Security", TR: "Güvenlik" }, value: { EN: "SSO, 2FA, VPN, Admin Audit Trail", TR: "SSO, 2FA, VPN, Yönetici Denetim İzi" } },
          { label: { EN: "Monitoring", TR: "İzleme" }, value: { EN: "4K Camera + Advanced AI Print Monitoring Control", TR: "4K Kamera + Gelişmiş Yapay Zeka Baskı İzleme Kontrolü" } },
          { label: { EN: "User Interface", TR: "Kullanıcı Arayüzü" }, value: { EN: "10.1-inch Industrial PC Touchscreen", TR: "10.1 inç Endüstriyel PC Dokunmatik Ekran" } }
        ]
      },
      {
        category: { EN: "Infrastructure & Safety", TR: "Altyapı ve Güvenlik" },
        items: [
          { label: { EN: "Filtration", TR: "Filtrasyon" }, value: { EN: "HEPA H13 + Active Carbon + Active Volatiles Filtration", TR: "HEPA H13 + Aktif Karbon + Aktif Uçucu Maddeler Filtrasyonu" } },
          { label: { EN: "Power Max", TR: "Maksimum Güç" }, value: { EN: "3200 W (Peak Demand)", TR: "3200 W (Tepe Talebi)" } },
          { label: { EN: "Weight", TR: "Ağırlık" }, value: { EN: "260 kg", TR: "260 kg" } },
          { label: { EN: "Dimensions", TR: "Boyutlar" }, value: { EN: "1065 × 711 × 1975 mm", TR: "1065 × 711 × 1975 mm" } }
        ]
      }
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = productData[id as keyof typeof productData];
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("features");
  const [mounted, setMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace("#", "");
    if (hash && ["features", "compatibility", "specs"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    if (tabRef.current) {
      const offset = tabRef.current.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  if (!mounted) return <div className="min-h-screen bg-white dark:bg-[#0a0a0a]" />;
  if (!product) return null;

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500">
      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] dark:bg-white/[0.03] border-b border-black/5 dark:border-white/5 py-4 transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <nav className="flex items-center gap-3 text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#F26522]">{t({ EN: "Home", TR: "Anasayfa" })}</Link>
            <Lucide.ChevronRight className="w-3 h-3" />
            <Link href="/3d-printers" className="hover:text-[#F26522]">{t({ EN: "3D Printers", TR: "3D Yazıcılar" })}</Link>
            <Lucide.ChevronRight className="w-3 h-3" />
            <span className="text-[#F26522]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-32 bg-[#f8f8f8] dark:bg-white/[0.03] transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <span className="text-[#F26522] font-black text-[11px] tracking-[0.5em] uppercase block mb-8 leading-none underline underline-offset-8 decoration-2 decoration-[#F26522]/20">{t(product.subtitle)}</span>
               <h1 className="text-5xl sm:text-7xl lg:text-[120px] font-black text-[#1a1a1a] dark:text-white uppercase leading-[0.8] tracking-tighter mb-12">
                 {product.name.includes("PRO") ? (
                   <>
                     {product.name.replace("PRO", "")}
                     <span className="text-[#F26522]">PRO</span>
                   </>
                 ) : (
                   product.name
                 )}
               </h1>
               <p className="text-lg md:text-2xl text-black/70 dark:text-white/70 font-light leading-relaxed max-w-xl mb-16">{t(product.description)}</p>
                <div className="flex flex-col sm:flex-row items-center gap-10 mb-16">
                  <Button className="h-16 px-12 bg-[#F26522] text-white rounded-full text-[11px] font-black tracking-[0.2em] hover:bg-[#1a1a1a] dark:hover:bg-white dark:hover:text-black transition-all uppercase shadow-2xl shadow-[#F26522]/20">
                    {t({ EN: "Request a Quote", TR: "Teklif Alın" })}
                  </Button>
                  
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:bg-[#F26522] group-hover:border-[#F26522] transition-all duration-500 shadow-xl">
                       <Lucide.Play className="w-6 h-6 text-[#F26522] group-hover:text-white group-hover:fill-white transition-all" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-black/40 dark:text-white/40 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase group-hover:text-[#F26522] transition-colors">
                        {t({ EN: "Watch Video", TR: "Videoyu İzle" })}
                      </span>
                    </div>
                  </button>
                </div>
            </div>
            <div className="relative aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain dark:brightness-90 dark:contrast-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div id="product-nav" ref={tabRef} className="sticky top-[80px] z-[40] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-y border-black/5 dark:border-white/10 shadow-xl transition-colors">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
            {["features", "compatibility", "specs"].map((tab) => (
              <button
                key={tab}
                id={`btn-tab-${tab}`}
                data-tab={tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "vanilla-tab-btn px-6 h-20 md:px-12 flex items-center text-[10px] font-extrabold tracking-[0.2em] md:tracking-[0.4em] uppercase transition-all relative cursor-pointer",
                  activeTab === tab ? "text-[#F26522]" : "text-black/40 dark:text-white/50 hover:text-black dark:hover:text-white"
                )}
              >
                {t({ EN: tab, TR: tab === "features" ? "ÖZELLİKLER" : tab === "compatibility" ? "UYUMLULUK" : "TEKNİK" })}
                {activeTab === tab ? <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F26522] tab-indicator" /> : <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent tab-indicator" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main>
        <div id="tab-content-features" className={activeTab === "features" ? "block" : "hidden"}>
          <section className="py-20 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="container mx-auto px-6 max-w-[1400px]">
              <div className="flex flex-col gap-12">
                {product.features.map((f, i) => (
                  <div key={i} className="bg-gradient-to-br from-white via-[#fffaf8] to-[#F26522]/5 dark:from-white/[0.03] dark:via-white/[0.01] dark:to-[#F26522]/5 rounded-[32px] md:rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 flex flex-col lg:flex-row gap-20 items-center overflow-hidden transition-all duration-1000 group shadow-md hover:shadow-2xl hover:border-[#F26522]/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/0 via-[#F26522]/0 to-[#F26522]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    <div className={cn("flex-1 order-2 relative z-10", i % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
                       <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#F26522] dark:from-white dark:via-white dark:to-[#F26522] group-hover:from-[#F26522] group-hover:to-[#D35400] transition-all duration-700">
                          {t(f.title)}
                       </h3>
                       <p className="text-black/70 dark:text-white/70 text-xl font-light leading-relaxed mb-10 max-w-2xl">{t(f.desc)}</p>
                       <ul className="space-y-4">
                         {(f.bullets || []).map((bullet, idx) => (
                           <li key={idx} className="flex items-start gap-4 group/bullet hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
                             <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#F26522] to-[#D35400] mt-2 shrink-0 group-hover/bullet:scale-150 transition-all duration-300 shadow-sm shadow-[#F26522]/40" />
                             <span className="text-black/90 dark:text-white/90 text-lg font-medium leading-tight transition-colors group-hover/bullet:text-[#F26522] dark:group-hover/bullet:text-[#F26522]">{t(bullet)}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className={cn("flex-1 w-full order-1", i % 2 === 0 ? "lg:order-1" : "lg:order-2")}>
                      <div className="aspect-[4/3] bg-white/50 dark:bg-black/20 rounded-[40px] overflow-hidden border border-black/5 dark:border-white/10 p-4">
                         <img src={f.image} alt={t(f.title)} className="w-full h-full object-contain dark:brightness-110 transition-transform duration-1000 group-hover:scale-105" 
                           onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x600/ffffff/F26522?text=${t(f.title)}`; }}
                         />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div id="tab-content-compatibility" className={activeTab === "compatibility" ? "block" : "hidden"}>
          <section className="py-40 animate-in fade-in slide-in-from-bottom-12 duration-700 bg-white dark:bg-[#0a0a0a] transition-colors">
            <div className="container mx-auto px-6 max-w-[1400px]">
              <div className="text-center mb-16 md:mb-32">
                  <span className="text-[#F26522] font-black text-xs tracking-[0.4em] uppercase block mb-8">{t({ EN: "Industrial Excellence", TR: "Endüstriyel Mükemmellik" })}</span>
                  <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-[#1a1a1a] dark:text-white leading-none">{t({ EN: "Manufacturing Ecosystem", TR: "Üretim Ekosistemi" })}</h2>
               </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {product.materials.map((m, idx) => (
                   <div key={idx} className="bg-white dark:bg-white/[0.03] rounded-[32px] md:rounded-[50px] border border-black/10 dark:border-white/10 shadow-md hover:border-[#F26522]/50 hover:shadow-2xl transition-all duration-700 p-6 group">
                      <div className="aspect-square w-full rounded-[40px] overflow-hidden bg-white dark:bg-black/40 mb-8 border border-black/5 dark:border-white/10 relative flex items-center justify-center transition-colors">
                        <img 
                          src={m.icon} 
                          alt={m.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.style.backgroundImage = 'url("/images/industrial_spool_fallback.jpg")';
                            target.parentElement!.style.backgroundSize = 'cover';
                            target.parentElement!.style.backgroundPosition = 'center';
                            target.parentElement!.innerHTML = `
                              <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                                <span class="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">${t(m.type)}</span>
                                <div class="w-12 h-[1px] bg-[#F26522] mb-4"></div>
                                <span class="text-white font-bold text-4xl leading-[0.8] uppercase tracking-tighter text-wrap">${m.name}</span>
                              </div>`;
                          }}
                        />
                      </div>
                      <div className="px-4">
                        <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#F26522] uppercase mb-3">{t(m.type)}</p>
                        <h4 className="text-4xl font-black uppercase tracking-tighter leading-none text-[#1a1a1a] dark:text-white">{m.name}</h4>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div id="tab-content-specs" className={activeTab === "specs" ? "block" : "hidden"}>
          <section className="py-20 md:py-40 animate-in fade-in slide-in-from-bottom-12 duration-700 bg-[#0c0c0c] text-white">
            <div className="container mx-auto px-6 max-w-[1400px]">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                  <div className="lg:col-span-4">
                    <div className="sticky top-40">
                      <span className="text-[#F26522] font-black text-xs tracking-[0.4em] uppercase block mb-10">{t({ EN: "Technical Documentation", TR: "Teknik Dokümantasyon" })}</span>
                      <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-white">{t({ EN: "Full Datasheet", TR: "Tam Veri Sayfası" })}</h2>
                      <p className="text-white/70 text-xl font-light mb-16 leading-relaxed">{t({ EN: "Official manufacturing specifications verified for industrial grade output and 24/7 reliability standards.", TR: "Endüstriyel sınıf çıktı ve 24/7 güvenilirlik standartları için doğrulanmış resmi üretim özellikleri." })}</p>
                      <Button className="h-16 px-12 bg-white text-black font-extrabold text-[11px] tracking-[0.2em] uppercase hover:bg-[#F26522] hover:text-white transition-all rounded-full w-full">
                         {t({ EN: "Download Catalog PDF", TR: "Kataloğu PDF İndir" })}
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-8 flex flex-col gap-32">
                    {product.specs.map((specSection, idx) => (
                      <div key={idx}>
                        <h4 className="flex items-center gap-4 text-[#F26522] text-[11px] font-black tracking-[0.5em] uppercase mb-12 pb-6 border-b border-white/10">
                          {t(specSection.category)}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-0">
                           {specSection.items.map((item, idxx) => (
                             <div key={idxx} className="flex flex-col py-8 border-b border-white/5 hover:bg-white/5 px-6 transition-all group">
                               <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 group-hover:text-[#F26522] transition-colors">{t(item.label)}</span>
                               <span className="text-2xl font-black text-white leading-none tracking-tight">{t(item.value)}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-md animate-in fade-in duration-500">
           <button 
             onClick={() => setIsVideoOpen(false)} 
             className="absolute top-10 right-10 text-white hover:text-[#F26522] transition-colors p-4 rounded-full bg-white/5 border border-white/10 z-[110]"
           >
              <Lucide.X className="w-8 h-8" />
           </button>
           <div className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
              <video 
                className="w-full h-full object-cover"
                src="/videos/homeVideoMobile.mp4"
                autoPlay 
                controls 
                playsInline
              />
           </div>
        </div>
      )}
    </div>
  );
}
