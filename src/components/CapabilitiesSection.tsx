"use client";

import Image from "next/image";
import ai from "@/assets/ai.png";
import ar from "@/assets/ar.png";
import automation from "@/assets/automation.png";
import dev from "@/assets/dev.png";
import ui_ux from "@/assets/ui_ux.png";

const capabilities = [
  { id: "ui-ux", label: "UI/UX", image: ui_ux, slant: "left-outer" },
  { id: "automation", label: "Automation", image: automation, slant: "left-inner" },
  { id: "ai", label: "AI", image: ai, slant: "center" },
  { id: "ar", label: "AR", image: ar, slant: "right-inner" },
  { id: "dev", label: "Dev", image: dev, slant: "right-outer" },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-nowrap justify-center items-end -space-x-6 md:-space-x-12 lg:-space-x-16 perspective-[2000px] mb-20">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className={`relative group transition-all duration-500 ease-out ${
                cap.slant === "center"
                  ? "w-40 md:w-56 lg:w-64 h-[280px] md:h-[380px] lg:h-[420px] z-30"
                  : "w-28 md:w-40 lg:w-48 h-[200px] md:h-[280px] lg:h-[320px] z-10 opacity-90 hover:opacity-100 hover:z-40"
              }`}
              style={{
                transform: 
                  cap.slant === "left-outer" ? "rotateY(30deg) rotateX(5deg) translateZ(-50px)" :
                  cap.slant === "left-inner" ? "rotateY(20deg) rotateX(2deg) translateZ(-25px)" :
                  cap.slant === "right-inner" ? "rotateY(-20deg) rotateX(2deg) translateZ(-25px)" :
                  cap.slant === "right-outer" ? "rotateY(-30deg) rotateX(5deg) translateZ(-50px)" :
                  "translateZ(50px)",
              }}
            >
              <div className="absolute top-[-40px] left-0 right-0 text-center mb-4">
                <span className={`font-tech font-bold transition-all duration-300 ${
                  cap.slant === "center" 
                    ? "text-2xl md:text-3xl text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]" 
                    : "text-lg md:text-xl text-black/60 group-hover:text-black"
                }`}>
                  {cap.label}
                </span>
              </div>
              <div className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-black transition-transform duration-500 group-hover:scale-105 group-hover:border-primary">
                <Image
                  src={cap.image}
                  alt={cap.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-fade-in">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-black mb-3 tracking-tight">
            Associated Brands
          </h2>
          <p className="text-black text-base md:text-lg font-medium tracking-[0.2em] uppercase opacity-60 mb-12">
            (Top brands)
          </p>

          <div className="relative w-full overflow-hidden py-12 border-y border-black/10 hover:border-black/30 transition-colors">
            <div className="flex animate-scroll whitespace-nowrap items-center">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="inline-flex items-center justify-center mx-10 md:mx-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                >
                  {brand.type === "octagon" && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black flex items-center justify-center text-[8px] leading-[1] text-white font-bold p-1 text-center [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
                        STOP & THINK
                      </div>
                    </div>
                  )}
                  {brand.type === "circle" && (
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                      a.
                    </div>
                  )}
                  {brand.type === "boxed" && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg text-white font-bold border border-black">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-2 h-2 bg-white/20" />
                        <div className="w-2 h-2 bg-white/40" />
                        <div className="w-2 h-2 bg-white/60" />
                        <div className="w-2 h-2 bg-white/80" />
                      </div>
                      <span className="text-xl tracking-tighter">{brand.name}</span>
                    </div>
                  )}
                  {brand.type === "text" && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-none">
                        {brand.name}
                      </span>
                      {brand.sub && <span className="text-[8px] text-black font-medium tracking-widest opacity-60">{brand.sub}</span>}
                    </div>
                  )}
                  {brand.type === "dual" && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black/5 rounded-lg flex flex-col gap-0.5 p-1.5 overflow-hidden border border-black/20">
                        <div className="w-full h-1/2 bg-black/40 rounded-sm" />
                        <div className="w-2/3 h-1/2 bg-black/60 rounded-sm" />
                      </div>
                      <span className="text-2xl font-bold text-black">{brand.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

const brands = [
  { name: "Webakruti", type: "text", sub: "We are the change" },
  { name: "Webalar", type: "dual" },
  { name: "QuadTech", type: "text" },
  { name: "shibui", type: "text", sub: "STUDIO" },
  { name: "a.", type: "circle" },
  { name: "WebStack", type: "boxed" },
  { name: "Stop & Think", type: "octagon" },
];
