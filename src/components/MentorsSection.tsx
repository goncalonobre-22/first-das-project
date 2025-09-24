import { Star, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg"; 
import mentor3 from "@/assets/mentor-3.jpg";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Dra. Sofia Costa",
      speciality: "Medicina e Ciências da Saúde",
      experience: "8 anos",
      rating: 4.9,
      students: 120,
      image: mentor1,
      tags: ["Anatomia", "Fisiologia", "Preparação Exames"],
      bio: "Médica especialista com mestrado em Educação Médica. Focada em técnicas de memorização para ciências da saúde."
    },
    {
      name: "Prof. Miguel Torres", 
      speciality: "Engenharia e Tecnologia",
      experience: "12 anos",
      rating: 4.8,
      students: 95,
      image: mentor2,
      tags: ["Programação", "Matemática", "Física"],
      bio: "Engenheiro de software sénior e professor universitário. Especialista em didática de programação e resolução de problemas."
    },
    {
      name: "Dra. Catarina Neves",
      speciality: "Gestão e Economia",
      experience: "6 anos", 
      rating: 4.9,
      students: 85,
      image: mentor3,
      tags: ["Finanças", "Estatística", "Estratégia"],
      bio: "Consultora empresarial com doutoramento em Gestão. Foca em aplicação prática de conceitos teóricos."
    }
  ];

  return (
    <section id="mentors-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Conheça os nossos</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">mentores estrela</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Profissionais experientes e qualificados, prontos para acelerar 
            o seu sucesso académico com métodos comprovados.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-large transition-all duration-500 border-0 bg-gradient-subtle hover:-translate-y-2 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0 space-y-0">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/10 transition-colors duration-300"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="font-semibold text-sm">{mentor.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Name and Speciality */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {mentor.speciality}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {mentor.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{mentor.experience} exp.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{mentor.students} estudantes</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="cta" 
                    className="w-full mt-4"
                  >
                    Marcar sessão
                  </Button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Mentors CTA */}
        <div className="text-center mt-16 space-y-6 animate-fade-in">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Mais de 50 mentores especializados
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Encontre o mentor perfeito para a sua área de estudo. 
              Temos especialistas em todas as principais disciplinas académicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline-white" size="lg">
                Ver todos os mentores
              </Button>
              <Button variant="cta" size="lg" className="bg-accent hover:bg-accent-glow">
                Encontrar o meu mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;