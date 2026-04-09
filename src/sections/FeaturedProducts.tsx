import { ArrowRight } from 'lucide-react';

const products = [
  {
    badge: 'Хит продаж',
    badgeColor: 'bg-red-500',
    category: 'ЭЛЕКТРОДВИГАТЕЛИ',
    name: 'Электродвигатель АИР 160S4',
    specs: [
      { label: 'Мощность', value: '15 кВт' },
      { label: 'Напряжение', value: '380/660 В' },
      { label: 'Частота вращения', value: '1500 об/мин' },
    ],
    inStock: true,
  },
  {
    badge: 'Новинка',
    badgeColor: 'bg-green-500',
    category: 'ЭЛЕКТРОПРИВОДЫ',
    name: 'Электропривод ЭПВ 315',
    specs: [
      { label: 'Мощность', value: '200 кВт' },
      { label: 'Напряжение', value: '380 В' },
      { label: 'Степень защиты', value: 'IP54' },
    ],
    inStock: true,
  },
  {
    badge: 'В наличии',
    badgeColor: 'bg-eldin-blue',
    category: 'ГЕНЕРАТОРЫ',
    name: 'Генератор ГСФ 800',
    specs: [
      { label: 'Мощность', value: '800 кВА' },
      { label: 'Напряжение', value: '400 В' },
      { label: 'Частота', value: '50 Гц' },
    ],
    inStock: true,
  },
  {
    badge: null,
    badgeColor: '',
    category: 'ЭЛЕКТРОДВИГАТЕЛИ',
    name: 'Электродвигатель АИР 200M6',
    specs: [
      { label: 'Мощность', value: '37 кВт' },
      { label: 'Напряжение', value: '380/660 В' },
      { label: 'Частота вращения', value: '1000 об/мин' },
    ],
    inStock: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">Популярное</p>
            <h2 className="section-title">Рекомендуемая продукция</h2>
          </div>
          <a href="#products" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-eldin-gold hover:text-eldin-gold-hover transition-colors">
            Весь каталог <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              {/* Image placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-4xl text-gray-300">&#9881;</div>
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-eldin-gold tracking-wider mb-1">{p.category}</p>
                <h3 className="text-sm font-bold text-eldin-blue mb-3">{p.name}</h3>
                <div className="space-y-1.5 mb-4">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex justify-between text-xs text-eldin-gray">
                      <span>{s.label}:</span>
                      <span className="font-medium text-eldin-blue">{s.value}</span>
                    </div>
                  ))}
                </div>
                {p.inStock && (
                  <span className="inline-block text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded mb-3">
                    В наличии
                  </span>
                )}
                <button className="w-full btn-primary text-sm justify-center !py-2">
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
