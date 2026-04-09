import { Flame, Scissors, Wrench, Layers, Cpu, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Литейное производство',
    description: 'Литье цветных сплавов и чугуна в кокиль и по выплавляемым моделям',
    features: ['Литье под давлением', 'Центробежное литье', 'Литье в кокиль'],
  },
  {
    icon: Scissors,
    title: 'Лазерная резка',
    description: 'Высокоточная лазерная резка листового металла толщиной до 20 мм',
    features: ['Точность до 0.1 мм', 'Работа с нержавейкой', 'Серийное производство'],
  },
  {
    icon: Wrench,
    title: 'Сварка металла',
    description: 'Все виды сварки: аргонодуговая, полуавтоматическая, контактная',
    features: ['TIG/MIG сварка', 'Роботизированная сварка', 'Контроль качества'],
  },
  {
    icon: Layers,
    title: 'Гибка металла',
    description: 'Гибка листового и профильного металла на современных прессах',
    features: ['Листогибочные прессы', 'Трубогибочные станки', 'ЧПУ управление'],
  },
  {
    icon: Cpu,
    title: 'Литье пластмасс',
    description: 'Производство изделий из пластмасс методом литья под давлением',
    features: ['Термопласты', 'Реактопласты', 'Изготовление пресс-форм'],
  },
  {
    icon: Cog,
    title: 'Механическая обработка',
    description: 'Токарная, фрезерная, шлифовальная обработка деталей любой сложности',
    features: ['Станки с ЧПУ', 'Обрабатывающие центры', 'Высокая точность'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue mb-4">
            Производственные услуги
          </h2>
          <p className="text-gray-600">
            Предоставляем полный спектр металлообрабатывающих услуг на современном оборудовании
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group p-8 bg-eldin-light rounded-2xl hover:bg-eldin-blue transition-all duration-300"
              >
                <div className="w-14 h-14 bg-eldin-blue group-hover:bg-eldin-gold rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-eldin-blue group-hover:text-white mb-3 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 mb-4 transition-colors duration-300">
                  {s.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-gray-500 group-hover:text-white/70 flex items-center gap-2 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-eldin-gold rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacts" className="inline-flex items-center gap-1 text-eldin-gold font-semibold text-sm group-hover:text-white hover:gap-2 transition-all">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
