import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Location = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Lokacija
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Gdje nas <span className="text-gradient">pronaći</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-card h-80 md:h-auto min-h-[320px]">
            <iframe
              title="Lokacija bazena"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d20715.21336074374!2d18.16065523476563!3d44.76348010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ1JzQ4LjUiTiAxOMKwMTAnNTIuNSJF!5e0!3m2!1sbs!2sba!4v1771831658184!5m2!1sbs!2sba"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card flex flex-col justify-center">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
              Kontakt informacije
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresa</p>
                  <p className="text-muted-foreground text-sm">
                    Ulica bazena bb, 88000 Mostar, BiH
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <p className="text-muted-foreground text-sm">+387 36 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">info@aquarelax.ba</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              <a 
                title="facebook"
                href="https://www.facebook.com/profile.php?id=61579574523477"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                title="home"
                href="https://www.instagram.com/bazenbellavita/"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <a href="https://maps.app.goo.gl/ATi9AVwXTrKEFuGy5" target="_blank" rel="noopener noreferrer" className="mt-8">
              <Button variant="default" className="rounded-full">
                <MapPin className="w-4 h-4 mr-2" />
                Pronađi nas
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;






