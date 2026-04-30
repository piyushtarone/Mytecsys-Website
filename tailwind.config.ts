import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tech: {
          DEFAULT: "hsl(var(--tech-blue))",
          dark: "hsl(var(--tech-blue-dark))",
          light: "hsl(var(--tech-blue-light))",
          glow: "hsl(var(--tech-blue-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        tech: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gear-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gear-spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pan-horizontal": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "zoom-pan": {
          "0%": { 
            transform: "translateX(-80px) scale(0.85)",
            filter: "blur(6px)",
            opacity: "0.6"
          },
          "50%": { 
            transform: "translateX(0px) scale(1)",
            filter: "blur(0px)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(80px) scale(0.85)",
            filter: "blur(6px)",
            opacity: "0.6"
          },
        },
        "zoom-rotate": {
          "0%, 100%": { transform: "scale(1.1) rotate(-1.5deg)" },
          "50%": { transform: "scale(1.0) rotate(1.5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gear-spin": "gear-spin 8s linear infinite",
        "gear-spin-reverse": "gear-spin-reverse 6s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        "gentle-pulse": "gentle-pulse 2s ease-in-out infinite",
        "pan-horizontal": "pan-horizontal 15s linear infinite",
        "zoom-pan": "zoom-pan 8s ease-in-out infinite alternate",
        "zoom-rotate": "zoom-rotate 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
