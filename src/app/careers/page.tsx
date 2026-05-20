"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Search, 
  ChevronRight, 
  Send,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// Mock Jobs data (currently empty as there are no active listings)
const MOCK_JOBS: Array<{ id: string; title: string; location: string; experience: number; department: string }> = [];

export default function CareersPage() {
  // Navigation view mode: "landing" | "roles"
  const [viewMode, setViewMode] = useState<"landing" | "roles">("landing");
  
  // Job Board Search & Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  
  // Filter query applied states (active states for left filters)
  const [appliedMinExp, setAppliedMinExp] = useState<number | null>(null);
  const [appliedMaxExp, setAppliedMaxExp] = useState<number | null>(null);
  const [appliedLocations, setAppliedLocations] = useState<string[]>([]);
  
  // Talent Pool Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "AI & Machine Learning",
    linkedin: "",
    resumeUrl: "",
    message: ""
  });
  
  const formRef = useRef<HTMLDivElement>(null);

  // Trigger search from landing page
  const handleLandingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setViewMode("roles");
  };

  // Trigger scroll to form and autofill role
  const handleApplyClick = (jobTitle: string) => {
    setFormData(prev => ({
      ...prev,
      message: `I am interested in applying for: ${jobTitle}. ` + prev.message
    }));
    
    // Scroll down to form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone).");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Apply experience and location filters
  const handleApplyFilters = () => {
    setAppliedMinExp(minExp ? parseInt(minExp, 10) : null);
    setAppliedMaxExp(maxExp ? parseInt(maxExp, 10) : null);
    setAppliedLocations(selectedLocations);
  };

  // Reset experience filters
  const handleResetFilters = () => {
    setMinExp("");
    setMaxExp("");
    setSelectedLocations([]);
    setAppliedMinExp(null);
    setAppliedMaxExp(null);
    setAppliedLocations([]);
  };

  // Toggle Location selection
  const toggleLocationSelection = (loc: string) => {
    setSelectedLocations(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  // Filtered Jobs computing
  const filteredJobs = MOCK_JOBS.filter((job) => {
    // Search text match (Title, Department or Location)
    const matchesSearch = searchQuery
      ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    // Experience match
    const minMatch = appliedMinExp !== null ? job.experience >= appliedMinExp : true;
    const maxMatch = appliedMaxExp !== null ? job.experience <= appliedMaxExp : true;
    
    // Location match
    const locMatch = appliedLocations.length > 0
      ? appliedLocations.some(l => job.location.toLowerCase().includes(l.toLowerCase()))
      : true;

    return matchesSearch && minMatch && maxMatch && locMatch;
  });

  // Keep only Nagpur in the locations filter list
  const locationCounts: Record<string, number> = {
    "Nagpur, India": 0
  };

  const uniqueLocations = Object.keys(locationCounts).filter(loc => 
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* ─── VIEW 1: LANDING OVERVIEW ──────────────────────────────────────────────── */}
      {viewMode === "landing" ? (
        <div className="animate-in fade-in duration-500 pt-20">
          {/* Hero Section with Office Banner Image */}
          <div className="relative h-[400px] md:h-[480px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Office Image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/careers_hero_bg.png`} 
                alt="Mytecsys Office Banner" 
                fill
                priority
                className="object-cover object-center filter brightness-[0.7]"
              />
              {/* Radial dark vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50 pointer-events-none" />
            </div>

            {/* Centered search capsule */}
            <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center space-y-6">
              {/* Hero Heading: 56px */}
              <h1 className="text-3xl md:text-[56px] font-black text-white leading-tight font-tech tracking-normal">
                Work at the Frontier of Innovation
              </h1>
              {/* Body: 16px */}
              <p className="text-slate-200 text-[16px] max-w-xl mx-auto font-normal leading-relaxed tracking-normal">
                We design custom AI engines and secure cloud infrastructures. Build the future with our team of elite developers and researchers.
              </p>

              {/* Capsule Search Bar */}
              <form 
                onSubmit={handleLandingSearch}
                className="relative w-full max-w-xl mx-auto bg-white rounded-full p-2 flex items-center shadow-2xl border-2 border-white focus-within:border-blue-500 transition-all duration-300"
              >
                <Search className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
                {/* Body: 16px */}
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by role or keyword..." 
                  className="w-full bg-transparent border-none outline-none px-4 py-2 text-[16px] font-normal text-slate-800 placeholder-slate-400 tracking-normal"
                />
                {/* Bold Text: 16px / 18px */}
                <button 
                  type="submit"
                  className="bg-[#2589e9] hover:bg-[#1d76cc] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-[16px] transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-md tracking-normal"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Let's Grow Together Section */}
          <div className="py-16 md:py-24 bg-[#fafbfc] border-b border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Heading and Description */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  {/* Title: 32px */}
                  <h2 className="text-2xl md:text-[32px] font-extrabold text-slate-900 font-tech tracking-normal leading-snug">
                    Let&apos;s Grow Together
                  </h2>
                  {/* Bold Text / Body: 18px / 16px */}
                  <p className="text-slate-500 font-semibold text-[16px] md:text-[18px] leading-relaxed tracking-normal">
                    We believe in nurturing talent, fostering collaborative growth, and celebrating our victories together. Join us to access unmatched learning opportunities, work alongside world-class engineers, and chart your career path at the absolute cutting edge.
                  </p>
                </div>
                
                {/* Right Column: Single Explore Opportunities Card */}
                <div className="lg:col-span-6 flex justify-end w-full">
                  <div 
                    onClick={() => setViewMode("roles")}
                    className="relative w-full max-w-md h-[300px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-slate-100"
                  >
                    <Image 
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/careers_handshake.png`} 
                      alt="Explore Opportunities"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-left">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        {/* Subtitle: 24px */}
                        <h3 className="text-xl md:text-[24px] font-bold text-white font-tech tracking-normal">
                          Explore Opportunities
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Culture, Benefits, and Drive Meaningful Change (Full Bleed Layout) */}
          <div className="w-full">
            
            {/* Culture block */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
              <div className="bg-[#0b1c33] p-12 md:p-20 flex flex-col justify-center items-start text-left text-white space-y-6">
                {/* Title: 32px */}
                <h3 className="text-2xl md:text-[32px] font-extrabold font-tech tracking-normal leading-snug">
                  Culture at Mytecsys
                </h3>
                {/* Body: 16px */}
                <p className="text-slate-300 text-[16px] leading-relaxed font-normal tracking-normal">
                  A culture built on innovation, collaboration, and a relentless drive for excellence, where every team member is empowered to grow, make a meaningful impact, and succeed together.
                </p>
              </div>
              <div className="relative min-h-[350px] md:min-h-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/careers_culture.png`} 
                  alt="Culture at Mytecsys" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Benefits block */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
              <div className="relative min-h-[350px] md:min-h-full order-2 md:order-1">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/careers_benefits.png`} 
                  alt="Benefits for You" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#0b1c33] p-12 md:p-20 flex flex-col justify-center items-start text-left text-white space-y-6 order-1 md:order-2">
                {/* Title: 32px */}
                <h3 className="text-2xl md:text-[32px] font-extrabold font-tech tracking-normal leading-snug">
                  Benefits for You
                </h3>
                {/* Body: 16px */}
                <p className="text-slate-300 text-[16px] leading-relaxed font-normal tracking-normal">
                  Enjoy comprehensive benefits framework that support your journey with wellness initiatives, career development programs with work-life harmony at the core.
                </p>
              </div>
            </div>

            {/* Drive Meaningful Change block */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
              <div className="bg-[#0b1c33] p-12 md:p-20 flex flex-col justify-center items-start text-left text-white space-y-6">
                {/* Title: 32px */}
                <h3 className="text-2xl md:text-[32px] font-extrabold font-tech tracking-normal leading-snug">
                  Drive Meaningful Change
                </h3>
                {/* Body: 16px */}
                <p className="text-slate-300 text-[16px] leading-relaxed font-normal tracking-normal">
                  Our commitment to social impact empowers communities through dedicated initiatives that create lasting and positive transformations.
                </p>
              </div>
              <div className="relative min-h-[350px] md:min-h-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/careers_change.png`} 
                  alt="Drive Meaningful Change" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      ) : (
        
        /* ─── VIEW 2: ROLES SEARCH PAGE ────────────────────────────────────────────── */
        <div className="animate-in fade-in duration-500 pt-20">
          
          {/* Dark Header Banner */}
          <div className="bg-[#0b2240] py-16 text-left border-b border-blue-900/20 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
              
              {/* Back to landing - Small Text: 12px */}
              <button 
                onClick={() => setViewMode("landing")} 
                className="inline-flex items-center gap-2 text-[12px] font-bold text-[#ff5a00] hover:text-[#e04e00] transition-colors uppercase tracking-normal mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Careers Overview
              </button>

              {/* Title: 32px */}
              <h2 className="text-2xl md:text-[32px] font-black font-tech leading-snug tracking-normal max-w-4xl">
                Start your career at Mytecsys today and let&apos;s unleash your full potential.
              </h2>
            </div>
          </div>

          {/* Main Filterable Content area */}
          <div className="container mx-auto px-4 max-w-7xl py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Filters Sidebar (4 columns) */}
              <div className="lg:col-span-4 space-y-8 bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
                
                {/* Filter By Experience */}
                <div className="space-y-4">
                  {/* Bold Text: 16px / 18px */}
                  <h4 className="font-bold text-slate-800 text-[16px] md:text-[18px] font-tech tracking-normal">
                    By Experience (in Years)
                  </h4>
                  <div className="flex items-center gap-3">
                    {/* Body: 16px */}
                    <input 
                      type="number"
                      min="0"
                      placeholder="Min Exp"
                      value={minExp}
                      onChange={(e) => setMinExp(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-[16px] font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                    />
                    <span className="text-slate-400 text-xs font-bold">to</span>
                    <input 
                      type="number"
                      min="0"
                      placeholder="Max Exp"
                      value={maxExp}
                      onChange={(e) => setMaxExp(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-[16px] font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    {/* Bold Text: 16px */}
                    <button 
                      onClick={handleResetFilters}
                      className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 text-[16px] font-bold px-4 py-2 rounded-full transition-all flex-1 tracking-normal"
                    >
                      Reset
                    </button>
                    <button 
                      onClick={handleApplyFilters}
                      className="bg-[#ff5a00] hover:bg-[#e04e00] text-white text-[16px] font-bold px-4 py-2 rounded-full transition-all flex-1 shadow-sm border-none tracking-normal"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <hr className="border-slate-200/60" />

                {/* Filter By Location */}
                <div className="space-y-4">
                  {/* Bold Text: 18px */}
                  <h4 className="font-bold text-slate-800 text-[16px] md:text-[18px] font-tech tracking-normal">
                    Location
                  </h4>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    {/* Body: 16px */}
                    <input 
                      type="text"
                      placeholder="Search Location"
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-[16px] font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                    />
                  </div>
                  
                  {/* Location Checkboxes */}
                  <div className="space-y-3 pt-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                    {uniqueLocations.map((loc) => (
                      <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox"
                          checked={selectedLocations.includes(loc)}
                          onChange={() => toggleLocationSelection(loc)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                        />
                        {/* Body: 16px, Small Text counts: 12px */}
                        <span className="text-slate-600 text-[16px] font-normal group-hover:text-slate-900 transition-colors tracking-normal">
                          {loc} <span className="text-slate-400 text-[12px] font-bold ml-1">[{locationCounts[loc]}]</span>
                        </span>
                      </label>
                    ))}
                    {uniqueLocations.length === 0 && (
                      /* Small Text: 12px */
                      <p className="text-slate-400 text-[12px] font-medium tracking-normal">No locations match search</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Area (8 columns) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Search / Reset header */}
                <div className="flex gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    {/* Body: 16px */}
                    <input 
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-[16px] font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                    />
                  </div>
                  {/* Bold Text: 16px */}
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      handleResetFilters();
                    }}
                    className="bg-[#2589e9] hover:bg-[#1d76cc] text-white px-6 py-3 rounded-xl font-bold text-[16px] shadow-md transition-all flex-shrink-0 border-none tracking-normal"
                  >
                    Reset
                  </button>
                </div>

                {/* Openings count */}
                <div className="text-left py-2 border-b border-slate-100">
                  {/* Bold Text: 16px */}
                  <span className="font-bold text-slate-800 text-[16px] tracking-normal">
                    {filteredJobs.length} openings found
                  </span>
                </div>

                {/* Jobs List */}
                <div className="divide-y divide-slate-100">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left group">
                      <div className="space-y-1">
                        {/* Bold Text: 18px */}
                        <h4 className="text-[18px] font-bold text-slate-900 group-hover:text-[#2589e9] transition-colors font-tech tracking-normal">
                          {job.title}
                        </h4>
                        {/* Small Text: 12px */}
                        <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 tracking-normal">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span>{job.experience}+ years experience</span>
                        </div>
                      </div>
                      
                      {/* Bold Text: 16px */}
                      <button 
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-full px-6 py-2.5 text-[16px] font-bold transition-all flex items-center justify-center gap-2 shadow-sm border-none tracking-normal"
                      >
                        Apply
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Empty state for search results */}
                  {filteredJobs.length === 0 && (
                    <div className="py-16 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto">
                        <Briefcase className="w-6 h-6 text-slate-400" />
                      </div>
                      {/* Bold Text: 18px */}
                      <h4 className="text-[18px] font-bold text-slate-700 font-tech tracking-normal">No openings currently available</h4>
                      {/* Body: 16px */}
                      <p className="text-slate-400 text-[16px] font-normal max-w-sm mx-auto leading-relaxed tracking-normal">
                        We don&apos;t have any active open roles at the moment. However, we are growing quickly! Please submit your resume using the form below to join our talent pool.
                      </p>
                      {/* Bold Text: 16px */}
                      <button 
                        onClick={handleResetFilters}
                        className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-[16px] font-bold shadow-md border-none tracking-normal"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* General Talent Pool Submission Form (shown underneath Roles listing) */}
          <div 
            ref={formRef} 
            id="talent-pool-form" 
            className="max-w-3xl mx-auto py-16 scroll-mt-24"
          >
            <div className="bg-white/80 backdrop-blur-md border border-slate-100 shadow-2xl shadow-blue-100/40 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden mx-4">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />
              
              {!formSubmitted ? (
                <>
                  <div className="mb-8">
                    {/* Small Text: 12px */}
                    <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 rounded-lg px-3 py-1 text-[12px] font-bold uppercase tracking-normal mb-3">
                      <Send className="w-3.5 h-3.5" />
                      Talent Database
                    </div>
                    {/* Title: 32px */}
                    <h3 className="text-2xl md:text-[32px] font-black text-slate-900 font-tech mb-2 tracking-normal">
                      Apply / Join General Talent Pool
                    </h3>
                    {/* Body: 16px */}
                    <p className="text-slate-500 text-[16px] font-normal max-w-md mx-auto leading-relaxed tracking-normal">
                      Let us know who you are, what you build, and what you are passionate about. We review every submission.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        {/* Body: 16px */}
                        <input 
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all tracking-normal"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        {/* Body: 16px */}
                        <input 
                          type="email"
                          name="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all tracking-normal"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        {/* Body: 16px */}
                        <input 
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. +91 94057 41343"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all tracking-normal"
                        />
                      </div>

                      {/* Area of interest */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          Area of Interest
                        </label>
                        {/* Body / Bold Text: 16px */}
                        <select 
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all cursor-pointer tracking-normal"
                        >
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Frontend Development (React/Next.js)">Frontend Development</option>
                          <option value="Backend & Cloud Architecture">Backend & Cloud Architecture</option>
                          <option value="Mobile Applications">Mobile Applications</option>
                          <option value="Product Design & Management">Product & Design</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* LinkedIn input */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          LinkedIn Profile URL
                        </label>
                        {/* Body: 16px */}
                        <input 
                          type="url"
                          name="linkedin"
                          placeholder="e.g. linkedin.com/in/username"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all tracking-normal"
                        />
                      </div>

                      {/* Resume link input */}
                      <div className="space-y-2">
                        {/* Small Text: 12px */}
                        <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                          Resume Link (Google Drive, Dropbox, etc.)
                        </label>
                        {/* Body: 16px */}
                        <input 
                          type="url"
                          name="resumeUrl"
                          placeholder="e.g. drive.google.com/file/..."
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all tracking-normal"
                        />
                      </div>
                    </div>

                    {/* Cover message */}
                    <div className="space-y-2">
                      {/* Small Text: 12px */}
                      <label className="text-[12px] font-bold uppercase tracking-normal text-slate-500">
                        Tell us about yourself & cover letter
                      </label>
                      {/* Body: 16px */}
                      <textarea 
                        name="message"
                        rows={4}
                        placeholder="Highlight your notable technical builds, research work, or what gets you excited about engineering..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[16px] font-normal text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#2589e9] transition-all resize-none tracking-normal"
                      />
                    </div>

                    {/* Submit button */}
                    <div className="pt-2 text-center">
                      {/* Bold Text: 16px */}
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-lg px-12 h-12 text-[16px] font-bold shadow-md border-none transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 tracking-normal"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Uploading Details...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-12 px-4 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 relative">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    <span className="absolute inset-0 rounded-full bg-emerald-200/30 animate-pulse-slow" />
                  </div>

                  <h3 className="text-[32px] font-black text-slate-900 font-tech mb-3 tracking-normal">
                    Application Received!
                  </h3>
                  
                  {/* Body: 16px */}
                  <p className="text-slate-500 font-normal text-[16px] max-w-md leading-relaxed mb-8 tracking-normal">
                    Thank you for applying to join the Mytecsys team, <strong className="text-slate-800">{formData.name}</strong>. We have logged your details under <strong className="text-slate-800">{formData.email}</strong>. Our engineering recruiters will contact you if an opportunity matching your background arises.
                  </p>

                  <div className="flex gap-4">
                    {/* Bold Text: 16px */}
                    <Button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          interest: "AI & Machine Learning",
                          linkedin: "",
                          resumeUrl: "",
                          message: ""
                        });
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg px-6 h-11 text-[16px] font-bold transition-all border-none tracking-normal"
                    >
                      Submit Another Profile
                    </Button>
                    <button 
                      onClick={() => setViewMode("landing")}
                      className="bg-[#2589e9] hover:bg-[#1d76cc] text-white rounded-lg px-6 h-11 text-[16px] font-bold transition-all hover:scale-105 active:scale-95 border-none shadow-md tracking-normal"
                    >
                      Back to Overview
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
