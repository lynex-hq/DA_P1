'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// href is the canonical route; `match` lists every path that should light this
// link up (the old Express app served several aliases per page).
const NAV = [
  { label: 'HOME', href: '/', match: ['/', '/home'] },
  { label: 'ABOUT', href: '/about_us', match: ['/about_us'] },
  { label: 'PORTFOLIO', href: '/works', match: ['/works', '/portfolio'] },
  { label: 'SERVICES', href: '/blueprints', match: ['/blueprints', '/services'] },
  { label: 'BLOG', href: '/blog', match: ['/blog', '/insights'] },
  { label: 'CONTACT', href: '/contact_us', match: ['/contact_us'] },
];

// Each static page carried its own drawing number in the title block
const DWG = {
  '/blog': 'DWG.05',
  '/insights': 'DWG.05',
};

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (item) => item.match.includes(pathname);
  const dwg = DWG[pathname] || 'DWG.01';

  const headerRef = useRef(null);
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

    if (skipAnim) {
      if (headerRef.current) gsap.set(headerRef.current, { opacity: 1 });
      return;
    }

    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.2, ease: 'power3.out' }
      );
    }
  }, [triggered]);

  return (
    <header ref={headerRef} style={{ opacity: 0 }} className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate/15">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">

        {/* Title Block / CAD Reference Tag */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Design Ark — home">
          {/* Monogram, not the full lockup: the title block already sets
              "DESIGN ARK" in type beside it, and the lockup's wordmark renders
              under 6px tall at this size. /logo.png keeps the full lockup. */}
          <Image
            src="/images/brand/design-ark-mark.png"
            alt="Design Ark"
            width={205}
            height={205}
            priority
            className="w-11 h-11 object-contain"
          />
          <div className="flex flex-col border-l border-slate/20 pl-3 justify-center">
            <span className="font-technical-label text-[11px] font-bold tracking-[0.2em] text-slate">DESIGN ARK</span>
          </div>
        </Link>

        {/* CAD Plan Annotations Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                'font-technical-label text-[11px] tracking-[0.18em] py-1 transition-colors ' +
                (isActive(item)
                  ? 'cad-dim-line text-slate font-semibold'
                  : 'text-slate/70 hover:text-secondary font-medium')
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action CTA & Mobile Drawer Button */}
        <div className="flex items-center gap-4">

          {/* Top-Right CAD Social Annotations */}
          <div className="hidden md:flex items-center gap-3 pr-4 border-r border-slate/15">
            <a href="https://www.tiktok.com/@designark" target="_blank" rel="noopener noreferrer" className="text-slate/70 hover:text-secondary transition-colors duration-200" title="TikTok // @designark">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
            <a href="https://www.facebook.com/share/18vZ3rsKJR/" target="_blank" rel="noopener noreferrer" className="text-slate/70 hover:text-secondary transition-colors duration-200" title="Facebook // Design Ark">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          <Link href="/contact_us" className="btn-brass-outline hidden sm:inline-block">
            INQUIRE
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-slate p-1 focus:outline-none"
            aria-label="Toggle drawer"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Pull-Out Drawing Sheet Drawer */}
      <div
        id="mobile-menu"
        className={
          (menuOpen ? 'flex' : 'hidden') +
          ' lg:hidden bg-[#FAF9F6] border-b border-secondary/30 px-margin-mobile py-6 flex-col gap-2'
        }
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={
              'font-technical-label text-xs tracking-widest py-3 border-b border-slate/10 ' +
              (isActive(item) ? 'text-secondary font-bold' : 'text-slate/80 hover:text-secondary')
            }
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact_us" onClick={() => setMenuOpen(false)} className="mt-4 text-center btn-brass-outline bg-secondary/10">
          INQUIRE NOW
        </Link>
      </div>
    </header>
  );
}
