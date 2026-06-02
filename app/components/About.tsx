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
} from "lucide-react";

const amenities = [
  { icon: Armchair, label: "Ležaljke" },
  { icon: Umbrella, label: "Suncobrani" },
  { icon: Wine, label: "Pool bar" },
  { icon: ShowerHead, label: "Tuševi" },
  { icon: Car, label: "Parking" },
  { icon: Clock, label: "Svlačionice" },
  { icon: BedDouble, label: "Apartmani" },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-nowrap justify-center gap-4 sm:gap-6 lg:gap-10">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl hover:bg-muted transition-colors duration-300 group"
              >
                <item.icon className="w-8 h-8 sm:w-9 sm:h-9 text-primary group-hover:text-accent transition-colors duration-300" />
                <span className="text-sm sm:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
