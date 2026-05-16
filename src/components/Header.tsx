"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Globe, Smartphone, Brain, ShoppingCart, BarChart3, Cpu, Code2, Layers, Bot, Eye, Zap, Database, Shield, Activity, Settings, Cloud } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Mega Menu Data ────────────────────────────────────────────────────────────
const megaMenuData: Record<string, Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  items: { icon: React.ElementType; label: string; desc: string; href: string }[];
}>> = {
  Services: {
    "Web Development": {
      title: "Web Development",
      description: "Modern, scalable web applications built to perform.",
      icon: Globe,
      items: [
        { icon: Code2, label: "Frontend Development", desc: "React, Next.js, Vue.js", href: "#web" },
        { icon: Database, label: "Backend Development", desc: "Node.js, Python, Go", href: "#web" },
        { icon: Layers, label: "Full Stack Solutions", desc: "End-to-end development", href: "#web" },
        { icon: Globe, label: "Progressive Web Apps", desc: "Fast, offline-ready PWAs", href: "#web" },
        { icon: ShoppingCart, label: "E-commerce Platforms", desc: "Shopify, WooCommerce", href: "#web" },
        { icon: Settings, label: "CMS Development", desc: "WordPress, Strapi, Contentful", href: "#web" },
      ],
    },
    "Mobile Apps": {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile experiences.",
      icon: Smartphone,
      items: [
        { icon: Smartphone, label: "iOS Development", desc: "Swift, SwiftUI", href: "#mobile" },
        { icon: Cpu, label: "Android Development", desc: "Kotlin, Jetpack Compose", href: "#mobile" },
        { icon: Zap, label: "React Native", desc: "Cross-platform apps", href: "#mobile" },
        { icon: Layers, label: "Flutter", desc: "Beautiful native UIs", href: "#mobile" },
      ],
    },
    "AI Solutions": {
      title: "AI Solutions",
      description: "Intelligent automation powered by cutting-edge AI.",
      icon: Brain,
      items: [
        { icon: Brain, label: "Machine Learning", desc: "Custom ML models & pipelines", href: "#ai" },
        { icon: Bot, label: "NLP & Chatbots", desc: "Text, speech & conversational AI", href: "#ai" },
        { icon: Eye, label: "Computer Vision", desc: "Image & video recognition", href: "#ai" },
        { icon: BarChart3, label: "Predictive Analytics", desc: "Data-driven forecasting", href: "#ai" },
        { icon: Zap, label: "Process Automation", desc: "Smart RPA & workflow AI", href: "#ai" },
        { icon: Code2, label: "Custom AI Models", desc: "Tailored machine learning", href: "#ai" },
        { icon: Database, label: "Data Science", desc: "Big data processing", href: "#ai" },
        { icon: Shield, label: "AI Governance", desc: "Ethics & security", href: "#ai" },
        { icon: Cloud, label: "Edge AI", desc: "On-device intelligence", href: "#ai" },
      ],
    },
  },
  Products: {
    "Product Alpha": {
      title: "Product Alpha",
      description: "Enterprise-grade management & analytics platform.",
      icon: BarChart3,
      items: [
        { icon: BarChart3, label: "Analytics Dashboard", desc: "Real-time KPI insights", href: "#product1" },
        { icon: Shield, label: "Security Suite", desc: "Enterprise-grade protection", href: "#product1" },
        { icon: Cloud, label: "API Integration", desc: "Connect all your tools", href: "#product1" },
        { icon: Activity, label: "Live Monitoring", desc: "System health & alerts", href: "#product1" },
      ],
    },
    "Product Beta": {
      title: "Product Beta",
      description: "Next-gen IoT management and monitoring platform.",
      icon: Cpu,
      items: [
        { icon: Cpu, label: "Device Management", desc: "Control thousands of devices", href: "#product2" },
        { icon: Activity, label: "Real-time Monitoring", desc: "Live data streams & alerts", href: "#product2" },
        { icon: Settings, label: "Remote Configuration", desc: "Update firmware anywhere", href: "#product2" },
        { icon: Shield, label: "Security & Compliance", desc: "IoT-grade security", href: "#product2" },
      ],
    },
  },
};

