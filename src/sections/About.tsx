import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/hero-bg.jpg"
                alt="Производство ЭЛДИН"
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-eldin-gold rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-white">70+</div>
              <div className="text-white/90 text-sm">лет опыта</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-eldin-blue mb-6">
              Ярославский электромашиностроительный завод
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                АО &laquo;ЭЛДИН&raquo; &mdash; одно из крупнейших предприятий электротехнической отрасли России. С 1954 года мы производим высококачественное электротехническое оборудование для промышленности, энергетики и транспорта.
              </p>
              <p>
                Наш завод оснащен современным оборудованием, что позволяет выпускать продукцию мирового уровня. Мы постоянно совершенствуем технологии и внедряем инновации.
              </p>
              <p>
                Продукция ЭЛДИН поставляется более чем в 50 стран мира и успешно эксплуатируется в самых разных климатических условиях.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-eldin-gold font-semibold hover:gap-3 transition-all"
            >
              Подробнее о компании <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
