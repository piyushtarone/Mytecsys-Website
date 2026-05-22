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


          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-tech">
                Get Started
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-4">
                It&apos;s your vision. Let&apos;s build it your way.
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xl font-semibold text-sm">
                Partner with Mytecsys to bring your digital products to life. From next-generation artificial intelligence to highly scalable enterprise cloud architectures, we engineer reliable software that drives real-world business growth.
              </p>
            </div>

            <Button 
              suppressHydrationWarning={true}
              size="lg" className="rounded-xl px-8 h-12 bg-[#1b6cd5] hover:bg-[#1558b0] text-white shadow-xl font-semibold group transition-all text-base">
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
