'use client';

import { images } from '@/lib/images';
import Image from 'next/image';
import { useState } from 'react';

export default function WorksView() {
  const [cat, setCat] = useState('all');

  return (
    <>
      <main className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title & Filter Bar */}
        <section className="py-10 border-b border-slate/15 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <span className="font-technical-label text-xs text-secondary tracking-[0.25em] block mb-2">03 // PORTFOLIO MATRIX</span>
              <h1 className="font-display-lg text-4xl sm:text-5xl text-slate">Selected Works & Specifications</h1>
            </div>
            <span className="font-technical-label text-[10px] text-slate/50">FILTER BY CATEGORY // CAD.MAT</span>
          </div>
      
          {/* Clean CAD Filter Buttons */}
          <div className="flex flex-wrap gap-6 font-technical-label text-xs">
            <button type="button" onClick={() => setCat('all')} className={'project-filter pb-1 transition-colors ' + (cat === 'all' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-slate/70 hover:text-secondary')}>ALL_PROJECTS</button>
            <button type="button" onClick={() => setCat('residential')} className={'project-filter pb-1 transition-colors ' + (cat === 'residential' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-slate/70 hover:text-secondary')}>RESIDENTIAL</button>
            <button type="button" onClick={() => setCat('workspace')} className={'project-filter pb-1 transition-colors ' + (cat === 'workspace' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-slate/70 hover:text-secondary')}>WORKSPACE</button>
            <button type="button" onClick={() => setCat('commercial')} className={'project-filter pb-1 transition-colors ' + (cat === 'commercial' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-slate/70 hover:text-secondary')}>COMMERCIAL</button>
          </div>
        </section>
      
        {/* Project Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project Card 1 */}
          <div className="project-item border border-slate/15 bg-white p-5 shadow-sm group" data-category="residential" style={{ display: cat === 'all' || cat === 'residential' ? 'block' : 'none' }}>
            <div className="relative overflow-hidden mb-4 border border-slate/10">
              <div className="relative w-full h-80">
                <Image src={images.workTravertinePavilion} alt="Travertine Pavilion" fill className="object-cover grayscale group-hover:grayscale-0 smooth-hover" />
              </div>
              <span className="absolute top-3 left-3 bg-[#FAF9F6] px-2 py-1 font-technical-label text-[9px] text-secondary font-bold border border-slate/20">PROJ_01</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center font-technical-label text-[10px] text-slate/60">
                <span>RESIDENTIAL PAVILION</span>
                <span>LOCATION: ZURICH</span>
              </div>
              <h3 className="font-headline-md text-2xl text-slate">Travertine Monolith Pavilion</h3>
              <p className="text-xs text-slate/70 font-light leading-relaxed">
                High-altitude residential sanctuary crafted with hand-honed travertine slabs and continuous floor-to-ceiling glass profiles.
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="project-item border border-slate/15 bg-white p-5 shadow-sm group" data-category="workspace" style={{ display: cat === 'all' || cat === 'workspace' ? 'block' : 'none' }}>
            <div className="relative overflow-hidden mb-4 border border-slate/10">
              <div className="relative w-full h-80">
                <Image src={images.workBasaltWorkspace} alt="Basalt Workspace" fill className="object-cover grayscale group-hover:grayscale-0 smooth-hover" />
              </div>
              <span className="absolute top-3 left-3 bg-[#FAF9F6] px-2 py-1 font-technical-label text-[9px] text-secondary font-bold border border-slate/20">PROJ_02</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center font-technical-label text-[10px] text-slate/60">
                <span>EXECUTIVE WORKSPACE</span>
                <span>LOCATION: MANHATTAN</span>
              </div>
              <h3 className="font-headline-md text-2xl text-slate">Volcanic Basalt Corporate Suite</h3>
              <p className="text-xs text-slate/70 font-light leading-relaxed">
                Private executive suite with dark volcanic stone walling, recessed metallic brass accents, and acoustic wood slabbing.
              </p>
            </div>
          </div>

          {/* Project Card 3 — same commission featured on the homepage gallery */}
          <div className="project-item border border-slate/15 bg-white p-5 shadow-sm group" data-category="commercial" style={{ display: cat === 'all' || cat === 'commercial' ? 'block' : 'none' }}>
            <div className="relative overflow-hidden mb-4 border border-slate/10">
              <div className="relative w-full h-80">
                <Image src={images.projectAtelierNine} alt="Atelier Nine" fill className="object-cover grayscale group-hover:grayscale-0 smooth-hover" />
              </div>
              <span className="absolute top-3 left-3 bg-[#FAF9F6] px-2 py-1 font-technical-label text-[9px] text-secondary font-bold border border-slate/20">PROJ_03</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center font-technical-label text-[10px] text-slate/60">
                <span>HOSPITALITY RETAIL FLAGSHIP</span>
                <span>LOCATION: GALLE FORT</span>
              </div>
              <h3 className="font-headline-md text-2xl text-slate">Atelier Nine</h3>
              <p className="text-xs text-slate/70 font-light leading-relaxed">
                A heritage-fort retail flagship rebuilt around brand experience — sculpted display joinery, warm brass fixtures and a footprint engineered for how visitors actually move through it.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      
      {/* CHARCOAL SLATE ANCHOR FOOTER */}
    </>
  );
}
