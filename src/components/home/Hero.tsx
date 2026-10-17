import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { ArrowDown, ArrowRight, Clock, MapPin } from 'lucide-react';

import { getOpenStatus, products, siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import WafflePiece from '@/components/WafflePiece';

const signatureWaffle = products.find((p) => p.id === 'waffle');

export default function Hero() {

  const visualRef = useRef<HTMLDivElement>(null);

  const [status] = useState(() => getOpenStatus());

  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const el = visualRef.current;

    if (!el) return;

    const r = el.getBoundingClientRect();

    el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));

    el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));

  };

  const handleMouseLeave = () => {

    const el = visualRef.current;

    if (!el) return;

    el.style.setProperty('--px', '0');

    el.style.setProperty('--py', '0');

  };

  return (

    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-ivory via-ivory to-ivory-200/70">

      {}

      <div className="grain absolute inset-0" aria-hidden="true" />

      <div

        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-mauve-light/40 blur-3xl"

        aria-hidden="true"

      />

      <div

        className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-brass/10 blur-3xl"

        aria-hidden="true"

      />

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pt-36">

        {}

        <div className="max-w-xl lg:col-span-6">

          <h1

            className="animate-fade-up text-balance text-5xl font-light leading-[1.02] text-espresso sm:text-6xl lg:text-7xl xl:text-[5.25rem]"

            style={{ animationDelay: '0.08s' }}

          >

            {t.hero.title1}

            <br />

            <span className="font-normal italic tracking-[-0.015em] text-brass-dark text-[1.22em]">{t.hero.title2}</span>

            <br />

            {t.hero.title3}

          </h1>

          <p

            className="mt-7 max-w-md animate-fade-up text-base leading-relaxed text-espresso/65"

            style={{ animationDelay: '0.16s' }}

          >

            {t.hero.subtitle}

          </p>

          <div

            className="mt-9 flex animate-fade-up flex-wrap items-center gap-5"

            style={{ animationDelay: '0.24s' }}

          >

            <Link

              to="/menu"

              className="sheen group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ivory shadow-lg shadow-brass/25 transition-all duration-300 hover:bg-brass-dark hover:shadow-xl"

            >

              {t.hero.ctaMenu}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </Link>

            <Link

              to="/about"

              className="text-sm font-medium text-espresso/80 underline-offset-4 transition-colors hover:text-brass-dark hover:underline"

            >

              {t.hero.ctaStory}

            </Link>

          </div>

          <div

            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-espresso/60"

            style={{ animationDelay: '0.32s' }}

          >

            <span className="inline-flex items-center gap-2">

              <MapPin size={15} className="text-brass-dark" />

              {siteConfig.addressShort}

            </span>

            <span className="hidden h-4 w-px bg-espresso/15 sm:block" />

            <span className="inline-flex items-center gap-2">

              <Clock size={15} className="text-brass-dark" />

              {t.hero.today} {status.opensAt} – {status.closesAt}

            </span>

            <span className="hidden h-4 w-px bg-espresso/15 sm:block" />

            <span className="inline-flex items-center gap-2">

              <span

                className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-emerald-600' : 'bg-brass-dark'}`}

                aria-hidden="true"

              />

              {status.open ? t.visit.open : t.visit.closed}

            </span>

          </div>

        </div>

        {}

        <div

          ref={visualRef}

          onMouseMove={handleMouseMove}

          onMouseLeave={handleMouseLeave}

          className="relative lg:col-span-6"

        >

          <div className="relative mx-auto aspect-square w-full max-w-[540px] animate-fade-in sm:max-w-[580px]">

            {}

            <div

              className="hero-arch absolute inset-x-10 bottom-6 top-8 bg-gradient-to-b from-mauve-light/60 via-ivory-200/70 to-ivory-200/30 shadow-[inset_0_2px_24px_rgb(250,247,242,0.6)] sm:inset-x-14"

              aria-hidden="true"

            />

            <div

              className="hero-arch absolute inset-x-16 bottom-14 top-16 border border-brass/15 sm:inset-x-20"

              aria-hidden="true"

            />

            {}

            <span

              className="absolute -top-1 right-0 hidden h-16 w-16 rotate-45 border-r border-t border-brass/30 sm:block"

              aria-hidden="true"

            />

            {}

            <div

              className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"

              style={{ transform: 'translate3d(calc(var(--px, 0) * 14px), calc(var(--py, 0) * 10px), 0)' }}

            >

              <div className="animate-float" style={{ ['--float-r' as string]: '-4deg' }}>

                <WafflePiece piece="strawberry" scale={0.72} className="hidden sm:block" />

                <WafflePiece piece="strawberry" scale={0.5} className="sm:hidden" />

              </div>

            </div>

            {}

            <div

              className="absolute -left-2 top-6 transition-transform duration-700 ease-out sm:left-0 sm:top-10"

              style={{ transform: 'translate3d(calc(var(--px, 0) * 24px), calc(var(--py, 0) * 18px), 0)' }}

            >

              <div className="animate-float-slow" style={{ ['--float-r' as string]: '-12deg' }}>

                <WafflePiece piece="chocolate" scale={0.34} className="hidden sm:block" />

                <WafflePiece piece="chocolate" scale={0.26} className="sm:hidden" />

              </div>

            </div>

            {}

            <div

              className="absolute -right-3 bottom-16 transition-transform duration-500 ease-out sm:-right-6 sm:bottom-20"

              style={{ transform: 'translate3d(calc(var(--px, 0) * 30px), calc(var(--py, 0) * 22px), 0)' }}

            >

              <div className="animate-float" style={{ ['--float-r' as string]: '14deg', animationDelay: '1.2s' }}>

                <WafflePiece piece="cookie" scale={0.3} className="hidden sm:block" />

                <WafflePiece piece="cookie" scale={0.22} className="sm:hidden" />

              </div>

            </div>

            {}

            {signatureWaffle && (

              <div

                className="absolute bottom-4 left-0 transition-transform duration-700 ease-out sm:bottom-10 sm:-left-2"

                style={{ transform: 'translate3d(calc(var(--px, 0) * -18px), calc(var(--py, 0) * -12px), 0)' }}

              >

                <div className="flex items-center gap-3 rounded-2xl border border-ivory-300/70 bg-ivory-50/90 px-4 py-3 shadow-xl shadow-espresso/10 backdrop-blur-sm">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif text-sm italic text-brass-dark">

                    w

                  </span>

                  <div>

                    <p className="text-[10px] font-medium uppercase tracking-wide-2 text-espresso/45">

                      {t.hero.favorite}

                    </p>

                    <p className="text-sm font-medium text-espresso">

                      {t.products[signatureWaffle.id]?.name ?? signatureWaffle.name}

                      <span className="ml-2 font-serif text-brass-dark">₺{signatureWaffle.price}</span>

                    </p>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

      <div className="scroll-cue relative z-10 mb-8 hidden flex-col items-center gap-2 text-espresso/45 sm:flex">

        <span className="text-[10px] font-medium uppercase tracking-wide-3">{t.hero.scroll}</span>

        <ArrowDown size={16} />

      </div>

    </section>

  );

}
