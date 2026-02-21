import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, CalendarDays } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  guests: string;
  offer: string;
  message: string;
}

const Reservation = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    guests: "",
    offer: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !form.name || !form.phone || !form.email || !form.guests || !form.offer)
      return;
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="reservation" className="section-padding water-shimmer">
        <div className="container mx-auto max-w-lg">
          <div className="bg-card rounded-3xl p-10 shadow-card text-center animate-fade-in-up">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Rezervacija potvrđena!
            </h2>
            <div className="space-y-2 text-muted-foreground mb-6 text-left">
              <p><strong>Ime:</strong> {form.name}</p>
              <p><strong>Datum:</strong> {date?.toLocaleDateString("bs-BA")}</p>
              <p><strong>Broj osoba:</strong> {form.guests}</p>
              <p><strong>Paket:</strong> {form.offer}</p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground">
                💰 Plaćanje se vrši po dolasku. Vidimo se!
              </p>
            </div>
            <Button
              variant="default"
              className="mt-6 rounded-full"
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", email: "", guests: "", offer: "", message: "" });
                setDate(undefined);
              }}
            >
              Nova rezervacija
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="section-padding water-shimmer">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Rezervacija
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Rezervišite svoj <span className="text-gradient">termin</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Odaberite datum i popunite formu za rezervaciju.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-semibold text-foreground">
                Odaberite datum
              </h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              className="pointer-events-auto rounded-xl"
            />
            {date && (
              <p className="mt-4 text-sm text-primary font-medium">
                Odabrano: {date.toLocaleDateString("bs-BA")}
              </p>
            )}
            {!date && (
              <p className="mt-4 text-sm text-muted-foreground">
                Molimo odaberite slobodan datum.
              </p>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-6 md:p-8 shadow-card space-y-5"
          >
            <div>
              <Label htmlFor="name">Ime i prezime *</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Vaše ime i prezime"
                required
                className="rounded-xl mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+387..."
                  required
                  className="rounded-xl mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="vaš@email.com"
                  required
                  className="rounded-xl mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guests">Broj osoba *</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={(e) => updateField("guests", e.target.value)}
                  placeholder="1"
                  required
                  className="rounded-xl mt-1"
                />
              </div>
              <div>
                <Label>Tip ponude *</Label>
                <Select
                  value={form.offer}
                  onValueChange={(v) => updateField("offer", v)}
                  required
                >
                  <SelectTrigger className="rounded-xl mt-1">
                    <SelectValue placeholder="Odaberite" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cjelodnevna karta">
                      Cjelodnevna karta
                    </SelectItem>
                    <SelectItem value="Vikend Relax Paket">
                      Vikend Relax Paket
                    </SelectItem>
                    <SelectItem value="Apartman + Pool Paket">
                      Apartman + Pool Paket
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Poruka (opciono)</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Dodatne napomene..."
                rows={3}
                className="rounded-xl mt-1"
              />
            </div>
            <Button
              type="submit"
              variant="accent"
              className="w-full rounded-full py-6 text-base"
              disabled={!date}
            >
              Potvrdi rezervaciju
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Plaćanje se vrši po dolasku. Nema online plaćanja.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
