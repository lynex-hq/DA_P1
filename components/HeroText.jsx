'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroText() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paraRef  = useRef(null);
  const btnsRef  = useRef(null);

  useEffect(() => {
    const splitAndAnimate = (el, delay) => {
      if (!el) return;
      const text = el.dataset.text;
      // Build word spans
      el.innerHTML = text
        .split(' ')
        .map(w => `<span class="ta-word" style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(10px);will-change:opacity,filter,transform;">${w}</span>`)
        .join('\u00A0'); // non-breaking space between words

      // Make the parent container visible so the inner words can be seen
      gsap.set(el, { opacity: 1 });

      gsap.to(el.querySelectorAll('.ta-word'), {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.6,
        stagger: 0.09,
        delay,
        ease: 'power3.out',
      });
    };

    splitAndAnimate(line1Ref.current, 0.1);
    splitAndAnimate(line2Ref.current, 0.5);

    // Paragraph fade-up
    if (paraRef.current) {
      gsap.fromTo(paraRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: 'power3.out' }
      );
    }

    // Buttons fade-up
    if (btnsRef.current) {
      gsap.fromTo(btnsRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <>
      <h1 className="font-display-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FAF9F6] font-light leading-tight tracking-tight text-center">
        {/* data-text stores original text; innerHTML replaced after door opens */}
        <span
          ref={line1Ref}
          data-text="Architectural Rigor"
          style={{ display: 'block', opacity: 0 }}
        >
          Architectural Rigor
        </span>
        <span
          ref={line2Ref}
          data-text="met with Material Intelligence."
          className="italic text-secondary font-serif block sm:inline"
          style={{ opacity: 0 }}
        >
          met with Material Intelligence.
        </span>
      </h1>

      <p
        ref={paraRef}
        className="text-xs sm:text-sm text-[#FAF9F6]/85 font-light leading-relaxed max-w-md mx-auto text-center"
        style={{ opacity: 0 }}
      >
        Restraint in structure, warmth in execution. We craft high-luxury living environments by pairing volcanic stone foundations with algorithmic precision and warm metallic accents.
      </p>

      <div ref={btnsRef} className="pt-3 flex flex-wrap items-center justify-center gap-4" style={{ opacity: 0 }}>
        <a href="/works" className="btn-brass-solid text-xs px-6 py-3 tracking-widest uppercase">
          VIEW THE WORKS
        </a>
        <a href="/contact_us" className="btn-brass-outline text-[#FAF9F6] hover:bg-secondary hover:text-[#161616] bg-black/20 text-xs px-6 py-3 tracking-widest uppercase">
          INQUIRE NOW
        </a>
      </div>
    </>
  );
}
