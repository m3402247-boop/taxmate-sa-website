'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Three small pieces of page behaviour, ported from the original static
 * site's script.js: a sticky-nav shadow once scrolled, a cursor-tracking
 * tilt on the hero mockup, and a reveal-on-scroll for anything marked
 * `data-reveal`. Kept as one mounted-once effect using plain DOM queries —
 * same technique as the original, since these are one-way "apply a class
 * and forget it" effects rather than state React needs to track.
 *
 * Every piece guards on whether its target exists, so this is a no-op on
 * pages that don't have a nav, a tilt element, or anything to reveal.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // ---- Sticky nav shadow, once the page has actually scrolled ----
    const nav = document.getElementById('nav');
    let onScroll: (() => void) | null = null;
    if (nav) {
      onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // ---- Hero tilt, on a mouse only ----
    const tiltEl = document.querySelector<HTMLElement>('[data-tilt]');
    let onMove: ((event: MouseEvent) => void) | null = null;
    let onLeave: (() => void) | null = null;
    const hoverCapable = window.matchMedia('(hover: hover)').matches;

    if (tiltEl && tiltEl.parentElement && hoverCapable) {
      const MAX_DEGREES = 7;
      const parent = tiltEl.parentElement;

      onMove = (event: MouseEvent) => {
        const bounds = tiltEl.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        tiltEl.style.transform = `rotateY(${(x * MAX_DEGREES).toFixed(2)}deg) rotateX(${(-y * MAX_DEGREES).toFixed(2)}deg)`;
      };
      onLeave = () => {
        tiltEl.style.transform = 'rotateY(0deg) rotateX(0deg)';
      };

      parent.addEventListener('mousemove', onMove);
      parent.addEventListener('mouseleave', onLeave);
    }

    // ---- Reveal on scroll ----
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    let observer: IntersectionObserver | null = null;

    if (!('IntersectionObserver' in window) || revealTargets.length === 0) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer!.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      );
      revealTargets.forEach((el) => observer!.observe(el));
    }

    return () => {
      if (nav && onScroll) window.removeEventListener('scroll', onScroll);
      if (tiltEl && tiltEl.parentElement && onMove && onLeave) {
        tiltEl.parentElement.removeEventListener('mousemove', onMove);
        tiltEl.parentElement.removeEventListener('mouseleave', onLeave);
      }
      observer?.disconnect();
    };
    // Re-runs on every route change — the layout that mounts this doesn't
    // remount between pages, so without `pathname` here a `[data-reveal]`
    // added by navigating back to a page would never get observed.
  }, [pathname]);

  return null;
}
