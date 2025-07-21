import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Wrench } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "+5551996595733";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para montagem de móveis.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Montagem de Móveis com
          <span className="block text-accent">Rapidez e Garantia</span>
          em Porto Alegre
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Atendimento rápido, preço justo e mais de 100 clientes satisfeitos
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Garantia de qualidade</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span>Atendimento rápido</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span>+100 clientes satisfeitos</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-accent" />
            <span>Ferramentas profissionais</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            ✅ Solicite um Orçamento no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;