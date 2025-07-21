import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana",
      location: "Porto Alegre",
      text: "Serviço excelente! Montou tudo certinho e ainda limpou depois. Recomendo!",
      rating: 5
    },
    {
      name: "Felipe",
      location: "Canoas",
      text: "Rápido, educado e profissional. Já é o segundo móvel que ele monta aqui em casa!",
      rating: 5
    },
    {
      name: "Maria",
      location: "Viamão",
      text: "Pontual e caprichoso no trabalho. O guarda-roupa ficou perfeito!",
      rating: 5
    },
    {
      name: "Carlos",
      location: "Gravataí",
      text: "Preço justo e qualidade excepcional. Super indico o Anderson!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com nosso serviço
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-foreground text-lg mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-right">
                  <cite className="text-muted-foreground font-semibold">
                    — {testimonial.name}, {testimonial.location}
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;