import React from "react";
import { Cpu, Globe, Zap, Shield, Database, Cloud } from "lucide-react";

const brands = [
  { name: "TechFlow", icon: Cpu },
  { name: "GlobalNet", icon: Globe },
  { name: "FlashSoft", icon: Zap },
  { name: "SecureX", icon: Shield },
  { name: "DataCore", icon: Database },
  { name: "CloudScale", icon: Cloud },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-extrabold text-xl md:text-3xl tracking-[0.3em] font-tech uppercase">
            Associated Brands
          </h2>
          <p className="text-black/60 font-medium tracking-widest uppercase text-xs md:text-sm mt-2 mb-4">
            (Top Brands)
          </p>
          <div className="h-1.5 w-16 bg-black rounded-full" />
        </div>
      </div>

      {/* Brand Slider (Marquee) */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee gap-20 md:gap-40 py-4 whitespace-nowrap">
          {/* First Set */}
          <div className="flex gap-20 md:gap-40 items-center">
            {brands.map((brand, index) => (
              <div 
                key={`b1-${index}`} 
                className="flex items-center gap-4 group/item cursor-pointer transition-all duration-500 hover:scale-110"
              >
                <div className="p-3 rounded-xl bg-slate-50 text-black/40 group-hover/item:text-black group-hover/item:bg-slate-100 transition-colors duration-300">
                  <brand.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-black/40 font-bold text-xl md:text-2xl font-tech tracking-tight group-hover/item:text-black transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex gap-20 md:gap-40 items-center">
            {brands.map((brand, index) => (
              <div 
                key={`b2-${index}`} 
                className="flex items-center gap-4 group/item cursor-pointer transition-all duration-500 hover:scale-110"
              >
                <div className="p-3 rounded-xl bg-slate-50 text-black/40 group-hover/item:text-black group-hover/item:bg-slate-100 transition-colors duration-300">
                  <brand.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-black/40 font-bold text-xl md:text-2xl font-tech tracking-tight group-hover/item:text-black transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default BrandsSection;
