import { motion, type Easing } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import bgContact from "@/assets/bg-contact.jpg";

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(51) 98163-6522",
    href: "https://wa.me/5551981636522",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "beautysulcosmeticos@gmail.com",
    href: "mailto:beautysulcosmeticos@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Pedro Adans Filho, 1892, Industrial, Novo Hamburgo - RS",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de funcionamento",
    value: "Segunda a sexta: 8h às 12h | 13h às 17h",
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const Contact = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <div className="absolute inset-0 bg-accent/85" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-accent-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gold mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-base sm:text-lg text-accent-foreground/80 max-w-2xl mx-auto px-4">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas sobre nossos 
            produtos e serviços.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-brown-light/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gold/20"
                variants={itemVariants}
                whileHover={{ x: 10, backgroundColor: "rgba(90, 60, 40, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-gold" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-accent-foreground/60 text-xs sm:text-sm uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm sm:text-base text-accent-foreground font-medium hover:text-gold transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-accent-foreground font-medium break-words">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 bg-brown-light/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gold/20"
              variants={itemVariants}
              whileHover={{ x: 10, backgroundColor: "rgba(90, 60, 40, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 sm:w-12 h-10 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Instagram className="w-5 sm:w-6 h-5 sm:h-6 text-gold" />
              </motion.div>
              <div>
                <p className="text-accent-foreground/60 text-xs sm:text-sm uppercase tracking-wide mb-1">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/beauty_sul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-accent-foreground font-medium hover:text-gold transition-colors"
                >
                  @beauty_sul
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="bg-background/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Fale conosco pelo WhatsApp
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              Tire suas dúvidas, solicite orçamentos ou conheça mais sobre nossos produtos. 
              Nossa equipe está pronta para atendê-lo de forma rápida e personalizada.
            </p>
            <motion.a
              href="https://wa.me/5551981636522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Iniciar conversa
            </motion.a>

            {/* CNPJ */}
            <p className="text-center text-foreground/50 text-xs sm:text-sm mt-6 sm:mt-8">
              CNPJ: 14.357.629/0001-06
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
