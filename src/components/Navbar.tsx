import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <Droplets
            className={`w-8 h-8 transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          />
          <span
            className={`text-xl font-bold font-heading transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Aqua Relax Pool
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#reservation">
            <Button variant="accent" size="sm" className="rounded-full">
              Rezerviši termin
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in-up">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#reservation" onClick={() => setIsOpen(false)}>
              <Button variant="accent" className="w-full rounded-full mt-2">
                Rezerviši termin
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
