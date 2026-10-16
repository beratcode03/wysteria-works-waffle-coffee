import { MessageCircle } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

export default function WhatsAppButton() {

  const { t } = useLanguage();

  const message = encodeURIComponent(t.common.whatsappMessage);

  const phoneDigits = siteConfig.phone.replace(/\D/g, '');

  const href = `https://wa.me/${phoneDigits}?text=${message}`;

  return (

    <a

      href={href}

      target="_blank"

      rel="noopener noreferrer"

      aria-label={t.common.whatsappAria}

      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-espresso shadow-lg shadow-espresso/20 transition-all duration-300 hover:bg-[#25D366] hover:shadow-xl"

    >

      <MessageCircle size={22} className="text-ivory transition-colors group-hover:text-white" />

      {}

      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-espresso px-3 py-1.5 text-xs font-medium text-ivory opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">

        {t.common.whatsappTooltip}

      </span>

    </a>

  );

}
