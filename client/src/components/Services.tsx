import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Landmark,
  MapPin,
  Palette,
  Plane,
  Scale,
  Shield,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Services Section
 * Design: Consultoría deportiva premium, clara y orientada a conversión móvil.
 * - Cuatro ejes de negocio visibles sin depender de hover
 * - Bloques editoriales con jerarquía fuerte y CTA directo
 * - Lectura cómoda en teléfono y separación nítida entre líneas comerciales
 */

type ServiceDetail = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ServiceLine = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  cta: string;
  icon: LucideIcon;
  gradient: string;
  details: ServiceDetail[];
};

const serviceLines: ServiceLine[] = [
  {
    id: "futbolistas",
    eyebrow: "Consultoría Personal",
    title: "Gestión estratégica para futbolistas",
    summary:
      "Colocación, lectura contractual y acompañamiento integral para tomar decisiones de carrera con criterio deportivo, jurídico y comercial.",
    description:
      "Nexus interviene como consultora estratégica, no como representación tradicional. Analizamos contexto, oportunidades y riesgos para que cada paso profesional tenga sustento real.",
    cta: "Solicitar evaluación inicial",
    icon: Briefcase,
    gradient: "from-[#001F3F] via-[#063A73] to-[#0F62B8]",
    details: [
      {
        icon: Scale,
        title: "Protección legal",
        text: "Revisión de contratos, cláusulas sensibles, derechos de imagen y resguardo de intereses en negociaciones deportivas.",
      },
      {
        icon: Users,
        title: "Nexo con clubes",
        text: "Lectura de oportunidades, contacto con instituciones y búsqueda de entornos acordes al momento profesional del jugador.",
      },
      {
        icon: Landmark,
        title: "Plan de carrera",
        text: "Definición de estrategia, orden de prioridades y seguimiento para sostener desarrollo, estabilidad y proyección.",
      },
    ],
  },
  {
    id: "clubes",
    eyebrow: "Consultoría institucional",
    title: "Gestión estratégica para clubes",
    summary:
      "Profesionalización de formación, estructura legal y criterio deportivo para transformar procesos dispersos en un modelo institucional más sólido.",
    description:
      "La propuesta integra método, gestión legal y visión de campo. El objetivo es ordenar contratos, derechos y procesos clave para que el club gane respaldo, identidad y proyección.",
    cta: "Conversar sobre el club",
    icon: Building2,
    gradient: "from-[#0B1B2B] via-[#12365F] to-[#1B4E8C]",
    details: [
      {
        icon: GraduationCap,
        title: "Formación y método",
        text: "Capacitación de entrenadores, diseño metodológico y criterios de trabajo replicables para divisiones formativas.",
      },
      {
        icon: Building2,
        title: "Gestión legal",
        text: "Análisis de contratos, derechos de formación, derechos de imagen y revisión de aspectos jurídicos sensibles para proteger al club y ordenar sus decisiones.",
      },
      {
        icon: Briefcase,
        title: "Soporte administrativo complementario",
        text: "Acompañamiento secundario para ordenar circuitos internos y dar continuidad operativa a la estructura deportiva e institucional.",
      },
    ],
  },
  {
    id: "turismo",
    eyebrow: "Experiencias deportivas",
    title: "Experiencias en turismo deportivo",
    summary:
      "Una propuesta inmersiva para vivir la emoción del fútbol argentino desde adentro, con entrenamiento, recorridos y contexto cultural.",
    description:
      "No se vende solo logística: se diseña una vivencia. Cancha, entrenamiento, historia, museos, ciudad y hospitalidad reunidos en una experiencia memorable.",
    cta: "Diseñar una experiencia",
    icon: Plane,
    gradient: "from-[#082033] via-[#0A3C66] to-[#1170C2]",
    details: [
      {
        icon: Plane,
        title: "Itinerario integral",
        text: "Hospedaje, traslados, agenda deportiva y acompañamiento para visitantes que buscan una experiencia cuidada de principio a fin.",
      },
      {
        icon: MapPin,
        title: "Lugares emblemáticos",
        text: "Recorridos por estadios, museos y espacios icónicos del fútbol argentino para conectar con su historia y su cultura.",
      },
      {
        icon: Users,
        title: "Método de entrenamiento",
        text: "Sesiones y dinámicas con enfoque técnico para que el visitante no solo mire fútbol: también lo sienta y lo practique.",
      },
    ],
  },
  {
    id: "accesorios",
    eyebrow: "Identidad de marca",
    title: "Accesorios con los colores de tu club favorito",
    summary:
      "Productos pensados para expresar pertenencia. Diseño, personalización y estética deportiva aplicados a accesorios con impronta de club.",
    description:
      "La línea de accesorios combina utilidad, identidad visual y vínculo emocional con el escudo y los colores que cada hincha siente propios.",
    cta: "Solicitar catálogo",
    icon: ShoppingBag,
    gradient: "from-[#111827] via-[#183B63] to-[#2563EB]",
    details: [
      {
        icon: ShoppingBag,
        title: "Productos con identidad",
        text: "Accesorios desarrollados para destacar colores, símbolos y sentido de pertenencia con terminación cuidada y perfil premium.",
      },
      {
        icon: Palette,
        title: "Personalización visual",
        text: "Adaptación cromática, acabados y composición estética para que cada pieza dialogue con el universo visual del club elegido.",
      },
      {
        icon: Shield,
        title: "Calidad y presentación",
        text: "Selección de materiales y propuesta comercial pensadas para que el producto funcione como accesorio y también como objeto de identificación.",
      },
    ],
  },
];

