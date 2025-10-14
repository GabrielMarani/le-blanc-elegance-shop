import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix for default marker icon
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  // São Paulo coordinates
  const position: [number, number] = [-23.5505, -46.6333];

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

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-luxury">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={defaultIcon}>
              <Popup>
                <div className="text-center p-2">
                  <h3 className="font-playfair font-bold text-lg mb-1">Le Blanc Joalheria</h3>
                  <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
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
