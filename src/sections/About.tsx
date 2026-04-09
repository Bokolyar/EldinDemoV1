import { ArrowRight, Users, Globe, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Users, label: '2000+ сотрудников' },
  { icon: Globe, label: '50+ стран-партнеров' },
  { icon: TrendingUp, label: 'Рост производства 15% в год' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-eldin-gold text-white rounded-xl px-6 py-4 z-10 shadow-lg">
              <div className="text-3xl font-bold">70+</div>
              <div className="text-sm">лет опыта</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/hero-bg.jpg"
                alt="Производство ЭЛДИН"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-label">О компании</p>
            <h2 className="section-title">Ярославский электромашиностроительный завод</h2>
            <p className="text-eldin-gray mb-4">
              АО &laquo;ЭЛДИН&raquo; &mdash; одно из крупнейших предприятий электротехнической отрасли России. С 1954 года мы производим высококачественное электротехническое оборудование для промышленности, энергетики и транспорта.
            </p>
            <p className="text-eldin-gray mb-6">
              Завод оснащен современным технологическим оборудованием и располагает собственной конструкторской и исследовательской базой.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-eldin-gold/10 flex items-center justify-center text-eldin-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-eldin-blue">{h.label}</span>
                  </div>
                );
              })}
            </div>

            <a href="#" className="btn-primary">
              Подробнее о компании <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
