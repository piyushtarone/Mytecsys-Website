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
import { ChevronRight, ArrowRight } from "lucide-react";
import GallerySection from "./GallerySection";

// Must match the order in GallerySection.tsx
// 0: Rectangle34, 1: Rectangle36, 2: Image38, 3: Image40,
// 4: Rectangle35, 5: Image40_1, 6: Image39, 7: Group90, 8: Image43

const AchievementsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [singleMode, setSingleMode] = React.useState(false);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setSingleMode(false);
    setIsGalleryOpen(true);
  };

  const openGallery = () => {
    setSelectedIndex(0);
    setSingleMode(false);
    setIsGalleryOpen(true);
  };

  return (
    <section id="achievements" className={`py-12 px-4 md:px-6 relative overflow-hidden bg-slate-50/50 ${isGalleryOpen ? 'z-[9999]' : 'z-10'}`}>

      {/* Honeycomb Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left outlined cluster */}
        <svg className="absolute -top-10 -left-14 w-80 h-80 opacity-[0.06] text-tech" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {[[75, 30], [150, 30], [225, 30], [37.5, 95], [112.5, 95], [187.5, 95], [262.5, 95], [75, 160], [150, 160], [225, 160], [37.5, 225], [112.5, 225], [187.5, 225], [262.5, 225]].map(([cx, cy], i) => (
            <polygon key={i} points={`${cx},${cy - 32} ${cx + 28},${cy - 16} ${cx + 28},${cy + 16} ${cx},${cy + 32} ${cx - 28},${cy + 16} ${cx - 28},${cy - 16}`} stroke="currentColor" strokeWidth="2" fill="none" />
          ))}
        </svg>

        {/* Top-right outlined cluster */}
        <svg className="absolute -top-10 -right-14 w-80 h-80 opacity-[0.06] text-tech" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {[[75, 30], [150, 30], [225, 30], [37.5, 95], [112.5, 95], [187.5, 95], [262.5, 95], [75, 160], [150, 160], [225, 160], [37.5, 225], [112.5, 225], [187.5, 225], [262.5, 225]].map(([cx, cy], i) => (
            <polygon key={i} points={`${cx},${cy - 32} ${cx + 28},${cy - 16} ${cx + 28},${cy + 16} ${cx},${cy + 32} ${cx - 28},${cy + 16} ${cx - 28},${cy - 16}`} stroke="currentColor" strokeWidth="2" fill="none" />
          ))}
        </svg>

        {/* Bottom-left outlined cluster */}
        <svg className="absolute -bottom-10 -left-14 w-80 h-80 opacity-[0.06] text-tech" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {[[75, 30], [150, 30], [225, 30], [37.5, 95], [112.5, 95], [187.5, 95], [262.5, 95], [75, 160], [150, 160], [225, 160], [37.5, 225], [112.5, 225], [187.5, 225], [262.5, 225]].map(([cx, cy], i) => (
            <polygon key={i} points={`${cx},${cy - 32} ${cx + 28},${cy - 16} ${cx + 28},${cy + 16} ${cx},${cy + 32} ${cx - 28},${cy + 16} ${cx - 28},${cy - 16}`} stroke="currentColor" strokeWidth="2" fill="none" />
          ))}
        </svg>

        {/* Bottom-right outlined cluster */}
        <svg className="absolute -bottom-10 -right-14 w-80 h-80 opacity-[0.06] text-tech" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {[[75, 30], [150, 30], [225, 30], [37.5, 95], [112.5, 95], [187.5, 95], [262.5, 95], [75, 160], [150, 160], [225, 160], [37.5, 225], [112.5, 225], [187.5, 225], [262.5, 225]].map(([cx, cy], i) => (
            <polygon key={i} points={`${cx},${cy - 32} ${cx + 28},${cy - 16} ${cx + 28},${cy + 16} ${cx},${cy + 32} ${cx - 28},${cy + 16} ${cx - 28},${cy - 16}`} stroke="currentColor" strokeWidth="2" fill="none" />
          ))}
        </svg>

        {/* Centre filled accent */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-[0.03] text-tech" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          {[[40, 25], [100, 25], [10, 80], [70, 80], [130, 80], [40, 135], [100, 135]].map(([cx, cy], i) => (
            <polygon key={i} points={`${cx},${cy - 24} ${cx + 21},${cy - 12} ${cx + 21},${cy + 12} ${cx},${cy + 24} ${cx - 21},${cy + 12} ${cx - 21},${cy - 12}`} />
          ))}
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1 font-tech">
            Our Achievements
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Working Together)
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="relative group w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-2">
              {/* Rectangle 34 — index 0 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(0)} className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[300px] md:h-[380px] cursor-pointer group/img">
                <Image
                  src={Rectangle34}
                  alt="Cyber Hack 1st Runner Up"
                  className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>

              {/* Group 90 (index 7) and Image 43 (index 8) */}
              <div className="grid grid-cols-12 gap-2 h-[120px] md:h-[160px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(7)} className="col-span-8 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={Group90}
                    alt="Special Recognition"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <div className="col-span-4 flex items-center justify-center">
                  <button
                    suppressHydrationWarning={true}
                    onClick={() => openImage(8)} className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-slate-100 w-full h-full flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                    <Image
                      src={Image43}
                      alt="MTS Logo"
                      className="w-12 md:w-16 h-auto drop-shadow-sm"
                    />
                  </button>
                </div>
              </div>

              {/* Image 39 — index 6 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(6)} className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[200px] md:h-[240px] cursor-pointer group/img">
                <Image
                  src={Image39}
                  alt="Industry Leadership"
                  className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-2">
              {/* Top Pair: Rectangle 36 (index 1) and Image 38 (index 2) */}
              <div className="grid grid-cols-2 gap-2 h-[150px] md:h-[200px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(1)} className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={Rectangle36}
                    alt="Cyber Hack 2024"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(2)} className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={Image38}
                    alt="Innovation Award"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
              </div>

              {/* Image 40 — index 3 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(3)} className="rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[270px] md:h-[340px] cursor-pointer group/img">
                <Image
                  src={Image40}
                  alt="Govt of Maharashtra Recognition"
                  className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>

              {/* Bottom Pair: Rectangle 35 (index 4) and Image 40_1 (index 5) */}
              <div className="grid grid-cols-5 gap-2 h-[200px] md:h-[240px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(4)} className="col-span-3 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={Rectangle35}
                    alt="Academic Excellence"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(5)} className="col-span-2 rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={Image40_1}
                    alt="Achievement"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button
            suppressHydrationWarning={true}
            onClick={openGallery}
            className="inline-flex items-center gap-2 text-[#2589e9] font-bold hover:text-[#1d76cc] transition-all group text-base"
          >
            View All
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        {/* Gallery Modal */}
        <GallerySection
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialIndex={selectedIndex}
          singleImageMode={singleMode}
        />
      </div>
    </section>
  );
};

export default AchievementsSection;
