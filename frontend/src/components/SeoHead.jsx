import { useEffect } from 'react';

function upsertMeta(name, content, attr = 'name') {
  const selector = `meta[${attr}="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertJsonLd(id, json) {
  let tag = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.setAttribute('data-seo-id', id);
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(json);
}

function removeJsonLd(id) {
  const tag = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (tag) tag.remove();
}

function getLocale(lang) {
  if (lang === 'uk') return 'uk_UA';
  return 'en_GB';
}

export default function SeoHead({
  title,
  description,
  noindex = false,
  path,
  type = 'website',
  image = '/og-default.jpg',
  schema,
}) {
  useEffect(() => {
    const lang = document.documentElement.lang || 'uk';
    const locale = getLocale(lang);
    const siteName = 'Weblio';
    const canonicalPath = path || window.location.pathname;
    const canonicalHref = `${window.location.origin}${canonicalPath}`;
    const imageHref = image.startsWith('http') ? image : `${window.location.origin}${image}`;

    if (title) document.title = title;

    if (description) {
      upsertMeta('description', description);
      upsertMeta('og:description', description, 'property');
      upsertMeta('twitter:description', description);
    }

    upsertMeta('og:title', title || document.title, 'property');
    upsertMeta('twitter:title', title || document.title);
    upsertMeta('og:type', type, 'property');
    upsertMeta('og:url', canonicalHref, 'property');
    upsertMeta('og:site_name', siteName, 'property');
    upsertMeta('og:locale', locale, 'property');
    upsertMeta('og:image', imageHref, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:image', imageHref);

    upsertLink('canonical', canonicalHref);
    upsertMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Weblio',
      url: window.location.origin,
      email: 'hello@weblio.dev',
      areaServed: ['UA', 'PL', 'DE', 'NL', 'AT', 'CZ'],
      knowsAbout: ['Web Development', 'SEO', 'UI/UX', 'Technical SEO', 'Website Performance'],
    };

    upsertJsonLd('base-org', baseSchema);

    if (schema) {
      upsertJsonLd('page-schema', schema);
    } else {
      removeJsonLd('page-schema');
    }

    return () => {
      removeJsonLd('page-schema');
    };
  }, [title, description, noindex, path, type, image, schema]);

  return null;
}
