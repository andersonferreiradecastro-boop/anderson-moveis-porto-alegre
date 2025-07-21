import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const whatsappNumber = "+5551996595733";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para montagem de móveis.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Anderson Montador</h1>
          <p className="text-sm opacity-90">Porto Alegre e Região</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hidden sm:flex"
            asChild
          >
            <a href={`tel:${whatsappNumber}`}>
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </a>
          </Button>
          
          <Button
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
            size="sm"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;