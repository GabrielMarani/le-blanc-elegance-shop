import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-gray to-luxury-black opacity-10" />
      <img 
        src={heroImage}
        alt="Le Blanc Luxury Jewelry"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.7)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-luxury-black mb-6 animate-fade-in">
          A beleza da elegância
          <span className="block text-primary mt-2">em cada detalhe</span>
        </h1>
        
        <p className="font-montserrat text-lg md:text-xl text-luxury-gray mb-8 animate-fade-in animation-delay-200">
          Descubra nossa coleção exclusiva de joias que transcendem o tempo
        </p>
        
        <Link to="/collection">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-gold-dark text-primary-foreground font-montserrat uppercase tracking-wider px-8 py-6 text-sm animate-fade-in animation-delay-400 transition-all duration-300 hover:scale-105"
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