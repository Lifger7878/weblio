import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesPage() {
  const { t, lang } = useI18n();
  useScrollReveal();

  const content = lang === 'uk'
    ? {
      eyebrow: 'Послуги',
      title: 'Послуги веб-розробки для бізнесу',
      subtitle: 'Комплексний підхід: стратегія, дизайн, розробка, SEO та підтримка після запуску.',
      processTitle: 'Що входить у роботу',
      processSubtitle: 'Кожен етап підпорядкований головній меті: стабільний ріст заявок і продажів.',
      process: [
        { title: 'Дослідження ринку', desc: 'Аналіз ніші, конкурентів, запитів і поведінки цільової аудиторії.' },
        { title: 'UX і структура', desc: 'Сценарії користувача, логіка блоків, структура контенту та навігації.' },
        { title: 'Розробка', desc: 'Верстка, інтеграції, форми, аналітика, оптимізація швидкості та стабільності.' },
        { title: 'SEO і масштабування', desc: 'Технічне SEO, локальні сторінки, покроковий план розвитку сайту.' },
      ],
      cards: [
        {
          logo: 'WS',
          title: 'Landing Page',
          meta: '1 сторінка | від $500 | 2-5 днів',
          list: ['Конверсійна структура та унікальний дизайн', 'Повна адаптивність для мобільних пристроїв', 'Форма заявки, домен, базове SEO'],
        },
        {
          logo: 'WS',
          title: 'Сайт-візитка',
          meta: '2-4 сторінки | від $750 | 3-10 днів',
          list: ['Чітка структура для довіри до бренду', 'Повна адаптивність на всіх пристроях', 'Форми, підключення домену, базове SEO'],
        },
        {
          logo: 'WS',
          title: 'Сайт-каталог',
          meta: 'Від 4 сторінок | від $950 | 7-21 день',
          list: ['Масштабована структура категорій і товарів', 'Mobile-first адаптивна верстка', 'Форми, домен, SEO-основа'],
        },
        {
          logo: 'WS',
          title: 'Корпоративний сайт',
          meta: 'Від 4 сторінок | від $1050 | 7-21 день',
          list: ['Індивідуальний дизайн під бренд', 'Адаптивний і оптимізований по швидкості сайт', 'Форми, домен, SEO-основа'],
        },
        {
          logo: 'WS',
          title: 'Інтернет-магазин',
          meta: 'Від 6 сторінок | від $1750 | 7-25 днів',
          list: ['Каталог товарів і сторінки продуктів', 'Зручний mobile-first інтерфейс', 'SEO, інтеграції, фільтри та сортування'],
        },
        {
          logo: 'HB',
          title: 'Софт для готелів та ресторанів',
          meta: 'Від $2400 | 14-35 днів',
          list: ['Календар бронювань з доступністю номерів/столів', 'Онлайн-бронювання клієнтом з нагадуваннями', 'Персональний сайт бронювання та адмін-панель'],
        },
      ],
      ctaTitle: 'Хочете сайт, який реально працює на бізнес?',
      ctaSubtitle: 'Опишіть задачу і отримаєте дорожню карту з етапами та пріоритетами.',
      ctaPrimary: 'Обговорити задачу',
      ctaSecondary: 'Дивитися кейси',
    }
    : {
      eyebrow: 'Services',
      title: 'Web Development Services for Business',
      subtitle: 'End-to-end delivery: strategy, design, development, SEO, and post-launch support.',
      processTitle: 'How delivery works',
      processSubtitle: 'Every stage is focused on one outcome: consistent growth in leads and sales.',
      process: [
        { title: 'Market research', desc: 'Niche analysis, competitor review, search demand, and user intent mapping.' },
        { title: 'UX and structure', desc: 'User flows, block logic, content hierarchy, and navigation design.' },
        { title: 'Implementation', desc: 'Frontend delivery, integrations, forms, analytics, speed, and reliability.' },
        { title: 'SEO and scaling', desc: 'Technical SEO, local landing pages, and iterative growth roadmap.' },
      ],
      cards: [
        {
          logo: 'WS',
          title: 'Landing Page',
          meta: '1 page | from $500 | 2-5 days',
          list: ['Conversion structure and unique design', 'Full responsiveness for mobile devices', 'Enquiry form, domain, and basic SEO'],
        },
        {
          logo: 'WS',
          title: 'Business card site',
          meta: '2-4 pages | from $750 | 3-10 days',
          list: ['Clear structure for brand trust', 'Full responsiveness on all devices', 'Forms, domain connection, and basic SEO'],
        },
        {
          logo: 'WS',
          title: 'Catalogue site',
          meta: 'From 4 pages | from $950 | 7-21 days',
          list: ['Scalable category and product structure', 'Mobile-first adaptive layout', 'Forms, domain, and SEO foundation'],
        },
        {
          logo: 'WS',
          title: 'Corporate website',
          meta: 'From 4 pages | from $1,050 | 7-21 days',
          list: ['Custom brand design', 'Adaptive and speed-optimised site', 'Forms, domain, and SEO foundation'],
        },
        {
          logo: 'WS',
          title: 'Online store',
          meta: 'From 6 pages | from $1,750 | 7-25 days',
          list: ['Product catalogue and product pages', 'Convenient mobile-first interface', 'SEO, integrations, filtering and sorting'],
        },
        {
          logo: 'HB',
          title: 'Hotel and restaurant software',
          meta: 'From $2,400 | 14-35 days',
          list: ['Booking calendar with room/table availability', 'Online customer booking with reminders', 'Custom booking site and admin panel'],
        },
      ],
      ctaTitle: 'Need a website that drives results?',
      ctaSubtitle: 'Share your goals and get a practical roadmap with priorities and timeline.',
      ctaPrimary: 'Discuss your goals',
      ctaSecondary: 'View portfolio',
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: content.title,
        description: content.subtitle,
        url: 'https://weblio.dev/services',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: 'https://weblio.dev/services' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: lang === 'uk' ? 'Скільки часу займає запуск сайту?' : 'How long does a website launch usually take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: lang === 'uk' ? 'Базовий лендінг зазвичай 2-3 тижні, багатосторінкові проєкти 4-8 тижнів залежно від складності.' : 'A focused landing page usually takes 2-3 weeks, while multi-page projects take 4-8 weeks depending on complexity.',
            },
          },
          {
            '@type': 'Question',
            name: lang === 'uk' ? 'Чи включаєте SEO у розробку?' : 'Is SEO included in the development process?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: lang === 'uk' ? 'Так, у роботу входять технічна SEO-основа, структура контенту та базова оптимізація швидкості.' : 'Yes. Delivery includes technical SEO foundations, content structure, and baseline speed optimisation.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead title={t.seo.servicesTitle} description={t.seo.servicesDesc} path="/services" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">{content.eyebrow}</p>
          <h1 className="page-hero__title fade-up">{content.title}</h1>
          <p className="page-hero__subtitle fade-up">{content.subtitle}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="pricing-grid">
            {content.cards.map((card) => (
              <article className="pricing-card reveal reveal--scale" key={card.title}>
                <div className="pricing-card__logo">{card.logo}</div>
                <h3 className="pricing-card__title">{card.title}</h3>
                <p className="pricing-card__meta">{card.meta}</p>
                <ul className="pricing-card__list">
                  {card.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <h2 className="section__title">{content.processTitle}</h2>
            <p className="section__subtitle">{content.processSubtitle}</p>
          </div>
          <div className="process-grid">
            {content.process.map((step, index) => (
              <article className="process-step reveal reveal--up" key={step.title}>
                <div className="process-step__num">0{index + 1}</div>
                <div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal reveal--up">
          <h2 className="cta-banner__title">{content.ctaTitle}</h2>
          <p className="cta-banner__subtitle">{content.ctaSubtitle}</p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">{content.ctaPrimary}</Link>
            <Link to="/portfolio" className="btn btn--outline btn--lg">{content.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
