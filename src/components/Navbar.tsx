import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

import { brandLogo, siteConfig } from '@/data/site';

import { useScrollPosition, useHeaderHidden } from '@/hooks/useScrollReveal';

import { useLanguage } from '@/i18n/useLanguage';

import { getLenis } from '@/lib/smoothScroll';

import LangToggle from '@/components/LangToggle';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [logoFailed, setLogoFailed] = useState(false);

  const scrolled = useScrollPosition();

  const headerHidden = useHeaderHidden() && !open;

  const location = useLocation();

  const { t } = useLanguage();

  const isHome = location.pathname === '/';

  const isMenu = location.pathname === '/menu';

  const navLinks = [

    { to: '/', label: t.nav.home },

    { to: '/about', label: t.nav.story },

    { to: '/contact', label: t.nav.contact },

  ];

  useEffect(() => {

    const lenis = getLenis();

    if (open) {

      lenis?.stop();

      document.body.style.overflow = 'hidden';

    } else {

      lenis?.start();

      document.body.style.overflow = '';

    }

    return () => {

      lenis?.start();

      document.body.style.overflow = '';

    };

  }, [open]);

  const transparent = isHome && !scrolled && !open;

  const bgColor = transparent ? 'bg-transparent' : 'bg-ivory/95 backdrop-blur-lg shadow-sm';

  const textColor = 'text-espresso';

  const borderColor = transparent ? 'border-transparent' : 'border-ivory-300/60';

  return (

    <>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${bgColor} border-b ${borderColor} ${headerHidden ? '-translate-y-full' : 'translate-y-0'}`}>

        <nav className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 lg:px-12 ${scrolled ? 'py-3' : 'py-4 lg:py-5'}`}>

          <Link

            to="/"

            className="flex h-9 w-[9.5rem] items-center sm:h-10 sm:w-[10.5rem]"

            aria-label={t.nav.homeAria}

          >

            {logoFailed ? (

              <span className="font-serif text-xl font-medium tracking-tight text-espresso">

                <span className="italic">Wysteria</span>

              </span>

            ) : (

              <img

                src={brandLogo}

                alt={siteConfig.name}

                onError={() => setLogoFailed(true)}

                className="h-full w-full object-cover brightness-0 opacity-70 transition-all duration-300"

              />

            )}

          </Link>

          {}

          <div className="hidden items-center gap-10 lg:flex">

            {navLinks.map((link) => {

              const active = location.pathname === link.to;

              return (

                <Link

                  key={link.to}

                  to={link.to}

                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${

                    active ? 'text-brass-dark' : textColor

                  } hover:text-brass-dark after:absolute after:-bottom-1.5 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:scale-x-0 after:bg-brass-dark after:transition-transform after:duration-300 after:ease-out ${active ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}

                >

                  {link.label}

                </Link>

              );

            })}

            {isMenu && <LangToggle />}

            <Link

              to="/menu"

              className="sheen group inline-flex items-center gap-2 rounded-full bg-plum px-6 py-2.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600 hover:shadow-md"

            >

              {t.nav.menuCta}

              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />

            </Link>

          </div>

          {}

          <div className="flex items-center gap-3 lg:hidden">

            {isMenu && <LangToggle />}

            <button

              className="rounded-full p-2.5 transition-colors hover:bg-ivory-200"

              onClick={() => setOpen(!open)}

              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}

              aria-expanded={open}

            >

              {open ? (

                <X className="text-espresso" size={22} />

              ) : (

                <MenuIcon className="text-espresso" size={22} />

              )}

            </button>

          </div>

        </nav>

      </header>

      {}

      <div

        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${

          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'

        }`}

      >

        <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={() => setOpen(false)} />

        <div

          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ivory px-8 pt-20 pb-8 shadow-2xl transition-transform duration-500 ${

            open ? 'translate-x-0' : 'translate-x-full'

          }`}

        >

          <div className="flex flex-col gap-5">

            {navLinks.map((link, i) => {

              const active = location.pathname === link.to;

              return (

                <Link

                  key={link.to}

                  to={link.to}

                  onClick={() => setOpen(false)}

                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}

                  className={`font-serif text-2xl font-medium transition-all duration-500 ${

                    open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'

                  } ${active ? 'text-brass-dark' : 'text-espresso hover:text-brass-dark'}`}

                >

                  {link.label}

                </Link>

              );

            })}

            <Link

              to="/menu"

              onClick={() => setOpen(false)}

              style={{ transitionDelay: open ? `${120 + navLinks.length * 70}ms` : '0ms' }}

              className={`mt-2 inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-medium text-ivory transition-all duration-500 hover:bg-plum-600 ${

                open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'

              }`}

            >

              {t.nav.menuCta}

              <ArrowRight size={14} />

            </Link>

          </div>

          <div className="mt-auto border-t border-ivory-300 pt-6">

            <p className="text-sm text-espresso/50">{siteConfig.addressShort}</p>

            <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-sm font-medium text-espresso/70 transition-colors hover:text-brass-dark">

              {siteConfig.phoneDisplay}

            </a>

          </div>

        </div>

      </div>

    </>

  );

}
