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

const reservationItems = [
  { label: "Ime i prezime", icon: Users },
  { label: "Broj telefona", icon: Phone },
  { label: "Broj osoba", icon: Users },
  { label: "Odabrani paket", icon: MessageCircle },
  { label: "Datum rezervacije", icon: CalendarDays },
  { label: "Trajanje boravka", icon: Clock },
];

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="section-padding bg-background water-shimmer"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Rezervacija
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold font-heading text-foreground">
              Rezervišite svoje mjesto u našem{" "}
              <span className="text-gradient">raju</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed">
              Rezervacije primamo putem DM poruka na Instagramu i Facebooku.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
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
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent/20 via-primary/5 to-transparent blur-2xl" />
            <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    U poruci navedite sljedece informacije
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reservationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-border/30 bg-background/60 px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-primary/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">💰</span>
                  <p className="text-foreground font-medium">
                    Info o placanju dobijate u odgovoru na poruku. Dobro nam
                    dosli!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
