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
    image: '/hero-bg.jpg',
  },
  {
    title: 'Насосы',
    description: 'Промышленные насосы для различных отраслей применения',
    icon: Droplets,
    image: '/product-motor.jpg',
  },
];

export default function Categories() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Продукция
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue mb-4">
            Каталог продукции
          </h2>
          <p className="text-gray-600">
            Широкий ассортимент электротехнической продукции собственного производства. Высокое качество и надежность подтверждены сертификатами.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eldin-blue/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-eldin-gold rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-eldin-blue mb-2 group-hover:text-eldin-gold transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-eldin-gold font-semibold text-sm group-hover:gap-2 transition-all">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
