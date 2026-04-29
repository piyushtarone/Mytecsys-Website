"use client";

import React from "react";
import Rectangle34 from "@/assets/Rectangle 34.jpg";
import Rectangle35 from "@/assets/Rectangle 35.png";
import Rectangle36 from "@/assets/Rectangle 36.jpg";
import Image38 from "@/assets/image 38.jpg";
import Image39 from "@/assets/image 39.jpg";
import Image40 from "@/assets/image 40.jpg";
import Image43 from "@/assets/image 43.png";
import Group90 from "@/assets/Group 90.png";
import Image40_1 from "@/assets/image 40 (1).jpg";
import Image from "next/image";

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1 font-tech">
            Our Achievements
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Working Together)
          </p>
        </div>

        {/* Two Column Layout for Perfect Vertical Alignment */}
        <div className="relative group w-full max-w-5xl mx-auto">
          {/* Slider Navigation Icons - Positioned on sides */}
          <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-white/80 backdrop-blur-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 z-30 shadow-md">
            <span className="text-lg font-light">{"<"}</span>
          </button>
          <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-white/80 backdrop-blur-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 z-30 shadow-md">
            <span className="text-lg font-light">{">"}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          
          {/* LEFT COLUMN: Under Rectangle 34 */}
          <div className="flex flex-col gap-2">
            {/* Rectangle 34 */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[300px] md:h-[380px]">
              <Image
                src={Rectangle34}
                alt="Cyber Hack 1st Runner Up"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            {/* Group 90 and Image 43 (Logo) */}
            <div className="grid grid-cols-12 gap-2 h-[120px] md:h-[160px]">
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image
                  src={Group90}
                  alt="Special Recognition"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="col-span-4 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-slate-100 w-full h-full flex items-center justify-center">
                  <Image
                    src={Image43}
                    alt="MTS Logo"
                    className="w-12 md:w-16 h-auto drop-shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Image 39 (Industry Leadership) */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[200px] md:h-[240px]">
              <Image
                src={Image39}
                alt="Industry Leadership"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Under Image 40 */}
          <div className="flex flex-col gap-2">
            {/* Top Pair: Rectangle 36 and Image 38 */}
            <div className="grid grid-cols-2 gap-2 h-[150px] md:h-[200px]">
              <div className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image
                  src={Rectangle36}
                  alt="Cyber Hack 2024"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image
                  src={Image38}
                  alt="Innovation Award"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Image 40 (Govt of Maharashtra) */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[270px] md:h-[340px]">
              <Image
                src={Image40}
                alt="Govt of Maharashtra Recognition"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Bottom Pair: Rectangle 35 and Image 40(1) */}
            <div className="grid grid-cols-5 gap-2 h-[200px] md:h-[240px]">
              <div className="col-span-3 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image
                  src={Rectangle35}
                  alt="Academic Excellence"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image
                  src={Image40_1}
                  alt="Achievement"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
