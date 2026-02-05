import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import HexagonBackground from "@/components/HexagonBackground";
import GearAnimation from "@/components/GearAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated hexagon background */}
      <HexagonBackground />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <img 
            src={logo} 
            alt="my tec sys - We bring your imagination into the Real World" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Gear Animation */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <GearAnimation />
        </div>

        {/* Maintenance Message */}
        <div className="text-center max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <h1 className="font-tech text-3xl md:text-5xl font-bold text-gradient-tech mb-4 tracking-wider">
            UNDER MAINTENANCE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            We're working hard to improve your experience.
          </p>
          <p className="text-base text-muted-foreground/80">
            Our site is currently undergoing scheduled maintenance. 
            We'll be back shortly with something amazing!
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mt-10 w-64 animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-tech to-tech-glow rounded-full animate-pulse"
              style={{ width: '60%' }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2 font-tech">
            Progress: Working on it...
          </p>
        </div>

        {/* Contact info */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
          <a 
            href="mailto:info@mytecsys.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-tech transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>info@mytecsys.com</span>
          </a>
          <span className="hidden sm:block text-border">|</span>
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 text-muted-foreground hover:text-tech transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Footer tagline */}
        <p className="absolute bottom-8 text-sm text-muted-foreground/60 italic animate-fade-in-up" style={{ animationDelay: '1.1s', opacity: 0 }}>
          "We bring your imagination into the Real World"
        </p>
      </div>
    </div>
  );
};

export default Index;
