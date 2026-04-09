import { Download, Settings, FileText, Rss } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'О компании ЭЛДИН', href: '#about' },
      { label: 'Продукция', href: '#products' },
      { label: 'Решения', href: '#solutions' },
      { label: 'Инвесторы', href: '#' },
      { label: 'Этика', href: '#' },
      { label: 'Поддержка', href: '#' },
    ],
    quickLinks: [
      { label: 'Download Center', href: '#', icon: Download },
      { label: 'Настройки', href: '#', icon: Settings },
      { label: 'Privacy Notice', href: '#', icon: FileText },
      { label: 'Cookie Statement', href: '#', icon: FileText },
      { label: 'Terms of Use', href: '#', icon: FileText },
      { label: 'RSS', href: '#', icon: Rss },
    ],
  };

  return (
    <footer className="bg-weg-navy text-white">
      {/* Main Footer */}
      <div className="container-weg py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="/logo_dark.png"
              alt="ЭЛДИН"
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/60 max-w-md leading-relaxed">
              Ярославский электромашиностроительный завод — ведущий производитель 
              электротехнической продукции в России с 1954 года.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">О компании ЭЛДИН</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-weg-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-weg-gold transition-colors flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-weg py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} АО «ЭЛДИН». Все права защищены.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Privacy Notice
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Cookie Statement
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
