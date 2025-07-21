import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Anderson Montador de Móveis</h3>
          <p className="text-primary-foreground/80">
            Montagem profissional em Porto Alegre e Região
          </p>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-4">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 fill-red-500 text-red-500" /> para conectar você aos melhores serviços
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;