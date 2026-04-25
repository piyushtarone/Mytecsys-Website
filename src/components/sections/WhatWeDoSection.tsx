import React from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Software Development",
    subtitle: "Experience best software develop our team",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-2 row-span-1",
    vertical: false,
  },
  {
    title: "Product Management",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-1 row-span-1",
    vertical: true,
  },
  {
    title: "Business Development",
    subtitle: "Your Business our team work is best combination",
    image: "https://images.unsplash.com/photo-1522071823991-b19c7f57c5d5?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-span-2 row-span-1",
    vertical: false,
  },
  {
    title: "Web Designing",
    image: "https://images.unsplash.com/photo-1581291518151-0107e7448817?auto=format&fit=crop&q=80&w=800",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 h-[350px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative group rounded-[1.5rem] overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-tech/10",
                service.className
              )}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              {/* Content */}
              <div
                className={cn(
                  "absolute inset-0 p-6 flex flex-col justify-center",
                  service.vertical ? "items-center" : "items-start"
                )}
              >
                {service.vertical ? (
                  <h3 className="text-base md:text-lg font-bold text-white tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 transform transition-all duration-500 group-hover:text-tech group-hover:scale-105">
                    {service.title}
                  </h3>
                ) : (
                  <div className="max-w-xs">
                    <h3 className="text-xs md:text-sm font-bold text-white mb-1 uppercase tracking-tight opacity-80">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-white text-lg md:text-xl font-bold leading-tight">
                        {service.subtitle.split(' ').map((word, i) => (
                          <span key={i} className={i === 1 || i === 2 ? "text-white" : "text-white/90"}>
                            {word}{' '}
                          </span>
                        ))}
                      </p>
                    )}
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
