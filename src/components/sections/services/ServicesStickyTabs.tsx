"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "web-development", label: "Web Development" },
  { id: "mobile-apps", label: "Mobile Applications" },
  { id: "ai-solutions", label: "AI Solutions" },
];

export function ServicesStickyTabs() {
  const [activeTab, setActiveTab] = useState("web-development");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  return (
    <div className="sticky top-[72px] z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-4 px-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-center items-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeServiceTab"
                  className="absolute inset-0 bg-[#1976D2] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
