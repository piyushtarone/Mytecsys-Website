import React from "react";

interface NewsBrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
  filter?: string;
  isDarkBox?: boolean;
}

const newsBrands: NewsBrandItem[] = [
  { name: "Lokmat", src: "/news-logos/lokmat.jpg", width: 140, height: 38 },
  { name: "Economics Times", src: "/news-logos/economic_times.svg", width: 160, height: 14 },
  { name: "News on Air", src: "/news-logos/news_on_air.png", width: 55, height: 48 },
  { name: "Nagpur Today", src: "/news-logos/nagpur_today.png", width: 150, height: 31 },
  { name: "The Hindu", src: "/news-logos/the_hindu.svg", width: 150, height: 18 },
  { name: "Hitwada", src: "/news-logos/hitavada.png", width: 150, height: 17 },
  { name: "ETV", src: "/news-logos/etv.svg", width: 40, height: 40 },
  { name: "Times of India", src: "/news-logos/times_of_india.svg", width: 180, height: 13 },
  { name: "Live Nagpur", src: "/news-logos/live_nagpur.png", width: 62, height: 40 },
  { name: "Free Press Journal", src: "/news-logos/free_press_journal.svg", width: 150, height: 32 }
];

const NewsMarqueeSection = () => {
  return (
    <section className="pt-[60px] pb-[60px] bg-transparent overflow-hidden relative z-20">
      {/* Floating Accent Particles */}
      <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-blue-500 rounded-full blur-[1px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-[12%] w-3 h-3 bg-blue-400 rounded-full blur-[2px] opacity-30 animate-pulse" />
      <div className="absolute top-1/4 right-[30%] w-1.5 h-1.5 bg-blue-600 rounded-full opacity-20" />

      <div className="container mx-auto max-w-7xl px-2 md:px-4 mb-10 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-tech font-bold text-[32px] tracking-normal text-center drop-shadow-sm">
            Media Coverage
          </h2>
          <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
            (News & Media)
          </p>
          <div className="w-14 h-1.5 bg-blue-600 mt-5 rounded-full" />
        </div>
      </div>

      {/* Brand Slider (Marquee) */}
      <div className="relative flex items-center overflow-hidden group">
        <div className="flex animate-marquee py-6 whitespace-nowrap items-center will-change-transform" style={{ animationDuration: "35s" }}>
          {/* First Set */}
          <div className="flex gap-20 items-center pr-20">
            {newsBrands.map((brand, index) => (
              <div
                key={`n1-${index}`}
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                  alt={brand.name}
                  style={{
                    height: `${brand.height}px`,
                    width: `${brand.width}px`,
                    filter: brand.filter || undefined
                  }}
                  className="object-contain shrink-0"
                />
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate) */}
          <div className="flex gap-20 items-center pr-20">
            {newsBrands.map((brand, index) => (
              <div
                key={`n2-${index}`}
                className="flex items-center group/item cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${brand.src}`}
                  alt={brand.name}
                  style={{
                    height: `${brand.height}px`,
                    width: `${brand.width}px`,
                    filter: brand.filter || undefined
                  }}
                  className="object-contain shrink-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default NewsMarqueeSection;
