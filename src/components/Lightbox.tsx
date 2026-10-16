import { useCallback, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { useLanguage } from '@/i18n/useLanguage';

import { getLenis } from '@/lib/smoothScroll';

type Props = {

  images: { url: string; alt: string; label: string }[];

  index: number | null;

  onClose: () => void;

  onNav: (index: number) => void;

};

export default function Lightbox({ images, index, onClose, onNav }: Props) {

  const { t } = useLanguage();

  const open = index !== null;

  const prev = useCallback(() => {

    if (index !== null) onNav((index - 1 + images.length) % images.length);

  }, [index, images.length, onNav]);

  const next = useCallback(() => {

    if (index !== null) onNav((index + 1) % images.length);

  }, [index, images.length, onNav]);

  useEffect(() => {

    if (!open) return;

    const lenis = getLenis();

    lenis?.stop();

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {

      if (e.key === 'Escape') onClose();

      if (e.key === 'ArrowLeft') prev();

      if (e.key === 'ArrowRight') next();

    };

    window.addEventListener('keydown', onKey);

    return () => {

      window.removeEventListener('keydown', onKey);

      lenis?.start();

      document.body.style.overflow = '';

    };

  }, [open, onClose, prev, next]);

  if (!open) return null;

  const image = images[index];

  return createPortal(

    <div

      className="fixed inset-0 z-[150] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm sm:p-10"

      role="dialog"

      aria-modal="true"

      aria-label={image.label}

      onClick={onClose}

    >

      <button

        onClick={onClose}

        aria-label={t.gallery.closeAria}

        className="absolute right-5 top-5 rounded-full p-2.5 text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"

      >

        <X size={24} />

      </button>

      <button

        onClick={(e) => { e.stopPropagation(); prev(); }}

        aria-label={t.gallery.prevAria}

        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-ivory/60 transition-colors hover:bg-ivory/10 hover:text-ivory sm:left-6"

      >

        <ChevronLeft size={30} />

      </button>

      <button

        onClick={(e) => { e.stopPropagation(); next(); }}

        aria-label={t.gallery.nextAria}

        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-ivory/60 transition-colors hover:bg-ivory/10 hover:text-ivory sm:right-6"

      >

        <ChevronRight size={30} />

      </button>

      <figure

        className="lightbox-enter flex flex-col items-center"

        onClick={(e) => e.stopPropagation()}

      >

        <img

          key={image.url}

          src={image.url}

          alt={image.alt}

          className="max-h-[78vh] max-w-[92vw] rounded-xl object-contain shadow-2xl shadow-black/40 sm:max-w-[80vw]"

        />

        <figcaption className="mt-5 flex items-baseline gap-4">

          <span className="font-serif text-sm italic text-ivory/50">

            {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}

          </span>

          <span className="text-xs font-medium uppercase tracking-wide-2 text-ivory">{image.label}</span>

        </figcaption>

      </figure>

    </div>,

    document.body,

  );

}
