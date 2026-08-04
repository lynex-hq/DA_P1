'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Hover-scramble on every .font-technical-label. Ported from the old
 * cad-tag-scramble-script. Re-binds on navigation because App Router swaps the
 * page without a full reload.
 */
export default function CadScramble() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('.cad-tag-scramble, .font-technical-label').forEach((tag) => {
      const text = tag.innerText;
      if (!text || text.length > 30 || text.includes('\n')) return;
      // Scrambling rewrites innerText, which would destroy live child nodes
      if (tag.hasAttribute('data-no-scramble') || tag.children.length) return;

      let timer = null;

      const onEnter = () => {
        if (timer) clearInterval(timer);
        let iterations = 0;
        timer = setInterval(() => {
          tag.innerText = text
            .split('')
            .map((char, i) => {
              if (i < iterations || ' /:+.'.includes(char)) return text[i];
              return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            })
            .join('');

          if (iterations >= text.length) {
            tag.innerText = text;
            clearInterval(timer);
            timer = null;
          }
          iterations += 1 / 2;
        }, 25);
      };

      const onLeave = () => {
        if (timer) clearInterval(timer);
        timer = null;
        tag.innerText = text;
      };

      tag.addEventListener('mouseenter', onEnter);
      tag.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        if (timer) clearInterval(timer);
        tag.innerText = text;
        tag.removeEventListener('mouseenter', onEnter);
        tag.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
