import { useState } from 'react';

import { MapPin, Clock, ArrowRight } from 'lucide-react';

import { getOpenStatus, siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import MapFallback from '@/components/MapFallback';

import { Eyebrow, OrnamentalRule } from '@/components/SectionHeading';

export default function VisitSection() {

  const [status] = useState(() => getOpenStatus());

  const { t } = useLanguage();

  return (

    <section className="relative bg-ivory px-6 py-24 lg:px-12 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {}

          <Reveal className="lg:col-span-5">

            <Eyebrow>{t.visit.eyebrow}</Eyebrow>

            <h2 className="mt-4 text-balance text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">

              <span className="mask-line"><span className="mask-line-inner">{t.visit.title}</span></span>

            </h2>

            <OrnamentalRule className="mt-6" />

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">

                <MapPin className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                <div>

                  <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.visit.address}</p>

                  <p className="mt-1 text-base leading-relaxed text-espresso/70">{siteConfig.address}</p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.visit.hours}</p>

                    <span className="inline-flex items-center gap-2 text-sm text-espresso/60">

                      <span className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-emerald-600' : 'bg-brass-dark'}`} aria-hidden="true" />

                      {status.open ? t.visit.open : t.visit.closed}

                    </span>

                  </div>

                  <div className="mt-1 space-y-1">

                    {siteConfig.hours.map((h, i) => (

                      <div key={h.day} className="flex justify-between gap-8 text-base text-espresso/70">

                        <span>{t.visit.days[i] ?? h.day}</span>

                        <span className="text-brass-dark">{h.time}</span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

            <a

              href={siteConfig.directionsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="sheen group mt-10 inline-flex items-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600"

            >

              {t.visit.cta}

              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

            </a>

          </Reveal>

          {}

          <Reveal delay={1} className="lg:col-span-7">

            <MapFallback />

          </Reveal>

        </div>

      </div>

    </section>

  );

}
