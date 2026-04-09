import { useEffect, useRef } from 'react';
import { ArrowRight, Flame, Scissors, Wrench, Layers, Cpu, Cog } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Flame,
      title: 'Литейное производство',
      description: 'Литье цветных сплавов и чугуна в кокиль и по выплавляемым моделям',
      features: ['Литье под давлением', 'Центробежное литье', 'Литье в кокиль'],
    },
    {
      icon: Scissors,
      title: 'Лазерная резка',
      description: 'Точная резка металла лазером с ЧПУ до 25 мм',
      features: ['Точность ±0.1 мм', 'Материал до 25 мм', 'Быстрые сроки'],
    },
    {
      icon: Wrench,
      title: 'Сварка металла',
      description: 'Сварка различных металлов и сплавов полуавтоматом',
      features: ['MIG/MAG сварка', 'TIG сварка', 'Ручная дуговая'],
    },
    {
      icon: Layers,
      title: 'Гибка металла',
      description: 'Гибка листового металла на станках с ЧПУ',
      features: ['Лист до 12 мм', 'Длина до 3000 мм', 'Высокая точность'],
    },
    {
      icon: Cpu,
      title: 'Литье пластмасс',
      description: 'Изготовление изделий на термопластавтоматах',
      features: ['Масса 100-600г', 'Собственные формы', 'Любые объемы'],
    },
    {
      icon: Cog,
      title: 'Механическая обработка',
      description: 'Токарная и фрезерная обработка на станках с ЧПУ',
      features: ['Токарная обработка', 'Фрезерование', 'Шлифование'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Услуги
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl font-bold text-eldin-blue mb-4">
            Производственные услуги
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600">
            Предоставляем полный спектр металлообрабатывающих услуг на современном оборудовании
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal opacity-0 group p-8 bg-eldin-light rounded-2xl hover:bg-eldin-blue transition-all duration-300`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-eldin-blue group-hover:bg-eldin-gold rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-eldin-blue group-hover:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 mb-4 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="text-sm text-gray-500 group-hover:text-white/70 flex items-center gap-2 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-eldin-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-eldin-gold font-medium group-hover:text-white transition-colors duration-300"
              >
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
