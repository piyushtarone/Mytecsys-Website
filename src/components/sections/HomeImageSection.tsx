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
  { id: "ar", title: "Cyber Security", img: CyberImg, scale: 1.3 },
  { id: "dev", title: "DEV", img: FarRightImg, scale: 1.3 },
];

const HomeImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  }, [currentIndex]);

  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(nextSlide, 3000);
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
          x: "-210%",
          y: "0px",
          opacity: 0.7,
          scale: 0.9,
          zIndex: 10,
          skewY: 12,
          height: "420px",
          filter: "blur(0.5px)",
        };
      case 1: // Left
        return {
          x: "-105%",
          y: "0px",
          opacity: 0.9,
          scale: 0.95,
          zIndex: 20,
          skewY: 6,
          height: "420px",
          filter: "blur(0px)",
        };
      case 2: // Center (Active)
        return {
          x: "0%",
          y: "0px",
          opacity: 1,
          scale: 1.05,
          zIndex: 40,
          skewY: 0,
          height: "420px",
          filter: "blur(0px)",
        };
      case 3: // Right
        return {
          x: "105%",
          y: "0px",
          opacity: 0.9,
          scale: 0.95,
          zIndex: 20,
          skewY: -6,
          height: "420px",
          filter: "blur(0px)",
        };
      case 4: // Far Right
        return {
          x: "210%",
          y: "0px",
          opacity: 0.7,
          scale: 0.9,
          zIndex: 10,
          skewY: -12,
          height: "420px",
          filter: "blur(0.5px)",
        };
      default:
        return { x: "0%", y: "0px", opacity: 0, scale: 0.5, zIndex: 0, skewY: 0, height: "420px", filter: "blur(0px)" };
    }
  };

  return (
    <section
      className="relative z-10 overflow-visible w-full bg-transparent pt-0 pb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="w-full relative flex flex-col items-center justify-end px-4">

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl h-[460px] md:h-[480px] lg:h-[500px] flex items-end justify-center -mt-12 md:-mt-20">
          <AnimatePresence initial={false}>
            {CARDS.map((card, index) => {
              const slotIndex = getSlotIndex(index);
              const prevSlotIndex = (index + prevIndex) % CARDS.length;
              const isJump = (slotIndex === 0 && prevSlotIndex === 4) || (slotIndex === 4 && prevSlotIndex === 0);
              const styles = getSlotStyles(slotIndex);
              const isActive = slotIndex === 2;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: styles.x,
                    y: styles.y,
                    opacity: styles.opacity,
                    scale: styles.scale,
                    zIndex: styles.zIndex,
                    filter: styles.filter,
                    skewY: styles.skewY,
                  }}
                  transition={{
                    x: { 
                      duration: isJump ? 0 : 0.8, 
                      ease: [0.32, 0.72, 0, 1] 
                    },
                    y: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.8 },
                    zIndex: { duration: 0 },
                    skewY: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
                  }}
                  className="absolute bottom-0 flex flex-col items-center gap-3 will-change-transform origin-bottom"
                  style={{ zIndex: styles.zIndex }}
                >
                  {/* Label - Fixed visibility and z-index */}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.1 : 0.9,
                      y: 0,
                      opacity: 1,
                    }}
                      className="text-[#0a192f] font-bold text-[11px] md:text-sm lg:text-[15px] tracking-[0.15em] font-tech uppercase z-[100] relative text-center whitespace-nowrap flex items-center gap-2"
                  >
                    {card.title}
                    {card.title === "UI/UX" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    )}
                  </motion.span>

                  {/* Background Glow Aura */}
                  <motion.div
                    className="absolute inset-0 -z-10 bg-sky-400/20 blur-[40px] md:blur-[60px] rounded-full scale-[1.2] opacity-40"
                  />

                  {/* Card Body */}
                  <motion.div
                    animate={{
                      height: styles.height,
                      y: 0
                    }}
                    transition={{
                      height: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
                      y: { duration: 0.5 }
                    }}
                    className={`
                      relative w-[100px] md:w-[160px] lg:w-[220px] 
                      rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden bg-white transition-all duration-700
                      border-[1.5px] md:border-[2px] border-sky-400/60 shadow-[0_0_25px_rgba(56,189,248,0.3)]
                      ${isActive ? "animate-glow-pulse" : ""}
                    `}
                    style={{
                      height: styles.height,
                      maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                      filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.3))'
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
