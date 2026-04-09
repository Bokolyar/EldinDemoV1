import { Truck, Headphones, Shield, GraduationCap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: 'Доставка в срок',
      description: 'Доставка оборудования из наличия по России и СНГ',
    },
    {
      icon: Headphones,
      title: 'Справочный центр 24/7',
      description: 'Готовы отвечать на вопросы, когда удобно вам',
    },
    {
      icon: Shield,
      title: '100% надежность',
      description: 'Предоставляем документы, лицензии и сертификаты',
    },
    {
      icon: GraduationCap,
      title: 'Обучение после внедрения',
      description: 'Базовые теоретические и практические занятия',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-template">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-template-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-template-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-template-primary mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
