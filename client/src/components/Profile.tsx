import { Badge } from "@/components/ui/badge";
import { useState } from "react";

/**
 * Profile Section
 * Design: credenciales con jerarquía institucional clara.
 * - Alberto aparece como perfil principal y rostro de la consultoría
 * - Felipe conserva relevancia, pero en un segundo nivel asociado al desarrollo comercial
 * - El relato conecta autoridad profesional con valor de negocio
 */

type Professional = {
  name: string;
  roleLabel: string;
  specialty: string;
  photo: string;
  fullInfo: string[];
  expertise: string;
  featured?: boolean;
};

const professionals: Professional[] = [
  {
    name: "Dr. Alberto José Estevez",
    roleLabel: "Perfil principal · Dirección general",
    specialty: "Abogado y consultor deportivo",
    photo: "/dr-alberto.jpg",
    fullInfo: [
      "Vivió el fútbol desde adentro: comenzó su recorrido en Ferro Carril Oeste, pasó por pensión y construyó una mirada real sobre las exigencias de formación, competencia y desarrollo profesional.",
      "Es abogado especializado en Derecho Deportivo y aporta criterio jurídico para contratos, negociaciones, derechos de imagen, derechos de formación y decisiones sensibles de carrera e institución.",
      "Su formación como Director Técnico le permite traducir el rendimiento, el contexto táctico y la lógica de competencia en decisiones estratégicas para futbolistas y clubes.",
      "Su experiencia en proyectos formativos y gestión institucional lo posiciona como la figura central de Nexus para articular consultoría, método y dirección profesional.",
    ],
    expertise:
      "trayectoria de campo, derecho deportivo, dirección técnica, gestión institucional y lectura integral del negocio del fútbol",
    featured: true,
  },
  {
    name: "Lic. Felipe Alberto Acuña Pietroniro",
    roleLabel: "Dirección comercial",
    specialty: "Estrategia comercial, marketing y desarrollo de negocios deportivos",
    photo: "/felipe-pietroniro.jpg",
    fullInfo: [
      "Licenciado en Administración de Empresas y Marketing, con formación de posgrado en Dirección de Entidades Deportivas y foco en negocios vinculados al deporte.",
      "Interviene en acuerdos comerciales, posicionamiento, lectura de mercado y negociación estratégica para futbolistas, clubes y nuevas líneas de negocio.",
      "Su aporte potencia la dimensión empresarial de Nexus, conectando decisiones deportivas con sustentabilidad comercial.",
      "Integra análisis de valor, desarrollo de oportunidades y visión de marca para acompañar el crecimiento comercial de la consultora.",
    ],
    expertise: "negociación, marketing, mercado deportivo y construcción comercial",
  },
  {
    name: "Daniel José López",
    roleLabel: "Preparación física",
    specialty: "Profesor Nacional de Educación Física y preparador físico deportivo",
    photo: "/daniel-jose-lopez.jpg",
    fullInfo: [
      "Profesor Nacional de Educación Física con más de 30 años de experiencia en el ámbito deportivo.",
      "Se desempeñó como preparador físico, profesor y coordinador en clubes, gimnasios y espacios deportivos, trabajando con futbolistas, tenistas y deportistas de distintas edades y niveles.",
      "Su trayectoria combina preparación física, fitness, entrenamiento personalizado y desarrollo deportivo, con amplia experiencia en el trabajo con deportistas profesionales y juveniles.",
    ],
    expertise: "preparación física, entrenamiento deportivo, fitness y desarrollo integral del deportista",
  },
  {
    name: "Daniel Omar García",
    roleLabel: "Dirección técnica",
    specialty: "Director técnico profesional y Scouting",
    photo: "/daniel-omar-garcia.jpg",
    fullInfo: [
      "Director Técnico con una extensa trayectoria en el fútbol de Pergamino y la región, al frente de clubes y selecciones.",
      "A lo largo de su carrera logró campeonatos, ascensos y destacadas campañas, entre ellos el Campeonato Nacional B con Douglas Haig.",
      "Sumó títulos con Racing de Colón, Sports de Salto, Club Guerrico y Club Alem, además de dirigir la Selección de Pergamino.",
      "Se destaca por su compromiso con la formación y el desarrollo de jugadores.",
    ],
    expertise: "dirección técnica, gestión de planteles, formación de jugadores y desarrollo de campañas competitivas",
  },
  {
    name: "Julián Schepeck",
    roleLabel: "Psicología Deportiva",
    specialty: "Psicólogo Social, Licenciado en Educación y especialista en Psicología Deportiva",
    photo: "/julian-schepeck.jpg",
    fullInfo: [
      "Psicólogo Social, Licenciado en Educación y especialista en Psicología Deportiva, con formación en Coaching Deportivo, Coaching Ontológico y Gestión Deportiva.",
      "Acompaña a futbolistas juveniles, amateurs y profesionales en el desarrollo de herramientas mentales y emocionales para afrontar la presión, ansiedad, frustración, lesiones, competencia y diferentes etapas de su carrera.",
      "Cuenta con experiencia trabajando con jugadores de Argentina y del exterior, familias, clubes y proyectos formativos. En Nexus aporta una mirada psicológica y educativa enfocada en fortalecer la confianza, el autoconocimiento y la estabilidad emocional, promoviendo el desarrollo integral del futbolista dentro y fuera de la cancha.",
    ],
    expertise: "psicología deportiva, entrenamiento mental, gestión emocional, acompañamiento a futbolistas, trabajo con familias y desarrollo integral",
  },
];

