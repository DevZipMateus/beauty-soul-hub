import { Target, Eye, Heart } from "lucide-react";
import aboutSalon from "@/assets/about-salon.jpg";
import bgAbout from "@/assets/bg-about.jpg";

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
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa história
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* History with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
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
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={aboutSalon}
                alt="Salão de beleza profissional com produtos cosméticos"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full -z-10" />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="group">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Ser referência em cosméticos e fitocosméticos, reconhecida pela qualidade, 
                inovação constante e parcerias com profissionais da beleza e terapia capilar.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Oferecer produtos profissionais que gerem resultados reais, valorizando o trabalho 
                dos profissionais, impulsionando seus negócios e promovendo cuidados, prevenção e 
                beleza com qualidade, performance e segurança.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-foreground/70 leading-relaxed">
                Compromisso com produtos eficazes e seguros. Relações honestas, responsáveis e 
                baseadas na confiança. Valorizamos clientes, colaboradores, representantes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