function scrollToContact() {
  const contactSection = document.getElementById("contacto");
  contactSection?.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-14 md:mb-18">
          <p className="text-[11px] sm:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#0F62B8] mb-4">
            Consultoría integral
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Cuatro líneas de negocio, una misma lógica estratégica.
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-slate-600 leading-[1.75] max-w-3xl">
            Nexus Fútbol &amp; Business organiza su propuesta en ejes claros para que cada cliente
            entienda qué problema resolvemos, cómo intervenimos y qué valor concreto puede esperar.
            Cada línea puede operar de forma independiente o integrarse dentro de una estrategia más amplia.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {serviceLines.map((line) => {
            const Icon = line.icon;

            return (
              <article
                key={line.id}
                id={line.id}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                  <div className={`relative p-7 sm:p-9 md:p-10 text-white bg-gradient-to-br ${line.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/12 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/75 mb-4">
                        {line.eyebrow}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                        {line.title}
                      </h3>
                      <p className="text-white/90 text-[15px] sm:text-base md:text-lg leading-[1.75] mb-5">
                        {line.summary}
                      </p>
                      <p className="text-[14px] sm:text-sm md:text-base text-white/70 leading-[1.7] mb-8">
                        {line.description}
                      </p>

                      <Button
                        size="lg"
                        className="bg-white text-slate-950 hover:bg-white/90 font-semibold px-6 w-full sm:w-auto"
                        onClick={scrollToContact}
                      >
                        {line.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 md:p-10 bg-slate-50">
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {line.details.map((detail) => {
                        const DetailIcon = detail.icon;

                        return (
                          <div
                            key={detail.title}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm min-h-[220px]"
                          >
                            <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] text-[#0F62B8] flex items-center justify-center mb-4">
                              <DetailIcon className="w-5 h-5" />
                            </div>
                            <h4 className="text-sm md:text-[15px] xl:text-base font-bold text-slate-900 mb-2 leading-tight break-words max-w-full min-h-[2.8rem]">
                              {detail.title}
                            </h4>
                            <p className="text-[14px] sm:text-sm text-slate-600 leading-[1.7]">
                              {detail.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
