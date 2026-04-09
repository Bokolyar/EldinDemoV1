import { ArrowRight } from 'lucide-react';

const PromoBlock = () => {
  return (
    <section className="section-template bg-template-gray">
      <div className="container-template">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/product-foundry.jpg"
              alt="Собственное производство"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-template-accent font-semibold text-sm uppercase tracking-wider">
              Собственное производство
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-template-primary mt-2 mb-4">
              Электродвигатели и электроприводы
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Способны поставить производство на поток. Быстрая настройка, 
              удобство контроля и точность готового изделия. Минимальное 
              вмешательство оператора в процесс обработки. Уже задействованы 
              на сотнях заводов на территории России и СНГ.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="btn-template inline-flex items-center gap-2">
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contacts" className="btn-outline-template">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBlock;
