"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden bg-white/40 backdrop-blur-md border border-tech/20 rounded-[2.5rem] p-8 md:p-12">
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full text-tech">
              <path d="M0,100 C150,150 250,50 400,100 L400,400 L0,400 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-tech">
                Get Started
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-4">
                Its your Product, Invest in your way
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. 
                Integer dictum porta felis vel rhoncus. Sed quis quam mauris.
              </p>
            </div>

            <Button size="lg" className="rounded-xl px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
