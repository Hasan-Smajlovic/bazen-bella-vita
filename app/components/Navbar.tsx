import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-transparent.webp";

const navLinks = [
  { label: "Početna", href: "#home" },
  { label: "O bazenu", href: "#about" },
  { label: "Ponude", href: "#offers" },
  { label: "Galerija", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handlePointerDown);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinkClass =
    "group relative inline-flex items-center py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:opacity-85";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-primary/12 backdrop-blur-md border-b border-white/20 shadow-[0_10px_30px_-25px_hsl(var(--primary)/0.5)]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Bazen Bella Vita Apartmani Logo"
            width={240}
            height={160}
            className="w-[64px] h-[48px] sm:w-[88px] sm:h-[60px] md:w-[104px] md:h-[70px]"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${navLinkClass} ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </span>
            </a>
          ))}
          <a href="#reservation">
            <Button variant="reservation" size="sm" className="px-5">
              Rezerviši termin
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
          aria-haspopup="menu"
          className={`md:hidden inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          <span
            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden origin-top overflow-hidden border-t backdrop-blur-lg transition-all duration-300 ease-out ${
          isOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        } ${
          scrolled
            ? "bg-card/95 border-border"
            : "bg-primary/12 border-white/20"
        }`}
      >
        <div className="container mx-auto py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between py-4 border-b transition-all duration-300 ${
                scrolled
                  ? "text-foreground border-border hover:text-accent hover:pl-2"
                  : "text-primary-foreground border-white/15 hover:text-accent hover:pl-2"
              }`}
            >
              <span className="font-medium tracking-wide">{link.label}</span>
            </a>
          ))}
          <a href="#reservation" onClick={() => setIsOpen(false)}>
            <Button variant="reservation" className="w-full mt-4 px-6">
              Rezerviši termin
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
