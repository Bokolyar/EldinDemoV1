import { ArrowRight, Users, Globe, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Users, value: '2000+', label: 'сотрудников' },
  { icon: Globe, value: '50+', label: 'стран-партнеров' },
  { icon: TrendingUp, value: 'ТОП-5', label: 'в отрасли' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative mb-10 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/hero-bg.jpg"
                alt="Производство Элдин"
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-eldin-blue/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 lg:bottom-8 lg:-right-8 bg-eldin-gold rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white">70+</div>
              <div className="text-white/90 text-sm">лет опыта</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              О компании
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eldin-blue mb-6">
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

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 mb-8">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.value} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-eldin-blue/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-eldin-blue" />
                    </div>
                    <div>
                      <div className="font-bold text-eldin-blue">{h.value}</div>
                      <div className="text-sm text-gray-500">{h.label}</div>
                    </div>
                  </div>
                );
              })}
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
