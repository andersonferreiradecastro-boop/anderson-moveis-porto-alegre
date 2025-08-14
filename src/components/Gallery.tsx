import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Real photos from Anderson's furniture assembly work
  const images = [
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/330a9809-d305-422d-aee1-6568f269c326.png",
      alt: "Móveis montados profissionalmente",
      title: "Móveis Planejados para Cozinha"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/8c253f8d-c1e7-42b0-b1a8-7f6e47a0e099.png",
      alt: "Guarda-roupa montado com perfeição",
      title: "Guarda-roupa Completo"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/cf2a8e84-e2a5-4fc9-9dd9-40f778a7bccf.png",
      alt: "Armário de quarto montado",
      title: "Armário de Quarto com Gavetas"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/c471e781-61e8-4d49-a96e-a031c714dadb.png",
      alt: "Cozinha planejada montada",
      title: "Cozinha Planejada Completa"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/2249d24b-ebd5-4fa0-9cd3-149fddeaceaf.png",
      alt: "Móveis de quarto montados",
      title: "Guarda-roupa Grande"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/7ddc7372-95cd-49c8-be8a-2a56f04e9697.png",
      alt: "Painel de TV montado com perfeição",
      title: "Home Theater Completo"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/097d26e2-9659-43f2-bd07-fd568593eeb3.png",
      alt: "Cozinha montada profissionalmente",
      title: "Cozinha Planejada Moderna"
    },
    {
      src: "/anderson-moveis-porto-alegre/lovable-uploads/a82b41c3-c67c-4e13-b5d0-6af3a07779c6.png",
      alt: "Cozinha em L montada",
      title: "Cozinha Planejada em L"
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