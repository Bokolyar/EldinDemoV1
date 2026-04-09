import { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const FeaturedProducts = () => {
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

  const products = [
    {
      name: 'Электродвигатель АИР 160S4',
      category: 'Электродвигатели',
      image: '/product-motor.jpg',
      specs: [
        'Мощность: 15 кВт',
        'Напряжение: 380/660 В',
        'Частота вращения: 1500 об/мин',
      ],
      badge: 'Хит продаж',
      badgeColor: 'bg-green-500',
      inStock: true,
    },
    {
      name: 'Электропривод ЭПВ 315',
      category: 'Электроприводы',
      image: '/product-drive.jpg',
      specs: [
        'Мощность: 200 кВт',
        'Напряжение: 380 В',
        'Степень защиты: IP54',
      ],
      badge: 'Новинка',
      badgeColor: 'bg-eldin-gold',
      inStock: true,
    },
    {
      name: 'Генератор ГСФ 800',
      category: 'Генераторы',
      image: '/product-generator.jpg',
      specs: [
        'Мощность: 800 кВА',
        'Напряжение: 400 В',
        'Частота: 50 Гц',
      ],
      badge: 'В наличии',
      badgeColor: 'bg-eldin-blue',
      inStock: true,
    },
    {
      name: 'Электродвигатель АИР 200M6',
      category: 'Электродвигатели',
      image: '/product-motor.jpg',
      specs: [
        'Мощность: 37 кВт',
        'Напряжение: 380/660 В',
        'Частота вращения: 1000 об/мин',
      ],
      badge: null,
      badgeColor: '',
      inStock: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-eldin-light"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="reveal opacity-0 inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Популярное
            </span>
            <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl font-bold text-eldin-blue">
              Рекомендуемая продукция
            </h2>
          </div>
          <a
            href="#"
            className="reveal opacity-0 stagger-2 inline-flex items-center gap-2 text-eldin-gold font-semibold hover:gap-3 transition-all"
          >
            Весь каталог
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`reveal opacity-0 bg-white rounded-2xl overflow-hidden card-hover`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-bold text-eldin-blue mt-1 mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Specs */}
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <Check className="w-3 h-3 text-eldin-gold" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {product.inStock ? (
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      В наличии
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">Под заказ</span>
                  )}
                  <button className="text-eldin-gold font-semibold text-sm hover:underline">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
