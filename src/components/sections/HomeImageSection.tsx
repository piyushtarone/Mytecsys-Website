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
  const [isMobile, setIsMobile] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(nextSlide, 1500);
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
          x: "-208%",
          y: "30px",
          opacity: 1,
          scale: 0.9,
          zIndex: 10,
          skewY: 12,
          height: "320px",
        };
      case 1: // Left
        return {
          x: "-108%",
          y: "0px",
          opacity: 1,
          scale: 0.95,
          zIndex: 20,
          skewY: 6,
          height: "320px",
        };
      case 2: // Center (Active)
        return {
          x: "0%",
          y: "0px",
          opacity: 1,
          scale: 1.05,
          zIndex: 40,
          skewY: 0,
          height: "320px",
        };
      case 3: // Right
        return {
          x: "108%",
          y: "0px",
          opacity: 1,
          scale: 0.95,
          zIndex: 20,
          skewY: -6,
          height: "320px",
        };
      case 4: // Far Right
        return {
          x: "208%",
          y: "30px",
          opacity: 1,
          scale: 0.9,
          zIndex: 10,
          skewY: -12,
          height: "320px",
        };
      default:
        return { x: "0%", y: "0px", opacity: 0, scale: 0.5, zIndex: 0, skewY: 0, height: "420px" };
    }
  };

  return (
    <section
      className="relative z-[100] pt-2 md:pt-3 pb-[30px] flex flex-col items-center justify-start overflow-visible bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="relative z-[100] w-full max-w-7xl px-2 md:px-4 flex flex-col items-center gap-8 md:gap-12">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: isMobile ? 0.45 : 1 }}
          animate={{ opacity: 1, y: 0, scale: isMobile ? 0.45 : 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative max-w-7xl h-[380px] md:h-[420px] lg:h-[450px] flex items-end justify-center -mt-48 md:-mt-20"
          style={{
            width: isMobile ? '800px' : '100%',
            maskImage: isMobile ? 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)' : 'linear-gradient(to bottom, black 0%, black 55%, transparent 95%)',
            WebkitMaskImage: isMobile ? 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)' : 'linear-gradient(to bottom, black 0%, black 55%, transparent 95%)',
            transformOrigin: "bottom center"
          }}
        >
          <AnimatePresence initial={false}>
            {CARDS.map((card, index) => {
              const slotIndex = getSlotIndex(index);
              const prevSlotIndex = (index + prevIndex) % CARDS.length;
              const isJump = (slotIndex === 0 && prevSlotIndex === 4) || (slotIndex === 4 && prevSlotIndex === 0);
              const styles = getSlotStyles(slotIndex);
              const isActive = slotIndex === 2;
              
              const startOpacity = getSlotStyles(prevSlotIndex).opacity;
              const endOpacity = styles.opacity;
              const opacityValue = isJump
                ? [startOpacity, 0, 0, endOpacity]
                : endOpacity;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: styles.x,
                    y: styles.y,
                    opacity: opacityValue,
                    scale: styles.scale,
                    skewY: styles.skewY,
                  }}
                  transition={{
                    x: {
                      duration: isJump ? 0 : 0.8,
                      delay: isJump ? 0.3 : 0,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    y: {
                      duration: isJump ? 0 : 0.8,
                      delay: isJump ? 0.3 : 0,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    opacity: isJump ? {
                      duration: 0.8,
                      times: [0, 0.375, 0.375, 1],
                      ease: "easeInOut"
                    } : {
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    scale: {
                      duration: isJump ? 0 : 0.8,
                      delay: isJump ? 0.3 : 0,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    skewY: {
                      duration: isJump ? 0 : 0.8,
                      delay: isJump ? 0.3 : 0,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  className="absolute bottom-0 flex flex-col items-center gap-1 origin-bottom will-change-transform"
                  style={{ zIndex: styles.zIndex }}
                >
                  {/* Label */}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.05 : 0.9,
                      y: 0,
                      opacity: 1,
                    }}
                    className="text-[#0f172a] font-black text-[9px] md:text-xs lg:text-[13px] tracking-[0.1em] md:tracking-[0.2em] font-tech uppercase z-[100] relative text-center whitespace-nowrap mb-0"
                  >
                    {card.title}
                  </motion.span>

                  {/* Soft Background Glow */}
                  <div className={`absolute -inset-8 rounded-[3rem] bg-blue-400/15 blur-3xl -z-10 transition-opacity duration-700 ${isActive ? 'opacity-90' : 'opacity-30'}`} />

                  {/* Card Body — gradient border wrapper */}
                  <motion.div
                    animate={{
                      height: styles.height,
                      y: 0
                    }}
                    transition={{
                      height: {
                        duration: isJump ? 0 : 0.8,
                        delay: isJump ? 0.3 : 0,
                        ease: [0.4, 0, 0.2, 1]
                      },
                      y: {
                        duration: isJump ? 0 : 0.8,
                        delay: isJump ? 0.3 : 0
                      }
                    }}
                    className="relative w-[150px] md:w-[150px] lg:w-[210px] overflow-hidden transition-all duration-700 shadow-[0_-4px_16px_rgba(21,88,176,0.45)]"
                    style={{
                      height: styles.height,
                      zIndex: styles.zIndex,
                      borderRadius: '24px',
                      padding: '1.5px',
                      background: 'linear-gradient(180deg, #9fcfff 0%, #1976D2 50%, #155DA8 100%)',
                    }}
                  >
                    {/* Inner card content */}
                    <div
                      className="relative w-full h-full overflow-hidden bg-[#0f172a]"
                      style={{ borderRadius: '22.5px' }}
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover object-top transition-transform duration-1000"
                        style={{
                          transform: `scale(${isActive ? (isMobile ? 1.05 * 1.08 : card.scale * 1.08) : (isMobile ? 1.05 : card.scale)})`
                        }}
                        priority
                        sizes="(max-width: 768px) 140px, (max-width: 1200px) 240px, 320px"
                      />

                      {/* Futuristic Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-50 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Reflection/Glow under active card */}
                  {isActive && (
                    <motion.div
                      layoutId="glow-bottom"
                      className="absolute -bottom-16 w-[130%] h-16 bg-blue-500/10 blur-[60px] rounded-full -z-10"
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

    </section>
  );
};

export default HomeImageSection;
