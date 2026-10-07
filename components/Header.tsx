"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export const navigation = [
  { label: "Home", href: "/" }, { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" }, { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="site-header"><div className="page-container header-inner">
    <Logo />
    <nav className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation" id="main-navigation">
      {navigation.map(item => <Link key={item.href} className={pathname === item.href ? "is-active" : undefined} aria-current={pathname === item.href ? "page" : undefined} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
    </nav>
    <Link href="/contact#quote-form" className="gold-button header-quote">Get a Quote <ArrowRight aria-hidden="true" /></Link>
    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}
