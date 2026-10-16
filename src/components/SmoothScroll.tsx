import { useEffect } from 'react';

import Lenis from 'lenis';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { setLenis } from '@/lib/smoothScroll';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {

  useEffect(() => {

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({

      duration: 1.15,

      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,

    });

    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);

    gsap.ticker.add(tick);

    gsap.ticker.lagSmoothing(0);

    return () => {

      gsap.ticker.remove(tick);

      lenis.destroy();

      setLenis(null);

    };

  }, []);

  return null;

}