// ─── Nav Structure ─────────────────────────────────────────────────────────────
const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services", megaKey: "Services",
    items: ["Web Development", "Mobile Apps", "AI Solutions"] },
  { href: "#industries", label: "Industries" },
  { href: "#products", label: "Products", megaKey: "Products",
    items: ["Product Alpha", "Product Beta"] },
  { href: "#case-studies", label: "Research & Insights" },
  { href: "#careers", label: "Careers" },
];

// ─── Mega Menu Panel ──────────────────────────────────────────────────────────
function MegaMenuPanel({ menuKey, activeItem }: { menuKey: string; activeItem: string }) {
  const data = megaMenuData[menuKey]?.[activeItem];
  if (!data) return null;
  const Icon = data.icon;
  return (
    <div className="flex-1 pl-6 border-l border-slate-100 flex flex-col max-h-[280px]">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-zinc-900" />
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{data.title}</p>
          <p className="text-xs text-slate-500 leading-tight max-w-[200px]">{data.description}</p>
        </div>
      </div>
      
      {/* Scrollable Items Area */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-2 gap-2 pb-4">
          {data.items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-100 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-zinc-200 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                  <ItemIcon className="w-4 h-4 text-slate-600 group-hover:text-zinc-900 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-black transition-colors">{item.label}</p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Nav Dropdown with Mega Menu ──────────────────────────────────────────────
function NavDropdown({ item }: { item: typeof navItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState(item.items?.[0] ?? "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-[13px] font-semibold transition-colors",
          "text-slate-700 hover:text-black",
          isOpen && "text-black"
        )}
      >
        {item.label}
        <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50">
          {/* Arrow */}
          <div className="flex justify-center mb-1">
            <div className="w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45 shadow-sm" />
          </div>
          <div className="bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-slate-200/60 p-4 flex gap-4 w-[600px] h-[320px]">
            {/* Left: sub-item list with Scroll View */}
            <div className="flex flex-col gap-1 min-w-[180px] max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 pb-2 sticky top-0 bg-white/95 backdrop-blur-sm z-10">{item.label}</p>
              {item.items?.map((sub) => (
                <button
                  key={sub}
                  onMouseEnter={() => setActiveSubItem(sub)}
                  onClick={() => setActiveSubItem(sub)}
                  className={cn(
                    "flex items-center justify-between w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all",
                    activeSubItem === sub
                      ? "bg-zinc-900 text-white shadow-md shadow-zinc-200"
                      : "text-slate-700 hover:bg-slate-50 hover:text-black"
                  )}
                >
                  {sub}
                  <ChevronRight className={cn("w-4 h-4 opacity-0 transition-opacity", activeSubItem === sub && "opacity-100")} />
                </button>
              ))}
            </div>

            {/* Right: mega menu panel */}
            {item.megaKey && activeSubItem && (
              <MegaMenuPanel menuKey={item.megaKey} activeItem={activeSubItem} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 pl-4 md:pl-8">
            <Image src={logo} alt="My Tec Sys" className="h-10 w-auto md:h-12" priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center justify-center gap-1">
          {navItems.map((item) =>
            item.items ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.label}
                href={item.href!}
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-[13px] font-semibold text-slate-700 hover:text-black transition-colors relative"
                activeClassName="text-black font-black after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:bg-blue-600 after:rounded-full"
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 pr-4 md:pr-8">
          <Link href="#contact" className="hidden md:block">
            <Button 
              suppressHydrationWarning
              className="bg-[#2589e9] hover:bg-[#1d76cc] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none"
            >
              Contact Us
            </Button>
          </Link>
          <button
            type="button"
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "xl:hidden absolute top-full left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur-xl overflow-y-auto transition-all duration-300",
        mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container mx-auto flex flex-col gap-1 py-6 px-4">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href ?? "#"}
                className="py-3 px-4 rounded-lg text-sm font-medium text-foreground hover:text-black hover:bg-muted/50 transition-colors flex justify-between items-center"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.items && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {item.items.map((sub) => (
                    <div key={sub}>
                      <p className="text-xs font-bold text-slate-700 px-4 py-2">{sub}</p>
                      {item.megaKey && megaMenuData[item.megaKey]?.[sub]?.items.map((mi) => (
                        <Link
                          key={mi.label}
                          href={mi.href}
                          className="flex items-center gap-2 pl-8 pr-4 py-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <mi.icon className="w-3 h-3" />
                          {mi.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#2589e9] hover:bg-[#1d76cc] text-white rounded-lg py-3 text-sm font-semibold shadow-md border-none transition-all active:scale-95">
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
