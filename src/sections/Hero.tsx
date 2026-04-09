import { ArrowRight, ChevronDown } from 'lucide-react';

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
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-eldin-blue/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="text-eldin-gold font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">
            Ведущий производитель электротехники в России
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Электромашиностроение будущего
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            АО &laquo;ЭЛДИН&raquo; &mdash; ярославский электромашиностроительный завод. Производство и продажа электродвигателей, электроприводов, генераторов и промышленных насосов.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#products" className="btn-primary">
              Каталог продукции <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contacts" className="btn-outline">
              Связаться с нами
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-eldin-gold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
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
