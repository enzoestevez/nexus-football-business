import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidad</h1>
          <p className="text-blue-100 mt-4">Última actualización: 18 de Mayo de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
            <p className="text-muted-foreground mb-4">
              Nexus Fútbol & Business ("nosotros", "nuestro" o "la Empresa") se compromete a proteger tu privacidad. 
              Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos tu información 
              cuando visitas nuestro sitio web y utilizas nuestros servicios.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
            <p className="text-muted-foreground mb-4">Recopilamos información de varias formas:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Información que proporcionas voluntariamente:</strong> Nombre, correo electrónico, teléfono y mensaje cuando completas nuestro formulario de contacto.</li>
              <li><strong>Información de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia.</li>
              <li><strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar tu experiencia en nuestro sitio.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cómo Utilizamos tu Información</h2>
            <p className="text-muted-foreground mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Proporcionar, mantener y mejorar nuestros servicios</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraude y actividades ilícitas</li>
              <li>Analizar tendencias y mejorar la experiencia del usuario</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartición de Información</h2>
            <p className="text-muted-foreground mb-4">
              No vendemos, comercializamos ni transferimos tu información personal a terceros. Podemos compartir información 
              en los siguientes casos:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Con proveedores de servicios que nos asisten en operar nuestro sitio web</li>
              <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              <li>Con tu consentimiento explícito para fines específicos</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Seguridad de la Información</h2>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de seguridad administrativas, técnicas y físicas diseñadas para proteger tu información 
              personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de 
              transmisión por Internet es 100% seguro.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Retención de Datos</h2>
            <p className="text-muted-foreground mb-4">
              Retenemos tu información personal durante el tiempo necesario para cumplir con los fines para los cuales fue 
              recopilada, incluyendo para satisfacer requisitos legales, contables o de auditoría.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Tus Derechos</h2>
            <p className="text-muted-foreground mb-4">Tienes derecho a:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Acceder a tu información personal</li>
              <li>Solicitar la corrección de información inexacta</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
              <li>Recibir una copia de tu información en formato portátil</li>
            </ul>
            <p className="text-muted-foreground">
              Para ejercer estos derechos, contacta con nosotros en <strong>info@nexusfootballbusiness.com</strong>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación. Puedes controlar las cookies 
              a través de la configuración de tu navegador. La desactivación de cookies puede afectar la funcionalidad de 
              nuestro sitio.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Enlaces a Sitios Terceros</h2>
            <p className="text-muted-foreground mb-4">
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de 
              privacidad de estos sitios. Te recomendamos revisar la política de privacidad de cualquier sitio antes de 
              proporcionar tu información personal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Cambios a Esta Política</h2>
            <p className="text-muted-foreground mb-4">
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cambios significativos 
              publicando la nueva política en nuestro sitio web y actualizando la fecha de "Última actualización".
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, contacta con nosotros:
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
