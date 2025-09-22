import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Marina Santos",
    rating: 5,
    comment: "Atendimento impecável e joias de qualidade excepcional. Meu anel de noivado ficou perfeito!",
    date: "Há 2 semanas"
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    rating: 5,
    comment: "A Le Blanc superou todas as minhas expectativas. Design único e acabamento perfeito.",
    date: "Há 1 mês"
  },
  {
    id: 3,
    name: "Ana Paula Ferreira",
    rating: 5,
    comment: "Joias deslumbrantes! A qualidade e o cuidado com os detalhes são incomparáveis.",
    date: "Há 1 mês"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 px-4 bg-background fade-in-element">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="font-montserrat text-muted-foreground">
            A satisfação de nossos clientes é nossa maior joia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="p-6 hover:shadow-luxury transition-all duration-300 border-0 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="font-montserrat text-muted-foreground mb-4 italic">
                "{review.comment}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-montserrat font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="font-montserrat text-sm text-muted-foreground">
                  {review.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;