"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GALLERY_IMAGES = [
  {
    src: "/placeholder.svg",
    alt: "Team collaboration",
    category: "Team",
  },
  {
    src: "/placeholder.svg",
    alt: "Office workspace",
    category: "Office",
  },
  {
    src: "/placeholder.svg",
    alt: "AI lab",
    category: "R&D",
  },
  {
    src: "/placeholder.svg",
    alt: "Event",
    category: "Events",
  },
  {
    src: "/placeholder.svg",
    alt: "Workshop",
    category: "Events",
  },
  {
    src: "/placeholder.svg",
    alt: "Development",
    category: "Team",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  return (
    <section id="gallery" className="relative z-10 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-tech text-3xl md:text-4xl font-bold mb-4">
            Image Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our team, office, and events.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <button
              key={img.alt}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {selectedImage?.alt ?? "Gallery Image"}
            </DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
