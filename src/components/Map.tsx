import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      // São Paulo coordinates
      const spCoordinates: [number, number] = [-46.6333, -23.5505];
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: spCoordinates,
        zoom: 12,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for Le Blanc location
      new mapboxgl.Marker({ color: '#D4AF37' })
        .setLngLat(spCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="text-center p-2"><h3 class="font-playfair font-bold text-lg">Le Blanc Joalheria</h3><p class="text-sm">São Paulo, Brasil</p></div>')
        )
        .addTo(map.current);

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }
  };

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

        {!isMapInitialized && (
          <div className="max-w-md mx-auto mb-8 p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-montserrat font-semibold text-foreground">
                Configurar Mapa
              </h3>
            </div>
            <p className="font-montserrat text-sm text-muted-foreground mb-4">
              Insira sua chave pública do Mapbox para visualizar nossa localização.
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Obter chave aqui
              </a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="pk.eyJ1IjoiZXhhbXBsZS..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-montserrat"
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={!mapboxToken}
              >
                Inicializar Mapa
              </Button>
            </form>
          </div>
        )}

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-luxury">
          <div ref={mapContainer} className="absolute inset-0" />
          {!isMapInitialized && (
            <div className="absolute inset-0 bg-card/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="font-montserrat text-muted-foreground">
                  Aguardando configuração do mapa
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="font-montserrat text-foreground font-semibold mb-2">
            Le Blanc Joalheria
          </p>
          <p className="font-montserrat text-muted-foreground text-sm">
            São Paulo, Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
