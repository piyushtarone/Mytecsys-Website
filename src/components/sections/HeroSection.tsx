"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className="relative z-10 min-h-[50vh] flex flex-col items-center justify-center px-4 md:px-6 pt-32 md:pt-40 pb-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-tech text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight min-h-[1.4em] flex items-center justify-center leading-tight">
            <span className="text-gradient-tech inline-block py-2">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 inline-block w-1.5 h-10 md:h-16 bg-blue-600 align-middle"
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            For Your Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform your ideas into reality with intelligent technology solutions.
            We combine AI research, cloud infrastructure, and engineering excellence
            to build the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
            <Link href="/#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold border-slate-200 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
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

