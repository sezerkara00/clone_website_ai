import React from "react";
import { ArrowRight, Settings, Droplet, Headset, BookOpen } from "lucide-react";

const highlights = [
  {
    title: "14+ Years Experience",
    description: "Our long-standing and growing client base, built over more than 14 years, is a testament to the trust we have earned.",
    icon: Settings,
  },
  {
    title: "10,000+ Clients",
    description: "Successfully served thousands of companies across aerospace, defense, medical, and automotive sectors.",
    icon: Droplet,
  },
  {
    title: "Global Presence",
    description: "Direct operations in London, UK and Istanbul, Turkey to serve global industrial markets.",
    icon: Headset,
  }
];

export function SmartSolutions() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-[#F26522] font-bold tracking-[0.2em] text-xs mb-4 block animate-in fade-in slide-in-from-bottom duration-500">PIONEERS IN 3D PRINTING</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 animate-in fade-in slide-in-from-bottom-2 duration-[700ms] uppercase text-white">
            Setting Standards in <br />
            <span className="text-white/40">Industrial Prototyping</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Thanks to our extensive 3D printing services, laser sintering technologies, and software systems, we have provided rapid prototyping services to countless companies across diversos industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="w-20 h-20 rounded-full bg-[#F26522]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-10 h-10 text-[#F26522]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-sm">
                {item.description}
              </p>
              
              <div className="mt-auto flex items-center gap-3 text-[13px] font-bold text-[#F26522] group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                <span>READ MORE</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 p-12 md:p-20 rounded-[40px] bg-gradient-to-r from-[#F26522] to-[#D35400] relative overflow-hidden group">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Ready for Series Production?</h3>
              <p className="text-white/80 text-lg mb-10 max-w-xl">
                We accompany you on your way to industrial 3D printing. Discover the possibilities for your industry.
              </p>
              <button className="bg-white text-[#1a1a1a] px-10 py-5 rounded-sm font-bold tracking-widest text-[13px] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                EXPLORE CASE STUDIES
              </button>
            </div>
            <div className="hidden md:block scale-110 group-hover:scale-125 transition-transform duration-[2000ms]">
               <img 
                 src="https://images.unsplash.com/photo-1565043581454-220239ed75d4?w=800&q=80" 
                 alt="Series Production" 
                 className="rounded-2xl shadow-2xl"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
