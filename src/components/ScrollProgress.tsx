import { useEffect, useState } from 'react';

export default function ScrollProgress() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);

    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });

    window.addEventListener('resize', updateProgress);

    return () => {

      window.removeEventListener('scroll', updateProgress);

      window.removeEventListener('resize', updateProgress);

    };

  }, []);

  return (

    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent" aria-hidden="true">

      <div

        className="h-full origin-left scale-x-0 bg-brass will-change-transform"

        style={{ transform: `scaleX(${progress / 100})` }}

      />

    </div>

  );

}
