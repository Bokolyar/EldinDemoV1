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
          <p className="section-label">Услуги</p>
          <h2 className="section-title">Производственные услуги</h2>
          <p className="section-subtitle mx-auto">
            Предоставляем полный спектр металлообрабатывающих услуг на современном оборудовании
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-lg bg-eldin-gold/10 flex items-center justify-center text-eldin-gold mb-4 group-hover:bg-eldin-gold group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-eldin-blue mb-2">{s.title}</h3>
                <p className="text-sm text-eldin-gray mb-4">{s.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs text-eldin-gray flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-eldin-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacts" className="inline-flex items-center gap-1 text-sm font-semibold text-eldin-gold hover:text-eldin-gold-hover transition-colors">
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
