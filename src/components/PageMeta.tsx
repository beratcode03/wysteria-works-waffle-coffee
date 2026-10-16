import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useLanguage } from '@/i18n/useLanguage';

export default function PageMeta() {

  const { pathname } = useLocation();

  const { t } = useLanguage();

  const meta =

    pathname === '/menu'

      ? t.meta.menu

      : pathname === '/about'

        ? t.meta.about

        : pathname === '/contact'

          ? t.meta.contact

          : t.meta.home;

  useEffect(() => {

    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');

    if (!descTag) {

      descTag = document.createElement('meta');

      descTag.setAttribute('name', 'description');

      document.head.appendChild(descTag);

    }

    descTag.setAttribute('content', meta.description);

  }, [meta]);

  return null;

}
