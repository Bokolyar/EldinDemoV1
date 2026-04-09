import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Заявка отправлена!');
  };

  const contacts = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (4852) 78-00-00',
      href: 'tel:+74852780000',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@eldin.ru',
      href: 'mailto:info@eldin.ru',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: '150040, Ярославль, пр-т. Октября, 74',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      value: 'Пн-Пт: 8:00 - 17:00',
      href: '#',
    },
  ];

  return (
    <section id="contacts" className="section-template bg-white">
      <div className="container-template">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="section-title">Контакты</h2>
            <p className="section-subtitle mb-8">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-template-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-5 h-5 text-template-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{contact.title}</div>
                    <div className="font-medium text-template-primary">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-template-gray rounded-xl p-8">
            <h3 className="text-xl font-bold text-template-primary mb-2">
              Оставить заявку
            </h3>
            <p className="text-gray-500 mb-6">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-template-primary focus:ring-2 focus:ring-template-primary/20 outline-none transition-all"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-template-primary focus:ring-2 focus:ring-template-primary/20 outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-template-primary focus:ring-2 focus:ring-template-primary/20 outline-none transition-all"
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-template-primary focus:ring-2 focus:ring-template-primary/20 outline-none transition-all resize-none"
                  placeholder="Опишите ваш запрос..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-template flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Отправить заявку
              </button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="#" className="text-template-accent hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
