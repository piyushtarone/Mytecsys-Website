"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  Code2,
  Award,
  Cloud,
  TrendingUp,
} from "lucide-react";

const FRAMES = [
  {
    id: "research",
    headline: "We Research First",
    subline: "Deep AI and ML research drives everything we build",
    Icon: Search,
  },
  {
    id: "development",
    headline: "We Build Smart",
    subline: "Intelligent systems architected for scale",
    Icon: Code2,
  },
  {
    id: "quality",
    headline: "We Ship Excellence",
    subline: "Rigorous quality standards in every line of code",
    Icon: Award,
  },
  {
    id: "cloud",
    headline: "We Scale Globally",
    subline: "Cloud-native infrastructure for worldwide impact",
    Icon: Cloud,
  },
  {
    id: "impact",
    headline: "We Deliver Impact",
    subline: "Measurable results that transform businesses",
    Icon: TrendingUp,
  },
];

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop <= windowHeight && sectionTop + sectionHeight > 0) {
        const scrollableHeight = sectionHeight - windowHeight;
        const scrolled = Math.max(0, -sectionTop);
        const progress = scrollableHeight > 0
          ? Math.min(1, Math.max(0, scrolled / scrollableHeight))
          : 0;
        setScrollProgress(progress);

        const frameIndex = Math.min(
          Math.floor(progress * FRAMES.length),
          FRAMES.length - 1
        );
        setActiveFrame(frameIndex);
      } else if (sectionTop > windowHeight) {
        setScrollProgress(0);
        setActiveFrame(0);
      } else {
        setScrollProgress(1);
        setActiveFrame(FRAMES.length - 1);
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="parallax"
      className="relative z-10 bg-muted/20"
      style={{ height: `${FRAMES.length * 100}vh` }}
    >
      {/* Single sticky viewport - all frames render inside, opacity controlled by scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {FRAMES.map((frame, frameIndex) => {
          const frameProgress =
            scrollProgress * (FRAMES.length - 1) - frameIndex;
          const isActive = frameIndex === activeFrame;
          const opacity = Math.max(0, Math.min(1, 1 - Math.abs(frameProgress) * 1.5));
          const layerOffset = frameProgress * 80;

          return (
            <div
              key={frame.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity,
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 10 : frameIndex,
              }}
            >
              {/* Parallax layers - move at different speeds */}
              <div
                className="absolute inset-0 opacity-10"
                style={{ transform: `translateY(${layerOffset * 0.15}px)` }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={`hex-${frame.id}`}
                      width="50"
                      height="43.4"
                      patternUnits="userSpaceOnUse"
                      patternTransform="scale(3)"
                    >
                      <polygon
                        points="24.8,22 37.3,29.2 37.3,43.4 24.8,50.6 12.3,43.4 12.3,29.2"
                        fill="none"
                        stroke="hsl(207 80% 52%)"
                        strokeWidth="0.5"
                      />
                      <polygon
                        points="24.8,-21.6 37.3,-14.4 37.3,0 24.8,7.2 12.3,0 12.3,-14.4"
                        fill="none"
                        stroke="hsl(207 80% 52%)"
                        strokeWidth="0.5"
                      />
                      <polygon
                        points="0,0 12.3,7.2 12.3,21.6 0,28.8 -12.3,21.6 -12.3,7.2"
                        fill="none"
                        stroke="hsl(207 80% 52%)"
                        strokeWidth="0.5"
                      />
                      <polygon
                        points="50,0 62.3,7.2 62.3,21.6 50,28.8 37.7,21.6 37.7,7.2"
                        fill="none"
                        stroke="hsl(207 80% 52%)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#hex-${frame.id})`}
                  />
                </svg>
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ transform: `translateY(${layerOffset * 0.35}px)` }}
              >
                <div className="absolute top-[15%] right-[20%] w-4 h-4 rounded-full bg-tech/40 animate-pulse-slow" />
                <div
                  className="absolute top-[25%] left-[15%] w-3 h-3 rounded-full bg-tech-light/50 animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-[30%] right-[25%] w-5 h-5 rounded-full bg-tech/30 animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-tech-light animate-pulse-slow"
                  style={{ animationDelay: "1.5s" }}
                />
                <div
                  className="absolute top-[50%] left-[50%] w-6 h-6 rounded-full bg-tech/20 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <svg
                className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
                style={{ transform: `translateY(${layerOffset * 0.5}px)` }}
              >
                <line
                  x1="10%"
                  y1="20%"
                  x2="30%"
                  y2="40%"
                  stroke="hsl(207 80% 52%)"
                  strokeWidth="1"
                />
                <line
                  x1="90%"
                  y1="25%"
                  x2="70%"
                  y2="45%"
                  stroke="hsl(207 80% 52%)"
                  strokeWidth="1"
                />
                <line
                  x1="15%"
                  y1="70%"
                  x2="35%"
                  y2="55%"
                  stroke="hsl(207 80% 52%)"
                  strokeWidth="1"
                />
                <line
                  x1="85%"
                  y1="75%"
                  x2="65%"
                  y2="60%"
                  stroke="hsl(207 80% 52%)"
                  strokeWidth="1"
                />
              </svg>

              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translateY(${layerOffset * 0.7}px) scale(${0.85 + opacity * 0.2})`,
                }}
              >
                <frame.Icon className="h-32 w-32 md:h-48 md:w-48 text-tech/20" />
              </div>

              <div className="relative z-10 text-center px-4">
                <h2
                  className={`font-tech text-3xl md:text-5xl lg:text-6xl font-bold mb-4 transition-colors duration-300 ${
                    isActive ? "text-gradient-tech" : "text-muted-foreground"
                  }`}
                >
                  {frame.headline}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                  {frame.subline}
                </p>
              </div>
            </div>
          );
        })}

        {/* Frame indicator dots - fixed position in sticky container */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {FRAMES.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeFrame ? "bg-tech scale-125" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
