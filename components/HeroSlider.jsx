'use client';

import { images } from '@/lib/images';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: images.slide1, alt: 'Residential living space with layered natural light' },
  { src: images.slide2, alt: 'Office interior with glazed partitions' },
  { src: images.slide3, alt: 'Retail environment with sculpted display joinery' },
  { src: images.slide4, alt: 'Close study of stone and timber material texture' },
  { src: images.slide5, alt: 'Atmospheric interior architecture at dusk' },
];

const PARALLAX = 0.28;

export default function HeroSlider() {
  const outerRef = useRef(null);
  const slideRefs = useRef([]);
  const tickingRef = useRef(false);

  const [index, setIndex] = useState(0);

  const render = useCallback((exact) => {
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const offset = (i - exact) * 100;
      slide.style.transform = `translate3d(${offset}%,0,0)`;
      slide.style.visibility = Math.abs(offset) >= 100.5 ? 'hidden' : 'visible';
      const media = slide.querySelector('.slide-media');
      if (media) media.style.transform = `translate3d(${-offset * PARALLAX}%,0,0)`;
    });
  }, []);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const update = () => {
      tickingRef.current = false;
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const exact = p * (SLIDES.length - 1);

      render(exact);
      setIndex(Math.round(exact));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [render]);

  const scrollToSlide = useCallback((target) => {
    const outer = outerRef.current;
    if (!outer) return;
    const clamped = Math.min(Math.max(target, 0), SLIDES.length - 1);
    const scrollable = outer.offsetHeight - window.innerHeight;
    const top = outer.offsetTop + (clamped / (SLIDES.length - 1)) * scrollable;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="sheet-05"
      ref={outerRef}
      className="slider-scroll-track"
      style={{ height: `${SLIDES.length * 100}vh` }}
      aria-roledescription="carousel"
      aria-label="Design Ark selected works"
    >
      <div className="slider-sheet w-full overflow-hidden bg-[#161616]">
        <div id="slider-track" className="absolute inset-0">
          {SLIDES.map((slide, i) => (
            <article
              key={slide.src}
              ref={(el) => { slideRefs.current[i] = el; }}
              className={'slide' + (i === index ? ' is-active' : '')}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
            >
              <div className="slide-media relative w-full h-full">
                <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>

        <div className="slider-scrim"></div>

        <button
          type="button"
          id="slider-prev"
          className="slider-arrow slider-arrow-prev"
          aria-label="Previous slide"
          aria-controls="slider-track"
          onClick={() => scrollToSlide(index - 1)}
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5 L8 12 L15 19"></path>
          </svg>
        </button>
        <button
          type="button"
          id="slider-next"
          className="slider-arrow slider-arrow-next"
          aria-label="Next slide"
          aria-controls="slider-track"
          onClick={() => scrollToSlide(index + 1)}
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5 L16 12 L9 19"></path>
          </svg>
        </button>

        <div className="absolute bottom-0 left-0 w-full z-20 border-t border-[#FAF9F6]/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5 flex items-center justify-between gap-6">
            <div className="font-technical-label text-[10px] md:text-xs tracking-[0.2em] text-[#FAF9F6]/70" data-no-scramble>
              <span id="slider-index" className="text-secondary font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 text-[#FAF9F6]/40">/</span>
              <span>{String(SLIDES.length).padStart(2, '0')}</span>
            </div>

            <div id="slider-ticks" className="flex items-center gap-2 md:gap-3" role="tablist" aria-label="Select slide">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={'slider-tick' + (i === index ? ' is-active' : '')}
                  role="tab"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={i === index}
                  onClick={() => scrollToSlide(i)}
                />
              ))}
            </div>

            <span className="hidden md:block font-technical-label text-[10px] tracking-[0.2em] text-[#FAF9F6]/40">
              SHEET A-05 // SELECTED WORKS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
