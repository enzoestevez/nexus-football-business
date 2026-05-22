import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";

/**
 * Blog Section
 * Design: Minimalismo Legal Corporativo
 * - Artículos destacados sobre derecho deportivo y transferencias
 * - Información valiosa para futbolistas y clubes
 */

const blogPosts = [
  {
    id: 1,
    title: "Cláusulas Esenciales en Contratos de Transferencia",
    excerpt:
      "Conoce las cláusulas fundamentales que debes revisar antes de firmar tu contrato de transferencia. Protege tus intereses con asesoría legal especializada.",
    category: "Derecho Deportivo",
    author: "Dr. Alberto José Estevez",
    date: "15 de Marzo, 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Evaluación Médica Previa: Prevención de Riesgos en Transferencias",
    excerpt:
      "La auditoría radiológica completa es fundamental para garantizar que llegues en óptimas condiciones físicas a tu nuevo club. Descubre por qué es crucial.",
    category: "Auditoría Médica",
    author: "Dr. Alberto José Estevez",
    date: "10 de Marzo, 2026",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Estrategia Táctica en la Colocación de Futbolistas",
    excerpt:
      "No todos los clubes son iguales. Aprende cómo elegir el contexto táctico más favorable para tu desarrollo profesional y maximizar tu potencial.",
    category: "Gestión Técnica",
    author: "Dr. Alberto José Estevez",
    date: "5 de Marzo, 2026",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Negociaciones Internacionales: Cómo Maximizar Tu Valor",
    excerpt:
      "Descubre las estrategias clave para negociar transferencias internacionales. Conocimiento del mercado, timing y posicionamiento son fundamentales.",
    category: "Negociaciones",
    author: "Felipe Manuel Alberto Acuña Pietroniro",
    date: "28 de Febrero, 2026",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Derechos de Imagen y Laborales en el Fútbol Profesional",
    excerpt:
      "Protege tus derechos de imagen y laborales. Conoce la normativa vigente y cómo negociar términos favorables en tu contrato.",
    category: "Derecho Deportivo",
    author: "Dr. Alberto José Estevez",
    date: "20 de Febrero, 2026",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Colocación de Jugadores Libres: Del Análisis a la Firma",
    excerpt:
      "Proceso completo de colocación para jugadores sin club. Desde la evaluación integral hasta la negociación y firma del contrato.",
    category: "Gestión de Carrera",
    author: "Dr. Alberto José Estevez",
    date: "15 de Febrero, 2026",
    readTime: "8 min",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Derecho Deportivo": "bg-blue-50 text-blue-700",
    "Auditoría Médica": "bg-red-50 text-red-700",
    "Gestión Técnica": "bg-green-50 text-green-700",
    "Negociaciones": "bg-purple-50 text-purple-700",
    "Gestión de Carrera": "bg-yellow-50 text-yellow-700",
  };
  return colors[category] || "bg-gray-50 text-gray-700";
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-[#001F3F]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Centro de Conocimiento
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Blog: Asesoría Legal y Técnica
          </h2>
          <p className="text-lg text-blue-100">
            Artículos especializados sobre derecho deportivo, transferencias, auditoría médica 
            y gestión de carrera profesional. Información valiosa para futbolistas y clubes.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg flex flex-col"
            >
              {/* Category Badge */}
              <div className="px-6 pt-6">
                <Badge className={`${getCategoryColor(post.category)} hover:opacity-80`}>
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-6 py-4">
                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta Information */}
              <div className="px-6 py-4 border-t border-blue-900 bg-[#001F3F]">
                <div className="space-y-2 text-xs text-blue-100 mb-4">
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

                {/* Read More Link */}
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
