import { Star, BookOpen, Users, Calendar, Clock, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg"; 
import mentor3 from "@/assets/mentor-3.jpg";

const MentorsSection = () => {
  const [expandedMentor, setExpandedMentor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleBookingToggle = (mentorIndex: number) => {
    if (expandedMentor === mentorIndex) {
      setExpandedMentor(null);
      setSelectedDate(undefined);
      setSelectedTime("");
    } else {
      setExpandedMentor(mentorIndex);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Load Cal.com script
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "sessao-de-mentoria", {origin:"https://app.cal.com"});
      Cal.ns["sessao-de-mentoria"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#ff8b00"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const mentors = [
    {
      name: "Dra. Sofia Costa",
      speciality: "Medicina e Ciências da Saúde",
      experience: "8 anos",
      rating: 4.9,
      students: 120,
      image: mentor1,
      tags: ["Anatomia", "Fisiologia", "Preparação Exames"],
      bio: "Médica especialista com mestrado em Educação Médica. Focada em técnicas de memorização para ciências da saúde.",
      availableTimes: ["09:00", "10:00", "14:00", "16:00", "17:00"]
    },
    {
      name: "Prof. Miguel Torres", 
      speciality: "Engenharia e Tecnologia",
      experience: "12 anos",
      rating: 4.8,
      students: 95,
      image: mentor2,
      tags: ["Programação", "Matemática", "Física"],
      bio: "Engenheiro de software sénior e professor universitário. Especialista em didática de programação e resolução de problemas.",
      availableTimes: ["14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    {
      name: "Dra. Catarina Neves",
      speciality: "Gestão e Economia",
      experience: "6 anos", 
      rating: 4.9,
      students: 85,
      image: mentor3,
      tags: ["Finanças", "Estatística", "Estratégia"],
      bio: "Consultora empresarial com doutoramento em Gestão. Foca em aplicação prática de conceitos teóricos.",
      availableTimes: ["11:00", "13:00", "15:00", "16:00", "17:00"]
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
                      
                      {/* Date and Time Selection */}
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Date Picker */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Data</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {selectedDate ? format(selectedDate, "PPP", { locale: pt }) : "Selecionar data"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={setSelectedDate}
                                  disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Time Picker */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Hora</label>
                            <div className="grid grid-cols-3 gap-2">
                              {mentor.availableTimes.map((time) => (
                                <Button
                                  key={time}
                                  variant={selectedTime === time ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => handleTimeSelect(time)}
                                  className="text-xs"
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3 pt-4">
                          {selectedDate && selectedTime ? (
                            <Button variant="cta" className="w-full text-lg py-4">
                              <Check className="w-5 h-5 mr-2" />
                              Confirmar sessão - {format(selectedDate, "dd/MM", { locale: pt })} às {selectedTime}
                            </Button>
                          ) : (
                            <Button 
                              variant="cta" 
                              className="w-full text-lg py-4"
                              data-cal-link="goncalonobre/sessao-de-mentoria"
                              data-cal-namespace="sessao-de-mentoria"
                              data-cal-config='{"layout":"month_view"}'
                            >
                              <Clock className="w-5 h-5 mr-2" />
                              Marcar sessão com {mentor.name.split(' ')[1]}
                            </Button>
                          )}
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