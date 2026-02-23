import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, CalendarDays, Minus, Plus, Users, Clock, AlertTriangle, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   adults: number;
//   children: number;
//   offer: string;
//   days: number;
//   message: string;
// }

// const offerDetails: Record<string, { label: string; adultPrice: number; childPrice: number | null; minDays: number; maxDays: number; perDay: boolean; description: string }> = {
//   "cjelodnevna": {
//     label: "Cjelodnevna karta",
//     adultPrice: 15,
//     childPrice: 8,
//     minDays: 1,
//     maxDays: 1,
//     perDay: false,
//     description: "Pristup bazenu cijeli dan + ležaljka i suncobran.",
//   },
//   "vikend": {
//     label: "Vikend Relax Paket",
//     adultPrice: 12,
//     childPrice: 7,
//     minDays: 2,
//     maxDays: 3,
//     perDay: true,
//     description: "Višednevni pristup bazenu sa svim pogodnostima po sniženoj cijeni.",
//   },
//   "apartman": {
//     label: "Apartman + Pool Paket",
//     adultPrice: 60,
//     childPrice: null,
//     minDays: 2,
//     maxDays: 7,
//     perDay: true,
//     description: "Boravak u luksuznom apartmanu + neograničen pristup bazenu.",
//   },
// };

// const RESERVED_DATES_KEY = "bellavita_reserved_dates";

// function getReservedDates(): Date[] {
//   try {
//     const stored = localStorage.getItem(RESERVED_DATES_KEY);
//     if (!stored) return [];
//     const parsed: string[] = JSON.parse(stored);
//     return parsed.map((d) => new Date(d));
//   } catch {
//     return [];
//   }
// }

// function saveReservedDates(dates: Date[]) {
//   const strings = dates.map((d) => d.toISOString());
//   localStorage.setItem(RESERVED_DATES_KEY, JSON.stringify(strings));
// }

// function isSameDay(a: Date, b: Date) {
//   return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
// }

// function getDateRange(start: Date, days: number): Date[] {
//   const range: Date[] = [];
//   for (let i = 0; i < days; i++) {
//     const d = new Date(start);
//     d.setDate(d.getDate() + i);
//     range.push(d);
//   }
//   return range;
// }

// const CalendarLegend = () => (
//   <div className="flex flex-wrap gap-4 justify-center mb-4 text-xs font-medium">
//     <div className="flex items-center gap-1.5">
//       <span className="w-4 h-4 rounded-full bg-red-500/80 inline-block border border-red-600" />
//       <span className="text-muted-foreground">Rezervisano</span>
//     </div>
//     <div className="flex items-center gap-1.5">
//       <span className="w-4 h-4 rounded-full bg-orange-300 inline-block border border-orange-400" />
//       <span className="text-muted-foreground">Odabrano</span>
//     </div>
//     <div className="flex items-center gap-1.5">
//       <span className="w-4 h-4 rounded-full bg-emerald-400 inline-block border border-emerald-500" />
//       <span className="text-muted-foreground">Potvrđeno</span>
//     </div>
//   </div>
// );

