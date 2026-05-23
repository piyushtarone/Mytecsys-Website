"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-[120px] pb-[60px] px-4 md:px-6 relative z-10 overflow-hidden bg-slate-50/30 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 font-tech tracking-normal">
            Contact Us
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Let&apos;s Connect)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Get in touch with us
            </h3>
            <p className="text-slate-500 max-w-md leading-relaxed mb-8">
              Have a project in mind or just want to say hello? Feel free to reach out.
              Our team will get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "(+91) 9405741343", href: "tel:+919405741343" },
                { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "info@mytecsys.in", href: "mailto:info@mytecsys.in" },
                { icon: <MapPin className="w-5 h-5" />, label: "Visit Us", value: "Nagpur, Maharashtra", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-4 rounded-2xl bg-white border border-slate-200/50 shadow-sm hover:shadow-md transition-all hover:border-tech/30 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-tech/5 flex items-center justify-center text-tech mb-3 group-hover:bg-tech group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    suppressHydrationWarning={true}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-tech focus:ring-1 focus:ring-tech outline-none transition-all text-sm bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    suppressHydrationWarning={true}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-tech focus:ring-1 focus:ring-tech outline-none transition-all text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  suppressHydrationWarning={true}
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-tech focus:ring-1 focus:ring-tech outline-none transition-all text-sm bg-slate-50/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  suppressHydrationWarning={true}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-tech focus:ring-1 focus:ring-tech outline-none transition-all text-sm bg-slate-50/50 resize-none"
                />
              </div>

              <Button
                suppressHydrationWarning={true}
                className="w-full py-7 rounded-xl bg-[#1b6cd5] hover:bg-[#1558b0] text-white shadow-sm font-semibold group transition-all text-lg">
                Send Message
                <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
