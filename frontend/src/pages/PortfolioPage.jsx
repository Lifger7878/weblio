import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PortfolioPage() {
  const { t, lang } = useI18n();
  useScrollReveal();

  const content = lang === 'uk'
    ? {
      eyebrow: 'Портфоліо',
      title: 'Проєкти, які вирішують бізнес-задачі',
      subtitle: 'Кейси з акцентом на заявки, бронювання, довіру клієнтів і SEO-зростання.',
      cards: [
        {
          image: '/golube-ozero.png',
          alt: t.portfolio.p1,
          title: 'Golube Ozero',
          desc: 'Сайт готельно-ресторанного комплексу. Основний фокус на бронювання та якісну презентацію сервісів.',
          tags: ['Hospitality', 'Booking', 'SEO'],
        },
        {
          image: '/helthFrow clinic.png',
          alt: t.portfolio.p2,
          title: 'HealthFrow Clinic',
          desc: 'Платформа для медичної клініки з акцентом на довіру, структуру послуг та простий запис.',
          tags: ['Medical', 'Trust', 'Conversion'],
        },
        {
          image: '/our-project.png',
          alt: t.portfolio.p3,
          title: 'Custom Business Platform',
          desc: 'Кастомний B2B-сайт з продуманою архітектурою, інтеграціями та масштабованою структурою.',
          tags: ['B2B', 'Custom', 'Growth'],
        },
      ],
      ctaTitle: 'Хочете подібний результат для вашого проєкту?',
      ctaSubtitle: 'Підготую структуру і концепт під вашу нішу та цілі.',
      ctaPrimary: 'Отримати консультацію',
      ctaSecondary: 'Дивитися послуги',
    }
    : {
      eyebrow: 'Portfolio',
      title: 'Projects built around business outcomes',
      subtitle: 'Selected case studies focused on leads, bookings, user trust, and SEO growth.',
      cards: [
        {
          image: '/golube-ozero.png',
          alt: t.portfolio.p1,
          title: 'Golube Ozero',
          desc: 'Hospitality website focused on direct booking flow and high-quality service presentation.',
          tags: ['Hospitality', 'Booking', 'SEO'],
        },
        {
          image: '/helthFrow clinic.png',
          alt: t.portfolio.p2,
          title: 'HealthFrow Clinic',
          desc: 'Medical platform designed for trust, clear service hierarchy, and smoother appointment flow.',
          tags: ['Medical', 'Trust', 'Conversion'],
        },
        {
          image: '/our-project.png',
          alt: t.portfolio.p3,
          title: 'Custom Business Platform',
          desc: 'Custom B2B website with scalable architecture, integrations, and growth-ready structure.',
          tags: ['B2B', 'Custom', 'Growth'],
        },
      ],
      ctaTitle: 'Want similar results for your business?',
      ctaSubtitle: 'I can prepare a fitting website concept for your market and goals.',
      ctaPrimary: 'Get consultation',
      ctaSecondary: 'View services',
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: content.title,
        description: content.subtitle,
        url: 'https://weblio.dev/portfolio',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'ItemList',
        itemListElement: content.cards.map((card, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: card.title,
          description: card.desc,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: 'https://weblio.dev/portfolio' },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead title={t.seo.portfolioTitle} description={t.seo.portfolioDesc} path="/portfolio" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">{content.eyebrow}</p>
          <h1 className="page-hero__title fade-up">{content.title}</h1>
          <p className="page-hero__subtitle fade-up">{content.subtitle}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="portfolio-grid">
            {content.cards.map((card) => (
              <article className="portfolio-card reveal reveal--scale" key={card.title}>
                <div className="portfolio-card__thumb">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__tags">
                    {card.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <h3 className="portfolio-card__title">{card.title}</h3>
                  <p className="portfolio-card__desc">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-wrap reveal reveal--up">
            <Link to="/contact" className="btn btn--primary btn--lg">{content.ctaPrimary}</Link>
            <Link to="/services" className="btn btn--outline btn--lg">{content.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal reveal--up">
          <h2 className="cta-banner__title">{content.ctaTitle}</h2>
          <p className="cta-banner__subtitle">{content.ctaSubtitle}</p>
        </div>
      </section>
    </>
  );
}
