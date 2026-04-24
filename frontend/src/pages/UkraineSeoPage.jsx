import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';

export default function UkraineSeoPage() {
  const { t, lang } = useI18n();

  const content = lang === 'uk'
    ? {
      eyebrow: 'Ukraine SEO',
      title: 'Локальне SEO для українських міст',
      subtitle: 'Розвиваю органічний трафік через регіональні сторінки і точну структуру під пошуковий намір.',
      cards: [
        {
          title: 'Київ і центр',
          desc: 'Пріоритетні сторінки для висококонкурентних запитів та комерційних кластерів.',
          cities: ['Kyiv', 'Vinnytsia', 'Cherkasy'],
        },
        {
          title: 'Захід України',
          desc: 'Локальні посадкові сторінки для сервісів, туризму та b2b-компаній.',
          cities: ['Lviv', 'Ivano-Frankivsk', 'Ternopil'],
        },
        {
          title: 'Південь',
          desc: 'Контентні та сервісні сторінки для міст з сезонним або змішаним попитом.',
          cities: ['Odesa', 'Mykolaiv', 'Kherson'],
        },
        {
          title: 'Схід України',
          desc: 'Семантичні кластери та сторінки для B2B і локальних сервісних запитів.',
          cities: ['Kharkiv', 'Dnipro', 'Zaporizhzhia'],
        },
      ],
      processTitle: 'Як будується локальне SEO',
      processSubtitle: 'Не просто додавання міст, а цілісна структура для стабільного росту.',
      steps: [
        { title: 'Семантика', desc: 'Збираю запити по регіонах, визначаю комерційні та інформаційні кластери.' },
        { title: 'Архітектура сторінок', desc: 'Проектую URL-структуру, внутрішню перелінковку і унікальні блоки контенту.' },
        { title: 'Технічна оптимізація', desc: 'Опрацьовую мета-дані, індексацію, швидкість і schema-розмітку.' },
        { title: 'Моніторинг та ітерації', desc: 'Аналізую позиції, поведінку користувачів і посилюю найперспективніші сторінки.' },
      ],
      ctaTitle: 'Потрібне локальне SEO під ваш регіон?',
      ctaSubtitle: 'Підготую карту сторінок і контент-план під ваші послуги.',
      ctaPrimary: 'Обговорити SEO',
    }
    : {
      eyebrow: 'Ukraine SEO',
      title: 'Local SEO for Ukrainian cities',
      subtitle: 'I scale organic traffic through city-focused landing pages and intent-driven site structure.',
      cards: [
        {
          title: 'Kyiv and central region',
          desc: 'Priority pages for high-competition queries and commercial clusters.',
          cities: ['Kyiv', 'Vinnytsia', 'Cherkasy'],
        },
        {
          title: 'Western Ukraine',
          desc: 'Local pages for service businesses, tourism, and B2B companies.',
          cities: ['Lviv', 'Ivano-Frankivsk', 'Ternopil'],
        },
        {
          title: 'South',
          desc: 'Service and content pages for cities with seasonal and mixed demand patterns.',
          cities: ['Odesa', 'Mykolaiv', 'Kherson'],
        },
        {
          title: 'Eastern Ukraine',
          desc: 'Semantic clusters and local pages for B2B and regional service intent.',
          cities: ['Kharkiv', 'Dnipro', 'Zaporizhzhia'],
        },
      ],
      processTitle: 'How local SEO is delivered',
      processSubtitle: 'Not just city mentions, but a complete architecture for long-term growth.',
      steps: [
        { title: 'Keyword mapping', desc: 'Collect regional query clusters and classify by user intent.' },
        { title: 'Page architecture', desc: 'Design URL structure, internal linking, and unique regional content blocks.' },
        { title: 'Technical SEO', desc: 'Implement metadata, indexing signals, speed optimisation, and schema.' },
        { title: 'Monitoring and iteration', desc: 'Track rankings and behaviour metrics, then improve top-opportunity pages.' },
      ],
      ctaTitle: 'Need local SEO for your city targets?',
      ctaSubtitle: 'I can prepare a city page map and content plan for your services.',
      ctaPrimary: 'Discuss SEO strategy',
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: content.title,
        description: content.subtitle,
        url: 'https://weblio.dev/ukraine-web-development',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'Service',
        name: lang === 'uk' ? 'Локальне SEO по Україні' : 'Local SEO across Ukraine',
        provider: {
          '@type': 'Organization',
          name: 'Weblio',
          url: 'https://weblio.dev',
        },
        areaServed: content.cards.flatMap((card) => card.cities),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: 'https://weblio.dev/ukraine-web-development' },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead title={t.seo.ukraineTitle} description={t.seo.ukraineDesc} path="/ukraine-web-development" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">{content.eyebrow}</p>
          <h1 className="page-hero__title fade-up">{content.title}</h1>
          <p className="page-hero__subtitle fade-up">{content.subtitle}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="location-grid">
            {content.cards.map((card) => (
              <article className="location-card fade-up" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="city-tags">
                  {card.cities.map((city) => <span key={city}>{city}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-up">
            <h2 className="section__title">{content.processTitle}</h2>
            <p className="section__subtitle">{content.processSubtitle}</p>
          </div>
          <div className="process-grid">
            {content.steps.map((step, index) => (
              <article className="process-step fade-up" key={step.title}>
                <div className="process-step__num">0{index + 1}</div>
                <div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-wrap fade-up">
            <Link to="/contact" className="btn btn--primary btn--lg">{content.ctaPrimary}</Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container fade-up">
          <h2 className="cta-banner__title">{content.ctaTitle}</h2>
          <p className="cta-banner__subtitle">{content.ctaSubtitle}</p>
        </div>
      </section>
    </>
  );
}
