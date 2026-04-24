import { useState } from 'react';
import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';

export default function AnalyticsPage() {
  const { t } = useI18n();
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setError('');
    setData(null);
    try {
      const res = await fetch(`/api/analytics/summary?token=${encodeURIComponent(token)}`);
      if (!res.ok) throw new Error('unauthorized');
      setData(await res.json());
    } catch {
      setError(t.analytics.accessError);
    }
  };

  return (
    <section className="section">
      <SeoHead title={t.seo.analyticsTitle} description={t.seo.analyticsDesc} path="/analytics" noindex />
      <div className="container">
        <h1 className="section__title">{t.analytics.title}</h1>
        <div className="analytics-controls">
          <input className="form__input" placeholder="ANALYTICS_TOKEN" value={token} onChange={(e) => setToken(e.target.value)} />
          <button className="btn btn--primary" onClick={load}>{t.analytics.load}</button>
        </div>
        {error && <p className="form__error" style={{ display: 'block' }}>{error}</p>}
        {data && (
          <pre className="analytics-output">{JSON.stringify(data.metrics, null, 2)}</pre>
        )}
      </div>
    </section>
  );
}
