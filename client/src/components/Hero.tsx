import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section
 * Design: Minimalismo Legal Corporativo
 * - Fondo verde gradiente suave
 * - Tipografía clara y jerárquica
 * - CTA prominente
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative text-white py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/manus-storage/nexus_premium_banner_a65c3acf.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            El Nexo estratégico entre tu talento y el exito profesional
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Asesoría legal y técnica integral para futbolistas, Directores Técnicos y clubes. 
            Transformamos el talento en carreras profesionales sostenibles a través 
            de una gestión especializada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-8"
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold px-8"
              onClick={() => {
                const serviciosSection = document.getElementById("servicios");
                serviciosSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conocer Servicios
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-sm text-white/70 uppercase tracking-wide">Especialización</p>
              <p className="text-xl font-bold"></p>
            </div>
            <div>
              <p className="text-sm text-white/70 uppercase tracking-wide">Formación</p>
              <p className="text-xl font-bold"></p>
            </div>
            <div>
              <p className="text-sm text-white/70 uppercase tracking-wide">Enfoque</p>
              <p className="text-xl font-bold"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
