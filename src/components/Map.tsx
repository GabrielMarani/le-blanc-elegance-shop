import { MapPin, Phone, Mail } from 'lucide-react';

const Map = () => {
  // Google Maps embed URL para São Paulo - Avenida Paulista
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977896092244!2d-46.656566!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890";

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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-luxury border border-border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapUrl}
              title="Localização Le Blanc Joalheria"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Visite Nossa Loja
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-foreground font-semibold">
                      Endereço
                    </p>
                    <p className="font-montserrat text-sm text-muted-foreground">
                      Avenida Paulista, 1578<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-foreground font-semibold">
                      Telefone
                    </p>
                    <p className="font-montserrat text-sm text-muted-foreground">
                      (11) 3456-7890<br />
                      (11) 98765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-foreground font-semibold">
                      E-mail
                    </p>
                    <p className="font-montserrat text-sm text-muted-foreground">
                      contato@leblanc.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-montserrat text-sm text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Horário de Funcionamento:</span>
              </p>
              <p className="font-montserrat text-sm text-muted-foreground">
                Segunda à Sexta: 10h - 19h<br />
                Sábado: 10h - 15h<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
