import React from "react";
import { MessageSquare, Star, UserPlus, Code } from "lucide-react";

const stats = [
  {
    label: "Support Hours",
    value: "30,000+",
    icon: MessageSquare,
  },
  {
    label: "Years Experience",
    value: "25+",
    icon: Star,
  },
  {
    label: "Happy Clients",
    value: "1,000+",
    icon: UserPlus,
  },
  {
    label: "Projects Completed",
    value: "7,500+",
    icon: Code,
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden">
      <div className="primary-gradient py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-full border-2 border-white/20 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-white group-hover:text-inherit" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
