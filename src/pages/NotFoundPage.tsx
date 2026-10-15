import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/Reveal';

import { Eyebrow } from '@/components/SectionHeading';

export default function NotFoundPage() {

  const { t } = useLanguage();

  return (

    <section className="waffle-grid relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso px-6 py-32">

      <Reveal className="relative mx-auto max-w-xl text-center">

        <Eyebrow className="text-brass-light">{t.notFound.eyebrow}</Eyebrow>

        <h1 className="mt-5 text-5xl font-light leading-[1.06] text-ivory sm:text-6xl">

          <span className="mask-line"><span className="mask-line-inner">{t.notFound.title1}</span></span>

          <span className="mask-line"><span className="mask-line-inner italic text-brass-light">{t.notFound.title2}</span></span>

        </h1>

        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory/60">{t.notFound.desc}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link

            to="/"

            className="btn-sheen inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-brass-dark active:scale-[0.97]"

          >

            {t.notFound.home}

          </Link>

          <Link

            to="/menu"

            className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.97]"

          >

            {t.notFound.menu}

            <ArrowRight size={16} />

          </Link>

        </div>

      </Reveal>

    </section>

  );

}
