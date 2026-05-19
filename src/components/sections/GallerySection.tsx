"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, Maximize, ArrowLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

const images = [
  { src: achievementCheck, alt: "Cyber Hack 1st Runner Up" },
  { src: achievementStage, alt: "Cyber Hack 2024" },
  { src: achievementBag, alt: "Innovation Award" },
  { src: achievementPolice, alt: "Govt of Maharashtra Recognition" },
  { src: achievementAcademic, alt: "Academic Excellence" },
  { src: achievementEcode, alt: "Achievement" },
  { src: achievementOutside, alt: "Industry Leadership" },
  { src: achievementPurple, alt: "Special Recognition" },
  { src: achievementBni, alt: "Special Recognition" },
  { src: achievementLogo, alt: "MTS Logo" },
];

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  singleImageMode?: boolean;
}

const GallerySection = ({ isOpen, onClose, initialIndex = 0, singleImageMode = false }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setIsLoaded(false);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextSlide = () => {
    setZoom(1);
    setIsLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setZoom(1);
    setIsLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="gallery-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[48] bg-white flex flex-col font-sans overflow-hidden pt-20"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          </div>

          {/* Gallery Viewport */}
          <div className="flex-1 relative z-10 flex flex-col items-center justify-center p-6 md:p-12 pt-24 md:pt-28">
            
            {/* Top-Left BACK button */}
            <div className="absolute top-24 left-8 md:top-28 md:left-12 z-[70]">
              <button
                onClick={() => {
                  if (document.fullscreenElement) document.exitFullscreen();
                  onClose();
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all text-slate-700 group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-bold uppercase tracking-widest">Back</span>
              </button>
            </div>

            {/* Top-Right ZOOM controls */}
            <div className="absolute top-24 right-8 md:top-28 md:right-12 z-[70]">
              <div className="flex flex-col border border-slate-200 rounded-2xl bg-white/80 backdrop-blur-md overflow-hidden shadow-sm">
                <button onClick={handleZoomIn} className="p-3 hover:bg-slate-50 hover:text-blue-600 text-slate-700 transition-colors" title="Zoom In"><Plus className="w-5 h-5 stroke-[2.5]" /></button>
                <div className="h-px bg-slate-200/50" />
                <button onClick={handleZoomOut} className="p-3 hover:bg-slate-50 hover:text-blue-600 text-slate-700 transition-colors" title="Zoom Out"><Minus className="w-5 h-5 stroke-[2.5]" /></button>
                <div className="h-px bg-slate-200/50" />
                <button onClick={() => {
                  const el = document.getElementById("gallery-container");
                  if (el) {
                    if (!document.fullscreenElement) {
                      el.requestFullscreen();
                    } else {
                      document.exitFullscreen();
                    }
                  }
                }} className="p-3 hover:bg-slate-50 hover:text-blue-600 text-slate-700 transition-colors" title="Toggle Full Screen"><Maximize className="w-5 h-5 stroke-[2.5]" /></button>
              </div>
            </div>

            {/* Content Row: Prev Arrow | Image | Next Arrow */}
            <div className="w-full max-w-screen-2xl flex items-center justify-between gap-4 md:gap-10 mt-16 md:mt-0">
              
              {/* Left Arrow Button */}
              {!singleImageMode && (
                <button
                  onClick={prevSlide}
                  className="p-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-md hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 text-slate-700 transition-all shadow-sm z-50 flex-shrink-0"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>
              )}

              {/* Main Image View */}
              <div className="flex-1 relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: zoom }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        className={cn(
                          "object-contain transition-all duration-300 rounded-[1.5rem]",
                          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl"
                        )}
                        onLoadingComplete={() => setIsLoaded(true)}
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              {!singleImageMode && (
                <button
                  onClick={nextSlide}
                  className="p-3 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-md hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 text-slate-700 transition-all shadow-sm z-50 flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              )}
            </div>

            {/* Thumbnail Navigation Strip */}
            {!singleImageMode && (
              <div className="mt-8 w-full max-w-6xl mx-auto px-6 pb-12">
                <div className="flex justify-center items-center gap-3 overflow-x-auto no-scrollbar py-4 px-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setZoom(1);
                        setCurrentIndex(index);
                      }}
                      className={cn(
                        "relative w-16 h-16 md:w-20 md:h-20 rounded-[14px] overflow-hidden border-2 transition-all duration-300 flex-shrink-0",
                        currentIndex === index 
                          ? "border-blue-500 scale-110 shadow-[0_0_15px_rgba(37,137,233,0.4)] z-10" 
                          : "border-transparent opacity-50 hover:opacity-100"
                      )}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GallerySection;
