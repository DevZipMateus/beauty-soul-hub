import { motion, type Easing } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Droplets, Leaf, ShoppingBag, ArrowRight } from "lucide-react";
import serviceCosmetics from "@/assets/service-cosmetics.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import bgServices from "@/assets/bg-services.jpg";

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

const services = [
  {
    icon: Sparkles,
    title: "Cosméticos profissionais",
    description:
      "Linha completa de produtos para salões e profissionais da beleza, com qualidade garantida e resultados comprovados.",
    image: serviceCosmetics,
    alt: "Coleção de cosméticos profissionais com embalagens elegantes",
  },
  {
    icon: Droplets,
    title: "Terapia capilar",
    description:
      "Tratamentos especializados para recuperação, fortalecimento e transformação dos cabelos com segurança e eficácia.",
    image: serviceHair,
    alt: "Tratamento capilar profissional sendo aplicado",
  },
  {
    icon: Leaf,
    title: "Estética facial e corporal",
    description:
      "Produtos inovadores para cuidados com a pele, promovendo saúde, beleza e bem-estar de forma natural.",
    image: serviceFacial,
    alt: "Produtos de skincare e estética facial",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgServices})` }}
      >
        <div className="absolute inset-0 bg-secondary/92" />
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            Atuamos no ramo de cosméticos profissionais, oferecendo soluções completas para 
            profissionais da beleza.
          </p>
        </motion.div>

        {/* Services Grid with Images */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
            >
              <motion.div
                className="bg-background/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-full"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <motion.div
                    className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-primary to-gold-dark rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-primary-foreground" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vitrine Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-r from-accent via-brown-light to-accent rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gold/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <motion.div
                className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShoppingBag className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </motion.div>
              
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-accent-foreground mb-3 sm:mb-4">
                Conheça nossa vitrine
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-accent-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                Explore nossa seleção completa de produtos profissionais. Encontre tudo o que você precisa 
                para seu salão ou atendimento com qualidade garantida.
              </p>
              
              <Link to="/vitrine">
                <motion.div
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Acessar vitrine
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Brands Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/60 uppercase tracking-widest text-xs sm:text-sm mb-6 sm:mb-8">
            Marcas que distribuímos
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap">
            <motion.div
              className="bg-background/95 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-accent">Salvatore</span>
            </motion.div>
            <motion.div
              className="bg-background/95 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-accent">Toctus</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
