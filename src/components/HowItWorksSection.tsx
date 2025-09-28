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

      </div>
    </section>
  );
};

export default HowItWorksSection;