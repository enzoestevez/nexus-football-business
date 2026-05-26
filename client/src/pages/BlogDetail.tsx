import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

/**
 * Blog Detail Page
 * Design: Minimalismo Legal Corporativo
 * - Página individual de artículos del blog
 * - Contenido completo del artículo
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
      "Conoce las cláusulas fundamentales que debes revisar antes de firmar tu contrato de transferencia. Protege tus intereses con asesoría legal especializada.",
    content: `
      <h2>Cláusulas Esenciales en Contratos de Transferencia</h2>
      
      <p>Cuando un futbolista se transfiere a un nuevo club, el contrato de transferencia es el documento más importante que define los términos de la operación. Conocer las cláusulas esenciales te protege de sorpresas desagradables y asegura que tus intereses estén protegidos.</p>
      
      <h3>1. Cláusula de Rescisión</h3>
      <p>Esta cláusula establece el monto que debe pagar un tercero para "rescatar" tu contrato. Es fundamental negociar una cantidad justa que refleje tu valor en el mercado.</p>
      
      <h3>2. Cláusula de Derechos de Imagen</h3>
      <p>Define quién tiene derecho a explotar comercialmente tu imagen. Asegúrate de retener el máximo control posible sobre tus derechos de imagen.</p>
      
      <h3>3. Cláusula de Duración</h3>
      <p>Especifica la duración del contrato. Negocia términos que te permitan estabilidad pero también flexibilidad para tu carrera.</p>
      
      <h3>4. Cláusula de Salario y Beneficios</h3>
      <p>Detalla tu remuneración, bonificaciones por desempeño, y otros beneficios. Asegúrate de que todo esté claramente especificado.</p>
      
      <p>En Nexus Fútbol & Business, nuestro equipo legal especializado revisa cada cláusula para asegurar que tus intereses estén protegidos.</p>
    `,
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
    content: `
      <h2>Evaluación Médica Previa: Prevención de Riesgos en Transferencias</h2>
      
      <p>Una evaluación médica completa antes de una transferencia es esencial para proteger tanto al futbolista como al club receptor. Esta auditoría radiológica integral previene problemas futuros y asegura que el jugador llega en óptimas condiciones.</p>
      
      <h3>¿Por Qué es Importante?</h3>
      <p>Muchas transferencias fracasan debido a problemas médicos no detectados. Una evaluación completa evita sorpresas desagradables después de la firma.</p>
      
      <h3>Componentes de la Evaluación</h3>
      <ul>
        <li>Examen físico completo</li>
        <li>Radiografías y resonancias magnéticas</li>
        <li>Pruebas de laboratorio</li>
        <li>Evaluación cardiovascular</li>
        <li>Análisis de antecedentes de lesiones</li>
      </ul>
      
      <p>En Nexus Fútbol & Business, contamos con especialistas médicos que realizan evaluaciones exhaustivas para garantizar tu bienestar.</p>
    `,
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
    content: `
      <h2>Estrategia Táctica en la Colocación de Futbolistas</h2>
      
      <p>La elección del club correcto va más allá del salario. El contexto táctico, el estilo de juego del equipo y la filosofía del entrenador son factores cruciales para tu desarrollo profesional.</p>
      
      <h3>Factores a Considerar</h3>
      <p><strong>Sistema de Juego:</strong> ¿Se adapta tu posición y características al sistema del club?</p>
      <p><strong>Estilo de Juego:</strong> ¿Coincide con tu forma de jugar?</p>
      <p><strong>Competencia:</strong> ¿Cuál es el nivel de competencia en tu posición?</p>
      <p><strong>Proyecto del Club:</strong> ¿Es un proyecto en crecimiento o en declive?</p>
      
      <h3>Análisis Profesional</h3>
      <p>Nuestro equipo técnico analiza cada oportunidad desde una perspectiva táctica para asegurar que el club elegido sea el más favorable para tu desarrollo.</p>
    `,
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
    content: `
      <h2>Negociaciones Internacionales: Cómo Maximizar Tu Valor</h2>
      
      <p>Las negociaciones internacionales son complejas y requieren estrategia, conocimiento del mercado y timing perfecto. Aquí te mostramos cómo maximizar tu valor en el mercado global.</p>
      
      <h3>Estrategias Clave</h3>
      <p><strong>Conocimiento del Mercado:</strong> Entender los valores de mercado en diferentes ligas es fundamental.</p>
      <p><strong>Timing:</strong> El momento de la negociación puede significar la diferencia entre una buena y una excelente oferta.</p>
      <p><strong>Posicionamiento:</strong> Cómo te posicionas ante los clubes interesados afecta directamente el resultado de la negociación.</p>
      
      <h3>Nuestro Enfoque</h3>
      <p>En Nexus Fútbol & Business, utilizamos análisis de mercado avanzado y estrategias de negociación probadas para maximizar tu valor en cada transferencia internacional.</p>
    `,
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
    content: `
      <h2>Derechos de Imagen y Laborales en el Fútbol Profesional</h2>
      
      <p>Los derechos de imagen y laborales son aspectos cruciales de tu carrera profesional como futbolista. Es fundamental entender qué son, cómo protegerlos y cómo negociar términos favorables.</p>
      
      <h3>Derechos de Imagen</h3>
      <p>Incluyen el uso de tu nombre, foto, voz y semejanza con fines comerciales. Estos derechos tienen valor económico significativo.</p>
      
      <h3>Derechos Laborales</h3>
      <p>Incluyen protección contra discriminación, derecho a un ambiente seguro, y protección de tu salario y beneficios.</p>
      
      <h3>Negociación Efectiva</h3>
      <p>Negocia cláusulas que protejan tus derechos y maximicen tu valor comercial. Nuestro equipo legal te ayuda a entender y negociar estos términos.</p>
    `,
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
    content: `
      <h2>Colocación de Jugadores Libres: Del Análisis a la Firma</h2>
      
      <p>Cuando un futbolista queda sin club, el proceso de colocación requiere un enfoque integral que combine evaluación profesional, marketing estratégico y negociación efectiva.</p>
      
      <h3>Fase 1: Evaluación Integral</h3>
      <p>Evaluamos tu perfil técnico, físico y psicológico. Identificamos tus fortalezas y áreas de mejora.</p>
      
      <h3>Fase 2: Posicionamiento en el Mercado</h3>
      <p>Creamos una estrategia de marketing para presentarte a los clubes interesados de la mejor manera posible.</p>
      
      <h3>Fase 3: Negociación y Firma</h3>
      <p>Negociamos los mejores términos posibles y aseguramos que el contrato proteja tus intereses.</p>
      
      <p>Nuestro equipo ha colocado exitosamente a decenas de futbolistas sin club en oportunidades profesionales valiosas.</p>
    `,
    category: "Gestión de Carrera",
    author: "Dr. Alberto José Estevez",
    date: "15 de Febrero, 2026",
    readTime: "8 min",
  },
];

export default function BlogDetail() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPosts.find((p) => p.id === postId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90">
              Volver al Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.id]);

  return (
    <div className="min-h-screen bg-background" id="blog-top">
      {/* Header */}
      <header className="bg-primary text-white py-12 md:py-16" id="blog-header">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="text-white mb-6 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
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

      {/* Content */}
      <section className="py-16 md:py-24" id="blog-content">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-sm sm:prose md:prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              ¿Necesitas asesoría profesional?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Nuestro equipo de expertos en derecho deportivo, gestión técnica y negociaciones 
              está listo para ayudarte en tu carrera profesional.
            </p>
            <Link href="/#contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base">
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


