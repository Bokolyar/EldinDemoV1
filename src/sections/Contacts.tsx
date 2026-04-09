import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Телефон', value: '+7 (4852) 78-00-00' },
  { icon: Mail, label: 'Email', value: 'info@eldin.ru' },
  { icon: MapPin, label: 'Адрес', value: 'Ярославль, пр-т. Октября, 74' },
];

export default function Contacts() {
  return (
    <section id="contacts" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">Контакты</p>
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle mx-auto">
            Готовы ответить на ваши вопросы и помочь с выбором оборудования. Оставьте заявку — мы перезвоним в ближайшее время.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-eldin-gold/10 flex items-center justify-center text-eldin-gold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-eldin-blue">{c.label}</p>
                      <p className="text-sm text-eldin-gray">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-eldin-light rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-eldin-gold/10 flex items-center justify-center text-eldin-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-eldin-blue mb-2">Режим работы</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-eldin-gray">Понедельник — Пятница</span>
                      <span className="font-medium text-eldin-blue">8:00 — 17:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-eldin-gray">Суббота — Воскресенье</span>
                      <span className="font-medium text-eldin-blue">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-lg font-bold text-eldin-blue mb-6">Оставить заявку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Интересующая продукция"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-eldin-gold/30 focus:border-eldin-gold transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Отправить заявку
              </button>
              <p className="text-xs text-eldin-gray text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
