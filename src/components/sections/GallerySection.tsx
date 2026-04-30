"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Sync index when modal opens with a new image
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Prevent scroll when modal is open
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-7xl h-[65vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 md:p-5 flex justify-between items-center bg-white/80 backdrop-blur-sm z-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-tech">
                  {singleImageMode ? "Achievement" : "Achievements Gallery"}
                </h2>
                <p className="text-slate-500 text-sm mt-1">{images[currentIndex].alt}</p>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Viewer */}
            <div className="flex-1 relative flex items-center justify-center bg-slate-50 overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 p-4 md:p-12 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows — hidden in single image mode */}
              {!singleImageMode && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white transition-all duration-300 z-30"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white transition-all duration-300 z-30"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip — hidden in single image mode */}
            {!singleImageMode && (
              <div className="bg-white p-3 md:p-4 border-t border-slate-100">
                <div className="flex justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        currentIndex === index
                          ? "border-tech scale-110 shadow-lg shadow-tech/20"
                          : "border-transparent opacity-40 hover:opacity-100 hover:scale-105"
                      }`}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GallerySection;
