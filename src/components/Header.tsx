"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Globe, Smartphone, Brain, ShoppingCart, BarChart3, Cpu, Code2, Layers, Bot, Eye, Zap, Database, Shield, Activity, Settings, Cloud, Package, Boxes, Truck, ClipboardList, Workflow, FolderKanban, Key, Users, FileSpreadsheet, FileText, Fingerprint, Clock, Calendar, CalendarRange, Ticket } from "lucide-react";
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
        { icon: Code2, label: "Frontend Development", desc: "React, Next.js, Vue.js", href: "/services#web-development" },
        { icon: Database, label: "Backend Development", desc: "Node.js, Python, Go", href: "/services#web-development" },
        { icon: Layers, label: "Full Stack Solutions", desc: "End-to-end development", href: "/services#web-development" },
        { icon: Globe, label: "Progressive Web Apps", desc: "Fast, offline-ready PWAs", href: "/services#web-development" },
        { icon: ShoppingCart, label: "E-commerce Platforms", desc: "Shopify, WooCommerce", href: "/services#web-development" },
        { icon: Settings, label: "CMS Development", desc: "WordPress, Strapi, Contentful", href: "/services#web-development" },
      ],
    },
    "Mobile Apps": {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile experiences.",
      icon: Smartphone,
      items: [
        { icon: Smartphone, label: "iOS Development", desc: "Swift, SwiftUI", href: "/services#mobile-apps" },
        { icon: Cpu, label: "Android Development", desc: "Kotlin, Jetpack Compose", href: "/services#mobile-apps" },
        { icon: Zap, label: "React Native", desc: "Cross-platform apps", href: "/services#mobile-apps" },
        { icon: Layers, label: "Flutter", desc: "Beautiful native UIs", href: "/services#mobile-apps" },
      ],
    },
    "AI Solutions": {
      title: "AI Solutions",
      description: "Intelligent automation powered by cutting-edge AI.",
      icon: Brain,
      items: [
        { icon: Brain, label: "Machine Learning", desc: "Custom ML models & pipelines", href: "/services#ai-solutions" },
        { icon: Bot, label: "NLP & Chatbots", desc: "Text, speech & conversational AI", href: "/services#ai-solutions" },
        { icon: Eye, label: "Computer Vision", desc: "Image & video recognition", href: "/services#ai-solutions" },
        { icon: BarChart3, label: "Predictive Analytics", desc: "Data-driven forecasting", href: "/services#ai-solutions" },
        { icon: Zap, label: "Process Automation", desc: "Smart RPA & workflow AI", href: "/services#ai-solutions" },
        { icon: Code2, label: "Custom AI Models", desc: "Tailored machine learning", href: "/services#ai-solutions" },
        { icon: Database, label: "Data Science", desc: "Big data processing", href: "/services#ai-solutions" },
        { icon: Shield, label: "AI Governance", desc: "Ethics & security", href: "/services#ai-solutions" },
        { icon: Cloud, label: "Edge AI", desc: "On-device intelligence", href: "/services#ai-solutions" },
      ],
    },
  },
  Products: {
    "ERP": {
      title: "ERP",
      description: "Manage products, supply chain, and make accurate records of imports and exports.",
      icon: Package,
      items: [
        { icon: Boxes, label: "Inventory Tracking", desc: "Real-time record of inverts & outverts", href: "http://erp.mixoop.com/" },
        { icon: Truck, label: "Supply Chain", desc: "Seamless logistics & vendor tracking", href: "http://erp.mixoop.com/" },
        { icon: ClipboardList, label: "Product Recording", desc: "Precise digital stock records", href: "http://erp.mixoop.com/" },
        { icon: BarChart3, label: "Stock Analytics", desc: "Optimize inventory control & demand", href: "http://erp.mixoop.com/" },
      ],
    },
    "ProcessOS": {
      title: "ProcessOS",
      description: "Comprehensive workflow, access, project, and employee management platform.",
      icon: Workflow,
      items: [
        { icon: FolderKanban, label: "Project Management", desc: "Track tasks, timelines & milestones", href: "https://processos.mixoop.com/" },
        { icon: Key, label: "Access Control", desc: "Role-based permissions & security", href: "https://processos.mixoop.com/" },
        { icon: Users, label: "Employee Directory", desc: "Assign and track staff efficiently", href: "https://processos.mixoop.com/" },
        { icon: Zap, label: "Workflow Builder", desc: "Automate processes & approvals", href: "https://processos.mixoop.com/" },
      ],
    },
    "FormFlow": {
      title: "FormFlow",
      description: "Manage, collect, and process form data at a single centralized location.",
      icon: FileSpreadsheet,
      items: [
        { icon: Database, label: "Unified Inbox", desc: "Consolidate all form submissions", href: "https://formflow.mixoop.com/" },
        { icon: FileText, label: "Form Builder", desc: "Create dynamic drag-and-drop forms", href: "https://formflow.mixoop.com/" },
        { icon: Cloud, label: "Cloud Sync", desc: "Connect data to external platforms", href: "https://formflow.mixoop.com/" },
        { icon: Activity, label: "Real-time Analytics", desc: "Track conversions & response rates", href: "https://formflow.mixoop.com/" },
      ],
    },
    "HRMS": {
      title: "HRMS",
      description: "Keep digital records of employee attendance, punch-ins/outs, and leaves.",
      icon: Fingerprint,
      items: [
        { icon: Clock, label: "Attendance Tracking", desc: "Digital punch-in & punch-out logs", href: "https://hrms.mixoop.com/" },
        { icon: Calendar, label: "Leave Management", desc: "Track applications & approvals", href: "https://hrms.mixoop.com/" },
        { icon: Shield, label: "Digital Records", desc: "Secure profiles & document vault", href: "https://hrms.mixoop.com/" },
        { icon: Users, label: "Employee Hub", desc: "Centralized employee database", href: "https://hrms.mixoop.com/" },
      ],
    },
    "Mixeventz": {
      title: "Mixeventz",
      description: "Manage multiple event flows, coordination, and attendee engagements seamlessly.",
      icon: CalendarRange,
      items: [
        { icon: Layers, label: "Multi-Event Flow", desc: "Manage multiple concurrent flows", href: "https://mixeventz.mixoop.com/" },
        { icon: Activity, label: "Event Timelines", desc: "Coordinate schedules & programs", href: "https://mixeventz.mixoop.com/" },
        { icon: Ticket, label: "Attendee Management", desc: "RSVPs, ticketing & entry tracking", href: "https://mixeventz.mixoop.com/" },
        { icon: BarChart3, label: "Event Insights", desc: "Feedback & post-event analytics", href: "https://mixeventz.mixoop.com/" },
      ],
    },
  },
};

