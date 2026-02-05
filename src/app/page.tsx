import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Mail,
  Phone,
  Wrench,
} from "lucide-react";
import logo from "@/assets/logo.png";
import HexagonBackground from "@/components/HexagonBackground";
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
            We Bring Your Imagination
            <br />
            <span className="text-foreground">Into the Real World</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transform ideas into reality with cutting-edge technology solutions.
            We build the digital future you envision.
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

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 py-24 px-4 md:px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack technology solutions tailored to bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Development",
                desc: "Custom software and web applications built for scale.",
              },
              {
                icon: Layers,
                title: "Architecture",
                desc: "Robust system design and cloud infrastructure.",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                desc: "Modern tech stacks and best practices.",
              },
              {
                icon: Wrench,
                title: "Support",
                desc: "Ongoing maintenance and optimization.",
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

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My Tec Sys is a technology partner dedicated to turning your ideas into
            reality. We combine technical expertise with creative problem-solving
            to deliver solutions that matter. Our team is currently enhancing our
            platform to serve you better—{" "}
            <Link
              href="/maintenance"
              className="text-tech hover:text-tech-dark underline underline-offset-4"
            >
              check our maintenance status
            </Link>
            .
          </p>
        </div>
      </section>

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
              href="mailto:info@mytecsys.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Mail className="h-6 w-6 text-tech" />
              <span>info@mytecsys.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Phone className="h-6 w-6 text-tech" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/80 italic">
            &quot;We bring your imagination into the Real World&quot;
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/maintenance"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Maintenance
            </Link>
            <a
              href="mailto:info@mytecsys.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
