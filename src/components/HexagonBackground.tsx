const HexagonBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* SVG Hexagon Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="hexagons" 
            width="50" 
            height="43.4" 
            patternUnits="userSpaceOnUse" 
            patternTransform="scale(2)"
          >
            <polygon 
              points="24.8,22 37.3,29.2 37.3,43.4 24.8,50.6 12.3,43.4 12.3,29.2" 
              fill="none" 
              stroke="hsl(207 50% 80%)" 
              strokeWidth="0.5"
            />
            <polygon 
              points="24.8,-21.6 37.3,-14.4 37.3,0 24.8,7.2 12.3,0 12.3,-14.4" 
              fill="none" 
              stroke="hsl(207 50% 80%)" 
              strokeWidth="0.5"
            />
            <polygon 
              points="0,0 12.3,7.2 12.3,21.6 0,28.8 -12.3,21.6 -12.3,7.2" 
              fill="none" 
              stroke="hsl(207 50% 80%)" 
              strokeWidth="0.5"
            />
            <polygon 
              points="50,0 62.3,7.2 62.3,21.6 50,28.8 37.7,21.6 37.7,7.2" 
              fill="none" 
              stroke="hsl(207 50% 80%)" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      {/* Floating circles/nodes */}
      <div className="absolute top-[10%] right-[15%] w-3 h-3 rounded-full bg-tech-light animate-pulse-slow" />
      <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-tech animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[30%] right-[10%] w-4 h-4 rounded-full bg-tech-light/60 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-tech-light animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[40%] left-[10%] w-3 h-3 rounded-full bg-tech animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-tech-light animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-[30%] left-[25%] w-2 h-2 rounded-full bg-tech animate-pulse-slow" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-[15%] left-[15%] w-4 h-4 rounded-full bg-tech-light/50 animate-pulse-slow" style={{ animationDelay: '1.8s' }} />

      {/* Connection lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line x1="15%" y1="10%" x2="25%" y2="20%" stroke="hsl(207 80% 52%)" strokeWidth="1" />
        <line x1="85%" y1="15%" x2="75%" y2="25%" stroke="hsl(207 80% 52%)" strokeWidth="1" />
        <line x1="10%" y1="40%" x2="20%" y2="35%" stroke="hsl(207 80% 52%)" strokeWidth="1" />
        <line x1="80%" y1="70%" x2="90%" y2="65%" stroke="hsl(207 80% 52%)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default HexagonBackground;
