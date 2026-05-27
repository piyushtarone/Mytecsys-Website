"use client";

import { motion } from "framer-motion";
import { 
  Zap, Globe, Shield, Brain, Smartphone, Trophy, RefreshCw, LifeBuoy 
} from "lucide-react";

interface FeatureCard {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  color: string;
}

const features: FeatureCard[] = [
  {
    icon: Zap,
    title: "15+ Years Experience",
    desc: "A veteran engineering core bringing unparalleled expertise to complex builds.",
    color: "from-amber-500/10 to-orange-500/10 text-orange-600"
  },
  {
    icon: Globe,
    title: "Global Delivery",
    desc: "Seamless collaboration and round-the-clock development cycles globally.",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "GDPR compliant architectures, rigorous data encryption, and robust firewalls.",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600"
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    desc: "Pioneering the inclusion of smart predictive algorithms in everyday tools.",
    color: "from-purple-500/10 to-pink-500/10 text-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile-Ready Always",
    desc: "Fully optimized web systems engineered with responsive mobile viewport guidelines.",
    color: "from-cyan-500/10 to-teal-500/10 text-cyan-600"
  },
  {
    icon: Trophy,
    title: "100+ Renowned Clients",
    desc: "Highly rated by city municipalities, science associations, and tech startups.",
    color: "from-yellow-500/10 to-amber-500/10 text-amber-600"
  },
  {
    icon: RefreshCw,
    title: "Agile Methodology",
    desc: "Flexible product sprints with bi-weekly updates ensuring aligned products.",
    color: "from-pink-500/10 to-rose-500/10 text-pink-600"
  },
  {
    icon: LifeBuoy,
    title: "Post-Launch Support",
    desc: "Dedicated SLA agreements, active bug patrols, and infrastructure scaling advice.",
    color: "from-violet-500/10 to-purple-500/10 text-violet-600"
  }
];

export function WhyChooseGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-[#1976D2] font-semibold text-sm uppercase tracking-wider">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Unlocking Digital Velocity
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Our comprehensive engineering ecosystem ensures rapid iterations, production reliability, and high-fidelity final systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} blur-[36px] opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
