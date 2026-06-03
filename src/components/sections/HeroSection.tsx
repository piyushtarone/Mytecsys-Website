"use client";

import { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";

const keywords = [
  "AI-Powered Innovation",
  "Intelligent Technology",
  "Digital Transformation",
  "Cloud Excellence",
  "Future-Ready Solutions",
];

const cube1Logos = [
  { src: "/Rectangle 448 (1).png", alt: "Nagpur City Police" },
  { src: "/vigyan.webp", alt: "Vigyan" },
  { src: "/Rectangle 449.png", alt: "Bhartia Nagpur" },
  { src: "/water research.png", alt: "Water Research" },
  { src: "/astrospark.jpg", alt: "AstroSpark" },
];

const cube2Logos = [
  { src: "/vedant.png", alt: "Vedant" },
  { src: "/BLUE ROCK.webp", alt: "Blue Rock" },
  { src: "/Rectangle 450.png", alt: "UCN" },
  { src: "/amrvati police.png", alt: "Amravati Police" },
  { src: "/vigyan.webp", alt: "Vigyan" },
];

const cube3Logos = [
  { src: "/dama.jpg", alt: "Dama" },
  { src: "/astrospark.jpg", alt: "AstroSpark" },
  { src: "/Rectangle 448 (1).png", alt: "Nagpur City Police" },
  { src: "/BLUE ROCK.webp", alt: "Blue Rock" },
  { src: "/water research.png", alt: "Water Research" },
];

const Cube = ({ logos }: { logos: { src: string; alt: string }[] }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const getLogoClass = (alt: string) => {
    const needsPadding = ['Blue Rock', 'Amravati Police', 'Vigyan', 'Water Research'].includes(alt);
    return `w-full h-full object-contain ${needsPadding ? 'p-1' : ''}`;
  };

  return (
    <div className="cube-scene">
      <div className="cube">
        {/* Front Face */}
        <div className="cube-face face-front">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[0].src}`} alt={logos[0].alt} fill className={getLogoClass(logos[0].alt)} />
          </div>
        </div>
        {/* Top Face */}
        <div className="cube-face face-top">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[1].src}`} alt={logos[1].alt} fill className={getLogoClass(logos[1].alt)} />
          </div>
        </div>
        {/* Right Face */}
        <div className="cube-face face-right">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[2].src}`} alt={logos[2].alt} fill className={getLogoClass(logos[2].alt)} />
          </div>
        </div>
        {/* Bottom Face */}
        <div className="cube-face face-bottom">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[3].src}`} alt={logos[3].alt} fill className={getLogoClass(logos[3].alt)} />
          </div>
        </div>
        {/* Left Face */}
        <div className="cube-face face-left">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[4].src}`} alt={logos[4].alt} fill className={getLogoClass(logos[4].alt)} />
          </div>
        </div>
        {/* Back Face (fallback) */}
        <div className="cube-face face-back">
          <div className="relative w-full h-full flex items-center justify-center">
            <ExportedImage src={`${basePath}${logos[0].src}`} alt={logos[0].alt} fill className={getLogoClass(logos[0].alt)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export function HeroSection() {
  const [text, setText] = useState("");
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentKeyword = keywords[keywordIndex];

      if (isDeleting) {
        setText(currentKeyword.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentKeyword.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentKeyword) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setKeywordIndex((prev) => (prev + 1) % keywords.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, keywordIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative z-30 min-h-[60vh] flex flex-col items-center justify-start px-2 md:px-6 pt-[140px] md:pt-[80px] pb-3 md:pb-4 overflow-visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-tech text-[24px] sm:text-[34px] md:text-[44px] font-bold mb-1 tracking-normal min-h-[1.1em] flex items-center justify-center leading-[1.1] whitespace-nowrap">
            <span className="inline-block py-0" style={{ color: '#1976D2' }}>
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-2 inline-block w-[3px] md:w-[5px] h-[28px] sm:h-[38px] md:h-[50px] align-middle"
                style={{ backgroundColor: '#1976D2' }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-1 mb-[16px]"
        >
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-0 tracking-normal">
            For Your Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-[30px] md:mb-[10px]"
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-500 max-w-2xl mx-auto mb-0 leading-relaxed font-medium">
            Intelligent technology solutions combining AI research, cloud infrastructure, and engineering excellence.
          </p>
        </motion.div>

        {/* Trusted Clients Section - 3D Cube Animation Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center mb-2 mt-0 px-2 md:px-4 overflow-visible"
        >
          {/* Rotating Cubes Row */}
          <div className={`flex items-center justify-center gap-4 md:gap-6 pt-0 pb-4 overflow-visible ${active ? "animate-active" : ""}`}>
            <Cube logos={cube1Logos} />
            <Cube logos={cube2Logos} />
            <Cube logos={cube3Logos} />
          </div>

          {/* Label Below */}
          <span className="text-[12px] text-slate-500 font-extrabold uppercase tracking-normal mt-8 md:mt-3">
            Trusted by 100+ Renowned Clients
          </span>
        </motion.div>
      </div>

      {/* 3D Cube CSS Styles */}
      <style>{`
        .cube-scene {
          width: var(--cube-size, 48px);
          height: var(--cube-size, 48px);
          perspective: 800px;
          position: relative;
          --cube-size: 48px;
          --translate-z: 24px;
        }
        .cube-scene::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 8px;
          background: rgba(0, 0, 0, 0.15);
          filter: blur(4px);
          border-radius: 50%;
          z-index: -1;
        }
        @media (min-width: 768px) {
          .cube-scene {
            --cube-size: 56px;
            --translate-z: 28px;
          }
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(0deg) rotateY(0deg);
          will-change: transform;
        }
        .animate-active .cube {
          animation: rotateCube 15s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
        }
        @keyframes rotateCube {
          /* 0% - 15%: Front face visible */
          0%, 15% { transform: rotateX(0deg) rotateY(0deg); }
          /* 20% - 35%: Top face visible (flip up) */
          20%, 35% { transform: rotateX(-90deg) rotateY(0deg); }
          /* 40% - 55%: Right face visible (flip right) */
          40%, 55% { transform: rotateX(0deg) rotateY(-90deg); }
          /* 60% - 75%: Bottom face visible (flip down) */
          60%, 75% { transform: rotateX(90deg) rotateY(0deg); }
          /* 80% - 95%: Left face visible (flip left) */
          80%, 95% { transform: rotateX(0deg) rotateY(90deg); }
          /* 100%: Loop back to Front face */
          100% { transform: rotateX(0deg) rotateY(0deg); }
        }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
          overflow: hidden;
          backface-visibility: hidden;
        }
        .face-front  { transform: rotateY(0deg) translateZ(var(--translate-z, 28px)); }
        .face-top    { transform: rotateX(90deg) translateZ(var(--translate-z, 28px)); }
        .face-back   { transform: rotateY(180deg) translateZ(var(--translate-z, 28px)); }
        .face-bottom { transform: rotateX(-90deg) translateZ(var(--translate-z, 28px)); }
        .face-left   { transform: rotateY(-90deg) translateZ(var(--translate-z, 28px)); }
        .face-right  { transform: rotateY(90deg) translateZ(var(--translate-z, 28px)); }
      `}</style>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
