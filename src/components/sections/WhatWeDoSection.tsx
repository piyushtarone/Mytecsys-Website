import React from "react";
import { cn } from "@/lib/utils";
import Group950 from "@/assets/Group 950.png";
import ElegantImg from "@/assets/elegant.png";
import TeleworkerImg from "@/assets/teleworker.png";
import Group9501 from "@/assets/Group 9501.png";

const services = [
  {
    title: "Software Development",
    subtitle: "Experience best software development with our team",
    image: Group950.src,
    className: "lg:col-span-3 row-span-1",
    vertical: false,
    showLearnMore: true,
  },
  {
    title: "Product Management",
    image: ElegantImg.src,
    className: "lg:col-span-1 row-span-1",
    vertical: true,
  },
  {
    title: "Business Development",
    image: TeleworkerImg.src,
    className: "lg:col-span-1 row-span-1",
    vertical: true,
  },
  {
    title: "Web Designing",
    image: Group9501.src,
    className: "lg:col-span-1 row-span-1",
    vertical: true,
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-10 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-tech">
            What We Do
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Services)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 h-[350px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative group rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-tech/10",
                service.className
              )}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url("${service.image}")` }}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
                {service.title && (
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {service.title}
                  </h3>
                )}
                {service.subtitle && (
                  <p className="text-white/90 text-sm font-medium leading-tight">
                    {service.subtitle}
                  </p>
                )}
                {service.showLearnMore && (
                  <div className="mt-4">
                    <span className="text-tech text-sm font-bold group-hover:underline cursor-pointer">
                      Learn More &rarr;
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
