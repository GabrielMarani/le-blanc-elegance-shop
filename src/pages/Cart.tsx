import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Seu carrinho está vazio!");
      return;
    }
    toast.success("Pedido realizado com sucesso!");
    clearCart();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Carrinho de Compras
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-playfair text-2xl text-foreground mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="font-montserrat text-muted-foreground mb-8">
                Adicione algumas joias maravilhosas à sua coleção
              </p>
              <Link to="/collection">
                <Button className="bg-primary hover:bg-gold-dark text-primary-foreground">
                  Explorar Coleção
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="p-4 border-0">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-secondary to-background rounded overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="font-montserrat text-lg text-primary font-semibold mt-1">
                          {formatPrice(item.price)}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-montserrat w-12 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          
                          <Button
                            size="icon"
                            variant="ghost"
                            className="ml-auto text-destructive hover:text-destructive"
                            onClick={() => {
                              removeItem(item.id);
                              toast.success("Item removido do carrinho");
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div>
                <Card className="p-6 sticky top-24 border-0">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                    Resumo do Pedido
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between font-montserrat text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between font-montserrat text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-primary">Grátis</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-montserrat">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-xl text-primary">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-primary hover:bg-gold-dark text-primary-foreground"
                  >
                    Finalizar Compra
                  </Button>
                  
                  <Link to="/collection">
                    <Button
                      variant="outline"
                      className="w-full mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Continuar Comprando
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;