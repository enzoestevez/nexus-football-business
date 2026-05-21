import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Section
 * Design: Azul Marino Premium
 * - Tarjetas de contacto en azul marino
 * - Formulario con fondo azul y campos blancos
 * - Información de contacto clara y profesional
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    if (!consent) {
      toast.error("Debes aceptar la política de privacidad y términos para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/xdajojvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(
          "Mensaje enviado correctamente. Nos contactaremos pronto."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
      } else {
        toast.error("Error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contacta Con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground">
            ¿Tienes preguntas o deseas conocer más sobre nuestros servicios? 
            Estamos aquí para ayudarte a transformar tu carrera profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <Card className="border-0 p-8 bg-[#001F3F] hover:shadow-lg transition-shadow">
            <div className="inline-block p-3 bg-white/10 rounded-lg mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">Email</h3>
            <p className="text-blue-100 text-sm">
              info@nexusfootballbusiness.com
            </p>
          </Card>

          {/* Phone Card */}
          <Card className="border-0 p-8 bg-[#001F3F] hover:shadow-lg transition-shadow">
            <div className="inline-block p-3 bg-white/10 rounded-lg mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">Teléfono</h3>
            <div className="text-blue-100 text-sm space-y-1">
              <p><span className="font-semibold">Dr. Alberto José Estevez</span></p>
              <p>+54 9 1133128468</p>
              <p className="pt-2"><span className="font-semibold">Lic. Felipe Pietroniro</span></p>
              <p>+54 9 1160155063</p>
            </div>
          </Card>

          {/* Location Card */}
          <Card className="border-0 p-8 bg-[#001F3F] hover:shadow-lg transition-shadow">
            <div className="inline-block p-3 bg-white/10 rounded-lg mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">Ubicación</h3>
            <p className="text-blue-100 text-sm">
              Buenos Aires, Argentina
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-0 p-8 md:p-12 bg-[#001F3F] max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nombre Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-white text-foreground border-white focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-white text-foreground border-white focus:ring-blue-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Teléfono
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 9 XXXXXXXXXX"
                className="bg-white text-foreground border-white focus:ring-blue-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Mensaje *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                className="bg-white text-foreground border-white focus:ring-blue-300 min-h-32 resize-none"
                required
              />
            </div>

            <div className="flex items-start gap-3 py-4 border-t border-blue-400">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white bg-white cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-blue-100 cursor-pointer">
                Acepto la{" "}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 underline">
                  Política de Privacidad
                </a>
                {" "}y los{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 underline">
                  Términos y Condiciones
                </a>
                . Autorizo a Nexus Fútbol & Business a contactarme con la información proporcionada.
              </label>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting || !consent}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 text-base transition-colors"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </div>

            <p className="text-xs text-blue-100 text-center">
              Respetamos tu privacidad. Tu información será tratada de forma confidencial y enviada de forma segura.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
