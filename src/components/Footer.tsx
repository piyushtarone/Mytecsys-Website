"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import LogoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-12 pb-0">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")',
          backgroundAttachment: 'fixed'
        }} />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 mb-12">
          
          <div className="lg:w-[28%] space-y-6">
            <div className="flex items-center gap-3">
              <Image src={LogoImg} alt="Mytecsys" width={160} height={40} className="object-contain" />
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 text-[12px] leading-relaxed max-w-[280px] font-semibold">
                Mytecsys is a premium technology development partner. We engineer custom artificial intelligence models, secure automated workflows, and robust cloud architectures to drive digital transformation and scale enterprises globally.
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4">
            <div className="space-y-6">
              <h4 className="text-slate-500 font-medium text-[13px]">About</h4>
              <ul className="space-y-4">
                {[
                  { label: "Case Studies", href: "/#case-studies" },
                  { label: "Research & Insights", href: "/#case-studies" },
                  { label: "Gallery", href: "/#gallery-container" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-900 font-bold text-[13px] hover:text-blue-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-slate-500 font-medium text-[13px]">Industries</h4>
              <ul className="space-y-4">
                {[
                  { label: "Services", href: "/#services" },
                  { label: "Careers", href: "/careers" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-900 font-bold text-[13px] hover:text-blue-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-[13px] uppercase tracking-wider">Contact Us</h4>
              <div className="space-y-4">
                <a href="tel:+919405741343" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-[13px] font-bold whitespace-nowrap">
                  <Phone className="w-5 h-5 text-slate-400" />
                  (+91) 9405741343
                </a>
                <a href="mailto:info@mytecsys.in" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-[13px] font-bold whitespace-nowrap">
                  <Mail className="w-5 h-5 text-slate-400" />
                  info@mytecsys.in
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-[32%] space-y-10">
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-[13px] uppercase tracking-wider">Address</h4>
              <div className="flex items-start gap-4 text-slate-600 text-[13px] leading-relaxed font-bold">
                <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <p className="whitespace-nowrap">
                  Jai umiya shivam apartment, 102,<br />
                  6579/A/47, Chandranagar, Rameshwari,<br />
                  Nagpur, Maharashtra 440027
                </p>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/..."
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative"
            >
              <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-8 border border-blue-100 shadow-sm relative overflow-hidden h-[240px] flex flex-col items-center justify-center group-hover:border-blue-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")' }} />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-50 text-center relative">
                    <p className="text-slate-900 font-black text-sm">Mytecsys</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">Nagpur, Maharashtra (India)</p>
                  </div>
                  <div className="mt-4 relative">
                    <svg viewBox="0 0 384 512" className="w-10 h-10 fill-[#FF3B30] drop-shadow-lg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 border-t border-slate-100">
          <div className="flex items-center gap-8">
            <p className="text-slate-400 font-bold text-[12px]">Follow us on -</p>
            <div className="flex items-center gap-6">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                <Link key={idx} href="#" className="text-slate-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {["Legal", "Privacy Policy", "Terms of Services"].map((item) => (
              <Link key={item} href="#" className="text-slate-500 text-[12px] font-bold hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 scale-90 lg:scale-100 origin-right">
            {/* App Store */}
            <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md">
              <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.6 63.9-43.4 76.5-11.1 190.9 31.5 252.3 20.8 29.8 45.6 63 77.8 61.9 30.6-1.1 42.4-19.5 79.5-19.5s47.5 19.5 79.5 19.5c33.2-1.1 55-30.1 75.8-60.1 23.9-34.5 33.7-67.9 33.9-69.6-.8-.3-65.5-25.1-66.6-100.4zM289.6 113.6c15.1-18.1 25.1-43.3 22.3-68.5-21.6 1-47.6 14.4-63.1 32.4-13.9 15.9-26 41.5-22.7 66.1 23.9 1.8 48.4-12 63.5-30z"/>
              </svg>
              <div className="leading-none">
                <p className="text-[7px] font-bold opacity-70 uppercase">Download on the</p>
                <p className="text-[12px] font-black">App Store</p>
              </div>
            </div>

            {/* Chrome Store */}
            <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md border border-white/5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image 
                  src="/cromstore.png" 
                  alt="Chrome Store" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <div className="leading-[1.1] pr-1">
                <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">Available in the</p>
                <p className="text-[13px] font-medium -mt-0.5 tracking-tight">Chrome Store</p>
              </div>
            </div>

            {/* Google Play */}
            <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md border border-white/5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image 
                  src="/playstore.png" 
                  alt="Google Play" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <div className="leading-[1.1] pr-1">
                <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">GET IT ON</p>
                <p className="text-[14px] font-medium -mt-0.5 tracking-tight">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50/50 py-4 border-t border-blue-100/50">
        <div className="container mx-auto max-w-7xl px-4 flex justify-center items-center">
          <p className="text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase">
            2026 Mytecsys., All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
