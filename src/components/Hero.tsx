import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-luxury-black to-luxury-brown">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/50 via-transparent to-luxury-brown/50" />
      <img 
        src={heroImage}
        alt="Le Blanc Luxury Jewelry"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          A beleza da elegância
          <span className="block text-primary mt-2 font-great-vibes text-6xl md:text-8xl font-normal">em cada detalhe</span>
        </h1>
        
        <p className="font-montserrat text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in animation-delay-200">
          Descubra nossa coleção exclusiva de joias que transcendem o tempo
        </p>
        
        <Link to="/collection">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-gold-dark text-primary-foreground font-montserrat uppercase tracking-wider px-8 py-6 text-sm animate-fade-in animation-delay-400 transition-all duration-300 hover:scale-105 border-2 border-primary"
          >
            Conheça nossa coleção
          </Button>
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;