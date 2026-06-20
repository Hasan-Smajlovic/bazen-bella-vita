import { useState, useEffect, type ComponentType, type SVGProps } from "react";
import {
  Umbrella,
  Waves,
  Thermometer,
  Car,
  ShowerHead,
  Clock,
  Wine,
  Armchair,
  BedDouble,
  Wifi,
} from "lucide-react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Amenity = {
  icon: IconType;
  label: string;
  desc: string;
};

const amenities: Amenity[] = [
  {
    icon: Armchair as IconType,
    label: "Ležaljke",
    desc: "Udobne ležaljke uz bazen",
  },
  {
    icon: Umbrella as IconType,
    label: "Suncobrani",
    desc: "Suncobrani za hladovinu",
  },
  {
    icon: Wine as IconType,
    label: "Pool bar",
    desc: "Pića i osvježenja pored bazena",
  },
  {
    icon: ShowerHead as IconType,
    label: "Tuševi",
    desc: "Vanjski tuševi za osvježenje",
  },
  {
    icon: Car as IconType,
    label: "Parking",
    desc: "Besplatan parking za goste",
  },
  {
    icon: Clock as IconType,
    label: "Svlačionice",
    desc: "Prostorne svlačionice",
  },
  {
    icon: BedDouble as IconType,
    label: "Apartmani",
    desc: "Komforni apartmani na lokaciji",
  },
  { icon: Wifi as IconType, label: "Wi‑Fi", desc: "Brzi besplatni internet" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            O nama
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Vaša oaza za <span className="text-gradient">opuštanje</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Naš bazen i apartmani pružaju savršen bijeg od svakodnevice.
            Kristalno čista voda, udobne ležaljke, prelijepi apartmani i
            opuštajuća atmosfera čine idealno mjesto za vaš odmor.
          </p>
        </div>

        {/* Info cards  */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Waves className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Dimenzije bazena
            </h3>
            <p className="text-muted-foreground">
              800 x 600cm, dubina do 1.6m, idealno za plivanje i opuštanje.
              Standardni porodični bazen.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Thermometer className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Temperatura vode
            </h3>
            <p className="text-muted-foreground">
              22°C – 24°C tokom cijele sezone
            </p>
          </div>
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Radno vrijeme
            </h3>
            <p className="text-muted-foreground">Svakim danom 09:00 – 23:00</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-card">
          <h3 className="font-heading font-semibold text-foreground text-xl mb-8 text-center">
            Sadržaji i apartmani
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mx-auto">
            {amenities.map((item) => {
              return (
                <div
                  key={item.label}
                  role="listitem"
                  className="p-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-[20%] flex justify-center"
                >
                  <FlipCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// FlipCard component: click to flip and show description (mobile-friendly)
function FlipCard({ item }: { item: Amenity }) {
  const [flipped, setFlipped] = useState(false);
  const [enabled, setEnabled] = useState(false); // enabled = flip allowed (small screens)

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("matchMedia" in window)) {
      // JSDOM/testing environment doesn't implement matchMedia — disable flip
      setEnabled(false);
      return;
    }
    const mq: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      const isMdUp = e.matches;
      setEnabled(!isMdUp);
      if (isMdUp) setFlipped(false);
    };

    // initial state
    setEnabled(!mq.matches);
    if (mq.matches) setFlipped(false);

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  const Front = (
    <div className="flex flex-col items-center justify-center gap-2 p-3 sm:p-4 rounded-xl hover:bg-muted transition-colors duration-300 group w-full">
      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-accent transition-colors duration-300" />
      <span className="text-sm sm:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {item.label}
      </span>
      {/* desktop description stays visible */}
      <p className="hidden md:block text-xs text-muted-foreground mt-1 text-center">
        {item.desc}
      </p>
    </div>
  );

  const Back = (
    <div className="flex items-center justify-center p-4 rounded-xl bg-card w-full">
      <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
    </div>
  );

  if (!enabled) {
    // Desktop: render non-interactive front (desktop already shows description)
    return <div className="w-full">{Front}</div>;
  }

  return (
    <div className="w-full [perspective:900px]">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="w-full"
      >
        <div
          className={`w-full [transform-style:preserve-3d] transition-transform duration-500 ${
            flipped
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          }`}
        >
          <div className="relative [backface-visibility:hidden]">{Front}</div>
          <div className="absolute inset-0 md:hidden flex items-center justify-center h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {Back}
          </div>
        </div>
      </button>
    </div>
  );
}

export default About;
