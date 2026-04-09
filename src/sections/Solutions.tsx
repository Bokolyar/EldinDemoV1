import { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Factory, Wind, Droplets, Mountain, Leaf, Ship, Car, Coffee, FileText, Flame } from 'lucide-react';

const Solutions = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Zap,
      title: 'Энергоэффективность',
      description: 'Решения по снижению энергопотребления',
      image: '/product-motor.jpg',
    },
    {
      icon: Factory,
      title: 'Промышленность',
      description: 'Автоматизация производства',
      image: '/product-drive.jpg',
    },
    {
      icon: Wind,
      title: 'Ветроэнергетика',
      description: 'Генераторы для ВЭС',
      image: '/product-generator.jpg',
    },
    {
      icon: Droplets,
      title: 'Водное хозяйство',
      description: 'Насосное оборудование',
      image: '/product-motor.jpg',
    },
    {
      icon: Mountain,
      title: 'Горнодобыча',
      description: 'Надежное оборудование',
      image: '/product-foundry.jpg',
    },
    {
      icon: Leaf,
      title: 'Сельское хозяйство',
      description: 'Электроприводы для АПК',
      image: '/hero-bg.jpg',
    },
    {
      icon: Ship,
      title: 'Морское хозяйство',
      description: 'Морские генераторы',
      image: '/product-generator.jpg',
    },
    {
      icon: Car,
      title: 'Электротранспорт',
      description: 'Тяговые электродвигатели',
      image: '/product-motor.jpg',
    },
    {
      icon: Coffee,
      title: 'Пищевая промышленность',
      description: 'Гигиеничные решения',
      image: '/product-drive.jpg',
    },
    {
      icon: FileText,
      title: 'Целлюлоза и бумага',
      description: 'Специальные двигатели',
      image: '/hero-bg.jpg',
    },
    {
      icon: Flame,
      title: 'Нефть и газ',
      description: 'Взрывозащищенное оборудование',
      image: '/product-foundry.jpg',
    },
    {
      icon: Zap,
      title: 'Энергетика',
      description: 'Синхронные генераторы',
      image: '/product-generator.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="section-weg section-weg-light"
    >
      <div className="container-weg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block text-weg-gold font-semibold text-sm uppercase tracking-widest mb-4">
            Узнайте больше о наших решениях
          </span>
          <h2 className="reveal title-section text-weg-navy mb-6">
            Отраслевые решения
          </h2>
          <p className="reveal text-lg text-gray-600">
            Комплексные решения для различных отраслей промышленности
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <a
              key={index}
              href="#"
              className="reveal solution-card group relative h-64"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-weg-navy via-weg-navy/70 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 bg-weg-gold rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-2 text-weg-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
