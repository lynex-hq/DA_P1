'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * TextAnimate – word-by-word stagger animation.
 * Words start invisible (via inline style so even SSR renders them hidden).
 * Animation triggers on mount.
 */
export default function TextAnimate({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  duration = 0.6,
  stagger = 0.08,
  animation = 'blur-in',
}) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const words = wrapRef.current?.querySelectorAll('.ta-word');
    if (!words?.length) return;

    const config = {
      'blur-in': { from: { filter: 'blur(14px)', y: 12 }, to: { filter: 'blur(0px)', y: 0 } },
      'fade-up': { from: { y: 24 },                       to: { y: 0 } },
      'fade-in': { from: {},                               to: {} },
    }[animation] ?? { from: { filter: 'blur(14px)', y: 12 }, to: { filter: 'blur(0px)', y: 0 } };

    gsap.to(words, {
      opacity: 1,
      ...config.to,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    });
  }, [animation, delay, duration, stagger]);

  const words = String(children).trim().split(/\s+/);

  // Invisible initial state applied directly so even SSR output is hidden
  const hiddenStyle = {
    opacity: 0,
    ...(animation === 'blur-in' ? { filter: 'blur(14px)', transform: 'translateY(12px)' } : {}),
    ...(animation === 'fade-up' ? { transform: 'translateY(24px)' } : {}),
  };

  return (
    <Tag ref={wrapRef} className={className} aria-label={String(children)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="ta-word inline-block will-change-[opacity,transform,filter]"
          style={hiddenStyle}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}
