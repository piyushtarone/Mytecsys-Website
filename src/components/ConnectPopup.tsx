"use client";

import { useState, useEffect } from "react";
import { X, MessageSquare, Briefcase, Headset, Users, Cpu, ArrowLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const departments = [
  {
    id: "sales",
    title: "Sales",
    description: "Pricing, demos & partnerships",
    icon: Briefcase,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    badgeColor: "bg-purple-600",
  },
  {
    id: "support",
    title: "Support",
    description: "Help with existing products",
    icon: Headset,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    badgeColor: "bg-blue-600",
  },
  {
    id: "hr",
    title: "HR",
    description: "Careers & recruitment",
    icon: Users,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    badgeColor: "bg-emerald-600",
  },
  {
    id: "tech",
    title: "Tech",
    description: "Technical queries & integrations",
    icon: Cpu,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    badgeColor: "bg-orange-600",
  },
];

export function ConnectPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const selectedDept = departments.find(d => d.id === selectedDeptId);

  return (
    <>
      <AnimatePresence>
        {/* Floating Button */}
        {!isOpen && (
          <motion.button
            key="chat-button"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => {
              setIsOpen(true);
              setHasInteracted(true);
            }}
            className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition-colors z-50 hover:scale-105 active:scale-95"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Popup Window */}
        {isOpen && (
          <motion.div 
            key="chat-popup"
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 w-[320px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-100"
          >
          {/* Top Gradient Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          
          <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              {!selectedDept ? (
                <div>
                  <p className="text-xs font-bold tracking-wider text-purple-600 uppercase mb-1 flex items-center gap-1">
                    <span>👋</span> LET'S CONNECT
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">Who would you like to reach?</h3>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedDeptId(null)}
                      className="text-gray-400 hover:text-gray-600 text-sm flex items-center transition-colors"
                    >
                      <ArrowLeft size={16} className="mr-1" /> Back
                    </button>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-sm font-medium ${selectedDept.badgeColor}`}>
                      <selectedDept.icon size={14} />
                      {selectedDept.title}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Tell us about yourself</h3>
                    <p className="text-xs text-gray-500 mt-0.5">We'll get back to you within 24 hours</p>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setSelectedDeptId(null);
                  setHasInteracted(true);
                }}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            {!selectedDept ? (
              <>
                <p className="text-xs text-gray-500 mb-3">Select a department to get started</p>
                <div className="grid grid-cols-2 gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDeptId(dept.id)}
                      className="flex flex-col items-start p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all text-left group bg-white"
                    >
                      <div className={`w-8 h-8 rounded-lg ${dept.bgColor} ${dept.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                        <dept.icon size={16} />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{dept.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-tight">{dept.description}</p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <form className="flex flex-col gap-3 mt-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rahul Sharma" 
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="e.g. +91 98765 43210" 
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="e.g. rahul@company.com" 
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs placeholder:text-gray-400"
                    required
                  />
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    // For now, just reset form or show success. Let's just minimize it.
                    setIsOpen(false);
                    setSelectedDeptId(null);
                    alert("Message Sent!");
                  }}
                  className={`w-full mt-1 py-2 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-colors text-sm ${selectedDept.badgeColor} hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]`}
                >
                  Send Message <ChevronRight size={16} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
