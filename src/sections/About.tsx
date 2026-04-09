import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Users, value: '2000+', label: 'сотрудников' },
    { icon: Globe, value: '50+', label: 'стран-партнеров' },
    { icon: TrendingUp, value: 'ТОП-5', label: 'в отрасли' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/hero-bg.jpg"
                alt="Производство Элдин"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-eldin-blue/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-eldin-gold rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-white">70+</div>
              <div className="text-white/90 text-sm">лет опыта</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="reveal opacity-0 inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              О компании
            </span>
            
            <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl font-bold text-eldin-blue mb-6">
              Ярославский электромашиностроительный завод
            </h2>
            
            <div className="reveal opacity-0 stagger-2 space-y-4 text-gray-600 mb-8">
              <p>
                АО «ЭЛДИН» — одно из крупнейших предприятий электротехнической отрасли России. 
                С 1954 года мы производим высококачественное электротехническое оборудование 
                для промышленности, энергетики и транспорта.
              </p>
              <p>
                Наш завод оснащен современным оборудованием, что позволяет выпускать продукцию 
                мирового уровня. Мы постоянно инвестируем в развитие производства, 
                внедрение новых технологий и повышение квалификации персонала.
              </p>
              <p>
                Продукция ЭЛДИН поставляется более чем в 50 стран мира и успешно 
                эксплуатируется в самых разных климатических условиях.
              </p>
            </div>

            {/* Highlights */}
            <div className="reveal opacity-0 stagger-3 flex flex-wrap gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-eldin-blue/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-eldin-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-eldin-blue">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal opacity-0 stagger-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-eldin-gold font-semibold hover:gap-3 transition-all"
              >
                Подробнее о компании
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
