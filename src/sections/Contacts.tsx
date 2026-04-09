import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Телефон', value: '+7 (4852) 78-00-00' },
  { icon: Mail, label: 'Email', value: 'info@eldin.ru' },
  { icon: MapPin, label: 'Адрес', value: 'Ярославль, пр-т. Октября, 74' },
];

export default function Contacts() {
  return (
    <section id="contacts" className="section-padding bg-eldin-blue">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - info */}
          <div>
            <span className="inline-block text-eldin-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Контакты
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-white/80 mb-10 max-w-lg">
              Готовы ответить на ваши вопросы и помочь с выбором оборудования. Оставьте заявку — мы перезвоним в ближайшее время.
            </p>

            <div className="space-y-6">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-eldin-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{c.label}</p>
                      <p className="text-white font-medium">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Working hours */}
            <div className="mt-10 p-6 bg-white/5 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-eldin-gold" />
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Режим работы</p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8 text-sm">
                      <span className="text-white/60">Понедельник — Пятница</span>
                      <span className="text-white font-medium">8:00 — 17:00</span>
                    </div>
                    <div className="flex justify-between gap-8 text-sm">
                      <span className="text-white/60">Суббота — Воскресенье</span>
                      <span className="text-white font-medium">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-eldin-blue mb-6">Оставить заявку</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
                <input
                  type="text"
                  placeholder="Например: Электродвигатели"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
                <textarea
                  placeholder="Опишите ваш запрос..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors resize-none"
                />
                <button type="submit" className="btn-primary w-full text-center justify-center flex items-center gap-2">
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
