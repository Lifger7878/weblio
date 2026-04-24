import SeoHead from '../../components/SeoHead';
import { useI18n } from '../../i18n';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ImpressumPage() {
  const { t, lang } = useI18n();
  useScrollReveal();
  const im = t.impressum;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: im.title,
        description: t.seo.impressumDesc,
        url: 'https://weblio.dev/legal/impressum',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: im.title, item: 'https://weblio.dev/legal/impressum' },
        ],
      },
    ],
  };

  const sections = [
    { title: im.s1title, text: im.s1text },
    { title: im.s2title, text: im.s2text },
    { title: im.s3title, text: im.s3text },
    { title: im.s4title, text: im.s4text },
    { title: im.s5title, text: im.s5text },
    { title: im.s6title, text: im.s6text },
    { title: im.s7title, text: im.s7text },
  ];

  return (
    <>
      <SeoHead title={t.seo.impressumTitle} description={t.seo.impressumDesc} path="/legal/impressum" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">Legal</p>
          <h1 className="page-hero__title fade-up">{im.title}</h1>
          <p className="page-hero__subtitle fade-up">{im.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
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
