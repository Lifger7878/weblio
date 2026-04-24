import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <SeoHead title={`404 - Weblio`} description={t.common.notFoundText} noindex />
      <div className="container">
        <div className="section__header">
          <h1 className="section__title">404 - {t.common.notFoundTitle}</h1>
          <p className="section__subtitle">{t.common.notFoundText}</p>
        </div>
        <Link to="/" className="btn btn--primary">{t.common.backHome}</Link>
      </div>
    </section>
  );
}