const featuredProfessional = professionals.find((p) => p.featured)!;
const otherProfessionals = professionals.filter((p) => !p.featured);

function ProfessionalCard({ professional }: { professional: Professional }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${professional.featured ? "w-full lg:max-w-2xl mx-auto h-[27rem]" : "h-[27rem]"} cursor-pointer`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute w-full h-full rounded-2xl ${professional.featured ? "p-8 md:p-10" : "p-6 md:p-7"} flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow ${
            professional.featured
              ? "bg-[linear-gradient(135deg,#001F3F_0%,#0B3D75_55%,#1E63B4_100%)] border border-blue-300/20"
              : "bg-[#001F3F] border-2 border-primary/20"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
          <div className="relative z-10 flex flex-col items-center">
            <Badge className={`${professional.featured ? "mb-5" : "mb-4 text-center"} ${professional.featured ? "bg-white/15 text-white border border-white/20" : "bg-blue-100/10 text-blue-100 border border-blue-200/20"}`}>
              {professional.roleLabel}
            </Badge>
            <img
              src={professional.photo}
              alt={professional.name}
              className={`${professional.featured ? "w-32 h-32 md:w-36 md:h-36" : "w-24 h-24 md:w-28 md:h-28"} rounded-full object-cover border-4 border-white mb-5 shadow-lg`}
            />
            <h3 className={`${professional.featured ? "text-[28px] md:text-4xl mb-3" : "text-[19px] md:text-[21px] mb-2"} font-bold text-white leading-tight`}>
              {professional.name}
            </h3>
            <p className={`${professional.featured ? "text-[15px] sm:text-base md:text-lg text-blue-50 max-w-2xl" : "text-[13px] sm:text-[13.5px] text-blue-100 max-w-[15rem]"} font-semibold leading-[1.55]`}>
              {professional.specialty}
            </p>
          </div>
        </div>

        <div
          className="absolute w-full h-full bg-primary/5 border-2 border-primary/20 rounded-2xl p-5 md:p-6 flex flex-col justify-center overflow-y-auto shadow-lg hover:shadow-xl transition-shadow"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="space-y-2.5">
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/15">
              {professional.roleLabel}
            </Badge>
            {professional.fullInfo.map((info, idx) => (
              <p key={idx} className={`${professional.featured ? "text-[14px] sm:text-sm" : "text-[13px] sm:text-[13.5px]"} text-muted-foreground leading-[1.55]`}>
                {info}
              </p>
            ))}
            <div className="pt-3 border-t border-border">
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.14em]">
                Expertise
              </p>
              <p className={`${professional.featured ? "text-[14px] sm:text-sm" : "text-[13px] sm:text-[13.5px]"} text-foreground mt-1.5 leading-[1.55]`}>{professional.expertise}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const strengths = [
    {
      title: "Conducción profesional",
      text: "La propuesta está liderada por una figura con recorrido real en el campo, formación jurídica especializada y dirección técnica aplicada.",
    },
    {
      title: "Criterio jurídico y deportivo",
      text: "Cada recomendación combina protección legal, lectura táctica y análisis del contexto competitivo e institucional.",
    },
    {
      title: "Visión institucional",
      text: "La consultoría no se limita al jugador: también entiende cómo debe ordenarse un club para crecer con mayor solidez.",
    },
    {
      title: "Desarrollo comercial",
      text: "La estrategia de marca y negocios acompaña el trabajo principal para convertir conocimiento deportivo en oportunidades sostenibles.",
    },
  ];

  return (
    <section id="perfil" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Equipo y trayectoria
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            La experiencia que sostiene la consultoría.
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-slate-600 leading-[1.75]">
            Nexus se apoya en una conducción profesional con experiencia real como futbolista,
            formación jurídica especializada, lectura técnica del juego y visión comercial aplicada al deporte.
            Esa combinación permite intervenir con una mirada amplia y útil para futbolistas, clubes y nuevos negocios.
          </p>
        </div>

        <div className="mb-8">
          <ProfessionalCard professional={featuredProfessional} />
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-14">
          {otherProfessionals.map((professional, index) => (
            <ProfessionalCard key={index} professional={professional} />
          ))}
        </div>

        <div className="bg-[#F6F9FF] border border-[#D8E7FF] rounded-[28px] p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ¿Qué vuelve distinta a esta propuesta?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength) => (
              <div key={strength.title} className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">{strength.title}</p>
                  <p className="text-[14px] sm:text-sm text-slate-600 leading-[1.7]">{strength.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
