"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Globe, Smartphone, Brain } from "lucide-react";

import SoftwareDevImg from "@/assets/software_development.png";
import WebDesignImg from "@/assets/web_design.png";
import ProductMgmtImg from "@/assets/product_management.png";
import BusinessDevImg from "@/assets/business_development.png";
import UiUxImg from "@/assets/ui_ux.png";
import AiImg from "@/assets/ai.png";
import AutomationImg from "@/assets/automation.png";
import CyberSecurityImg from "@/assets/cyber_security.png";

interface ChecklistItem {
  title: string;
  desc: string;
}

interface MockItem {
  title: string;
  img: any;
  desc: string;
}

interface DomainSection {
  id: string;
  tag: string;
  title: string;
  desc: string;
  checklist: ChecklistItem[];
  mockTitle: string;
  mockItems: MockItem[];
  overlapImg: any;
  overlapTitle: string;
  overlapDesc: string;
}

const sections: DomainSection[] = [
  {
    id: "web-development",
    tag: "WEB ENGINEERING",
    title: "Next-Gen Web Applications",
    desc: "We engineer high-performance, responsive web architectures tailored to your business needs. Using state-of-the-art frontend frameworks and robust backend infrastructures, we construct web portals that are fast, accessible, and highly secure.",
    checklist: [
      { title: "Frontend & UI Engineering", desc: "Pixel-perfect, responsive layouts with lightning-fast load times" },
      { title: "Robust Backend Solutions", desc: "Scaleable server APIs, robust database connections, and auth systems" },
      { title: "Full Stack Integration", desc: "Seamless coordination between client applications and server logic" },
      { title: "E-Commerce & PWA Builds", desc: "Feature-rich online store platforms and installable mobile-web apps" }
    ],
    mockTitle: "WEB DEVELOPMENT SOLUTIONS",
    mockItems: [
      { title: "FRONTEND DEV", img: SoftwareDevImg, desc: "Modern UI/UX rendering." },
      { title: "BACKEND INFRA", img: BusinessDevImg, desc: "Secure API databases." },
      { title: "FULL STACK WEB", img: WebDesignImg, desc: "Cohesive end-to-end builds." },
      { title: "E-COMMERCE ENGINES", img: ProductMgmtImg, desc: "Scalable retail systems." }
    ],
    overlapImg: UiUxImg,
    overlapTitle: "PROGRESSIVE WEB APPS",
    overlapDesc: "Offline-ready, fast web apps."
  },
  {
    id: "mobile-apps",
    tag: "CROSS-PLATFORM & NATIVE",
    title: "Custom Mobile Applications",
    desc: "Engage your customers with high-fidelity, offline-ready native mobile applications. We build across platforms utilizing modern compilation engines to maximize daily operations, security, and hardware sensor integration.",
    checklist: [
      { title: "iOS Development Core", desc: "Fluid Swift & SwiftUI systems utilizing Apple framework libraries" },
      { title: "Android Native Builds", desc: "Reliable Kotlin environments engineered for Google OS ecosystems" },
      { title: "Cross-Platform React Native", desc: "Unified codebases delivering native-grade feel on both platforms" },
      { title: "High-Performance Flutter", desc: "Stunning custom UI controls rendered directly via Skia engine" }
    ],
    mockTitle: "MOBILE DEVELOPMENT SERVICES",
    mockItems: [
      { title: "iOS SYSTEM APPS", img: UiUxImg, desc: "Swift and SwiftUI builds." },
      { title: "ANDROID CORE", img: CyberSecurityImg, desc: "Kotlin system architecture." },
      { title: "REACT NATIVE RUN", img: SoftwareDevImg, desc: "Cross platform portability." },
      { title: "FLUTTER DESIGNS", img: WebDesignImg, desc: "Fast hardware visual rendering." }
    ],
    overlapImg: AiImg,
    overlapTitle: "APP STORE LAUNCH",
    overlapDesc: "Production-ready compliance."
  },
  {
    id: "ai-solutions",
    tag: "COGNITIVE PIPELINES",
    title: "Enterprise AI & Machine Learning",
    desc: "Embed natural language systems, smart forecasting loops, and automated image detection architectures directly inside your business pipeline to achieve autonomy and maximize data processing throughput.",
    checklist: [
      { title: "Machine Learning Models", desc: "Deep analytical neural arrays customized for specific data patterns" },
      { title: "NLP & Conversational Chatbots", desc: "Semantic language intelligence handling client operations automatically" },
      { title: "Computer Vision Systems", desc: "Real-time camera analytics, object classification, and anomaly detection" },
      { title: "Smart Process Automation", desc: "Self-correcting AI workers executing complex server workloads" }
    ],
    mockTitle: "AI & COGNITIVE SOLUTIONS",
    mockItems: [
      { title: "NEURAL MODELS", img: AiImg, desc: "Analytical training algorithms." },
      { title: "NLP SPEECH CORE", img: AutomationImg, desc: "Conversational text interpreters." },
      { title: "VISION RECOGNITION", img: CyberSecurityImg, desc: "Image semantic classification." },
      { title: "PREDICTIVE ANALYTICS", img: BusinessDevImg, desc: "Time-series forecasting models." }
    ],
    overlapImg: AutomationImg,
    overlapTitle: "PREDICTIVE AI ENGINES",
    overlapDesc: "Autonomous workload control."
  }
];

