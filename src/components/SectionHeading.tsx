import type { ReactNode } from 'react';

type Props = {

  children: ReactNode;

  className?: string;

};

export default function SectionHeading({ children, className = '' }: Props) {

  return (

    <div className={`mb-12 ${className}`}>

      {children}

    </div>

  );

}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {

  return (

    <span className={`inline-block text-[11px] font-sans font-medium uppercase tracking-wide-3 text-brass-dark ${className}`}>

      {children}

    </span>

  );

}

export function OrnamentalRule({ className = '' }: { className?: string }) {

  return (

    <span className={`inline-flex items-center gap-3 ${className}`}>

      <span className="h-px w-10 bg-brass/40" />

      <span className="block h-1.5 w-1.5 rotate-45 border border-brass/50" />

      <span className="h-px w-10 bg-brass/40" />

    </span>

  );

}
