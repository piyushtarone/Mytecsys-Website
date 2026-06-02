"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

type MediaType = "image" | "video";

interface MediaItem {
  id: number;
  type: MediaType;
  src?: string; // For images and local videos
  link?: string; // Optional external link to open on click
  thumbnail?: string;
  title: string;
  spanClasses: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "/video1.mp4",
    link: "https://youtu.be/p7wrWQA5idY",
    thumbnail: "https://img.youtube.com/vi/p7wrWQA5idY/maxresdefault.jpg",
    title: "Company Hackathon",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 10,
    type: "video",
    src: "/shorts2.mp4",
    link: "https://youtu.be/H9WtAJjKyqE",
    thumbnail: "https://img.youtube.com/vi/H9WtAJjKyqE/hqdefault.jpg",
    title: "Independence Day Celebration",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 3,
    type: "video",
    src: "/shorts1.mp4",
    link: "https://youtu.be/GhOb1fvIpoU",
    thumbnail: "https://img.youtube.com/vi/GhOb1fvIpoU/hqdefault.jpg",
    title: "Team Brainstorming",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    title: "Company Retreat 2023",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    title: "AI Summit Seminar",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Strategy Planning",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 11,
    type: "video",
    src: "/shorts3.mp4",
    link: "https://youtu.be/CZevvxTgSB4",
    thumbnail: "https://img.youtube.com/vi/CZevvxTgSB4/hqdefault.jpg",
    title: "Ganesh Chaturthi Pooja",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    title: "Annual Awards Night",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 5,
    type: "video",
    src: "/video1.mp4",
    link: "https://youtu.be/p7wrWQA5idY",
    thumbnail: "https://img.youtube.com/vi/p7wrWQA5idY/hqdefault.jpg",
    title: "Developer Code Sprint",
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-2 row-span-1",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    title: "Client Pitch & Demo",
    spanClasses: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 9,
    type: "video",
    src: "/video1.mp4",
    link: "https://youtu.be/p7wrWQA5idY",
    thumbnail: "https://img.youtube.com/vi/p7wrWQA5idY/maxresdefault.jpg",
    title: "Hackathon Finals",
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-4 row-span-1",
  },
];

function VideoTile({ item }: { item: MediaItem }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <>
      {/* Fallback Thumbnail Image */}
      <Image
        src={item.thumbnail!}
        alt={item.title}
        fill
        className={`object-cover transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-0" : "opacity-100"} z-0`}
      />

      {/* HTML5 Video acting like a GIF */}
      <video
        ref={videoRef}
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover group-hover/item:scale-[1.05] transition-transform duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadedData={() => {
          setIsLoaded(true);
          videoRef.current?.play().catch((e) => console.log("Autoplay prevented:", e));
        }}
      />
    </>
  );
}

export function EventsGrid() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

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
                  setSelectedMedia(item);
                }
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src!}
                  alt={item.title}
                  fill
                  className="object-cover group-hover/item:scale-[1.05] transition-transform duration-700 ease-in-out cursor-pointer"
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

      {/* Lightbox / Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors backdrop-blur-md z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  autoPlay
                  controls
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl bg-black"
                />
              )}
              
              {/* Media Title in Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                <h3 className="text-white text-2xl font-bold tracking-normal font-tech drop-shadow-lg">
                  {selectedMedia.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
