import { ArrowRight, Gift, Percent } from 'lucide-react';

const PromoSection = () => {
  const promos = [
    {
      icon: Gift,
      title: 'Бесступенчатая регулировка скорости в подарок',
      description: 'Бесступенчатые приводы предназначены для нескончаемого и гибкого изменения скорости вращения. С их помощью будет достигнута оптимальная скорость внутренней обработки металла.',
      badge: 'Бессрочная акция',
      badgeColor: 'bg-green-500',
    },
    {
      icon: Percent,
      title: 'Скидки на электродвигатели из наличия',
      description: 'Электродвигатели серии АИР — новый вектор развития в токарном деле. Многообразие обрабатывающих операций позволяет решать разные задачи.',
      badge: 'До -15%',
      badgeColor: 'bg-red-500',
    },
  ];

  return (
    <section className="section-template bg-white">
      <div className="container-template">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="section-title">Акции</h2>
          <p className="section-subtitle">
            Максимум выгоды. Предложения для выгодных покупок промышленного оборудования.
          </p>
        </div>

        {/* Promos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-template-primary to-template-primary/90 rounded-xl p-8 text-white overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              {/* Content */}
              <div className="relative">
                <span className={`inline-block ${promo.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                  {promo.badge}
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-template-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <promo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {promo.title}
                  </h3>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {promo.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-template-primary font-medium px-5 py-2 rounded-lg hover:bg-template-accent hover:text-white transition-colors"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
