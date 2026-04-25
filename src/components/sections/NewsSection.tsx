"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "Garuda Drushti Takes Flight",
    source: "The Hitavada",
    image: "https://images.unsplash.com/photo-1585829365234-781f7149345f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Nagpur Police Bolster Social Media Monitoring",
    source: "Lokmat",
    image: "https://images.unsplash.com/photo-1504711432869-9d9973f239d2?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Innovation in Cyber Security",
    source: "The Hitavada",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=600",
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % newsItems.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + newsItems.length) % newsItems.length);

  return (
    <section className="py-6 px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-0 font-tech">
            Featured News
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[7px]">
            (Blogs& News)
          </p>
        </div>

        <div className="relative group max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="flex gap-3 transition-all duration-500 overflow-hidden">
            <div 
              className="flex gap-3 transition-transform duration-500 ease-out py-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item, i) => (
                <div key={i} className="min-w-full md:min-w-[33.333%] lg:min-w-[25%] flex-shrink-0 flex justify-center">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200/50 p-1.5 w-full max-w-[240px]">
                    <div className="h-[240px] w-full relative rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls - Only visible on group hover */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-tech hover:scale-110 transition-all z-20 border border-slate-100 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-tech hover:scale-110 transition-all z-20 border border-slate-100 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Pagination */}
          <div className="flex justify-center gap-1 mt-4">
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-0.5 rounded-full transition-all duration-300",
                  currentIndex === i ? "w-4 bg-tech" : "w-1 bg-slate-200 hover:bg-slate-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
