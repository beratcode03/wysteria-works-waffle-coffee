import { MapPin, ExternalLink, Navigation } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

export default function MapFallback() {

  const { t } = useLanguage();

  return (

    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl bg-ivory-200">

      {}

      <svg

        viewBox="0 0 800 500"

        preserveAspectRatio="xMidYMid slice"

        className="absolute inset-0 h-full w-full"

        aria-hidden="true"

      >

        {}

        <g fill="#2C1A0E" opacity="0.05">

          <rect x="30" y="40" width="120" height="86" rx="6" />

          <rect x="168" y="30" width="94" height="108" rx="6" />

          <rect x="300" y="50" width="140" height="80" rx="6" />

          <rect x="470" y="34" width="110" height="96" rx="6" />

          <rect x="620" y="60" width="140" height="70" rx="6" />

          <rect x="40" y="170" width="100" height="120" rx="6" />

          <rect x="180" y="200" width="80" height="96" rx="6" />

          <rect x="300" y="180" width="120" height="60" rx="6" />

          <rect x="470" y="176" width="96" height="110" rx="6" />

          <rect x="610" y="180" width="150" height="100" rx="6" />

          <rect x="36" y="330" width="130" height="110" rx="6" />

          <rect x="200" y="340" width="90" height="100" rx="6" />

          <rect x="330" y="330" width="110" height="120" rx="6" />

          <rect x="480" y="330" width="100" height="110" rx="6" />

          <rect x="620" y="330" width="140" height="110" rx="6" />

        </g>

        {}

        <g stroke="#2C1A0E" strokeWidth="6" opacity="0.10" strokeLinecap="round">

          <line x1="0" y1="156" x2="800" y2="148" />

          <line x1="0" y1="308" x2="800" y2="314" />

          <line x1="284" y1="0" x2="276" y2="500" />

          <line x1="596" y1="0" x2="604" y2="500" />

        </g>

        {}

        <path

          d="M 470 396 q 40 -26 84 -6 q 40 18 12 52 q -32 34 -78 22 q -42 -14 -18 -68 Z"

          fill="#7A8B6B"

          opacity="0.12"

        />

        {}

        <path

          d="M -20 480 C 160 400, 340 300, 480 210 S 720 70, 830 20"

          fill="none"

          stroke="#2C1A0E"

          strokeWidth="14"

          opacity="0.16"

          strokeLinecap="round"

        />

        <path

          d="M -20 480 C 160 400, 340 300, 480 210 S 720 70, 830 20"

          fill="none"

          stroke="#FAF7F2"

          strokeWidth="2"

          opacity="0.65"

          strokeDasharray="10 12"

        />

        <text

          x="636"

          y="112"

          fontSize="11"

          letterSpacing="4"

          fill="#5A3E2B"

          opacity="0.55"

          transform="rotate(-26 636 112)"

          style={{ fontFamily: 'monospace' }}

        >

          ÇARK CAD.

        </text>

        {}

        <g transform="translate(560 164)">

          <circle r="26" fill="#B7684A" opacity="0.14">

            <animate attributeName="r" values="16;30;16" dur="2.6s" repeatCount="indefinite" />

            <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2.6s" repeatCount="indefinite" />

          </circle>

          <circle r="7" fill="#B7684A" />

          <circle r="3" fill="#FAF7F2" />

        </g>

      </svg>

      {}

      <div

        className="pointer-events-none absolute inset-0 rounded-2xl"

        style={{ boxShadow: 'inset 0 0 80px rgba(44,26,14,0.10)' }}

        aria-hidden="true"

      />

      {}

      <div className="absolute inset-0 flex items-end justify-center p-6">

        <div className="w-full max-w-sm rounded-2xl bg-ivory/95 p-6 text-center shadow-xl backdrop-blur-sm">

          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-plum/10">

            <MapPin className="text-plum" size={24} />

          </div>

          <h3 className="font-serif text-xl font-light text-espresso">Wysteria Works</h3>

          <p className="mt-2 text-sm leading-relaxed text-espresso/60">{siteConfig.address}</p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">

            <a

              href={siteConfig.directionsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-ivory transition-all hover:bg-plum-600"

            >

              <Navigation size={14} />

              {t.common.directions}

            </a>

            <a

              href={siteConfig.mapsUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-5 py-2.5 text-sm font-medium text-espresso/70 transition-all hover:border-plum hover:text-plum"

            >

              <ExternalLink size={14} />

              {t.common.openMap}

            </a>

          </div>

          <p className="mt-4 text-xs text-espresso/50">{t.visit.days[0]}: {siteConfig.hours[0].time}</p>

        </div>

      </div>

    </div>

  );

}
