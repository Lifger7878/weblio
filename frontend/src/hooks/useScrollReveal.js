import { useEffect } from 'react';

/**
 * Observes all .reveal elements in the document and adds .is-visible
 * when they scroll into the viewport. Safe with React Suspense/lazy
 * because it runs in useEffect (after component DOM is attached).
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not([data-observed])');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay ?? 0) * 1000;
            const apply = () => entry.target.classList.add('is-visible');
            delay > 0 ? setTimeout(apply, delay) : apply();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    );

    elements.forEach((el) => {
      el.dataset.observed = 'true';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
