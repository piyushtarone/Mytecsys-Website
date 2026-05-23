"use client";

import React from "react";
import achievementCheck from "@/assets/achievement_check.png";
import achievementStage from "@/assets/achievement_stage.png";
import achievementBag from "@/assets/achievement_bag.png";
import achievementPolice from "@/assets/achievement_police.jpg";
import achievementAcademic from "@/assets/achievement_academic.jpg";
import achievementEcode from "@/assets/achievement_ecode.png";
import achievementOutside from "@/assets/achievement_outside.png";
import achievementPurple from "@/assets/achievement_purple.png";
import achievementBni from "@/assets/achievement_bni.png";
import achievementLogo from "@/assets/achievement_logo.png";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import GallerySection from "./GallerySection";

// Must match the order in GallerySection.tsx
// 0: achievementCheck, 1: achievementStage, 2: achievementBag, 3: achievementPolice,
// 4: achievementAcademic, 5: achievementEcode, 6: achievementOutside,
// 7: achievementPurple, 8: achievementBni, 9: achievementLogo

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
    <section id="achievements" className={`pt-[120px] pb-[60px] px-4 md:px-6 relative overflow-hidden bg-slate-50/50 scroll-mt-20 ${isGalleryOpen ? 'z-[48]' : 'z-10'}`}>

      {/* Removed Honeycomb Background Decoration */}

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-slate-850 mb-1 font-tech tracking-normal">
            Our Achievements
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Working Together)
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="relative group w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">
              {/* achievementCheck — index 0 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(0)} className="w-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[300px] md:h-[380px] cursor-pointer group/img">
                <Image
                  src={achievementCheck}
                  alt="Cyber Hack 1st Runner Up"
                  className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>

              {/* achievementPurple (index 7), achievementBni (index 8) and achievementLogo (index 9) */}
              <div className="grid grid-cols-3 gap-4 h-[120px] md:h-[160px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(7)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementPurple}
                    alt="Special Recognition"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(8)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementBni}
                    alt="Special Recognition"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(9)} className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-slate-100 w-full h-full flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                  <Image
                    src={achievementLogo}
                    alt="MTS Logo"
                    className="w-12 md:w-16 h-auto drop-shadow-sm"
                  />
                </button>
              </div>

              {/* achievementStage — index 1 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(1)} className="w-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[200px] md:h-[240px] cursor-pointer group/img">
                <Image
                  src={achievementStage}
                  alt="Cyber Hack 2024"
                  className="w-full h-full object-cover object-top group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4">
              {/* Top Pair: achievementOutside (index 6) and achievementPolice (index 3) */}
              <div className="grid grid-cols-2 gap-4 h-[150px] md:h-[200px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(6)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementOutside}
                    alt="Industry Leadership"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(3)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementPolice}
                    alt="Govt of Maharashtra Recognition"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
              </div>

              {/* achievementAcademic — index 4 */}
              <button
                suppressHydrationWarning={true}
                onClick={() => openImage(4)} className="w-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm h-[270px] md:h-[340px] cursor-pointer group/img">
                <Image
                  src={achievementAcademic}
                  alt="Academic Excellence"
                  className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                />
              </button>

              {/* Bottom Pair: achievementEcode (index 5) and achievementBag (index 2) */}
              <div className="grid grid-cols-2 gap-4 h-[200px] md:h-[240px]">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(5)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementEcode}
                    alt="Achievement"
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500"
                  />
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => openImage(2)} className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm cursor-pointer group/img">
                  <Image
                    src={achievementBag}
                    alt="Innovation Award"
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
            className="inline-flex items-center gap-2 text-[#1b6cd5] font-bold hover:text-[#1558b0] transition-all group text-base"
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
