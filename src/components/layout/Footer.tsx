import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Индивидуальные сайты', href: '/services#custom' },
    { name: 'Лендинги', href: '/services#landing' },
    { name: 'Редизайн сайта', href: '/services#redesign' },
    { name: 'SEO оптимизация', href: '/services#seo' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Контакты', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-spacing">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  V
                </span>
              </div>
              <span className="font-display font-bold text-xl">ector</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Мы создаём сайты, которые превращают посетителей в клиентов.
              Быстро, современно и масштабируемо.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-6 text-foreground">
              Услуги
            </h4>
            <ul className="space-y-1 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-6 text-foreground">
              Компания
            </h4>
            <ul className="space-y-1 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-6 text-foreground">
              Контакты
            </h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground"><rect x="2.5" y="4" width="13" height="10" rx="2" /><path d="M3 5l6 5 6-5" /></svg>
                <a href="mailto:vectorstudio.dev@gmail.com" className="hover:underline">vectorstudio.dev@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                {/* Telegram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="#fff" d="M128 10a118 118 0 1 1 0 236 118 118 0 0 1 0-236zm41 166 13-86c1-4-1-7-3-8-3-1-7 0-13 1L65 126c-5 2-9 4-9 8 0 2 1 3 5 5l19 6c6 1 12 0 16-2l51-35c3-2 5 1 3 4l-37 35c-5 5-1 10 2 12l34 23c4 3 8 5 12 5s6-5 8-11z" /></svg>
                <a href="https://t.me/byvlad01" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @byvlad01
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M3.7 1.3a.7.7 0 0 0-1 0l-1.1 1c-.5.5-.7 1.2-.4 1.8a17.6 17.6 0 0 0 4.1 6.6 17.6 17.6 0 0 0 6.6 4.1c.6.3 1.3 0 1.8-.4l1-1a.7.7 0 0 0 0-1l-2.3-1.8a.7.7 0 0 0-.6-.2l-2.2.6a1.8 1.8 0 0 1-1.7-.5L5.5 8.1A1.8 1.8 0 0 1 5 6.4l.6-2.2a.7.7 0 0 0-.2-.6zM1.9.5a1.7 1.7 0 0 1 2.6.2L6.3 3c.3.4.4 1 .3 1.5l-.5 2.2a.7.7 0 0 0 .1.6l2.5 2.5a.7.7 0 0 0 .6.1l2.2-.5a1.8 1.8 0 0 1 1.5.3l2.3 1.8c.9.6 1 1.9.2 2.6l-1 1c-.8.8-1.9 1.1-3 .8a18.6 18.6 0 0 1-7-4.5 18.6 18.6 0 0 1-4.4-7c-.3-1 0-2.1.8-2.9z" /></svg>
                <a href="tel:+375293927136" className="hover:underline">8 (029) 392-71-36</a>
              </div>
              <div className="flex items-center gap-2">
                {/* WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="#fff" d="M15 3A12 12 0 0 0 4.7 21.2L3.1 27l6-1.6A12 12 0 1 0 15 3zm-4.1 6.4h.6c.2 0 .4 0 .6.5l1 2.2v.5l-.3.5-.5.6c-.1.1-.3.3-.1.6.2.3.8 1.2 1.7 2 1 1 2 1.4 2.3 1.5.3.2.5.1.7 0 .2-.3.7-1 1-1.2.1-.3.3-.3.6-.2l2 1 .6.3-.2 1.4c-.2.7-1.4 1.4-2 1.5-.5 0-1 .2-3.5-.8-3-1.2-5-4.3-5.1-4.5a5.8 5.8 0 0 1-1.2-3c0-1.5.7-2.2 1-2.5.3-.3.6-.4.8-.4z" transform="scale(8.53333)" /></svg>
                <a href="https://wa.me/375293927136" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  8 (029) 392-71-36 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                {/* Viber SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="#fff" d="M25.36 8.32a6 6 0 0 0-2.4-3.43 10.96 10.96 0 0 0-4.71-1.62c-2.06-.3-3.93-.35-5.7-.13-1.67.2-2.92.53-4.07 1.05a6.56 6.56 0 0 0-4 4.96 31 31 0 0 0-.4 3.03c-.19 2.19-.03 4.12.49 5.91.5 1.75 1.38 3 2.68 3.82.34.2.76.36 1.17.5l.58.22v3.53c0 .47.37.84.84.84.21 0 .42-.09.58-.24l3.26-3.17c.14-.16.14-.16.28-.16 1.12-.02 2.25-.06 3.38-.13 1.37-.07 2.96-.2 4.45-.83a5.56 5.56 0 0 0 2.97-2.69c.62-1.27 1-2.64 1.13-4.2.25-2.73.07-5.11-.53-7.26zM19.7 18.74c-.33.54-.82.9-1.4 1.15-.41.17-.84.13-1.26-.04a15.79 15.79 0 0 1-8.02-7.14c-.37-.69-.63-1.44-.93-2.16-.06-.15-.05-.33-.08-.5.03-1.17.93-1.83 1.84-2.03.34-.07.65.05.91.3a8.04 8.04 0 0 1 1.7 2.35c.2.4.1.74-.21 1.03l-.2.17c-.73.54-.83.95-.45 1.77a5.74 5.74 0 0 0 3.15 2.9c.38.16.73.08 1.01-.22.04-.04.08-.08.1-.12.56-.93 1.37-.84 2.11-.3.5.34.97.7 1.45 1.06.73.54.73 1.05.28 1.78zm-4.18-9.6c-.19 0-.37.02-.56.05a.57.57 0 1 1-.19-1.13 4.5 4.5 0 0 1 5.17 5.18.57.57 0 0 1-1.12-.2 3.35 3.35 0 0 0-3.3-3.9zM18 12.86a.57.57 0 0 1-1.14 0c0-.95-.77-1.72-1.72-1.72a.57.57 0 0 1 0-1.14A2.86 2.86 0 0 1 18 12.86zm3.85.7a.57.57 0 0 1-.69.43.57.57 0 0 1-.43-.69 5.06 5.06 0 0 0-6.03-6.03.57.57 0 1 1-.25-1.12 6.19 6.19 0 0 1 7.4 7.4z" transform="scale(8.53333)" /></svg>
                <a href="viber://chat?number=375293927136" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  8 (029) 392-71-36 (Viber)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vector Studio. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
