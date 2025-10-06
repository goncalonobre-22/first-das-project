import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState } from "react";

const proposalFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  serviceArea: z.string().min(1, { message: "Área do serviço é obrigatória" }),
  description: z.string().trim().max(1000, { message: "Descrição deve ter menos de 1000 caracteres" }).optional(),
  priceMin: z.number().min(0).max(100),
  priceMax: z.number().min(0).max(100),
});

type ProposalFormValues = z.infer<typeof proposalFormSchema>;

const studyAreas = [
  "Medicina e Ciências da Saúde",
  "Engenharia e Tecnologia", 
  "Direito e Ciências Jurídicas",
  "Gestão e Economia",
  "Psicologia e Ciências Sociais",
  "Arquitetura e Design",
  "Comunicação e Marketing",
  "Matemática e Estatística"
];

const ProposalFormSection = () => {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalFormSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceArea: "",
      description: "",
      priceMin: 0,
      priceMax: 100,
    },
  });

  const onSubmit = async (data: ProposalFormValues) => {
    try {
      // Send data to Lindy webhook
      const webhookUrl = "https://public.lindy.ai/api/v1/webhooks/lindy/51db2bf9-f925-47ac-bd47-2fd4ba74de93";
      
      const payload = {
        user_name: data.name,
        user_email: data.email,
        request_area: data.serviceArea,
        request_description: data.description,
        price_range: {
          min: data.priceMin,
          max: data.priceMax
        }
      };
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send proposal");
      }

      toast({
        title: "Proposta Enviada!",
        description: "Entraremos em contacto em breve.",
      });
      
      form.reset();
      setPriceRange([0, 100]);
    } catch (error) {
      console.error("Error submitting proposal:", error);
      toast({
        title: "Erro ao enviar proposta",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pedido de Proposta</h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo e entraremos em contacto consigo
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8 border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="O seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Área do Serviço</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a área de serviço" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {studyAreas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição do Pedido (opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva em detalhe o que necessita..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-6">
                <div>
                  <FormLabel>
                    Orçamento para Aulas: {priceRange[0] === 0 ? "Gratuito" : `${priceRange[0]}€`} - {priceRange[1]}€/hora
                  </FormLabel>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={priceRange}
                    onValueChange={(value) => {
                      setPriceRange(value);
                      form.setValue("priceMin", value[0]);
                      form.setValue("priceMax", value[1]);
                    }}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Gratuito</span>
                    <span>100€/hora</span>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Enviar Pedido
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProposalFormSection;
