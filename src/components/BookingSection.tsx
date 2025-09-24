import { useState } from "react";
import { ChevronDown, User, Calendar, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mentor2 from "@/assets/mentor-2.jpg";

const BookingSection = () => {
  const [selectedArea, setSelectedArea] = useState("");
  
  const studyAreas = [
    "Selecione a sua área de estudo...",
    "Medicina e Ciências da Saúde",
    "Engenharia e Tecnologia", 
    "Direito e Ciências Jurídicas",
    "Gestão e Economia",
    "Psicologia e Ciências Sociais",
    "Arquitetura e Design",
    "Comunicação e Marketing",
    "Matemática e Estatística"
  ];

  const featuredMentor = {
    name: "Prof. Miguel Torres",
    speciality: "Engenharia de Software",
    experience: "12 anos",
    rating: 4.8,
    students: 95,
    image: mentor2,
    nextAvailable: "Hoje às 16:00",
    price: "25€/hora",
    bio: "Especialista em programação e algoritmos, com vasta experiência em preparação para exames de engenharia informática."
  };

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Encontre o seu mentor ideal e{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">comece hoje</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Selecione a sua área de estudo e conecte-se instantaneamente com mentores especializados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Study Area Selection */}
          <div className="space-y-8 animate-slide-up">
            
            <Card className="bg-background/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 space-y-6">
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary-foreground flex items-center gap-3">
                    <BookOpen className="w-6 h-6" />
                    Escolha a sua área de estudo
                  </h3>
                  
                  {/* Custom Dropdown */}
                  <div className="relative">
                    <select 
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full bg-background/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-4 text-primary-foreground appearance-none cursor-pointer hover:bg-background/30 transition-all duration-300"
                    >
                      {studyAreas.map((area, index) => (
                        <option key={index} value={area} className="bg-background text-foreground">
                          {area}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/70 pointer-events-none" />
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <h4 className="font-semibold text-primary-foreground/90">
                    O que está incluído:
                  </h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    {[
                      "Sessão personalizada 1:1",
                      "Plano de estudo customizado", 
                      "Recursos e materiais exclusivos",
                      "Suporte contínuo via chat",
                      "Garantia de satisfação 100%"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-primary-foreground/80">Disponibilidade</div>
              </div>
              <div className="text-center bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-primary-foreground/80">Taxa sucesso</div>
              </div>
              <div className="text-center bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-primary-foreground/80">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Featured Mentor */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Card className="bg-background border-0 shadow-large hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Mentor recomendado para si
                  </h3>
                  <p className="text-muted-foreground">
                    Com base na área selecionada
                  </p>
                </div>

                {/* Mentor Info */}
                <div className="flex items-center gap-6">
                  
                  {/* Avatar */}
                  <div className="relative">
                    <img 
                      src={featuredMentor.image}
                      alt={featuredMentor.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                      ⭐
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-xl font-bold text-foreground">
                      {featuredMentor.name}
                    </h4>
                    <p className="text-primary font-medium">
                      {featuredMentor.speciality}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span>{featuredMentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredMentor.students} estudantes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed">
                  {featuredMentor.bio}
                </p>

                {/* Availability & Price */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-subtle rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-accent mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">Disponível</span>
                    </div>
                    <div className="text-sm text-foreground">
                      {featuredMentor.nextAvailable}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {featuredMentor.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Primeira sessão 50% OFF
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button variant="cta" className="w-full text-lg py-6">
                    Marcar sessão com {featuredMentor.name.split(' ')[1]}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Ver perfil completo
                  </Button>
                </div>

                {/* Trust signals */}
                <div className="text-center pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    ✅ Verificado • 🛡️ Pagamento seguro • 🔄 Cancelamento gratuito
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;