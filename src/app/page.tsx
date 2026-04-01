import React from "react";
import { Hero } from "@/components/Hero";
import { PrinterRange } from "@/components/PrinterRange";
import { SmartSolutions } from "@/components/SmartSolutions";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <main>
        <Hero />
        <PrinterRange />
        <SmartSolutions />
      </main>
    </div>
  );
}
