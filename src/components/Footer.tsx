"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import LogoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-12 pb-0">
      {/* Hexagon Pattern Background - Fixed for seamless transition */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")',
          backgroundAttachment: 'fixed'
        }} />



      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:w-[28%] space-y-6">
            <div className="flex items-center gap-3">
              <Image src={LogoImg} alt="Mytecsys" width={160} height={40} className="object-contain" />
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 text-[12px] leading-relaxed max-w-[280px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Integer dictum porta felis vel rhoncus. Sed quis quam mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla. Integer dictum porta felis vel rhoncus. Sed quis quam mauris.
              </p>
              <p className="text-slate-600 text-[12px] leading-relaxed max-w-[280px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mollis nulla.
              </p>
            </div>
          </div>

          {/* Column 2 & 3: Links and Contact */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4">
            {/* About */}
            <div className="space-y-6">
              <h4 className="text-slate-500 font-medium text-[13px]">About</h4>
              <ul className="space-y-4">
                {["Case Studies", "Research & Insights", "Gallery"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-900 font-bold text-[13px] hover:text-blue-600 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-6">
              <h4 className="text-slate-500 font-medium text-[13px]">Industries</h4>
              <ul className="space-y-4">
                {["Services", "Careers"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-900 font-bold text-[13px] hover:text-blue-600 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
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

          {/* Column 4: Address & Map - Stacked as requested */}
          <div className="lg:w-[32%] space-y-10">
            {/* Address above Map */}
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

            {/* Map Section - Moved slightly down */}
            <a 
              href="https://www.google.com/maps/search/Jai+umiya+shivam+apartment,+102,+6579%2FA%2F47,+Chandranagar,+Rameshwari,+Nagpur,+Maharashtra+440027/@21.1055436,79.0956919,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative"
            >
              <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-8 border border-blue-100 shadow-sm relative overflow-hidden h-[240px] flex flex-col items-center justify-center group-hover:border-blue-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")' }} />
                
                {/* Location Info Box */}
                <div className="relative z-10 flex flex-col items-center mb-[-8px]">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-xl shadow-blue-900/5 border border-slate-50 min-w-[180px] text-center relative group-hover:scale-105 transition-transform duration-500">
                    <div className="flex justify-center mb-2">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-blue-600 rotate-45" />
                      </div>
                    </div>
                    <p className="text-slate-900 font-black text-sm">Mytecsys</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">Nagpur, Maharashtra (India)</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-50" />
                  </div>
                </div>

                {/* Pin & Pulse */}
                <div className="relative z-10 mt-4">
                  <div className="relative z-20 transform -translate-y-2">
                    <svg viewBox="0 0 384 512" className="w-10 h-10 drop-shadow-lg">
                      <path fill="#FF3B30" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                      <circle cx="192" cy="192" r="48" fill="white" />
                    </svg>
                  </div>
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/10 rounded-full blur-[1px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 border border-red-500/20 rounded-full animate-[ping_3s_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-red-500/10 rounded-full animate-[ping_4s_infinite]" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Unified Bottom Row: Social + Legal + Stores */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 border-t border-slate-100">
          
          {/* Social Icons Left */}
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

          {/* Legal Links Center */}
          <div className="flex items-center gap-8">
            {["Legal", "Privacy Policy", "Terms of Services"].map((item) => (
              <Link key={item} href="#" className="text-slate-500 text-[12px] font-bold hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* App Store Buttons Right */}
          <div className="flex items-center gap-3 scale-90 lg:scale-100 origin-right">
            <div className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.6 63.9-43.4 76.5-11.1 190.9 31.5 252.3 20.8 29.8 45.6 63 77.8 61.9 30.6-1.1 42.4-19.5 79.5-19.5s47.5 19.5 79.5 19.5c33.2-1.1 55-30.1 75.8-60.1 23.9-34.5 33.7-67.9 33.9-69.6-.8-.3-65.5-25.1-66.6-100.4zM289.6 113.6c15.1-18.1 25.1-43.3 22.3-68.5-21.6 1-47.6 14.4-63.1 32.4-13.9 15.9-26 41.5-22.7 66.1 23.9 1.8 48.4-12 63.5-30z"/>
              </svg>
              <div className="leading-none">
                <p className="text-[8px] font-bold opacity-70">Download on the</p>
                <p className="text-[12px] font-black">App Store</p>
              </div>
            </div>

            <div className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-white rounded-full" />
              </div>
              <div className="leading-none">
                <p className="text-[8px] font-bold opacity-70">Available in the</p>
                <p className="text-[12px] font-black">Chrome Store</p>
              </div>
            </div>

            <div className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md">
              <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256.6L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="leading-none">
                <p className="text-[8px] font-bold opacity-70">GET IT ON</p>
                <p className="text-[12px] font-black">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Copyright Bar */}
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
