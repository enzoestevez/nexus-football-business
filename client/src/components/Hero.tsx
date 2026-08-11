import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section
 * Design: apertura editorial premium con foco consultivo y lectura nítida en móvil.
 * - Mensaje principal amplio para abarcar consultoría, experiencias y accesorios
 * - CTA dobles orientados a exploración y contacto
 * - Indicadores de confianza alineados al diferencial multidisciplinario
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative text-white py-16 sm:py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: "url(/nexus_premium_banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,18,42,0.92)_0%,rgba(0,18,42,0.78)_38%,rgba(0,18,42,0.46)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl pt-10 md:pt-16">
          <p className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-blue-200 mb-4 sm:mb-5">
            Nexus Football &amp; Business
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-7 leading-[1.05] max-w-2xl">
            Consultoría integral para el ecosistema del fútbol.
          </h1>

          <p className="text-[15px] sm:text-lg md:text-xl text-white/88 mb-7 sm:mb-9 leading-[1.75] max-w-2xl">
            Reunimos gestión estratégica para futbolistas y clubes, experiencias en turismo deportivo
            y accesorios con identidad de club dentro de una misma propuesta comercial.
          </p>

          <p className="text-[15px] sm:text-base text-white/72 mb-8 sm:mb-10 leading-[1.75] max-w-2xl">
            La diferencia está en la trayectoria: experiencia real de campo, formación jurídica,
            lectura institucional y visión técnica para convertir conocimiento deportivo en decisiones concretas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/92 font-bold px-8"
              onClick={() => {
                const serviciosSection = document.getElementById("servicios");
                serviciosSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explorar líneas de negocio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold px-8"
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hablar con Nexus
            </Button>
          </div>

          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-3xl">
            <div>
              <p className="text-xs sm:text-sm text-white/65 uppercase tracking-[0.18em] mb-2">
                Experiencia
              </p>
              <p className="text-base sm:text-xl font-semibold leading-snug">Campo, club y formación</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-white/65 uppercase tracking-[0.18em] mb-2">
                Enfoque
              </p>
              <p className="text-base sm:text-xl font-semibold leading-snug">Legal, técnico y comercial</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-white/65 uppercase tracking-[0.18em] mb-2">
                Propuesta
              </p>
              <p className="text-base sm:text-xl font-semibold leading-snug">Consultoría con ejecución</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
