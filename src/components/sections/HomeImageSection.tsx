import React from "react";
import Image from "next/image";
import HomeImg from "@/assets/2.jpeg";
import FarLeftImg from "@/assets/6.jpeg";
import LeftImg from "@/assets/1.jpeg";
import CenterImg from "@/assets/3.jpeg";
import RightImg from "@/assets/5.jpeg";
import FarRightImg from "@/assets/4.jpeg";

const HomeImageSection = () => {
  return (
    <section className="relative z-10 overflow-hidden w-full bg-white">
      <div className="w-full relative flex items-end justify-center px-4">
        {/* Background Full-Width Image */}
        <div className="absolute inset-0 w-full h-full group">
          <Image
            src={HomeImg}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/50 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-white/40 blur-[60px] pointer-events-none" />
          
          {/* Hexagon Pattern Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
          >
            <defs>
              <pattern id="hexagons-home" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <polygon points="24.8,22 37.3,29.2 37.3,43.4 24.8,50.6 12.3,43.4 12.3,29.2" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="0.5" />
                <polygon points="24.8,-21.6 37.3,-14.4 37.3,0 24.8,7.2 12.3,0 12.3,-14.4" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="0.5" />
                <polygon points="0,0 12.3,7.2 12.3,21.6 0,28.8 -12.3,21.6 -12.3,7.2" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="0.5" />
                <polygon points="50,0 62.3,7.2 62.3,21.6 50,28.8 37.7,21.6 37.7,7.2" fill="none" stroke="currentColor" className="text-slate-300" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons-home)" />
          </svg>
        </div>

        {/* Image Gallery Group */}
        <div className="relative z-20 flex items-end gap-1 md:gap-2 lg:gap-3 pb-0">
          {/* Far Left Image (6.jpeg) */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-2 origin-top-left skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">UI/UX</span>
              <div className="relative w-[90px] h-[105px] md:w-[160px] md:h-[185px] lg:w-[220px] lg:h-[265px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white group">
                <Image
                  src={FarLeftImg}
                  alt="UI/UX"
                  fill
                  className="object-cover object-top scale-[1.8]"
                />
              </div>
            </div>
          </div>

          {/* Left Image (1.jpeg) */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-2 origin-top-left skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">Automation</span>
              <div className="relative w-[90px] h-[120px] md:w-[160px] md:h-[210px] lg:w-[220px] lg:h-[290px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white group">
                <Image
                  src={LeftImg}
                  alt="Automation"
                  fill
                  className="object-cover object-top scale-[1.3]"
                />
              </div>
            </div>
          </div>

          {/* Middle Image (3.jpeg) */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-2">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">AI</span>
              <div className="relative w-[90px] h-[135px] md:w-[160px] md:h-[240px] lg:w-[220px] lg:h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white group">
                <Image
                  src={CenterImg}
                  alt="AI"
                  fill
                  className="object-cover object-top scale-[1.3]"
                />
              </div>
            </div>
          </div>

          {/* Right Image (5.jpeg) */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-2 origin-top-right -skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">AR</span>
              <div className="relative w-[90px] h-[120px] md:w-[160px] md:h-[210px] lg:w-[220px] lg:h-[290px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white group">
                <Image
                  src={RightImg}
                  alt="AR"
                  fill
                  className="object-cover object-top scale-[1.3]"
                />
              </div>
            </div>
          </div>

          {/* Far Right Image (4.jpeg) */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-2 origin-top-right -skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">Dev</span>
              <div className="relative w-[90px] h-[105px] md:w-[160px] md:h-[185px] lg:w-[220px] lg:h-[265px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white group">
                <Image
                  src={FarRightImg}
                  alt="Dev"
                  fill
                  className="object-cover object-top scale-[1.3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom White Overlap */}
        <div className="absolute bottom-0 left-0 right-0 h-10 md:h-20 bg-white z-30" />
      </div>
    </section>
  );
};

export default HomeImageSection;
