"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FarLeftImg from "@/assets/6.jpeg";
import LeftImg from "@/assets/1.jpeg";
import CenterImg from "@/assets/3.jpeg";
import CyberImg from "@/assets/cyber_security.png";
import RightImg from "@/assets/5.jpeg";
import FarRightImg from "@/assets/4.jpeg";

const CARDS = [
  { id: "ui-ux", title: "UI/UX", img: FarLeftImg, scale: 1.8 },
  { id: "automation", title: "AUTOMATION", img: LeftImg, scale: 1.3 },
  { id: "ai", title: "AI", img: CenterImg, scale: 1.3 },
  { id: "cyber-security", title: "CYBER SECURITY", img: CyberImg, scale: 1.3 },
  { id: "dev", title: "DEV", img: FarRightImg, scale: 1.3 },
];

const HomeImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(nextSlide, 3500);
    }
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, nextSlide]);

  const getSlotIndex = (itemIndex: number) => {
    return (itemIndex + currentIndex) % CARDS.length;
  };

  const getSlotStyles = (slotIndex: number) => {
    switch (slotIndex) {
      case 0: // Far Left
        return {
          x: "-180%",
          opacity: 0.7,
          scale: 0.82,
          zIndex: 10,
          skewY: 6,
          height: "250px",
          filter: "blur(0px)",
        };
      case 1: // Left
        return {
          x: "-90%",
          opacity: 0.9,
          scale: 0.92,
          zIndex: 20,
          skewY: 4,
          height: "310px",
          filter: "blur(0px)",
        };
      case 2: // Center (Active)
        return {
          x: "0%",
          opacity: 1,
          scale: 1.05,
          zIndex: 40,
          skewY: 0,
          height: "380px",
          filter: "blur(0px)",
        };
      case 3: // Right
        return {
          x: "90%",
          opacity: 0.9,
          scale: 0.92,
          zIndex: 20,
          skewY: -4,
          height: "310px",
          filter: "blur(0px)",
        };
      case 4: // Far Right
        return {
          x: "180%",
          opacity: 0.7,
          scale: 0.82,
          zIndex: 10,
          skewY: -6,
          height: "250px",
          filter: "blur(0px)",
        };
      default:
        return { x: "0%", opacity: 0, scale: 0.5, zIndex: 0, skewY: 0, height: "380px", filter: "blur(0px)" };
    }
  };

  return (
    <section
      className="relative z-10 overflow-visible w-full bg-transparent pt-0 pb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hexagon Pattern Background - Fixed for seamless transition */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")',
          backgroundAttachment: 'fixed'
        }} />
      <div className="w-full relative flex flex-col items-center justify-end px-4 min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl h-[400px] md:h-[500px] lg:h-[550px] flex items-end justify-center">
          <AnimatePresence initial={false}>
            {CARDS.map((card, index) => {
              const slotIndex = getSlotIndex(index);
              const styles = getSlotStyles(slotIndex);
              const isActive = slotIndex === 2;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: styles.x,
                    opacity: styles.opacity,
                    scale: styles.scale,
                    zIndex: styles.zIndex,
                    skewY: styles.skewY,
                    filter: styles.filter,
                    y: isActive ? [0, -12, 0] : 0,
                  }}
                  transition={{
                    x: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.8 },
                    scale: { duration: 1.2 },
                    skewY: { duration: 1.2 },
                    y: isActive ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5 },
                    zIndex: { duration: 0 } // Instant depth swap to prevent overlap issues
                  }}
                  className="absolute bottom-12 flex flex-col items-center gap-6 md:gap-10 will-change-transform origin-bottom"
                  style={{ zIndex: styles.zIndex }}
                >
                  {/* Label - Fixed visibility and z-index */}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.15 : 0.95,
                      y: isActive ? -12 : 0,
                      opacity: 1,
                    }}
                    className="text-blue-950 font-black text-[12px] md:text-base lg:text-xl tracking-[0.1em] font-tech uppercase drop-shadow-md z-[100] relative text-center whitespace-nowrap"
                  >
                    {card.title}
                  </motion.span>

                  {/* Card Body */}
                  <motion.div
                    animate={{
                      height: styles.height
                    }}
                    className={`
                      relative w-[120px] md:w-[210px] lg:w-[280px] 
                      rounded-xl md:rounded-2xl lg:rounded-[1.5rem] overflow-hidden bg-white shadow-2xl transition-all duration-700
                      border-[2px] md:border-[3px]
                      ${isActive ? "animate-glow-pulse border-blue-400/70" : "border-slate-200/50"}
                    `}
                    style={{ 
                      height: styles.height,
                      maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                    }}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className={`object-cover object-top transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100"}`}
                      style={{ transform: `scale(${card.scale})` }}
                      priority
                      sizes="(max-width: 768px) 140px, (max-width: 1200px) 240px, 320px"
                    />
 
                    {/* Futuristic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-50 pointer-events-none" />
                  </motion.div>

                  {/* Reflection/Glow under active card */}
                  {isActive && (
                    <motion.div
                      layoutId="glow-bottom"
                      className="absolute -bottom-16 w-[130%] h-16 bg-blue-500/15 blur-[60px] rounded-full -z-10"
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default HomeImageSection;
