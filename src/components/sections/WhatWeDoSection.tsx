"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Group950 from "@/assets/Group 950.png";
import ElegantImg from "@/assets/elegant.png";
import TeleworkerImg from "@/assets/teleworker.png";
import Group9501 from "@/assets/Group 9501.png";

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
    image: Group950.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "PM",
    title: "Product Management",
    subtitle: "We build best product experience for you",
    image: ElegantImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "BD",
    title: "Business Development",
    subtitle: "Drive growth and expand your business horizons",
    image: TeleworkerImg.src,
    hasHorizontal: true,
    hasVertical: true,
    isPan: false,
  },
  {
    id: "WD",
    title: "Web Designing",
    subtitle: "Create stunning, responsive digital experiences",
    image: Group9501.src,
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
    <section id="services" className="py-10 px-4 md:px-6 relative z-10 overflow-hidden scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
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
                  flexGrow: activeIndex === index ? 3 : 1,
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
                  backgroundImage: `url("${service.image}")`,
                }}
              />
              
              {/* Overlay Content */}
              <div 
                className={cn(
                  "absolute inset-0 p-6 flex transition-all duration-700",
                  service.isPan 
                    ? "bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" 
                    : "bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
                )}
              >
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
                        <span className="text-tech text-sm font-bold group-hover:underline cursor-pointer">
                          Learn More &rarr;
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
        )})}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
