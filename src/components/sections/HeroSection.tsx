"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const keywords = [
  "AI-Powered Innovation",
  "Intelligent Technology",
  "Digital Transformation",
  "Cloud Excellence",
  "Future-Ready Solutions"
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
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentKeyword) {
        setTimeout(() => setIsDeleting(true), 2000);
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
      className="relative z-10 min-h-[30vh] flex flex-col items-center justify-center px-4 md:px-6 pt-20 pb-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-tech text-3xl md:text-5xl lg:text-6xl font-bold mb-0 tracking-tight min-h-[1.2em] flex items-center justify-center">
          <span className="text-gradient-tech">
            {text}
            <span className="animate-pulse ml-1 inline-block w-1 h-8 md:h-12 bg-blue-600 align-middle"></span>
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          For Your Business
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Transform your ideas into reality with intelligent technology solutions.
          We combine AI research, cloud infrastructure, and engineering excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <Link href="/#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/maintenance">View Status</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
