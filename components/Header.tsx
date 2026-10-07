import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

export const navigation = [
  { label: "Home", href: "/" }, { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" }, { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return <header className="site-header"><div className="page-container header-inner">
    <Logo />
    <nav className="primary-nav" aria-label="Main navigation">
      {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
    </nav>
    <a href="/contact#quote-form" className="gold-button header-quote">Get a Quote <ArrowRight aria-hidden="true" /></a>
    <details className="mobile-nav">
      <summary className="menu-toggle"><span className="sr-only">Navigation menu</span><Menu className="menu-open-icon" aria-hidden="true" /><X className="menu-close-icon" aria-hidden="true" /></summary>
      <nav className="mobile-nav-links" aria-label="Mobile navigation">
        {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        <a href="/contact#quote-form">Get a Quote</a>
      </nav>
    </details>
  </div></header>;
}
