import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Stats } from "@/components/Stats";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Stats />
        <ServiceGrid />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
