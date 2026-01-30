import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 sm:py-10 md:py-12">
      <div className="container-custom px-4 sm:px-6 md:px-8">
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <motion.img
              src={logo}
              alt="Beauty Sul Cosméticos"
              className="h-12 sm:h-14 md:h-16 w-auto brightness-0 invert"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Quick Links */}
          <div className="text-center order-3 sm:order-2 md:order-2 sm:col-span-2 md:col-span-1">
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm sm:text-base hover:text-gold transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex justify-center sm:justify-end order-2 sm:order-3 gap-3 sm:gap-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/beauty_sul", label: "Instagram" },
              { icon: Mail, href: "mailto:beautysulcosmeticos@gmail.com", label: "E-mail" },
              { icon: Phone, href: "https://wa.me/5551981636522", label: "WhatsApp" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 sm:w-10 h-9 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-background/60 text-xs sm:text-sm">
            © {currentYear} Beauty Sul Cosméticos. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
