"use client";

import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { motion, useInView as motionUseInView } from "framer-motion";
import { cn } from "@/lib/utils";
import WhyCloudImg from "@/assets/why_cloud.png";
import WhyCollaborationImg from "@/assets/why_collaboration.png";
import WhyInnovationImg from "@/assets/why_innovation.png";
import WhySecurityImg from "@/assets/why_security.png";

const contentMap: Record<number, { title: string; copy: string }> = {
  8: {
    title: "Security & Global Trust",
    copy: "We build enterprise-grade security protocols, robust end-to-end data encryption, and transparent developer practices to secure your business assets.",
  },
  7: {
    title: "Next-Gen AI & Tech Innovation",
    copy: "We leverage state-of-the-art machine learning models, neural processing pipelines, and smart automation to keep you ahead of the digital curve.",
  },
  6: {
    title: "Deep Collaborative Synergy",
    copy: "We act as your dedicated engineering and product management partners, working side-by-side to translate business objectives into scalable software.",
  },
  5: {
    title: "Scalable Cloud Architecture",
    copy: "We architect high-performance, cost-optimized cloud solutions with automated continuous deployment to scale seamlessly with your growing user base.",
  },
};

const defaultContent = {
  title: "We Build Trust Through Modern Engineering & Transparency",
  copy: "At Mytecsys, we stand on four foundational pillars: secure, transparent software engineering; pioneering AI innovations; deeply collaborative enterprise growth; and scalable, cost-optimized cloud solutions. We translate advanced technologies into reliable, long-term business advantages.",
};

const WhyUsSection = () => {
  const [activeImage, setActiveImage] = React.useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = motionUseInView(sectionRef, { once: true, margin: "-100px" });

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (isInView && !isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [isInView, isAutoPlaying]);

  // Ordered in visual front-to-back stacking order (Security -> Innovation -> Collaboration -> Cloud)
  const images = [
    { id: 8, src: WhySecurityImg, x: -120, z: 40 },
    { id: 7, src: WhyInnovationImg, x: -80, z: 30 },
    { id: 6, src: WhyCollaborationImg, x: -40, z: 20 },
    { id: 5, src: WhyCloudImg, x: 0, z: 10 },
  ];

  // Auto-cycle effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    let index = 0;
    const cycle = () => {
      const currentImgId = images[index % images.length].id;
      setActiveImage(currentImgId);
      setTimeout(() => {
        setActiveImage(null);
      }, 2000);
      index++;
    };

    cycle();
    const interval = setInterval(cycle, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentContent = activeImage ? contentMap[activeImage] : defaultContent;

  const handleFirstInteraction = () => {
    if (!isAutoPlaying) setIsAutoPlaying(true);
  };

  return (
    <section ref={sectionRef} id="industries" className="py-[60px] px-2 md:px-6 relative z-10 overflow-hidden bg-transparent scroll-mt-20">

      {/* Removed Honeycomb Background Decoration */}

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[#1a183b] font-sans font-black text-[28px] md:text-[32px] tracking-tight text-center">
            Why Mytecsys
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center mb-8">
            (Why we are best)
          </p>

        </div>

        <div className="flex justify-center">
          <div className="relative flex flex-col md:flex-row items-center border border-blue-100 rounded-[2rem] bg-white p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] gap-4 md:gap-12 w-full max-w-7xl overflow-hidden min-h-[420px] md:min-h-[400px]">

            {/* Dark background fade-in to prevent text color contrast flashes */}
            <motion.div
              animate={{ opacity: activeImage && !isMobile ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-slate-950 z-0 pointer-events-none hidden md:block"
            />

            {/* Left Content Area */}
            <div className="md:w-1/2 text-left order-2 md:order-1 relative z-[60] flex flex-col justify-center mt-2 md:mt-0">
              
              {/* Invisible placeholder to force container height based on the longest text */}
              <div className="invisible pointer-events-none" aria-hidden="true">
                <h3 className="text-lg md:text-xl font-black mb-4 font-tech leading-snug">
                  {defaultContent.title}
                </h3>
                <p className="text-sm md:text-sm leading-relaxed font-semibold">
                  {defaultContent.copy}
                </p>
              </div>

              {/* Actual animated content */}
              <div className="absolute inset-0 flex flex-col justify-center">
                <motion.h3
                  key={currentContent.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: activeImage && !isMobile ? "#ffffff" : "#0f172a"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl font-black mb-4 font-tech leading-snug"
                >
                  {currentContent.title}
                </motion.h3>
                <motion.p
                  key={currentContent.copy}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: activeImage && !isMobile ? "rgba(255, 255, 255, 0.9)" : "#64748b"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-sm md:text-sm leading-relaxed font-semibold"
                >
                  {currentContent.copy}
                </motion.p>
              </div>
            </div>

            {/* Right Images Container Spacer */}
            <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 w-full relative h-[220px] md:h-[240px]" />

            {/* Layered Images */}
            {mounted && images.map((img) => {
              const isActive = activeImage === img.id;

              const inactiveTop = isMobile ? 24 : 40;
              const inactiveBottom = isMobile ? "calc(100% - 204px)" : 40;
              const activeTop = isMobile ? 24 : 0;
              const activeBottom = isMobile ? "calc(100% - 244px)" : 0;

              let inactiveLeft: string | number | undefined, inactiveRight: string | number | undefined;
              let activeLeft: string | number = isMobile ? 24 : 0, activeRight: string | number = isMobile ? 24 : 0;
              
              if (isMobile) {
                const translateX = (img.x + 120) * 0.6;
                inactiveLeft = `calc(50% - 116px + ${translateX}px)`;
                inactiveRight = `calc(50% - 44px - ${translateX}px)`;
                activeLeft = "calc(50% - 140px)";
                activeRight = "calc(50% - 140px)";
              } else {
                const translateX = img.x;
                inactiveRight = 40 - translateX;
                inactiveLeft = `calc(100% - 220px - ${inactiveRight}px)`;
              }

              return (
                <motion.div
                  suppressHydrationWarning={true}
                  key={img.id}
                  initial={false}
                  animate={{
                    top: isActive ? activeTop : inactiveTop,
                    bottom: isActive ? activeBottom : inactiveBottom,
                    right: isActive ? activeRight : inactiveRight,
                    left: isActive ? activeLeft : inactiveLeft,
                    zIndex: isActive ? 50 : img.z,
                    borderRadius: isActive ? (isMobile ? "1rem" : "2rem") : "0.5rem",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute overflow-hidden transform-gpu pointer-events-none"
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ scale: isActive ? 1.4 : 1 }}
                      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0"
                    >
                      <ExportedImage
                        src={img.src}
                        alt={`Feature ${img.id}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Rich black gradient overlay for readability */}
                    <motion.div
                      animate={{ opacity: isActive && !isMobile ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/90 via-black/45 to-transparent md:bg-gradient-to-r md:from-black/95 md:via-black/50 md:to-transparent hidden md:block"
                    />
                  </div>
                </motion.div>
              );
            })}

            {!isAutoPlaying && (
              <div
                onMouseEnter={handleFirstInteraction}
                className="absolute inset-0 z-[100] cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
