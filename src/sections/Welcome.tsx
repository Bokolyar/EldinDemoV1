import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
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

  const stats = [
    { value: '70', suffix: '+', label: 'лет на рынке' },
    { value: '2000', suffix: '+', label: 'сотрудников' },
    { value: '5000', suffix: '+', label: 'двигателей в год' },
    { value: '50', suffix: '+', label: 'стран-партнеров' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-weg section-weg-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-weg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-weg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-weg relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <span className="reveal inline-block text-weg-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Добро пожаловать в
            </span>
            <h2 className="reveal title-section text-white mb-6">
              ЭЛДИН
            </h2>
            <p className="reveal text-lg text-white/70 leading-relaxed mb-8">
              Ярославский электромашиностроительный завод — ведущий производитель 
              электротехнической продукции в России. Наше оборудование работает 
              на 5 континентах, и вместе мы вносим свой вклад в более инновационный, 
              устойчивый и эффективный мир.
            </p>
            <a
              href="#"
              className="reveal btn-weg-outline"
            >
              Центр знаний
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="stat-value">
                  {stat.value}
                  <span className="text-weg-orange">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
