import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { I18nProvider } from './i18n';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const UkraineSeoPage = lazy(() => import('./pages/UkraineSeoPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'));
const ImpressumPage = lazy(() => import('./pages/legal/ImpressumPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <I18nProvider>
      <Layout>
        <Suspense fallback={<div className="container suspense-fallback">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ukraine-web-development" element={<UkraineSeoPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/legal/impressum" element={<ImpressumPage />} />

            <Route path="/pages/services.html" element={<Navigate to="/services" replace />} />
            <Route path="/pages/portfolio.html" element={<Navigate to="/portfolio" replace />} />
            <Route path="/pages/about.html" element={<Navigate to="/about" replace />} />
            <Route path="/pages/contact.html" element={<Navigate to="/contact" replace />} />
            <Route path="/pages/ukraine-web-development.html" element={<Navigate to="/ukraine-web-development" replace />} />
            <Route path="/pages/analytics.html" element={<Navigate to="/analytics" replace />} />
            <Route path="/pages/legal/privacy-policy.html" element={<Navigate to="/legal/privacy-policy" replace />} />
            <Route path="/pages/legal/impressum.html" element={<Navigate to="/legal/impressum" replace />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </I18nProvider>
  );
}
