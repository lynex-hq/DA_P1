'use client';

import { images } from '@/lib/images';
import Image from 'next/image';
import { useState } from 'react';

export default function BlogView() {
  const [cat, setCat] = useState('all');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <main className="pt-32 pb-24">
        
        {/* HERO HEADER & TITLE BLOCK */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <div className="border-b border-slate/15 pb-12">
            <div className="flex items-center gap-3 font-technical-label text-xs text-secondary mb-4">
              <span>+</span>
              <span className="tracking-[0.25em] font-semibold">CAD SPEC NO. 05 // INSIGHTS & ESSAYS</span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-6xl text-slate font-normal leading-tight tracking-tight">
              Architectural <span className="italic text-secondary">Monographs & Journal</span>
            </h1>
            <p className="mt-6 text-slate/70 text-base md:text-lg max-w-2xl font-light leading-relaxed">
              Explorations into tactile travertine textures, parametric spatial joinery, acoustic atmosphere formulation, and modern architectural principles.
            </p>
      
            {/* Category Filter Pills */}
            <div className="mt-10 flex flex-wrap items-center gap-3 font-technical-label text-xs">
              <button type="button" onClick={() => setCat('all')} className={'blog-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary' + (cat === 'all' ? ' active' : '')}>ALL INSIGHTS</button>
              <button type="button" onClick={() => setCat('materials')} className={'blog-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary' + (cat === 'materials' ? ' active' : '')}>MATERIAL STUDIES</button>
              <button type="button" onClick={() => setCat('spatial')} className={'blog-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary' + (cat === 'spatial' ? ' active' : '')}>SPATIAL DESIGN</button>
              <button type="button" onClick={() => setCat('acoustics')} className={'blog-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary' + (cat === 'acoustics' ? ' active' : '')}>LIGHTING & ACOUSTICS</button>
              <button type="button" onClick={() => setCat('case-studies')} className={'blog-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary' + (cat === 'case-studies' ? ' active' : '')}>CASE DISSECTIONS</button>
            </div>
          </div>
        </section>
      
        {/* FEATURED ARTICLE BANNER */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20">
          <div className="bg-[#161616] text-[#FAF9F6] border border-slate/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
            
            <div className="lg:col-span-7 img-cad-frame relative min-h-[340px] md:min-h-[460px]">
              <Image src={images.blogFeatured} alt="Featured Article - Volcanic Basalt and Travertine" fill className="object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute top-4 left-4 bg-secondary text-charcoal font-technical-label text-[10px] tracking-[0.2em] font-bold px-3 py-1 uppercase">
                FLAGSHIP ESSAY
              </div>
            </div>
      
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate/80">
              <div>
                <div className="flex items-center gap-4 font-technical-label text-[11px] text-secondary tracking-widest mb-4">
                  <span>MATERIAL STUDY</span>
                  <span>//</span>
                  <span>7 MIN READ</span>
                  <span>//</span>
                  <span>AUG 2026</span>
                </div>
                <h2 className="font-display-lg text-2xl md:text-3xl font-normal text-[#FAF9F6] leading-snug group-hover:text-secondary transition-colors">
                  Volcanic Basalt & Tactile Travertine: Formulating Raw Architectural Atmospheres
                </h2>
                <p className="mt-6 text-sm text-[#FAF9F6]/75 font-light leading-relaxed">
                  An in-depth investigation into how combining porous stone surfaces with warm metallic brass detailing establishes grounding tension and timeless architectural permanence in luxury residences.
                </p>
              </div>
      
              <div className="mt-10 pt-6 border-t border-[#FAF9F6]/15 flex items-center justify-between">
                <span className="font-technical-label text-xs text-[#FAF9F6]/60">BY AR. KALANA PERERA</span>
                <a href="#" className="border border-secondary text-[#FAF9F6] font-bold text-xs tracking-widest px-6 py-3 bg-[#161616]/90 hover:bg-secondary hover:text-[#161616] transition-all inline-block font-mono">
                  READ SPECIFICATION →
                </a>
              </div>
            </div>
      
          </div>
        </section>
      
        {/* ARTICLE CARDS GRID */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
            
            {/* Article Card 1 */}
            <article className="article-item materials bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'materials' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogParametricJoinery} alt="Parametric Joinery" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>SPATIAL DESIGN</span>
                  <span>//</span>
                  <span>5 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  Parametric Joinery in Modern Sri Lankan Architecture
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  Bridging indigenous timber crafting methods with numerical CAD modeling for custom residential screens and structural partitions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">JUL 28, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
            {/* Article Card 2 */}
            <article className="article-item acoustics bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'acoustics' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogLight} alt="Light as a Building Block" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>LIGHTING & ACOUSTICS</span>
                  <span>//</span>
                  <span>8 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  Sculpting Light & Shadow in Double-Height Volumes
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  How natural daylight orientation and concealed linear brass illumination alter perceived spatial dimensions during solar transitions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">JUL 14, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
            {/* Article Card 3 */}
            <article className="article-item case-studies bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'case-studies' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogAcoustics} alt="Acoustic Engineering" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>CASE DISSECTIONS</span>
                  <span>//</span>
                  <span>6 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  Acoustic Dampening in Glass & Travertine Commercial Spaces
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  Resolving reverberation challenges in executive boardrooms using micro-perforated timber ceiling baffles and textile acoustic wall treatments.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">JUN 30, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
            {/* Article Card 4 */}
            <article className="article-item spatial bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'spatial' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogBlueprint} alt="Minimalist Blueprint" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>SPATIAL DESIGN</span>
                  <span>//</span>
                  <span>4 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  The Minimalist Blueprint: Eliminating Visual Noise
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  Techniques for recessing skirting boards, flush-door jambs, and integrated storage channels to maintain clean spatial geometry.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">JUN 18, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
            {/* Article Card 5 */}
            <article className="article-item case-studies bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'case-studies' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogHeritage} alt="Restoring Heritage" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>CASE DISSECTIONS</span>
                  <span>//</span>
                  <span>9 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  Colonial Structure Restoration with Steel & Glass Insertions
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  Integrating minimalist steel elements into a 120-year-old masonry bungalow without compromising historical structural integrity.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">MAY 22, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
            {/* Article Card 6 */}
            <article className="article-item materials bg-[#F5F4F0] border border-slate/15 flex flex-col justify-between group p-6 smooth-hover hover:border-secondary" style={{ display: cat === 'all' || cat === 'materials' ? 'flex' : 'none' }}>
              <div>
                <div className="img-cad-frame mb-6 h-56 w-full">
                  <Image src={images.blogCoastalVilla} alt="Coastal Villa Materials" fill className="object-cover grayscale" />
                </div>
                <div className="flex items-center gap-3 font-technical-label text-[10px] text-secondary tracking-widest mb-3">
                  <span>MATERIAL STUDY</span>
                  <span>//</span>
                  <span>6 MIN READ</span>
                </div>
                <h3 className="font-display-lg text-xl text-slate group-hover:text-secondary transition-colors leading-snug">
                  Corrosion-Resistant Material Palettes for Coastal Villas
                </h3>
                <p className="mt-3 text-xs text-slate/70 font-light leading-relaxed">
                  Selecting marine-grade brass alloys, sealed micro-cement, and treated teak wood engineered for high humidity oceanfront climates.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate/15 flex items-center justify-between font-technical-label text-[11px]">
                <span className="text-slate/60">MAY 04, 2026</span>
                <a href="#" className="text-secondary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  READ ESSAY <span>→</span>
                </a>
              </div>
            </article>
      
          </div>
        </section>
      
        {/* ARCHITECTURAL BRIEFING NEWSLETTER SECTION */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24">
          <div className="bg-[#161616] text-[#FAF9F6] p-8 md:p-16 border border-slate/20 relative">
            <div className="max-w-2xl">
              <div className="font-technical-label text-xs text-secondary tracking-[0.25em] font-semibold mb-3">
                + MONOGRAPH SUBSCRIPTION
              </div>
              <h2 className="font-display-lg text-2xl md:text-4xl text-[#FAF9F6] font-normal leading-tight">
                Subscribe to the Design Ark Quarterly Architectural Monograph
              </h2>
              <p className="mt-4 text-xs md:text-sm text-[#FAF9F6]/70 font-light leading-relaxed">
                Receive curated spatial essays, material specification guides, and CAD detail blueprints delivered directly to your inbox every quarter.
              </p>
      
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS..." required={true} className="bg-transparent border border-[#FAF9F6]/30 px-5 py-3 text-xs font-technical-label text-[#FAF9F6] placeholder-[#FAF9F6]/40 focus:outline-none focus:border-secondary flex-1" />
                <button type="submit" className="btn-brass-solid whitespace-nowrap">
                  {subscribed ? 'SUBSCRIBED' : 'JOIN BRIEFING'}
                </button>
              </form>
              {subscribed && (
                <p className="mt-4 font-technical-label text-[10px] tracking-[0.18em] text-secondary">
                  + THANK YOU — YOU ARE ON THE BRIEFING LIST.
                </p>
              )}
            </div>
          </div>
        </section>
      
      </main>
      
      {/* CHARCOAL SLATE ANCHOR FOOTER */}
    </>
  );
}
