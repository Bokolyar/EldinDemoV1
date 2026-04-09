import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    category: 'Выставки',
    date: '15 апреля 2024',
    title: 'АО «ЭЛДИН» — участник выставки Нефтегаз-2024',
    description: 'Приглашаем посетить наш стенд на крупнейшей международной выставке нефтегазового оборудования. Мы представим новую линейку электродвигателей для нефтегазовой отрасли.',
    image: '/hero-bg.jpg',
  },
  {
    category: 'Производство',
    date: '28 марта 2024',
    title: 'Запуск новой линии производства энергоэффективных двигателей',
    description: 'Введена в эксплуатацию современная линия по производству электродвигателей класса энергоэффективности IE4 и IE5.',
    image: '/product-foundry.jpg',
  },
  {
    category: 'Партнерство',
    date: '10 марта 2024',
    title: 'Расширение географии поставок в страны СНГ',
    description: 'Подписаны новые контракты на поставку электротехнической продукции в Казахстан, Узбекистан и Беларусь.',
    image: '/product-motor.jpg',
  },
];

export default function News() {
  return (
    <section id="news" className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Новости
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue">
              События компании
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-eldin-gold font-semibold hover:gap-3 transition-all">
            Все новости <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.title} className="bg-white rounded-2xl overflow-hidden card-hover">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-eldin-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-bold text-eldin-blue mb-3 group-hover:text-eldin-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-eldin-gold font-semibold text-sm hover:gap-2 transition-all">
                  Читать далее <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
