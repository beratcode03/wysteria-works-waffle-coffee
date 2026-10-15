import type Lenis from 'lenis';

let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {

  lenis = instance;

};

export const getLenis = () => lenis;

export const scrollToTop = () => {

  if (lenis) lenis.scrollTo(0, { immediate: true });

  else window.scrollTo(0, 0);

};
