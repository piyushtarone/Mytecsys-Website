import React from "react";
import { FolderSearch, UserCheck, Workflow, FolderUp } from "lucide-react";

const steps = [
  {
    icon: FolderSearch,
    title: "Discover",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: UserCheck,
    title: "Define",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Workflow,
    title: "Develop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: FolderUp,
    title: "Deploy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side: Title */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
              Our Simple Process <br />
              <span className="text-tech">To Simplify Your Business</span>
            </h2>
          </div>

          {/* Right side: Steps */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-tech/5 text-tech group-hover:bg-tech group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-tech/20">
                  <step.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tech transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-xs text-base">
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
