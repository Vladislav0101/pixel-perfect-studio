import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Custom Websites", href: "/services#custom" },
    { name: "Landing Pages", href: "/services#landing" },
    { name: "Website Redesign", href: "/services#redesign" },
    { name: "SEO Optimization", href: "/services#seo" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Dribbble", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-spacing">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl">Nexus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We build websites that convert visitors into customers. Fast, modern, and built to scale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
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
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
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
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-foreground">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground text-sm">
              hello@nexusstudio.dev
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nexus Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
