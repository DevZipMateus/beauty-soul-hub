import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa história
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* History */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
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

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="group">
            <div className="bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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
            <div className="bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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
            <div className="bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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
