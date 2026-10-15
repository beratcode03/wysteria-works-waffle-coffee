import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { LanguageProvider } from '@/i18n/LanguageContext';

import { useLanguage } from '@/i18n/useLanguage';

import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

import ScrollToTop from '@/components/ScrollToTop';

import ScrollProgress from '@/components/ScrollProgress';

import SmoothScroll from '@/components/SmoothScroll';

import PageMeta from '@/components/PageMeta';

import Preloader from '@/components/Preloader';

import WhatsAppButton from '@/components/WhatsAppButton';

import HomePage from '@/pages/HomePage';

import MenuPage from '@/pages/MenuPage';

import AboutPage from '@/pages/AboutPage';

import ContactPage from '@/pages/ContactPage';

import NotFoundPage from '@/pages/NotFoundPage';

function SkipLink() {

  const { t } = useLanguage();

  return (

    <a

      href="#main-content"

      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"

    >

      {t.common.skipToContent}

    </a>

  );

}

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <main id="main-content" key={location.pathname} className="page-enter">

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/menu" element={<MenuPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </main>

  );

}

export default function App() {

  return (

    <LanguageProvider>

      <BrowserRouter>

        <PageMeta />

        <SmoothScroll />

        <Preloader />

        <ScrollProgress />

        <ScrollToTop />

        <SkipLink />

        <Navbar />

        <AnimatedRoutes />

        <Footer />

        <WhatsAppButton />

      </BrowserRouter>

    </LanguageProvider>

  );

}
