import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import DnevniImg from "@/assets/slika-1.jpg";
import CjelodnevniImg from "@/assets/slika-2.jpg";
import NocniImg from "@/assets/slika-10-nocni.jpg";

const offers = [
  {
    title: "Dnevni odmor paket",
    description: "Dnevni termin od 11:00 do 18:00 sa svim pogodnostima.",
    priceLines: [
      "Do 6 osoba: 150 KM - Promotivna cijena",
      "Svaka dodatna osoba se naplacuje",
    ],
    childNote: "Djeca do 10 godina: Besplatno",
    badge: "Odmor za dan",
    badgeColor: "bg-primary text-primary-foreground",
    image: DnevniImg,
    features: [
      "Bazen",
      "Parking",
      "Svlačionica",
      "Bar",
      "Roštilj",
      "Ležaljke",
      "Suncobrani",
    ],
  },
  {
    title: "Cjelodnevni odmor paket",
    description: "Cjelodnevni boravak uz nocenje u apartmanima.",
    priceLines: [
      "Do 6 osoba: 250 KM - Promotivna cijena",
      "Max 12 osoba u dva apartmana",
      "Dva apartmana: 400 KM",
    ],

    badge: "Najpopularnija ponuda",
    badgeColor: "bg-accent text-accent-foreground",
    image: CjelodnevniImg,
    features: [
      "Bazen",
      "Parking",
      "Svlačionica",
      "Bar",
      "Roštilj",
      "Ležaljke",
      "Suncobrani",
      "Noćenje u apartmanima",
    ],
    popular: true,
  },
  {
    title: "Nocni odmor paket",
    description: "Nocni termin od 19:00 do 23:00.",
    priceLines: [
      "Nocni termin: 100 KM - Promotivna cijena",
      "Svaki dodatni sat se dodatno naplacuje",
    ],
    childNote: "Djeca do 10 godina: Besplatno",
    badge: "Odmor za noć",
    badgeColor: "bg-secondary text-secondary-foreground",
    image: NocniImg,
    features: [
      "Bazen",
      "Parking",
      "Svlačionica",
      "Bar",
      "Roštilj",
      "Ležaljke",
      "Ambijentalna rasvjeta",
    ],
  },
];

const Offers = () => {
  const renderPriceLine = (line: string, isPopular?: boolean) => {
    const promoText = "Promotivna cijena";
    const promoIndex = line.indexOf(promoText);

    if (promoIndex === -1) {
      return line;
    }

    const before = line.slice(0, promoIndex);
    const after = line.slice(promoIndex + promoText.length);
    const promoClass = isPopular ? "text-accent" : "text-primary";

    return (
      <>
        {before}
        <span className={promoClass}>{promoText}</span>
        {after}
      </>
    );
  };

  return (
    <section id="offers" className="section-padding water-shimmer">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Ponude
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Odaberite svoju <span className="text-gradient">avanturu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Pogledajte naše pakete i pronađite savršenu opciju za sebe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                offer.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <Badge
                  className={`absolute top-4 right-4 ${offer.badgeColor} rounded-full px-3 py-1 text-xs font-semibold border-0`}
                >
                  {offer.popular ? (
                    <span className="inline-flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5" />
                      {offer.badge}
                    </span>
                  ) : (
                    offer.badge
                  )}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {offer.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {offer.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-auto">
                  <div className="space-y-2 mb-4">
                    {offer.priceLines.map((line) => (
                      <p
                        key={line}
                        className="text-sm text-foreground font-semibold"
                      >
                        {renderPriceLine(line, offer.popular)}
                      </p>
                    ))}
                    {offer.childNote && (
                      <p className="text-sm text-muted-foreground">
                        {offer.childNote}
                      </p>
                    )}
                  </div>
                  <a href="#reservation">
                    <Button
                      variant={offer.popular ? "accent" : "default"}
                      className="w-full rounded-full"
                    >
                      Rezerviši
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card/60 border border-border/60 rounded-3xl p-6 md:p-8 text-center">
          <p className="text-foreground font-heading font-semibold text-xl mb-2">
            Paket po želji
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Ako vam ne odgovara neki od ovih paketa, cijene nisu fiksne i uvijek
            smo otvoreni za dogovor. U slučaju da želite više dana, više osoba
            ili dodatne sate, rado ćemo prilagoditi ponudu po vašoj želji.
          </p>
          <a href="#reservation">
            <Button variant="accent" className="rounded-full">
              Napravite svoj paket
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offers;
