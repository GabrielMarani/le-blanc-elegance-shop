import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Le Blanc
            </h3>
            <p className="font-montserrat text-sm text-luxury-gray mb-4">
              Joias exclusivas que contam histórias e celebram momentos únicos.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/collection"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Coleção
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Categorias
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/collection?category=aneis"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Anéis
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=colares"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Colares
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=pulseiras"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Pulseiras
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=brincos"
                  className="font-montserrat text-sm text-luxury-gray hover:text-primary transition-colors"
                >
                  Brincos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="font-montserrat text-sm text-luxury-gray">
                    (11) 3456-7890
                  </p>
                  <p className="font-montserrat text-sm text-luxury-gray">
                    WhatsApp: (11) 98765-4321
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <p className="font-montserrat text-sm text-luxury-gray">
                  contato@leblanc.com.br
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p className="font-montserrat text-sm text-luxury-gray">
                  Rua Oscar Freire, 900<br />
                  São Paulo - SP
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gray/20 mt-8 pt-8 text-center">
          <p className="font-montserrat text-sm text-luxury-gray">
            © 2025 Le Blanc - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;