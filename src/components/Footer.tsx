"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import LogoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-[60px] pb-0">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")',
          backgroundAttachment: 'fixed'
        }} />

      <div className="container mx-auto max-w-7xl px-2 md:px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 mb-8 lg:mb-12">
          
          {/* Logo & Description */}
          <div className="w-full lg:w-[25%] space-y-6 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <Image src={LogoImg} alt="Mytecsys" width={160} height={40} className="object-contain" />
            </div>
            <div className="hidden lg:block space-y-4">
              <p className="text-slate-600 text-[12px] leading-relaxed max-w-[280px] font-semibold">
                Mytecsys is a premium technology development partner. We engineer custom artificial intelligence models, secure automated workflows, and robust cloud architectures to drive digital transformation and scale enterprises globally.
              </p>
            </div>
          </div>

          {/* Links & Contact Grid for Mobile / Flex for Desktop */}
          <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4 lg:flex lg:justify-between lg:gap-10">
            {/* Quick Links */}
            <div className="flex flex-col justify-start">
              <h4 className="text-slate-900 font-bold text-[13px] lg:hidden mb-4">Useful Links</h4>
              <ul className="space-y-4">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "Case Studies", href: "/#case-studies" },
                  { label: "Research & Insights", href: "/#news" },
                  { label: "Gallery", href: "/#achievements" },
                  { label: "Services", href: "/#services" },
                  { label: "Careers", href: "/careers" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-1.5 text-slate-900 font-bold text-[13px] hover:text-blue-600 transition-colors">
                      <span className="lg:hidden text-blue-600 text-lg leading-none mt-[-2px]">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Address */}
            <div className="space-y-6 flex flex-col justify-start">
              {/* Contact Us */}
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold text-[13px] lg:hidden mb-0">Contact Us</h4>
                <h4 className="hidden lg:block text-slate-900 font-bold text-[13px] uppercase tracking-wider">Contact Us</h4>
                <div className="space-y-3.5">
                  <a href="tel:+919405741343" className="flex items-center gap-3 text-slate-900 hover:text-blue-600 transition-colors text-[13px] font-bold whitespace-nowrap">
                    <Phone className="w-5 h-5 text-slate-400" />
                    (+91) 9405741343
                  </a>
                  <a href="mailto:info@mytecsys.in" className="flex items-center gap-3 text-slate-900 hover:text-blue-600 transition-colors text-[13px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    info@mytecsys.in
                  </a>
                </div>
              </div>

              {/* App Store Buttons Mobile (Moved from under Logo) */}
              <div className="flex lg:hidden flex-col items-start gap-2.5 pt-2 w-full origin-left scale-90">
                {/* Google Play */}
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer shadow-md border border-white/5 w-fit">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/playstore.png`} alt="Google Play" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="leading-[1.1] pr-1 text-left">
                    <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">GET IT ON</p>
                    <p className="text-[14px] font-medium -mt-0.5 tracking-tight">Google Play</p>
                  </div>
                </div>
                {/* App Store */}
                <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer shadow-md w-fit">
                  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.6 63.9-43.4 76.5-11.1 190.9 31.5 252.3 20.8 29.8 45.6 63 77.8 61.9 30.6-1.1 42.4-19.5 79.5-19.5s47.5 19.5 79.5 19.5c33.2-1.1 55-30.1 75.8-60.1 23.9-34.5 33.7-67.9 33.9-69.6-.8-.3-65.5-25.1-66.6-100.4zM289.6 113.6c15.1-18.1 25.1-43.3 22.3-68.5-21.6 1-47.6 14.4-63.1 32.4-13.9 15.9-26 41.5-22.7 66.1 23.9 1.8 48.4-12 63.5-30z"/>
                  </svg>
                  <div className="leading-none text-left">
                    <p className="text-[7px] font-bold opacity-70 uppercase">Download on the</p>
                    <p className="text-[12px] font-black">App Store</p>
                  </div>
                </div>
                {/* Chrome Store */}
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer shadow-md border border-white/5 w-fit">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cromstore.png`} alt="Chrome Store" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="leading-[1.1] pr-1 text-left">
                    <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">Available in the</p>
                    <p className="text-[13px] font-medium -mt-0.5 tracking-tight">Chrome Store</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4 hidden lg:block">
                <h4 className="text-slate-900 font-bold text-[13px] uppercase tracking-wider">Address</h4>
                <div className="flex items-start gap-3.5 text-slate-900 text-[13px] leading-relaxed font-bold">
                  <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                  <p className="whitespace-nowrap">
                    Jai umiya shivam apartment, 102,<br />
                    6579/A/47, Chandranagar, Rameshwari,<br />
                    Nagpur, Maharashtra 440027
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="hidden lg:flex lg:w-[30%] flex-col justify-start">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Mytecsys,+Jai+umiya+shivam+apartment,+102,+6579/A/47,+Chandranagar,+Rameshwari,+Nagpur,+Maharashtra+440027"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative w-full"
            >
              <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-6 border border-blue-100 shadow-sm relative overflow-hidden h-[200px] flex flex-col items-center justify-center group-hover:border-blue-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/hexellence.png")' }} />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-slate-50 text-center relative">
                    <p className="text-slate-900 font-black text-sm">Mytecsys</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-bold">Nagpur, Maharashtra (India)</p>
                  </div>
                  <div className="mt-3 relative">
                    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-[#FF3B30] drop-shadow-lg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>

        <div className="grid grid-cols-2 lg:flex lg:flex-row items-start lg:items-center justify-between gap-6 pt-6 pb-6 lg:pt-8 lg:pb-8 border-t border-slate-100">
          {/* Other Links (Legal) */}
          <div className="order-1 lg:order-2 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <h4 className="text-slate-900 font-bold text-[13px] lg:hidden mb-0">Other Links</h4>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Services", href: "/terms-and-conditions" }
              ].map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center gap-1.5 text-slate-900 lg:text-slate-500 font-bold text-[13px] lg:text-[12px] hover:text-blue-600 transition-colors">
                  <span className="lg:hidden text-blue-600 text-lg leading-none mt-[-2px]">›</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="order-2 lg:order-1 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <h4 className="lg:hidden hidden text-slate-400 font-bold text-[12px] mb-0">Follow us on -</h4>
            <h4 className="text-slate-900 font-bold text-[13px] lg:hidden mb-0">Social Links</h4>
            <div className="grid grid-cols-3 gap-2 lg:flex lg:items-center lg:gap-5">
              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=%20+91%209405741343&text=Hi%20%F0%9F%98%89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@mytecsys1421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 lg:w-5 lg:h-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/68713718/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 lg:w-5 lg:h-5" />
              </a>
              {/* Twitter / X */}
              <a
                href="https://x.com/mytecsys?t=wWHBheDhnq73DIdrIkYJkg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-sky-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5 lg:w-5 lg:h-5 fill-current" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mytecsys.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 lg:w-5 lg:h-5" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Mytecsys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white lg:w-auto lg:h-auto lg:bg-transparent lg:text-slate-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex order-3 items-center gap-3 scale-90 lg:scale-100 origin-right">
            {/* App Store */}
            <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md">
              <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.6 63.9-43.4 76.5-11.1 190.9 31.5 252.3 20.8 29.8 45.6 63 77.8 61.9 30.6-1.1 42.4-19.5 79.5-19.5s47.5 19.5 79.5 19.5c33.2-1.1 55-30.1 75.8-60.1 23.9-34.5 33.7-67.9 33.9-69.6-.8-.3-65.5-25.1-66.6-100.4zM289.6 113.6c15.1-18.1 25.1-43.3 22.3-68.5-21.6 1-47.6 14.4-63.1 32.4-13.9 15.9-26 41.5-22.7 66.1 23.9 1.8 48.4-12 63.5-30z"/>
              </svg>
              <div className="leading-none text-left">
                <p className="text-[7px] font-bold opacity-70 uppercase">Download on the</p>
                <p className="text-[12px] font-black">App Store</p>
              </div>
            </div>

            {/* Chrome Store */}
            <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md border border-white/5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cromstore.png`} 
                  alt="Chrome Store" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <div className="leading-[1.1] pr-1 text-left">
                <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">Available in the</p>
                <p className="text-[13px] font-medium -mt-0.5 tracking-tight">Chrome Store</p>
              </div>
            </div>

            {/* Google Play */}
            <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all shadow-md border border-white/5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/playstore.png`} 
                  alt="Google Play" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <div className="leading-[1.1] pr-1 text-left">
                <p className="text-[7px] font-bold opacity-90 uppercase tracking-wider">GET IT ON</p>
                <p className="text-[14px] font-medium -mt-0.5 tracking-tight">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50/50 py-4 border-t border-blue-100/50">
        <div className="container mx-auto max-w-7xl px-2 md:px-4 flex justify-center items-center">
          <p className="text-slate-600 text-[15px] font-medium tracking-wide">
            &copy; 2026 Mytecsys.,@All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
