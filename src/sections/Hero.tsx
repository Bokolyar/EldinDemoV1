import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '70+', label: 'лет на рынке' },
  { value: '5000+', label: 'двигателей в год' },
  { value: '50+', label: 'стран-партнеров' },
  { value: '100%', label: 'гарантия качества' },
];

export default function Hero() {
  return (
    <section className="relative hero-section flex items-center overflow-hidden">
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
      <div className="relative z-10 container-custom hero-content flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 lg:mb-5 animate-fade-in-up">
            <span className="w-2 h-2 bg-eldin-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Ведущий производитель электротехники в России
            </span>
          </div>

          <h1 className="text-[1.65rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 lg:mb-5 animate-fade-in-up">
            Электромашиностроение{' '}
            <span className="text-eldin-gold">будущего</span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-white/80 leading-relaxed mb-5 lg:mb-7 max-w-2xl animate-fade-in-up">
            АО &laquo;ЭЛДИН&raquo; &mdash; ярославский электромашиностроительный завод. Производство и продажа электродвигателей, электроприводов, генераторов и промышленных насосов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up">
            <a href="#products" className="btn-primary inline-flex items-center justify-center gap-2">
              Каталог продукции <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contacts" className="btn-outline inline-flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Связаться с нами
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 lg:mt-12 pt-5 lg:pt-7 border-t border-white/20">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-eldin-gold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator - mouse with bouncing wheel */}
        <div className="hidden md:flex flex-col items-center gap-1.5 text-white/50 mt-5 lg:mt-7">
          <span className="text-xs uppercase tracking-wider">Листайте вниз</span>
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 lg:pt-2">
            <div className="w-1 h-2.5 lg:w-1.5 lg:h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
