import { useState, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Star, Coffee, Snowflake, Flame, Cake } from 'lucide-react';

import { products, categories } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import PageHeader from '@/components/PageHeader';

import Reveal from '@/components/Reveal';

const categoryIcons: Record<string, React.ReactNode> = {

  'Kahveler': <Coffee size={14} />,

  'Waffle\'lar': <Cake size={14} />,

  'Soğuk İçecekler': <Snowflake size={14} />,

  'Sıcak İçecekler': <Flame size={14} />,

  'Tatlılar': <Cake size={14} />,

};

export default function MenuPage() {

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const { t } = useLanguage();

  const filteredProducts = useMemo(

    () => products.filter((p) => p.category === activeCategory),

    [activeCategory]

  );

  const categoryCounts = useMemo(

    () => Object.fromEntries(categories.map((c) => [c, products.filter((p) => p.category === c).length])),

    []

  );

  return (

    <>

      <PageHeader

        eyebrow={t.menu.eyebrow}

        title={t.menu.title}

        subtitle={t.menu.subtitle}

        crumb={t.menu.crumb}

      />

      <section className="bg-ivory px-6 pb-16 pt-10 lg:px-12 lg:pb-24 lg:pt-14">

        <div className="mx-auto max-w-[1100px]">

          {}

          <div className="sticky top-16 z-30 -mx-6 mb-10 bg-ivory/95 px-6 py-4 backdrop-blur-md lg:mx-0 lg:rounded-2xl lg:border lg:border-ivory-300/60 lg:px-5 lg:shadow-sm">

            <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none sm:flex-wrap sm:justify-center sm:pb-0">

              {categories.map((cat) => {

                const active = cat === activeCategory;

                return (

                  <button

                    key={cat}

                    onClick={() => setActiveCategory(cat)}

                    className={`group inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${

                      active

                        ? 'bg-plum text-ivory shadow-sm'

                        : 'menu-pill bg-[#F5EFE6] text-espresso/65 hover:text-espresso'

                    }`}

                    aria-pressed={active}

                  >

                    <span className={`transition-colors duration-300 ${active ? 'text-ivory/80' : 'text-espresso/40 group-hover:text-brass-dark'}`}>

                      {categoryIcons[cat]}

                    </span>

                    {t.menu.categories[cat] ?? cat}

                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] transition-colors duration-300 ${active ? 'bg-ivory/20 text-ivory/80' : 'bg-espresso/10 text-espresso/40 group-hover:bg-brass/15 group-hover:text-brass-dark'}`}>

                      {categoryCounts[cat]}

                    </span>

                  </button>

                );

              })}

            </div>

          </div>

          {}

          <div key={activeCategory} className="divide-y divide-ivory-300/60">

            {filteredProducts.map((product, index) => {

              const localized = t.products[product.id];

              return (

                <article

                  key={product.id}

                  className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-5 opacity-0 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory-50 hover:shadow-[0_10px_28px_rgba(44,26,14,0.07)] sm:gap-6 sm:py-6"

                  style={{

                    animation: `fadeUp 0.5s ease-out ${index * 0.05}s forwards`,

                  }}

                >

                  {}

                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-ivory-300/60 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:rotate-3 group-hover:ring-brass/50 group-hover:shadow-[0_14px_26px_rgba(44,26,14,0.18)] sm:h-20 sm:w-20">

                    <img

                      src={product.image}

                      alt={product.alt}

                      loading={index < 3 ? 'eager' : 'lazy'}

                      decoding="async"

                      className="h-full w-full object-cover sepia-[0.14] saturate-[0.9] contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.14]"

                    />

                  </div>

                  {}

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-baseline gap-x-2.5">

                      <h3 className="min-w-0 text-base font-medium text-espresso transition-colors group-hover:text-plum sm:text-lg">

                        {localized?.name ?? product.name}

                      </h3>

                      {product.featured && (

                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brass/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brass-dark">

                          <Star size={8} fill="currentColor" />

                          {t.menu.popular}

                        </span>

                      )}

                      <span className="mx-1 min-w-4 flex-1 -translate-y-1 border-b border-dotted border-espresso/25 transition-colors duration-300 group-hover:border-brass/40" aria-hidden="true" />

                      <span className="shrink-0 font-serif text-xl font-medium text-plum transition-all duration-400 group-hover:scale-110 group-hover:text-brass-dark">

                        ₺{product.price}

                      </span>

                    </div>

                    <p className="mt-1 font-serif text-sm italic leading-relaxed text-espresso/50">

                      {localized?.notes ?? localized?.description ?? product.description}

                    </p>

                  </div>

                </article>

              );

            })}

          </div>

          {}

          <div className="mt-12 rounded-2xl border border-brass/20 bg-brass/5 px-6 py-5 text-center">

            <p className="text-sm leading-relaxed text-espresso/55">

              {t.menu.note}

            </p>

          </div>

          {}

          <Reveal className="mt-12 text-center">

            <Link

              to="/contact"

              className="group inline-flex items-center gap-2.5 rounded-full border border-plum/30 px-7 py-3.5 text-sm font-medium text-plum transition-all duration-300 hover:bg-plum hover:text-ivory"

            >

              {t.menu.cta}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </Link>

          </Reveal>

        </div>

      </section>

    </>

  );

}
