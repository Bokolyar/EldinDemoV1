import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const products = [
    {
      name: 'АИР 160S4',
      category: 'Электродвигатели',
      description: 'Асинхронный двигатель 15 кВт',
      image: '/product-motor.jpg',
    },
    {
      name: 'ЭПВ 315',
      category: 'Электроприводы',
      description: 'Частотный привод 200 кВт',
      image: '/product-drive.jpg',
    },
    {
      name: 'ГСФ 800',
      category: 'Генераторы',
      description: 'Синхронный генератор 800 кВА',
      image: '/product-generator.jpg',
    },
    {
      name: 'АИР 200M6',
      category: 'Электродвигатели',
      description: 'Асинхронный двигатель 37 кВт',
      image: '/product-motor.jpg',
    },
    {
      name: 'ЭПВ 400',
      category: 'Электроприводы',
      description: 'Частотный привод 315 кВт',
      image: '/product-drive.jpg',
    },
    {
      name: 'ГСФ 1250',
      category: 'Генераторы',
      description: 'Синхронный генератор 1250 кВА',
      image: '/product-generator.jpg',
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-weg section-weg-gray"
    >
      <div className="container-weg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="reveal inline-block text-weg-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Новые продукты
            </span>
            <h2 className="reveal title-section text-weg-navy">
              Ознакомьтесь с новинками
            </h2>
          </div>
          <a
            href="#"
            className="reveal inline-flex items-center gap-2 text-weg-navy font-semibold hover:text-weg-gold transition-colors"
          >
            Вся продукция
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-weg-navy hover:bg-weg-gold hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-weg-navy hover:bg-weg-gold hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)` }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="product-carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/4 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-weg-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-sm text-weg-gold font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-weg-navy mt-1 group-hover:text-weg-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