const Reservation = () => {
//   const [startDate, setStartDate] = useState<Date | undefined>();
//   const [submitted, setSubmitted] = useState(false);
//   const [justConfirmed, setJustConfirmed] = useState<Date[]>([]);
//   const [reservedDates, setReservedDates] = useState<Date[]>(getReservedDates);
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     phone: "",
//     email: "",
//     adults: 1,
//     children: 0,
//     offer: "",
//     days: 1,
//     message: "",
//   });

//   const selectedOffer = form.offer ? offerDetails[form.offer] : null;

//   // Compute selected range from start date + days
//   const selectedRange = useMemo(() => {
//     if (!startDate) return [];
//     return getDateRange(startDate, form.days);
//   }, [startDate, form.days]);

//   // Check if any selected date overlaps reserved
//   const hasConflict = useMemo(() => {
//     return selectedRange.some((sd) => reservedDates.some((rd) => isSameDay(sd, rd)));
//   }, [selectedRange, reservedDates]);

//   const calculateTotal = () => {
//     if (!selectedOffer) return 0;
//     const adultTotal = selectedOffer.adultPrice * form.adults * (selectedOffer.perDay ? form.days : 1);
//     const childTotal = selectedOffer.childPrice ? selectedOffer.childPrice * form.children * (selectedOffer.perDay ? form.days : 1) : 0;
//     return adultTotal + childTotal;
//   };

//   const handleOfferChange = (value: string) => {
//     const offer = offerDetails[value];
//     setForm((prev) => ({
//       ...prev,
//       offer: value,
//       days: offer ? offer.minDays : 1,
//     }));
//   };

//   const handleDateSelect = (d: Date | undefined) => {
//     if (!d) return;
//     // Check if clicking on a reserved date
//     if (reservedDates.some((rd) => isSameDay(rd, d))) {
//       toast.error("Ovaj datum je već rezervisan!", {
//         description: "Molimo odaberite drugi slobodan datum.",
//         icon: <AlertTriangle className="w-5 h-5" />,
//       });
//       return;
//     }
//     setStartDate(d);
//     setJustConfirmed([]);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!startDate || !form.name || !form.phone || !form.email || !form.offer || form.adults < 1) return;

//     if (hasConflict) {
//       toast.error("Neki od odabranih dana su već rezervisani!", {
//         description: "Molimo odaberite druge datume ili smanjite broj dana.",
//       });
//       return;
//     }

//     // Mark selected range as confirmed (green)
//     setJustConfirmed([...selectedRange]);

//     // Persist to reserved dates
//     const newReserved = [...reservedDates, ...selectedRange];
//     setReservedDates(newReserved);
//     saveReservedDates(newReserved);

//     setSubmitted(true);
//   };

//   const adjustCount = (field: "adults" | "children" | "days", delta: number) => {
//     setForm((prev) => {
//       let newVal = prev[field] + delta;
//       if (field === "adults") newVal = Math.max(1, Math.min(20, newVal));
//       if (field === "children") newVal = Math.max(0, Math.min(20, newVal));
//       if (field === "days" && selectedOffer) newVal = Math.max(selectedOffer.minDays, Math.min(selectedOffer.maxDays, newVal));
//       return { ...prev, [field]: newVal };
//     });
//   };

//   // Custom modifiers for the calendar
//   const modifiers = useMemo(() => ({
//     reserved: reservedDates,
//     selectedRange: selectedRange.filter((sd) => !reservedDates.some((rd) => isSameDay(sd, rd))),
//     confirmed: justConfirmed,
//   }), [reservedDates, selectedRange, justConfirmed]);

//   const modifiersStyles = {
//     reserved: {
//       backgroundColor: "rgba(239, 68, 68, 0.7)",
//       color: "white",
//       borderRadius: "9999px",
//       cursor: "not-allowed",
//     },
//     selectedRange: {
//       backgroundColor: "rgba(251, 191, 36, 0.5)",
//       color: "#92400e",
//       borderRadius: "9999px",
//     },
//     confirmed: {
//       backgroundColor: "rgba(52, 211, 153, 0.7)",
//       color: "white",
//       borderRadius: "9999px",
//     },
//   };

//   if (submitted) {
//     return (
//       <section id="reservation" className="section-padding water-shimmer">
//         <div className="container mx-auto max-w-lg">
//           <div className="bg-card rounded-3xl p-10 shadow-card text-center animate-fade-in-up">
//             <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
//             <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
//               Rezervacija potvrđena!
//             </h2>
//             <div className="space-y-2 text-muted-foreground mb-6 text-left">
//               <p><strong>Ime:</strong> {form.name}</p>
//               <p><strong>Datum početka:</strong> {startDate?.toLocaleDateString("bs-BA")}</p>
//               {form.days > 1 && <p><strong>Broj dana:</strong> {form.days}</p>}
//               <p><strong>Odrasli:</strong> {form.adults}</p>
//               {form.children > 0 && <p><strong>Djeca:</strong> {form.children}</p>}
//               <p><strong>Paket:</strong> {selectedOffer?.label}</p>
//               <p className="text-lg font-bold text-foreground mt-4"><strong>Ukupno:</strong> {calculateTotal()} KM</p>
//             </div>
//             <div className="bg-muted rounded-xl p-4">
//               <p className="text-sm text-muted-foreground">
//                 💰 Plaćanje se vrši po dolasku. Vidimo se!
//               </p>
//             </div>
//             <Button
//               variant="default"
//               className="mt-6 rounded-full"
//               onClick={() => {
//                 setSubmitted(false);
//                 setJustConfirmed([]);
//                 setForm({ name: "", phone: "", email: "", adults: 1, children: 0, offer: "", days: 1, message: "" });
//                 setStartDate(undefined);
//               }}
//             >
//               Nova rezervacija
//             </Button>
//           </div>
//         </div>
//       </section>
//     );
//   }

const itemStyle =
  "flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-500 group hover:shadow-lg hover:scale-105";

  return (
    // <section id="reservation" className="section-padding water-shimmer">
    //   <div className="container mx-auto max-w-5xl">
    //     <div className="text-center mb-16">
    //       <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
    //         Rezervacija
    //       </p>
    //       <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
    //         Rezervišite svoj <span className="text-gradient">termin</span>
    //       </h2>
    //       <p className="text-muted-foreground max-w-xl mx-auto text-lg">
    //         Odaberite paket, prilagodite broj dana i osoba, te rezervišite.
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 gap-8">
    //       {/* Calendar */}
    //       <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card flex flex-col items-center">
    //         <div className="flex items-center gap-2 mb-4">
    //           <CalendarDays className="w-5 h-5 text-primary" />
    //           <h3 className="font-heading font-semibold text-foreground">
    //             Odaberite datum
    //           </h3>
    //         </div>
    //         <CalendarLegend />
    //         <Calendar
    //           mode="single"
    //           selected={startDate}
    //           onSelect={handleDateSelect}
    //           disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
    //           modifiers={modifiers}
    //           modifiersStyles={modifiersStyles}
    //           className="pointer-events-auto rounded-xl"
    //         />
    //         {startDate && !hasConflict && (
    //           <p className="mt-4 text-sm text-primary font-medium">
    //             Odabrano: {startDate.toLocaleDateString("bs-BA")}
    //             {form.days > 1 && ` — ${form.days} dana`}
    //           </p>
    //         )}
    //         {hasConflict && (
    //           <p className="mt-4 text-sm text-destructive font-medium flex items-center gap-1">
    //             <AlertTriangle className="w-4 h-4" />
    //             Neki odabrani dani su već rezervisani!
    //           </p>
    //         )}
    //         {!startDate && (
    //           <p className="mt-4 text-sm text-muted-foreground">
    //             Molimo odaberite slobodan datum.
    //           </p>
    //         )}
    //       </div>

    //       {/* Form */}
    //       <form
    //         onSubmit={handleSubmit}
    //         className="bg-card rounded-3xl p-6 md:p-8 shadow-card space-y-5"
    //       >
    //         <div>
    //           <Label htmlFor="name">Ime i prezime *</Label>
    //           <Input
    //             id="name"
    //             value={form.name}
    //             onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
    //             placeholder="Vaše ime i prezime"
    //             required
    //             className="rounded-xl mt-1"
    //           />
    //         </div>
    //         <div className="grid grid-cols-2 gap-4">
    //           <div>
    //             <Label htmlFor="phone">Telefon *</Label>
    //             <Input
    //               id="phone"
    //               value={form.phone}
    //               onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
    //               placeholder="+387..."
    //               required
    //               className="rounded-xl mt-1"
    //             />
    //           </div>
    //           <div>
    //             <Label htmlFor="email">Email *</Label>
    //             <Input
    //               id="email"
    //               type="email"
    //               value={form.email}
    //               onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
    //               placeholder="vaš@email.com"
    //               required
    //               className="rounded-xl mt-1"
    //             />
    //           </div>
    //         </div>

    //         {/* Offer selection */}
    //         <div>
    //           <Label>Tip ponude *</Label>
    //           <Select value={form.offer} onValueChange={handleOfferChange} required>
    //             <SelectTrigger className="rounded-xl mt-1">
    //               <SelectValue placeholder="Odaberite paket" />
    //             </SelectTrigger>
    //             <SelectContent>
    //               {Object.entries(offerDetails).map(([key, o]) => (
    //                 <SelectItem key={key} value={key}>{o.label}</SelectItem>
    //               ))}
    //             </SelectContent>
    //           </Select>
    //           {selectedOffer && (
    //             <p className="text-xs text-muted-foreground mt-1">{selectedOffer.description}</p>
    //           )}
    //         </div>

    //         {/* People counters */}
    //         <div className="grid grid-cols-2 gap-4">
    //           <div>
    //             <Label className="flex items-center gap-1.5 mb-2">
    //               <Users className="w-3.5 h-3.5" /> Odrasli *
    //             </Label>
    //             <div className="flex items-center gap-3">
    //               <button type="button" onClick={() => adjustCount("adults", -1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Minus className="w-4 h-4" />
    //               </button>
    //               <span className="text-lg font-semibold text-foreground w-8 text-center">{form.adults}</span>
    //               <button type="button" onClick={() => adjustCount("adults", 1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Plus className="w-4 h-4" />
    //               </button>
    //             </div>
    //           </div>
    //           <div>
    //             <Label className="flex items-center gap-1.5 mb-2">
    //               <Users className="w-3.5 h-3.5" /> Djeca
    //             </Label>
    //             <div className="flex items-center gap-3">
    //               <button type="button" onClick={() => adjustCount("children", -1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Minus className="w-4 h-4" />
    //               </button>
    //               <span className="text-lg font-semibold text-foreground w-8 text-center">{form.children}</span>
    //               <button type="button" onClick={() => adjustCount("children", 1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Plus className="w-4 h-4" />
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Days selector - only for multi-day offers */}
    //         {selectedOffer && selectedOffer.maxDays > 1 && (
    //           <div>
    //             <Label className="flex items-center gap-1.5 mb-2">
    //               <Clock className="w-3.5 h-3.5" /> Broj dana ({selectedOffer.minDays}–{selectedOffer.maxDays})
    //             </Label>
    //             <div className="flex items-center gap-3">
    //               <button type="button" onClick={() => adjustCount("days", -1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Minus className="w-4 h-4" />
    //               </button>
    //               <span className="text-lg font-semibold text-foreground w-8 text-center">{form.days}</span>
    //               <button type="button" onClick={() => adjustCount("days", 1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
    //                 <Plus className="w-4 h-4" />
    //               </button>
    //             </div>
    //           </div>
    //         )}

    //         {/* Price summary */}
    //         {selectedOffer && (
    //           <div className="bg-muted rounded-xl p-4 space-y-1">
    //             <div className="flex justify-between text-sm text-muted-foreground">
    //               <span>{form.adults} odrasli × {selectedOffer.adultPrice} KM{selectedOffer.perDay ? ` × ${form.days} dana` : ""}</span>
    //               <span>{selectedOffer.adultPrice * form.adults * (selectedOffer.perDay ? form.days : 1)} KM</span>
    //             </div>
    //             {selectedOffer.childPrice && form.children > 0 && (
    //               <div className="flex justify-between text-sm text-muted-foreground">
    //                 <span>{form.children} djeca × {selectedOffer.childPrice} KM{selectedOffer.perDay ? ` × ${form.days} dana` : ""}</span>
    //                 <span>{selectedOffer.childPrice * form.children * (selectedOffer.perDay ? form.days : 1)} KM</span>
    //               </div>
    //             )}
    //             <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-border">
    //               <span>Ukupno</span>
    //               <span>{calculateTotal()} KM</span>
    //             </div>
    //           </div>
    //         )}

    //         <div>
    //           <Label htmlFor="message">Poruka (opciono)</Label>
    //           <Textarea
    //             id="message"
    //             value={form.message}
    //             onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
    //             placeholder="Dodatne napomene..."
    //             rows={3}
    //             className="rounded-xl mt-1"
    //           />
    //         </div>
    //         <Button
    //           type="submit"
    //           variant="accent"
    //           className="w-full rounded-full py-6 text-base"
    //           disabled={!startDate || !form.offer || hasConflict}
    //         >
    //           Potvrdi rezervaciju
    //         </Button>
    //         <p className="text-xs text-muted-foreground text-center">
    //           Plaćanje se vrši po dolasku. Nema online plaćanja.
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <section id='reservation' className="section-padding bg-background water-shimmer">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Rezervacija
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-8">
            Rezervišite svoje mjesto u našem <span className="text-gradient">raju</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Sve rezervacije se vrše putem DM poruka na našim društvenim mrežama.
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-3 font-medium text-white bg-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group" 
              onClick={() => window.open("https://www.facebook.com/bazenbellavita", "_blank")}
            >
              <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="lg"
className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95"              onClick={() => window.open("https://www.instagram.com/bazen_bella_vita/", "_blank")}
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
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-border/20 hover:shadow-3xl transition-all duration-500">
      <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Osnovne informacije</h3>
      <div className="space-y-4">
        <div className={itemStyle}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Users size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">Ime i prezime</span>
        </div>

        <div className={itemStyle}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">Broj telefona</span>
        </div>

        <div className={itemStyle}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Users size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">Broj odraslih i djece</span>
        </div>
      </div>
    </div>

    <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-border/20 hover:shadow-3xl transition-all duration-500">
      <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Detalji rezervacije</h3>
      <div className="space-y-4">
        <div className={itemStyle}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <CalendarDays size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">Datum rezervacije</span>
        </div>

        <div className={itemStyle}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Clock size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">Trajanje boravka</span>
        </div>
      </div>
    </div>
  </div>
</div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl px-6 py-4 border border-accent/20">
              <span className="text-2xl">💰</span>
              <p className="text-foreground font-medium">
                Informacije o plaćanju bit će Vam dostavljene u odgovoru na poruku. Hvala na povjerenju i dobro nam došli!
              </p>
            </div>
          </div>       
      </div>
      </div>
    </section> 
  );
};

export default Reservation;
