import { ArrowRight } from 'lucide-react';

const news = [
  {
    category: 'Выставки',
    date: '15 апреля 2024',
    title: 'АО «ЭЛДИН» — участник выставки Нефтегаз-2024',
    description:
      'Приглашаем посетить наш стенд на крупнейшей международной выставке нефтегазового оборудования. Мы представим новую линейку электродвигателей для нефтегазовой отрасли.',
  },
  {
    category: 'Производство',
    date: '28 марта 2024',
    title: 'Запуск новой линии производства энергоэффективных двигателей',
    description:
      'Введена в эксплуатацию современная линия по производству электродвигателей класса энергоэффективности IE4 и IE5.',
  },
  {
    category: 'Партнерство',
    date: '10 марта 2024',
    title: 'Расширение географии поставок в страны СНГ',
    description:
      'Подписаны новые контракты на поставку электротехнической продукции в Казахстан, Узбекистан и Беларусь.',
  },
];

export default function News() {
  return (
    <section id="news" className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">Новости</p>
            <h2 className="section-title">События компании</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-eldin-gold hover:text-eldin-gold-hover transition-colors">
            Все новости <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-eldin-gold bg-eldin-gold/10 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-eldin-gray">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-eldin-blue mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-eldin-gray mb-4 line-clamp-3">{item.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-eldin-gold hover:text-eldin-gold-hover transition-colors">
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
