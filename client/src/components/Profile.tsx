import { Badge } from "@/components/ui/badge";
import { useState } from "react";

/**
 * Profile Section
 * Design: Minimalismo Legal Corporativo
 * - Tarjetas flip para profesionales
 * - Frente: foto + nombre + especialidad
 * - Atrás: información completa
 */

const professionals = [
  {
    name: "Dr. Alberto José Estevez",
    specialty: "Abogado",
    photo: "/dr-alberto.jpg",
    fullInfo: [
      "Ex futbolista profesional con trayectoria en el fútbol argentino, que complementa su experiencia de campo con formación académica de alto nivel.",
      "Abogado especializado en Derecho Deportivo con profundo conocimiento en contratos de transferencia, protección de derechos laborales e imagen, y negociaciones comerciales en el ámbito deportivo.",
      "Director Técnico, Titulado en la Escuela de Técnicos de Fútbol de Cesar Luis Menotti con habilitación para dirigir equipos de Primera División Internacional.",
      "Coordinador General en Academia Formativa D10 F.C. lo que le proporciona experiencia directa en la gestión institucional de clubes.",
    ],
    expertise: "legal, táctica, médica e institucional",
  },
  {
    name: "Lic. Felipe Alberto Acuña Pietroniro",
    specialty: "Licenciado en Administración de Empresas y Marketing",
    photo: "/felipe-pietroniro.jpg",
    fullInfo: [
      "Master en Dirección de Entidades Deportivas con amplia experiencia en acuerdos comerciales complejos, transferencias internacionales y estrategia de posicionamiento en mercados competitivos.",
      "Su especialidad radica en maximizar el valor de cada transacción, protegiendo los intereses de nuestros clientes a través de negociaciones estratégicas.",
      "Combina conocimiento del mercado, análisis táctico y protección legal en cada operación.",
      "Garantiza que cada transferencia sea optimizada tanto en términos comerciales como deportivos.",
    ],
    expertise: "comercial, negociación, mercado deportivo",
  },
];

function ProfessionalCard({ professional }: { professional: typeof professionals[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-96 cursor-pointer"
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
        {/* Front of card - Azul marino con nombre y especialidad en blanco */}
        <div
          className="absolute w-full h-full bg-[#001F3F] border-2 border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={professional.photo}
            alt={professional.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white mb-6 shadow-lg"
          />
          <h3 className="text-2xl font-bold text-white mb-2">
            {professional.name}
          </h3>
          <p className="text-blue-200 font-semibold text-sm">{professional.specialty}</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-primary/5 border-2 border-primary/20 rounded-xl p-6 flex flex-col justify-center overflow-y-auto shadow-lg hover:shadow-xl transition-shadow"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="space-y-3">
            {professional.fullInfo.map((info, idx) => (
              <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                {info}
              </p>
            ))}
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-primary">
                Expertise: {professional.expertise}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <section id="perfil" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Equipo Profesional
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Expertise Multidisciplinaria al Servicio de Tu Carrera
          </h2>
          <p className="text-lg text-gray-600">
            Un equipo de profesionales con formación integral que combina derecho deportivo, 
            experiencia técnico táctica, exámenes físicos, psicológicos e intermediación y negociación contractual.
            Pasa el cursor para conocer más.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} professional={professional} />
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-primary/5 border-2 border-primary/20 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            ¿Por Qué Elegirnos?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Seguridad Legal Integral</p>
                <p className="text-sm text-muted-foreground">
                  Protección completa de tus intereses con especialización en derecho deportivo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Evaluación Tecnica Profesional</p>
                <p className="text-sm text-muted-foreground">
                  Colocación estratégica basada en análisis tecnico táctico.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Auditoría Fisica Especializada</p>
                <p className="text-sm text-muted-foreground">
                  Puesta a punto, pretemporadas, recuperacion de lesiones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Negociación Estratégica</p>
                <p className="text-sm text-muted-foreground">
                  Maximización de valor en transferencias nacionales e internacionales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Empatía Real</p>
                <p className="text-sm text-muted-foreground">
                  Comprensión genuina del mundo del fútbol desde la vivencia personal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-foreground mb-1">Modelo de Éxito</p>
                <p className="text-sm text-muted-foreground">
                  Objetivo, Estrategia, Tactica, Resultado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
