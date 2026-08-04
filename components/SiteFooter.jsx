import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#FAF9F6] text-slate border-t border-secondary/40 pt-16 pb-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 font-technical-label text-xs text-secondary">
            <Image
              src="/images/brand/design-ark-mark.png"
              alt=""
              width={205}
              height={205}
              className="w-10 h-10 object-contain"
            />
            <span className="tracking-[0.2em] font-bold">DESIGN ARK ARCHITECTURAL STUDIO</span>
          </div>
          <p className="font-light text-xs text-slate/70 leading-relaxed max-w-sm">
            Formulating mathematical atmospheres through volcanic basalt foundations, tactile travertine textures, and precision metallic joinery.
          </p>
          <p className="font-technical-label text-[10px] text-secondary opacity-80">
            LAT: 06&deg;55&apos;12&quot;N // LONG: 79&deg;52&apos;18&quot;E // SPEC.V5
          </p>

        </div>
        
        <div className="md:col-span-3 space-y-3 font-technical-label text-xs uppercase tracking-wider text-slate/80">
          <div className="text-secondary font-bold text-[10px] tracking-[0.2em] mb-2">QUICK COORDINATES</div>
          <p><Link href="/" className="hover:text-secondary transition-colors">01 HOME</Link></p>
          <p><Link href="/about_us" className="hover:text-secondary transition-colors">02 ABOUT</Link></p>
          <p><Link href="/works" className="hover:text-secondary transition-colors">03 PORTFOLIO</Link></p>
          <p><Link href="/blueprints" className="hover:text-secondary transition-colors">04 SERVICES</Link></p>
          <p><Link href="/blog" className="hover:text-secondary transition-colors">05 BLOG</Link></p>
          <p><Link href="/contact_us" className="hover:text-secondary transition-colors">06 CONTACT</Link></p>
        </div>
    
        <div className="md:col-span-4 space-y-3 font-technical-label text-xs text-slate/70">
          <div className="text-secondary font-bold text-[10px] tracking-[0.2em] mb-2">PRACTICE LOCATIONS</div>
          <p>
            <a href="https://www.google.com/maps/search/?api=1&query=142+Tectonic+Way%2C+Colombo+03%2C+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              COLOMBO // 142 Tectonic Way, District 03
            </a>
          </p>
          <p>
            <a href="https://www.google.com/maps/search/?api=1&query=450+Hudson+Street%2C+Suite+800%2C+New+York" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              NEW YORK // 450 Hudson Street, Suite 800
            </a>
          </p>
          <p>
            <a href="https://www.google.com/maps/search/?api=1&query=Basaltstrasse+12%2C+8001+Zurich" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              ZURICH // Basaltstrasse 12, 8001
            </a>
          </p>
          <p>
            <a href="tel:+94112345678" className="hover:text-secondary transition-colors">+94 11 234 5678</a>
            {' // '}
            <a href="mailto:inquiry@designark.com" className="hover:text-secondary transition-colors">INQUIRY@DESIGNARK.COM</a>
          </p>

          {/* CAD Social Annotations */}
          <div className="pt-4 border-t border-slate/15 flex items-center gap-6 font-technical-label text-[10px] text-slate/70">
            <a href="https://www.tiktok.com/@designark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors duration-200">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              <span className="tracking-[0.15em]">TIKTOK // @DESIGNARK</span>
            </a>
            <a href="https://www.facebook.com/share/18vZ3rsKJR/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors duration-200">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span className="tracking-[0.15em]">FACEBOOK // OFFICIAL</span>
            </a>
          </div>
    
          <p className="pt-4 text-[10px] text-slate/50">
            &copy;2026 DESIGN ARK (PVT) LTD. ALL RIGHTS RESERVED.<br />
            DESIGNED & DEVELOPED BY LYNEX
          </p>
        </div>
      </div>
    </footer>
  );
}
