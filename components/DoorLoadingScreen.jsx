'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function DoorLoadingScreen() {
  const [isDone, setIsDone] = useState(false);

  const leftDoorRef   = useRef(null);
  const rightDoorRef  = useRef(null);
  const knobRef       = useRef(null);
  const knobWrapRef   = useRef(null); // wrapper that fades out before doors open

  useEffect(() => {
    if (sessionStorage.getItem('da_visited')) {
      setIsDone(true);
      window.dispatchEvent(new CustomEvent('designark:door-opened'));
      return;
    }

    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('da_visited', 'true');
        window.dispatchEvent(new CustomEvent('designark:door-opened'));
        setIsDone(true);
        document.body.style.overflow = '';
      },
    });

    // Initial states
    gsap.set(knobRef.current,    { opacity: 0, scale: 0.6 });
    gsap.set(knobWrapRef.current, { opacity: 1 });

    tl
      // 1. Knob pops in
      .to(knobRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'back.out(1.7)',
        delay: 0.5,
      })
      // 2. Brief pause
      .to({}, { duration: 0.35 })
      // 3. Rotate knob to simulate turning
      .to(knobRef.current, {
        rotate: 55,
        duration: 0.55,
        ease: 'power2.inOut',
      })
      // 4. Spring-back
      .to(knobRef.current, {
        rotate: 48,
        duration: 0.15,
        ease: 'power1.out',
      })
      // 5. Fade out knob before doors slide
      .to(knobWrapRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
      }, '+=0.1')
      // 6. Doors (with text) slide open simultaneously
      .to(leftDoorRef.current, {
        xPercent: -100,
        duration: 1.3,
        ease: 'power4.inOut',
      }, '-=0.05')
      .to(rightDoorRef.current, {
        xPercent: 100,
        duration: 1.3,
        ease: 'power4.inOut',
      }, '<');

    return () => { document.body.style.overflow = ''; };
  }, []);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-100 overflow-hidden select-none pointer-events-auto">

      {/* ── LEFT DOOR PANEL (carries "DESIGN") ── */}
      <div
        ref={leftDoorRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#FAF9F6] border-r border-[#C5A880]/40 z-20 shadow-2xl flex items-center justify-end pr-6"
      >
        <span
          className="font-display-lg text-3xl md:text-5xl lg:text-6xl text-[#252525] font-light tracking-[0.25em] uppercase"
          style={{ letterSpacing: '0.25em' }}
        >
          DESIGN
        </span>
      </div>

      {/* ── RIGHT DOOR PANEL (carries "ARK") ── */}
      <div
        ref={rightDoorRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF9F6] border-l border-[#C5A880]/40 z-20 shadow-2xl flex items-center justify-start pl-6"
      >
        <span
          className="font-display-lg text-3xl md:text-5xl lg:text-6xl text-[#252525] font-light tracking-[0.25em] uppercase"
          style={{ letterSpacing: '0.25em' }}
        >
          &nbsp;ARK
        </span>
      </div>

      {/* ── KNOB (centred above the door seam) ── */}
      <div
        ref={knobWrapRef}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      >
        {/* Push knob slightly above centre so it sits over the text gap */}
        <div ref={knobRef} style={{ marginTop: '-90px', transformOrigin: 'center center' }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="knobBall" cx="35%" cy="28%" r="65%">
                <stop offset="0%"  stopColor="#EDD9BC" />
                <stop offset="20%" stopColor="#C5A880" />
                <stop offset="55%" stopColor="#A8894F" />
                <stop offset="80%" stopColor="#8A6E38" />
                <stop offset="100%" stopColor="#5E4820" />
              </radialGradient>
              <filter id="knobShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#00000055" />
              </filter>
            </defs>
            <circle cx="32" cy="32" r="27" fill="url(#knobBall)" filter="url(#knobShadow)" />
            <ellipse cx="22" cy="20" rx="8"   ry="5.5" fill="white" opacity="0.4" />
            <ellipse cx="19" cy="17" rx="3.5" ry="2.5" fill="white" opacity="0.6" />
          </svg>
        </div>
      </div>

    </div>
  );
}
