import { useState } from "react";
import { Scale, Zap, Heart } from "lucide-react";

/**
 * Services Section
 * Design: Minimalismo Legal Corporativo
 * - Tarjetas flip modernas con efecto 3D
 * - Frente: icono + título (en blanco sobre azul marino)
 * - Atrás: descripción y highlights
 */
const services = [
  {
    icon: Scale,
    title: "Asesoría Legal",
    description:
      "Especialización en derecho deportivo y contratos de transferencia. Protección integral de tus intereses y seguridad jurídica en cada negociación.",
    highlights: ["Redacción de contratos", "Revisión de cláusulas", "Negociación de términos"],
  },
  {
    icon: Zap,
    title: "Gestión Técnica",
    description:
      "Evaluación táctica y colocación estratégica basada en tu perfil. Enlace directo con cuerpos técnicos y análisis de oportunidades.",
    highlights: ["Evaluación de perfil", "Colocación en clubes", "Enlace técnico"],
  },
  {
    icon: Heart,
    title: "Aptitud Física y Psicológica",
    description:
      "Revisión física para prevención de lesiones y sesión psicológica para asegurar que llegues en óptimas condiciones a tu próximo club.",
    highlights: ["Evaluación", "Prevención", "Seguimiento"],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card - Azul marino con icono y título en blanco */}
        <div
          className="absolute w-full h-full bg-[#001F3F] border-2 border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-6 inline-block p-4 bg-white/10 rounded-lg">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-primary/5 border-2 border-primary/20 rounded-xl p-8 flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
            {service.description}
          </p>

          <div className="space-y-2">
            {service.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Servicios Integrales
          </h2>
          <p className="text-lg text-gray-600">
            Cuatro pilares fundamentales que garantizan una ventaja competitiva inigualable 
            en tu carrera profesional. Pasa el cursor para descubrir más.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-16 bg-white rounded-lg border-2 border-primary/20 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Servicios Adicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-foreground mb-3">Gestion de carrera</h4>
              <p className="text-muted-foreground">
                Transformamos jugadores sin club en profesionales activos. Gestión completa 
                desde la evaluación hasta la firma del contrato.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Negociación de Transferencias</h4>
              <p className="text-muted-foreground">
                Maximizamos el valor de cada transacción. Estrategia legal y comercial 
                para obtener los mejores términos.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Asesoría a Clubes</h4>
              <p className="text-muted-foreground">
                Consultoría externa para profesionalizar procesos de captación y contratos. 
                Reducción de riesgos legales y médicos.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Asesoramiento legal y comercial</h4>
              <p className="text-muted-foreground">
                Planificación integral de tu trayectoria profesional. Desde la colocación 
                hasta la protección de tus intereses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
