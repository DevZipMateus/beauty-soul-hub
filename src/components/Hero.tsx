import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/60 to-transparent" />
      </motion.div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-8 pt-20 sm:pt-24">
        <div className="max-w-3xl">
          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-beige-light mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Beauty Sul Cosméticos
          </motion.h1>
          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-beige/90 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Distribuidora autorizada de cosméticos profissionais. Excelência em terapia capilar e estética com produtos que transformam.
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.a
              href="https://wa.me/5551981636522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em contato
            </motion.a>
            <Link to="/vitrine">
              <motion.div
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-brown-light transition-colors duration-300 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                Ver Vitrine
              </motion.div>
            </Link>
            <motion.a
              href="#sobre"
              className="inline-flex items-center justify-center border-2 border-beige text-beige hover:bg-beige hover:text-brown transition-colors duration-300 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Conheça nossa história
            </motion.a>
          </motion.div>

          {/* Brands */}
          <motion.div
            className="mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-beige/70 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Distribuidora autorizada
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <motion.span
                className="text-beige-light font-display text-xl sm:text-2xl tracking-wide"
                whileHover={{ scale: 1.1, color: "hsl(42, 75%, 50%)" }}
              >
                Salvatore
              </motion.span>
              <span className="text-beige/50">|</span>
              <motion.span
                className="text-beige-light font-display text-xl sm:text-2xl tracking-wide"
                whileHover={{ scale: 1.1, color: "hsl(42, 75%, 50%)" }}
              >
                Toctus
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-beige/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-beige/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
