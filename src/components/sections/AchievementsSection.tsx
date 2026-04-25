"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Award, Target, Users, Zap } from "lucide-react";

const achievements = [
  {
    title: "Best Tech Startup 2023",
    description: "Recognized for our innovative AI-driven solutions in the regional tech ecosystem.",
    image: "https://images.unsplash.com/photo-1578574515313-ad99a4c2a64c?auto=format&fit=crop&q=80&w=600",
    icon: <Award className="w-6 h-6 text-tech" />,
  },
  {
    title: "100+ Projects Delivered",
    description: "Successfully completed over 100 enterprise-grade projects across 20+ countries.",
    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&q=80&w=600",
    icon: <Zap className="w-6 h-6 text-tech" />,
  },
  {
    title: "Innovation Excellence Award",
    description: "Awarded for pioneering research in cloud-native architectures and security.",
    image: "https://images.unsplash.com/photo-1523240715634-1e5f8f85f543?auto=format&fit=crop&q=80&w=600",
    icon: <Target className="w-6 h-6 text-tech" />,
  },
  {
    title: "Global Partner of the Year",
    description: "Recognized as a top-tier partner for delivering exceptional value to global clients.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    icon: <Users className="w-6 h-6 text-tech" />,
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            Our Achievements
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Milestones We&apos;ve Reached)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-tech/30 hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-tech transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
