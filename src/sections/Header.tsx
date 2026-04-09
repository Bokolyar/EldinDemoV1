import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'О компании', href: '#about' },
  { label: 'Продукция', href: '#products', hasDropdown: true },
  { label: 'Услуги', href: '#services' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo_original.png" alt="ЭЛДИН" className="h-10" />
          <span className="hidden sm:block text-xs leading-tight text-eldin-gray">
            Ярославский<br />электромашиностроительный<br />завод
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-eldin-blue transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+74852780000" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4" />
            +7 (4852) 78-00-00
          </a>
          <a href="#contacts" className="btn-primary text-sm !px-5 !py-2.5">
            Оставить заявку
          </a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t mt-2 py-4">
          <div className="container-custom flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-eldin-blue"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+74852780000" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4" />
              +7 (4852) 78-00-00
            </a>
            <a href="#contacts" className="btn-primary text-sm text-center" onClick={() => setMobileOpen(false)}>
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
