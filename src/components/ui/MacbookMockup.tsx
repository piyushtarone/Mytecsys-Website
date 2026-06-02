import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MacbookMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export function MacbookMockup({ src, alt, className }: MacbookMockupProps) {
  return (
    <div className={cn("relative w-full max-w-xl mx-auto flex flex-col items-center justify-center my-6", className)}>
      {/* Wrapper */}
      <div className="relative w-full transition-transform duration-700 ease-out hover:scale-105">
        
        {/* Screen Lid */}
        <div className="relative w-full aspect-[16/10] bg-black rounded-t-[1.25rem] p-1.5 sm:p-2.5 shadow-2xl border-t-2 border-x-2 border-[#e0e2e5] ring-1 ring-black/10 z-20 overflow-hidden">
          {/* Bezel inner border */}
          <div className="absolute inset-0 rounded-t-[1.1rem] ring-1 ring-white/10 pointer-events-none" />
          
          {/* Camera Dot */}
          <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#111] rounded-full flex items-center justify-center shadow-inner">
            <div className="w-[1px] h-[1px] sm:w-0.5 sm:h-0.5 bg-blue-900/60 rounded-full" />
          </div>
          
          {/* Screen Content */}
          <div className="relative w-full h-full bg-[#111] overflow-hidden mt-0.5 border border-black/80 rounded-sm">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority
            />
            {/* Screen Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Keyboard Base */}
        <div className="relative w-[116%] h-3 sm:h-5 md:h-7 bg-gradient-to-b from-[#f3f4f6] via-[#d1d5db] to-[#9ca3af] rounded-b-[1.5rem] flex flex-col items-center justify-start shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] z-10 border-t border-white left-1/2 -translate-x-1/2">
          
          {/* Hinge/opening groove */}
          <div className="w-1/5 h-0.5 sm:h-1 bg-gradient-to-b from-[#9ca3af] to-[#d1d5db] rounded-b-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] opacity-60 mt-[1px]" />
          
          {/* Trackpad indentation (purely visual on the edge) */}
          <div className="absolute top-1 w-1/4 h-1 sm:h-1.5 bg-gradient-to-b from-[#9ca3af] to-[#d1d5db] rounded-b-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] opacity-40" />

          {/* Base bottom highlight */}
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black/10 rounded-b-[1.5rem]" />
        </div>
      </div>

      {/* Shadow underneath */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/30 blur-xl rounded-[100%] -z-10" />
    </div>
  );
}
