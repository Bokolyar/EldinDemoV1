import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 80;
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 160, 23, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 160, 23, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const slides = [
    {
      pretitle: 'Ярославский электромашиностроительный завод',
      title: 'ИННОВАЦИИ',
      subtitle: 'В ЭЛЕКТРОТЕХНИКЕ',
      description: '70 лет создаем надежное оборудование для промышленности по всему миру',
      cta: 'Узнать больше',
      ctaLink: '#about',
      stats: [
        { value: '70+', label: 'лет опыта' },
        { value: '5000+', label: 'изделий в год' },
        { value: '50+', label: 'стран' },
      ],
    },
    {
      pretitle: 'Собственное производство',
      title: 'ЭЛЕКТРОДВИГАТЕЛИ',
      subtitle: 'ПРЕМИУМ КЛАССА',
      description: 'Асинхронные и синхронные двигатели мощностью от 0.12 до 1250 кВт',
      cta: 'Каталог продукции',
      ctaLink: '#products',
      stats: [
        { value: 'IE4', label: 'энергоэффективность' },
        { value: '24', label: 'мес гарантии' },
        { value: '100%', label: 'собственное ПО' },
      ],
    },
    {
      pretitle: 'Полный цикл производства',
      title: 'ОТ ЛИТЬЯ',
      subtitle: 'ДО ГОТОВОГО ИЗДЕЛИЯ',
      description: 'Литейное производство, механическая обработка, сборка и тестирование',
      cta: 'Наши услуги',
      ctaLink: '#solutions',
      stats: [
        { value: '2000+', label: 'сотрудников' },
        { value: '15Га', label: 'производство' },
        { value: 'ISO', label: 'сертификация' },
      ],
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, isPaused, slides.length]);

  const handleSlideChange = (newIndex: number) => {
    if (isAnimating || newIndex === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => handleSlideChange((currentSlide + 1) % slides.length);
  const prevSlide = () => handleSlideChange((currentSlide - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-weg-navy">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Background Image with Animated Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-weg-navy via-weg-navy/90 to-weg-navy-light/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-weg-navy via-transparent to-transparent" />
        
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-weg-gold/10 via-transparent to-transparent animate-pulse-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-weg pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Pretitle */}
              <div className="overflow-hidden mb-4">
                <span 
                  className={`inline-block text-weg-gold font-semibold text-sm uppercase tracking-[0.3em] transition-transform duration-700 delay-100 ${
                    index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {slide.pretitle}
                </span>
              </div>

              {/* Main Title */}
              <div className="overflow-hidden mb-2">
                <h1 
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight transition-transform duration-700 delay-200 ${
                    index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {slide.title}
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="overflow-hidden mb-8">
                <span 
                  className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-weg-gold leading-none tracking-tight transition-transform duration-700 delay-300 ${
                    index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {slide.subtitle}
                </span>
              </div>

              {/* Description */}
              <div className="overflow-hidden mb-10">
                <p 
                  className={`text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed transition-transform duration-700 delay-400 ${
                    index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {slide.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="overflow-hidden mb-16">
                <div 
                  className={`flex flex-wrap gap-4 transition-transform duration-700 delay-500 ${
                    index === currentSlide ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <a
                    href={slide.ctaLink}
                    className="group inline-flex items-center gap-3 bg-weg-gold text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-weg-orange hover:shadow-lg hover:shadow-weg-gold/30 hover:-translate-y-1"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-weg-navy hover:border-white"
                  >
                    <Play className="w-5 h-5" />
                    Смотреть видео
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div 
                className={`flex flex-wrap gap-8 md:gap-12 transition-all duration-700 delay-600 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {slide.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-weg-gold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-32 left-6 right-6 flex items-center justify-between">
          {/* Prev/Next Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-weg-gold hover:border-weg-gold hover:text-white transition-all disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-weg-gold hover:border-weg-gold hover:text-white transition-all disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Play/Pause & Slide Counter */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center gap-2 text-white/50 font-mono text-sm">
              <span className="text-weg-gold font-bold text-lg">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isAnimating}
              className="group relative h-2 transition-all"
            >
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-12 bg-weg-gold'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
              {index === currentSlide && !isPaused && (
                <div 
                  className="absolute inset-0 h-full rounded-full bg-weg-orange origin-left animate-progress"
                  style={{ animationDuration: '7s' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/40">
        <span className="text-xs uppercase tracking-[0.3em]">Листайте вниз</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-weg-gold rounded-full animate-bounce-gentle" />
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-weg-gold to-transparent opacity-50" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-weg-gold to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
