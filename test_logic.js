const MEDIA_ITEMS = [
  {
    id: 101,
    type: "image",
    src: "/events_media/IMG_4599.JPG.jpeg",
    title: "Team Outing",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 119,
    type: "slideshow",
    title: "Celebration Moments",
    spanClasses: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    images: [
      "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (1).jpeg",
      "/events_media/WhatsApp Image 2026-06-02 at 3.42.59 PM (2).jpeg",
    ]
  }
];

const basePath = "";

function getMediaUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}

const GALLERY_ITEMS = MEDIA_ITEMS.flatMap(item => {
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

const item = MEDIA_ITEMS[1];
const matchSrc = item.type === "slideshow" ? getMediaUrl(item.images[0]) : getMediaUrl(item.src);

const idx = GALLERY_ITEMS.findIndex((g) => g.src === matchSrc);
console.log("GALLERY_ITEMS:", GALLERY_ITEMS);
console.log("matchSrc:", matchSrc);
console.log("idx:", idx);
