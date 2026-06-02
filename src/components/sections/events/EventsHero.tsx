"use client";

import React from "react";
import { motion } from "framer-motion";

export function EventsHero() {
  return (
    <section className="relative z-20 w-full pt-[140px] md:pt-[180px] pb-20 md:pb-24 px-4 md:px-6 bg-transparent">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm font-tech">
            Events & <span className="text-[#1976D2]">Culture</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed tracking-normal">
            Take a glimpse into the vibrant life at Mytecsys. From tech hackathons and innovation sprints to team building and celebrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
