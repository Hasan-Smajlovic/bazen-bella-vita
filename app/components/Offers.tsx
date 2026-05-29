import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gallery1 from "@/assets/slika-1.jpg";
import gallery4 from "@/assets/slika-2.jpg";
import offerApartment from "@/assets/slika-3.jpg";

const offers = [
  {
    title: "Cjelodnevna karta",
    description: "Pristup bazenu cijeli dan + ležaljka i suncobran.",
    priceAdult: "15 KM",
    priceChild: "8 KM",
    badge: "Porodično",
    badgeColor: "bg-primary text-primary-foreground",
    image: gallery1,
    features: ["Pristup bazenu", "Ležaljka", "Suncobran", "Tuš"],
  },
  {
    title: "Vikend Relax Paket",
    description:
      "2-dnevni pristup bazenu sa svim pogodnostima po sniženoj cijeni.",
    priceAdult: "25 KM",
    priceChild: "14 KM",
    oldPrice: "30 KM",
    badge: "Najpopularnije",
    badgeColor: "bg-accent text-accent-foreground",
    image: gallery4,
    features: ["2 dana pristupa", "Ležaljka", "Suncobran", "Pool bar popust"],
    popular: true,
  },
  {
    title: "Apartman + Pool Paket",
    description:
      "2–5 dana boravka u luksuznom apartmanu + neograničen pristup bazenu.",
    priceAdult: "120 KM",
    priceChild: null,
    oldPrice: "160 KM",
    badge: "Akcija",
    badgeColor: "bg-secondary text-secondary-foreground",
    image: offerApartment,
    features: ["Apartman smještaj", "Neograničen bazen", "Parking", "Doručak"],
  },
];

const Offers = () => {
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
                  {offer.badge}
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
                  <div className="flex items-end gap-2 mb-4">
                    {offer.oldPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        {offer.oldPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-foreground">
                      {offer.priceAdult}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / odrasli
                    </span>
                  </div>
                  {offer.priceChild && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Djeca: {offer.priceChild}
                    </p>
                  )}
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
      </div>
    </section>
  );
};

export default Offers;
