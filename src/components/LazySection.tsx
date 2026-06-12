"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string;
}

export function LazySection({ children, minHeight = "200px" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Load slightly before it comes into view to prevent sudden pop-in
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? "auto" : minHeight, width: "100%" }}>
      {isVisible && children}
    </div>
  );
}
