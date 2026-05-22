import { Menu, X, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Header Component
 * Navegación principal con logo y menú responsivo
 * Design: Azul Marino Premium con efecto Glass Blur
 * - Logo NEXUS con escudo
 * - Navegación top bar limpia
 * - Efecto de scroll: header flotante con blur y transparencia
 * - Menú hamburguesa en mobile
 * - Panel Admin solo visible cuando está autenticado
 */
export default function Header() {
  const [, navigate] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    setIsAuthenticated(!!auth);

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      const auth = localStorage.getItem("adminAuth");
      setIsAuthenticated(!!auth);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    navigate("/");
  };

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portfolio", href: "#jugadores" },
    { label: "Perfil", href: "#perfil" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 backdrop-blur-md bg-[#001F3F]/80 shadow-lg rounded-b-2xl mx-4 mt-2 left-4 right-4"
          : "py-4 bg-gradient-to-r from-[#001F3F] to-[#003D7A]"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/nexus-logo.png"
            alt="Nexus Football & Business"
            className={`${isScrolled ? "h-8" : "h-10"} w-auto transition-all duration-300`}
          />
          <div className="hidden sm:block">
            <p className={`font-bold text-white transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}>
              Football & Business
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("/")) {
                  e.preventDefault();
                  navigate(item.href);
                }
              }}
              className="text-white hover:text-blue-300 transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Auth & CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <>
              <a
                href="/admin"
                className="text-white hover:text-blue-300 transition-colors font-medium text-sm"
              >
                Panel Admin
              </a>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-4"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </>
          )}
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6"
            onClick={() => {
              const contactSection = document.getElementById("contacto");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contactar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#003D7A] border-t border-blue-900 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
              onClick={(e) => {
                setIsMenuOpen(false);
                if (item.href.startsWith("/")) {
                  e.preventDefault();
                  navigate(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
          {isAuthenticated && (
            <>
              <a
                href="/admin"
                className="block text-white hover:text-blue-300 transition-colors font-medium py-2"
              >
                Panel Admin
              </a>
              <button
                onClick={handleLogout}
                className="w-full text-left text-white hover:text-blue-300 transition-colors font-medium py-2"
              >
                <LogOut className="w-4 h-4 mr-2 inline" />
                Cerrar Sesión
              </button>
            </>
          )}
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              const contactSection = document.getElementById("contacto");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contactar
          </button>
        </nav>
      )}
    </header>
  );
}
