"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Component8 from "@/assets/Component 8.png";
import Component9 from "@/assets/Component 9.png";
import Component10 from "@/assets/Component 10.png";
import Component7 from "@/assets/Component 7.png";
import Image33 from "@/assets/image 33.png";

const categories = [
  "All",
  "Development",
  "E-commerce",
  "IOT",
  "HealthCare",
  "Agriculture",
];

const projects = [
  {
    title: "HRMS",
    category: "Development",
    image: Component8,
    secondaryImage: Image33,
    isSpecial: true,
    className: "lg:col-span-1",
  },
  {
    title: "Biometric IOT",
    category: "IOT",
    image: Component9,
    isSpecial: true,
    className: "lg:col-span-1",
  },
  {
    title: "AstroSpark",
    category: "E-commerce",
    image: Component10,
    isSpecial: true,
    className: "lg:col-span-1",
  },
  {
    title: "PortoCreate",
    category: "Development",
    image: Component7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
    isSpecial: true,
    className: "lg:col-span-1 lg:row-span-2",
  },
];

const CaseStudiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="products" className="py-8 px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/50 scroll-mt-20">
      <div id="case-studies" className="absolute top-0 left-0 w-0 h-0 scroll-mt-20 pointer-events-none" />

      {/* Removed Honeycomb Background Decoration */}

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 font-tech">
            Case Studies
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[12px]">
            (Work We Do)
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {categories.map((cat) => (
            <button
              suppressHydrationWarning={true}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-sm md:text-base font-bold transition-all duration-300 relative py-2 px-1",
                activeCategory === cat
                  ? "text-tech scale-110"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Column 1: HRMS & IOT */}
          <div className="flex flex-col gap-4">
            {[projects[0], projects[1]].map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isHovered={hoveredId === project.title + index}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title + index}
                onHover={() => setHoveredId(project.title + index)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* Column 2: AstroSpark (formerly PortoCreate) */}
          <div className="flex flex-col h-full">
            {[projects[2]].map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="h-full"
                isHovered={hoveredId === project.title + (index + 2)}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title + (index + 2)}
                onHover={() => setHoveredId(project.title + (index + 2))}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* Column 3: AstroSpark */}
          <div className="flex flex-col h-full">
            {[projects[3]].map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="h-full"
                isHovered={hoveredId === project.title + (index + 3)}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title + (index + 3)}
                onHover={() => setHoveredId(project.title + (index + 3))}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#" className="flex items-center gap-1 text-tech font-semibold text-sm hover:underline transition-all">
            View All <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  className,
  isHovered,
  isOtherHovered,
  onHover,
  onLeave
}: {
  project: any;
  className?: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const isSpecial = project.isSpecial;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "group relative rounded-3xl overflow-hidden bg-[#F2F8FF] transition-all duration-700 min-h-[220px] w-full",
        isHovered ? "shadow-lg z-20" : "z-10",
        isOtherHovered ? "opacity-70" : "",
        className
      )}
      animate={{
        scale: isSpecial ? (isHovered ? 1.02 : 1) : (isHovered ? 1.02 : 1),
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Image Container — zoom effect */}
      <motion.div
        className="absolute inset-0 p-8 flex items-center justify-center"
        animate={isSpecial ? { scale: isHovered ? 1.6 : 1, opacity: isHovered ? 0.7 : 1 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-8"
        />
      </motion.div>

      {/* Secondary Image Overlay — appears on hover with rotation on the left side */}
      {project.secondaryImage && (
        <motion.div
          className="absolute inset-0 p-8 flex items-center justify-start pointer-events-none z-30"
          initial={{ opacity: 0, rotate: 270, scale: 0.8, x: -20 }}
          animate={isHovered ? { opacity: 1, rotate: 360, scale: 1, x: 0 } : { opacity: 0, rotate: 270, scale: 0.8, x: -20 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <div className="relative w-1/4 h-1/2 ml-10 mt-16">
            <Image
              src={project.secondaryImage}
              alt="Extra Detail"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}

      {/* Special: Growing luminosity glow as it zooms out/in */}
      {isSpecial && (
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "inset 0 0 60px 20px rgba(99,179,237,0.25), inset 0 0 120px 40px rgba(99,179,237,0.12)"
              : "inset 0 0 0px 0px rgba(99,179,237,0)",
            backgroundColor: isHovered ? "rgba(219,234,254,0.15)" : "rgba(219,234,254,0)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end items-end text-right bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-3xl">
        <h3 className="text-lg font-bold text-white mb-1">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-white/80 text-xs line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default CaseStudiesSection;
