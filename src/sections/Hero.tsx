import { ArrowRight, Play } from 'lucide-react';

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
      <div className="relative z-10 container-custom pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-eldin-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Ведущий производитель электротехники в России
            </span>
          </div>

          <h1 className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
            Электромашиностроение{' '}
            <span className="text-eldin-gold">будущего</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fade-in-up">
            АО &laquo;ЭЛДИН&raquo; &mdash; ярославский электромашиностроительный завод. Производство и продажа электродвигателей, электроприводов, генераторов и промышленных насосов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up">
            <a href="#products" className="btn-primary inline-flex items-center justify-center gap-2">
              Каталог продукции <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contacts" className="btn-outline inline-flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Связаться с нами
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-eldin-gold">{stat.value}</div>
              <div className="text-sm sm:text-base text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - mouse with bouncing wheel */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-xs uppercase tracking-wider">Листайте вниз</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
