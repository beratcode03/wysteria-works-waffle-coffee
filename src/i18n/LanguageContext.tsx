import { useEffect, useMemo, useState } from 'react';

import type { ReactNode } from 'react';

import { tr } from './tr';

import { en } from './en';

import { LanguageContext } from './useLanguage';

import type { Lang } from './useLanguage';

export function LanguageProvider({ children }: { children: ReactNode }) {

  const [lang, setLangState] = useState<Lang>(() => {

    const saved = localStorage.getItem('wysteria-lang');

    return saved === 'en' || saved === 'tr' ? saved : 'tr';

  });

  const setLang = (next: Lang) => {

    setLangState(next);

    localStorage.setItem('wysteria-lang', next);

  };

  useEffect(() => {

    document.documentElement.lang = lang;

  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: lang === 'en' ? en : tr }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;

}
