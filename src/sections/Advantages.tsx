import { Award, Shield, Headphones, Truck, Clock, CheckCircle } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: '70+ лет опыта',
    description: 'Более семидесяти лет на рынке электротехнического оборудования',
  },
  {
    icon: Shield,
    title: 'Гарантия до 24 месяцев',
    description: 'Полная гарантия на всю продукцию с возможностью расширения',
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка 24/7',
    description: 'Квалифицированная помощь специалистов в любое время',
  },
  {
    icon: Truck,
    title: 'Доставка по РФ и СНГ',
    description: 'Оперативная доставка в любую точку России и стран СНГ',
  },
  {
    icon: Clock,
    title: 'Собственное производство',
    description: 'Полный цикл производства на современном оборудовании',
  },
  {
    icon: CheckCircle,
    title: 'Сертифицированная продукция',
    description: 'Вся продукция соответствует международным стандартам',
  },
];

export default function Advantages() {
  return (
    <section className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Почему мы</p>
          <h2 className="section-title">Наши преимущества</h2>
          <p className="section-subtitle mx-auto">
            Мы гордимся качеством нашей продукции и уровнем обслуживания клиентов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-eldin-blue/10 flex items-center justify-center text-eldin-blue mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-eldin-blue mb-2">{adv.title}</h3>
                <p className="text-sm text-eldin-gray">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
