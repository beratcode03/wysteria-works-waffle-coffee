import type { ImgHTMLAttributes } from 'react';

import { useState } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {

  aspect?: string;

  objectPosition?: string;

};

export default function SmartImage({

  src,

  alt,

  className = '',

  aspect = 'aspect-[4/5]',

  objectPosition = 'center',

  loading = 'lazy',

  ...rest

}: Props) {

  const [loaded, setLoaded] = useState(false);

  const [error, setError] = useState(false);

  return (

    <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>

      {!loaded && !error && (

        <div className="absolute inset-0 animate-pulse bg-mauve/20" />

      )}

      {error ? (

        <div className="absolute inset-0 flex items-center justify-center bg-mauve/15 text-mauve-dark text-sm">

          Görsel yüklenemedi

        </div>

      ) : (

        <img

          src={src}

          alt={alt}

          loading={loading}

          decoding="async"

          onLoad={() => setLoaded(true)}

          onError={() => setError(true)}

          style={objectPosition !== 'center' ? { objectPosition } : undefined}

          className={`h-full w-full object-cover sepia-[0.14] saturate-[0.9] contrast-[1.03] transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}

          {...rest}

        />

      )}

    </div>

  );

}
