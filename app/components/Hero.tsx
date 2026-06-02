import { useEffect, useRef, type ElementRef } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/video-1.mp4";
// import heroVideo1 from "@/assets/video-3.mp4"; ## ubaciti poslije kad dobijem landscape video
import heroPoster from "@/assets/slika-1.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const videoARef = useRef<ElementRef<"video"> | null>(null);

  useEffect(() => {
    if (videoARef.current) {
      videoARef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoARef}
          src={heroVideo}
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover hero-video-fade"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedMetadata={() => {
            if (videoARef.current) {
              videoARef.current.playbackRate = 1.5;
            }
          }}
        />
        {/* <video   ubaciti poslije kad dobijem landscape video
          ref={videoBRef}
          src={heroVideo1}
          poster={heroPoster}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            activeVideo === "b" ? "opacity-100" : "opacity-0"`
          }`}
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onEnded={handleEnded}
          onLoadedMetadata={() => {
            if (videoBRef.current) {
              videoBRef.current.playbackRate = 1.5;
            }
          }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary-foreground/85 font-medium tracking-[0.35em] uppercase text-xs sm:text-sm mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] animate-fade-in-up">
          Bazen Bella Vita Apartmani
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground font-heading leading-tight mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] animate-fade-in-up">
          Odmor, opuštanje i savršeno ljeto na jednom mjestu.
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)] animate-fade-in-up">
          Zaronite u kristalno čistu vodu i uživajte u luksuznom okruženju za
          savršen odmor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a href="#reservation">
            <Button
              variant="reservation"
              size="lg"
              className="px-8 py-5 text-base sm:px-10 sm:py-6 sm:text-lg"
            >
              Rezerviši termin
            </Button>
          </a>
          <a href="#about">
            <Button
              variant="outline-light"
              size="lg"
              className="px-8 py-5 text-base sm:px-10 sm:py-6 sm:text-lg"
            >
              Saznaj više
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Skroluj do sekcije O bazenu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
