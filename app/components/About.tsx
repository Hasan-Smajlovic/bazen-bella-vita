import {
  Umbrella,
  Waves,
  Thermometer,
  Car,
  ShowerHead,
  Clock,
  Wine,
  Armchair,
} from "lucide-react";

const amenities = [
  { icon: Armchair, label: "Ležaljke" },
  { icon: Umbrella, label: "Suncobrani" },
  { icon: Wine, label: "Pool bar" },
  { icon: ShowerHead, label: "Tuševi" },
  { icon: Car, label: "Parking" },
  { icon: Clock, label: "Svlačionice" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            O nama
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Vaša oaza za <span className="text-gradient">opuštanje</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Naš bazen pruža savršen bijeg od svakodnevice. Kristalno čista voda,
            udobne ležaljke i opuštajuća atmosfera čine idealno mjesto za vaš
            odmor.
          </p>
        </div>

        {/* Info cards  */} 
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Waves className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Dimenzije bazena
            </h3>
            <p className="text-muted-foreground">
              25m × 12m olimpijski bazen + dječiji bazen
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Thermometer className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Temperatura vode
            </h3>
            <p className="text-muted-foreground">
              26°C – 28°C tokom cijele sezone
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-glow transition-shadow duration-500">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              Radno vrijeme
            </h3>
            <p className="text-muted-foreground">
              Svakim danom 08:00 – 20:00
            </p>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <h3 className="font-heading font-semibold text-foreground text-xl mb-8 text-center">
            Sadržaji
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted transition-colors duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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
