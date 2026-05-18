import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-7 h-7" />
              <span className="text-xl font-bold font-heading">
                Bazen Bella Vita Apartmani
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Vaša oaza za odmor i opuštanje. Kristalno čista voda i nezaboravno
              ljeto.
            </p>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Radno vrijeme</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Ponedjeljak – Petak: 08:00 – 20:00</li>
              <li>Subota – Nedjelja: 07:00 – 21:00</li>
              <li className="text-accent font-medium">
                Sezona: Juni – Septembar
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-foreground/40" />
                +387 36 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-foreground/40" />
                info@bellavita.ba
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-foreground/40" />
                Ulica bazena bb, 88000 Mostar
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                title="facebook"
                href="https://www.facebook.com/profile.php?id=61579574523477"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                title="instagram"
                href="https://www.instagram.com/bazenbellavita/"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Bazen Bella Vita. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
