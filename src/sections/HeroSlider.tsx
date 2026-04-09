import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Производим электродвигатели',
      subtitle: '70 лет на рынке',
      description: 'Наше оборудование — выбор лидеров!',
      stats: [
        { value: '70', label: 'лет', sublabel: 'Опыта работы на рынке электротехники' },
        { value: '5000+', label: '', sublabel: 'Двигателей производим ежегодно' },
        { value: '50+', label: '', sublabel: 'Стран-партнеров по всему миру' },
      ],
      image: '/hero-bg.jpg',
    },
    {
      title: 'Собственное производство',
      subtitle: 'Полный цикл',
      description: 'От проектирования до готового изделия',
      stats: [
        { value: '100%', label: '', sublabel: 'Гарантия качества на все этапах' },
        { value: '24', label: 'мес', sublabel: 'Гарантия на продукцию' },
        { value: '2000+', label: '', sublabel: 'Квалифицированных сотрудников' },
      ],
      image: '/product-foundry.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-template-primary/90 via-template-primary/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container-template flex items-center">
            <div className="max-w-2xl text-white">
              <span className="inline-block text-template-accent font-semibold mb-2">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {slide.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                {slide.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-template-accent">
                      {stat.value}
                      <span className="text-xl">{stat.label}</span>
                    </div>
                    <div className="text-white/70 text-sm mt-1 max-w-[150px]">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#catalog" className="btn-template">
                  Каталог продукции
                </a>
                <a href="#contacts" className="btn-outline-template border-white text-white hover:bg-white hover:text-template-primary">
                  Оставить заявку
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
