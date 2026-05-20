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
            backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero_background.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center -100px',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 85%)'
          }}
        />
        {/* Radial Gradient Overlay around cards */}
        <div 
          className="absolute inset-0 z-10 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(25, 118, 210, 0.15) 2%, rgba(255, 255, 255, 1) 89%)"
          }}
        />
        <div className="relative z-20">
          <HeroSection />
          <HomeImageSection />
        </div>
      </div>

      {/* Static Background Images for all sections except Hero */}
      <div 
        className="fixed left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[320px] h-[400px] md:h-[470px] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-[0.9] select-none"
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
