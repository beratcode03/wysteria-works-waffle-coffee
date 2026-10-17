import { useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { galleryImages } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import SmartImage from '@/components/SmartImage';

import Lightbox from '@/components/Lightbox';

import { Eyebrow } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const tileClass = [

  'sm:col-span-2 lg:col-span-7 lg:row-span-2',

  'sm:col-span-1 lg:col-span-5',

  'sm:col-span-1 lg:col-span-5',

];

export default function Gallery() {

  const { t } = useLanguage();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.matchMedia().add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {

        gsap.utils.toArray<HTMLElement>('.gallery-tile').forEach((tile, i) => {

          gsap.fromTo(

            tile,

            { y: i % 2 === 0 ? 30 : -30 },

            {

              y: i % 2 === 0 ? -30 : 30,

              ease: 'none',

              scrollTrigger: {

                trigger: gridRef.current,

                start: 'top bottom',

                end: 'bottom top',

                scrub: 0.8,

              },

            }

          );

        });

      });

    }, gridRef);

    return () => ctx.revert();

  }, []);

  const label = (i: number) => t.gallery.labels[i] ?? galleryImages[i].label;

  const images = galleryImages.map((image, i) => ({ ...image, label: label(i) }));

  return (

    <section className="bg-espresso px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1180px]">

        <Reveal className="mb-14">

          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">

            <div>

              <Eyebrow className="text-brass-light">{t.gallery.eyebrow}</Eyebrow>

              <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">

                <span className="mask-line"><span className="mask-line-inner">{t.gallery.title}</span></span>

              </h2>

            </div>

            <p className="pb-2 font-serif text-sm italic text-ivory/35">

              {String(galleryImages.length).padStart(2, '0')} — {t.gallery.count}

            </p>

          </div>

          <div className="mt-8 h-px w-full bg-ivory/10" aria-hidden="true" />

        </Reveal>

        <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[150px] lg:grid-cols-12 lg:gap-6">

          {galleryImages.map((image, index) => (

            <Reveal

              key={image.url}

              delay={(index % 3) as 0 | 1 | 2}

              className={`h-full ${tileClass[index] ?? 'sm:col-span-1 lg:col-span-4 lg:row-span-2'}`}

            >

              <div className="gallery-tile h-full will-change-transform">

                <button

                  type="button"

                  onClick={() => setLightboxIndex(index)}

                  aria-label={`${t.gallery.viewAria}: ${label(index)}`}

                  className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-2xl text-left"

                >

                  <div className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">

                    <SmartImage

                      src={image.url}

                      alt={image.alt}

                      aspect={`${index === 0 ? 'aspect-[16/11]' : 'aspect-[4/3]'} lg:aspect-none lg:h-full`}

                      loading="lazy"

                    />

                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-espresso/60 to-transparent p-6 transition-opacity group-hover:from-espresso/40">

                    <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory transition-transform duration-500 group-hover:-translate-y-1">{label(index)}</span>

                  </div>

                </button>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

      <Lightbox

        images={images}

        index={lightboxIndex}

        onClose={() => setLightboxIndex(null)}

        onNav={setLightboxIndex}

      />

    </section>

  );

}
