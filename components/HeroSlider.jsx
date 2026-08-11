'use client';

import { images } from '@/lib/images';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: images.slide1, alt: 'Residential living space with layered natural light', label: '01 // RESIDENTIAL' },
  { src: images.slide2, alt: 'Office interior with glazed partitions', label: '02 // WORKSPACE' },
  { src: images.slide3, alt: 'Retail environment with sculpted display joinery', label: '03 // RETAIL ATELIER' },
  { src: images.slide4, alt: 'Close study of stone and timber material texture', label: '04 // MATERIAL SPECS' },
  { src: images.slide5, alt: 'Atmospheric interior architecture at dusk', label: '05 // COMMERCIAL' },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = useCallback((idx) => {
    setCurrentIndex(idx);
  }, []);

  // Keyboard arrow keys navigation (Left Arrow and Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is focused inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target?.tagName)) return;

      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch / Swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section
      id="sheet-05"
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-[88vh] lg:h-[92vh] min-h-[460px] overflow-hidden bg-[#161616] select-none"
      aria-roledescription="carousel"
      aria-label="Design Ark selected works"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Frames */}
      <div id="slider-track" className="absolute inset-0">
        {SLIDES.map((slide, i) => {
          const offset = (i - currentIndex) * 100;
          const isActive = i === currentIndex;
          const isVisible =
            Math.abs(i - currentIndex) <= 1 ||
            (currentIndex === 0 && i === SLIDES.length - 1) ||
            (currentIndex === SLIDES.length - 1 && i === 0);

          return (
            <article
              key={slide.src}
              className={'slide' + (isActive ? ' is-active' : '')}
              style={{
                transform: `translate3d(${offset}%, 0, 0)`,
                visibility: isVisible ? 'visible' : 'hidden',
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
            >
              <div className="slide-media relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </article>
          );
        })}
      </div>

      {/* Scrim Overlay */}
      <div className="slider-scrim"></div>

      {/* Left / Previous Arrow Button */}
      <button
        type="button"
        id="slider-prev"
        className="slider-arrow slider-arrow-prev group"
        aria-label="Previous slide (Left Arrow)"
        aria-controls="slider-track"
        onClick={goToPrev}
      >
        <svg
          className="w-10 h-8 sm:w-14 sm:h-11 text-[#FAF9F6] group-hover:text-secondary transition-colors duration-300"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.2" />
          <line x1="48" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="28,16 16,22 28,28" fill="currentColor" />
        </svg>
      </button>

      {/* Right / Next Arrow Button */}
      <button
        type="button"
        id="slider-next"
        className="slider-arrow slider-arrow-next group"
        aria-label="Next slide (Right Arrow)"
        aria-controls="slider-track"
        onClick={goToNext}
      >
        <svg
          className="w-10 h-8 sm:w-14 sm:h-11 text-[#FAF9F6] group-hover:text-secondary transition-colors duration-300"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="34" cy="22" r="18" stroke="currentColor" strokeWidth="1.2" />
          <line x1="8" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="28,16 40,22 28,28" fill="currentColor" />
        </svg>
      </button>

      {/* Bottom Annotation Rail: Counter + Tick Indicators + Key Hint */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-[#FAF9F6]/15 bg-linear-to-t from-black/60 to-transparent">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 sm:py-5 flex items-center justify-between gap-4 md:gap-6">
          <div className="font-technical-label text-[10px] md:text-xs tracking-[0.2em] text-[#FAF9F6]/70 flex items-center gap-2">
            <span id="slider-index" className="text-secondary font-bold text-sm md:text-base">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[#FAF9F6]/40">/</span>
            <span>{String(SLIDES.length).padStart(2, '0')}</span>
          </div>

          <div id="slider-ticks" className="flex items-center gap-2 md:gap-3" role="tablist" aria-label="Select slide">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={'slider-tick' + (i === currentIndex ? ' is-active' : '')}
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === currentIndex}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>

          <span className="hidden md:block font-technical-label text-[10px] tracking-[0.2em] text-[#FAF9F6]/50">
            SHEET A-05 // SELECTED WORKS
          </span>
        </div>
      </div>
    </section>
  );
}
