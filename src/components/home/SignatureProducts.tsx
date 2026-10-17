import { Link } from 'react-router-dom';

import { ArrowRight, Star } from 'lucide-react';

import { products } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import WafflePiece from '@/components/WafflePiece';

import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function SignatureProducts() {

  const { t } = useLanguage();

  const featured = products

    .filter((p) => p.featured)

    .sort((a, b) => (a.id === 'waffle' ? -1 : b.id === 'waffle' ? 1 : 0));

  return (

    <section className="relative bg-ivory-200/60 px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">

          {}

          <div className="lg:col-span-5">

            <Reveal className="lg:sticky lg:top-28">

              <Eyebrow>{t.signature.eyebrow}</Eyebrow>

              <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl">

                <span className="mask-line"><span className="mask-line-inner">{t.signature.title1}</span></span>

                <span className="mask-line"><span className="mask-line-inner italic font-normal text-brass-dark">{t.signature.title2}</span></span>

              </h2>

              <OrnamentalRule className="mt-6" />

              <p className="mt-6 max-w-md text-base leading-relaxed text-espresso/65">

                {t.signature.copy}

              </p>

              {}

              <div className="relative mt-9 overflow-hidden rounded-2xl bg-gradient-to-b from-ivory-200/80 to-mauve-light/40">

                <div className="grain absolute inset-0" aria-hidden="true" />

                <div className="relative flex h-72 items-center justify-center sm:h-80">

                  <div className="animate-float-slow" style={{ ['--float-r' as string]: '-6deg' }}>

                    <WafflePiece piece="fruit" scale={0.52} className="hidden sm:block" />

                    <WafflePiece piece="fruit" scale={0.4} className="sm:hidden" />

                  </div>

                </div>

                <div className="relative flex items-center justify-between border-t border-espresso/8 bg-ivory-50/70 px-6 py-4 backdrop-blur-sm">

                  <div>

                    <p className="text-[10px] font-medium uppercase tracking-wide-2 text-brass-dark">

                      {t.signature.handmade}

                    </p>

                    <p className="mt-0.5 font-serif text-lg font-light text-espresso">

                      {t.signature.tagline}

                    </p>

                  </div>

                </div>

              </div>

              <Link

                to="/menu"

                className="sheen group mt-8 inline-flex items-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"

              >

                {t.signature.ctaAll}

                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

              </Link>

            </Reveal>

          </div>

          {}

          <div className="lg:col-span-7">

            <Reveal delay={1}>

              <p className="mb-4 text-xs font-medium uppercase tracking-wide-3 text-espresso/40">

                {t.signature.featured}

              </p>

              <div className="divide-y divide-ivory-300/70 rounded-2xl border border-ivory-300/70 bg-ivory-50/60 px-2 sm:px-4">

                {featured.map((product) => {

                  const localized = t.products[product.id];

                  return (

                    <article

                      key={product.id}

                      className="group flex items-center gap-4 rounded-2xl px-3 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory-50 hover:shadow-[0_10px_28px_rgba(44,26,14,0.07)] sm:gap-6 sm:py-6"

                    >

                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full shadow-sm ring-2 ring-ivory-300/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-[0_14px_26px_rgba(44,26,14,0.18)] group-hover:ring-brass/50 sm:h-20 sm:w-20">

                        <img

                          src={product.image}

                          alt={product.alt}

                          loading="lazy"

                          decoding="async"

                          className="h-full w-full object-cover sepia-[0.14] saturate-[0.9] contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.14]"

                        />

                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <h3 className="text-base font-medium text-espresso transition-colors group-hover:text-plum sm:text-lg">

                            {localized?.name ?? product.name}

                          </h3>

                          <span className="inline-flex items-center gap-1 rounded-full bg-brass/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brass-dark">

                            <Star size={8} fill="currentColor" />

                            {t.menu.popular}

                          </span>

                        </div>

                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-espresso/55 sm:line-clamp-1">

                          {localized?.description ?? product.description}

                        </p>

                      </div>

                      <div className="flex-shrink-0 text-right">

                        <span className="font-serif text-xl font-medium text-plum transition-all duration-400 group-hover:-translate-x-1 group-hover:scale-110 group-hover:text-brass-dark">

                          ₺{product.price}

                        </span>

                        <p className="mt-1 text-[10px] uppercase tracking-wide-2 text-espresso/35">

                          {t.menu.categories[product.category] ?? product.category}

                        </p>

                      </div>

                    </article>

                  );

                })}

              </div>

              <p className="mt-5 text-xs leading-relaxed text-espresso/45">

                {t.signature.notePre}{' '}

                <Link to="/menu" className="font-medium text-brass-dark underline-offset-2 hover:underline">

                  {t.signature.noteLink}

                </Link>

                {t.signature.notePost}

              </p>

            </Reveal>

          </div>

        </div>

      </div>

    </section>

  );

}
