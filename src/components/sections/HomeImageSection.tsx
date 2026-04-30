import React from "react";
import Image from "next/image";
// import HomeImg from "@/assets/2.jpeg";
import FarLeftImg from "@/assets/6.jpeg";
import LeftImg from "@/assets/1.jpeg";
import CenterImg from "@/assets/3.jpeg";
import RightImg from "@/assets/5.jpeg";
import FarRightImg from "@/assets/4.jpeg";

const HomeImageSection = () => {
  return (
    <section className="relative z-10 overflow-hidden w-full bg-transparent">
      <div className="w-full relative flex items-end justify-center px-4">


        {/* Image Gallery Group */}
        <div className="relative z-20 flex items-end gap-1 md:gap-2 lg:gap-3 pb-0">
          {/* Far Left Image (6.jpeg) */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center gap-2 origin-top-left skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">UI/UX</span>
              <div className="relative w-[90px] h-[105px] md:w-[160px] md:h-[185px] lg:w-[220px] lg:h-[265px] rounded-2xl overflow-hidden bg-white group animate-glow-pulse border-2 transition-all duration-500">
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
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center gap-2 origin-top-left skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">Automation</span>
              <div className="relative w-[90px] h-[120px] md:w-[160px] md:h-[210px] lg:w-[220px] lg:h-[290px] rounded-2xl overflow-hidden bg-white group animate-glow-pulse border-2 transition-all duration-500">
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
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">AI</span>
              <div className="relative w-[90px] h-[135px] md:w-[160px] md:h-[240px] lg:w-[220px] lg:h-[320px] rounded-2xl overflow-hidden bg-white group animate-glow-pulse border-2 transition-all duration-500">
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
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center gap-2 origin-top-right -skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">AR</span>
              <div className="relative w-[90px] h-[120px] md:w-[160px] md:h-[210px] lg:w-[220px] lg:h-[290px] rounded-2xl overflow-hidden bg-white group animate-glow-pulse border-2 transition-all duration-500">
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
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="flex flex-col items-center gap-2 origin-top-right -skew-y-[8deg]">
              <span className="text-blue-950 font-extrabold text-[10px] md:text-xs tracking-[0.2em] font-tech uppercase">Dev</span>
              <div className="relative w-[90px] h-[105px] md:w-[160px] md:h-[185px] lg:w-[220px] lg:h-[265px] rounded-2xl overflow-hidden bg-white group animate-glow-pulse border-2 transition-all duration-500">
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

        {/* Bottom Smooth Blend to White - Now on top of images (z-30) to create 'cut' effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white via-white/90 to-transparent z-30" />
      </div>
    </section>
  );
};

export default HomeImageSection;
