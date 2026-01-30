import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Beauty Soul Cosméticos"
              className="h-16 w-auto brightness-0 invert"
            />
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#inicio" className="hover:text-gold transition-colors">
                Início
              </a>
              <a href="#sobre" className="hover:text-gold transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="hover:text-gold transition-colors">
                Serviços
              </a>
              <a href="#contato" className="hover:text-gold transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/beauty_sul"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:beautysulcosmeticos@gmail.com"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5551981636522"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Beauty Soul Cosméticos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
