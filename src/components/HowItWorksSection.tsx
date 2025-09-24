import { Search, UserCheck, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Escolha o seu curso",
      description: "Selecione a sua área de estudo ou disciplina específica onde precisa de apoio.",
      color: "bg-gradient-primary"
    },
    {
      number: "02", 
      icon: UserCheck,
      title: "Encontre o mentor ideal",
      description: "O nosso algoritmo conecta-o automaticamente com mentores especializados na sua área.",
      color: "bg-gradient-accent"
    },
    {
      number: "03",
      icon: Calendar,
      title: "Marque e comece a aprender",
      description: "Agende a sua primeira sessão e inicie a sua jornada de aprendizagem personalizada.",
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Como</span>{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Três passos simples para começar a sua experiência de aprendizagem personalizada
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
              )}

              <div className="relative z-10 text-center space-y-6">
                
                {/* Number Badge */}
                <div className="relative inline-block">
                  <div className={`${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-large group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-4 bg-background rounded-xl shadow-soft border border-border/50">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6 animate-fade-in">
          <div className="bg-background rounded-2xl p-8 shadow-medium border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de estudantes que já transformaram os seus resultados académicos.
            </p>
            <button className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold shadow-medium hover:shadow-large transform hover:scale-105 transition-all duration-300">
              Iniciar agora - É gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;