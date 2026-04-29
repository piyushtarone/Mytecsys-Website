"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import FounderImage from "@/assets/Component 18.png";

const FounderSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the container (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Set tilt values (max 8 degrees for subtlety)
    setTilt({ x: y * 8, y: -x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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
          {/* Left: Image Container with Tilt Effect */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            className="md:w-1/3 relative h-[350px] md:h-auto overflow-hidden group img-wrap bg-slate-100 cursor-pointer transition-all duration-700 group-hover:scale-[1.01] group-hover:-translate-y-1"
          >
            {/* Camera Lens Reveal Style */}
            <style>{`
              @keyframes cameraFocus {
                0% {
                  filter: blur(20px) grayscale(100%);
                  transform: scale(1.1) translateY(18px);
                  opacity: 0;
                }
                100% {
                  filter: blur(0) grayscale(100%);
                  transform: scale(1) translateY(0);
                  opacity: 1;
                }
              }
              .animate-camera-focus {
                animation: cameraFocus 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              }
            `}</style>

            {/* Default Base Image - Entrance Animation Applied */}
            <Image
              src={FounderImage}
              alt="Shhreyas Kawale"
              fill
              className="object-cover object-left grayscale transition-all duration-[1200ms] ease-in-out group-hover:blur-[12px] group-hover:scale-[1.05] animate-camera-focus"
            />

            {/* Reflection on LEFT half - Clear mirror of the man */}
            <div className="absolute inset-y-0 left-0 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-in-out overflow-hidden pointer-events-none z-20">
              <div className="absolute inset-y-0 left-0 w-[200%] h-full">
                <Image
                  src={FounderImage}
                  alt="Reflection"
                  fill
                  style={{ transform: 'scaleX(-1)' }}
                  className="object-cover object-left grayscale transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Fade on RIGHT half on hover - Background vibe without the man */}
            <div className="absolute inset-y-0 right-0 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-in-out bg-white/40 backdrop-blur-md pointer-events-none z-10" />

            {/* Social Icons & Label centered on RIGHT half */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[25%] translate-x-1/2 flex flex-col items-center gap-6 z-10">
              <div className="flex flex-col gap-4">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    style={{ 
                      transitionDelay: `${idx * 120}ms`,
                      transitionDuration: '2000ms',
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/20 transition-all opacity-0 blur-xl scale-90 translate-y-3 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100 group-hover:translate-y-0"
                  >
                    <Icon className="w-5 h-5 text-slate-900 stroke-[1.5]" />
                  </a>
                ))}
              </div>
              <div 
                style={{ transitionDelay: '600ms', transitionDuration: '1500ms' }}
                className="bg-white/80 backdrop-blur-sm text-slate-900 text-[10px] font-bold py-1.5 px-3 rounded shadow-sm uppercase tracking-wider whitespace-nowrap transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Founder & CEO
              </div>
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
