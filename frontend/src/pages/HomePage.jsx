import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import SeoHead from '../components/SeoHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const { t, lang } = useI18n();
  useScrollReveal();

  // Count-up animation for hero stats
  useEffect(() => {
    const els = document.querySelectorAll('.hero__stat-value[data-count]');
    els.forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix ?? '';
      const steps = 50;
      const duration = 1400;
      let step = 0;
      const delay = 500;
      setTimeout(() => {
        const interval = setInterval(() => {
          step++;
          const eased = 1 - Math.pow(1 - step / steps, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (step >= steps) {
            el.textContent = target + suffix;
            clearInterval(interval);
          }
        }, duration / steps);
      }, delay);
    });
  }, []);

  const content = lang === 'uk'
    ? {
      badge: 'Працюю з бізнесом в Україні та ЄС',
      heroSubtitle:
          'Розробляю швидкі, сучасні сайти з фокусом на заявки, SEO та реальний бізнес-результат.',
      stats: [
        { value: '40+', label: 'Запущених сайтів', count: 40, suffix: '+' },
        { value: '95+', label: 'Показник Lighthouse', count: 95, suffix: '+' },
        { value: '24/7', label: 'Підтримка після запуску' },
      ],
      marquee: ['Україна', 'Польща', 'Німеччина', 'Нідерланди', 'Австрія', 'Чехія'],
      services: {
        eyebrow: 'Послуги',
        title: 'Що роблю для вашого росту',
        subtitle: 'Від стратегії до запуску: проектую, розробляю та покращую сайти під продажі.',
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
      },
      locations: {
        eyebrow: 'Україна SEO',
        title: 'Локальна присутність по містах',
        subtitle: 'Створюю сторінки під регіональні запити, щоб бізнес знаходили в потрібному місті.',
      },
      process: {
        eyebrow: 'Процес',
        title: 'Як проходить робота',
        subtitle: 'Прозора співпраця з чіткими етапами і результатами на кожному кроці.',
        steps: [
          { title: 'Бриф і цілі', desc: 'Фіксуємо задачі, ЦА, ринок та KPI проєкту.' },
          { title: 'Структура і дизайн', desc: 'Прототип, UX-логіка та візуальний стиль під вашу нішу.' },
          { title: 'Розробка і SEO', desc: 'Код, інтеграції, оптимізація швидкості та пошуку.' },
          { title: 'Запуск і ріст', desc: 'Публікація, перевірки, аналітика та подальші покращення.' },
        ],
      },
      portfolio: {
        eyebrow: 'Портфоліо',
        title: 'Окремі приклади робіт',
        subtitle: 'Кожен проєкт робився під бізнес-мету: заявки, бронювання або продажі.',
        cards: [
          { tags: ['Hospitality', 'Booking'], title: 'Golube Ozero', desc: 'Сайт готельно-ресторанного комплексу з акцентом на бронювання.' },
          { tags: ['Medical', 'Trust'], title: 'HealthFrow Clinic', desc: 'Медична платформа з чіткою структурою послуг і сторінками лікарів.' },
          { tags: ['Custom', 'B2B'], title: 'Weblio Business Site', desc: 'Корпоративний сайт сервісної компанії з локальним SEO-фокусом.' },
        ],
      },
      testimonials: {
        eyebrow: 'Відгуки',
        title: 'Що кажуть клієнти',
        subtitle: 'Реальні результати важливіші за красиві обіцянки.',
        cards: [
          {
            quote:
                'Після запуску нового сайту кількість заявок зросла вже в перший місяць. Комунікація ідеальна.',
            name: 'Олег М.',
            role: 'Власник сервісного бізнесу',
            avatar: 'OM',
          },
          {
            quote:
                'Отримали дуже чистий, швидкий і зрозумілий сайт. Клієнтам стало простіше записуватись.',
            name: 'Марія К.',
            role: 'Керівниця медичної клініки',
            avatar: 'МК',
          },
          {
            quote:
                'Сайт виглядає преміально, а головне конвертує. Підхід максимально професійний.',
            name: 'Андрій Л.',
            role: 'Підприємець, e-commerce',
            avatar: 'АЛ',
          },
        ],
      },
      ctaBlock: {
        title: 'Готові оновити ваш сайт?',
        subtitle: 'Отримаєте чіткий план, терміни та рішення під ваш ринок.',
        primary: 'Обговорити проєкт',
        secondary: 'Переглянути послуги',
      },
    }
    : {
      badge: 'Working with businesses in Ukraine and the EU',
      heroSubtitle:
          'I build fast, modern websites focused on lead generation, SEO performance, and measurable business impact.',
      stats: [
        { value: '40+', label: 'Websites launched', count: 40, suffix: '+' },
        { value: '95+', label: 'Typical Lighthouse score', count: 95, suffix: '+' },
        { value: '24/7', label: 'Post-launch support' },
      ],
      marquee: ['Ukraine', 'Poland', 'Germany', 'Netherlands', 'Austria', 'Czechia'],
      services: {
        eyebrow: 'Services',
        title: 'What I deliver for growth',
        subtitle: 'From strategy to launch: I design, build, and optimise websites for conversions.',
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
      },
      locations: {
        eyebrow: 'Ukraine SEO',
        title: 'Local visibility across cities',
        subtitle: 'I build location-focused pages so your business appears where people search.',
      },
      process: {
        eyebrow: 'Process',
        title: 'How we work',
        subtitle: 'Clear stages, transparent communication, and practical outcomes at every step.',
        steps: [
          { title: 'Brief and goals', desc: 'We define audience, positioning, and measurable project KPIs.' },
          { title: 'Structure and design', desc: 'Prototype, UX logic, and visual direction tailored to your niche.' },
          { title: 'Development and SEO', desc: 'Implementation, integrations, performance work, and SEO setup.' },
          { title: 'Launch and growth', desc: 'Go live, validate metrics, and improve continuously.' },
        ],
      },
      portfolio: {
        eyebrow: 'Portfolio',
        title: 'Selected work',
        subtitle: 'Each project is built around a specific business objective and user action.',
        cards: [
          { tags: ['Hospitality', 'Booking'], title: 'Golube Ozero', desc: 'Hospitality website focused on direct booking requests.' },
          { tags: ['Medical', 'Trust'], title: 'HealthFrow Clinic', desc: 'Clinic platform with structured services and doctor profile pages.' },
          { tags: ['Custom', 'B2B'], title: 'Weblio Business Site', desc: 'Service company website with a local-SEO-first strategy.' },
        ],
      },
      testimonials: {
        eyebrow: 'Testimonials',
        title: 'What clients say',
        subtitle: 'Results and reliability matter more than pretty promises.',
        cards: [
          {
            quote:
                'After launching the new website, our inbound leads increased within the first month. Excellent collaboration.',
            name: 'Oleh M.',
            role: 'Service business owner',
            avatar: 'OM',
          },
          {
            quote:
                'We got a clean, fast and very clear website. Patients now book appointments much more easily.',
            name: 'Maria K.',
            role: 'Clinic operations manager',
            avatar: 'MK',
          },
          {
            quote:
                'The website feels premium and converts. The delivery approach was structured and professional.',
            name: 'Andrii L.',
            role: 'E-commerce founder',
            avatar: 'AL',
          },
        ],
      },
      ctaBlock: {
        title: 'Ready to upgrade your website?',
        subtitle: 'Get a practical roadmap, timeline, and solution tailored to your market.',
        primary: 'Discuss your project',
        secondary: 'View services',
      },
    };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Weblio',
        url: 'https://weblio.dev/',
        inLanguage: lang === 'uk' ? 'uk' : 'en-GB',
      },
      {
        '@type': 'WebPage',
        name: t.seo.homeTitle,
        description: t.seo.homeDesc,
        url: 'https://weblio.dev/',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: lang === 'uk' ? 'Для яких ринків ви розробляєте сайти?' : 'Which markets do you build websites for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: lang === 'uk' ? 'Працюю з компаніями в Україні та Європі, зокрема Польща, Німеччина, Нідерланди, Австрія і Чехія.' : 'I work with businesses in Ukraine and across Europe, including Poland, Germany, the Netherlands, Austria, and Czechia.',
            },
          },
          {
            '@type': 'Question',
            name: lang === 'uk' ? 'Що входить у підтримку після запуску?' : 'What does post-launch support include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: lang === 'uk' ? 'Підтримка включає технічні оновлення, покращення конверсії, SEO-ітерації та контроль ключових метрик.' : 'Support includes technical updates, conversion improvements, SEO iterations, and performance monitoring.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead title={t.seo.homeTitle} description={t.seo.homeDesc} path="/" schema={schema} />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__orb hero__orb--1" />
          <span className="hero__orb hero__orb--2" />
          <span className="hero__orb hero__orb--3" />
          <span className="hero__grid-line" />
        </div>
        <div className="container hero__content">
          <p className="hero__badge fade-in">
            <span className="hero__badge-dot" />
            {content.badge}
          </p>
          <h1 id="hero-heading" className="hero__title fade-up">
            {t.homeTitle}
          </h1>
          <p className="hero__subtitle">{content.heroSubtitle}</p>
          <div className="hero__actions fade-up">
            <Link to="/contact" className="btn btn--primary btn--lg">{t.cta}</Link>
            <Link to="/portfolio" className="btn btn--ghost btn--lg">{t.nav.portfolio}</Link>
          </div>

          <div className="hero__stats fade-up">
            {content.stats.map((item) => (
              <div key={item.label}>
                <div
                  className="hero__stat-value"
                  data-count={item.count}
                  data-suffix={item.suffix}
                >
                  {item.value}
                </div>
                <div className="hero__stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="Markets">
        <div className="marquee-track">
          {[...content.marquee, ...content.marquee].map((item, idx) => (
            <span className="marquee-item" key={`${item}-${idx}`}>
              <span className="flag">•</span>{item}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <p className="section__eyebrow">{content.services.eyebrow}</p>
            <h2 className="section__title">{content.services.title}</h2>
            <p className="section__subtitle">{content.services.subtitle}</p>
          </div>
          <div className="pricing-grid">
            {content.services.cards.map((card) => (
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

      <section className="section section--alt2">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <p className="section__eyebrow">{content.locations.eyebrow}</p>
            <h2 className="section__title">{content.locations.title}</h2>
            <p className="section__subtitle">{content.locations.subtitle}</p>
          </div>
          <div className="location-grid">
            <article className="location-card reveal reveal--up">
              <h3>{lang === 'uk' ? 'Захід України' : 'Western Ukraine'}</h3>
              <p>{lang === 'uk' ? 'Сторінки під Львів, Івано-Франківськ, Тернопіль та інші міста.' : 'Location pages for Lviv, Ivano-Frankivsk, Ternopil, and nearby cities.'}</p>
              <div className="city-tags">
                <span>Lviv</span><span>Ivano-Frankivsk</span><span>Ternopil</span>
              </div>
            </article>
            <article className="location-card reveal reveal--up">
              <h3>{lang === 'uk' ? 'Центр і столиця' : 'Centre and capital'}</h3>
              <p>{lang === 'uk' ? 'Окрема структура контенту для Києва, Вінниці, Черкас і регіону.' : 'Dedicated content structure for Kyiv, Vinnytsia, Cherkasy, and surrounding areas.'}</p>
              <div className="city-tags">
                <span>Kyiv</span><span>Vinnytsia</span><span>Cherkasy</span>
              </div>
            </article>
            <article className="location-card reveal reveal--up">
              <h3>{lang === 'uk' ? 'Південь' : 'South'}</h3>
              <p>{lang === 'uk' ? 'SEO-сторінки для Одеси, Миколаєва, Херсона та суміжних напрямків.' : 'SEO-focused pages for Odesa, Mykolaiv, Kherson, and related directions.'}</p>
              <div className="city-tags">
                <span>Odesa</span><span>Mykolaiv</span><span>Kherson</span>
              </div>
            </article>
            <article className="location-card reveal reveal--up">
              <h3>{lang === 'uk' ? 'Схід' : 'East'}</h3>
              <p>{lang === 'uk' ? 'Регіональні сторінки для Харкова, Дніпра, Запоріжжя та B2B-запитів.' : 'Regional pages for Kharkiv, Dnipro, Zaporizhzhia, including B2B intent queries.'}</p>
              <div className="city-tags">
                <span>Kharkiv</span><span>Dnipro</span><span>Zaporizhzhia</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <p className="section__eyebrow">{content.process.eyebrow}</p>
            <h2 className="section__title">{content.process.title}</h2>
            <p className="section__subtitle">{content.process.subtitle}</p>
          </div>
          <div className="process-grid">
            {content.process.steps.map((step, index) => (
              <article key={step.title} className="process-step reveal reveal--up">
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

      <section className="section section--alt">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <p className="section__eyebrow">{content.portfolio.eyebrow}</p>
            <h2 className="section__title">{content.portfolio.title}</h2>
            <p className="section__subtitle">{content.portfolio.subtitle}</p>
          </div>
          <div className="portfolio-grid">
            {content.portfolio.cards.map((card) => (
              <article className="portfolio-card reveal reveal--scale" key={card.title}>
                <div className="portfolio-card__thumb portfolio-card__thumb--gradient">
                  <span className="portfolio-card__thumb-label">{card.title}</span>
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
            <Link to="/portfolio" className="btn btn--outline">{t.nav.portfolio}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header reveal reveal--up">
            <p className="section__eyebrow">{content.testimonials.eyebrow}</p>
            <h2 className="section__title">{content.testimonials.title}</h2>
            <p className="section__subtitle">{content.testimonials.subtitle}</p>
          </div>
          <div className="testimonials-grid">
            {content.testimonials.cards.map((card) => (
              <article className="testimonial-card reveal reveal--up" key={card.name}>
                <div className="testimonial-card__quote">&ldquo;</div>
                <p className="testimonial-card__text">{card.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{card.avatar}</div>
                  <div>
                    <div className="testimonial-card__name">{card.name}</div>
                    <div className="testimonial-card__role">{card.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal reveal--up">
          <h2 className="cta-banner__title">{content.ctaBlock.title}</h2>
          <p className="cta-banner__subtitle">{content.ctaBlock.subtitle}</p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">{content.ctaBlock.primary}</Link>
            <Link to="/services" className="btn btn--outline btn--lg">{content.ctaBlock.secondary}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
