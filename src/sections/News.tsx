import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const News = () => {
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

  const news = [
    {
      date: 'АПР./02',
      title: 'ЭЛДИН устанавливает новый стандарт в технологии электродвигателей для дымоудаления',
      category: 'Продукты и решения',
    },
    {
      date: 'АПР./01',
      title: 'Энергоэффективность и автоматизация: модернизация системы фильтрации с решением ЭЛДИН',
      category: 'Продукты и решения',
    },
    {
      date: 'МАР./23',
      title: 'Решения ЭЛДИН по управлению активами оптимизируют предиктивное обслуживание',
      category: 'Продукты и решения',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="news"
      className="section-weg section-weg-light"
    >
      <div className="container-weg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="reveal title-section text-weg-navy">
              Новости
            </h2>
          </div>
          <a
            href="#"
            className="reveal inline-flex items-center gap-2 text-weg-navy font-semibold hover:text-weg-gold transition-colors"
          >
            Все новости
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* News List */}
        <div className="space-y-0">
          {news.map((item, index) => (
            <a
              key={index}
              href="#"
              className="reveal news-item block py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Date */}
                <div className="flex-shrink-0 w-20">
                  <span className="text-weg-gold font-bold text-lg">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-sm text-gray-500 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-weg-navy group-hover:text-weg-gold transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-weg-gold" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
