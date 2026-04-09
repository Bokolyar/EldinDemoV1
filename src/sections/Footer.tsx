import { Phone, Mail, MapPin } from 'lucide-react';

const productLinks = ['Электродвигатели', 'Электроприводы', 'Генераторы', 'Насосы', 'Весь каталог'];
const serviceLinks = ['Литейное производство', 'Лазерная резка', 'Сварка металла', 'Гибка металла'];
const companyLinks = ['О компании', 'Новости', 'Карьера', 'Контакты'];

export default function Footer() {
  return (
    <footer className="bg-eldin-blue text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <img src="/logo_light.png" alt="ЭЛДИН" className="h-10 mb-4" />
            <p className="text-sm text-white/70 mb-6">
              Ярославский электромашиностроительный завод. Производство электродвигателей, электроприводов, генераторов и промышленных насосов с 1954 года.
            </p>
            <div className="space-y-2">
              <a href="tel:+74852780000" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +7 (4852) 78-00-00
              </a>
              <a href="mailto:info@eldin.ru" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@eldin.ru
              </a>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 150040, Ярославль, пр-т. Октября, 74
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#products" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
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
                  <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
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
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">&copy; 2024 АО &laquo;ЭЛДИН&raquo;. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
