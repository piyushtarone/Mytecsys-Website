"use client";

import React, { useState, useRef } from "react";
import ExportedImage from "next-image-export-optimizer";
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
    <section className="pt-[120px] pb-[60px] px-2 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-[#1a183b] font-sans font-black text-[28px] md:text-[32px] tracking-tight text-center">
            Meet The Founder
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
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
              .smooth-fade-out {
                opacity: 1;
                transform: scale(1);
                transition: opacity 2200ms cubic-bezier(0.22, 1, 0.36, 1), transform 2200ms cubic-bezier(0.22, 1, 0.36, 1);
              }
              .group:hover .smooth-fade-out {
                opacity: 0;
                transform: scale(1.05);
              }
              .smooth-fade-in {
                opacity: 0;
                transition: opacity 2200ms cubic-bezier(0.22, 1, 0.36, 1);
              }
              .group:hover .smooth-fade-in {
                opacity: 1;
              }
              .smooth-scale-up {
                transform: scale(1);
                transition: transform 2200ms cubic-bezier(0.22, 1, 0.36, 1);
              }
              .group:hover .smooth-scale-up {
                transform: scale(1.05);
              }

              /* Mobile Overrides to force "Hover/Active" state by default */
              @media (max-width: 767px) {
                .animate-camera-focus {
                  animation: none !important;
                  filter: blur(0) grayscale(100%) !important;
                }
                .smooth-fade-out {
                  opacity: 1 !important;
                  transform: none !important;
                }
                .smooth-fade-in {
                  display: none !important;
                  opacity: 0 !important;
                }
                .social-icon {
                  display: none !important;
                }
                .founder-label {
                  display: none !important;
                }
                .social-container {
                  display: none !important;
                }
                .mobile-bg-pos {
                  object-position: 100% center !important;
                }
              }
            `}</style>

            {/* Entrance Animation Wrapper */}
            <div className="absolute inset-0 w-full h-full animate-camera-focus">
              {/* Default Base Image */}
              <ExportedImage
                src={FounderImage}
                alt="Shhreyas Kawale"
                fill
                className="object-cover object-left md:object-left grayscale smooth-fade-out mobile-bg-pos"
              />
            </div>

            {/* Reflection - Full-width mirror of the picture */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-20 smooth-fade-in">
              <div className="absolute inset-0 w-full h-full -scale-x-100">
                <ExportedImage
                  src={FounderImage}
                  alt="Reflection"
                  fill
                  className="object-cover object-center grayscale smooth-scale-up"
                />
              </div>
            </div>

            {/* Fade on RIGHT half on hover - Background vibe with blur */}
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-30 smooth-fade-in bg-slate-900/5 backdrop-blur-xl" />

            {/* Social Icons & Label centered on RIGHT half */}
            <div className="social-container absolute top-1/2 -translate-y-1/2 right-[25%] translate-x-1/2 flex flex-col items-center gap-6 z-40">
              <div className="flex flex-col gap-4">
                {[
                  { Icon: Twitter, url: "https://x.com/mytecsys?t=wWHBheDhnq73DIdrIkYJkg&s=09" },
                  { Icon: Linkedin, url: "https://www.linkedin.com/in/shreyas-kawale-39a5a8144/" },
                  { Icon: Instagram, url: "https://www.instagram.com/shreyas_kawale_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                  { Icon: Facebook, url: "https://www.facebook.com/p/Shreyas-P-Kawale-100068965583770/" },
                ].map(({ Icon, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      transitionDelay: `${idx * 20}ms`,
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                    className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-white border border-blue-100 shadow-md hover:bg-blue-50 transition-all opacity-0 blur-xl scale-90 translate-y-3 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100 group-hover:translate-y-0 pointer-events-auto"
                  >
                    <Icon className="w-5 h-5 text-blue-600 stroke-[2]" />
                  </a>
                ))}
              </div>
              <div
                style={{ transitionDelay: '100ms', transitionDuration: '300ms' }}
                className="founder-label bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold py-1.5 px-3 rounded shadow-sm uppercase tracking-wider whitespace-nowrap transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Founder & CEO
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 font-tech">
              Shreyas Kawale
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed italic text-base font-semibold">
              &ldquo;Empowering modern enterprises by engineering powerful, high-performance software and intelligent automation that turn visionary concepts into reality.&rdquo;
            </p>

            <ul className="space-y-2">
              {[
                "Over 15 years of technology leadership and software engineering experience.",
                "Distinguished full-stack engineer and solutions architect with a deep focus on scalable enterprise system design.",
                "Driven by a passion for technical excellence, creative problem-solving, and building high-trust partnerships with global enterprises.",
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
