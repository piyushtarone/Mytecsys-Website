"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const keywords = [
  "AI-Powered Innovation",
  "Intelligent Technology",
  "Digital Transformation",
  "Cloud Excellence",
  "Future-Ready Solutions",
];

export function HeroSection() {
  const [text, setText] = useState("");
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
      className="relative z-30 min-h-[60vh] flex flex-col items-center justify-start px-4 md:px-6 pt-[120px] pb-3 md:pb-4 overflow-visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-tech text-[56px] font-bold mb-1 tracking-normal min-h-[1.1em] flex items-center justify-center leading-[1.1]">
            <span className="text-blue-600 inline-block py-0">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-2 inline-block w-[5px] h-[50px] bg-blue-600 align-middle"
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
          <h2 className="text-[32px] font-bold text-[#0f172a] mb-0 tracking-normal">
            For Your Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-[24px]"
        >
          <p className="text-[18px] text-slate-500 max-w-2xl mx-auto mb-0 leading-relaxed font-medium">
            Intelligent technology solutions combining AI research, cloud infrastructure, and engineering excellence.
          </p>
        </motion.div>

        {/* Trusted Clients Section - Uniform Spacing Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center mb-2 mt-0 px-4"
        >
          {/* Logo Row */}
          <div className="flex items-center justify-center gap-6">
            <div className="relative h-14 md:h-16 w-20 md:w-28">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Rectangle 448 (1).png`}
                alt="Nagpur City Police"
                fill
                className="object-contain opacity-100"
              />
            </div>
            <div className="relative h-6 md:h-16 w-20 md:w-28">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Rectangle 449.png`}
                alt="Bhartia Nagpur"
                fill
                className="object-contain opacity-100"
              />
            </div>
            <div className="relative h-6 md:h-16 w-36 md:w-28">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Rectangle 450.png`}
                alt="UCN"
                fill
                className="object-contain opacity-100"
              />
            </div>
          </div>

          {/* Label Below */}
          <span className="text-[12px] text-slate-500 font-extrabold uppercase tracking-normal mt-3">
            Trusted by 100+ Renowned Clients
          </span>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}

