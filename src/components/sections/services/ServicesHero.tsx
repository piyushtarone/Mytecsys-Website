"use client";

import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import SoftwareDevImg from "@/assets/software_development.png";

export function ServicesHero() {
  return (
    <section className="relative z-30 w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b border-slate-200 lg:h-screen lg:min-h-[750px] h-auto">

      {/* Left Column: Colored background block with text */}
      <div className="flex flex-col justify-center bg-transparent pt-[100px] md:pt-[120px] lg:pt-[140px] pb-12 md:pb-24 px-6 md:px-16 lg:px-24 text-left relative z-10 h-auto lg:h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-purple-950 font-sans leading-tight">
            Empowering Leaders Through <span className="text-[#1976D2]">High-Performance</span> Engineering.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed font-sans">
            We deploy bespoke, enterprise-grade software frameworks, intuitive mobile platforms, and cognitive artificial intelligence models designed for market dominators.
          </p>
        </motion.div>
      </div>

      {/* Right Column: Full-bleed image with no padding or borders */}
      <div className="relative w-full h-[400px] lg:h-full min-h-[400px] lg:min-h-[550px] overflow-hidden bg-slate-100 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full absolute inset-0"
        >
          <ExportedImage
            src={SoftwareDevImg}
            alt="Software Engineering Services"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

    </section>
  );
}
