import { useState, useEffect } from 'react';
import { Search, BarChart2, User, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'О компании', href: '#about' },
    { label: 'Продукция', href: '#products', hasDropdown: true },
    { label: 'Решения', href: '#solutions', hasDropdown: true },
    { label: 'Инвесторы', href: '#' },
    { label: 'Этика', href: '#' },
    { label: 'Поддержка', href: '#' },
    { label: 'Новости', href: '#news' },
    { label: 'Карьера', href: '#' },
  ];

  return (
    <header
      className={`header-weg ${isScrolled ? 'scrolled' : 'transparent'}`}
    >
      <div className="container-weg">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo_dark.png"
              alt="ЭЛДИН"
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-weg-navy'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-weg-navy' : 'text-white/90 hover:text-white'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-weg-navy' : 'text-white/90 hover:text-white'
              }`}
            >
              <BarChart2 className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-weg-navy' : 'text-white/90 hover:text-white'
              }`}
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
