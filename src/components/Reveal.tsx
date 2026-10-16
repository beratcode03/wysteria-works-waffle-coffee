import type { ReactNode } from 'react';

import { useScrollReveal } from '@/hooks/useScrollReveal';

type Props = {

  children: ReactNode;

  className?: string;

  delay?: 0 | 1 | 2 | 3 | 4;

  as?: 'div' | 'section' | 'article' | 'li';

};

export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {

  const { ref, isVisible } = useScrollReveal();

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  const Tag = as;

  return (

    <Tag

      ref={ref as never}

      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}

    >

      {children}

    </Tag>

  );

}
