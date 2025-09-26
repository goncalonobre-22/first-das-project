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
    // Load Cal.com embed script for click-triggered calendar
    if (!window.Cal) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "sessao-de-mentoria", {origin:"https://app.cal.com"});
        Cal.ns["sessao-de-mentoria"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#ffa300"},"dark":{"cal-brand":"#ffffff"}},"hideEventTypeDetails":false,"layout":"month_view"});
      `;
      document.head.appendChild(script);
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

        {/* Trust signals */}
        <div className="text-center space-y-4">
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