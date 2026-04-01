import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Why Us", id: "why-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="ProjectPro IT Solutions Logo" className="h-10 w-auto rounded" />
          <span className={`font-bold text-xl tracking-tight hidden sm:block ${isScrolled ? "text-primary" : "text-white"}`}>
            ProjectPro
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("contact")}
            className={isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-slate-100"}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left py-2 text-slate-700 font-medium hover:text-primary"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} className="w-full mt-2">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}