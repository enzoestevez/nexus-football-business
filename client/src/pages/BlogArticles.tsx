import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, User, ArrowLeft } from "lucide-react";

/**
 * Blog Articles Page
 * Design: hub editorial alineado con la consultoría integral.
 * - Tono institucional consistente con la home
 * - Tarjetas claras, legibles y ordenadas para móvil
 * - Navegación directa a artículos individuales
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
      
      <p>Cuando un futbolista se transfiere a un nuevo club, el contrato de transferencia es el documento más importante que define los términos de la operación. Conocer las cláusulas esenciales te protege de sorpresas desagradables y asegura que tus intereses estén protegidos.</p>
      
      <h3>1. Cláusula de Rescisión</h3>
      <p>Esta cláusula establece el monto que debe pagar un tercero para "rescatar" tu contrato. Es fundamental negociar una cantidad justa que refleje tu valor en el mercado.</p>
      
      <h3>2. Cláusula de Derechos de Imagen</h3>
      <p>Define quién tiene derecho a explotar comercialmente tu imagen. Asegúrate de retener el máximo control posible sobre tus derechos de imagen.</p>
      
      <h3>3. Cláusula de Duración</h3>
      <p>Especifica la duración del contrato. Negocia términos que te permitan estabilidad pero también flexibilidad para tu carrera.</p>
      
      <h3>4. Cláusula de Salario y Beneficios</h3>
      <p>Detalla tu remuneración, bonificaciones por desempeño y otros beneficios. Asegúrate de que todo esté claramente especificado.</p>
      
      <p>En Nexus Fútbol & Business, nuestro equipo legal especializado revisa cada cláusula para asegurar que tus intereses estén protegidos.</p>
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
      
      <p>Una evaluación médica completa antes de una transferencia es esencial para proteger tanto al futbolista como al club receptor. Esta auditoría radiológica integral previene problemas futuros y asegura que el jugador llegue en óptimas condiciones.</p>
      
      <h3>¿Por qué es importante?</h3>
      <p>Muchas transferencias fracasan debido a problemas médicos no detectados. Una evaluación completa evita sorpresas desagradables después de la firma.</p>
      
      <h3>Componentes de la evaluación</h3>
      <ul>
        <li>Examen físico completo</li>
        <li>Radiografías y resonancias magnéticas</li>
        <li>Pruebas de laboratorio</li>
        <li>Evaluación cardiovascular</li>
        <li>Análisis de antecedentes de lesiones</li>
      </ul>
      
      <p>En Nexus Fútbol & Business, contamos con especialistas que realizan evaluaciones exhaustivas para dar mayor previsibilidad a cada operación.</p>
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
      
      <p>La elección del club correcto va mucho más allá del salario. El contexto táctico, el estilo de juego del equipo y la filosofía del entrenador son factores cruciales para el desarrollo profesional.</p>
      
      <h3>Factores a considerar</h3>
      <p><strong>Sistema de juego:</strong> ¿Se adapta tu posición y tus características al sistema del club?</p>
      <p><strong>Estilo de juego:</strong> ¿Coincide con tu forma de competir?</p>
      <p><strong>Competencia:</strong> ¿Cuál es el nivel de competencia en tu posición?</p>
      <p><strong>Proyecto del club:</strong> ¿Es una estructura en crecimiento o en retroceso?</p>
      
      <h3>Análisis profesional</h3>
      <p>Nuestro equipo analiza cada oportunidad desde una perspectiva táctica para que la decisión deportiva tenga coherencia y proyección.</p>
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
      
      <p>Las negociaciones internacionales son complejas y requieren estrategia, conocimiento del mercado y timing. Una oportunidad importante necesita análisis para convertirse en una decisión valiosa.</p>
      
      <h3>Estrategias clave</h3>
      <p><strong>Conocimiento del mercado:</strong> entender valores y dinámicas de distintas ligas es fundamental.</p>
      <p><strong>Timing:</strong> el momento de la negociación puede cambiar por completo el resultado.</p>
      <p><strong>Posicionamiento:</strong> la forma en que un jugador o proyecto se presenta ante clubes e interesados impacta directamente en su valor.</p>
      
      <h3>Nuestro enfoque</h3>
      <p>En Nexus Fútbol & Business trabajamos con criterio comercial y lectura estratégica para fortalecer cada negociación.</p>
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
      
      <p>Los derechos de imagen y laborales son aspectos cruciales dentro de la carrera profesional de un futbolista. Comprender su alcance permite negociar con mayor claridad y proteger mejor el recorrido deportivo.</p>
      
      <h3>Derechos de imagen</h3>
      <p>Incluyen el uso del nombre, la imagen, la voz y otros elementos de identidad con fines comerciales. Tienen valor económico y requieren tratamiento específico.</p>
      
      <h3>Derechos laborales</h3>
      <p>Incluyen condiciones de trabajo, ambiente seguro, cumplimiento salarial y resguardo de beneficios pactados.</p>
      
      <h3>Negociación efectiva</h3>
      <p>Negociar cláusulas con criterio jurídico ayuda a proteger la posición del jugador y a sostener su valor profesional y comercial.</p>
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
      
      <p>Cuando un futbolista queda sin club, el proceso de colocación necesita un enfoque integral que combine evaluación profesional, posicionamiento estratégico y negociación efectiva.</p>
      
      <h3>Fase 1: evaluación integral</h3>
      <p>Se analiza el perfil técnico, físico y competitivo para ordenar fortalezas, debilidades y oportunidades reales.</p>
      
      <h3>Fase 2: posicionamiento en el mercado</h3>
      <p>Se construye una estrategia de presentación y acercamiento a instituciones que respondan al momento profesional del jugador.</p>
      
      <h3>Fase 3: negociación y firma</h3>
      <p>Se negocian condiciones, se revisan cláusulas y se busca que el acuerdo final tenga coherencia deportiva, legal y económica.</p>
      
      <p>El objetivo no es solo volver a competir, sino hacerlo en un contexto más favorable y sostenible.</p>
    `,
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

export default function BlogArticles() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white mb-6 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Centro de conocimiento Nexus
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            Artículos sobre consultoría legal, gestión de carrera, negocio deportivo y decisiones
            estratégicas que impactan en futbolistas, clubes y proyectos vinculados al ecosistema del fútbol.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="border border-slate-200 hover:border-primary/40 transition-all duration-300 overflow-hidden hover:shadow-lg flex flex-col cursor-pointer h-full bg-white">
                  <div className="px-6 pt-6">
                    <Badge className={`${getCategoryColor(post.category)} hover:opacity-90`}>
                      {post.category}
                    </Badge>
                  </div>

                  <div className="flex-1 flex flex-col px-6 py-4">
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

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
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
