'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function HeroBottomBar() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [skipAnim, setSkipAnim] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('da_visited')) {
      setSkipAnim(true);
      setTriggered(true);
      return;
    }
    // Listen for door-open signal OR fall back after 5s
    const go = () => setTriggered(true);
    const t = setTimeout(go, 5000);
    window.addEventListener('designark:door-opened', go, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('designark:door-opened', go);
    };
  }, []);

  useEffect(() => {
    if (!triggered) return;

    // We make the overall container visible now
    gsap.set(containerRef.current, { opacity: 1 });

    if (skipAnim) {
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 1 });
      if (textRef.current) gsap.set(textRef.current, { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();

    // 1. Draw the horizontal line (scaleX from right to left)
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'right center' },
      { scaleX: 1, duration: 1.0, delay: 2.2, ease: 'power3.inOut' }
    )
    // 2. Fade in and slide up the "SCROLL DOWN" indicator
    .fromTo(
      textRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4' // start slightly before the line finishes drawing
    );

  }, [triggered]);

  return (
    <div
      ref={containerRef}
      style={{ opacity: 0 }}
      className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-20 pt-4 flex flex-wrap items-center justify-end gap-4 font-technical-label text-[10px] text-[#FAF9F6]/60 tracking-[0.15em] uppercase"
    >
      {/* The animated top border line */}
      <div 
        ref={lineRef} 
        className="absolute top-0 right-margin-mobile md:right-margin-desktop left-margin-mobile md:left-margin-desktop h-px bg-white/10" 
      />

      {/* The animated SCROLL DOWN text */}
      <div ref={textRef} className="hero-scroll-indicator flex items-center gap-2 text-secondary">
        <span>SCROLL DOWN</span>
        <span className="material-symbols-outlined text-sm animate-bounce">arrow_downward</span>
      </div>
    </div>
  );
}
