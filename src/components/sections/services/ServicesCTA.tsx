"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#090d16] text-white relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1976D2]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[#1976D2] font-semibold text-sm uppercase tracking-wider">
            Let&apos;s Build Something Extraordinary
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
            Ready to Accelerate Your Technology Roadmap?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
            Partner with our expert developers and AI consultants to transform your standard workflows into intelligent solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#1976D2] hover:bg-[#155DA8] text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Launch Your Project
          </Link>
          <Link
            href="/#products"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700/60 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Proprietary Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
