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
  HeroSection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative bg-white">

      <div className="relative overflow-hidden bg-white z-20">
        {/* Background Image with custom opacity */}
        <div 
          className="absolute inset-0 z-0 w-full h-full opacity-[0.35]"
          style={{
            backgroundImage: "url('/hero background .jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center -100px',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Gradient Overlay on top of the image */}
        <div 
          className="absolute inset-0 z-10 w-full h-full pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0) 72.5%, rgba(255, 255, 255, 1) 88.5%, rgba(255, 255, 255, 1) 100%)"
          }}
        />
        <div className="relative z-20">
          <HeroSection />
          <HomeImageSection />
        </div>
      </div>

      {/* Static Background Images for all sections except Hero */}
      <div 
        className="fixed left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[320px] h-[400px] md:h-[470px] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-[0.85] select-none"
        style={{ backgroundImage: "url('/back.png')" }}
      />
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-right bg-contain pointer-events-none opacity-[0.85] select-none"
        style={{ backgroundImage: "url('/back right.png')" }}
      />

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
