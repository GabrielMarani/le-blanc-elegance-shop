import { Award, Gem, Shield, Clock } from "lucide-react";
import aboutImage from "@/assets/about-jewelry.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: <Gem className="h-8 w-8" />,
      title: "Pedras Preciosas",
      description: "Selecionadas com rigor e certificação internacional"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Design Exclusivo",
      description: "Criações únicas por designers renomados"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia Vitalícia",
      description: "Proteção completa para suas joias"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Tradição",
      description: "25 anos de excelência em joalheria"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary to-background fade-in-element border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              A História da <span className="text-primary">Le Blanc</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6" />
            <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
              Há mais de duas décadas, a Le Blanc tem sido sinônimo de excelência no mundo da alta joalheria. 
              Nossa jornada começou com um sonho simples: criar peças que transcendem o tempo, combinando 
              tradição artesanal com design contemporâneo.
            </p>
            <p className="font-montserrat text-muted-foreground mb-8 leading-relaxed">
              Cada joia Le Blanc é meticulosamente criada por mestres joalheiros, utilizando apenas os materiais 
              mais nobres e pedras preciosas selecionadas. Nossa missão é transformar momentos especiais em 
              memórias eternas através da beleza e elegância de nossas criações.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary">{feature.icon}</div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="font-montserrat text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-lg" />
            <img
              src={aboutImage}
              alt="Le Blanc Atelier"
              className="rounded-lg shadow-luxury w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;