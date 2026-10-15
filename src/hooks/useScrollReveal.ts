import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {

  const ref = useRef<T>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true);

          observer.unobserve(entry.target);

        }

      },

      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }

    );

    observer.observe(el);

    return () => observer.disconnect();

  }, []);

  return { ref, isVisible };

}

export function useScrollPosition() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handler = () => setScrolled(window.scrollY > 30);

    handler();

    window.addEventListener('scroll', handler, { passive: true });

    return () => window.removeEventListener('scroll', handler);

  }, []);

  return scrolled;

}

export function useParallax(strength = 0.08) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {

      frame = 0;

      const el = ref.current;

      if (!el) return;

      const r = el.getBoundingClientRect();

      const mid = r.top + r.height / 2 - window.innerHeight / 2;

      el.style.transform = `translate3d(0, ${(-mid * strength).toFixed(1)}px, 0)`;

    };

    const onScroll = () => {

      if (!frame) frame = requestAnimationFrame(update);

    };

    update();

    window.addEventListener('scroll', onScroll, { passive: true });

    window.addEventListener('resize', onScroll);

    return () => {

      window.removeEventListener('scroll', onScroll);

      window.removeEventListener('resize', onScroll);

      if (frame) cancelAnimationFrame(frame);

    };

  }, [strength]);

  return ref;

}

export function useHeaderHidden() {

  const [hidden, setHidden] = useState(false);

  useEffect(() => {

    let lastY = window.scrollY;

    let ticking = false;

    const handler = () => {

      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {

        const y = window.scrollY;

        const dy = y - lastY;

        if (dy > 6 && y > 140) setHidden(true);

        else if (dy < -6) setHidden(false);

        lastY = y;

        ticking = false;

      });

    };

    window.addEventListener('scroll', handler, { passive: true });

    return () => window.removeEventListener('scroll', handler);

  }, []);

  return hidden;

}
