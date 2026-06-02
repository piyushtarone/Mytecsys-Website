import React from "react";
import { Cpu } from "lucide-react";

interface BrandItem {
  name: string;
  style: string;
  icon?: React.ComponentType<any>;
  sub?: string;
  src?: string;
  height?: number;
  width?: number;
  filter?: string;
  isDarkBox?: boolean;
  transform?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const brands: BrandItem[] = [
  { name: "WebStack", style: "image", src: "/webstack logo.png", height: 32, width: 118, isDarkBox: true },
  { name: "shibui", sub: "studio", style: "shibui" },
  { name: "ungray", style: "image", src: "/ungray.jpg", height: 140, width: 140 },
  { name: "Webakruti", sub: "We are the change", style: "webakruti" },
  { name: "Webalar", style: "image", src: "/webalar.svg", height: 55, width: 197 },
  { name: "QuadTech", style: "image", src: "/quadtech.jpg", height: 210, width: 210 },
  { name: "Areen", style: "image", src: "/areen.jpg", height: 140, width: 140 },
];

const BrandsSection = () => {
  return (
    <section className="pt-2 md:pt-4 pb-2 md:pb-6 bg-transparent overflow-hidden relative z-20">
      {/* Floating Accent Particles */}
      <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-blue-500 rounded-full blur-[1px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-[12%] w-3 h-3 bg-blue-400 rounded-full blur-[2px] opacity-30 animate-pulse" />
      <div className="absolute top-1/4 right-[30%] w-1.5 h-1.5 bg-blue-600 rounded-full opacity-20" />

      <div className="container mx-auto max-w-7xl px-2 md:px-4 mb-2 md:mb-4 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[#1a183b] font-sans font-black text-[28px] md:text-[32px] tracking-tight text-center">
            Associated Brands
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
            (Top brands)
          </p>
        </div>
      </div>

      {/* Brand Slider (Marquee) */}
      <div className="relative flex items-center overflow-hidden group">
        <div className="flex animate-marquee py-2 whitespace-nowrap items-center will-change-transform">
          {/* First Set */}
          <div className="flex gap-20 items-center pr-20">
            {brands.map((brand, index) => (
              <div
                key={`b1-${index}`}
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
              >
                {brand.style === "circle" && (
                  <div className="flex items-center shrink-0">
                    <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-2xl pl-0.5">a.</div>
                  </div>
                )}
                {brand.style === "image" && brand.src && (
                  brand.isDarkBox ? (
                    <div className="flex items-center bg-[#1a1a1a] px-3.5 py-2 rounded-xl h-12 shrink-0">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                        alt={brand.name}
                        style={{
                          height: `${brand.height}px`,
                          width: `${brand.width}px`,
                          filter: brand.filter || undefined,
                          transform: brand.transform || undefined
                        }}
                        className="object-contain shrink-0"
                      />
                    </div>
                  ) : (
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                      alt={brand.name}
                      style={{
                        height: `${brand.height}px`,
                        width: `${brand.width}px`,
                        filter: brand.filter || undefined,
                        transform: brand.transform || undefined
                      }}
                      className="object-contain shrink-0"
                    />
                  )
                )}
                {brand.style === "shibui" && (
                  <div className="relative flex flex-col items-start px-2 shrink-0">
                    <span className="text-[7px] absolute -top-1 left-2 font-bold text-slate-400 uppercase tracking-widest">{brand.sub}</span>
                    <div className="flex items-center relative">
                      <span className="text-4xl font-tech font-bold tracking-tighter text-[#1a1a1a] relative z-10">shibui</span>
                      <div className="absolute -right-1 top-1 w-6 h-6 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <div className="absolute right-3 -top-1 w-5 h-5 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <span className="text-[6px] absolute -top-1 -right-2 font-bold">TM</span>
                    </div>
                  </div>
                )}
                {brand.style === "octagon" && (
                  <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden shrink-0"
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
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-3xl font-tech font-bold tracking-tight text-[#4a4a4a] leading-none">Webakruti</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 italic">{brand.sub}</span>
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
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
              >
                {brand.style === "circle" && (
                  <div className="flex items-center shrink-0">
                    <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-2xl pl-0.5">a.</div>
                  </div>
                )}
                {brand.style === "image" && brand.src && (
                  brand.isDarkBox ? (
                    <div className="flex items-center bg-[#1a1a1a] px-3.5 py-2 rounded-xl h-12 shrink-0">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                        alt={brand.name}
                        style={{
                          height: `${brand.height}px`,
                          width: `${brand.width}px`,
                          filter: brand.filter || undefined,
                          transform: brand.transform || undefined
                        }}
                        className="object-contain shrink-0"
                      />
                    </div>
                  ) : (
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                      alt={brand.name}
                      style={{
                        height: `${brand.height}px`,
                        width: `${brand.width}px`,
                        filter: brand.filter || undefined,
                        transform: brand.transform || undefined
                      }}
                      className="object-contain shrink-0"
                    />
                  )
                )}
                {brand.style === "shibui" && (
                  <div className="relative flex flex-col items-start px-2 shrink-0">
                    <span className="text-[7px] absolute -top-1 left-2 font-bold text-slate-400 uppercase tracking-widest">{brand.sub}</span>
                    <div className="flex items-center relative">
                      <span className="text-4xl font-tech font-bold tracking-tighter text-[#1a1a1a] relative z-10">shibui</span>
                      <div className="absolute -right-1 top-1 w-6 h-6 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <div className="absolute right-3 -top-1 w-5 h-5 border-[0.5px] border-slate-300 rounded-full z-0 opacity-50" />
                      <span className="text-[6px] absolute -top-1 -right-2 font-bold">TM</span>
                    </div>
                  </div>
                )}
                {brand.style === "octagon" && (
                  <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden shrink-0"
                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <div className="absolute inset-[1px] bg-slate-400"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="absolute inset-[2.5px] bg-[#1a1a1a]"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    <div className="flex flex-col items-center justify-center text-[5px] text-white font-bold leading-tight z-10 px-1 text-center shrink-0">
                      <span>STOP</span>
                      <span>&</span>
                      <span>THINK</span>
                    </div>
                  </div>
                )}
                {brand.style === "webakruti" && (
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-3xl font-tech font-bold tracking-tight text-[#4a4a4a] leading-none">Webakruti</span>
                    <span className="text-[6px] font-bold text-slate-400 mt-1 italic">{brand.sub}</span>
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
