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
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              alt="ЭЛДИН - Ярославский электромашиностроительный завод"
              className={`h-10 md:h-12 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-0 absolute' : 'opacity-100'}`}
              src="/logo_dark.png"
            />
            <img
              alt="ЭЛДИН - Ярославский электромашиностроительный завод"
              className={`h-10 md:h-12 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 absolute'}`}
              src="/logo_light.png"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-700 hover:text-eldin-blue' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+74852780000"
              className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              +7 (4852) 78-00-00
            </a>
            <a href="#contacts" className="btn-primary">
              Оставить заявку
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t mt-2 py-4 shadow-lg">
          <div className="container-custom flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 hover:text-eldin-blue"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+74852780000" className="flex items-center gap-2 font-medium text-gray-700">
              <Phone className="w-4 h-4" />
              +7 (4852) 78-00-00
            </a>
            <a href="#contacts" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
