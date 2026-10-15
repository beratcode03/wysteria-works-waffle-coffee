import { createContext, useContext } from 'react';

import { tr } from './tr';

import type { Messages } from './tr';

export type Lang = 'tr' | 'en';

export type LanguageContextValue = {

  lang: Lang;

  setLang: (lang: Lang) => void;

  t: Messages;

};

export const LanguageContext = createContext<LanguageContextValue>({

  lang: 'tr',

  setLang: () => {},

  t: tr,

});

export const useLanguage = () => useContext(LanguageContext);
