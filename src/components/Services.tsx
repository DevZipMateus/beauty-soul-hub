import { motion, type Easing } from "framer-motion";
import { Sparkles, Droplets, Leaf } from "lucide-react";
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Atuamos no ramo de cosméticos profissionais, oferecendo soluções completas para 
            profissionais da beleza.
          </p>
        </motion.div>

        {/* Services Grid with Images */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
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
                className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <motion.div
                    className="absolute bottom-4 left-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold-dark rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brands Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/60 uppercase tracking-widest text-sm mb-8">
            Marcas que distribuímos
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <motion.div
              className="bg-background/95 backdrop-blur-sm px-10 py-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-3xl font-bold text-accent">Salvatore</span>
            </motion.div>
            <motion.div
              className="bg-background/95 backdrop-blur-sm px-10 py-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-3xl font-bold text-accent">Toctus</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
