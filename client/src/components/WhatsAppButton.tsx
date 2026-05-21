import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

/**
 * WhatsApp Floating Button
 * Design: Minimalismo Legal Corporativo
 * - Botón flotante con opciones de contacto
 * - Números de WhatsApp del equipo
 */

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappContacts = [
    {
      name: "Dr. Alberto José Estevez",
      phone: "541133128468",
      displayPhone: "+54 9 1133128468",
    },
    {
      name: "Felipe Manuel Alberto Acuña",
      phone: "541160155063",
      displayPhone: "+54 9 1160155063",
    },
  ];

  const handleWhatsAppClick = (phone: string) => {
    const message = "Hola, me gustaría conocer más sobre los servicios de Nexus Fútbol & Business.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Menu */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-border p-4 w-72 animate-in fade-in slide-in-from-bottom-2">
            <h3 className="font-bold text-foreground mb-4 text-sm">
              Contacta con nuestro equipo por WhatsApp
            </h3>
            <div className="space-y-3">
              {whatsappContacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(contact.phone)}
                  className="w-full flex items-start gap-3 p-3 hover:bg-secondary rounded-lg transition-colors text-left"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">
                      {contact.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contact.displayPhone}
                    </p>
                  </div>
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              Responderemos tu consulta en el menor tiempo posible.
            </p>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Abrir WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
