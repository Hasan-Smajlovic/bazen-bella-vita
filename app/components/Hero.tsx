import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-pool.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bazen Bella Vita"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-primary-foreground/80 font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Bazen Bella Vita
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground font-heading leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Odmor, opuštanje i savršeno ljeto na jednom mjestu.
        </h1>
        <p
          className="text-primary-foreground/80 text-lg md:text-xl mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Zaronite u kristalno čistu vodu i uživajte u luksuznom okruženju za
          savršen odmor.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="#reservation">
            <Button variant="hero" size="lg" className="px-10 py-6 text-lg">
              Rezerviši termin
            </Button>
          </a>
          <a href="#about">
            <Button
              variant="outline-light"
              size="lg"
              className="px-10 py-6 text-lg"
            >
              Saznaj više
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
