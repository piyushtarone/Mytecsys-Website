"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, Maximize, X } from "lucide-react";
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

export interface GalleryImage {
  src: any;
  alt: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  singleImageMode?: boolean;
  customImages?: GalleryImage[];
}

const GallerySection = ({ isOpen, onClose, initialIndex = 0, singleImageMode = false, customImages }: GalleryModalProps) => {
  const galleryImages = customImages || images;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);

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
      if (e.key === "Escape") handleClose();
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

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.querySelector('[data-active="true"]');
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setZoom(1);
    setIsLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages]);

  const prevSlide = useCallback(() => {
    setZoom(1);
    setIsLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages]);

  const handleClose = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    onClose();
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartRef.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="gallery-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[48] bg-white flex flex-col font-sans overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.04)_0%,transparent_70%)]" />

          {/* ===== TOP BAR ===== */}
          <div className="relative z-[70] flex items-center justify-between px-4 md:px-10 py-3 md:py-4 border-b border-slate-100/80 bg-white/90 backdrop-blur-md mt-16 md:mt-[72px]">
            {/* Close / Back button — icon-based for clean web look */}
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 text-slate-500 transition-all duration-200 group"
              title="Close gallery"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
            </button>

            {/* Image counter */}
            {!singleImageMode && (
              <div className="absolute left-1/2 -translate-x-1/2 text-sm md:text-base font-medium text-slate-400 tracking-wide select-none">
                <span className="text-slate-700 font-bold">{currentIndex + 1}</span>
                <span className="mx-1.5 text-slate-300">/</span>
                <span>{galleryImages.length}</span>
              </div>
            )}

            {/* Zoom controls */}
            <div className="flex items-center gap-0.5 border border-slate-200 rounded-full bg-white overflow-hidden shadow-sm">
              <button onClick={handleZoomOut} className="p-2 md:p-2.5 hover:bg-slate-50 hover:text-blue-600 text-slate-500 transition-colors" title="Zoom Out">
                <Minus className="w-4 h-4 stroke-[2]" />
              </button>
              <div className="w-px h-4 bg-slate-200" />
              <button onClick={handleZoomIn} className="p-2 md:p-2.5 hover:bg-slate-50 hover:text-blue-600 text-slate-500 transition-colors" title="Zoom In">
                <Plus className="w-4 h-4 stroke-[2]" />
              </button>
              <div className="w-px h-4 bg-slate-200" />
              <button
                onClick={() => {
                  const el = document.getElementById("gallery-container");
                  if (el) {
                    if (!document.fullscreenElement) el.requestFullscreen();
                    else document.exitFullscreen();
                  }
                }}
                className="p-2 md:p-2.5 hover:bg-slate-50 hover:text-blue-600 text-slate-500 transition-colors"
                title="Toggle Full Screen"
              >
                <Maximize className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* ===== MAIN IMAGE AREA ===== */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">

            {/* Nav arrows — Desktop */}
            {!singleImageMode && (
              <>
                <button
                  onClick={prevSlide}
                  className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-white border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg text-slate-500 transition-all duration-200 shadow-md"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-white border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg text-slate-500 transition-all duration-200 shadow-md"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </>
            )}

            {/* Image display */}
            <div
              className="relative w-full h-full max-w-6xl mx-auto px-4 md:px-16 lg:px-20 py-4 md:py-6 flex items-center justify-center min-h-0"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: zoom, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    fill
                    className={cn(
                      "object-contain transition-opacity duration-300 rounded-2xl",
                      isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    onLoadingComplete={() => setIsLoaded(true)}
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  {/* Loading spinner */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-[3px] border-slate-200 border-t-blue-500 animate-spin" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image caption */}
            <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-40">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="px-5 py-1.5 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full shadow-sm"
              >
                <span className="text-xs md:text-sm font-medium text-slate-500">{galleryImages[currentIndex].alt}</span>
              </motion.div>
            </div>
          </div>

          {/* ===== BOTTOM THUMBNAIL STRIP ===== */}
          {!singleImageMode && (
            <div className="relative z-[60] border-t border-slate-100/80 bg-white/90 backdrop-blur-md px-4 md:px-10 pt-4 pb-6 md:pt-5 md:pb-8">
              <div className="flex items-center gap-3 md:gap-4 max-w-5xl mx-auto">
                {/* Mobile prev arrow */}
                <button
                  onClick={prevSlide}
                  className="md:hidden flex-shrink-0 p-2 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 hover:text-blue-600 text-slate-400 transition-all"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Thumbnails */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar" ref={thumbnailContainerRef}>
                  <div className="flex items-center justify-center gap-2.5 md:gap-3 px-2 py-2">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        data-active={currentIndex === index}
                        onClick={() => {
                          setZoom(1);
                          setIsLoaded(false);
                          setCurrentIndex(index);
                        }}
                        className={cn(
                          "relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-slate-50",
                          "w-16 h-14 md:w-[88px] md:h-[72px] lg:w-24 lg:h-20",
                          currentIndex === index
                            ? "border-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.3)] scale-105 opacity-100"
                            : "border-transparent opacity-40 hover:opacity-80 hover:border-slate-200"
                        )}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-contain p-0.5" sizes="96px" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile next arrow */}
                <button
                  onClick={nextSlide}
                  className="md:hidden flex-shrink-0 p-2 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 hover:text-blue-600 text-slate-400 transition-all"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GallerySection;
