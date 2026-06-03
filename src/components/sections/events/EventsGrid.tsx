"use client";

import React, { useState, useRef, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import GallerySection, { GalleryImage } from "../GallerySection";

type MediaType = "image" | "video" | "slideshow";

interface MediaItem {
  id: number;
  type: MediaType;
  src?: string; // For single image and local videos
  images?: string[]; // For slideshows
  link?: string; // Optional external link to open on click
  thumbnail?: string; // Optional poster image for video
  title: string;
  spanClasses: string;
  objectFit?: "cover" | "contain"; // Allow overriding object-cover for paintings
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 101,
    type: "image",
    src: "/events_media/IMG_4599.JPG.jpeg",
    title: "Team Outing",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 102,
    type: "video",
    src: "/events_media/IMG_6071.MP4",
    thumbnail: "/events_media/IMG_4599.JPG.jpeg",
    title: "Event Highlights",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 103,
    type: "image",
    src: "/events_media/IMG_4600.JPG.jpeg",
    title: "Group Photo",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 104,
    type: "image",
    src: "/events_media/IMG_4610.JPG.jpeg",
    title: "Celebration",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 105,
    type: "slideshow",
    title: "Life at Mytecsys",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
    images: [
      "/events_media/IMG_6105.JPG.jpeg",
      "/events_media/IMG_6106.JPG.jpeg",
      "/events_media/IMG_6109.JPG.jpeg",
    ],
  },
  {
    id: 106,
    type: "video",
    src: "/events_media/IMG_6095.MP4",
    thumbnail: "/events_media/IMG_4610.JPG.jpeg",
    title: "Office Fun",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 107,
    type: "image",
    src: "/events_media/IMG_4611.JPG.jpeg",
    title: "Memories",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 108,
    type: "image",
    src: "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (1).jpeg",
    title: "Special Moments",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 109,
    type: "video",
    src: "/events_media/IMG_6139.MP4",
    thumbnail: "/events_media/IMG_4611.JPG.jpeg",
    title: "Behind the Scenes",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 110,
    type: "image",
    src: "/events_media/IMG_6717.JPG.jpeg",
    title: "Team Lunch",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 111,
    type: "video",
    src: "/events_media/IMG_6074.MP4",
    thumbnail: "/events_media/IMG_6717.JPG.jpeg",
    title: "Project Milestone",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 112,
    type: "image",
    src: "/events_media/IMG_6718.JPG.jpeg",
    title: "Conference",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    objectFit: "contain",
  },
  {
    id: 113,
    type: "slideshow",
    title: "Team Moments",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    objectFit: "contain",
    images: [
      "/events_media/IMG_7009.PNG",
      "/events_media/IMG_7010.PNG",
    ],
  },
  {
    id: 114,
    type: "video",
    src: "/events_media/IMG_6072.MP4",
    thumbnail: "/events_media/IMG_6718.JPG.jpeg",
    title: "Tech Demo",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 115,
    type: "video",
    src: "/events_media/IMG_6138.MP4",
    thumbnail: "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (1).jpeg",
    title: "Team Connect",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 116,
    type: "video",
    src: "/events_media/IMG_6103.MP4",
    thumbnail: "/events_media/IMG_4600.JPG.jpeg",
    title: "Innovation Summit",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 117,
    type: "video",
    src: "/events_media/IMG_5917.MP4",
    thumbnail: "/events_media/IMG_6105.JPG.jpeg",
    title: "Friday Fun",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 118,
    type: "video",
    src: "/events_media/IMG_6075.MP4",
    thumbnail: "/events_media/IMG_6106.JPG.jpeg",
    title: "Awards & Recognition",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 119,
    type: "slideshow",
    title: "Celebration Moments",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    images: [
      "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (1).jpeg",
      "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (2).jpeg",
      "/events_media/WhatsApp Image 2026-06-02 at 3.43.00 PM (1).jpeg",
      "/events_media/WhatsApp Image 2026-06-02 at 3.43.00 PM (2).jpeg",
      "/events_media/WhatsApp Image 2026-06-02 at 3.43.01 PM (1).jpeg",
    ]
  }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function getMediaUrl(path?: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}

const GALLERY_ITEMS: GalleryImage[] = MEDIA_ITEMS.flatMap(item => {
  if (item.type === "slideshow" && item.images) {
    return item.images.map((src, idx) => ({
      type: "image",
      src: getMediaUrl(src),
      alt: `${item.title} ${idx + 1}`
    }));
  }
  return [{
    type: item.type === "video" ? "video" : "image",
    src: getMediaUrl(item.src),
    alt: item.title
  }];
});

function SlideshowTile({ item }: { item: MediaItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!item.images || item.images.length === 0) return;
    
    // Cycle image every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.images!.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [item.images]);

  if (!item.images || item.images.length === 0) return null;

  return (
    <div className="relative w-full h-full bg-slate-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <ExportedImage
            src={getMediaUrl(item.images[currentIndex])}
            alt={`${item.title} - ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`${item.objectFit === "contain" ? "object-contain bg-slate-900/50" : "object-cover"} group-hover/item:scale-[1.05] transition-transform duration-700 ease-in-out cursor-pointer`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import { useInView } from "framer-motion";

function VideoTile({ item }: { item: MediaItem }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only trigger when the video comes into the viewport
  const isInView = useInView(containerRef, { margin: "100px", once: false });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      
      // Play if in view, pause if out of view to save resources
      if (isInView) {
        videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
      {/* Fallback Thumbnail Image (Optional if provided) */}
      {item.thumbnail && (
        <ExportedImage
          src={getMediaUrl(item.thumbnail)}
          alt={item.title}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-0" : "opacity-100"} z-0`}
        />
      )}

      {/* HTML5 Video lazy-loaded */}
      {/* Appending #t=0.001 forces the browser to load the first frame as a native thumbnail */}
      <video
        ref={videoRef}
        src={`${getMediaUrl(item.src)}#t=0.001`}
        loop
        muted
        playsInline
        preload="metadata" // Only load the first frame initially
        className="absolute inset-0 w-full h-full object-cover group-hover/item:scale-[1.05] transition-all duration-1000 ease-in-out"
        onLoadedData={() => {
          setIsLoaded(true);
        }}
      />
    </div>
  );
}

