import { useLanguage } from '@/i18n/useLanguage';

const COPIES = 6;

export default function Marquee() {

  const { t } = useLanguage();

  const base = t.marquee.items;

  const items = Array.from({ length: COPIES }, () => base).flat();

  return (

    <div className="relative overflow-hidden border-y border-ivory/10 bg-plum py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

      <div className="marquee-track items-center">

        {items.map((item, i) => (

          <span key={i} className="flex items-center whitespace-nowrap" aria-hidden={i >= base.length}>

            <span className="px-8 font-serif text-lg font-light italic text-ivory/85">{item}</span>

            <span className="h-1.5 w-1.5 rotate-45 bg-brass-light/60" />

          </span>

        ))}

      </div>

    </div>

  );

}
