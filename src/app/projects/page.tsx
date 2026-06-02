"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import HexagonBackground from "@/components/HexagonBackground";
import { MacbookMockup } from "@/components/ui/MacbookMockup";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    description: "Manage products, supply chain, and make accurate records of imports and exports. Experience real-time inventory tracking and comprehensive supply chain logistics in a single interface.",
    features: ["Inventory Tracking", "Supply Chain", "Product Recording", "Stock Analytics"],
    image: "/projects/erp.png",
    link: "http://erp.mixoop.com/"
  },
  {
    id: "processos",
    title: "ProcessOS",
    description: "Comprehensive workflow, access, project, and employee management platform. Automate processes and track tasks with our seamless, role-based security system.",
    features: ["Project Management", "Access Control", "Employee Directory", "Workflow Builder"],
    image: "/projects/processos.png",
    link: "https://processos.mixoop.com/"
  },
  {
    id: "formflow",
    title: "FormFlow",
    description: "Manage, collect, and process form data at a single centralized location. Build dynamic drag-and-drop forms and consolidate all your data with cloud sync.",
    features: ["Unified Inbox", "Form Builder", "Cloud Sync", "Real-time Analytics"],
    image: "/projects/formflow.png",
    link: "https://formflow.mixoop.com/"
  },
  {
    id: "hrms",
    title: "HRMS",
    description: "Keep digital records of employee attendance, punch-ins/outs, and leaves. Maintain a centralized, secure digital vault for all your employee documentation and tracking.",
    features: ["Attendance Tracking", "Leave Management", "Digital Records", "Employee Hub"],
    image: "/projects/hrms.png",
    link: "https://hrms.mixoop.com/"
  },
  {
    id: "mixeventz",
    title: "Mixeventz",
    description: "Manage multiple event flows, coordination, and attendee engagements seamlessly. Provide event timelines, insights, and comprehensive RSVP tracking.",
    features: ["Multi-Event Flow", "Event Timelines", "Attendee Management", "Event Insights"],
    image: "/projects/mixeventz.png",
    link: "https://mixeventz.mixoop.com/"
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm">
              Our <span className="text-[#1976D2]">Projects</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
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
                  className="w-full lg:w-3/5"
                >
                  <MacbookMockup src={project.image} alt={project.title} />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full lg:w-2/5 flex flex-col items-start"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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
