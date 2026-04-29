"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { 
    href: "#services", 
    label: "Services",
    items: [
      { href: "#web", label: "Web Development" },
      { href: "#mobile", label: "Mobile Apps" },
      { href: "#ai", label: "AI Solutions" },
    ]
  },
  { href: "#industries", label: "Industries" },
  { 
    href: "#products", 
    label: "Products",
    items: [
      { href: "#product1", label: "Product Alpha" },
      { href: "#product2", label: "Product Beta" },
    ]
  },
  { href: "#research", label: "Research & Insights" },
  { href: "#careers", label: "Careers" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 pl-4 md:pl-8">
            <Image
              src={logo}
              alt="My Tec Sys"
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-[13px] font-semibold text-slate-700 hover:text-black transition-all"
                      )}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-3">
                          {item.items.map((subItem) => (
                            <li key={subItem.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                                >
                                  <div className="text-xs font-semibold leading-none">{subItem.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <NavLink
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-[13px] font-semibold text-slate-700 hover:text-black transition-all relative"
                        )}
                        activeClassName="text-black font-black after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:bg-blue-600 after:rounded-full"
                      >
                        {item.label}
                      </NavLink>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 pr-4 md:pr-8">
          <Link href="#contact" className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 text-[13px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
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
      <div
        className={cn(
          "xl:hidden absolute top-full left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur-xl overflow-y-auto transition-all duration-300",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 py-6 px-4">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href}
                className="py-3 px-4 rounded-lg text-sm font-medium text-foreground hover:text-black hover:bg-muted/50 transition-colors flex justify-between items-center"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.items && (
                <div className="pl-8 flex flex-col gap-2 pb-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="text-xs text-muted-foreground hover:text-black py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-sm font-bold shadow-lg shadow-blue-500/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
