import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLanguage } from '@/i18n/useLanguage';

gsap.registerPlugin(ScrollTrigger);

const PIECES = [

  { cls: 'waffle-piece-sprinkle', start: [-205, -84], end: [-295, -152], r: -18, s: 0.9 },

  { cls: 'waffle-piece-strawberry', start: [0, -164], end: [0, -269], r: 6, s: 0.95 },

  { cls: 'waffle-piece-chocolate', start: [205, -84], end: [303, -144], r: 22, s: 0.9 },

  { cls: 'waffle-piece-cookie', start: [-214, 92], end: [-319, 175], r: -25, s: 0.85 },

  { cls: 'waffle-piece-fruit', start: [214, 92], end: [304, 190], r: 15, s: 0.9 },

] as const;

const BEANS = [

  { x: -150, y: -185, drift: 110, blur: 'blur-[1.5px]', size: 'h-6 w-4', rot: 35 },

  { x: 175, y: 195, drift: -130, blur: 'blur-0', size: 'h-7 w-5', rot: -40 },

  { x: -268, y: 30, drift: 150, blur: 'blur-[2px]', size: 'h-5 w-3.5', rot: 70 },

  { x: 252, y: -185, drift: -95, blur: 'blur-[1px]', size: 'h-6 w-4', rot: -20 },

  { x: 60, y: 228, drift: 130, blur: 'blur-[1.5px]', size: 'h-5 w-3.5', rot: 55 },

  { x: -95, y: 205, drift: -140, blur: 'blur-0', size: 'h-8 w-5', rot: -65 },

] as const;

const BASE_SCALE = 0.42;

