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
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }).max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  serviceArea: z.string().min(1, { message: "Área do serviço é obrigatória" }),
  description: z.string().trim().min(1, { message: "Descrição é obrigatória" }).max(1000, { message: "Descrição deve ter menos de 1000 caracteres" }),
  priceRange: z.number().min(0).max(100),
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
  const [priceValue, setPriceValue] = useState([0]);
  
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceArea: "",
      description: "",
      priceRange: 0,
    },
  });

  const onSubmit = (data: ProposalFormValues) => {
    // Here you would typically send the data to your backend
    console.log("Proposal form submitted:", data);
    
    toast({
      title: "Proposta Enviada!",
      description: "Entraremos em contacto em breve.",
    });
    
    form.reset();
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="+351 123 456 789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                    <FormLabel>Descrição do Pedido</FormLabel>
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

              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Orçamento para Aulas: {priceValue[0] === 0 ? "Gratuito" : `${priceValue[0]}€/hora`}</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={100}
                        step={5}
                        value={priceValue}
                        onValueChange={(value) => {
                          setPriceValue(value);
                          field.onChange(value[0]);
                        }}
                        className="py-4"
                      />
                    </FormControl>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Gratuito</span>
                      <span>100€/hora</span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
