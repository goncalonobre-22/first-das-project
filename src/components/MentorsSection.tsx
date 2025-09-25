import { Star, BookOpen, Users, Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg"; 
import mentor3 from "@/assets/mentor-3.jpg";

const MentorsSection = () => {
  const [expandedMentor, setExpandedMentor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const availableDates = [
    "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-22", "2024-01-23"
  ];

  const availableTimes = [
    "09:00", "10:30", "14:00", "15:30", "17:00"
  ];

  const handleBookingToggle = (mentorIndex: number) => {
    if (expandedMentor === mentorIndex) {
      setExpandedMentor(null);
      setSelectedDate("");
      setSelectedTime("");
    } else {
      setExpandedMentor(mentorIndex);
    }
  };
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
            <span className="bg-gradient-primary bg-clip-text text-transparent">mentores</span>
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
                    onClick={() => handleBookingToggle(index)}
                  >
                    {expandedMentor === index ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Fechar marcação
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Marcar sessão
                      </>
                    )}
                  </Button>

                  {/* Expandable Booking Interface */}
                  {expandedMentor === index && (
                    <div className="mt-6 p-6 bg-background/50 rounded-lg border border-border/30 animate-accordion-down">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Marcar sessão com {mentor.name}
                      </h4>
                      
                      {/* Date Selection */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Escolha uma data disponível:
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {availableDates.map((date) => (
                              <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                  selectedDate === date
                                    ? "bg-primary text-primary-foreground shadow-soft"
                                    : "bg-background/80 hover:bg-primary/10 text-foreground border border-border/50"
                                }`}
                              >
                                {new Date(date).toLocaleDateString("pt-PT", {
                                  day: "numeric",
                                  month: "short"
                                })}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Time Selection */}
                        {selectedDate && (
                          <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Escolha o horário:
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {availableTimes.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    selectedTime === time
                                      ? "bg-accent text-accent-foreground shadow-soft"
                                      : "bg-background/80 hover:bg-accent/10 text-foreground border border-border/50"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Confirm Button */}
                        {selectedDate && selectedTime && (
                          <Button 
                            variant="cta" 
                            className="w-full mt-4 bg-gradient-accent animate-scale-in"
                          >
                            Confirmar marcação para {selectedDate} às {selectedTime}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MentorsSection;