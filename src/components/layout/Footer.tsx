import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, PHONE_DISPLAY, EMAIL } from '@/constants/links';
import { trackMetaPixelToContact, trackMetaPixelCTAClick } from '@/components/MetaPixel';
import { EmailIcon, PhoneIcon, WhatsAppIcon, ViberIcon } from '@/components/icons';

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
      <div className="container-custom pt-10 sm:pt-16 md:pt-24 lg:pt-32">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  V
                </span>
              </div>
            </Link>
            <div className="flex flex-col gap-2 text-muted-foreground text-md leading-relaxed max-w-xs">
              <p>Создаём сайты, которые превращают посетителей в клиентов. </p>
              <p>Быстро, современно и масштабируемо.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-md uppercase tracking-wider mb-2 md:mb-6 text-foreground">
              Услуги
            </h4>
            <ul className="space-y-1 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-md"
                    onClick={() => trackMetaPixelCTAClick(`Footer: ${link.name}`)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-md uppercase tracking-wider mb-2 md:mb-6 text-foreground">
              Компания
            </h4>
            <ul className="space-y-1 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-md"
                    onClick={() => (link.href === '/contact' ? trackMetaPixelToContact('Footer') : trackMetaPixelCTAClick(`Footer: ${link.name}`))}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-display font-semibold text-md uppercase tracking-wider mb-2 md:mb-6 text-foreground">
              Контакты
            </h4>
            <div className="space-y-1 md:space-y-3 text-muted-foreground text-md">
              <div className="flex items-center gap-2">
                <EmailIcon className="shrink-0 text-foreground" />
                <a href={SOCIAL_LINKS.email} className="hover:underline">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="shrink-0" />
                <a href={SOCIAL_LINKS.phone} className="hover:underline">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="shrink-0" />
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {PHONE_DISPLAY} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ViberIcon className="shrink-0" />
                <a href={SOCIAL_LINKS.viber} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {PHONE_DISPLAY} (Viber)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-16 py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-md">
            © {new Date().getFullYear()} Vector Studio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
