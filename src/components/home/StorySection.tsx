import { Link } from 'react-router-dom';

import { Coffee, Flame, Sunrise } from 'lucide-react';

import { storyImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import SmartImage from '@/components/SmartImage';

import { Eyebrow } from '@/components/SectionHeading';

import { useParallax } from '@/hooks/useScrollReveal';

const featureIcons = [Sunrise, Coffee, Flame];

export default function StorySection() {

  const { t } = useLanguage();

  const parallaxRef = useParallax(0.09);

  return (

    <section className="waffle-grid relative overflow-hidden bg-plum px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {}

          <Reveal className="lg:col-span-5">

            <Eyebrow className="text-brass-light">{t.story.eyebrow}</Eyebrow>

            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.story.title1}</span></span>

              <span className="mask-line"><span className="mask-line-inner italic font-normal text-brass-light">{t.story.title2}</span></span>

              <span className="mask-line"><span className="mask-line-inner">{t.story.title3}</span></span>

            </h2>

            <p className="mt-8 text-base leading-relaxed text-ivory/65">

              {t.story.p1}

            </p>

            <p className="mt-4 text-base leading-relaxed text-ivory/65">

              {t.story.p2}

            </p>

            <Link

              to="/about"

              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brass-light underline-offset-4 transition-colors hover:text-ivory hover:underline"

            >

              {t.story.link}

            </Link>

            {}

            <div className="mt-10 grid grid-cols-1 gap-3 border-t border-ivory/10 pt-8 sm:grid-cols-3">

              {t.story.features.map((label, i) => {

                const Icon = featureIcons[i];

                return (

                  <div key={label} className="flex items-center gap-3">

                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-light">

                      <Icon size={15} />

                    </span>

                    <span className="text-xs font-medium leading-snug text-ivory/65">{label}</span>

                  </div>

                );

              })}

            </div>

          </Reveal>

          {}

          <div className="lg:col-span-7 lg:col-start-7">

            <Reveal delay={1} className="relative">

              <div className="relative overflow-hidden rounded-2xl">

                <div ref={parallaxRef} className="h-full w-full will-change-transform">

                  <div className="scale-[1.16]">

                    <SmartImage

                      src={storyImages.primary}

                      alt="Vintage dekor ve sıcak ışıkla döşenmiş kafe iç mekanı"

                      aspect="aspect-[3/4]"

                      loading="lazy"

                    />

                  </div>

                </div>

              </div>

              {}

              <div className="absolute -bottom-6 -left-4 w-28 overflow-hidden rounded-lg border-4 border-plum sm:w-40 lg:-left-10 lg:w-52">

                <SmartImage

                  src={storyImages.barista}

                  alt="Barista kahve hazırlarken"

                  aspect="aspect-square"

                  loading="lazy"

                />

              </div>

              {}

              <span className="absolute -right-2 -top-6 select-none font-serif text-7xl text-ivory/10 lg:text-9xl" aria-hidden="true">

                01

              </span>

            </Reveal>

          </div>

        </div>

      </div>

    </section>

  );

}
