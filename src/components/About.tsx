import { motion, type Easing } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import aboutSalon from "@/assets/about-salon.jpg";
import bgAbout from "@/assets/bg-about.jpg";

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const About = () => {
  return (
    <section 
      id="sobre" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
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
            Nossa história
          </h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* History with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                A Beauty Soul Cosméticos surgiu em <strong className="text-primary">26 de setembro de 2011</strong>, 
                quando descobrimos um alinhamento natural com o mercado de beleza profissional. 
                Ali vimos uma oportunidade de negócios, levando aos profissionais produtos capazes de 
                transformar vidas de forma segura.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Nosso compromisso é continuar em constante crescimento junto com os profissionais, 
                elevando seu nível e transformando-os em <strong className="text-primary">profissionais de excelência</strong>.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.img
                src={aboutSalon}
                alt="Salão de beleza profissional com produtos cosméticos"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-2xl -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vision */}
          <motion.div className="group" variants={itemVariants}>
            <motion.div
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg border-t-4 border-primary"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(42, 75%, 45%, 0.2)" }}
              >
                <Eye className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Ser referência em cosméticos e fitocosméticos, reconhecida pela qualidade, 
                inovação constante e parcerias com profissionais da beleza e terapia capilar.
              </p>
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div className="group" variants={itemVariants}>
            <motion.div
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg border-t-4 border-primary"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(42, 75%, 45%, 0.2)" }}
              >
                <Target className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Oferecer produtos profissionais que gerem resultados reais, valorizando o trabalho 
                dos profissionais, impulsionando seus negócios e promovendo cuidados, prevenção e 
                beleza com qualidade, performance e segurança.
              </p>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div className="group" variants={itemVariants}>
            <motion.div
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg border-t-4 border-primary"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(42, 75%, 45%, 0.2)" }}
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-foreground/70 leading-relaxed">
                Compromisso com produtos eficazes e seguros. Relações honestas, responsáveis e 
                baseadas na confiança. Valorizamos clientes, colaboradores, representantes e parceiros.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
