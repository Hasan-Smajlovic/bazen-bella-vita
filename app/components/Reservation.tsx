import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

const itemStyle =
  "flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-500 group hover:shadow-lg hover:scale-105";

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="section-padding bg-background water-shimmer"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Rezervacija
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-8">
            Rezervišite svoje mjesto u našem{" "}
            <span className="text-gradient">raju</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Sve rezervacije se vrše putem DM poruka na Instagramu i Facebooku.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 sm:px-8 py-3 font-medium text-white bg-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61579574523477 ",
                  "_blank",
                )
              }
            >
              <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 sm:px-8 py-3 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/bazenbellavita/",
                  "_blank",
                )
              }
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Instagram
            </Button>
          </div>

          <div className="mt-12">
            <div className="text-center mb-10">
              <MessageCircle className="w-8 h-8 mx-auto text-primary mb-4" />
              <p className="font-heading font-semibold text-foreground text-2xl mb-4">
                Molimo putem poruke navedite sljedeće:
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-border/20 hover:shadow-3xl transition-all duration-500">
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  Osnovne informacije
                </h3>
                <div className="space-y-4">
                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Ime i prezime
                    </span>
                  </div>

                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Broj telefona
                    </span>
                  </div>

                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Broj osoba
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-border/20 hover:shadow-3xl transition-all duration-500">
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  Detalji rezervacije
                </h3>
                <div className="space-y-4">
                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Odabrani paket
                    </span>
                  </div>

                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CalendarDays
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Datum rezervacije
                    </span>
                  </div>

                  <div className={itemStyle}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Clock
                        size={20}
                        className="text-primary group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Trajanje boravka
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl px-6 py-4 border border-accent/20">
              <span className="text-2xl">💰</span>
              <p className="text-foreground font-medium">
                Informacije o plaćanju bit će Vam dostavljene u odgovoru na
                poruku. Hvala na povjerenju i dobro nam došli!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
