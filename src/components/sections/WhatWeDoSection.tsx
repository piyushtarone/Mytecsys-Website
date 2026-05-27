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
    }, 2000); // Progresses the cycle every 2 seconds
    return () => clearInterval(interval);
  }, [isHovered]);


  return (
    <section id="services" className="py-[60px] px-2 md:px-6 relative z-10 overflow-hidden scroll-mt-20">
      {/* Background image removed */}
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 font-tech tracking-normal">
            What We Do
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Services)
          </p>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[350px] w-full"
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
                  "relative group overflow-hidden rounded-lg transition-shadow duration-700 hover:shadow-xl hover:shadow-tech/10 w-full lg:w-auto h-[300px] lg:h-full basis-0 min-w-0",
                  activeIndex === index ? "z-20" : "z-10"
                )}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center animate-zoom-rotate"
                  style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}${service.image}')`,
                  }}
                />

                {/* Black Overlay for readability */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    activeIndex === index
                      ? "bg-black/45 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
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
                        <h3 className="text-white font-bold leading-tight text-xl md:text-2xl mb-2">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-white/90 text-sm font-medium leading-tight mb-4">
                            {service.subtitle}
                          </p>
                        )}
                        <div className="pointer-events-auto mt-2">
                          <span className="text-white text-sm font-bold group-hover:underline cursor-pointer inline-flex items-center gap-1.5 transition-all duration-200">
                            Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                          </span>
                        </div>
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
