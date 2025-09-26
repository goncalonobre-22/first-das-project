import { useEffect } from "react";

// Declare Cal types for TypeScript
declare global {
  interface Window {
    Cal?: {
      (action: string, namespace: string, config?: any): void;
      ns: {
        [key: string]: {
          (action: string, config: any): void;
        };
      };
      loaded?: boolean;
      q?: any[];
    };
  }
}

const BookingSection = () => {
  useEffect(() => {
    // Load Cal.com embed script
    if (!window.Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.type = 'module';
      script.onload = () => {
        if (window.Cal) {
          window.Cal("init", "sessao-de-mentoria", {origin:"https://app.cal.com"});
          
          window.Cal.ns["sessao-de-mentoria"]("inline", {
            elementOrSelector:"#my-cal-inline-sessao-de-mentoria",
            config: {"layout":"month_view"},
            calLink: "goncalonobre/sessao-de-mentoria",
          });

          window.Cal.ns["sessao-de-mentoria"]("ui", {
            "cssVarsPerTheme":{"light":{"cal-brand":"#ffaf00"}},
            "hideEventTypeDetails":false,
            "layout":"month_view"
          });
        }
      };
      document.head.appendChild(script);
    } else {
      // If Cal is already loaded, initialize the embed
      window.Cal("init", "sessao-de-mentoria", {origin:"https://app.cal.com"});
      
      window.Cal.ns["sessao-de-mentoria"]("inline", {
        elementOrSelector:"#my-cal-inline-sessao-de-mentoria",
        config: {"layout":"month_view"},
        calLink: "goncalonobre/sessao-de-mentoria",
      });

      window.Cal.ns["sessao-de-mentoria"]("ui", {
        "cssVarsPerTheme":{"light":{"cal-brand":"#ffaf00"}},
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    }
  }, []);

  return (
    <section id="booking-section" className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Marque a sua{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">sessão de mentoria</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Escolha a data e hora que melhor se adequa ao seu horário e comece a acelerar o seu sucesso académico.
          </p>
        </div>

        {/* Cal.com Embed Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-background/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-large">
            <div 
              id="my-cal-inline-sessao-de-mentoria" 
              className="w-full min-h-[600px] rounded-lg overflow-hidden"
              style={{
                height: '100%',
                minHeight: '600px',
                background: 'hsl(var(--background))',
                borderRadius: '0.5rem'
              }}
            />
          </div>
        </div>

        {/* Trust signals */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <span>Mentores verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🛡️</span>
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">  
              <span className="text-lg">🔄</span>
              <span>Cancelamento gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span>Garantia de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;