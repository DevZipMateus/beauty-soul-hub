import { Sparkles, Droplets, Leaf } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Cosméticos profissionais",
    description:
      "Linha completa de produtos para salões e profissionais da beleza, com qualidade garantida e resultados comprovados.",
  },
  {
    icon: Droplets,
    title: "Terapia capilar",
    description:
      "Tratamentos especializados para recuperação, fortalecimento e transformação dos cabelos com segurança e eficácia.",
  },
  {
    icon: Leaf,
    title: "Estética facial e corporal",
    description:
      "Produtos inovadores para cuidados com a pele, promovendo saúde, beleza e bem-estar de forma natural.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Atuamos no ramo de cosméticos profissionais, oferecendo soluções completas para 
            profissionais da beleza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-20 text-center">
          <p className="text-foreground/60 uppercase tracking-widest text-sm mb-8">
            Marcas que distribuímos
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="bg-background px-10 py-6 rounded-xl shadow-md">
              <span className="font-display text-3xl font-bold text-accent">Salvatore</span>
            </div>
            <div className="bg-background px-10 py-6 rounded-xl shadow-md">
              <span className="font-display text-3xl font-bold text-accent">Toctus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
