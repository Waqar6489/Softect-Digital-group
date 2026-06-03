import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const elements = document.querySelectorAll(selectors);

    // If element is already in viewport on page load, make it visible immediately
    // This fixes FAQ answers and card content that are hidden inside collapsed sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => {
      // Check if this element is inside a FAQ, accordion, or card section
      // If so, make it visible immediately without animation
      const isInsideFaq = el.closest('.faq-answer') !== null;
      const isInsideCard = el.closest('.service-card') !== null;
      const isInsideAccordion = el.closest('[data-accordion]') !== null;

      if (isInsideFaq || isInsideCard || isInsideAccordion) {
        // Skip animation — just make visible immediately
        el.classList.add('visible');
        return;
      }

      observer.observe(el);
    });

    return () => observer.disconnect();

  // Empty dependency array = run only once on mount, not on every render
  }, []);
};

export default useScrollReveal;