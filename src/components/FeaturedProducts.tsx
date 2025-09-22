import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const featuredProducts = [
  {
    id: 1,
    name: "Anel Eternidade",
    price: "R$ 8.500,00",
    priceValue: 8500,
    image: "/ring-1.jpg",
    description: "Anel em ouro branco 18k com diamantes"
  },
  {
    id: 2,
    name: "Colar Imperatriz",
    price: "R$ 12.300,00",
    priceValue: 12300,
    image: "/necklace-1.jpg",
    description: "Colar em ouro amarelo com esmeraldas"
  },
  {
    id: 3,
    name: "Brincos Royale",
    price: "R$ 6.800,00",
    priceValue: 6800,
    image: "/earrings-1.jpg",
    description: "Brincos em ouro rosé com pérolas"
  }
];

const FeaturedProducts = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceValue,
      quantity: 1,
      image: product.image
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <section className="py-20 px-4 bg-background fade-in-element">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Destaques Premium
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="font-montserrat text-muted-foreground">
            Peças exclusivas selecionadas especialmente para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-luxury transition-all duration-500 border-0 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-80 bg-gradient-to-br from-secondary to-background">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-montserrat text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-xl font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="sm"
                    className="bg-primary hover:bg-gold-dark text-primary-foreground"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat uppercase tracking-wider"
          >
            Ver Toda Coleção
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;