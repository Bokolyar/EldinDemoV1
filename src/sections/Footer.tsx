import { Phone, Mail, MapPin } from 'lucide-react';

const productLinks = ['Электродвигатели', 'Электроприводы', 'Генераторы', 'Насосы', 'Весь каталог'];
const serviceLinks = ['Литейное производство', 'Лазерная резка', 'Сварка металла', 'Гибка металла'];
const companyLinks = ['О компании', 'Новости', 'Карьера', 'Контакты'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company info - spans 2 cols */}
          <div className="lg:col-span-2">
            <img src="/logo_dark.png" alt="ЭЛДИН" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-6 max-w-sm">
              Ярославский электромашиностроительный завод. Производство электродвигателей, электроприводов, генераторов и промышленных насосов с 1954 года.
            </p>
            <div className="space-y-3">
              <a href="tel:+74852780000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-eldin-gold" /> +7 (4852) 78-00-00
              </a>
              <a href="mailto:info@eldin.ru" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-eldin-gold" /> info@eldin.ru
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-eldin-gold mt-0.5 shrink-0" /> 150040, Ярославль, пр-т. Октября, 74
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 АО &laquo;ЭЛДИН&raquo;. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Пользовательское соглашение</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
