"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract the numeric part and prefix/suffix
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.endsWith("+") ? "+" : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800; // 1.8 seconds for smooth progression
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Cubic ease out: 1 - Math.pow(1 - progress, 3)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const tabs = [
  { id: "vision", label: "Our Vision" },
  { id: "mission", label: "Our Mission" },
  { id: "value", label: "Our Values" },
];

const tabContent = {
  vision: "To build powerful, scalable, and innovative software solutions that drive digital transformation and business growth across industries.",
  mission: "Through this collaboration, we aim to enhance technological capabilities, expand market reach, and create value-driven solutions for our clients.",
  value: "At Mytecsys, our core values are built upon our engineering excellence: absolute Security & Trust, pioneering AI & Technical Innovation, deep Collaborative Synergy, and high-performance Scalable Cloud Solutions.",
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section id="about" className="py-[60px] px-4 md:px-6 relative z-10 overflow-hidden bg-sky-400/[0.07] scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-[40px]">
          <p className="text-blue-600 font-black tracking-[0.2em] uppercase text-[11px] mb-2">ABOUT US</p>
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 font-tech tracking-normal">
            About Us
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content */}
          <div className="lg:w-3/5">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 font-tech">
              Mytecsys
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl text-base leading-relaxed font-semibold">
              Founded in 2020 Mytecsys is a premium technology development partner dedicated to designing, building, and deploying elite software solutions. We empower enterprises globally with custom-tailored cloud architectures, enterprise security, and pioneering artificial intelligence.
            </p>

            {/* Interactive Tabs */}
            <div className="mb-8">
              <div className="flex gap-6 border-b border-slate-200 mb-4">
                {tabs.map((tab) => (
                  <button
                    suppressHydrationWarning={true}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "pb-2 text-sm font-bold transition-all relative",
                      activeTab === tab.id
                        ? "text-tech"
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech" />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-slate-600 text-base leading-relaxed min-h-[60px] animate-in fade-in slide-in-from-left-4">
                {tabContent[activeTab as keyof typeof tabContent]}
              </p>
            </div>

            <Button
              suppressHydrationWarning={true}
              asChild size="lg" className="w-full sm:w-auto group bg-[#1b6cd5] hover:bg-[#1558b0] text-white rounded-lg px-8 h-12 text-sm font-bold transition-all hover:scale-105 active:scale-95 border-none shadow-md">
              <a href="/#about-more">
                More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right Stats */}
          <div className="lg:w-2/5 w-full flex flex-col gap-12 mt-10 lg:mt-0 pl-[20px]">
            {[
              {
                value: "20+",
                label1: "Countries",
                label2: "Global Clients",
                marginClass: "ml-0",
              },
              {
                value: "100+",
                label1: "Cities",
                label2: "We Work",
                marginClass: "ml-8 md:ml-20",
              },
              {
                value: "$1000+",
                label1: "Revenue",
                label2: "/month",
                marginClass: "ml-16 md:ml-40",
              },
            ].map((stat, i) => (
              <div key={i} className={cn("flex items-center gap-5", stat.marginClass)}>
                <span className="text-4xl md:text-5xl font-bold text-[#0f3566] tracking-tight tabular-nums min-w-[70px] md:min-w-[90px] inline-block">
                  <AnimatedCounter value={stat.value} />
                </span>
                <div className="h-10 w-[2px] bg-blue-300/50" />
                <div className="text-[#8ba3ba] text-xs font-medium leading-tight flex flex-col justify-center min-w-[100px]">
                  <span>{stat.label1}</span>
                  <span>{stat.label2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
