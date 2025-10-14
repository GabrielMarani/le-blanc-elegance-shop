import { MapPin } from 'lucide-react';

const Map = () => {
  // São Paulo coordinates: -23.5505, -46.6333
  const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=-46.6533%2C-23.5605%2C-46.6133%2C-23.5405&layer=mapnik&marker=-23.5505%2C-46.6333";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Visite nosso atelier em São Paulo e conheça nossa coleção exclusiva
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-luxury border border-border">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            src={mapUrl}
            className="w-full h-full"
            title="Localização Le Blanc Joalheria"
          />
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="font-montserrat text-foreground font-semibold">
              Le Blanc Joalheria
            </p>
          </div>
          <p className="font-montserrat text-muted-foreground text-sm">
            Avenida Paulista, São Paulo - SP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
