import { useRef, type ReactNode, type MouseEvent } from 'react';

type Props = {

  children: ReactNode;

  strength?: number;

  className?: string;

};

export default function Magnetic({ children, strength = 0.3, className = '' }: Props) {

  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {

    const el = ref.current;

    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = el.getBoundingClientRect();

    const dx = e.clientX - (r.left + r.width / 2);

    const dy = e.clientY - (r.top + r.height / 2);

    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;

  };

  const onLeave = () => {

    const el = ref.current;

    if (el) el.style.transform = 'translate(0, 0)';

  };

  return (

    <div

      ref={ref}

      onMouseMove={onMove}

      onMouseLeave={onLeave}

      className={`magnetic inline-block ${className}`}

    >

      {children}

    </div>

  );

}
