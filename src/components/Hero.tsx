import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-beige-light mb-6 animate-slide-up">
            Beauty Soul Cosméticos
          </h1>
          <h2 className="text-xl md:text-2xl text-beige/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Distribuidora autorizada de cosméticos profissionais. Excelência em terapia capilar e estética com produtos que transformam.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://wa.me/5551981636522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300 px-8 py-4 rounded-md font-semibold text-lg"
            >
              Entre em contato
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center border-2 border-beige text-beige hover:bg-beige hover:text-brown transition-colors duration-300 px-8 py-4 rounded-md font-semibold text-lg"
            >
              Conheça nossa história
            </a>
          </div>

          {/* Brands */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-beige/70 text-sm uppercase tracking-widest mb-4">
              Distribuidora autorizada
            </p>
            <div className="flex items-center gap-6">
              <span className="text-beige-light font-display text-2xl tracking-wide">Salvatore</span>
              <span className="text-beige/50">|</span>
              <span className="text-beige-light font-display text-2xl tracking-wide">Toctus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
