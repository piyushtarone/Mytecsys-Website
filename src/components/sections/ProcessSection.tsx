import React from "react";
import { FolderSearch, UserCheck, Workflow, FolderUp } from "lucide-react";

const steps = [
  {
    icon: FolderSearch,
    title: "Discover",
    description: "We analyze your core workflows to identify high-impact AI and automation opportunities.",
  },
  {
    icon: UserCheck,
    title: "Define",
    description: "We architect scalable cloud blueprints and draft custom technical roadmaps.",
  },
  {
    icon: Workflow,
    title: "Develop",
    description: "Our engineering experts build high-performance software with state-of-the-art security.",
  },
  {
    icon: FolderUp,
    title: "Deploy",
    description: "Seamless launching, cloud optimization, and proactive continuous monitoring for your success.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative z-10 bg-white overflow-hidden">
      {/* Darkened Background Overlay */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none z-0" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center lg:items-start">
          {/* Title Column */}
          <div className="lg:col-span-1 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-slate-900 leading-snug">
              Our Simple Process <br />
              <span className="text-tech">To Simplify Your Business</span>
            </h2>
          </div>

          {/* Steps Columns */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-tech/5 text-tech group-hover:bg-tech group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-tech/20">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-tech transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
