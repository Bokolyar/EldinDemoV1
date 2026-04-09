import { ArrowRight } from 'lucide-react';

const products = [
  {
    badge: 'Хит продаж',
    badgeColor: 'bg-green-500',
    category: 'Электродвигатели',
    name: 'Электродвигатель АИР 160S4',
    specs: [
      { label: 'Мощность', value: '15 кВт' },
      { label: 'Напряжение', value: '380/660 В' },
      { label: 'Частота вращения', value: '1500 об/мин' },
    ],
    inStock: true,
    image: '/product-motor.jpg',
  },
  {
    badge: 'Новинка',
    badgeColor: 'bg-blue-500',
    category: 'Электроприводы',
    name: 'Электропривод ЭПВ 315',
    specs: [
      { label: 'Мощность', value: '200 кВт' },
      { label: 'Напряжение', value: '380 В' },
      { label: 'Степень защиты', value: 'IP54' },
    ],
    inStock: true,
    image: '/product-drive.jpg',
  },
  {
    badge: 'В наличии',
    badgeColor: 'bg-eldin-gold',
    category: 'Генераторы',
    name: 'Генератор ГСФ 800',
    specs: [
      { label: 'Мощность', value: '800 кВА' },
      { label: 'Напряжение', value: '400 В' },
      { label: 'Частота', value: '50 Гц' },
    ],
    inStock: true,
    image: '/product-generator.jpg',
  },
  {
    badge: null,
    badgeColor: '',
    category: 'Электродвигатели',
    name: 'Электродвигатель АИР 200M6',
    specs: [
      { label: 'Мощность', value: '37 кВт' },
      { label: 'Напряжение', value: '380/660 В' },
      { label: 'Частота вращения', value: '1000 об/мин' },
    ],
    inStock: true,
    image: '/product-motor.jpg',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Популярное
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue">
              Рекомендуемая продукция
            </h2>
          </div>
          <a href="#products" className="hidden md:inline-flex items-center gap-2 text-eldin-gold font-semibold hover:gap-3 transition-all">
            Весь каталог <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl overflow-hidden card-hover">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {p.badge && (
                  <span className={`absolute top-4 left-4 ${p.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{p.category}</span>
                <h3 className="font-bold text-eldin-blue mt-1 mb-3">{p.name}</h3>
                <div className="space-y-2 mb-4">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{s.label}:</span>
                      <span className="font-medium text-eldin-blue">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {p.inStock && (
                    <span className="text-xs font-medium text-green-600">В наличии</span>
                  )}
                  <button className="btn-primary text-sm !px-4 !py-2">Заказать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
