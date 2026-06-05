import ExportedImage from "next-image-export-optimizer";
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
import dynamic from "next/dynamic";
import { HomeImageSection, HeroSection } from "@/components/sections";

const BrandsSection = dynamic(() => import('@/components/sections/BrandsSection'));
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'));
const WhatWeDoSection = dynamic(() => import('@/components/sections/WhatWeDoSection'));
const CaseStudiesSection = dynamic(() => import('@/components/sections/CaseStudiesSection'));
const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const FounderSection = dynamic(() => import('@/components/sections/FounderSection'));
const NewsSection = dynamic(() => import('@/components/sections/NewsSection'));
const NewsMarqueeSection = dynamic(() => import('@/components/sections/NewsMarqueeSection'));
const AchievementsSection = dynamic(() => import('@/components/sections/AchievementsSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer'));
import { Button } from "@/components/ui/button";
import bgImg from "../../public/background.png";

export default function LandingPage() {
  return (
    <div className="relative bg-white">

      <div className="relative overflow-hidden bg-white z-20">
        {/* Background Image with custom opacity */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
          }}
        >
          <ExportedImage 
            src={bgImg} 
            alt="Background" 
            fill 
            priority 
            className="object-cover object-center" 
            sizes="100vw"
          />
        </div>
        {/* Radial Gradient Overlay around cards */}
        <div
          className="absolute inset-0 z-10 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(25, 118, 210, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)"
          }}
        />
        <div className="relative z-50">
          <HeroSection />
          <HomeImageSection />
        </div>
      </div>

      {/* Static Background Images for all sections except Hero */}
      <div
        className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-[0.9] select-none"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/back.png')`,
          filter: 'brightness(0.5) contrast(1.3) saturate(1.2)'
        }}
      />
      <div
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[280px] h-[350px] md:h-[420px] z-0 bg-no-repeat bg-right bg-contain pointer-events-none opacity-[0.9] select-none"
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
      <NewsMarqueeSection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
