"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Music, Heart, Star } from "lucide-react";

function FloatingPartyElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Sparkle 1 */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] text-blue-400"
      >
        <Sparkles size={32} />
      </motion.div>

      {/* Floating Music Note */}
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, -20, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] right-[20%] text-cyan-400"
      >
        <Music size={40} />
      </motion.div>

      {/* Floating Star */}
      <motion.div
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[25%] text-yellow-400"
      >
        <Star size={28} />
      </motion.div>

      {/* Floating Heart */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[30%] right-[15%] text-pink-400"
      >
        <Heart size={36} />
      </motion.div>

      {/* Soft Bokeh / Balloon shapes */}
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[10%] right-[30%] w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[10%] left-[10%] w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"
      />
    </div>
  );
}

export function EventsHero() {
  return (
    <section className="relative z-20 w-full pt-[140px] md:pt-[180px] pb-20 md:pb-24 px-4 md:px-6 bg-transparent overflow-hidden">
      
      {/* Animated Party Background Elements */}
      <FloatingPartyElements />
      
      {/* Subtle Premium Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-gradient-to-tr from-blue-400/20 to-cyan-300/20 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container mx-auto text-center max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Main Title with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[44px] font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm font-tech leading-tight">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1976D2] to-[#06b6d4]">Culture</span>
          </h1>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[20px] text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed tracking-normal relative">
            Take a glimpse into the vibrant life at Mytecsys. From tech hackathons and innovation sprints to team building and celebrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
