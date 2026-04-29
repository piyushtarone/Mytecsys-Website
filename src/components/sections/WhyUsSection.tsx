"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image8 from "@/assets/image 8.png";
import Image7 from "@/assets/image 7.png";
import Image6 from "@/assets/image 6.png";
import Image5 from "@/assets/image 5.png";

const WhyUsSection = () => {
  const [activeImage, setActiveImage] = React.useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    { id: 5, src: Image5, x: 0, z: 10 },
    { id: 6, src: Image6, x: -40, z: 20 },
    { id: 7, src: Image7, x: -80, z: 30 },
    { id: 8, src: Image8, x: -120, z: 40 },
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

  const handleFirstInteraction = () => {
    if (!isAutoPlaying) setIsAutoPlaying(true);
  };

  return (
    <section id="industries" className="py-12 px-4 md:px-6 relative z-10 overflow-hidden bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            Why Mytecsys
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px] mb-8">
            (Why we are best)
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative flex flex-col md:flex-row items-center border border-blue-100 rounded-[2rem] bg-white p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] gap-8 md:gap-12 w-full max-w-4xl overflow-hidden">
            
            {/* Left Content Area */}
            <div className="md:w-1/2 text-left order-2 md:order-1 relative z-[60]">
              <motion.h3 
                animate={{ color: activeImage ? "#ffffff" : "#0f172a" }}
                transition={{ duration: 1 }}
                className="text-lg md:text-xl font-black mb-4 font-tech leading-snug"
              >
                We Build Trust by our transparent services
              </motion.h3>
              <motion.p 
                animate={{ color: activeImage ? "rgba(255, 255, 255, 0.9)" : "#64748b" }}
                transition={{ duration: 1 }}
                className="text-sm md:text-sm leading-relaxed font-semibold"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ultricies libero accumsan, bibendum metus id, convallis velit. Integer
                consequat mi vitae ligula iaculis auctor. Curabitur quis pharetra
                nibh, vitae dapibus elit.
              </motion.p>
            </div>
            
            {/* Right Images Container Spacer */}
            <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 w-full relative h-[200px] md:h-[240px]" />

            {/* Layered Images */}
            {images.map((img) => {
              const isActive = activeImage === img.id;
              const padding = isMobile ? 24 : 40;
              const baseWidth = isMobile ? "200px" : "220px";
              const translateX = isMobile ? img.x * 0.75 : img.x;

              return (
                <motion.div
                  key={img.id}
                  initial={false}
                  animate={{
                    top: isActive ? 0 : padding,
                    bottom: isActive ? 0 : padding,
                    right: isActive ? 0 : padding,
                    left: isActive ? 0 : "auto",
                    width: isActive ? "100%" : baseWidth,
                    x: isActive ? 0 : translateX,
                    zIndex: isActive ? 50 : img.z,
                    borderRadius: isActive ? "2rem" : "0.5rem",
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute overflow-hidden transform-gpu pointer-events-none"
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ scale: isActive ? 1.5 : 1 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={img.src}
                        alt={`Feature ${img.id}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-black/40"
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
