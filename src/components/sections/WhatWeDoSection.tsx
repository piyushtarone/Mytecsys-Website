"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SoftwareDevImg from "@/assets/software_development.png";
import ProductMgmtImg from "@/assets/product_management.png";
import BusinessDevImg from "@/assets/business_development.png";
import WebDesignImg from "@/assets/web_design.png";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hasHorizontal: boolean;
  hasVertical: boolean;
  isPan?: boolean;
}

const services: Service[] = [
  {
    id: "SD",
    title: "Software Development",
    subtitle: "Experience best software development with our team",
    image: SoftwareDevImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "PM",
    title: "Product Management",
    subtitle: "We build best product experience for you",
    image: ProductMgmtImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "BD",
    title: "Business Development",
    subtitle: "Drive growth and expand your business horizons",
    image: BusinessDevImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "WD",
    title: "Web Designing",
    subtitle: "Create stunning, responsive digital experiences",
    image: WebDesignImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
];

const WhatWeDoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="services" className="py-[60px] px-2 md:px-6 relative z-10 overflow-hidden scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-[#1a183b] font-sans font-black text-[28px] md:text-[32px] tracking-tight text-center">
            What We Do
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
            (Services)
          </p>

        </div>

        {/* ── MOBILE: 2×2 grid ── */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl h-[180px] cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700 group-active:scale-110"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-1">
                  {service.id}
                </span>
                <h3 className="text-white font-bold leading-tight text-[13px] mb-1">
                  {service.title}
                </h3>
                <p className="text-white/75 text-[10px] leading-snug line-clamp-2">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: animated flex accordion ── */}
        <div
          className="hidden lg:flex gap-3 h-[350px] w-full"
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsHovered(true);
                }}
                animate={{
                  flexGrow: activeIndex === index ? 5 : 1,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className={cn(
                  "relative group overflow-hidden rounded-lg transition-shadow duration-700 hover:shadow-xl hover:shadow-tech/10 h-full basis-0 min-w-0",
                  activeIndex === index ? "z-20" : "z-10"
                )}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center animate-zoom-rotate"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />

                {/* Black Overlay for readability */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    activeIndex === index
                      ? "bg-black/10 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      : "bg-black/60 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  )}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex">
                  <div className="relative w-full h-full">
                    {/* Vertical Text Layout */}
                    {service.hasVertical && (
                      <motion.div
                        animate={{
                          opacity: activeIndex === index ? 0 : 1
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col items-center justify-end pb-8 pointer-events-none"
                      >
                        <h3
                          className="text-white font-bold leading-tight text-lg tracking-widest uppercase opacity-90 whitespace-nowrap"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                          {service.title}
                        </h3>
                      </motion.div>
                    )}

                    {/* Horizontal Text Layout */}
                    {service.hasHorizontal && (
                      <motion.div
                        animate={{
                          opacity: activeIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col justify-end pointer-events-none"
                      >
                        <h3 className="text-white font-bold leading-tight text-2xl mb-2">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-white/90 text-sm font-medium leading-tight mb-4">
                            {service.subtitle}
                          </p>
                        )}

                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
