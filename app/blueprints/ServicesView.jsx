'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { images } from '@/lib/images';

// The three disciplines and their scope, per the studio's service spec.
const DISCIPLINES = [
  {
    key: 'residential',
    code: 'SVC.01',
    scale: 'SCALE 1:50',
    title: 'Residential Interior Design',
    image: images.serviceResidential,
    blurb:
      'Private homes composed around light, proportion and the way a family actually lives in a space.',
    scope: [
      'House Design',
      'Apartment Design',
      'Living Room Design',
      'Kitchen Design',
      'Bedroom Design',
    ],
  },
  {
    key: 'office',
    code: 'SVC.02',
    scale: 'SCALE 1:100',
    title: 'Office Interior Design',
    image: images.serviceOffice,
    blurb:
      'Workplaces planned for focus and flow — efficient footprints that still read as considered and calm.',
    scope: [
      'Workspace Planning',
      'Reception Design',
      'Meeting Room Design',
      'Furniture Planning',
      'Lighting Planning',
    ],
  },
  {
    key: 'commercial',
    code: 'SVC.03',
    scale: 'SCALE 1:200',
    title: 'Commercial Interior Design',
    image: images.serviceCommercial,
    blurb:
      'Retail, hospitality and brand environments built to hold attention and carry a brand in three dimensions.',
    scope: [
      'Retail Design',
      'Showroom Design',
      'Hospitality Design',
      'Brand Experience Spaces',
      'Space Optimization',
    ],
  },
];

const FILTERS = [
  { key: 'all', label: 'ALL DISCIPLINES' },
  { key: 'residential', label: 'RESIDENTIAL' },
  { key: 'office', label: 'OFFICE' },
  { key: 'commercial', label: 'COMMERCIAL' },
];

// How a commission runs, first sketch to handover
const STAGES = [
  { code: 'STG.01', title: 'Consultation', text: 'A conversation about the space, the timeline and roughly where the budget sits.' },
  { code: 'STG.02', title: 'Concept & Spatial Planning', text: 'Zoning, circulation and the first drawings — the shape of the whole scheme.' },
  { code: 'STG.03', title: 'Material Specification', text: 'Every surface chosen and documented, sample by sample.' },
  { code: 'STG.04', title: 'Joinery & Lighting Detail', text: 'Millwork drawn to the millimetre and the lighting plan engineered around it.' },
  { code: 'STG.05', title: 'Site Execution', text: 'We stay on site through installation so the detail survives the build.' },
  { code: 'STG.06', title: 'Handover', text: 'A walkthrough, the final drawing set and everything you need to live with it.' },
];

const FAQS = [
  {
    q: 'Do you take on single rooms, or whole properties only?',
    a: 'Both. A kitchen or a primary bedroom is a perfectly normal commission — the process is the same, just shorter.',
  },
  {
    q: 'How long does a project usually take?',
    a: 'A single room typically runs six to ten weeks from concept to handover. A full home or an office fit-out is more often four to eight months, depending on approvals and lead times on joinery.',
  },
  {
    q: 'Do you work outside Colombo?',
    a: 'Yes. We run projects island-wide and have delivered work from our New York and Zurich desks. Travel is scoped into the proposal up front.',
  },
  {
    q: 'Can you work with our contractor?',
    a: 'We can. We will issue the drawing set and stay involved through site execution so the detailing is built as drawn.',
  },
  {
    q: 'What does a first consultation cost?',
    a: 'Nothing. The first conversation is a conversation, not a quotation — we will tell you honestly what is possible before any fee is discussed.',
  },
];

export default function ServicesView() {
  const [filter, setFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const visible = DISCIPLINES.filter((d) => filter === 'all' || d.key === filter);

  return (
    <main className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

      {/* Page Title Block */}
      <section className="py-10 border-b border-slate/15 mb-12">
        <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em] mb-4">
          <span className="w-8 h-[1px] bg-secondary"></span>
          <span>SHEET A-04 // SERVICES CATALOGUE</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
          <div className="md:col-span-7">
            <h1 className="font-display-lg text-4xl sm:text-5xl text-slate font-light leading-tight">
              What we design, <span className="italic text-secondary">and how.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm text-slate/80 font-light leading-relaxed">
              One studio carries the work from first sketch to final handover — concept, material
              specification, joinery detailing and site execution, across three disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Discipline Filter */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-3 font-technical-label text-[10px] tracking-[0.18em]">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={
                'service-filter-btn px-4 py-2 border border-slate/20 transition-all hover:border-secondary ' +
                (filter === f.key ? 'active' : 'text-slate/70')
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Discipline Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-slate/15">
        {visible.map((d) => (
          <article key={d.key} className="group flex flex-col">
            <div className="flex items-baseline justify-between font-technical-label text-[10px] tracking-[0.2em] text-slate/50 mb-4">
              <span className="text-secondary font-bold">{d.code}</span>
              <span>{d.scale}</span>
            </div>

            <div className="img-cad-frame relative w-full h-[220px]">
              <Image
                src={d.image}
                alt={d.title}
                fill
                className="object-cover grayscale smooth-hover"
              />
            </div>

            <h2 className="font-display-lg text-2xl text-slate mt-5">{d.title}</h2>
            <p className="text-sm text-slate/75 font-light leading-relaxed mt-3">{d.blurb}</p>

            <ul className="mt-5 space-y-1.5 font-technical-label text-[10px] tracking-[0.14em] text-slate/70 uppercase">
              {d.scope.map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-slate/10 pt-2">
                  <span className="text-secondary">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Process */}
      <section className="py-16 border-b border-slate/15">
        <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em] mb-6">
          <span className="w-8 h-[1px] bg-secondary"></span>
          <span>FIG. 04 // METHOD OF WORKING</span>
        </div>
        <h2 className="font-display-lg text-3xl text-slate font-light mb-10">
          Six stages, <span className="italic text-secondary">no drawings lost between them.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-slate/15">
          {STAGES.map((s) => (
            <div key={s.code} className="border-r border-b border-slate/15 p-6 hover:bg-[#F5F4F0] smooth-hover">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">{s.code}</div>
              <h3 className="font-display-lg text-xl text-slate mt-3">{s.title}</h3>
              <p className="text-sm text-slate/75 font-light leading-relaxed mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-b border-slate/15">
        <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em] mb-6">
          <span className="w-8 h-[1px] bg-secondary"></span>
          <span>FIG. 05 // COMMON QUESTIONS</span>
        </div>

        <div className="border-t border-slate/15">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-slate/15">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
                className="accordion-header w-full flex items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display-lg text-lg text-slate">{f.q}</span>
                <span className="font-technical-label text-secondary text-lg leading-none shrink-0">
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              <div className={'accordion-content' + (openFaq === i ? ' open' : '')}>
                <p className="text-sm text-slate/75 font-light leading-relaxed pb-5 max-w-2xl">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
              Bring us the plot, the plan <span className="italic text-secondary">or the problem.</span>
            </h2>
            <p className="text-sm text-slate/80 font-light leading-relaxed mt-4 max-w-xl">
              Tell us the space, the timeline and roughly where the budget sits — we will tell you
              honestly what is possible.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-4 md:justify-end">
            <Link href="/contact_us" className="btn-brass-solid">START A PROJECT</Link>
            <Link href="/works" className="btn-brass-outline">SEE THE WORKS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
