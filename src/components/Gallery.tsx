import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Using placeholder images for furniture assembly
  const images = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Quarto montado profissionalmente",
      title: "Quarto Completo"
    },
    {
      src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sala de estar com móveis montados",
      title: "Sala de Estar"
    },
    {
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cozinha com móveis planejados",
      title: "Cozinha Planejada"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Escritório home office",
      title: "Home Office"
    },
    {
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Estante montada",
      title: "Estantes e Prateleiras"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Guarda-roupa montado",
      title: "Guarda-roupas"
    }
  ];

  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de Trabalhos Realizados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos de montagem e veja a qualidade do nosso serviço
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;