export function ServiceDomainSection() {
  return (
    <section id="service-domains" className="py-24 px-4 md:px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto space-y-32">
        {sections.map((sec, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={sec.id}
              id={sec.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              {/* Left Column: Visual Dashboard Mockup (Matching user's mockup image) */}
              <div className={`lg:col-span-6 relative flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full max-w-[480px] bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xl overflow-visible"
                >
                  {/* Dashboard header */}
                  <div className="text-center mb-6">
                    <span className="text-[10px] text-[#1976D2] font-bold uppercase tracking-wider block">
                      {sec.tag}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-800 mt-1 font-sans">
                      {sec.mockTitle}
                    </h3>
                  </div>

                  {/* Grid of Mock Items */}
                  <div className="grid grid-cols-2 gap-4">
                    {sec.mockItems.map((item, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-white border border-slate-200/60 rounded-xl p-3 flex flex-col gap-2 hover:border-[#1976D2]/30 transition-all duration-300 shadow-sm"
                      >
                        <div className="h-20 rounded-lg overflow-hidden bg-slate-100 relative">
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wide">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overlapping Isometric/Floating Graphic Card on bottom right (EXACTLY like mockup) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute -bottom-8 right-2 md:-right-6 w-[140px] md:w-[180px] bg-white border border-slate-200 rounded-2xl p-2.5 md:p-3 shadow-2xl flex flex-col gap-2 z-20"
                  >
                    <div className="h-16 rounded-xl overflow-hidden bg-slate-50">
                      <Image
                        src={sec.overlapImg}
                        alt="Overlap asset"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-extrabold text-slate-800 uppercase">
                        {sec.overlapTitle}
                      </h4>
                      <p className="text-[8px] text-slate-400 mt-0.5 leading-normal">
                        {sec.overlapDesc}
                      </p>
                      <button className="text-[9px] font-bold text-white bg-[#1976D2] hover:bg-[#155DA8] px-3 py-1 rounded-md mt-2 w-full transition-colors">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Custom Checklist (Matching user's mockup text/checklist) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="space-y-3">
                  <span className="text-[#1976D2] font-bold text-xs uppercase tracking-wider">
                    {sec.tag}
                  </span>
                  <h2 className="text-[32px] font-extrabold text-indigo-950 font-sans tracking-tight leading-tight">
                    {sec.title}
                  </h2>
                  <p className="text-slate-500 font-medium leading-relaxed text-[18px]">
                    {sec.desc}
                  </p>
                </div>

                {/* Vertical Checklist with Purple icons */}
                <div className="flex flex-col gap-4 pt-2">
                  {sec.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-[18px] font-extrabold text-slate-900 font-sans">
                          {item.title}
                        </h4>
                        <p className="text-[18px] text-slate-500 mt-0.5 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
