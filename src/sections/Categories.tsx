import { ArrowRight, Zap, Settings, Power, Flame, Wrench, Droplets } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Zap,
      title: 'Электродвигатели',
      count: '45 товаров',
      description: 'Асинхронные и синхронные двигатели мощностью от 0.12 до 1250 кВт',
      image: '/product-motor.jpg',
    },
    {
      icon: Settings,
      title: 'Электроприводы',
      count: '18 товаров',
      description: 'Комплектные электроприводы для промышленных приложений',
      image: '/product-drive.jpg',
    },
    {
      icon: Power,
      title: 'Генераторы',
      count: '12 товаров',
      description: 'Синхронные генераторы для электростанций',
      image: '/product-generator.jpg',
    },
    {
      icon: Flame,
      title: 'Литейное производство',
      count: '8 услуг',
      description: 'Литье цветных сплавов и чугуна',
      image: '/product-foundry.jpg',
    },
    {
      icon: Wrench,
      title: 'Металлообработка',
      count: '6 услуг',
      description: 'Сварка, резка, гибка металла',
      image: '/hero-bg.jpg',
    },
    {
      icon: Droplets,
      title: 'Насосы',
      count: '15 товаров',
      description: 'Промышленные насосы различного назначения',
      image: '/product-motor.jpg',
    },
  ];

  return (
    <section id="catalog" className="section-template bg-white">
      <div className="container-template">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">Продукция</h2>
            <p className="section-subtitle max-w-xl">
              Каталог товаров. На сайте вы найдете электродвигатели, 
              электроприводы, генераторы и промышленные насосы. 
              Наша продукция занимает лидирующие позиции на рынке России.
            </p>
          </div>
          <a href="#" className="btn-outline-template inline-flex items-center gap-2">
            Весь каталог
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="card-template group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-template-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-template-accent rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">{category.count}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-template-primary text-lg mb-2 group-hover:text-template-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-template-accent font-medium text-sm">
                  Подробнее
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
