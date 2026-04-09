import { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Recycle, Sun, Globe } from 'lucide-react';

const Sustainability = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Снижение углеродного следа производства',
    },
    {
      icon: Recycle,
      title: 'Переработка',
      description: 'Использование вторичных материалов',
    },
    {
      icon: Sun,
      title: 'Энергоэффективность',
      description: 'Экономия энергии до 40%',
    },
    {
      icon: Globe,
      title: 'Устойчивое развитие',
      description: 'Ответственный подход к бизнесу',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-weg section-weg-dark relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/product-foundry.jpg"
          alt="Sustainability"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-weg-navy via-weg-navy/95 to-weg-navy/80" />
      </div>

      <div className="container-weg relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="reveal inline-block text-weg-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Устойчивое развитие
            </span>
            <h2 className="reveal title-section text-white mb-6">
              Экологическая ответственность
            </h2>
            <p className="reveal text-lg text-white/70 leading-relaxed mb-8">
              Мы — компания, которая развивается в соответствии с потребностями 
              общества и экономики нашего времени, внося свой вклад в более 
              эффективный и устойчивый мир.
            </p>
            <a
              href="#"
              className="reveal btn-weg-primary"
            >
              Узнать больше
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-weg-gold rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
