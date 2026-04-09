import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const stats = [
  { value: '70+', label: 'лет на рынке' },
  { value: '5000+', label: 'двигателей в год' },
  { value: '50+', label: 'стран-партнеров' },
  { value: '100%', label: 'гарантия качества' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Производство Элдин"
          className="w-full h-full object-cover"
          src="/hero-bg.jpg"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-eldin-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Ведущий производитель электротехники в России
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Электромашиностроение{' '}
            <span className="text-eldin-gold">будущего</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up">
            АО &laquo;ЭЛДИН&raquo; &mdash; ярославский электромашиностроительный завод. Производство и продажа электродвигателей, электроприводов, генераторов и промышленных насосов.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up">
            <a href="#products" className="btn-primary inline-flex items-center gap-2">
              Каталог продукции <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contacts" className="btn-outline inline-flex items-center gap-2">
              <Play className="w-4 h-4" /> Связаться с нами
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-eldin-gold">{stat.value}</div>
              <div className="text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
        <span className="text-xs tracking-widest uppercase">Листайте вниз</span>
        <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
      </div>
    </section>
  );
}
