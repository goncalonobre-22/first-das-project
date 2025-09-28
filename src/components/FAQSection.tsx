import { MessageCircle, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a plataforma?",
      answer: "Para utilizar a plataforma é preciso escolheres o teu curso, selecionares um mentor ou escolher o mentor recomendado e marcar a sessão."
    },
    {
      question: "Todas as sessões são pagas?",
      answer: "Nem todas as sessões são pagas. O valor é definido pelo mentor, que pode escolher fazer sessões gratuitas."
    },
    {
      question: "Posso cancelar uma sessão?",
      answer: "Sim, podes cancelar uma sessão até 3 horas antes dela acontecer. A partir dessas 3 horas é apenas reembolsado metade do valor da sessão."
    },
    {
      question: "Para que horários podem ser marcadas sessões?",
      answer: "Os horários estão dependentes do horário definido pelo mentor."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire as suas dúvidas através das nossas perguntas frequentes o pergunte ao nosso ChatBot.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-left">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;