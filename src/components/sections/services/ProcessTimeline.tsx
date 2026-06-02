"use client";

import { motion } from "framer-motion";
import { Search, Map, Paintbrush, Play, Rocket } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze requirements, document current tech architectures, and set strict performance goals.",
    icon: Search
  },
  {
    num: "02",
    title: "Planning",
    desc: "Creating database architectures, high-fidelity user maps, and concrete bi-weekly spring milestones.",
    icon: Map
  },
  {
    num: "03",
    title: "Design",
    desc: "Interactive visual prototyping and high-fidelity component layouts matching custom guidelines.",
    icon: Paintbrush
  },
  {
    num: "04",
    title: "Development",
    desc: "High-grade agile coding, strict integration unit testing, and automated security CI/CD workflows.",
    icon: Play
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "Cloud infrastructure staging runs, live deployment setups, and continuous post-launch performance monitoring.",
    icon: Rocket
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-20 px-4 md:px-6 bg-transparent text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-[#1976D2] font-semibold text-sm uppercase tracking-wider">
            Development Lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            How We Partner With You
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Our agile milestones ensure clear deliverables and zero surprises from kick-off to product launch.
          </p>
        </div>

        {/* Steps display - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/10 via-[#1976D2]/60 to-indigo-500/10 -z-0" />
          {/* Connector Line for Mobile */}
          <div className="lg:hidden absolute top-[32px] bottom-12 left-[31px] w-0.5 bg-gradient-to-b from-blue-500/10 via-[#1976D2]/60 to-indigo-500/10 -z-0" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-4 relative z-10 group"
              >
                {/* Number Badge & Circle Icon container */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-[#1976D2] group-hover:border-[#1976D2] group-hover:bg-[#1976D2] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-slate-100 text-[10px] font-bold text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 group-hover:bg-[#155DA8] group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-1.5 lg:space-y-2 pt-1 lg:pt-0">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#1976D2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed lg:max-w-[240px] lg:mx-auto font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
