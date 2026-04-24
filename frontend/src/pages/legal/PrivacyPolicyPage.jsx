import SeoHead from '../../components/SeoHead';
import { useI18n } from '../../i18n';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function PrivacyPolicyPage() {
  const { t, lang } = useI18n();
  useScrollReveal();
  const p = t.privacy;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: p.title,
        description: t.seo.privacyDesc,
        url: 'https://weblio.dev/legal/privacy-policy',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: p.title, item: 'https://weblio.dev/legal/privacy-policy' },
        ],
      },
    ],
  };

  const sections = [
    { title: p.s1title, text: p.s1text },
    { title: p.s2title, text: p.s2text },
    { title: p.s3title, text: p.s3text },
    { title: p.s4title, text: p.s4text },
    { title: p.s5title, text: p.s5text },
    { title: p.s6title, text: p.s6text },
    { title: p.s7title, text: p.s7text },
    { title: p.s8title, text: p.s8text },
    { title: p.s9title, text: p.s9text },
  ];

  return (
    <>
      <SeoHead title={t.seo.privacyTitle} description={t.seo.privacyDesc} path="/legal/privacy-policy" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">Legal</p>
          <h1 className="page-hero__title fade-up">{p.title}</h1>
          <p className="page-hero__subtitle fade-up">{p.updated}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          {p.intro && <p className="legal-intro reveal reveal--up">{p.intro}</p>}
          {sections.map((s, i) => (
            <div key={i} className="reveal reveal--up">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
