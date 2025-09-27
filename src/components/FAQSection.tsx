import { MessageCircle, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Extend window interface for Retell widget
declare global {
  interface Window {
    RetellWebWidget?: {
      open: () => void;
      sendMessage?: (message: string) => void;
    };
  }
}

const FAQSection = () => {
  const faqs = [
    "Como funciona a plataforma?",
    "Todas as sessões são pagas?", 
    "Posso cancelar uma sessão?",
    "Para que horários podem ser marcadas sessões?"
  ];

  const handleFAQClick = (question: string) => {
    // Try to trigger the Retell AI widget with the question
    try {
      if (window.RetellWebWidget) {
        window.RetellWebWidget.open();
        // Send the question to the widget if possible
        setTimeout(() => {
          window.RetellWebWidget?.sendMessage?.(question);
        }, 500);
      } else {
        // Fallback: look for retell widget button
        const retellButton = document.querySelector('#retell-widget') as HTMLElement;
        if (retellButton) {
          retellButton.click();
        }
      }
    } catch (error) {
      console.log('Could not trigger chatbot:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire as suas dúvidas ou fale connosco através do nosso assistente IA
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-border/50 hover:border-primary/20"
                onClick={() => handleFAQClick(faq)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-foreground">
                        {faq}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Clique numa pergunta para falar com o nosso assistente IA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;