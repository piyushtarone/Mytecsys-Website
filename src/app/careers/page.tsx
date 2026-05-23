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

// Mock Jobs data
const MOCK_JOBS: Array<{
  id: string;
  title: string;
  location: string;
  experience: number;
  department: string;
  skills: string[];
}> = [
  {
    id: "dm-specialist",
    title: "Digital Marketing Specialist",
    location: "Nagpur, India",
    experience: 2,
    department: "Marketing",
    skills: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Google Analytics", "Email Campaigns"]
  }
];

const DEFAULT_SKILLS = [
  "Java",
  "JavaScript",
  "API",
  "MongoDB",
  "Python",
  "AWS",
  "DevOps",
  "MERN Stack",
  "SEO",
  "Google Ads",
  "Social Media",
  "Content Marketing",
  "Google Analytics",
  "Email Campaigns"
];

export default function CareersPage() {
  // Navigation view mode: "landing" | "roles"
  const [viewMode, setViewMode] = useState<"landing" | "roles">("landing");

  // Job Board Search & Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availableSkills, setAvailableSkills] = useState<string[]>(DEFAULT_SKILLS);
  const [newSkillInput, setNewSkillInput] = useState("");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [showAppForm, setShowAppForm] = useState(false);
  const [jobApplied, setJobApplied] = useState(false);

  // Filter query applied states (active states for left filters)
  const [appliedMinExp, setAppliedMinExp] = useState<number | null>(null);
  const [appliedMaxExp, setAppliedMaxExp] = useState<number | null>(null);
  const [appliedSkills, setAppliedSkills] = useState<string[]>([]);

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

  // Apply experience and skills filters
  const handleApplyFilters = () => {
    setAppliedMinExp(minExp ? parseInt(minExp, 10) : null);
    setAppliedMaxExp(maxExp ? parseInt(maxExp, 10) : null);
    setAppliedSkills(selectedSkills);
  };

  // Reset experience and skills filters
  const handleResetFilters = () => {
    setMinExp("");
    setMaxExp("");
    setSelectedSkills([]);
    setAppliedMinExp(null);
    setAppliedMaxExp(null);
    setAppliedSkills([]);
    setSelectedJobId(null);
    setShowAppForm(false);
    setJobApplied(false);
  };

  // Toggle Skill selection
  const toggleSkillSelection = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  // Add custom skill to available list
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newSkillInput.trim();
    if (!trimmed) return;

    // Check if skill already exists (case-insensitive)
    const exists = availableSkills.some(
      s => s.toLowerCase() === trimmed.toLowerCase()
    );

    if (!exists) {
      setAvailableSkills(prev => [...prev, trimmed]);
      setSelectedSkills(prev => [...prev, trimmed]);
    } else {
      const exactSkill = availableSkills.find(
        s => s.toLowerCase() === trimmed.toLowerCase()
      );
      if (exactSkill && !selectedSkills.includes(exactSkill)) {
        setSelectedSkills(prev => [...prev, exactSkill]);
      }
    }
    setNewSkillInput("");
  };

  // Filtered Jobs computing
  const filteredJobs = MOCK_JOBS.filter((job) => {
    // Search text match (Title, Department or Location or Skills)
    const matchesSearch = searchQuery
      ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    // Experience match
    const minMatch = appliedMinExp !== null ? job.experience >= appliedMinExp : true;
    const maxMatch = appliedMaxExp !== null ? job.experience <= appliedMaxExp : true;

    // Skills match
    const skillsMatch = appliedSkills.length > 0
      ? appliedSkills.some(skill => job.skills.includes(skill))
      : true;

    return matchesSearch && minMatch && maxMatch && skillsMatch;
  });

  return (
    <div className="relative min-h-screen bg-white">

      {/* Hero Section with Office Banner Image (always visible at the top) */}
      <div className="animate-in fade-in duration-500 pt-20">
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
              {viewMode === "roles" ? "Explore Opportunities at Mytecsys" : "Work at the Frontier of Innovation"}
            </h1>

            {/* Body: 16px */}
            <p className="text-slate-200 text-[16px] max-w-xl mx-auto font-normal leading-relaxed tracking-normal">
              We design custom AI engines and secure cloud infrastructures. Build the future with our team of elite developers and researchers.
            </p>

            {/* Capsule Search Bar (hidden in roles search mode) */}
            {viewMode === "landing" && (
              <form
                onSubmit={handleLandingSearch}
                className="relative w-full max-w-md mx-auto bg-white rounded-full p-1 flex items-center shadow-xl border border-white focus-within:border-blue-400 transition-all duration-300 animate-in fade-in duration-300"
              >
                <Search className="w-4 h-4 text-slate-400 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by role or keyword..."
                  className="w-full bg-transparent border-none outline-none px-3 py-1.5 text-[14px] font-normal text-slate-800 placeholder-slate-400 tracking-normal"
                />
                <button
                  type="submit"
                  className="bg-[#1b6cd5] hover:bg-[#1558b0] text-white px-5 py-2 rounded-full font-bold text-[14px] transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-md tracking-normal"
                >
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Landing overview sub-sections (visible only in landing view) */}
      {viewMode === "landing" && (
        <div className="animate-in fade-in duration-500">
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
      )}

      {/* Roles & Job listings (visible only in roles search view) */}
      {viewMode === "roles" && (
        <div className="animate-in fade-in duration-500">
          {/* Main Filterable Content area */}
          <div className="container mx-auto px-4 max-w-7xl py-12">

            {/* Back to landing / careers overview */}
            <div className="mb-6 text-left">
              <button
                onClick={() => setViewMode("landing")}
                className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1b6cd5] hover:text-[#1558b0] transition-colors uppercase tracking-normal bg-transparent border-none p-0 shadow-none"
              >
                <ArrowLeft className="w-4 h-4" />
                Careers Overview
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Filters Sidebar (4 columns) */}
              <div className="lg:col-span-4 space-y-8 bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
                {/* Tech Stack / Skills Filter */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-[16px] md:text-[18px] font-tech tracking-normal text-left">
                    Skills & Tech Stack
                  </h4>

                  {/* Skill Add Input Form */}
                  <form onSubmit={handleAddSkill} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Add tech stack / skill..."
                      value={newSkillInput}
                      onChange={(e) => setNewSkillInput(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 h-11 text-sm font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                    />
                    <button
                      type="submit"
                      className="border border-[#1b6cd5] text-[#1b6cd5] hover:bg-[#1b6cd5]/10 bg-transparent rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                    >
                      Add
                    </button>
                  </form>

                  <div className="space-y-3 pt-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar text-left">
                    {availableSkills.map((skill) => (
                      <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(skill)}
                          onChange={() => toggleSkillSelection(skill)}
                          className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                        />
                        <span className="text-slate-600 text-[16px] font-normal group-hover:text-slate-900 transition-colors tracking-normal">
                          {skill}
                        </span>
                      </label>
                    ))}
                    {availableSkills.length === 0 && (
                      <p className="text-slate-400 text-[12px] font-medium tracking-normal text-left">No skills available</p>
                    )}
                  </div>
                </div>

                <hr className="border-slate-200/60" />

                {/* Filter By Experience */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-[16px] md:text-[18px] font-tech tracking-normal text-left">
                    Experience (in Years)
                  </h4>
                  <div className="flex items-center gap-3">
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
                </div>

                {/* Unified Filter Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleResetFilters}
                    className="border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-500 rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex-1 tracking-normal"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleApplyFilters}
                    className="bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none flex-1 tracking-normal"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>

              {/* Results Area (8 columns) */}
              <div className="lg:col-span-8 space-y-6">
                {selectedJobId ? (
                  // Job Details View
                  <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 text-left space-y-6 shadow-sm">
                    {/* Back Button */}
                    <button
                      onClick={() => {
                        setSelectedJobId(null);
                        setShowAppForm(false);
                        setJobApplied(false);
                      }}
                      className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1b6cd5] hover:text-[#1558b0] transition-colors uppercase tracking-normal bg-transparent border-none p-0 shadow-none"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Job Openings
                    </button>

                    {/* Job Header */}
                    <div className="space-y-3 border-b border-slate-100 pb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 font-tech tracking-normal">
                        Digital Marketing Specialist
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-[14px] font-bold text-slate-500">
                        <span>Marketing</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Nagpur, India
                        </span>
                        <span>•</span>
                        <span>2+ years experience</span>
                      </div>
                    </div>

                    {/* Job Content details */}
                    <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed">
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 text-[18px]">Job Description</h4>
                        <p>
                          We are looking for a creative, data-driven, and ambitious Digital Marketing Specialist to take charge of our online marketing strategies. In this role, you will lead the optimization of our search engine visibility (SEO), orchestrate key PPC campaigns, curate our social media channels, and structure performance-based email marketing to grow our client base globally.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 text-[18px]">Key Responsibilities</h4>
                        <ul className="list-disc pl-5 space-y-1.5">
                          <li>Plan, execute, and monitor SEO/SEM, email marketing, and social media campaigns.</li>
                          <li>Design, construct, and manage high-engagement organic and paid social campaigns.</li>
                          <li>Track website traffic and analyze marketing KPIs using Google Analytics and Search Console.</li>
                          <li>Collaborate with designers and content creators to produce compelling promotional copy and landing pages.</li>
                          <li>Identify new marketing channels, industry trends, and target audience segments to optimize campaign returns.</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-800 text-[18px]">Requirements & Qualifications</h4>
                        <ul className="list-disc pl-5 space-y-1.5">
                          <li>2+ years of professional digital marketing experience, preferably in tech or enterprise B2B.</li>
                          <li>Demonstrated success with SEO optimization and managing Google Ads or Meta campaigns.</li>
                          <li>Deep familiarity with Google Analytics, SEMrush, and marketing automation tools.</li>
                          <li>Superb copywriting, editing, and communication skills.</li>
                          <li>Strong analytical capability to parse numbers and transform metrics into actionable plans.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Action Block / Form */}
                    <div className="border-t border-slate-100 pt-6">
                      {!showAppForm ? (
                        <button
                          onClick={() => setShowAppForm(true)}
                          className="bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none flex items-center justify-center gap-2 tracking-normal"
                        >
                          Apply For This Position
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : jobApplied ? (
                        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-3">
                          <h5 className="font-bold text-lg">Application Submitted!</h5>
                          <p className="text-sm">
                            Thank you for applying. Our talent team will review your application and get in touch with you shortly.
                          </p>
                          <button
                            onClick={() => {
                              setSelectedJobId(null);
                              setShowAppForm(false);
                              setJobApplied(false);
                            }}
                            className="border border-green-600 bg-transparent hover:bg-green-50 text-green-700 rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                          >
                            Back to All Jobs
                          </button>
                        </div>
                      ) : (
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-6">
                          <h4 className="font-bold text-slate-800 text-[18px] text-left">Apply Now</h4>
                          <form onSubmit={(e) => {
                            e.preventDefault();
                            setJobApplied(true);
                          }} className="space-y-4 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="John Doe"
                                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Email Address *</label>
                                <input
                                  type="email"
                                  required
                                  placeholder="john@example.com"
                                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number *</label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="+91 98765 43210"
                                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">LinkedIn Profile</label>
                                <input
                                  type="url"
                                  placeholder="https://linkedin.com/in/username"
                                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Resume / CV Link *</label>
                              <input
                                type="url"
                                required
                                placeholder="https://drive.google.com/file/d/... or Dropbox link"
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Message / Cover Letter</label>
                              <textarea
                                rows={4}
                                placeholder="Tell us why you are a great fit..."
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                              />
                            </div>

                            <div className="flex gap-3 justify-end pt-2">
                              <button
                                type="button"
                                onClick={() => setShowAppForm(false)}
                                className="border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-500 rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none flex items-center gap-2"
                              >
                                Submit Application
                                <Send className="w-4 h-4" />
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Search & Job Listings View
                  <>
                    <div className="flex gap-4 items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search jobs..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-[16px] font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 tracking-normal"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          handleResetFilters();
                        }}
                        className="border border-[#1b6cd5] bg-transparent hover:bg-[#1b6cd5]/10 text-[#1b6cd5] rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex-shrink-0 tracking-normal"
                      >
                        Clear
                      </button>
                    </div>

                    <div className="text-left py-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800 text-[16px] tracking-normal">
                        {filteredJobs.length} openings found
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {filteredJobs.map((job) => (
                        <div key={job.id} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left group">
                          <div className="space-y-2">
                            <h4 className="text-[18px] font-bold text-slate-900 group-hover:text-[#1b6cd5] transition-colors font-tech tracking-normal">
                              {job.title}
                            </h4>
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
                            {/* Skills/Tech Stack badges */}
                            {job.skills && job.skills.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {job.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="bg-[#1b6cd5]/10 text-[#1b6cd5] px-2.5 py-0.5 rounded text-[11px] font-bold tracking-normal uppercase"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              setSelectedJobId(job.id);
                              setShowAppForm(false);
                              setJobApplied(false);
                            }}
                            className="bg-[#ff5a00] hover:bg-[#e04e00] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none flex items-center justify-center gap-2 tracking-normal"
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
                          <h4 className="text-[18px] font-bold text-slate-700 font-tech tracking-normal">No openings currently available</h4>
                          <p className="text-slate-400 text-[16px] font-normal max-w-sm mx-auto leading-relaxed tracking-normal">
                            We don&apos;t have any active open roles at the moment. However, we are growing quickly! Please check back later or reach out to us at <a href="mailto:info@mytecsys.in" className="text-blue-600 hover:underline">info@mytecsys.in</a>.
                          </p>
                          <button
                            onClick={handleResetFilters}
                            className="bg-[#1b6cd5] hover:bg-[#1558b0] text-white rounded-lg px-6 h-11 text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md border-none tracking-normal"
                          >
                            Reset All Filters
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
