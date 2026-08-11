import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Footer Component
 * Design: cierre institucional limpio y consistente con la nueva narrativa de consultoría integral.
 * - Resumen de marca alineado al rediseño
 * - Enlaces de navegación por anclas y rutas legales reales
 * - Información de contacto clara para móvil
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Nexus Football &amp; Business</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Consultoría integral para futbolistas, clubes y proyectos vinculados al negocio deportivo.
              Articulamos visión jurídica, lectura técnica, estrategia comercial y experiencias de marca
              dentro de una misma propuesta.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#perfil" className="text-white/70 hover:text-white transition-colors">
                  Perfil
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <p className="text-white/70">info@nexusfootballbusiness.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="text-white/70 space-y-1">
                  <p>+54 9 1133128468</p>
                  <p>+54 9 1160155063</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <p className="text-white/70 leading-relaxed">Arenales 3005, Piso 3<br />Ciudad de Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} Nexus Football &amp; Business. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
