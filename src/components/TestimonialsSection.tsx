import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      course: "Engenharia Informática",
      university: "IST",
      rating: 5,
      text: "A mentoria transformou completamente a minha forma de estudar. O meu mentor ajudou-me a estruturar o estudo e as minhas notas melhoraram drasticamente. Recomendo a toda a gente!",
      avatar: "MS"
    },
    {
      name: "João Pedro",
      course: "Medicina",
      university: "FMUL",
      rating: 5, 
      text: "Estava com dificuldades em anatomia até encontrar o mentor perfeito. As sessões personalizadas fizeram toda a diferença. Passei de negativas a excelente em dois semestres.",
      avatar: "JP"
    },
    {
      name: "Ana Rodrigues",
      course: "Gestão",
      university: "Nova SBE",
      rating: 5,
      text: "O acompanhamento é fantástico. Não só melhorei academicamente como também desenvolvi competências que me ajudaram nos estágios. Vale cada cêntimo investido.",
      avatar: "AR"
    },
    {
      name: "Ricardo Santos",
      course: "Direito", 
      university: "Católica",
      rating: 5,
      text: "Excelente plataforma! O meu mentor não só me ajudou com a matéria como também me orientou na carreira. Sinto-me muito mais confiante nos exames e trabalhos.",
      avatar: "RS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">O que dizem os nossos</span>{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">estudantes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Histórias reais de sucesso de estudantes que transformaram 
            os seus resultados académicos com a nossa mentoria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-large transition-all duration-500 border-0 bg-background hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Student Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.course} • {testimonial.university}
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Verificado
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center space-y-8 animate-fade-in">
          <div className="bg-background rounded-2xl p-8 shadow-medium border border-border/50 max-w-4xl mx-auto">
            
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Junte-se a milhares de estudantes satisfeitos
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação média</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1.2k+</div>
                <div className="text-sm text-muted-foreground">Avaliações</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Recomendam</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Taxa sucesso</div>
              </div>
            </div>

            <button className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold shadow-medium hover:shadow-large transform hover:scale-105 transition-all duration-300">
              Ver todas as avaliações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;