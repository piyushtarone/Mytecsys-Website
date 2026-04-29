import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Cloud,
  Sparkles,
  Mail,
  Phone,
  Bot,
} from "lucide-react";
import logo from "@/assets/logo.png";
import HexagonBackground from "@/components/HexagonBackground";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import {
  BrandsSection,
  ProcessSection,
  WhatWeDoSection,
  CaseStudiesSection,
  WhyUsSection,
  AboutSection,
  FounderSection,
  NewsSection,
  AchievementsSection,
  TestimonialsSection,
  ContactSection,
  HomeImageSection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative">
      <HexagonBackground />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center px-4 md:px-6 pt-24 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="font-tech text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-tech mb-6 tracking-tight">
            AI-Powered Innovation
            <br />
            <span className="text-foreground">For Your Business</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Transform your ideas into reality with intelligent technology solutions.
            We combine AI research, cloud infrastructure, and engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/maintenance">View Status</Link>
            </Button>
          </div>
        </div>
      </section>

      <HomeImageSection />
      <BrandsSection />
      <ProcessSection />
      <WhatWeDoSection />

      <CaseStudiesSection />
      <WhyUsSection />
      <AboutSection />
      <FounderSection />
      <NewsSection />
      <TestimonialsSection />
      <AchievementsSection />

      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
