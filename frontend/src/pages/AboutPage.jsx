import SeoHead from '../components/SeoHead';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const { t, lang } = useI18n();
  useScrollReveal();

  const content = lang === 'uk'
    ? {
      eyebrow: 'Про мене',
      title: 'Weblio: практична веб-розробка без зайвого шуму',
      subtitle: 'Працюю з бізнесами, яким важливі заявки, швидкість запуску та прозорий процес.',
      aboutTitle: 'Фокус на результаті, а не лише на красивій картинці',
      aboutText1:
          'Понад усе ціную системний підхід: спочатку розуміння цілей бізнесу, потім структура, дизайн і технічна реалізація.',
      aboutText2:
          'Проєкти роблю так, щоб ними було зручно керувати, масштабувати і просувати в пошуку. Кожне рішення має пояснення і бізнес-логіку.',
      skills: ['React', 'SEO', 'Performance', 'Landing Pages', 'Corporate Sites', 'E-commerce', 'GDPR Readiness', 'Analytics'],
      values: [
        { title: 'Прозорість', text: 'Фіксую етапи, терміни і очікувані результати ще до старту роботи.' },
        { title: 'Швидкість', text: 'Організовую процес так, щоб ви отримували робочий результат якомога раніше.' },
        { title: 'Системність', text: 'Поєдную дизайн, код, SEO і аналітику в єдину робочу систему.' },
        { title: 'Партнерство', text: 'Думаю не лише про запуск, а й про наступні кроки росту вашого бізнесу.' },
      ],
      ctaTitle: 'Потрібен партнер для нового сайту?',
      ctaSubtitle: 'Розкажіть про задачу, і я запропоную оптимальний формат співпраці.',
      ctaPrimary: 'Написати мені',
      ctaSecondary: 'Переглянути послуги',
      placeholder: 'Фото профілю / бренд-візуал',
    }
    : {
      eyebrow: 'About',
      title: 'Weblio: practical web development with business focus',
      subtitle: 'I work with companies that care about leads, launch speed, and clear execution.',
      aboutTitle: 'Results first, not visuals alone',
      aboutText1:
          'My approach is structured: define business goals first, then craft information architecture, design, and implementation.',
      aboutText2:
          'Projects are built to be manageable, scalable, and SEO-ready. Every technical decision supports a clear business objective.',
      skills: ['React', 'SEO', 'Performance', 'Landing Pages', 'Corporate Sites', 'E-commerce', 'GDPR Readiness', 'Analytics'],
      values: [
        { title: 'Transparency', text: 'Clear stages, timelines, and expected outcomes before development starts.' },
        { title: 'Speed', text: 'Lean delivery process so you get working output quickly and iterate faster.' },
        { title: 'Systems thinking', text: 'Design, code, SEO, and analytics connected into one growth system.' },
        { title: 'Partnership', text: 'Beyond launch, I focus on what helps your business keep growing.' },
      ],
      ctaTitle: 'Need a reliable web partner?',
      ctaSubtitle: 'Share your goals and I will recommend the best collaboration format.',
      ctaPrimary: 'Contact me',
      ctaSecondary: 'View services',
      placeholder: 'Profile photo / brand visual',
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: content.title,
        description: content.subtitle,
        url: 'https://weblio.dev/about',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'Person',
        name: 'Weblio',
        url: 'https://weblio.dev/about',
        jobTitle: lang === 'uk' ? 'Веб-розробник та SEO-спеціаліст' : 'Web developer and SEO specialist',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Weblio', item: 'https://weblio.dev/' },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: 'https://weblio.dev/about' },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead title={t.seo.aboutTitle} description={t.seo.aboutDesc} path="/about" schema={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-in">{content.eyebrow}</p>
          <h1 className="page-hero__title fade-up">{content.title}</h1>
          <p className="page-hero__subtitle fade-up">{content.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image reveal reveal--scale" aria-hidden="true">
            <div className="about-placeholder">{content.placeholder}</div>
          </div>

          <div className="about-content reveal reveal--right">
            <h2 className="about-content__title">{content.aboutTitle}</h2>
            <p className="about-content__text">{content.aboutText1}</p>
            <p className="about-content__text">{content.aboutText2}</p>

            <div className="skills-list">
              {content.skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="values-grid">
            {content.values.map((value) => (
              <article className="value-card reveal reveal--up" key={value.title}>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__text">{value.text}</p>
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
            <Link to="/services" className="btn btn--outline btn--lg">{content.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
