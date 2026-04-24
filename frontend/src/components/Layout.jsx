import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n';

const links = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/ukraine-web-development', key: 'ukraine' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const { pathname } = useLocation();

  return (
    <>
      <header className="site-header site-header--page" id="site-header">
        <div className="container">
          <nav className="nav" aria-label="Main navigation">
            <Link to="/" className="nav__logo">
              <span className="nav__logo-dot" />Weblio
            </Link>

            <div className="nav__links">
              {links.map((l) => (
                <NavLink key={l.key} to={l.to} className={({ isActive }) => (isActive ? 'is-active-link' : '')}>
                  {t.nav[l.key]}
                </NavLink>
              ))}
            </div>

            <div className="nav-tools">
              <LanguageSwitcher />
              <Link to="/contact" className="btn btn--primary nav__cta">{t.cta}</Link>
              <button
                className={`nav__toggle hide-desktop ${open ? 'open' : ''}`}
                id="nav-toggle"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>

        <nav className={`nav__mobile ${open ? 'open' : ''}`} id="nav-mobile">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              className={({ isActive }) => (isActive ? 'is-active-link' : '')}
              onClick={() => setOpen(false)}
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
            {t.cta}
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div>
              <div className="footer__brand-logo">
                <span className="nav__logo-dot" />Weblio
              </div>
              <p className="footer__brand-desc">{t.footer}</p>
            </div>

            {/* Pages column */}
            <div>
              <p className="footer__col-title">{t.nav.home === 'Головна' ? 'Сторінки' : 'Pages'}</p>
              <nav className="footer__links">
                {links.map((l) => (
                  <NavLink key={l.key} to={l.to} onClick={() => setOpen(false)}>
                    {t.nav[l.key]}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Services column */}
            <div>
              <p className="footer__col-title">{t.nav.home === 'Головна' ? 'Послуги' : 'Services'}</p>
              <nav className="footer__links">
                <Link to="/services">Landing Page</Link>
                <Link to="/services">{t.nav.home === 'Головна' ? 'Корпоративний сайт' : 'Corporate website'}</Link>
                <Link to="/services">{t.nav.home === 'Головна' ? 'Інтернет-магазин' : 'Online store'}</Link>
                <Link to="/services">{t.nav.home === 'Головна' ? 'Готельний/ресторанний софт' : 'Hotel & restaurant software'}</Link>
              </nav>
            </div>

            {/* Contact column */}
            <div>
              <p className="footer__col-title">{t.nav.home === 'Головна' ? 'Контакт' : 'Contact'}</p>
              <nav className="footer__links">
                <a href="mailto:hello@weblio.dev">hello@weblio.dev</a>
                <Link to="/contact">{t.nav.home === 'Головна' ? 'Написати нам' : 'Get in touch'}</Link>
                <Link to="/legal/privacy-policy">{t.legal.privacy}</Link>
                <Link to="/legal/impressum">{t.legal.impressum}</Link>
              </nav>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">&copy; {new Date().getFullYear()} Weblio. {t.footer}</p>
            <nav className="footer__legal">
              <NavLink to="/legal/privacy-policy">{t.legal.privacy}</NavLink>
              <NavLink to="/legal/impressum">{t.legal.impressum}</NavLink>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
