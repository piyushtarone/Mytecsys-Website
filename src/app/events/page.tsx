"use client";

import React from "react";
import Footer from "@/components/Footer";
import { EventsHero } from "@/components/sections/events/EventsHero";
import { EventsGrid } from "@/components/sections/events/EventsGrid";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Static Background Images */}
      <div
        className="fixed left-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-[0.9] select-none"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/back.png')`,
          filter: 'brightness(0.5) contrast(1.3) saturate(1.2)'
        }}
      />
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-right bg-contain pointer-events-none opacity-[0.9] select-none"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/back_right.png')`,
          filter: 'brightness(0.5) contrast(1.3) saturate(1.2)'
        }}
      />

      <div className="relative z-10">
        <EventsHero />
        <EventsGrid />
      </div>
      
      <Footer />
    </div>
  );
}
