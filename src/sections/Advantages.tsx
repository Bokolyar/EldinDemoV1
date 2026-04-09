import { useEffect, useRef } from 'react';
import { Award, Shield, Headphones, Truck, Clock, CheckCircle } from 'lucide-react';

const Advantages = () => {
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

  const advantages = [
    {
      icon: Award,
      title: '70+ лет опыта',
      description: 'Более семидесяти лет на рынке электротехнического оборудования',
    },
    {
      icon: Shield,
      title: 'Гарантия до 24 месяцев',
      description: 'Полная гарантия на всю продукцию с возможностью расширения',
    },
    {
      icon: Headphones,
      title: 'Техническая поддержка 24/7',
      description: 'Квалифицированная помощь специалистов в любое время',
    },
    {
      icon: Truck,
      title: 'Доставка по РФ и СНГ',
      description: 'Оперативная доставка в любую точку России и стран СНГ',
    },
    {
      icon: Clock,
      title: 'Собственное производство',
      description: 'Полный цикл производства на современном оборудовании',
    },
    {
      icon: CheckCircle,
      title: 'Сертифицированная продукция',
      description: 'Вся продукция соответствует международным стандартам',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-eldin-light"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Почему мы
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl font-bold text-eldin-blue mb-4">
            Наши преимущества
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600">
            Мы гордимся качеством нашей продукции и уровнем обслуживания клиентов
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`reveal opacity-0 flex flex-col items-center text-center p-8 bg-white rounded-2xl card-hover`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-eldin-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <advantage.icon className="w-8 h-8 text-eldin-blue" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-eldin-blue mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
