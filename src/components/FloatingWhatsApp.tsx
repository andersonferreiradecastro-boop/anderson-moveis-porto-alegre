import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "+5551996595733";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para montagem de móveis.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all animate-pulse"
        asChild
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chamar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;