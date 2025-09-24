import { useState } from "react";
import { MessageCircle, X, Send, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Olá! 👋 Como posso ajudar?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const faqs = [
    {
      question: "Como funciona a plataforma?",
      answer: "A nossa plataforma conecta-o com mentores qualificados na sua área de estudo. Pode agendar sessões individuais, participar em workshops ou assistir a masterclasses."
    },
    {
      question: "Quanto custam as sessões?",
      answer: "Os preços variam entre 20€-40€/hora dependendo do mentor e especialização. A primeira sessão tem 50% de desconto para novos utilizadores."
    },
    {
      question: "Posso cancelar uma sessão?",
      answer: "Sim! Pode cancelar gratuitamente até 24h antes da sessão. Para cancelamentos com menos de 24h, aplicamos uma taxa de 50%."
    },
    {
      question: "Como são selecionados os mentores?",
      answer: "Todos os mentores passam por um rigoroso processo de seleção, incluindo verificação de qualificações, experiência e capacidades pedagógicas."
    }
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const botResponse = {
        text: "Obrigado pela sua pergunta! Um dos nossos conselheiros irá responder em breve. Para questões urgentes, contacte-nos através do chat ao vivo.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleFAQClick = (faq: typeof faqs[0]) => {
    const userMessage = {
      text: faq.question,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse = {
      text: faq.answer,
      isBot: true,  
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-accent shadow-large hover:shadow-medium animate-bounce"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[500px] shadow-large border-0 bg-background animate-slide-up">
          <CardContent className="p-0 h-full flex flex-col">
            
            {/* Header */}
            <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-glow rounded-full flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente AI</h3>
                  <p className="text-xs text-primary-foreground/80">
                    Sempre disponível
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              
              {/* FAQ Suggestions */}
              {messages.length <= 1 && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Perguntas frequentes:
                  </p>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq)}
                      className="w-full text-left p-3 bg-gradient-subtle rounded-lg text-sm hover:bg-secondary transition-colors duration-200"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gradient-subtle text-foreground'
                        : 'bg-gradient-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      {message.text}
                    </p>
                    <p className={`text-xs mt-1 opacity-70`}>
                      {message.timestamp.toLocaleTimeString('pt-PT', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite a sua pergunta..."
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  variant="cta"
                  size="sm"
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Resposta automática • Para suporte imediato contacte-nos
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;