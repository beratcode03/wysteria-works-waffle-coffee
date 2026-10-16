import { Link } from 'react-router-dom';

import { useLanguage } from '@/i18n/useLanguage';

type Props = {

  title: string;

  subtitle?: string;

  eyebrow?: string;

  crumb?: string;

};

export default function PageHeader({ title, subtitle, eyebrow, crumb }: Props) {

  const { t } = useLanguage();

  return (

    <section

      className="waffle-grid relative overflow-hidden px-6 pb-14 pt-28 lg:px-12 lg:pb-20 lg:pt-36"

      style={{

        background: 'radial-gradient(circle at 80% 20%, #3D2217 0%, #24140D 100%)',

      }}

    >

      <span

        className="pointer-events-none absolute -right-8 top-6 select-none font-serif text-[14rem] leading-none text-ivory/5 lg:text-[20rem]"

        style={{

          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 74%)',

          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 74%)',

        }}

        aria-hidden="true"

      >

        {title.charAt(0)}

      </span>

      <div className="relative mx-auto max-w-[1400px]">

        {crumb && (

          <nav className="mb-6 flex animate-fade-up items-center gap-2 text-xs text-ivory/50">

            <Link to="/" className="transition-colors hover:text-brass-light">

              {t.common.home}

            </Link>

            <span>/</span>

            <span className="text-ivory/80">{crumb}</span>

          </nav>

        )}

        {eyebrow && (

          <span className="mb-4 inline-block animate-fade-up text-[11px] font-medium uppercase tracking-wide-3 text-brass-light" style={{ animationDelay: '0.06s' }}>

            {eyebrow}

          </span>

        )}

        <h1 className="max-w-3xl animate-fade-up text-balance text-4xl font-light leading-[1.08] tracking-[-0.01em] text-ivory sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.12s' }}>

          {title}

        </h1>

        {subtitle && (

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/65" style={{ animationDelay: '0.2s' }}>

            {subtitle}

          </p>

        )}

      </div>

    </section>

  );

}
