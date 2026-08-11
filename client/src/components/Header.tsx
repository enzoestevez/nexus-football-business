import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Design: barra superior limpia, institucional y preparada para scroll largo en móvil.
 * - Navegación por anclas de una sola página
 * - Jerarquía visual sobria con CTA directo
 * - Menú móvil simple y sin lógica residual de administración
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Consultoría", href: "#servicios" },
    { label: "Perfil", href: "#perfil" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleAnchorClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 backdrop-blur-md bg-[#001F3F]/84 shadow-lg rounded-b-2xl mx-3 mt-2 left-3 right-3"
          : "py-4 bg-gradient-to-r from-[#001F3F] to-[#003D7A]"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleAnchorClick("#inicio");
          }}
          className="flex items-center gap-3 min-w-0"
        >
          <img
            src="/nexus-logo-white.png"
            alt="Nexus Football & Business"
            className={`${isScrolled ? "h-8" : "h-10"} w-auto transition-all duration-300`}
          />
          <div className="hidden sm:block min-w-0">
            <p className={`font-bold text-white transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}>
              Football &amp; Business
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-blue-200/80 truncate">
              Consultoría integral
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleAnchorClick(item.href);
              }}
              className="text-white hover:text-blue-200 transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6"
            onClick={() => handleAnchorClick("#contacto")}
          >
            Contactar
          </Button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir navegación"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[#003D7A] border-t border-blue-900 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-white hover:text-blue-200 transition-colors font-medium py-2"
              onClick={(e) => {
                e.preventDefault();
                handleAnchorClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors mt-2"
            onClick={() => handleAnchorClick("#contacto")}
          >
            Contactar
          </button>
        </nav>
      )}
    </header>
  );
}
