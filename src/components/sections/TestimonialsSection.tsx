"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "shashank deotale",
    role: "Co-Founder & Tech Partner",
    text: "Their after-sales service is outstanding! Not only did they deliver a fantastic product, but they also provided amazing support post-launch. The designs are fresh and modern, and they really nailed down our requirements with precision. Perfect task management too!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Padma Thakre",
    role: "Product Owner",
    text: "Extremely satisfied with the service provided by this software company. They delivered a high-quality web application on time and exceeded our expectations in terms of both functionality and performance. The team was professional, responsive, and ensured that every detail was taken care of. Highly recommend for anyone looking for reliable and quality software development!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Srushti Mowade",
    role: "Engineering Lead",
    text: "Outstanding experience with this software company! They delivered a robust and user-friendly web application right on schedule. The quality of the product was exceptional, and the team ensured everything was thoroughly tested and functional. Their professionalism and attention to detail truly stood out. Highly recommend their services!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: "4.9",
  },
  {
    name: "Sneha Parise",
    role: "Co-Founder & COO",
    text: "Amazing experience working with this software company! They delivered a high-quality web app right on schedule, with all features functioning flawlessly. Their attention to detail and commitment to quality truly sets them apart. Will definitely work with them again in the future!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Niraj M",
    role: "Director of Operations",
    text: "Such a smooth experience! 😊 The team delivered the web app right on time, and the quality of the product was beyond our expectations. Super easy to work with and very professional throughout the whole process. Highly recommend! 👌",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: "4.9",
  },
  {
    name: "Techiser",
    role: "Enterprise Partner",
    text: "Super impressed with the web app delivered! 🖥️ The team was efficient, and the project was completed on time. Quality of the app is just spot on – everything works seamlessly. Definitely recommend for any software needs! 👍",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Atul Kumar",
    role: "Founder & CEO",
    text: "Couldn’t be happier with the service! 😍 They delivered our web app exactly as promised, and it’s even better than we expected. The team kept us updated every step of the way, and the quality is top-notch. Will work with them again for sure! 🚀",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Deepak Yadav",
    role: "Operations Manager",
    text: "Perfect delivery, right on time! ⏳ The web app is fantastic, and everything works flawlessly. The team ensured the highest quality, and their attention to detail was amazing. Very happy with their service and highly recommend! 💼",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    rating: "4.9",
  },
  {
    name: "Damini Rahangdale",
    role: "Technology Analyst",
    text: "Exceptional Quality and Service. I can't say enough good things about this software development company. Their team delivered an outstanding product on time and within budget. Their attention to detail and commitment to excellence set them apart. Highly recommend!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
  {
    name: "Nishant Sarode",
    role: "Managing Director",
    text: "top-notch software solutions with excellent service and support. Their team is professional, reliable, and always delivers high-quality results. Highly recommended!",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200",
    rating: "5.0",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="pt-[120px] pb-[60px] px-2 md:px-6 relative z-10 overflow-hidden bg-[#1b6cd5]/[0.04]">
      {/* Removed Honeycomb Background Decoration */}

      {/* Subtle gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 font-tech tracking-normal">
            Trust We Build
          </h2>
          <p className="text-slate-500 font-medium tracking-widest uppercase text-[10px]">
            (Customers Words)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] overflow-hidden relative">
          {/* Fading Overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-100 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-100 z-20 pointer-events-none" />

          {/* Column 1: Continuous Up */}
          <div className="flex flex-col animate-marquee-up">
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={`col1-s1-${i}`} testimonial={t} />
              ))}
            </div>
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={`col1-s2-${i}`} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Column 2: Continuous Down */}
          <div className="flex flex-col animate-marquee-down">
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.slice().reverse().map((t, i) => (
                <TestimonialCard key={`col2-s1-${i}`} testimonial={t} />
              ))}
            </div>
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.slice().reverse().map((t, i) => (
                <TestimonialCard key={`col2-s2-${i}`} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Column 3: Continuous Up (Slower) */}
          <div className="flex flex-col animate-marquee-up-slow">
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={`col3-s1-${i}`} testimonial={t} />
              ))}
            </div>
            <div className="flex flex-col gap-6 pb-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={`col3-s2-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marquee-up 80s linear infinite;
        }
        .animate-marquee-up-slow {
          animation: marquee-up 90s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 85s linear infinite;
        }
        .animate-marquee-up:hover, .animate-marquee-up-slow:hover, .animate-marquee-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ testimonial: t }: { testimonial: any }) => (
  <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-tech/30 group">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-tech transition-colors text-sm capitalize">
          {t.name}
        </h4>
        <p className="text-[10px] text-slate-500 font-semibold">{t.role}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
        ))}
      </div>
      <span className="text-[11px] font-black text-amber-600 bg-amber-500/10 px-1.5 py-0.5 rounded-md leading-none">
        {t.rating || "5.0"}
      </span>
    </div>
    <p className="text-slate-600 text-xs leading-relaxed italic">
      &ldquo;{t.text}&rdquo;
    </p>
  </div>
);

export default TestimonialsSection;
