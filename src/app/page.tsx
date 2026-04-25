import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
<<<<<<< HEAD
} from "lucide-react";
import logo from "@/assets/logo.png";
import HexagonBackground from "@/components/HexagonBackground";

import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ProcessSection, WhatWeDoSection, CaseStudiesSection, WhyUsSection, AboutSection, FounderSection, TeamSection, NewsSection, AchievementsSection, TestimonialsSection, ContactSection } from "@/components/sections";
=======
  Brain,
  Cloud,
  Sparkles,
  Mail,
  Phone,
  Bot,
} from "lucide-react";
import logo from "@/assets/logo.png";
import HexagonBackground from "@/components/HexagonBackground";
import ParallaxSection from "@/components/ParallaxSection";
import {
  RnDSection,
  QualitySection,
  CloudSection,
  CaseStudiesSection,
  AwardsSection,
  TestimonialsSection,
  GallerySection,
  HiringSection,
  InternshipSection,
} from "@/components/sections";
>>>>>>> 4cdbb9b6e8e08c423654676e93a1cf6229009d20
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative">
      <HexagonBackground />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-6 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <Image
            src={logo}
            alt="My Tec Sys"
            className="h-14 md:h-20 w-auto mx-auto mb-8"
            priority
          />
          <h1 className="font-tech text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-tech mb-6 tracking-tight">
            AI-Powered Innovation
            <br />
            <span className="text-foreground">For Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transform your ideas into reality with intelligent technology solutions.
            We combine AI research, cloud infrastructure, and engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD

=======
            <Button asChild size="lg" className="group">
              <Link href="/#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
>>>>>>> 4cdbb9b6e8e08c423654676e93a1cf6229009d20
            <Button asChild variant="outline" size="lg">
              <Link href="/maintenance">View Status</Link>
            </Button>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <CapabilitiesSection />
      <ProcessSection />
      <AboutSection />
      <WhatWeDoSection />
      <CaseStudiesSection />
      <WhyUsSection />
      <FounderSection />
      <TeamSection />
      <NewsSection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />







      <CTASection />
      <Footer />
=======
      <ParallaxSection />

      {/* Services / AI Capabilities Section */}
      <section
        id="services"
        className="relative z-10 py-24 px-4 md:px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
              AI Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent technology solutions tailored to bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI & ML",
                desc: "Custom AI models and machine learning solutions for your business.",
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                desc: "Scalable, secure cloud infrastructure on AWS, Azure, and GCP.",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                desc: "Cutting-edge tech stacks and AI-driven product development.",
              },
              {
                icon: Bot,
                title: "Automation",
                desc: "Intelligent automation and workflow optimization.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <item.icon className="h-10 w-10 text-tech mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RnDSection />
      <QualitySection />
      <CloudSection />
      <CaseStudiesSection />
      <AwardsSection />
      <TestimonialsSection />
      <GallerySection />
      <HiringSection />
      <InternshipSection />

      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-24 px-4 md:px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-muted-foreground mb-10">
            Ready to bring your vision to life? Get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:bd@mytecsys.in"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Mail className="h-6 w-6 text-tech" />
              <span>bd@mytecsys.in</span>
            </a>
            <a
              href="tel:+919405741343"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Phone className="h-6 w-6 text-tech" />
              <span>+91 9405741343</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/80 italic">
            &quot;AI-Powered Innovation For Your Business&quot;
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#hiring"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
            <a
              href="mailto:bd@mytecsys.in"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
>>>>>>> 4cdbb9b6e8e08c423654676e93a1cf6229009d20
    </div>
  );
}
