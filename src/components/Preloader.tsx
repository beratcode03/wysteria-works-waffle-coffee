import { useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { siteConfig } from '@/data/site';

export default function Preloader() {

  const [gone, setGone] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  const topRef = useRef<HTMLDivElement>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {

      if (reduced) {

        gsap.to(rootRef.current, {

          opacity: 0,

          duration: 0.3,

          delay: 0.4,

          onComplete: () => setGone(true),

        });

        return;

      }

      gsap

        .timeline({

          defaults: { ease: 'power3.out' },

          onComplete: () => setGone(true),

        })

        .fromTo(

          logoRef.current,

          { scale: 0.8, opacity: 0, y: 8 },

          { scale: 1, opacity: 1, y: 0, duration: 0.5 },

          0.1,

        )

        .to(logoRef.current, { scale: 1.15, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0.95)

        .to(topRef.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, 1.15)

        .to(bottomRef.current, { yPercent: 100, duration: 0.8, ease: 'power4.inOut' }, 1.15);

    }, rootRef);

    return () => ctx.revert();

  }, []);

  if (gone) return null;

  return (

    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">

      <div ref={topRef} className="absolute left-0 top-0 h-[50vh] w-full bg-[#2B1810]" />

      <div ref={bottomRef} className="absolute bottom-0 left-0 h-[50vh] w-full bg-[#2B1810]" />

      {}

      <div className="absolute inset-0 flex items-center justify-center">

        <div ref={logoRef} className="flex flex-col items-center gap-3">

          <span className="font-serif text-7xl font-medium italic leading-none text-ivory sm:text-8xl">

            W

          </span>

          <span className="text-[10px] uppercase tracking-wide-3 text-ivory/40">

            {siteConfig.name}

          </span>

        </div>

      </div>

    </div>

  );

}
