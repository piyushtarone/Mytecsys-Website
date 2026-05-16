"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vission" },
  { id: "value", label: "Our Value" },
];

const tabContent = {
  mission: "We deliver innovative, reliable, and scalable solutions tailored to your business needs. We deliver innovative, reliable, and scalable solutions tailored to your business needs.",
  vision: "Our vision is to be the leading technology partner for businesses worldwide, empowering them with cutting-edge AI and cloud solutions that redefine industry standards.",
  value: "Innovation, integrity, and excellence are the core values that drive everything we do. We are committed to delivering exceptional value and fostering long-term partnerships.",
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="about" className="py-16 px-4 md:px-6 relative z-10 overflow-hidden bg-sky-400/[0.07] scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            About Us
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Let&apos;s understand Mytecsys)
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content */}
          <div className="lg:w-3/5">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Mytecsys
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl text-base leading-relaxed">
              Found in 2022, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ac mollis nulla. Integer dictum porta felis vel rhoncus. Sed quis quam mauris.
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
              asChild size="lg" className="w-full sm:w-auto group bg-[#2589e9] hover:bg-[#1d76cc] text-white rounded-lg px-8 h-12 text-sm font-bold transition-all hover:scale-105 active:scale-95 border-none shadow-md">
              <a href="/#about-more">
                More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right Stats */}
          <div className="lg:w-2/5 w-full flex flex-col gap-8">
            {[
              {
                value: "20+",
                label: "Countries Global Clients",
              },
              {
                value: "100+",
                label: "Cities We Work",
              },
              {
                value: "$1000+",
                label: "Revenue /month",
              },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                  {stat.value}
                </span>
                <div className="h-10 w-px bg-tech/30" />
                <span className="text-slate-500 text-xs font-medium leading-tight max-w-[100px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
