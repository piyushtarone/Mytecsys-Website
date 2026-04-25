"use client";

import React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechFlow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sarah Smith",
    role: "Founder, Innovate",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Michael Chen",
    role: "CTO, CloudScale",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "David Wilson",
    role: "Director, BPW",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Head",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
];

const TestimonialsSection = () => {
  // Group testimonials into 3 columns
  const col1 = [...testimonials, ...testimonials];
  const col2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
  const col3 = [...testimonials, ...testimonials];

  return (
    <section className="py-12 px-4 md:px-6 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-tech/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            Trust We Build
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Customers Words)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] overflow-hidden relative">
          {/* Fading Overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white z-20 pointer-events-none" />

          {/* Column 1: Continuous Up */}
          <div className="flex flex-col gap-6 animate-marquee-up">
            {col1.map((t, i) => (
              <TestimonialCard key={`col1-${i}`} testimonial={t} />
            ))}
          </div>

          {/* Column 2: Continuous Down */}
          <div className="flex flex-col gap-6 animate-marquee-down">
            {col2.map((t, i) => (
              <TestimonialCard key={`col2-${i}`} testimonial={t} />
            ))}
          </div>

          {/* Column 3: Continuous Up (Slower) */}
          <div className="flex flex-col gap-6 animate-marquee-up-slow">
            {col3.map((t, i) => (
              <TestimonialCard key={`col3-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marquee-up 30s linear infinite;
        }
        .animate-marquee-up-slow {
          animation: marquee-up 40s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 35s linear infinite;
        }
        .animate-marquee-up:hover, .animate-marquee-up-slow:hover, .animate-marquee-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ testimonial: t }: { testimonial: any }) => (
  <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-tech/30 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-tech transition-colors">
          {t.name}
        </h4>
        <p className="text-xs text-slate-500 font-medium">{t.role}</p>
      </div>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed italic">
      &ldquo;{t.text}&rdquo;
    </p>
  </div>
);

export default TestimonialsSection;
