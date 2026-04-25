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
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#industries", label: "Industries" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="My Tec Sys"
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <div className="flex items-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-900 hover:text-black hover:font-bold focus:text-black focus:font-bold active:text-black data-[state=open]:text-black transition-all focus:outline-none">
                            {item.label}
                            <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[220px] p-2 bg-white border border-border shadow-xl rounded-xl">
                          {item.children.map((child) => (
                            <DropdownMenuItem key={child.label} asChild>
                              <Link
                                href={child.href}
                                className="block select-none rounded-lg p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-black focus:bg-muted focus:text-black"
                              >
                                {child.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    <NavigationMenuLink asChild>
                      <NavLink
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-sm font-medium text-slate-900 hover:text-black hover:font-bold focus:text-black focus:font-bold data-[active]:text-black data-[state=open]:text-black transition-all relative"
                        )}
                        activeClassName="text-black font-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-black after:rounded-full"
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



        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur-xl overflow-y-auto transition-all duration-300",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 py-6 px-4">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href}
                className="py-3 px-4 rounded-lg text-sm font-medium text-foreground hover:text-black focus:text-black active:text-black hover:bg-muted/50 transition-colors flex justify-between items-center"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="pl-6 flex flex-col gap-1 border-l ml-6 mt-1 border-border/40">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="py-2 px-4 rounded-lg text-xs font-medium text-foreground hover:text-black focus:text-black active:text-black hover:bg-muted/50 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

        </nav>
      </div>
    </header>
  );
}
