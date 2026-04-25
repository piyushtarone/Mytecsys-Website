"use client";

import React from "react";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Vedant",
    role: "Web Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sumit",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Suprawasa",
    role: "Human Resource",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sumit",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Hitesh",
    role: "Fullstack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Priya",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Prathamesh",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Coming Soon",
    role: "New Position",
    image: "", // Placeholder for empty
  },
];

const TeamSection = () => {
  return (
    <section className="py-8 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-0.5 font-tech">
            Team
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[8px]">
            (People Behind Our Success)
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-slate-100 border border-slate-200 mx-auto max-w-[160px]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-700 animate-pulse" />
                  </div>
                )}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-tech transition-colors">
                  {member.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
