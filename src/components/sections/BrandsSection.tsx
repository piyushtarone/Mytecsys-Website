import React from "react";
import { Cpu, Globe, Zap, Shield, Database, Cloud, Layers, Box, Grid } from "lucide-react";

const brands = [
  { name: "a.", icon: Cpu, style: "circle" },
  { name: "WebStack", sub: "TECHNOLOGIES", icon: Layers, style: "box" },
  { name: "shibui", sub: "studio", icon: Zap, style: "shibui" },
  { name: "ungray", sub: "Technologies Pvt. Ltd.", icon: Shield, style: "ungray" },
  { name: "Stop & Think", icon: Globe, style: "octagon" },
  { name: "Webakruti", sub: "We are the change", icon: Cpu, style: "webakruti" },
  { name: "Webalar", sub: "Design | Development", icon: Box, style: "webalar" },
  { name: "QuadTech", icon: Grid, style: "quadtech" },
];

const BrandsSection = () => {
  return (
    <section className="pt-[60px] pb-[60px] bg-transparent overflow-hidden relative z-20">
      {/* Removed Hexagon Pattern Background */}

      {/* Floating Accent Particles */}
      <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-blue-500 rounded-full blur-[1px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-[12%] w-3 h-3 bg-blue-400 rounded-full blur-[2px] opacity-30 animate-pulse" />
      <div className="absolute top-1/4 right-[30%] w-1.5 h-1.5 bg-blue-600 rounded-full opacity-20" />

      <div className="container mx-auto max-w-7xl px-4 mb-10 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-tech font-bold text-[32px] tracking-normal text-center drop-shadow-sm">
            Associated Brands
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
            (Top brands)
          </p>
          <div className="w-14 h-1.5 bg-black mt-5 rounded-full" />
        </div>
      </div>

      {/* Brand Slider (Marquee) */}
      <div className="relative flex items-center overflow-hidden group">
        <div className="flex animate-marquee py-6 whitespace-nowrap items-center will-change-transform">
          {/* First Set */}
          <div className="flex gap-20 items-center pr-20">
            {brands.map((brand, index) => (
              <div
                key={`b1-${index}`}
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                {brand.style === "circle" && (
                  <div className="flex items-center">
                    <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-2xl pl-0.5">a.</div>
                  </div>
                )}
                {brand.style === "box" && (
                  <div className="flex items-center gap-2 bg-[#1a1a1a] text-white px-3.5 py-2.5 rounded-xl">
                    <brand.icon size={24} className="opacity-90" />
                    <div className="flex flex-col leading-[0.85]">
                      <span className="font-bold text-xl tracking-tight">{brand.name}</span>
                      <span className="text-[7px] tracking-[0.2em] font-bold opacity-60 mt-0.5">{brand.sub}</span>
                    </div>
                  </div>
                )}
                {brand.style === "shibui" && (
                  <div className="relative flex flex-col items-start px-2">
                    <span className="text-[7px] absolute -top-1 left-2 font-bold text-slate-400 uppercase tracking-widest">{brand.sub}</span>
                    <div className="flex items-center relative">
                      <span className="text-4xl font-tech font-bold tracking-tighter text-[#1a1a1a] relative z-10">shibui</span>
                      <div className="absolute -right-1 top-1 w-6 h-6 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <div className="absolute right-3 -top-1 w-5 h-5 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <span className="text-[6px] absolute -top-1 -right-2 font-bold">TM</span>
                    </div>
                  </div>
                )}
                {brand.style === "ungray" && (
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-tech font-bold tracking-tighter text-[#4a4a4a] leading-none">ungray</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{brand.sub}</span>
                  </div>
                )}
                {brand.style === "octagon" && (
                  <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden"
                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <div className="absolute inset-[1px] bg-slate-400"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="absolute inset-[2.5px] bg-[#1a1a1a]"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="flex flex-col items-center justify-center text-[5px] text-white font-bold leading-tight z-10 px-1 text-center">
                      <span>STOP</span>
                      <span>&</span>
                      <span>THINK</span>
                    </div>
                  </div>
                )}
                {brand.style === "webakruti" && (
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-tech font-bold tracking-tight text-[#4a4a4a] leading-none">Webakruti</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 italic">{brand.sub}</span>
                  </div>
                )}
                {brand.style === "webalar" && (
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0.5">
                      <div className="w-6 h-2 bg-slate-400 rounded-sm" />
                      <div className="w-8 h-4 bg-slate-900 rounded-sm" />
                      <div className="w-4 h-2 bg-slate-600 rounded-sm" />
                    </div>
                    <div className="flex flex-col leading-[0.85]">
                      <span className="font-bold text-2xl text-[#1a1a1a]">{brand.name}</span>
                      <span className="text-[7px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{brand.sub}</span>
                    </div>
                  </div>
                )}
                {brand.style === "quadtech" && (
                  <div className="flex items-center gap-3">
                    <div className="grid grid-cols-2 gap-1.5 rotate-45">
                      <div className="w-3.5 h-3.5 bg-slate-300" />
                      <div className="w-3.5 h-3.5 bg-slate-500" />
                      <div className="w-3.5 h-3.5 bg-slate-800" />
                      <div className="w-3.5 h-3.5 bg-slate-400" />
                    </div>
                    <span className="font-serif font-bold text-3xl text-[#1a1a1a] tracking-tight">{brand.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate) */}
          <div className="flex gap-20 items-center pr-20">
            {brands.map((brand, index) => (
              <div
                key={`b2-${index}`}
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                {brand.style === "circle" && (
                  <div className="flex items-center">
                    <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-2xl pl-0.5">a.</div>
                  </div>
                )}
                {brand.style === "box" && (
                  <div className="flex items-center gap-2 bg-[#1a1a1a] text-white px-3.5 py-2.5 rounded-xl">
                    <brand.icon size={24} className="opacity-90" />
                    <div className="flex flex-col leading-[0.85]">
                      <span className="font-bold text-xl tracking-tight">{brand.name}</span>
                      <span className="text-[7px] tracking-[0.2em] font-bold opacity-60 mt-0.5">{brand.sub}</span>
                    </div>
                  </div>
                )}
                {brand.style === "shibui" && (
                  <div className="relative flex flex-col items-start px-2">
                    <span className="text-[7px] absolute -top-1 left-2 font-bold text-slate-400 uppercase tracking-widest">{brand.sub}</span>
                    <div className="flex items-center relative">
                      <span className="text-4xl font-tech font-bold tracking-tighter text-[#1a1a1a] relative z-10">shibui</span>
                      <div className="absolute -right-1 top-1 w-6 h-6 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <div className="absolute right-3 -top-1 w-5 h-5 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <span className="text-[6px] absolute -top-1 -right-2 font-bold">TM</span>
                    </div>
                  </div>
                )}
                {brand.style === "ungray" && (
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-tech font-bold tracking-tighter text-[#4a4a4a] leading-none">ungray</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{brand.sub}</span>
                  </div>
                )}
                {brand.style === "octagon" && (
                  <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden"
                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <div className="absolute inset-[1px] bg-slate-400"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="absolute inset-[2.5px] bg-[#1a1a1a]"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="flex flex-col items-center justify-center text-[5px] text-white font-bold leading-tight z-10 px-1 text-center">
                      <span>STOP</span>
                      <span>&</span>
                      <span>THINK</span>
                    </div>
                  </div>
                )}
                {brand.style === "webakruti" && (
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-tech font-bold tracking-tight text-[#4a4a4a] leading-none">Webakruti</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 italic">{brand.sub}</span>
                  </div>
                )}
                {brand.style === "webalar" && (
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0.5">
                      <div className="w-6 h-2 bg-slate-400 rounded-sm" />
                      <div className="w-8 h-4 bg-slate-900 rounded-sm" />
                      <div className="w-4 h-2 bg-slate-600 rounded-sm" />
                    </div>
                    <div className="flex flex-col leading-[0.85]">
                      <span className="font-bold text-2xl text-[#1a1a1a]">{brand.name}</span>
                      <span className="text-[7px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{brand.sub}</span>
                    </div>
                  </div>
                )}
                {brand.style === "quadtech" && (
                  <div className="flex items-center gap-3">
                    <div className="grid grid-cols-2 gap-1.5 rotate-45">
                      <div className="w-3.5 h-3.5 bg-slate-300" />
                      <div className="w-3.5 h-3.5 bg-slate-500" />
                      <div className="w-3.5 h-3.5 bg-slate-800" />
                      <div className="w-3.5 h-3.5 bg-slate-400" />
                    </div>
                    <span className="font-serif font-bold text-3xl text-[#1a1a1a] tracking-tight">{brand.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default BrandsSection;