export default function WaffleRitual() {

  const { t } = useLanguage();

  const wrapRef = useRef<HTMLElement>(null);

  const stageRef = useRef<HTMLDivElement>(null);

  const markRef = useRef<HTMLSpanElement>(null);

  const ringRef = useRef<HTMLDivElement>(null);

  const revealRef = useRef<HTMLDivElement>(null);

  const anchorRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const spriteRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const beanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      mm.add('(min-width: 768px)', () => {

        const anchors = anchorRefs.current.filter(Boolean) as HTMLSpanElement[];

        const sprites = spriteRefs.current.filter(Boolean) as HTMLSpanElement[];

        const beans = beanRefs.current.filter(Boolean) as HTMLSpanElement[];

        anchors.forEach((a, i) => {

          gsap.set(a, {

            x: PIECES[i].start[0],

            y: PIECES[i].start[1],

            rotation: 0,

            scale: BASE_SCALE,

          });

        });

        beans.forEach((b, i) => {

          gsap.set(b, { x: BEANS[i].x, y: BEANS[i].y, rotation: BEANS[i].rot });

        });

        gsap.set(revealRef.current, { xPercent: -50, yPercent: -50, opacity: 0, y: 26, scale: 0.96 });

        if (reduced) return;

        const tl = gsap.timeline({

          defaults: { ease: 'none' },

          scrollTrigger: {

            trigger: wrapRef.current,

            start: 'top top',

            end: '+=120%',

            scrub: 0.6,

            pin: true,

            anticipatePin: 1,

          },

        });

        anchors.forEach((a, i) => {

          const p = PIECES[i];

          tl.to(

            a,

            {

              x: p.end[0],

              y: p.end[1],

              rotation: p.r,

              scale: BASE_SCALE * p.s * 1.05,

              ease: 'power1.inOut',

            },

            0,

          );

          tl.to(

            sprites[i],

            {

              filter: 'drop-shadow(0 32px 32px rgb(45 20 10 / 0.26))',

              ease: 'power1.inOut',

            },

            0,

          );

        });

        beans.forEach((b, i) => {

          tl.to(

            b,

            {

              y: BEANS[i].y + BEANS[i].drift,

              rotation: BEANS[i].rot + (BEANS[i].drift > 0 ? 40 : -40),

              ease: 'power1.inOut',

            },

            0,

          );

        });

        tl.to(ringRef.current, { rotation: 85, ease: 'none' }, 0);

        tl.to(markRef.current, { scale: 1.1, opacity: 0, filter: 'blur(6px)', ease: 'power1.in' }, 0.05)

          .to('.waffle-ritual-line', { opacity: 0, scaleX: 0.3 }, 0.05)

          .to(revealRef.current, { opacity: 1, y: 0, scale: 1, ease: 'power2.out' }, 0.55);

        const stage = stageRef.current;

        const wrap = wrapRef.current;

        if (stage && wrap) {

          const qx = gsap.quickTo(stage, 'rotationX', { duration: 0.9, ease: 'power3.out' });

          const qy = gsap.quickTo(stage, 'rotationY', { duration: 0.9, ease: 'power3.out' });

          const onTilt = (e: MouseEvent) => {

            const r = wrap.getBoundingClientRect();

            qy(((e.clientX - r.left) / r.width - 0.5) * 9);

            qx(-((e.clientY - r.top) / r.height - 0.5) * 6);

          };

          const onOut = () => {

            qx(0);

            qy(0);

          };

          wrap.addEventListener('mousemove', onTilt);

          wrap.addEventListener('mouseleave', onOut);

          return () => {

            wrap.removeEventListener('mousemove', onTilt);

            wrap.removeEventListener('mouseleave', onOut);

          };

        }

      });

      mm.add('(max-width: 767px)', () => {

        const anchors = anchorRefs.current.filter(Boolean) as HTMLSpanElement[];

        const beans = beanRefs.current.filter(Boolean) as HTMLSpanElement[];

        anchors.forEach((a, i) => {

          gsap.set(a, {

            x: PIECES[i].start[0] * 0.55,

            y: PIECES[i].start[1] * 0.55,

            scale: BASE_SCALE * 0.62,

          });

        });

        beans.forEach((b, i) => {

          gsap.set(b, { x: BEANS[i].x * 0.55, y: BEANS[i].y * 0.55, rotation: BEANS[i].rot });

        });

        gsap.set(revealRef.current, { xPercent: -50, yPercent: -50, opacity: 1, y: 0, scale: 1 });

        gsap.set(markRef.current, { opacity: 0 });

        gsap.set('.waffle-ritual-line', { opacity: 0 });

      });

    }, wrapRef);

    return () => ctx.revert();

  }, []);

  return (

    <section

      ref={wrapRef}

      className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-ivory-200/60"

      style={{ perspective: '1100px' }}

      aria-label="Wysteria tatlı bir mola"

    >

      <div ref={stageRef} className="waffle-ritual" style={{ transformStyle: 'preserve-3d' }}>

        {}

        <span

          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[24rem] font-medium italic leading-none tracking-tighter text-[#2B1810] opacity-[0.03]"

          aria-hidden="true"

        >

          CRAFT

        </span>

        {}

        <div

          ref={ringRef}

          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 md:h-[560px] md:w-[560px]"

          aria-hidden="true"

        >

          <svg viewBox="0 0 560 560" className="h-full w-full overflow-visible">

            <defs>

              <path

                id="ritual-orbit"

                d="M 280,280 m -252,0 a 252,252 0 1,1 504,0 a 252,252 0 1,1 -504,0"

              />

            </defs>

            <circle

              cx="280"

              cy="280"

              r="252"

              fill="none"

              stroke="#2B1810"

              strokeWidth="1"

              strokeDasharray="3 9"

              opacity="0.18"

            />

            <circle

              cx="280"

              cy="280"

              r="196"

              fill="none"

              stroke="#2B1810"

              strokeWidth="0.75"

              opacity="0.07"

            />

            <text

              fontSize="12.5"

              letterSpacing="5"

              fill="#5A3E2B"

              opacity="0.5"

              style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}

            >

              <textPath href="#ritual-orbit" startOffset="0%">

                {`${t.signature.ritualBadge}${t.signature.ritualBadge}`}

              </textPath>

            </text>

          </svg>

        </div>

        <span className="waffle-ritual-line waffle-ritual-line-left" aria-hidden="true" />

        <div className="waffle-ritual-center">

          <span ref={markRef} className="waffle-ritual-word block will-change-transform">

            Wysteria

          </span>

        </div>

        <span className="waffle-ritual-line waffle-ritual-line-right" aria-hidden="true" />

        {PIECES.map((piece, i) => (

          <span

            key={piece.cls}

            ref={(el) => {

              anchorRefs.current[i] = el;

            }}

            className="waffle-piece-anchor"

            aria-hidden="true"

          >

            {}

            <span className="waffle-float" style={{ animationDelay: `${i * -1.4}s` }}>

              <span

                ref={(el) => {

                  spriteRefs.current[i] = el;

                }}

                className={`waffle-piece ${piece.cls}`}

              />

            </span>

          </span>

        ))}

        {}

        {BEANS.map((bean, i) => (

          <span

            key={i}

            ref={(el) => {

              beanRefs.current[i] = el;

            }}

            className="waffle-piece-anchor z-[6]"

            aria-hidden="true"

          >

            <span className={`waffle-bean block ${bean.size} ${bean.blur}`} />

          </span>

        ))}

        {}

        <div

          ref={revealRef}

          className="pointer-events-none absolute left-1/2 top-1/2 z-[9] flex w-full max-w-3xl flex-col items-center text-center"

        >

          <h2 className="text-balance font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-espresso">

            {t.signature.title1}{' '}

            <span className="italic text-brass-dark">{t.signature.title2}</span>

          </h2>

          <p className="mt-5 max-w-md text-[11px] font-medium uppercase tracking-wide-3 text-espresso/50">

            {t.signature.ritualSub}

          </p>

          <Link

            to="/menu"

            className="group pointer-events-auto mt-7 inline-flex items-center gap-2.5 rounded-full bg-plum px-6 py-3 text-xs font-medium uppercase tracking-wide-2 text-ivory shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum-600 hover:shadow-lg"

          >

            {t.signature.ritualCta}

            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />

          </Link>

        </div>

      </div>

    </section>

  );

}
