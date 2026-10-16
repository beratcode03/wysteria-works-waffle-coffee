import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { ArrowUp, Instagram } from 'lucide-react';

import { brandMark, siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import { scrollToTop } from '@/lib/smoothScroll';

export default function Footer() {

  const [logoFailed, setLogoFailed] = useState(false);

  const { t } = useLanguage();

  const isHome = useLocation().pathname === '/';

  const footerLinks = [

    { to: '/', label: t.nav.home },

    { to: '/menu', label: t.menu.crumb },

    { to: '/about', label: t.nav.story },

    { to: '/contact', label: t.nav.contact },

  ];

  return (

    <footer className="relative overflow-hidden bg-[#2B1810] text-ivory">

      {}

      {!isHome && (

        <div className="absolute -top-px left-0 right-0 overflow-hidden leading-[0]">

          <svg

            viewBox="0 0 1200 60"

            preserveAspectRatio="none"

            className="relative block h-[40px] w-full fill-ivory"

            aria-hidden="true"

          >

            <path d="M 0,40 Q 300,5 600,25 T 1200,10 L 1200,60 L 0,60 Z" />

          </svg>

        </div>

      )}

      {}

      <span

        className="pointer-events-none absolute right-4 top-12 select-none font-serif text-[16rem] leading-none text-ivory/[0.04] lg:text-[24rem]"

        aria-hidden="true"

      >

        W

      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-14 lg:px-12 lg:pt-16">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {}

          <div className="lg:col-span-4">

            <Link to="/" className="inline-flex items-center" aria-label={t.nav.homeAria}>

              {logoFailed ? (

                <span className="font-serif text-2xl font-medium tracking-tight">

                  <span className="italic">Wysteria</span> Works

                </span>

              ) : (

                <img

                  src={brandMark}

                  alt={siteConfig.name}

                  onError={() => setLogoFailed(true)}

                  className="h-16 w-24 object-contain object-left sm:h-20 sm:w-32"

                />

              )}

            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">

              {t.footer.tagline}

            </p>

            <a

              href={siteConfig.instagramUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/60 transition-colors hover:text-brass-light"

            >

              <Instagram size={18} />

              {siteConfig.instagram}

            </a>

          </div>

          {}

          <div className="lg:col-span-3 lg:col-start-6">

            <h3 className="mb-5 text-xs font-medium uppercase tracking-wide-3 text-brass-light">

              {t.footer.explore}

            </h3>

            <ul className="space-y-3">

              {footerLinks.map((link) => (

                <li key={link.to}>

                  <Link

                    to={link.to}

                    className="text-sm text-ivory/60 underline-offset-4 transition-colors hover:text-brass-light hover:underline"

                  >

                    {link.label}

                  </Link>

                </li>

              ))}

            </ul>

            <Link

              to="/menu"

              className="mt-6 inline-block rounded-full border border-brass-light px-5 py-2.5 text-sm font-medium text-brass-light transition-all duration-300 hover:bg-brass-light hover:text-plum"

            >

              {t.nav.menuCta}

            </Link>

          </div>

          {}

          <div className="lg:col-span-4 lg:col-start-9">

            <h3 className="mb-5 text-xs font-medium uppercase tracking-wide-3 text-brass-light">

              {t.footer.visit}

            </h3>

            <address className="not-italic text-sm leading-relaxed text-ivory/60">

              {siteConfig.address}

              <br />

              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-brass-light">

                {siteConfig.phoneDisplay}

              </a>

              <br />

              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brass-light">

                {siteConfig.email}

              </a>

            </address>

            <div className="mt-5 space-y-1.5">

              {siteConfig.hours.map((h, i) => (

                <div key={h.day} className="flex justify-between text-sm text-ivory/50">

                  <span>{t.visit.days[i] ?? h.day}</span>

                  <span>{h.time}</span>

                </div>

              ))}

            </div>

            <p className="mt-5 text-[11px] uppercase tracking-wide-3 text-brass-light/60">

              {siteConfig.instagram}

            </p>

          </div>

        </div>

        {}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 sm:flex-row">

          <p className="text-xs text-ivory/45">

            © {new Date().getFullYear()} {t.footer.rights}

          </p>

          <button

            onClick={scrollToTop}

            className="group inline-flex items-center gap-2 text-xs text-ivory/55 transition-colors hover:text-brass-light"

            aria-label={t.footer.backToTopAria}

          >

            {t.footer.backToTop}

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 transition-all group-hover:border-brass-light group-hover:bg-brass-light group-hover:text-plum">

              <ArrowUp size={14} />

            </span>

          </button>

        </div>

      </div>

    </footer>

  );

}
