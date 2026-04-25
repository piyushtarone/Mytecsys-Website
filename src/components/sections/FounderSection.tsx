"use client";

import React from "react";
import { cn } from "@/lib/utils";

const FounderSection = () => {
  return (
    <section className="py-8 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-0.5 font-tech">
            Meet The Founder
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[8px]">
            (Who Build Mytecsys)
          </p>
        </div>

        <div className="relative border border-tech/20 rounded-[1.5rem] overflow-hidden bg-white/50 backdrop-blur-sm flex flex-col md:flex-row items-stretch">
          {/* Left: Image */}
          <div className="md:w-1/3 relative h-[250px] md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
              alt="Shhreyas Kawale"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white text-[10px] font-bold tracking-wider">
              Founder & CEO
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Shhreyas Kawale
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed italic text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. 
              Integer dictum porta felis vel rhoncus.
            </p>

            <ul className="space-y-2">
              {[
                "Over 15 years of experience in industry",
                "Before a founder, was a Full-stack developer with broader view towards business management.",
                "Love for tech, problem-solving, and innovation connects him with clients valuing efficiency, while music and leadership spark creativity and collaboration",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-tight">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-tech flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
