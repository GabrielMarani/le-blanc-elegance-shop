import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag, Filter } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const products = [
  { id: 1, name: "Anel Eternidade", price: "R$ 8.500,00", priceValue: 8500, category: "aneis", image: "/ring-1.jpg", description: "Anel em ouro branco 18k com diamantes" },
  { id: 2, name: "Colar Imperatriz", price: "R$ 12.300,00", priceValue: 12300, category: "colares", image: "/necklace-1.jpg", description: "Colar em ouro amarelo com esmeraldas" },
  { id: 3, name: "Brincos Royale", price: "R$ 6.800,00", priceValue: 6800, category: "brincos", image: "/earrings-1.jpg", description: "Brincos em ouro rosé com pérolas" },
  { id: 4, name: "Pulseira Infinito", price: "R$ 5.200,00", priceValue: 5200, category: "pulseiras", image: "/bracelet-1.jpg", description: "Pulseira em ouro amarelo 18k" },
  { id: 5, name: "Anel Solitário", price: "R$ 15.000,00", priceValue: 15000, category: "aneis", image: "/ring-2.jpg", description: "Anel solitário com diamante 1ct" },
  { id: 6, name: "Colar Pérolas", price: "R$ 9.800,00", priceValue: 9800, category: "colares", image: "/necklace-2.jpg", description: "Colar de pérolas Akoya" },
  { id: 7, name: "Brincos Diamante", price: "R$ 11.500,00", priceValue: 11500, category: "brincos", image: "/earrings-2.jpg", description: "Brincos com diamantes lapidação brilhante" },
  { id: 8, name: "Pulseira Tennis", price: "R$ 18.900,00", priceValue: 18900, category: "pulseiras", image: "/bracelet-2.jpg", description: "Pulseira tennis com diamantes" },
];

const categories = [
  { value: "all", label: "Todos" },
  { value: "aneis", label: "Anéis" },
  { value: "colares", label: "Colares" },
  { value: "pulseiras", label: "Pulseiras" },
  { value: "brincos", label: "Brincos" },
];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addItem } = useCart();

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossa Coleção
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="font-montserrat text-muted-foreground">
              Peças exclusivas criadas com perfeição artesanal
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value 
                  ? "bg-primary hover:bg-gold-dark" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-luxury transition-all duration-300 border-0"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-secondary to-background">
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
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-xs text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      size="icon"
                      className="bg-primary hover:bg-gold-dark text-primary-foreground h-8 w-8"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collection;