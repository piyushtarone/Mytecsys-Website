"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import HexagonBackground from "@/components/HexagonBackground";
import { MacbookMockup } from "@/components/ui/MacbookMockup";
import Footer from "@/components/Footer";
import Component7 from "@/assets/Component 7.png";
import Component8 from "@/assets/Component 8.png";
import Component18 from "@/assets/Component 18.png";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  {
    id: "hrms",
    title: "HRMS",
    description: "Keep digital records of employee attendance, punch-ins/outs, and leaves. Maintain a centralized, secure digital vault for all your employee documentation and tracking.",
    features: ["Attendance Tracking", "Leave Management", "Digital Records", "Employee Hub"],
    image: `${basePath}/hrms.jpg`,
    link: "#",
    imageClassName: "object-cover object-top"
  },
  {
    id: "processos",
    title: "ProcessOS",
    description: "Comprehensive workflow, access, project, and employee management platform. Automate your processes and manage your team efficiently.",
    features: ["Project Management", "Access Control", "Employee Directory", "Workflow Builder"],
    image: `${basePath}/projects/processOS.png`,
    link: "#",
    imageClassName: "object-cover object-top"
  },
  {
    id: "formflow",
    title: "FormFlow",
    description: "Manage, collect, and process form data at a single centralized location. Create dynamic drag-and-drop forms with real-time analytics.",
    features: ["Unified Inbox", "Form Builder", "Cloud Sync", "Real-time Analytics"],
    image: `${basePath}/projects/formflow.png`,
    link: "#",
    imageClassName: "object-contain object-top"
  },
  {
    id: "erp",
    title: "ERP",
    description: "Manage products, supply chain, and make accurate records of imports and exports. Optimize inventory control and demand forecasting.",
    features: ["Inventory Tracking", "Supply Chain", "Product Recording", "Stock Analytics"],
    image: `${basePath}/projects/ERP.png`,
    link: "#",
    imageClassName: "object-cover object-top"
  },
  {
    id: "mixeventz",
    title: "MixEventz",
    description: "Streamlined event flow and coordination platform. Manage multiple events, timelines, and attendee engagements seamlessly with our comprehensive event builder.",
    features: ["Event Flow", "Timelines", "Attendee Management", "Insights"],
    image: `${basePath}/event flow.jpeg`,
    link: "#",
    imageClassName: "object-contain object-top bg-white"
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Static Background Images */}
      <div
        className="fixed left-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-[0.9] select-none"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/back.png')`,
          filter: 'brightness(0.5) contrast(1.3) saturate(1.2)'
        }}
      />
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-right bg-contain pointer-events-none opacity-[0.9] select-none"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/back_right.png')`,
          filter: 'brightness(0.5) contrast(1.3) saturate(1.2)'
        }}
      />

      {/* Hero Section */}
      <section className="relative z-20 w-full pt-[140px] md:pt-[180px] pb-20 md:pb-32 px-4 md:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[44px] font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
              Our <span className="text-[#1976D2]">Projects</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[20px] text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover our cutting-edge SaaS products and platforms designed to streamline operations, enhance productivity, and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="relative z-10 pb-20 md:pb-32 flex-grow">
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                id={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Image Side - Macbook Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <MacbookMockup 
                    src={typeof project.image === 'string' ? project.image : (project.image as any).src} 
                    alt={project.title} 
                    imageClassName={(project as any).imageClassName}
                  />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`w-full lg:w-1/2 flex flex-col items-start ${isEven ? "lg:pl-10" : "lg:pr-10 lg:pl-8"}`}
                >
                  <h2 className="text-[32px] font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-[20px] text-slate-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#1976D2] flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-[#1976D2] text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 hover:-translate-y-1">
                      Visit Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
