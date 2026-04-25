<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-1",
  },
  {
    title: "PortoCreate",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-1",
  },
  {
    title: "AstroSpark",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Biometric IOT",
    category: "IOT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-1",
  },
  {
    title: "PortoCreate Mobile",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-1",
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
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-0.5 font-tech">
            Case Studies
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[8px]">
            (Work We Do)
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-[10px] font-bold transition-all duration-300 relative py-1",
                activeCategory === cat
                  ? "text-tech"
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
      "group relative rounded-[1rem] overflow-hidden bg-slate-100/50 shadow-sm transition-all duration-700 min-h-[180px]",
      isHovered ? "shadow-lg scale-[1.02] z-20" : "z-10",
      isOtherHovered ? "blur-[2px] opacity-50 scale-[0.98]" : "",
      className
    )}
  >
    {/* Image Container with Hover Animation */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
      <p className="text-tech text-[8px] font-bold uppercase tracking-widest mb-0.5">
        {project.category}
      </p>
      <h3 className="text-base font-bold text-white mb-0.5">
        {project.title}
      </h3>
      {project.description && (
        <p className="text-white/80 text-[10px] line-clamp-1">
          {project.description}
        </p>
      )}
    </div>

    {/* Always visible title (bottom left) as per image style for some cards */}
    {project.title === "AstroSpark" && (
      <div className="absolute bottom-6 left-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
        <p className="text-slate-500 text-[10px] max-w-[150px] mt-0.5 line-clamp-2">
          {project.description}
        </p>
      </div>
    )}
  </div>
);

export default CaseStudiesSection;
=======
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CASE_STUDIES = [
  {
    client: "Healthcare Platform",
    industry: "Healthcare",
    challenge: "Legacy systems unable to handle real-time patient analytics.",
    solution: "Built AI-powered analytics platform with cloud-native architecture.",
    metrics: "40% faster insights, 99.9% uptime",
  },
  {
    client: "E-commerce Solution",
    industry: "Retail",
    challenge: "Scale issues during peak seasonal traffic.",
    solution: "Migrated to auto-scaling cloud infra with ML-based demand forecasting.",
    metrics: "3x traffic capacity, 50% cost reduction",
  },
  {
    client: "AgriTech Platform",
    industry: "Agriculture",
    challenge: "Manual data collection and limited predictive capabilities.",
    solution: "IoT + AI solution for crop monitoring and yield prediction.",
    metrics: "30% yield improvement, real-time alerts",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world success stories from our AI and software development projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <Card
              key={study.client}
              className="group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <CardTitle className="text-lg">{study.client}</CardTitle>
                <Badge variant="secondary">{study.industry}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Challenge
                  </p>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Solution
                  </p>
                  <p className="text-sm">{study.solution}</p>
                </div>
                <div className="flex items-center gap-2 text-tech font-medium">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{study.metrics}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 4cdbb9b6e8e08c423654676e93a1cf6229009d20
