import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, X, Play } from "lucide-react";
import gallery1 from "@/assets/slika-1.jpg";
import gallery2 from "@/assets/slika-2.jpg";
import gallery3 from "@/assets/slika-3.jpg";
import gallery4 from "@/assets/slika-4.jpg";
import gallery5 from "@/assets/slika-5.jpg";
import gallery6 from "@/assets/slika-6.jpg";
import gallery7 from "@/assets/slika-7.jpg";
import gallery8 from "@/assets/slika-8.jpg";
import gallery9 from "@/assets/slika-9.jpg";
import gallery10 from "@/assets/slika-10-nocni.jpg";
import gallery11 from "@/assets/slika-11.jpg";
import gallery12 from "@/assets/slika-12.jpg";
import gallery13 from "@/assets/slika-13.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";
import video4 from "@/assets/video-4.mp4";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumb: string;
  alt: string;
};

const mediaItems: MediaItem[] = [
  // Videos first (user requested video1-3 at the start)
  {
    type: "video",
    src: video1,
    thumb: gallery1,
    alt: "Video: Pogled na bazen",
  },
  {
    type: "video",
    src: video2,
    thumb: gallery2,
    alt: "Video: Bazen i apartmani",
  },
  { type: "video", src: video3, thumb: gallery3, alt: "Video: Apartmani" },
  {
    type: "video",
    src: video4,
    thumb: gallery4,
    alt: "Video: Pool bar",
  },

  // Images
  { type: "image", src: gallery1, thumb: gallery1, alt: "Bazen" },
  {
    type: "image",
    src: gallery2,
    thumb: gallery2,
    alt: "Kristalno čista voda",
  },
  {
    type: "image",
    src: gallery3,
    thumb: gallery3,
    alt: "Apartmani s pogledom na bazen",
  },
  { type: "image", src: gallery4, thumb: gallery4, alt: "Apartmani i bazen" },
  {
    type: "image",
    src: gallery11,
    thumb: gallery11,
    alt: "Pool bar",
  },
  {
    type: "image",
    src: gallery12,
    thumb: gallery12,
    alt: "Rostilj i svlacionica",
  },
  {
    type: "image",
    src: gallery13,
    thumb: gallery13,
    alt: "Pool bar i rostilj",
  },
  { type: "image", src: gallery10, thumb: gallery10, alt: "Noćno kupanje" },
  {
    type: "image",
    src: gallery5,
    thumb: gallery5,
    alt: "Apartmani dnevna soba",
  },
  {
    type: "image",
    src: gallery6,
    thumb: gallery6,
    alt: "Apartmani ulaz",
  },
  {
    type: "image",
    src: gallery7,
    thumb: gallery7,
    alt: "Apartmani spavaća soba",
  },
  {
    type: "image",
    src: gallery8,
    thumb: gallery8,
    alt: "Apartmani dječja soba",
  },
  {
    type: "image",
    src: gallery9,
    thumb: gallery9,
    alt: "Pogled na bazen iz apartmana",
  },
];

const previewImages = mediaItems.slice(0, 8);

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null || !stripRef.current) return;
    const strip = stripRef.current;
    const thumb = strip.children[lightbox] as HTMLElement | undefined;
    if (!thumb) return;
    const scrollTarget =
      thumb.offsetLeft - strip.offsetWidth / 2 + thumb.offsetWidth / 2;
    if (typeof strip.scrollTo === "function") {
      strip.scrollTo({ left: scrollTarget, behavior: "smooth" });
    } else {
      strip.scrollLeft = scrollTarget;
    }
  }, [lightbox]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightbox === null) return;
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  const openLightbox = (index: number) => setLightbox(index);
  const showPrevious = () => {
    setLightbox((current) =>
      current === null
        ? null
        : (current - 1 + mediaItems.length) % mediaItems.length,
    );
  };
  const showNext = () => {
    setLightbox((current) =>
      current === null ? null : (current + 1) % mediaItems.length,
    );
  };

  // Touch swipe to navigate images
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) showNext();
      else showPrevious();
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Galerija
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Pogledajte našu <span className="text-gradient">oazu odmora</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {previewImages.map((item, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              title={`Pogledaj ${item.alt}`}
              aria-label={`Pogledaj ${item.alt}`}
            >
              <img
                src={item.type === "image" ? item.src : item.thumb}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="flex items-center justify-center rounded-full bg-white/10 p-3">
                    <Play className="w-6 h-6 text-white/90" />
                  </div>
                ) : (
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    Pogledaj
                  </span>
                )}
              </div>
            </button>
          ))}

          <button
            onClick={() => openLightbox(0)}
            className="relative group col-span-2 sm:col-span-1 overflow-hidden rounded-2xl aspect-[4/3] border border-accent/70 bg-gradient-to-br from-accent/15 via-background to-primary/15 p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent"
            title="Pogledaj ostale slike"
            aria-label="Pogledaj ostale slike"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-3">
              <p className="text-base sm:text-lg font-bold leading-snug text-foreground">
                Pogledaj ostale slike
              </p>
              <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-accent/15" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex flex-col"
          onClick={() => setLightbox(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar: counter + close */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 shrink-0">
            <p className="text-[10px] sm:text-xs font-semibold text-primary-foreground/55">
              {lightbox + 1} / {mediaItems.length}
            </p>
            <button
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              onClick={() => setLightbox(null)}
              title="Zatvori galeriju"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Media area: flex-1 so it fills all space between top bar and strip */}
          <div className="relative flex flex-1 items-center justify-center px-14 py-2 min-h-0">
            <button
              className="absolute left-2 md:left-6 rounded-full bg-card/15 p-3 text-primary-foreground transition-all duration-300 hover:bg-card/25 hover:scale-105"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Prethodna slika"
              title="Prethodna slika"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {mediaItems[lightbox].type === "image" ? (
              <img
                src={mediaItems[lightbox].src}
                alt={mediaItems[lightbox].alt}
                className="max-w-full max-h-full rounded-2xl object-contain animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={mediaItems[lightbox].src}
                poster={mediaItems[lightbox].thumb}
                className="max-w-full max-h-full rounded-2xl object-contain animate-fade-in-up"
                controls
                autoPlay
                muted
                playsInline
                onClick={(e) => e.stopPropagation()}
                onLoadedMetadata={(event) => {
                  const video = event.currentTarget;
                  try {
                    video.playbackRate = 1;
                  } catch (err) {
                    // ignore
                  }
                }}
              />
            )}

            <button
              className="absolute right-2 md:right-6 rounded-full bg-card/15 p-3 text-primary-foreground transition-all duration-300 hover:bg-card/25 hover:scale-105"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Sljedeća slika"
              title="Sljedeća slika"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail strip: always at the bottom, never overlaps media */}
          <div
            className="shrink-0 w-full bg-foreground/75 px-2 py-2 backdrop-blur-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              ref={stripRef}
              className="lightbox-strip-scroll flex gap-2 overflow-x-auto pb-0.5 pr-1"
            >
              {mediaItems.map((item, index) => (
                <button
                  key={`${item.alt}-${index}`}
                  onClick={() => setLightbox(index)}
                  className={`group relative h-[60px] w-[106px] sm:h-14 sm:w-20 flex-none overflow-hidden rounded-md border transition-all duration-300 hover:-translate-y-0.5 ${
                    index === lightbox
                      ? "border-primary ring-2 ring-primary/70"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  title={item.alt}
                  aria-label={
                    item.type === "video" ? `${item.alt}, video` : item.alt
                  }
                >
                  <img
                    src={item.thumb}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="rounded-full bg-black/50 p-1">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/15" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
