import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";

/**
 * Blog Section
 * Design: bloque editorial institucional conectado con los cuatro ejes de negocio.
 * - Mantiene formato de tarjetas y lectura rápida en móvil
 * - Amplía el tono para cubrir futbolistas, clubes y experiencias deportivas
 * - Conserva la navegación a artículos individuales
 */

const blogPosts = [
  {
    id: 1,
    title: "Cláusulas Esenciales en Contratos de Transferencia",
    excerpt:
      "Conoce las cláusulas fundamentales que debes revisar antes de firmar tu contrato de transferencia. Protege tus intereses con criterio jurídico especializado.",
    category: "Consultoría legal",
    author: "Dr. Alberto José Estevez",
    date: "15 de Marzo, 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Evaluación Médica Previa: Prevención de Riesgos en Transferencias",
    excerpt:
      "La auditoría radiológica completa es una herramienta estratégica para anticipar riesgos y llegar a una negociación con mayor respaldo.",
    category: "Rendimiento y salud",
    author: "Dr. Alberto José Estevez",
    date: "10 de Marzo, 2026",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Estrategia Táctica en la Colocación de Futbolistas",
    excerpt:
      "No todos los destinos ofrecen el mismo contexto. Aprende a leer compatibilidad táctica, entorno competitivo y proyección real.",
    category: "Gestión de carrera",
    author: "Dr. Alberto José Estevez",
    date: "5 de Marzo, 2026",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Negociaciones Internacionales: Cómo Maximizar Tu Valor",
    excerpt:
      "Timing, mercado y posicionamiento: las variables que más influyen cuando una oportunidad internacional debe convertirse en una decisión inteligente.",
    category: "Negocio deportivo",
    author: "Lic. Felipe Alberto Acuña Pietroniro",
    date: "28 de Febrero, 2026",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Derechos de Imagen y Laborales en el Fútbol Profesional",
    excerpt:
      "Entender la normativa vigente permite negociar mejor, proteger la carrera y evitar concesiones que afectan el valor del jugador a largo plazo.",
    category: "Consultoría legal",
    author: "Dr. Alberto José Estevez",
    date: "20 de Febrero, 2026",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Colocación de Jugadores Libres: Del Análisis a la Firma",
    excerpt:
      "Del diagnóstico al acuerdo final: una mirada completa sobre el proceso que necesita un futbolista libre para volver a competir con mejores condiciones.",
    category: "Gestión de carrera",
    author: "Dr. Alberto José Estevez",
    date: "15 de Febrero, 2026",
    readTime: "8 min",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Consultoría legal": "bg-blue-50 text-blue-700",
    "Rendimiento y salud": "bg-emerald-50 text-emerald-700",
    "Gestión de carrera": "bg-amber-50 text-amber-700",
    "Negocio deportivo": "bg-violet-50 text-violet-700",
  };
  return colors[category] || "bg-slate-100 text-slate-700";
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-[#001F3F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <Badge className="mb-4 bg-white/10 text-blue-100 hover:bg-white/15 border border-white/10">
            Perspectivas Nexus
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ideas, criterio y lectura del negocio deportivo.
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-blue-100/90 leading-[1.75]">
            Un espacio para compartir análisis sobre contratos, carrera profesional, dinámica institucional,
            rendimiento y decisiones que impactan en el ecosistema del fútbol.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border border-white/10 bg-white hover:border-blue-300/40 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col"
            >
              <div className="px-6 pt-6">
                <Badge className={`${getCategoryColor(post.category)} hover:opacity-90`}>
                  {post.category}
                </Badge>
              </div>

              <div className="flex-1 flex flex-col px-6 py-4">
                <h3 className="text-[17px] sm:text-lg font-bold text-slate-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-[14px] sm:text-sm mb-4 flex-1 leading-[1.7]">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 border-t border-blue-950/10 bg-[#001F3F]">
                <div className="space-y-2 text-[11px] sm:text-xs text-blue-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-white" />
                    <span>{post.author}</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-300">
                    {post.readTime} de lectura
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <button className="flex items-center gap-2 text-white hover:text-blue-200 font-semibold text-sm transition-colors">
                    Leer Más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
