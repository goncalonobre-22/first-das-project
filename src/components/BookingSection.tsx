import { useState, useEffect } from "react";
import { ChevronDown, User, Calendar, BookOpen, Star, Clock, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";

const BookingSection = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMentorIndex, setCurrentMentorIndex] = useState(0);
  
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

  const mentorsByArea = {
    "Medicina e Ciências da Saúde": [
      {
        name: "Dra. Ana Silva",
        speciality: "Anatomia e Fisiologia",
        experience: "15 anos",
        rating: 4.9,
        students: 120,
        image: mentor1,
        nextAvailable: "Amanhã às 10:00",
        price: "Gratuito",
        isFree: true,
        bio: "Especialista em anatomia humana e fisiologia, com doutoramento em medicina. Ajuda estudantes a compreender os sistemas do corpo humano.",
        availableTimes: ["09:00", "10:00", "14:00", "16:00", "17:00"]
      },
      {
        name: "Dr. João Santos",
        speciality: "Patologia e Diagnóstico",
        experience: "20 anos",
        rating: 4.9,
        students: 150,
        image: mentor2,
        nextAvailable: "Hoje às 14:00",
        price: "35€/hora",
        isFree: false,
        bio: "Médico especialista em patologia com vasta experiência clínica. Expert em diagnóstico diferencial e medicina baseada em evidência.",
        availableTimes: ["09:00", "14:00", "15:00", "16:00", "17:00"]
      }
    ],
    "Engenharia e Tecnologia": [
      {
        name: "Prof. Miguel Torres",
        speciality: "Programação Básica",
        experience: "12 anos",
        rating: 4.8,
        students: 95,
        image: mentor2,
        nextAvailable: "Hoje às 16:00",
        price: "Gratuito",
        isFree: true,
        bio: "Especialista em programação e algoritmos básicos. Ajuda estudantes iniciantes a dominar os fundamentos da programação.",
        availableTimes: ["14:00", "15:00", "16:00", "17:00", "18:00"]
      },
      {
        name: "Eng. Rita Oliveira",
        speciality: "Arquitetura de Software",
        experience: "16 anos",
        rating: 4.9,
        students: 120,
        image: mentor3,
        nextAvailable: "Amanhã às 09:00",
        price: "40€/hora",
        isFree: false,
        bio: "Engenheira sénior especializada em arquitetura de software e sistemas distribuídos. Expert em preparação para entrevistas técnicas.",
        availableTimes: ["09:00", "10:00", "14:00", "15:00", "16:00"]
      }
    ],
    "Direito e Ciências Jurídicas": [
      {
        name: "Dr. Carlos Mendes",
        speciality: "Direito Civil Básico",
        experience: "18 anos",
        rating: 4.9,
        students: 85,
        image: mentor3,
        nextAvailable: "Hoje às 15:00",
        price: "Gratuito",
        isFree: true,
        bio: "Advogado especializado em direito civil. Oferece sessões gratuitas para estudantes em dificuldades financeiras.",
        availableTimes: ["11:00", "13:00", "15:00", "16:00", "17:00"]
      },
      {
        name: "Dra. Mariana Ferreira",
        speciality: "Direito Empresarial",
        experience: "22 anos",
        rating: 5.0,
        students: 200,
        image: mentor1,
        nextAvailable: "Amanhã às 10:00",
        price: "45€/hora",
        isFree: false,
        bio: "Advogada sénior especializada em direito empresarial e fusões. Preparação intensiva para exames da ordem dos advogados.",
        availableTimes: ["09:00", "10:00", "11:00", "14:00", "16:00"]
      }
    ],
    "Gestão e Economia": [
      {
        name: "Prof. Sofia Costa",
        speciality: "Fundamentos de Gestão",
        experience: "14 anos",
        rating: 4.7,
        students: 110,
        image: mentor1,
        nextAvailable: "Amanhã às 11:00",
        price: "Gratuito",
        isFree: true,
        bio: "Professora universitária especializada em fundamentos de gestão. Oferece sessões gratuitas para estudantes de primeiro ano.",
        availableTimes: ["09:00", "11:00", "14:00", "15:00", "16:00"]
      },
      {
        name: "Dr. Pedro Almeida",
        speciality: "Análise Financeira Avançada",
        experience: "18 anos",
        rating: 4.8,
        students: 140,
        image: mentor2,
        nextAvailable: "Hoje às 17:00",
        price: "38€/hora",
        isFree: false,
        bio: "MBA em finanças com experiência em consultoria de investimento. Especialista em análise de mercados e modelagem financeira.",
        availableTimes: ["13:00", "15:00", "16:00", "17:00", "18:00"]
      }
    ]
  };

  const getMentorsForArea = () => {
    if (selectedArea && selectedArea !== "Selecione a sua área de estudo..." && mentorsByArea[selectedArea as keyof typeof mentorsByArea]) {
      return mentorsByArea[selectedArea as keyof typeof mentorsByArea];
    }
    return null;
  };

  const mentorsForArea = getMentorsForArea();
  const currentMentor = mentorsForArea ? mentorsForArea[currentMentorIndex] : null;

  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    setCurrentMentorIndex(0); // Reset to first mentor when area changes
  };

  const nextMentor = () => {
    if (mentorsForArea) {
      setCurrentMentorIndex((prev) => (prev + 1) % mentorsForArea.length);
    }
  };

  const prevMentor = () => {
    if (mentorsForArea) {
      setCurrentMentorIndex((prev) => (prev - 1 + mentorsForArea.length) % mentorsForArea.length);
    }
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

  const handleBookingClick = () => {
    setShowDatePicker(true);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const isBooked = selectedDate && selectedTime;

  return (
    <section id="booking-section" className="py-20 bg-gradient-primary text-primary-foreground">
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
                      onChange={(e) => handleAreaChange(e.target.value)}
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

          {/* Mentors Section - Only show when area is selected */}
          {mentorsForArea && currentMentor && (
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Card className="bg-background border-0 shadow-large hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  
                  {/* Header with Navigation */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevMentor}
                        className="p-2 hover:bg-background/50"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground">
                          {currentMentor.isFree ? "Mentor Gratuito" : "Mentor Premium"}
                        </h3>
                        <p className="text-muted-foreground">
                          {currentMentorIndex + 1} de {mentorsForArea.length} mentores disponíveis
                        </p>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextMentor}
                        className="p-2 hover:bg-background/50"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    {/* Free/Paid Indicator */}
                    <div className="flex justify-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        currentMentor.isFree 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}>
                        {currentMentor.isFree ? "🆓 GRATUITO" : "💎 PREMIUM"}
                      </span>
                    </div>
                  </div>

                  {/* Mentor Info */}
                  <div className="flex items-center gap-6">
                    
                    {/* Avatar */}
                    <div className="relative">
                      <img 
                        src={currentMentor.image}
                        alt={currentMentor.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                        ⭐
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-2">
                      <h4 className="text-xl font-bold text-foreground">
                        {currentMentor.name}
                      </h4>
                      <p className="text-primary font-medium">
                        {currentMentor.speciality}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-current" />
                          <span>{currentMentor.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{currentMentor.students} estudantes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed">
                    {currentMentor.bio}
                  </p>

                  {/* Availability & Price */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-subtle rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-accent mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Disponível</span>
                      </div>
                      <div className="text-sm text-foreground">
                        {currentMentor.nextAvailable}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${
                        currentMentor.isFree ? "text-green-600" : "text-primary"
                      }`}>
                        {currentMentor.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentMentor.isFree ? "Sempre gratuito" : "Primeira sessão 50% OFF"}
                      </div>
                    </div>
                  </div>

                  {/* Date and Time Picker */}
                  {showDatePicker && (
                    <div className="space-y-4 p-4 bg-gradient-subtle rounded-lg border animate-fade-in">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Escolha a data e hora
                      </h4>
                      
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
                            {currentMentor.availableTimes.map((time) => (
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
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    {isBooked ? (
                      <Button variant="cta" className="w-full text-lg py-6">
                        <Check className="w-5 h-5 mr-2" />
                        Confirmar sessão - {selectedDate && format(selectedDate, "dd/MM", { locale: pt })} às {selectedTime}
                      </Button>
                    ) : (
                      <Button 
                        variant="cta" 
                        className="w-full text-lg py-6"
                        data-cal-link="goncalonobre/sessao-de-mentoria"
                        data-cal-namespace="sessao-de-mentoria"
                        data-cal-config='{"layout":"month_view"}'
                      >
                        <Clock className="w-5 h-5 mr-2" />
                        Marcar sessão com {currentMentor.name.split(' ')[1]}
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
                </CardContent>
              </Card>
            </div>
          )}

          {/* Placeholder when no area selected */}
          {!mentorsForArea && (
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Card className="bg-background/50 border-2 border-dashed border-border/50">
                <CardContent className="p-16 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Selecione uma área de estudo
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Escolha a sua área de estudo para ver os mentores disponíveis e marcar a sua sessão.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;