import { useState } from 'react';
import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';

const initial = {
  first_name: '',
  last_name: '',
  email: '',
  country: '',
  service: '',
  message: '',
  gdpr: false,
};

export default function ContactPage() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const content = lang === 'uk'
    ? {
      eyebrow: 'Контакти',
      title: 'Обговорімо ваш проєкт',
      subtitle: 'Заповніть форму і отримаєте відповідь із наступними кроками та орієнтовним планом робіт.',
      infoTitle: 'Зручні канали для звʼязку',
      infoText: 'Працюю з українськими та європейськими клієнтами. Відповідаю швидко і по суті.',
      labelEmail: 'Email',
      labelRegion: 'Регіон роботи',
      labelTime: 'Графік',
      valueRegion: 'Україна, Польща, Німеччина, Нідерланди',
      valueTime: 'Пн-Пт, 09:00-19:00 (EET/CET)',
      formTitle: 'Розкажіть про задачу',
      serviceLabel: 'Тип послуги',
      note: 'Надсилаючи форму, ви погоджуєтесь із політикою конфіденційності та умовами обробки даних.',
      services: ['Landing Page', 'Сайт-візитка', 'Сайт-каталог', 'Корпоративний сайт', 'Інтернет-магазин', 'Готельний/ресторанний софт', 'Інше'],
    }
    : {
      eyebrow: 'Contact',
      title: 'Let us discuss your project',
      subtitle: 'Complete the form to get a response with next steps and a practical delivery outline.',
      infoTitle: 'Best ways to reach out',
      infoText: 'I work with Ukrainian and European clients and respond quickly with clear feedback.',
      labelEmail: 'Email',
      labelRegion: 'Service region',
      labelTime: 'Working hours',
      valueRegion: 'Ukraine, Poland, Germany, Netherlands',
      valueTime: 'Mon-Fri, 09:00-19:00 (EET/CET)',
      formTitle: 'Share your requirements',
      serviceLabel: 'Service type',
      note: 'By submitting this form, you agree to the privacy policy and personal data processing terms.',
      services: ['Landing Page', 'Business card site', 'Catalogue site', 'Corporate website', 'Online store', 'Hotel & restaurant software', 'Other'],
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: content.title,
        description: content.subtitle,
        url: 'https://weblio.dev/contact',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'Organization',
        name: 'Weblio',
        url: 'https://weblio.dev',
        email: 'hello@weblio.dev',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@weblio.dev',
          contactType: 'sales',
          availableLanguage: ['uk', 'en'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: 'https://weblio.dev/contact' },
        ],
      },
    ],
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.first_name,
          lastName: form.last_name,
          email: form.email,
          country: form.country,
          service: form.service,
          message: form.message,
          gdprConsent: form.gdpr,
          language: localStorage.getItem('weblio_lang') || 'uk',
          page: '/contact',
        }),
      });

      if (!res.ok) throw new Error('submit_failed');
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
      setError(t.contact.error);
    }
  };

  return (
    <>
      <SeoHead title={t.seo.contactTitle} description={t.seo.contactDesc} path="/contact" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">{content.eyebrow}</p>
          <h1 className="page-hero__title fade-up">{content.title}</h1>
          <p className="page-hero__subtitle fade-up">{content.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-info slide-left">
            <h2 className="contact-info__title">{content.infoTitle}</h2>
            <p className="contact-info__text">{content.infoText}</p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 6h16v12H4z" /><path d="m4 8 8 6 8-6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">{content.labelEmail}</div>
                  <div className="contact-item__value">hello@weblio.dev</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">{content.labelTime}</div>
                  <div className="contact-item__value">{content.valueTime}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item__label">{content.labelRegion}</div>
                  <div className="contact-item__value">{content.valueRegion}</div>
                </div>
              </div>
            </div>
          </aside>

          <form className="form slide-right" onSubmit={submit}>
            <h2 className="form__title">{content.formTitle}</h2>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="first_name">{t.contact.firstName}</label>
                <input id="first_name" className="form__input" placeholder={t.contact.firstName} required value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="last_name">{t.contact.lastName}</label>
                <input id="last_name" className="form__input" placeholder={t.contact.lastName} required value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
              </div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="email">{t.contact.email}</label>
                <input id="email" className="form__input" type="email" placeholder={t.contact.email} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="country">{t.contact.country}</label>
                <input id="country" className="form__input" placeholder={t.contact.country} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
              </div>
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="service">{content.serviceLabel}</label>
              <select id="service" className="form__select" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">{content.serviceLabel}</option>
                {content.services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="message">{t.contact.message}</label>
              <textarea id="message" className="form__textarea" placeholder={t.contact.message} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>

            <div className="form__checkbox-wrap">
              <input className="form__checkbox" type="checkbox" required checked={form.gdpr} onChange={(e) => setForm({ ...form, gdpr: e.target.checked })} />
              <label className="form__checkbox-label">
                {t.contact.gdpr} <Link to="/legal/privacy-policy">{t.legal.privacy}</Link>.
              </label>
            </div>

            <button className="btn btn--primary btn--full" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? t.contact.sending : t.contact.submit}
            </button>

            {status === 'success' && <p className="form__success is-visible-message">{t.contact.success}</p>}
            {status === 'error' && <p className="form__error is-visible-message">{error}</p>}
            <p className="form__note">{content.note}</p>
          </form>
        </div>
      </section>
    </>
  );
}
