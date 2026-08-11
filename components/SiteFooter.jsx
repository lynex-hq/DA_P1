import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#FAF9F6] text-slate border-t border-slate/15 py-14 md:py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        {/* Brand & Minimal Studio Tagline */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 font-technical-label text-xs text-secondary">
            <Image
              src="/images/brand/design-ark-mark.png"
              alt="Design Ark"
              width={205}
              height={205}
              className="w-8 h-8 object-contain"
            />
            <span className="tracking-[0.2em] font-bold">DESIGN ARK</span>
          </div>
          <p className="font-light text-xs text-slate/70 leading-relaxed max-w-sm">
            Architecture and interior design studio shaping refined spatial environments.
          </p>
        </div>
        
        {/* Essential Navigation Links */}
        <div className="md:col-span-3 space-y-2.5 font-technical-label text-xs tracking-wider text-slate/80">
          <div className="text-secondary font-bold text-[10px] tracking-[0.2em] mb-3 uppercase">NAVIGATION</div>
          <p><Link href="/" className="hover:text-secondary transition-colors">HOME</Link></p>
          <p><Link href="/about_us" className="hover:text-secondary transition-colors">ABOUT</Link></p>
          <p><Link href="/works" className="hover:text-secondary transition-colors">PORTFOLIO</Link></p>
          <p><Link href="/blueprints" className="hover:text-secondary transition-colors">SERVICES</Link></p>
          <p><Link href="/blog" className="hover:text-secondary transition-colors">BLOG</Link></p>
          <p><Link href="/contact_us" className="hover:text-secondary transition-colors">CONTACT</Link></p>
        </div>
    
        {/* Contact, Location, Socials & Copyright */}
        <div className="md:col-span-4 space-y-3 font-technical-label text-xs text-slate/70">
          <div className="text-secondary font-bold text-[10px] tracking-[0.2em] mb-3 uppercase">CONTACT & LOCATIONS</div>
          <p>
            <a
              href="https://maps.app.goo.gl/aTQVSeZcpBsE1vH26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              COLOMBO // Design Ark (Pvt) Ltd.
            </a>
          </p>
          <p>
            <a href="tel:+94112345678" className="hover:text-secondary transition-colors">+94 11 234 5678</a>
            {' // '}
            <a href="mailto:inquiry@designark.com" className="hover:text-secondary transition-colors">INQUIRY@DESIGNARK.COM</a>
          </p>

          {/* Social Links */}
          <div className="pt-3 flex items-center gap-6 font-technical-label text-[10px] text-slate/70">
            <a href="https://www.tiktok.com/@designark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              <span className="tracking-[0.15em]">TIKTOK</span>
            </a>
            <a href="https://www.facebook.com/share/18vZ3rsKJR/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span className="tracking-[0.15em]">FACEBOOK</span>
            </a>
          </div>
    
          <p className="pt-3 text-[10px] text-slate/50">
            &copy;2026 DESIGN ARK (PVT) LTD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
