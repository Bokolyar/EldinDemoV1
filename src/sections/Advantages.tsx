import { Award, Shield, Headphones, Truck, Clock, CheckCircle } from 'lucide-react';

const advantages = [
  { icon: Award, title: '70+ лет опыта', description: 'Более семидесяти лет на рынке электротехнического оборудования' },
  { icon: Shield, title: 'Гарантия до 24 месяцев', description: 'Полная гарантия на всю продукцию с возможностью расширения' },
  { icon: Headphones, title: 'Техническая поддержка 24/7', description: 'Квалифицированная помощь специалистов в любое время' },
  { icon: Truck, title: 'Доставка по РФ и СНГ', description: 'Оперативная доставка в любую точку России и стран СНГ' },
  { icon: Clock, title: 'Собственное производство', description: 'Полный цикл производства на современном оборудовании' },
  { icon: CheckCircle, title: 'Сертифицированная продукция', description: 'Вся продукция соответствует международным стандартам' },
];

export default function Advantages() {
  return (
    <section className="section-padding bg-eldin-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue mb-4">
            Наши преимущества
          </h2>
          <p className="text-gray-600">
            Мы гордимся качеством нашей продукции и уровнем обслуживания клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-eldin-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-eldin-blue" />
                </div>
                <h3 className="text-xl font-bold text-eldin-blue mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
