import { useLayoutEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ArrowRight, Instagram } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import WafflePiece from '@/components/WafflePiece';

import Magnetic from '@/components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBand() {

  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.matchMedia().add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {

        gsap.utils.toArray<HTMLElement>('.cta-piece').forEach((el, i) => {

          gsap.fromTo(

            el,

            { y: 40, rotation: i === 0 ? -10 : 10, opacity: 0.55 },

            {

              y: 0,

              rotation: 0,

              opacity: 0.9,

              ease: 'none',

              scrollTrigger: {

                trigger: sectionRef.current,

                start: 'top 90%',

                end: 'top 30%',

                scrub: 0.8,

              },

            }

          );

        });

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section ref={sectionRef} className="relative overflow-hidden bg-[#2B1810] px-6 py-20 text-center lg:px-12 lg:py-24">

      {}

      <div

        className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brass/15 blur-3xl"

        aria-hidden="true"

      />

      {}

      <div className="cta-piece pointer-events-none absolute -left-14 bottom-10 hidden lg:block" aria-hidden="true">

        <div className="animate-float-slow" style={{ ['--float-r' as string]: '-18deg' }}>

          <WafflePiece piece="chocolate" scale={0.28} />

        </div>

      </div>

      <div className="cta-piece pointer-events-none absolute -right-12 top-8 hidden lg:block" aria-hidden="true">

        <div className="animate-float" style={{ ['--float-r' as string]: '16deg', animationDelay: '0.8s' }}>

          <WafflePiece piece="sprinkle" scale={0.26} />

        </div>

      </div>

      <Reveal className="relative mx-auto max-w-2xl">

        <span className="text-[11px] font-medium uppercase tracking-wide-3 text-brass-light">

          {t.cta.eyebrow}

        </span>

        <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">

          <span className="mask-line"><span className="mask-line-inner">{t.cta.title1}</span></span>

          <span className="mask-line"><span className="mask-line-inner italic font-normal text-brass-light">{t.cta.title2}</span></span>

        </h2>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/60">

          {t.cta.copy}

        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Magnetic strength={0.25}>

            <a

              href={siteConfig.directionsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="sheen group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ivory shadow-lg transition-all duration-300 hover:bg-brass-dark hover:shadow-xl"

            >

              {t.cta.directions}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </a>

          </Magnetic>

          <Magnetic strength={0.25}>

            <Link

              to="/menu"

              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:border-ivory/50 hover:bg-ivory/5"

            >

              {t.cta.viewMenu}

            </Link>

          </Magnetic>

          <a

            href={siteConfig.instagramUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="group inline-flex items-center gap-2.5 rounded-full border border-ivory/25 px-6 py-3.5 text-sm font-medium text-ivory/80 transition-all duration-300 hover:border-brass-light hover:bg-ivory/5 hover:text-ivory"

          >

            <Instagram size={16} className="text-brass-light" />

            {siteConfig.instagram}

          </a>

        </div>

      </Reveal>

    </section>

  );

}
