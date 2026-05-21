import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#001F3F] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Términos y Condiciones</h1>
          <p className="text-blue-100 mt-4">Última actualización: 18 de Mayo de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
            <p className="text-muted-foreground mb-4">
              Al acceder y utilizar este sitio web de Nexus Fútbol & Business, aceptas estar vinculado por estos Términos 
              y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso Permitido</h2>
            <p className="text-muted-foreground mb-4">
              El sitio web se proporciona únicamente para fines legales y de acuerdo con estos términos. Al utilizar nuestro 
              sitio, garantizas que:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Tienes al menos 18 años de edad</li>
              <li>No utilizarás el sitio para actividades ilegales o no autorizadas</li>
              <li>No transmitirás contenido ofensivo, difamatorio o ilegal</li>
              <li>No intentarás obtener acceso no autorizado al sitio</li>
              <li>No interferirás con el funcionamiento del sitio</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo el contenido del sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de 
              Nexus Fútbol & Business o de sus proveedores de contenido y está protegido por leyes de derechos de autor 
              internacionales. No puedes reproducir, distribuir o transmitir ningún contenido sin permiso previo por escrito.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              En la máxima medida permitida por la ley, Nexus Fútbol & Business no será responsable por:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Daños indirectos, incidentales, especiales o consecuentes</li>
              <li>Pérdida de datos, ingresos o ganancias</li>
              <li>Interrupción del servicio o disponibilidad del sitio</li>
              <li>Errores u omisiones en el contenido</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Descargo de Responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              El sitio web se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. Nexus Fútbol & 
              Business no garantiza que el sitio sea:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Libre de errores o defectos</li>
              <li>Ininterrumpido o seguro</li>
              <li>Libre de virus u otros componentes dañinos</li>
              <li>Adecuado para un propósito particular</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Servicios Profesionales</h2>
            <p className="text-muted-foreground mb-4">
              Los servicios ofrecidos por Nexus Fútbol & Business incluyen asesoría legal, técnica y profesional. Estos 
              servicios son proporcionados por profesionales calificados. Sin embargo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>No garantizamos resultados específicos</li>
              <li>La información proporcionada es de carácter general</li>
              <li>Recomendamos consultar con profesionales especializados para casos específicos</li>
              <li>El cliente es responsable de sus decisiones finales</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Formulario de Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Al completar y enviar el formulario de contacto, aceptas que tu información será utilizada para responder a 
              tu consulta. Al marcar el checkbox de consentimiento, autorizas a Nexus Fútbol & Business a contactarte 
              mediante los datos proporcionados.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Enlaces Externos</h2>
            <p className="text-muted-foreground mb-4">
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, precisión 
              o prácticas de estos sitios. El acceso a enlaces externos es bajo tu propio riesgo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modificación de Términos</h2>
            <p className="text-muted-foreground mb-4">
              Nexus Fútbol & Business se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación. Tu uso continuado del sitio constituye 
              tu aceptación de los términos modificados.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Terminación</h2>
            <p className="text-muted-foreground mb-4">
              Nos reservamos el derecho de terminar o suspender el acceso al sitio en cualquier momento, sin previo aviso, 
              por cualquier razón, incluyendo violación de estos términos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Ley Aplicable</h2>
            <p className="text-muted-foreground mb-4">
              Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa se someterá 
              a la jurisdicción exclusiva de los tribunales de Buenos Aires, Argentina.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Si tienes preguntas sobre estos Términos y Condiciones, contacta con nosotros:
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
              <p className="text-muted-foreground"><strong>Email:</strong> info@nexusfootballbusiness.com</p>
              <p className="text-muted-foreground"><strong>Teléfono:</strong> +54 9 1133128468</p>
              <p className="text-muted-foreground"><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
