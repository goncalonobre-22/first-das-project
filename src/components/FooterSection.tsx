import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                StudyMentor
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Conectamos estudantes com mentores especializados para acelerar 
                o sucesso académico através de sessões personalizadas.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Como funciona</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Encontrar mentores</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Preços</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Workshops</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Masterclasses</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Suporte</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Centro de Ajuda</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Contactar Suporte</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Tornar-se Mentor</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>ola@studymentor.pt</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+351 910 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Mantenha-se atualizado</h3>
            <p className="text-primary-foreground/80">
              Receba dicas de estudo, novidades sobre mentores e ofertas exclusivas.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-gradient-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-300">
                Subscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/70">
            <p>&copy; 2024 StudyMentor. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;