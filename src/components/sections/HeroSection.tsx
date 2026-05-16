"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      className="relative z-30 min-h-[60vh] flex flex-col items-center justify-center px-4 md:px-6 pt-16 md:pt-20 pb-6 md:pb-8 overflow-visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-tech text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight min-h-[1.1em] flex items-center justify-center leading-[1.1]">
            <span className="text-blue-600 inline-block py-2">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 inline-block w-1 h-6 md:h-10 bg-blue-600/40 align-middle"
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-2 md:-mt-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
            For Your Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-4 leading-relaxed font-medium">
            Transform your ideas into reality with intelligent technology solutions. We combine
            AI research, cloud infrastructure, and engineering excellence.
          </p>
        </motion.div>

        {/* Trusted Clients Section - Uniform Spacing Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center mb-8 mt-4 px-4"
        >
          {/* Logo Row */}
          <div className="flex items-center justify-center gap[20px]">
            <div className="relative h-8 md:h-14 w-24 md:w-32">
              <Image
                src="/Rectangle 448 (1).png"
                alt="Nagpur City Police"
                fill
                className="object-contain opacity-90"
              />
            </div>
            <div className="relative h-8 md:h-14 w-24 md:w-32">
              <Image
                src="/Rectangle 449.png"
                alt="Bhartia Nagpur"
                fill
                className="object-contain opacity-90"
              />
            </div>
            <div className="relative h-8 md:h-14 w-24 md:w-32">
              <Image
                src="/Rectangle 450.png"
                alt="UCN"
                fill
                className="object-contain opacity-90"
              />
            </div>
          </div>

          {/* Label Below */}
          <span className="text-slate-500 font-bold text-[9px] md:text-[11px] uppercase tracking-[0.25em] mt-3">
            Our Trusted Clients
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto sm:max-w-none"
        >
          <Button
            suppressHydrationWarning
            asChild size="lg" className="w-full sm:w-auto group bg-[#2589e9] hover:bg-[#1d76cc] text-white rounded-lg px-8 h-12 text-sm font-bold transition-all hover:scale-105 active:scale-95 border-none shadow-md">
            <Link href="/#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            suppressHydrationWarning
            asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-lg px-8 h-12 text-sm font-bold border-[#e2e8f0] bg-[#f8fafc]/50 hover:bg-[#2589e9] hover:text-white hover:border-[#2589e9] transition-all hover:scale-105 active:scale-95 text-[#1e293b]">
            <Link href="/maintenance">View Status</Link>
          </Button>
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

