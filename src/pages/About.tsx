import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Award, Users, Globe, Sparkles } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1998", event: "Fundação da Le Blanc em São Paulo" },
    { year: "2005", event: "Abertura da primeira loja flagship" },
    { year: "2012", event: "Expansão internacional para Europa" },
    { year: "2018", event: "Lançamento da coleção sustentável" },
    { year: "2023", event: "25 anos de excelência em joalheria" },
  ];

  const values = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Excelência",
      description: "Compromisso com a mais alta qualidade em cada peça"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece atenção exclusiva"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Sustentabilidade",
      description: "Práticas responsáveis em toda nossa cadeia produtiva"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Inovação",
      description: "Unindo tradição artesanal com design contemporâneo"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        <AboutSection />
        
        {/* Timeline */}
        <div className="py-20 bg-secondary border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
              Nossa Jornada
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12" />
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center mb-8 animate-fade-in">
                  <div className="w-24 text-right mr-8">
                    <span className="font-playfair text-2xl font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative">
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1.5 w-0.5 h-24 bg-border" />
                    )}
                  </div>
                  <div className="ml-8 flex-1">
                    <p className="font-montserrat text-foreground">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
              Nossos Valores
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;