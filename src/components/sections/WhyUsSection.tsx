"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    id: "customer",
    title: "Customer-Centric Approach",
    description: "We believe that every business has unique needs. That’s why we don’t believe in one-size-fits-all. We take a deep dive into your business and develop solutions that are tailored to your specific goals. Our focus is always on what matters most — your success.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
  }
];

const WhyUsSection = () => {
  const [activeTab, setActiveTab] = useState(reasons[0].id);

  return (
    <section id="industries" className="py-10 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            Why Mytecsys
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Why we are best)
          </p>
        </div>

        <div className="relative border border-tech/20 rounded-[1.5rem] overflow-hidden bg-white/50 backdrop-blur-sm p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="flex flex-col gap-6">
                {reasons.map((reason) => (
                  <div
                    key={reason.id}
                    className={cn(
                      "cursor-pointer transition-all duration-500 border-l-2 pl-4",
                      activeTab === reason.id
                        ? "border-tech opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    )}
                    onClick={() => setActiveTab(reason.id)}
                  >
                    <h3 className={cn(
                      "text-lg md:text-xl font-bold mb-2 transition-colors",
                      activeTab === reason.id ? "text-slate-900" : "text-slate-500"
                    )}>
                      {reason.title}
                    </h3>
                    {activeTab === reason.id && (
                      <p className="text-slate-600 leading-relaxed text-base animate-in fade-in slide-in-from-left-4 duration-500 max-w-md">
                        {reason.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-tech/5">
                {reasons.map((reason) => (
                  <div
                    key={reason.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 transform",
                      activeTab === reason.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    )}
                  >
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