// ─── Nav Structure ─────────────────────────────────────────────────────────────
const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  {
    href: "/services", label: "Services", megaKey: "Services",
    items: ["Web Development", "Mobile Apps", "AI Solutions"]
  },
  { href: "#industries", label: "Industries" },
  {
    href: "#products", label: "Products", megaKey: "Products",
    items: ["ERP", "ProcessOS", "FormFlow", "HRMS", "Mixeventz"]
  },
  { href: "#news", label: "Research & Insights" },
  { href: "/careers", label: "Careers" },
];

// ─── Mega Menu Panel ──────────────────────────────────────────────────────────
function MegaMenuPanel({ menuKey, activeItem }: { menuKey: string; activeItem: string }) {
  const pathname = usePathname();
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
            const resolvedHref = item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href;
            return (
              <Link
                key={item.label}
                href={resolvedHref}
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
function NavDropdown({ item, isActive }: { item: typeof navItems[0]; isActive: boolean }) {
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
          "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-[12px] font-normal transition-colors",
          "text-slate-700 hover:text-black",
          (isOpen || isActive) && "text-black font-black"
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

// ─── Mobile Nav Dropdown ──────────────────────────────────────────────────────
function MobileNavItem({ item, active, pathname, setMobileOpen }: { item: typeof navItems[0], active: boolean, pathname: string, setMobileOpen: (v: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.items;
  const resolvedHref = item.href ? (item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href) : "#";

  return (
    <div className="flex flex-col">
      <div className={cn(
        "flex justify-between items-center rounded-lg transition-colors",
        active
          ? "bg-muted/60"
          : "hover:bg-muted/50"
      )}>
        {hasChildren ? (
          <button 
            className={cn(
              "flex-1 text-left flex justify-between items-center py-3 px-4 text-sm font-medium",
              active ? "text-black font-black" : "text-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {item.label}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
          </button>
        ) : (
          <Link
            href={resolvedHref}
            className={cn(
              "flex-1 py-3 px-4 text-sm font-medium",
              active ? "text-black font-black" : "text-foreground"
            )}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        )}
      </div>
      
      {hasChildren && (
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1200px] opacity-100 mt-1" : "max-h-0 opacity-0"
        )}>
          <div className="pl-2 pr-1 flex flex-col gap-2 pb-2">
            {item.items?.map((sub) => (
              <div key={sub} className="bg-slate-50 rounded-xl p-2.5 shadow-sm border border-slate-100">
                <p className="text-[13px] font-bold text-slate-800 px-2 mb-2">{sub}</p>
                <div className="flex flex-col gap-0.5">
                  {item.megaKey && megaMenuData[item.megaKey]?.[sub]?.items.map((mi) => {
                    const resolvedSubHref = mi.href.startsWith("#") && pathname !== "/" ? `/${mi.href}` : mi.href;
                    return (
                      <Link
                        key={mi.label}
                        href={resolvedSubHref}
                        className="flex items-center gap-2.5 px-2 py-2 text-[12px] text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-sm shrink-0">
                          <mi.icon className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <span className="font-medium">{mi.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScrollActive = () => {
      const sectionIds = ["hero", "services", "products", "industries", "about", "news"];
      const scrollPosition = window.scrollY + 200; // 200px offset for trigger

      // Check if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("news");
        return;
      }

      // Find which section is current
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive(); // run once initially

    return () => window.removeEventListener("scroll", handleScrollActive);
  }, [pathname]);

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.href === "/careers") {
      return pathname.startsWith("/careers");
    }
    if (pathname === "/") {
      const sectionId = item.href?.startsWith("#") ? item.href.slice(1) : "";
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      (isScrolled || pathname !== "/")
        ? "border-b border-border/40 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
        : "border-b border-transparent bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center px-2 md:px-6">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 pl-4 md:pl-8">
            <Image src={logo} alt="My Tec Sys" className="h-10 w-auto md:h-12" priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center justify-center gap-1">
          {navItems.map((item) => {
            const resolvedHref = item.href ? (item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href) : undefined;
            const active = isItemActive(item);
            return item.items ? (
              <NavDropdown key={item.label} item={item} isActive={active} />
            ) : (
              <NavLink
                key={item.label}
                href={resolvedHref!}
                className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-[12px] font-normal text-slate-700 hover:text-black transition-colors relative"
                activeClassName="text-black font-black"
                isActive={active}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 pr-4 md:pr-8">
          <Link href={pathname !== "/" ? "/#contact" : "#contact"} className="hidden md:block">
            <Button
              suppressHydrationWarning
              className="bg-[#1976D2] hover:bg-[#155DA8] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none"
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
        mobileOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container mx-auto flex flex-col gap-1 py-6 px-2 md:px-4">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <MobileNavItem 
                key={item.label} 
                item={item} 
                active={active} 
                pathname={pathname} 
                setMobileOpen={setMobileOpen} 
              />
            );
          })}
          <div className="pt-4 px-2 md:px-4">
            <Link href={pathname !== "/" ? "/#contact" : "#contact"} onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#1976D2] hover:bg-[#155DA8] text-white rounded-lg py-3 text-sm font-semibold shadow-md border-none transition-all active:scale-95">
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
