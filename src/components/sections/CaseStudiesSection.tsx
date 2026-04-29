"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Component8 from "@/assets/Component 8.png";
import Component9 from "@/assets/Component 9.png";
import Component10 from "@/assets/Component 10.png";
import Component7 from "@/assets/Component 7.png";

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
    title: "Enterprise Dashboard",
    category: "Development",
    image: Component8,
    className: "lg:col-span-1",
  },
  {
    title: "Biometric IOT",
    category: "IOT",
    image: Component9,
    className: "lg:col-span-1",
  },
  {
    title: "PortoCreate",
    category: "E-commerce",
    image: Component10,
    className: "lg:col-span-1",
  },
  {
    title: "AstroSpark",
    category: "Development",
    image: Component7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
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
    <section id="products" className="py-8 px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/50">
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
          {/* Column 1: Dashboard & IOT */}
          <div className="flex flex-col gap-4">
            {projects.filter(p => p.title === "Enterprise Dashboard" || p.title === "Biometric IOT").map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isHovered={hoveredId === project.title}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title}
                onHover={() => setHoveredId(project.title)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* Column 2: PortoCreate */}
          <div className="flex flex-col h-full">
            {projects.filter(p => p.title === "PortoCreate").map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="h-full"
                isHovered={hoveredId === project.title}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title}
                onHover={() => setHoveredId(project.title)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>

          {/* Column 3: AstroSpark */}
          <div className="flex flex-col h-full">
            {projects.filter(p => p.title === "AstroSpark").map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="h-full"
                isHovered={hoveredId === project.title}
                isOtherHovered={hoveredId !== null && hoveredId !== project.title}
                onHover={() => setHoveredId(project.title)}
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
}) => (
  <div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={cn(
      "group relative rounded-3xl overflow-hidden bg-[#F2F8FF] transition-all duration-700 min-h-[220px] w-full",
      isHovered ? "shadow-lg scale-[1.02] z-20" : "z-10",
      isOtherHovered ? "opacity-70 scale-[0.98]" : "",
      className
    )}
  >
    {/* Image Container */}
    <div className="absolute inset-0 p-8 flex items-center justify-center">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-3xl">
      <p className="text-tech text-[10px] font-bold uppercase tracking-widest mb-1">
        {project.category}
      </p>
      <h3 className="text-lg font-bold text-white mb-1">
        {project.title}
      </h3>
      {project.description && (
        <p className="text-white/80 text-xs line-clamp-2">
          {project.description}
        </p>
      )}
    </div>
  </div>
);

export default CaseStudiesSection;
