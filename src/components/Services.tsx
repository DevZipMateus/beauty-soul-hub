import { Sparkles, Droplets, Leaf } from "lucide-react";
import serviceCosmetics from "@/assets/service-cosmetics.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";

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

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold-dark rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
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
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-20 text-center">
          <p className="text-foreground/60 uppercase tracking-widest text-sm mb-8">
            Marcas que distribuímos
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="bg-background px-10 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span className="font-display text-3xl font-bold text-accent">Salvatore</span>
            </div>
            <div className="bg-background px-10 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span className="font-display text-3xl font-bold text-accent">Toctus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
