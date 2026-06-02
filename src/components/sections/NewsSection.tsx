"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import GallerySection from "./GallerySection";

const newsItems = [
  {
    id: 1,
    title: "Garuda Drushti Takes Flight",
    image: "/News/2a1384a6ed53571e2c4a3e14edc3bf888dde118b.jpg",
    date: "Lokmat : May 28, 2025",
  },
  {
    id: 2,
    title: "Nagpur Police Bolster Social Media Monitoring",
    image: "/News/5385e99218c7bf42b19366687b4c7f5590e67bf0.jpg",
    date: "The Hitwada Times : May 28, 2025",
  },
  {
    id: 3,
    title: "Driving Growth and Tech Evolution with Bharti Web",
    image: "/News/5d2a2f96f7c45e1914197f0ff784fdf83cd423a3.jpg",
    date: "The Hitwada Times :May 28, 2025",
  },
  {
    id: 4,
    title: "Next-Gen Software Integrations Highlighted in Nagpur Union",
    image: "/News/c4fd77e3e3b3adb76ab25d15e1c83990da68e532.jpg",
    date: "Lokmat : May 28, 2025",
  },
];

// Map news items to gallery-compatible format
const newsGalleryImages = newsItems.map((item) => ({
  src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.image}`,
  alt: item.title,
}));

const NewsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Auto-play interval: 5 seconds
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(intervalId);
    };
  }, [api]);

  const openGallery = (newsIndex: number) => {
    setGalleryIndex(newsIndex);
    setGalleryOpen(true);
  };

  const NewsCard = ({ item, title, newsIndex }: { item: any; title?: string; newsIndex: number }) => (
    <div
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-3 h-full transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group flex flex-col cursor-pointer"
      onClick={() => openGallery(newsIndex)}
    >
      <div className="relative flex-1 rounded-[1.5rem] overflow-hidden bg-slate-50 border border-slate-50 min-h-[200px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.image}`}
          alt={item.title}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {title && (
        <div className="p-4 flex flex-col gap-1">
          {item.date && (
            <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-0.5">
              {item.date}
            </span>
          )}
          <h3 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
      )}
    </div>
  );

  return (
    <>
      <section id="news" className="pt-[120px] pb-[60px] px-2 md:px-6 relative z-10 overflow-hidden bg-slate-50/50 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[#1a183b] font-sans font-black text-[28px] md:text-[32px] tracking-tight text-center">
              Featured News
            </h2>
            <p className="text-slate-500 font-bold text-[9px] md:text-[11px] mt-4 uppercase tracking-[0.3em] opacity-70 text-center">
              (Blogs &amp; News)
            </p>

          </div>

          <div className="relative max-w-7xl mx-auto px-0">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-6">

                {/* Slide 1: 70% | 30% */}
                <CarouselItem className="pl-4 basis-full">
                  <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
                    <div className="md:w-[70%] h-full">
                      <NewsCard item={newsItems[0]} title={newsItems[0].title} newsIndex={0} />
                    </div>
                    <div className="md:w-[30%] h-full">
                      <NewsCard item={newsItems[1]} title={newsItems[1].title} newsIndex={1} />
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 2: 50% | 50% */}
                <CarouselItem className="pl-4 basis-full">
                  <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
                    <div className="md:w-[50%] h-full">
                      <NewsCard item={newsItems[2]} title={newsItems[2].title} newsIndex={2} />
                    </div>
                    <div className="md:w-[50%] h-full">
                      <NewsCard item={newsItems[3]} title={newsItems[3].title} newsIndex={3} />
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 3: 40% | 60% */}
                <CarouselItem className="pl-4 basis-full">
                  <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
                    <div className="md:w-[40%] h-full">
                      <NewsCard item={newsItems[0]} title={newsItems[0].title} newsIndex={0} />
                    </div>
                    <div className="md:w-[60%] h-full">
                      <NewsCard item={newsItems[1]} title={newsItems[1].title} newsIndex={1} />
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>

              <CarouselPrevious className="hidden md:flex left-4 h-12 w-12 border-none bg-white shadow-lg hover:bg-blue-50 text-blue-600 transition-all" />
              <CarouselNext className="hidden md:flex right-4 h-12 w-12 border-none bg-white shadow-lg hover:bg-blue-50 text-blue-600 transition-all" />
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-1.5 transition-all duration-300 rounded-full",
                    current === i
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal for News — same gallery view */}
      <GallerySection
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
        customImages={newsGalleryImages}
      />
    </>
  );
};

export default NewsSection;
