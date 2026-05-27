import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceDomainSection } from "@/components/sections/services/ServiceDomainSection";
import { TechStackMarquee } from "@/components/sections/services/TechStackMarquee";
import { ProcessTimeline } from "@/components/sections/services/ProcessTimeline";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — Mytecsys Web, Mobile & AI Solutions",
  description: "Explore our fully featured engineering, mobile application development, and custom machine learning capabilities.",
};

export default function ServicesPage() {
  return (
    <div className="relative bg-white min-h-screen">
      <ServicesHero />
      <ServiceDomainSection />
      <TechStackMarquee />
      <ProcessTimeline />
      <Footer />
    </div>
  );
}