export function EventsGrid() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (galleryIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setGalleryIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
      } else if (e.key === "ArrowLeft") {
        setGalleryIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      } else if (e.key === "Escape") {
        setGalleryIndex(null);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const currentGalleryItem = galleryIndex !== null ? GALLERY_ITEMS[galleryIndex] : null;

  return (
    <section className="relative z-10 pb-24 px-4 md:px-6 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        
        {/* Masonry Grid with dense packing */}
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {MEDIA_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden shadow-md border border-white/50 bg-white/30 backdrop-blur-sm group/item ${item.spanClasses}`}
              onClick={() => {
                if (item.type === "video" && item.link) {
                  window.open(item.link, "_blank");
                } else {
                  const matchSrc = item.type === "slideshow" ? item.images![0] : item.src;
                  const idx = GALLERY_ITEMS.findIndex((g) => g.src === matchSrc);
                  setGalleryIndex(idx !== -1 ? idx : 0);
                }
              }}
            >
              {item.type === "slideshow" ? (
                <SlideshowTile item={item} />
              ) : item.type === "image" ? (
                <ExportedImage
                  src={getMediaUrl(item.src)}
                  alt={item.title}
                  fill
                  className={`${item.objectFit === "contain" ? "object-contain bg-slate-900/50" : "object-cover"} group-hover/item:scale-[1.05] transition-transform duration-700 ease-in-out cursor-pointer`}
                />
              ) : (
                <VideoTile item={item} />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-end p-6 text-left pointer-events-none">
                <h3 className="text-white font-bold text-lg md:text-xl font-tech tracking-normal drop-shadow-md transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reusable Premium Gallery Modal */}
      <GallerySection
        isOpen={galleryIndex !== null}
        onClose={() => setGalleryIndex(null)}
        initialIndex={galleryIndex || 0}
        customImages={GALLERY_ITEMS}
      />
    </section>
  );
}
