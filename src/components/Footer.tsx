"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-16 px-4 md:px-6 bg-slate-50/30 border-t border-slate-200/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight font-tech">
                my tec sys
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. 
              Integer dictum porta felis vel rhoncus. Sed quis quam mauris. Lorem ipsum 
              dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-slate-900">About</h4>
            <ul className="space-y-4">
              {["Case Studies", "Research & Insights", "Gallery"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-500 hover:text-tech transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-slate-900">Industries</h4>
            <ul className="space-y-4">
              {["Services", "Careers"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-500 hover:text-tech transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:+919405741343" className="flex items-center gap-3 text-slate-500 hover:text-tech transition-colors text-sm">
                  <Phone className="w-4 h-4 text-tech" />
                  (+91) 9405741343
                </a>
                <a href="mailto:info@mytecsys.in" className="flex items-center gap-3 text-slate-500 hover:text-tech transition-colors text-sm">
                  <Mail className="w-4 h-4 text-tech" />
                  info@mytecsys.in
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Address</h4>
              <div className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-tech mt-1 flex-shrink-0" />
                <p>
                  Ravi Nagar,<br />
                  Nagpur, Maharashtra 344056
                </p>
              </div>
            </div>

            {/* Mini Map Placeholder */}
            <div className="relative h-32 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" 
                alt="Location Map"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
