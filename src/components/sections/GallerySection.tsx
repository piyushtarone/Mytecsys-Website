"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, Maximize, ArrowLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import Rectangle34 from "@/assets/Rectangle 34.jpg";
import Rectangle35 from "@/assets/Rectangle 35.png";
import Rectangle36 from "@/assets/Rectangle 36.jpg";
import Image38 from "@/assets/image 38.jpg";
import Image39 from "@/assets/image 39.jpg";
import Image40 from "@/assets/image 40.jpg";
import Image43 from "@/assets/image 43.png";
import Group90 from "@/assets/Group 90.png";
import Image40_1 from "@/assets/image 40 (1).jpg";

const images = [
  { src: Rectangle34, alt: "Cyber Hack 1st Runner Up" },
  { src: Rectangle36, alt: "Cyber Hack 2024" },
  { src: Image38, alt: "Innovation Award" },
  { src: Image40, alt: "Govt of Maharashtra Recognition" },
  { src: Rectangle35, alt: "Academic Excellence" },
  { src: Image40_1, alt: "Achievement" },
  { src: Image39, alt: "Industry Leadership" },
  { src: Group90, alt: "Special Recognition" },
  { src: Image43, alt: "MTS Logo" },
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-white flex flex-col font-sans overflow-hidden"
        >
          {/* Main Site Header Simulation */}
          <header className="w-full bg-white border-b border-slate-50 px-6 md:px-12 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image src={Image43} alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-lg font-black text-[#0f4c81] tracking-tight uppercase leading-none">my tec sys</span>
                <span className="text-[8px] text-[#0f4c81]/60 font-medium tracking-tight uppercase">We bring your imagination into the Real World</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#" className="text-[13px] font-bold text-slate-900 relative">
                Home
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
              </a>
              {["About", "Services", "Industries", "Products", "Research & Insights", "Careers"].map((item) => (
                <a key={item} href="#" className="text-[13px] font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                  {item} {(item === "Services" || item === "Products") && <ChevronDown className="w-3 h-3" />}
                </a>
              ))}
            </nav>

            <button className="px-7 py-3 bg-[#3498db] text-white text-[12px] font-bold rounded-lg shadow-sm hover:bg-[#2980b9] transition-colors">
              Contact Us
            </button>
          </header>

          {/* Gallery Viewport */}
          <div className="flex-1 relative bg-white flex flex-col items-center justify-center p-6 md:p-12">
            
            {/* Top-Left BACK button */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-[70]">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-900 rounded-lg shadow-sm hover:bg-slate-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-slate-900" />
                <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Back</span>
              </button>
            </div>

            {/* Top-Right ZOOM controls */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 z-[70]">
              <div className="flex flex-col border-2 border-slate-900 rounded-xl bg-white overflow-hidden shadow-sm">
                <button onClick={handleZoomIn} className="p-3 hover:bg-slate-100 text-slate-900" title="Zoom In"><Plus className="w-5 h-5 stroke-[2.5]" /></button>
                <div className="h-px bg-slate-900" />
                <button onClick={handleZoomOut} className="p-3 hover:bg-slate-100 text-slate-900" title="Zoom Out"><Minus className="w-5 h-5 stroke-[2.5]" /></button>
                <div className="h-px bg-slate-900" />
                <button onClick={resetZoom} className="p-3 hover:bg-slate-100 text-slate-900" title="Fit to Screen"><Maximize className="w-5 h-5 stroke-[2.5]" /></button>
              </div>
            </div>

            {/* Content Row: Prev Arrow | Image | Next Arrow */}
            <div className="w-full max-w-screen-2xl flex items-center justify-between gap-4 md:gap-10">
              
              {/* Left Arrow Button */}
              {!singleImageMode && (
                <button
                  onClick={prevSlide}
                  className="p-3 border-2 border-slate-900 rounded-lg bg-white hover:bg-slate-900 hover:text-white transition-all shadow-sm z-50 flex-shrink-0"
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
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                    style={{ transform: `scale(${zoom})`, transition: "transform 0.2s ease-out" }}
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
                  className="p-3 border-2 border-slate-900 rounded-lg bg-white hover:bg-slate-900 hover:text-white transition-all shadow-sm z-50 flex-shrink-0"
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
                        "relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 shadow-md",
                        currentIndex === index 
                          ? "border-slate-900 scale-110 shadow-xl ring-4 ring-slate-50 z-10" 
                          : "border-transparent opacity-40 hover:opacity-100"
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
