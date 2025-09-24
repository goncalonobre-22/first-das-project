import { TrendingUp, Clock, Users2, Target, Brain, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Melhores Resultados Académicos", 
      description: "Aumento médio de 25% nas classificações dos nossos estudantes em apenas 3 meses.",
      stat: "+25%",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Sessões adaptadas ao seu horário, incluindo fins de semana e períodos de exames.",
      stat: "24/7", 
      color: "text-accent"
    },
    {
      icon: Users2,
      title: "Suporte Personalizado",
      description: "Acompanhamento individualizado com mentores especializados na sua área de estudo.",
      stat: "1:1",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Planos de estudo estruturados com metas específicas e progresso mensurável.",
      stat: "100%",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "Métodos Comprovados",
      description: "Técnicas de aprendizagem baseadas em neurociência e pedagogia moderna.",
      stat: "Eficaz",
      color: "text-primary"
    },
    {
      icon: Network,
      title: "Networking Académico",
      description: "Conexão com uma comunidade de estudantes e profissionais da sua área.",
      stat: "500+",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Benefícios que fazem a</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Descubra como a nossa plataforma transforma a experiência de aprendizagem 
            e acelera o sucesso académico dos nossos estudantes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-large transition-all duration-500 border-0 bg-gradient-subtle hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                
                {/* Header with Icon and Stat */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-primary/10 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-2xl font-bold ${benefit.color} opacity-80`}>
                    {benefit.stat}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Progress bar effect */}
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${(index + 1) * 16}%` }}
                  ></div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground animate-fade-in">
          <h3 className="text-3xl font-bold mb-8">Resultados que falam por si</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Taxa de aprovação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-primary-foreground/80">Avaliação média</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">2.5x</div>
              <div className="text-primary-foreground/80">Melhoria de notas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-primary-foreground/80">Satisfação garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;