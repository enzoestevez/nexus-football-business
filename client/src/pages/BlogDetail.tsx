import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

/**
 * Blog Detail Page
 * Design: lectura editorial sobria y consistente con el reposicionamiento de Nexus.
 * - Mantiene scroll al inicio del artículo al navegar
 * - CTA final alineado con la lógica consultiva de la home
 * - Categorías y extractos consistentes con el hub editorial actualizado
 */

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cláusulas Esenciales en Contratos de Transferencia",
    excerpt:
      "Conoce las cláusulas fundamentales que debes revisar antes de firmar tu contrato de transferencia. Protege tus intereses con criterio jurídico especializado.",
    content: `
      <h2>Cláusulas Esenciales en Contratos de Transferencia</h2>
      <p>Cuando un futbolista se transfiere a un nuevo club, el contrato de transferencia es el documento más importante que define los términos de la operación. Conocer las cláusulas esenciales te protege de sorpresas desagradables y ayuda a que cada decisión tenga mayor respaldo.</p>
      <h3>1. Cláusula de rescisión</h3>
      <p>Esta cláusula establece el monto que debe pagar un tercero para rescatar tu contrato. Es fundamental negociar una cantidad justa que refleje tu valor en el mercado.</p>
      <h3>2. Cláusula de derechos de imagen</h3>
      <p>Define quién tiene derecho a explotar comercialmente tu imagen. Retener control sobre ese activo es clave para proteger tu valor profesional y comercial.</p>
      <h3>3. Cláusula de duración</h3>
      <p>Especifica la duración del contrato. Conviene negociar términos que aporten estabilidad, pero que también mantengan un margen razonable de flexibilidad para la carrera.</p>
      <h3>4. Cláusula de salario y beneficios</h3>
      <p>Detalla remuneración, bonificaciones y beneficios complementarios. Todo debe quedar expresado de forma clara para evitar conflictos futuros.</p>
      <p>En Nexus Fútbol & Business abordamos estas revisiones desde una lógica consultiva: no solo leemos el contrato, también evaluamos el contexto en el que esa decisión impacta tu recorrido profesional.</p>
    `,
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
    content: `
      <h2>Evaluación Médica Previa: Prevención de Riesgos en Transferencias</h2>
      <p>Una evaluación médica completa antes de una transferencia es esencial para proteger tanto al futbolista como al club receptor. Esta auditoría integral previene problemas futuros y mejora la calidad de la negociación.</p>
      <h3>¿Por qué es importante?</h3>
      <p>Muchas transferencias se complican por situaciones médicas detectadas tarde. Trabajar con previsión reduce incertidumbre y evita escenarios desfavorables después de la firma.</p>
      <h3>Componentes de la evaluación</h3>
      <ul>
        <li>Examen físico completo</li>
        <li>Radiografías y resonancias magnéticas</li>
        <li>Pruebas de laboratorio</li>
        <li>Evaluación cardiovascular</li>
        <li>Análisis de antecedentes de lesiones</li>
      </ul>
      <p>El enfoque de Nexus integra criterio médico, lectura deportiva y visión contractual para que la información no quede aislada, sino convertida en una herramienta de decisión.</p>
    `,
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
    content: `
      <h2>Estrategia Táctica en la Colocación de Futbolistas</h2>
      <p>Elegir un club no depende solo del salario o de la categoría de la liga. El contexto táctico, la idea del entrenador y la estructura institucional tienen un peso decisivo sobre el desarrollo del jugador.</p>
      <h3>Factores a considerar</h3>
      <p><strong>Sistema de juego:</strong> evaluar si la posición y las características del futbolista encajan realmente en la propuesta del equipo.</p>
      <p><strong>Entorno competitivo:</strong> medir la competencia interna, la paciencia del proyecto y las posibilidades reales de minutos.</p>
      <p><strong>Momento del club:</strong> no es lo mismo ingresar en una estructura consolidada que en un proceso inestable o en transición.</p>
      <h3>Análisis profesional</h3>
      <p>Nexus trabaja estas decisiones con una mirada técnica y estratégica para que la colocación tenga coherencia deportiva y proyección en el tiempo.</p>
    `,
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
    content: `
      <h2>Negociaciones Internacionales: Cómo Maximizar Tu Valor</h2>
      <p>Las negociaciones internacionales requieren algo más que contactos: necesitan análisis de mercado, lectura del momento y una estrategia de posicionamiento clara.</p>
      <h3>Estrategias clave</h3>
      <p><strong>Conocimiento del mercado:</strong> entender valores, urgencias y perfiles demandados en cada liga.</p>
      <p><strong>Timing:</strong> detectar cuándo conviene avanzar, esperar o reorientar una conversación puede cambiar el resultado final.</p>
      <p><strong>Posicionamiento:</strong> la forma en que se presenta un jugador o proyecto condiciona directamente la percepción de valor.</p>
      <h3>Nuestro enfoque</h3>
      <p>En Nexus Fútbol & Business conectamos lectura comercial y criterio deportivo para que la negociación tenga más sustento y mejores márgenes de resultado.</p>
    `,
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
    content: `
      <h2>Derechos de Imagen y Laborales en el Fútbol Profesional</h2>
      <p>Los derechos de imagen y laborales son aspectos centrales dentro de la carrera de un futbolista. Comprenderlos permite negociar con mayor claridad y sostener una posición más sólida.</p>
      <h3>Derechos de imagen</h3>
      <p>Incluyen el uso del nombre, la fotografía, la voz y otros elementos de identidad con fines comerciales. Son activos que necesitan tratamiento específico.</p>
      <h3>Derechos laborales</h3>
      <p>Incluyen condiciones de trabajo, ambiente seguro, cumplimiento salarial y protección de beneficios acordados.</p>
      <h3>Negociación efectiva</h3>
      <p>Trabajar estas cláusulas con respaldo jurídico ayuda a evitar cesiones innecesarias y a defender mejor el valor profesional y comercial del jugador.</p>
    `,
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
    content: `
      <h2>Colocación de Jugadores Libres: Del Análisis a la Firma</h2>
      <p>Cuando un futbolista queda sin club, el proceso de colocación exige método. No alcanza con buscar oportunidades: hay que ordenar perfil, mercado y negociación.</p>
      <h3>Fase 1: evaluación integral</h3>
      <p>Se analizan condiciones técnicas, contexto competitivo y estado general para identificar fortalezas y prioridades.</p>
      <h3>Fase 2: posicionamiento en el mercado</h3>
      <p>Se construye una estrategia de presentación enfocada en ligas y clubes compatibles con el momento profesional del jugador.</p>
      <h3>Fase 3: negociación y firma</h3>
      <p>Se revisan condiciones, se ordenan expectativas y se trabaja el cierre contractual con foco en protección y sostenibilidad.</p>
      <p>El objetivo no es solo volver a firmar, sino hacerlo en un contexto más favorable y útil para la carrera.</p>
    `,
    category: "Gestión de carrera",
    author: "Dr. Alberto José Estevez",
    date: "15 de Febrero, 2026",
    readTime: "8 min",
  },
];

export default function BlogDetail() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPosts.find((p) => p.id === postId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90">Volver al Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" id="blog-top">
      <header className="bg-primary text-white py-12 md:py-16" id="blog-header">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="text-white mb-6 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Button>
          </Link>
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-blue-200 mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="text-white/80">{post.readTime} de lectura</div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24" id="blog-content">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-sm sm:prose md:prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700">
            <div
              className="text-foreground leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              ¿Quieres llevar esta conversación a tu caso concreto?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
              Podemos revisar tu situación, ordenar prioridades y evaluar qué tipo de intervención consultiva encaja mejor con tu proyecto deportivo o institucional.
            </p>
            <Link href="/#contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base">
                Hablar con Nexus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
