"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, Cloud, Brain, Smartphone,
  Cpu, Layers, Zap, Shield, Sparkles, Terminal
} from "lucide-react";

interface TechNode {
  name: string;
  metric: string;
  metricColor: string;
}

interface TechCategory {
  title: string;
  desc: string;
  icon: any;
  colorClass: string;
  iconBg: string;
  nodes: TechNode[];
}

const categories: TechCategory[] = [
  {
    title: "Frontend Core",
    desc: "Optimized static rendering & type-safe user layouts.",
    icon: Code2,
    colorClass: "hover:border-blue-500/40 hover:shadow-blue-500/5",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    nodes: [
      { name: "React.js", metric: "SPA Engine", metricColor: "bg-blue-50 text-blue-700" },
      { name: "Next.js", metric: "100ms LCP", metricColor: "bg-emerald-50 text-emerald-700" },
      { name: "TypeScript", metric: "Type-Safe", metricColor: "bg-indigo-50 text-indigo-700" },
      { name: "Vue.js", metric: "Reactive UI", metricColor: "bg-teal-50 text-teal-700" },
      { name: "Tailwind CSS", metric: "Atomic CSS", metricColor: "bg-sky-50 text-sky-700" }
    ]
  },
  {
    title: "Backend Layer",
    desc: "Distributed server-side frameworks built for heavy workloads.",
    icon: Database,
    colorClass: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    nodes: [
      { name: "Node.js", metric: "15k req/sec", metricColor: "bg-emerald-50 text-emerald-700" },
      { name: "Python", metric: "Data Engine", metricColor: "bg-amber-50 text-amber-700" },
      { name: "Go Lang", metric: "5ms Latency", metricColor: "bg-cyan-50 text-cyan-700" },
      { name: "GraphQL", metric: "Unified Graph", metricColor: "bg-pink-50 text-pink-700" },
      { name: "PostgreSQL", metric: "ACID Vault", metricColor: "bg-violet-50 text-violet-700" }
    ]
  },
  {
    title: "Cloud & DevOps",
    desc: "Automated scaling & container workflows globally.",
    icon: Cloud,
    colorClass: "hover:border-sky-500/40 hover:shadow-sky-500/5",
    iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    nodes: [
      { name: "AWS Suite", metric: "99.99% SLA", metricColor: "bg-emerald-50 text-emerald-700" },
      { name: "Azure Cloud", metric: "Enterprise Sync", metricColor: "bg-blue-50 text-blue-700" },
      { name: "Docker", metric: "Isolated VM", metricColor: "bg-sky-50 text-sky-700" },
      { name: "Kubernetes", metric: "Self-Healing", metricColor: "bg-teal-50 text-teal-700" },
      { name: "CI / CD Loops", metric: "3m Deploys", metricColor: "bg-indigo-50 text-indigo-700" }
    ]
  },
  {
    title: "AI & ML Engines",
    desc: "Proprietary deep neural arrays & language processing models.",
    icon: Brain,
    colorClass: "hover:border-violet-500/40 hover:shadow-violet-500/5",
    iconBg: "bg-violet-50 text-violet-600 border-violet-100",
    nodes: [
      { name: "PyTorch", metric: "GPU Train", metricColor: "bg-purple-50 text-purple-700" },
      { name: "TensorFlow", metric: "Tensor Node", metricColor: "bg-orange-50 text-orange-700" },
      { name: "OpenCV", metric: "30 FPS Vision", metricColor: "bg-cyan-50 text-cyan-700" },
      { name: "OpenAI LLMs", metric: "RAG Loops", metricColor: "bg-indigo-50 text-indigo-700" },
      { name: "Transformers", metric: "Neural Layer", metricColor: "bg-fuchsia-50 text-fuchsia-700" }
    ]
  },
  {
    title: "Mobile Portals",
    desc: "High-frequency native frameworks for Android & iOS.",
    icon: Smartphone,
    colorClass: "hover:border-pink-500/40 hover:shadow-pink-500/5",
    iconBg: "bg-pink-50 text-pink-600 border-pink-100",
    nodes: [
      { name: "Swift / SwiftUI", metric: "Apple Core", metricColor: "bg-orange-50 text-orange-700" },
      { name: "Kotlin Compose", metric: "Android OS", metricColor: "bg-green-50 text-green-700" },
      { name: "React Native", metric: "90% Share", metricColor: "bg-blue-50 text-blue-700" },
      { name: "Flutter Engine", metric: "Skia Render", metricColor: "bg-teal-50 text-teal-700" },
      { name: "Dart Core", metric: "Native Compilation", metricColor: "bg-sky-50 text-sky-700" }
    ]
  }
];

export function TechStackMarquee() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-b border-slate-200/80">
      {/* Visual background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#f1f5f9,transparent)] opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#1976D2] font-extrabold text-xs uppercase tracking-wider block">
            TECHNOLOGIES WE MASTER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our Enterprise Tech Stack
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            We use industry-standard platforms, frameworks, and tools to construct lightweight, performant, and hyper-scalable infrastructures.
          </p>
        </div>

        {/* 5-Column Beautiful Grid Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${cat.colorClass} group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-4">
                    <div className={`p-2.5 rounded-xl border ${cat.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-slate-400 font-semibold leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  {/* Vertical stack of node pills */}
                  <div className="space-y-2.5">
                    {cat.nodes.map((node, nIdx) => (
                      <motion.div
                        key={nIdx}
                        whileHover={{ x: 3, scale: 1.01 }}
                        className="bg-slate-50 hover:bg-slate-100/50 border border-slate-100 rounded-xl p-2.5 flex items-center justify-between transition-all duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="text-xs font-extrabold text-slate-800 font-sans">
                            {node.name}
                          </span>
                        </div>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-black/5 ${node.metricColor}`}>
                          {node.metric}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-[#1976D2]" /> Status: Optimized
                  </span>
                  <span className="text-emerald-500">Live</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
