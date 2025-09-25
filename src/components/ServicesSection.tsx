import { BookOpen, Users, Lightbulb, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Mentoria Individual",
      description: "Sessões personalizadas um-para-um com mentores especializados na sua área de estudo.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Matching Personalizado", 
      description: "Algoritmo inteligente que conecta estudantes com o mentor mais adequado ao seu curso.",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Workshops Especializados",
      description: "Sessões em grupo focadas em temas específicos e técnicas de estudo avançadas.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Masterclasses Exclusivas",
      description: "Aulas magistrais com especialistas reconhecidos em diversas áreas académicas.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">O que</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">oferecemos</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma plataforma completa de aprendizagem com mentores especializados 
            para acelerar o seu progresso académico e profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-subtle animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                
                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-primary/10 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;