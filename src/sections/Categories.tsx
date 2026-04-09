import { ArrowRight, Zap, Settings, Power, Flame, Wrench, Droplets } from 'lucide-react';

const categories = [
  {
    title: 'Электродвигатели',
    description: 'Асинхронные и синхронные двигатели мощностью от 0.12 до 1250 кВт',
    icon: Zap,
    image: '/product-motor.jpg',
  },
  {
    title: 'Электроприводы',
    description: 'Комплектные электроприводы для промышленных приложений',
    icon: Settings,
    image: '/product-drive.jpg',
  },
  {
    title: 'Генераторы',
    description: 'Синхронные генераторы для электростанций и промышленности',
    icon: Power,
    image: '/product-generator.jpg',
  },
  {
    title: 'Литейное производство',
    description: 'Литье цветных сплавов и чугуна по современным технологиям',
    icon: Flame,
    image: '/product-foundry.jpg',
  },
  {
    title: 'Металлообработка',
    description: 'Сварка, резка, гибка металла на современном оборудовании',
    icon: Wrench,
    image: '/product-drive.jpg',
  },
  {
    title: 'Насосы',
    description: 'Промышленные насосы для различных отраслей применения',
    icon: Droplets,
    image: '/product-generator.jpg',
  },
];

export default function Categories() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label">Продукция</p>
          <h2 className="section-title">Каталог продукции</h2>
          <p className="section-subtitle mx-auto">
            Широкий ассортимент электротехнической продукции собственного производства. Высокое качество и надежность подтверждены сертификатами.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-eldin-gold flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-eldin-blue mb-2">{cat.title}</h3>
                  <p className="text-sm text-eldin-gray mb-4">{cat.description}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-eldin-gold hover:text-eldin-gold-hover transition-colors">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
