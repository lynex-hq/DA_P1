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
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [activeSide, setActiveSide] = useState('right');
  const [ripples, setRipples] = useState([]);

  const sectionRef = useRef(null);
  const mouseTarget = useRef({ x: -100, y: -100 });
  const innerPos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });

  const innerWidgetRef = useRef(null);
  const outerRingRef = useRef(null);
  const rafId = useRef(null);

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

  // 120fps Smooth Physics RAF Loop
  useEffect(() => {
    const loop = () => {
      // Lerp inner core (0.24 factor for responsive feel)
      innerPos.current.x += (mouseTarget.current.x - innerPos.current.x) * 0.24;
      innerPos.current.y += (mouseTarget.current.y - innerPos.current.y) * 0.24;

      // Lerp outer trailing ring (0.12 factor for smooth magnetic depth)
      outerPos.current.x += (mouseTarget.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (mouseTarget.current.y - outerPos.current.y) * 0.12;

      if (innerWidgetRef.current) {
        innerWidgetRef.current.style.left = `${innerPos.current.x}px`;
        innerWidgetRef.current.style.top = `${innerPos.current.y}px`;
      }
      if (outerRingRef.current) {
        outerRingRef.current.style.left = `${outerPos.current.x}px`;
        outerRingRef.current.style.top = `${outerPos.current.y}px`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Global window mousemove & scroll listener to strictly hide cursor when outside #sheet-05
  useEffect(() => {
    const checkSectionBounds = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const clientX = e ? e.clientX : mouseTarget.current.x;
      const clientY = e ? e.clientY : mouseTarget.current.y;

      const isInside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      if (!isInside) {
        setIsHovered(false);
        setIsMouseDown(false);
        setIsHoveringButton(false);
      }
    };

    const handleWindowMouseMove = (e) => {
      checkSectionBounds(e);
    };

    const handleWindowScroll = () => {
      checkSectionBounds(null);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target?.tagName)) return;
      if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Mouse Enter
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    mouseTarget.current = { x: e.clientX, y: e.clientY };
    innerPos.current = { x: e.clientX, y: e.clientY };
    outerPos.current = { x: e.clientX, y: e.clientY };

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      setActiveSide(relativeX < 0.5 ? 'left' : 'right');
    }
  };

  // Mouse Move
  const handleMouseMove = (e) => {
    mouseTarget.current = { x: e.clientX, y: e.clientY };

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      setActiveSide(relativeX < 0.5 ? 'left' : 'right');
    }
  };

  // Mouse Leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMouseDown(false);
    setIsHoveringButton(false);
  };

  // Mouse Down & Up
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    const id = Date.now();
    setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };
  const handleMouseUp = () => setIsMouseDown(false);

  // Slider Container Click
  const handleSliderClick = (e) => {
    if (e.target.closest('button') || e.target.closest('[role="tab"]')) return;
    if (activeSide === 'left') {
      goToPrev();
    } else {
      goToNext();
    }
  };

  // Touch support
  const handleTouchStart = (e) => {
    setIsHovered(false);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="sheet-05"
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-[88vh] lg:h-[92vh] min-h-[460px] overflow-hidden bg-[#161616] select-none"
      aria-roledescription="carousel"
      aria-label="Design Ark selected works"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleSliderClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isHovered && !isHoveringButton ? 'none' : 'default' }}
    >
      {/* Slide Frames */}
      <div id="slider-track" className="absolute inset-0" style={{ cursor: isHovered && !isHoveringButton ? 'none' : 'default' }}>
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
                cursor: isHovered && !isHoveringButton ? 'none' : 'default',
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
            >
              <div className="slide-media relative w-full h-full" style={{ cursor: isHovered && !isHoveringButton ? 'none' : 'default' }}>
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
      <div className="slider-scrim" style={{ cursor: isHovered && !isHoveringButton ? 'none' : 'default' }}></div>

      {/* Left / Previous Arrow Button (Positioned Absolute on Left Edge) */}
      <button
        type="button"
        id="slider-prev"
        className="slider-arrow slider-arrow-prev group z-30 cursor-pointer"
        aria-label="Previous slide (Left Arrow)"
        aria-controls="slider-track"
        onClick={goToPrev}
        onMouseEnter={() => setIsHoveringButton(true)}
        onMouseLeave={() => setIsHoveringButton(false)}
        style={{ cursor: 'pointer' }}
      >
        {/* Animated Gold Aura Ring on Hover */}
        <div className="absolute inset-0 rounded-full bg-[#C5A880]/25 opacity-0 group-hover:opacity-100 group-hover:scale-130 transition-all duration-500 blur-md pointer-events-none" />

        <svg
          className="w-10 h-8 sm:w-14 sm:h-11 text-[#FAF9F6] group-hover:text-[#C5A880] transition-all duration-300 transform group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-[0_0_20px_rgba(197,168,128,0.9)]"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.6" className="transition-colors duration-300" />
          <g className="transform transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
            <line x1="48" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="26,15 14,22 26,29" fill="currentColor" />
          </g>
        </svg>
      </button>

      {/* Right / Next Arrow Button (Positioned Absolute on Right Edge) */}
      <button
        type="button"
        id="slider-next"
        className="slider-arrow slider-arrow-next group z-30 cursor-pointer"
        aria-label="Next slide (Right Arrow)"
        aria-controls="slider-track"
        onClick={goToNext}
        onMouseEnter={() => setIsHoveringButton(true)}
        onMouseLeave={() => setIsHoveringButton(false)}
        style={{ cursor: 'pointer' }}
      >
        {/* Animated Gold Aura Ring on Hover */}
        <div className="absolute inset-0 rounded-full bg-[#C5A880]/25 opacity-0 group-hover:opacity-100 group-hover:scale-130 transition-all duration-500 blur-md pointer-events-none" />

        <svg
          className="w-10 h-8 sm:w-14 sm:h-11 text-[#FAF9F6] group-hover:text-[#C5A880] transition-all duration-300 transform group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-[0_0_20px_rgba(197,168,128,0.9)]"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="34" cy="22" r="18" stroke="currentColor" strokeWidth="1.6" className="transition-colors duration-300" />
          <g className="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="30,15 42,22 30,29" fill="currentColor" />
          </g>
        </svg>
      </button>

      {/* Bottom Annotation Rail: Counter + Tick Indicators + Key Hint */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-[#FAF9F6]/15 bg-linear-to-t from-black/60 to-transparent">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 sm:py-5 flex items-center justify-between gap-4 md:gap-6">
          <div className="font-technical-label text-[10px] md:text-xs tracking-[0.2em] text-[#FAF9F6]/70 flex items-center gap-2">
            <span id="slider-index" className="text-[#C5A880] font-bold text-sm md:text-base">
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
                className={'slider-tick cursor-pointer' + (i === currentIndex ? ' is-active' : '')}
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === currentIndex}
                onClick={() => goToSlide(i)}
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>

          <span className="hidden md:block font-technical-label text-[10px] tracking-[0.2em] text-[#FAF9F6]/50">
            SHEET A-05 // SELECTED WORKS
          </span>
        </div>
      </div>

      {/* CREATIVE CLICK SHOCKWAVE RIPPLE ELEMENTS */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="fixed pointer-events-none z-30 rounded-full border border-[#C5A880] animate-cad-ripple"
          style={{
            width: '60px',
            height: '60px',
            left: `${r.x}px`,
            top: `${r.y}px`,
            boxShadow: '0 0 20px rgba(197, 168, 128, 0.65)',
          }}
        />
      ))}

      {/* FLOATING CUSTOM CURSOR WIDGET: < [ FULL DARK CIRCLE DISK ] > (TRANSLUCENT BG + AMBIENT SHADOWS) */}
      {/* Hidden on mobile touch devices (hidden md:block / hidden md:flex) */}

      {/* Layer 1: Trailing Outer Reticle Ring */}
      <div
        ref={outerRingRef}
        id="slider-custom-cursor-outer"
        className="hidden md:block fixed pointer-events-none z-40 rounded-full select-none"
        aria-hidden="true"
        style={{
          width: '84px',
          height: '84px',
          left: -100,
          top: -100,
          border: '1px dashed rgba(197, 168, 128, 0.5)',
          borderRadius: '50%',
          opacity: isHovered && !isHoveringButton ? (isMouseDown ? 0.95 : 0.6) : 0,
          transform: `translate(-50%, -50%) scale(${isHovered && !isHoveringButton ? (isMouseDown ? 0.85 : 1) : 0})`,
          boxShadow: '0 0 16px rgba(197, 168, 128, 0.2)',
          transition: 'opacity 250ms ease-out, transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease-out',
        }}
      />

      {/* Layer 2: Core Cursor Widget with Flanking < and > Chevrons around Full Dark Circle Disk */}
      <div
        ref={innerWidgetRef}
        id="slider-custom-cursor"
        className="hidden md:flex fixed pointer-events-none z-50 items-center justify-center gap-3.5 select-none"
        aria-hidden="true"
        style={{
          left: -100,
          top: -100,
          opacity: isHovered && !isHoveringButton ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovered && !isHoveringButton ? (isMouseDown ? 0.88 : 1) : 0})`,
          transition: 'opacity 200ms ease-out, transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Left Chevron Indicator (<) */}
        <span
          className="text-2xl font-light leading-none transition-all duration-200 select-none"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            color: activeSide === 'left' ? '#C5A880' : 'rgba(250, 249, 246, 0.6)',
            textShadow: activeSide === 'left'
              ? '0 0 16px rgba(197, 168, 128, 0.95), 0 4px 12px rgba(0, 0, 0, 0.9)'
              : '0 2px 10px rgba(0, 0, 0, 0.85)',
            transform: activeSide === 'left' ? 'scale(1.35)' : 'scale(1)',
            filter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 0.9))',
          }}
        >
          &lt;
        </span>

        {/* Center Full Dark Circle Disk (Transparent Background with Rich Ambient Shadows) */}
        <div
          className="w-16 h-16 rounded-full flex flex-col items-center justify-center relative select-none transition-all duration-300"
          style={{
            backgroundColor: 'rgba(18, 18, 18, 0.35)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(197, 168, 128, 0.65)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.88), 0 0 28px rgba(197, 168, 128, 0.35), inset 0 0 14px rgba(197, 168, 128, 0.2)',
          }}
        >
          {/* Top Champagne Gold Dot */}
          <span
            className="w-1.5 h-1.5 rounded-full transition-all duration-200 mb-0.5"
            style={{
              backgroundColor: '#C5A880',
              boxShadow: '0 0 10px rgba(197, 168, 128, 0.95)',
              transform: isMouseDown ? 'scale(1.4)' : 'scale(1)',
            }}
          />

          {/* Center Active Slide Counter */}
          <span
            className="font-technical-label text-[10px] font-bold tracking-wider text-[#C5A880]"
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
              textShadow: '0 0 10px rgba(197, 168, 128, 0.85)',
            }}
          >
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Right Chevron Indicator (>) */}
        <span
          className="text-2xl font-light leading-none transition-all duration-200 select-none"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            color: activeSide === 'right' ? '#C5A880' : 'rgba(250, 249, 246, 0.6)',
            textShadow: activeSide === 'right'
              ? '0 0 16px rgba(197, 168, 128, 0.95), 0 4px 12px rgba(0, 0, 0, 0.9)'
              : '0 2px 10px rgba(0, 0, 0, 0.85)',
            transform: activeSide === 'right' ? 'scale(1.35)' : 'scale(1)',
            filter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 0.9))',
          }}
        >
          &gt;
        </span>
      </div>
    </section>
  );
}



