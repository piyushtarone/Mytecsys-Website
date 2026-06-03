"use client";

import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function getMediaUrl(path?: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}

const PREVIEW_IMAGES = [
  "/events_media/IMG_4599.JPG.jpeg",
  "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (1).jpeg",
  "/events_media/IMG_4610.JPG.jpeg",
  "/events_media/IMG_6105.JPG.jpeg",
  "/events_media/IMG_6109.JPG.jpeg",
  "/events_media/IMG_6718.JPG.jpeg",
  "/events_media/IMG_4611.JPG.jpeg",
  "/events_media/IMG_7009.PNG",
];

const EventsPreview = () => {
  return (
    <div className="w-full mt-20 pt-10 border-t border-slate-200/50">
      <div className="mb-8 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-black text-[#1a183b] tracking-tight">
          Life at Mytecsys
        </h3>
        <p className="text-slate-500 text-sm font-semibold mt-1">
          Glimpses of our events, celebrations, and team culture.
        </p>
      </div>

      {/* Ribbon/Marquee container */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900/5 py-4">
        <div className="flex w-max animate-marquee hover:pause-marquee">
          {[...PREVIEW_IMAGES, ...PREVIEW_IMAGES].map((src, index) => (
            <div
              key={index}
              className="relative w-64 h-40 md:w-72 md:h-48 shrink-0 rounded-xl overflow-hidden shadow-sm group mx-2"
            >
              <ExportedImage
                src={getMediaUrl(src)}
                alt={`Event Preview ${index + 1}`}
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth edge fading */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Bottom Centered Button */}
      <div className="flex justify-center mt-8">
        <Button
          asChild
          className="bg-[#1976D2] hover:bg-[#155DA8] text-white rounded-lg px-8 h-12 text-sm font-bold transition-all shadow-md group"
        >
          <Link href="/events">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default EventsPreview;
