import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: ["(11) 3456-7890", "Segunda a Sexta: 9h às 18h"]
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      content: ["(11) 98765-4321", "Atendimento Online"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: ["contato@leblanc.com.br", "vendas@leblanc.com.br"]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Loja Física",
      content: ["Rua Oscar Freire, 900", "Jardins - São Paulo/SP"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="font-montserrat text-muted-foreground">
              Estamos aqui para tornar seus sonhos em joias realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 border-0">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-gold-dark text-primary-foreground"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.content.map((line, i) => (
                        <p key={i} className="font-montserrat text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="p-0 border-0 overflow-hidden h-64">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="font-montserrat text-muted-foreground">
                      Visite nossa loja física
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;