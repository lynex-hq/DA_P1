'use client';

import { images } from '@/lib/images';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const COLUMNS = [
  {
    factor: 0.55,
    plates: [
      { h: 'h-[30vh]', src: images.detailBed, alt: 'Bed' },
      { h: 'h-[22vh]', src: images.detailKitchen, alt: 'Kitchen' },
      { h: 'h-[26vh]', src: images.detailLaptop, alt: 'Laptop' },
      { h: 'h-[24vh]', src: images.detailStorage, alt: 'Storage' },
    ],
  },
  {
    factor: -0.34,
    plates: [
      { h: 'h-[24vh]', src: images.detailBooks, alt: 'Books' },
      { h: 'h-[32vh]', src: images.detailBlinds, alt: 'Blinds' },
      { h: 'h-[20vh]', src: images.detailDoors, alt: 'Doors' },
      { h: 'h-[27vh]', src: images.detailCandle, alt: 'Candle' },
    ],
  },
  {
    factor: 0.42,
    plates: [
      { h: 'h-[26vh]', src: images.detailSink, alt: 'Sink' },
      { h: 'h-[23vh]', src: images.detailChairs, alt: 'Chairs' },
      { h: 'h-[30vh]', src: images.detailCoffee, alt: 'Coffee' },
      { h: 'h-[22vh]', src: images.detailCoffeeTable, alt: 'Coffee table' },
    ],
  },
];

const TRACK_SCREENS = 1.5;

export default function DetailFeed() {
  const outerRef = useRef(null);
  const colRefs = useRef([]);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const applyScroll = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      if (rect.bottom < -300 || rect.top > window.innerHeight + 300) return;

      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      colRefs.current.forEach((col) => {
        if (!col) return;
        const up = (parseFloat(col.dataset.factor) || 0) >= 0;
        const setH = col.offsetHeight / 2;
        if (!setH) return;
        const y = up ? p * setH : (1 - p) * setH;
        col.style.transform = `translate3d(0,${(-y).toFixed(2)}px,0)`;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    applyScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="sheet-07"
      ref={outerRef}
      className="detail-scroll-track w-full border-t border-slate/15"
      style={{ height: `${TRACK_SCREENS * 100}vh` }}
      aria-label="Detail image grid"
    >
      <div className="detail-sheet w-full">
        <div className="detail-columns">
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            className="detail-col"
            data-factor={col.factor}
            ref={(el) => { colRefs.current[ci] = el; }}
          >
            {[0, 1].map((pass) =>
              col.plates.map((plate) => (
                <figure
                  key={`${pass}-${plate.src}`}
                  className={`detail-plate ${plate.h}`}
                  aria-hidden={pass === 1 ? 'true' : undefined}
                >
                  <Image src={plate.src} alt={pass === 1 ? '' : plate.alt} fill className="object-cover" />
                </figure>
              ))
            )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
