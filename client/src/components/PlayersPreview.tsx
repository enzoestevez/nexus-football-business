import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Players Preview Section
 * Design: Minimalismo Legal Corporativo
 * - Sección introductoria de jugadores en carpeta
 * - Botón para ver galería completa
 */
export default function PlayersPreview() {
  return (
    <section id="jugadores" className="py-20 md:py-32 bg-[#001F3F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Clubes, Futbolistas y Directores Técnicos en Carpeta
          </h2>
          <p className="text-lg text-blue-100 mb-6 leading-relaxed">
            En Nexus Fútbol & Business asesoramos a clubes, futbolistas y directores técnicos que buscan nuevas oportunidades profesionales. Nuestro equipo ha establecido nexos estratégicos con clubes nacionales e internacionales para facilitar colocaciones exitosas.
          </p>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Cada club, futbolista y director técnico en nuestro portafolio ha sido evaluado profesionalmente. Trabajamos para garantizar que cada colocación sea una oportunidad de crecimiento y éxito.
          </p>
          <div className="flex gap-4">
            <a href="/jugadores">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8">
                Ver Jugadores
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
