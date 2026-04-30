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
  HeroSection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative">
      <HexagonBackground />

      <HeroSection />

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
