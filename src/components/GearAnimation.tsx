import { Settings } from "lucide-react";

const GearAnimation = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Outer gear - spins clockwise */}
      <Settings 
        className="absolute w-32 h-32 text-tech animate-gear-spin opacity-30" 
        strokeWidth={1}
      />
      
      {/* Middle gear - spins counter-clockwise */}
      <Settings 
        className="absolute w-20 h-20 text-tech-dark animate-gear-spin-reverse opacity-50" 
        strokeWidth={1.5}
      />
      
      {/* Inner gear - spins clockwise faster */}
      <Settings 
        className="absolute w-10 h-10 text-tech animate-gear-spin opacity-70" 
        style={{ animationDuration: '4s' }}
        strokeWidth={2}
      />

      {/* Glow effect behind gears */}
      <div className="absolute w-24 h-24 rounded-full bg-tech/10 blur-xl animate-pulse-slow" />
    </div>
  );
};

export default GearAnimation;
