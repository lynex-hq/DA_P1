import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/lib/images';
import HeroSlider from '@/components/HeroSlider';
import DetailFeed from '@/components/DetailFeed';
import GsapScrollAnimations from '@/components/GsapScrollAnimations';
import HeroText from '@/components/HeroText';
import HeroBottomBar from '@/components/HeroBottomBar';

const DISCIPLINES = [
  {
    key: 'residential',
    code: 'SVC.01',
    scale: 'SCALE 1:50',
    title: 'Residential Interior Design',
    image: images.serviceResidential,
    blurb: 'Private homes composed around light, proportion and the way a family actually lives in a space.',
    scope: ['House Design', 'Apartment Design', 'Living Room', 'Kitchen Design', 'Bedroom Suites'],
    cta: 'Explore Residential',
  },
  {
    key: 'office',
    code: 'SVC.02',
    scale: 'SCALE 1:100',
    title: 'Office Interior Design',
    image: images.serviceOffice,
    blurb: 'Workplaces planned for focus and flow — efficient footprints that still read as considered and calm.',
    scope: ['Workspace Planning', 'Reception Design', 'Meeting Suites', 'Custom Furniture', 'Lighting Planning'],
    cta: 'Explore Office',
  },
  {
    key: 'commercial',
    code: 'SVC.03',
    scale: 'SCALE 1:200',
    title: 'Commercial Interior Design',
    image: images.serviceCommercial,
    blurb: 'Retail, hospitality and brand environments built to hold attention and carry a brand in three dimensions.',
    scope: ['Retail Boutiques', 'Showroom Design', 'Hospitality & Dining', 'Brand Experiences', 'Spatial Flow'],
    cta: 'Explore Commercial',
  },
];

export default function HomePage() {
  return (
    <>
      <GsapScrollAnimations />

      {/* FULL-SCREEN HERO SECTION WITH ARCHITECTURAL IMAGE BACKDROP & REFINED SMALL TYPOGRAPHY */}
      <section className="relative w-full min-h-screen flex flex-col justify-between bg-[#161616] text-[#FAF9F6] border-b border-slate/80 overflow-hidden group pt-24 pb-8">
        
        {/* Full-Bleed Edge-to-Edge Architectural Background Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src={images.heroBackdrop} alt="Full Architectural Hero Backdrop" fill sizes="100vw" className="hero-bg-img object-cover opacity-75" priority />
          
          {/* Subtle CAD Dark Overlay & Vignette for Contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-[#161616] via-[#161616]/60 to-[#161616]/40 z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Subtle Architectural CAD Column Grid Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-6 md:grid-cols-12 h-full w-full opacity-40">
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full"></div>
          <div className="border-r border-white/20 h-full hidden md:block"></div>
          <div className="border-r border-white/20 h-full hidden md:block"></div>
          <div className="border-r border-white/20 h-full hidden md:block"></div>
          <div className="border-r border-white/20 h-full hidden md:block"></div>
          <div className="border-r border-white/20 h-full hidden md:block"></div>
          <div className="h-full hidden md:block"></div>
        </div>

        {/* Ambient Golden Blueprint Spotlight Overlays */}
        <div className="absolute -top-32 -right-32 w-125 h-125 bg-secondary/20 rounded-full blur-3xl pointer-events-none z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-secondary/15 rounded-full blur-3xl pointer-events-none z-10"></div>

        {/* Hero Main Content Box */}
        <div className="hero-content-box max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-20 my-auto py-8 text-center flex flex-col items-center justify-center">
          <div className="max-w-3xl space-y-4 py-1 flex flex-col items-center text-center">
            <HeroText />
          </div>
        </div>

        {/* Bottom Technical Status Bar (Animated) */}
        <HeroBottomBar />
      </section>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section id="scope-of-practice" className="pt-20 pb-16 border-b border-slate/15">
          {/* Section Title Block */}
          <div className="pb-10 border-b border-slate/15">
            <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-slate font-light leading-tight">
              An interior design studio<br />
              <span className="italic text-secondary">across three disciplines.</span>
            </h2>
          </div>
      
          {/* Three Discipline Columns — Normal, Still, Natural Full Color, No Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 py-12">
            {DISCIPLINES.map((d) => (
              <article key={d.key} className="flex flex-col justify-between">
                <div>
                  {/* Top Meta Label */}
                  <div className="flex items-baseline justify-between font-technical-label text-xs tracking-[0.2em] text-slate/50 pb-3 border-b border-slate/15">
                    <span className="text-secondary font-bold">{d.code}</span>
                    <span className="text-[10px] uppercase text-slate/40">{d.scale}</span>
                  </div>

                  {/* Clean Frameless Photograph — Still, Normal Natural Full Color */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden my-6 bg-slate/5">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Title & Blurb */}
                  <h3 className="font-display-lg text-2xl text-slate">
                    {d.title}
                  </h3>
                  <p className="text-sm text-slate/75 font-light leading-relaxed mt-3">
                    {d.blurb}
                  </p>

                  {/* Scope List — Clean Typographic Spec Lines Without Rectangles/Pills */}
                  <ul className="mt-6 pt-4 border-t border-slate/10 space-y-2 font-technical-label text-[11px] tracking-[0.14em] text-slate/65 uppercase">
                    {d.scope.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="text-secondary font-bold text-xs">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Minimalist Text Link */}
                <div className="mt-8 pt-4 border-t border-slate/10">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 font-technical-label text-xs tracking-[0.15em] text-slate uppercase font-semibold hover:text-secondary transition-colors"
                  >
                    <span>{d.cta}</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
      
          {/* Section Footer Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate/15">
            <span className="font-technical-label text-xs text-slate/60 tracking-wider">
              READY TO DISCUSS YOUR PROJECT REQUIREMENTS?
            </span>
            <Link href="/contact_us" className="btn-brass-outline hover:shadow-lg transition-all">
              REQUEST A CONSULTATION →
            </Link>
          </div>
        </section>

        {/* Floor Plan Walkthrough Image Flow (Section 1: Left Image, Right Text) */}
        <section className="sheet-full py-16 border-b border-slate/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="relative w-full h-80 md:h-[58vh] overflow-hidden border border-slate/15">
                <Image src={images.processMaterial} alt="Material curation and texture specification" fill sizes="(min-width: 768px) 50vw, 100vw" className="scroll-zoom-img object-cover" />
              </div>
              <span className="font-technical-label text-[10px] text-secondary mt-3 block">FIG. 03 // MATERIAL CURATION &amp; TEXTURE TINTS</span>
            </div>

            <div className="md:col-span-6 order-1 md:order-2 space-y-4">
              <span className="font-technical-label text-xs text-secondary tracking-[0.2em]">01 // MATERIAL TACTILITY</span>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">Tectonic Purity &amp; Structural Grain</h2>
              <p className="text-sm text-slate/75 font-light leading-relaxed max-w-lg">
                Sourcing unrefined basalt and hand-honed travertine directly from European quarries. Every surface is specified to age with dignity, absorbing natural daylight to create quiet, atmospheric depth.
              </p>
            </div>
          </div>
        </section>

        {/* Floor Plan Walkthrough Image Flow (Section 2: Right Image, Left Text) */}
        <section className="sheet-full py-16 border-b border-slate/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="font-technical-label text-xs text-secondary tracking-[0.2em]">02 // LUX ENGINEERING</span>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">Algorithmic Lighting &amp; Shadow Paths</h2>
              <p className="text-sm text-slate/75 font-light leading-relaxed max-w-lg">
                Precision recessed lighting engineered along golden ratio grid lines. Ambient reflections cast soft twilight hues across metallic brass fixtures throughout the day.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="relative w-full h-80 md:h-[58vh] overflow-hidden border border-slate/15">
                <Image src={images.processLighting} alt="Lighting engineering and shadow path specification" fill sizes="(min-width: 768px) 50vw, 100vw" className="scroll-zoom-img object-cover" />
              </div>
              <span className="font-technical-label text-[10px] text-secondary mt-3 block">FIG. 04 // LUX FLOW &amp; AMBIENT HARMONY</span>
            </div>
          </div>
        </section>
      </main>

      {/* ===== SHEET A-05 // FULL-BLEED PROJECT SLIDER ===== */}
      
      <HeroSlider />
      
      
      
      
      {/* ===== SHEET A-06 // CAPABILITY INDEX + PROJECT GALLERY ===== */}
      <section id="sheet-06" className="sheet-full w-full border-t border-slate/15 bg-[#FAF9F6]">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
      
          {/* Title Block */}
          <div className="pb-6 border-b border-slate/15">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-06 // CAPABILITY INDEX</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                What we are <span className="italic text-secondary">capable of.</span>
              </h2>
            </div>
          </div>
      
          {/* Capability Index — Redesigned without boxed rectangle borders */}
          <div className="py-6 my-6 border-y border-slate/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.01</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  Concept &amp; Spatial Planning
                </div>
              </div>
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.02</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  3D Visualisation
                </div>
              </div>
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.03</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  Material Specification
                </div>
              </div>
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.04</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  Joinery Detailing
                </div>
              </div>
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.05</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  Lighting Design
                </div>
              </div>
              <div className="group relative">
                <div className="w-5 h-px bg-secondary/60 group-hover:w-full group-hover:bg-secondary transition-all duration-300 mb-2"></div>
                <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em] font-semibold">CAP.06</div>
                <div className="font-technical-label text-[11px] tracking-[0.12em] text-slate/85 uppercase mt-1.5 leading-snug group-hover:text-slate transition-colors">
                  Site Execution
                </div>
              </div>
            </div>
          </div>
      
          {/* Project Gallery — 3 Cards */}
          <div className="flex items-baseline justify-between mb-4">
            <span className="font-technical-label text-[10px] tracking-[0.2em] text-slate/50">FIG. 06 // PROJECT GALLERY</span>
            <a href="/works" className="font-technical-label text-[10px] tracking-[0.2em] text-secondary hover:text-slate transition-colors">VIEW ALL WORKS +</a>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PRJ.01 */}
            <a href="/works" className="group block">
              <div className="img-cad-frame">
                <div className="relative w-full h-47.5"><Image src={images.projectBasaltHouse} alt="Basalt House residential project" fill sizes="(min-width: 768px) 33vw, 100vw" className="scroll-zoom-img object-cover" /></div>
              </div>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="font-display-lg text-lg text-slate group-hover:text-secondary transition-colors">Basalt House</h3>
                <span className="font-technical-label text-[10px] text-secondary">PRJ.01</span>
              </div>
              <p className="font-technical-label text-[10px] tracking-[0.14em] text-slate/60 uppercase mt-1">Residential // Colombo 07</p>
            </a>
      
            {/* PRJ.02 */}
            <a href="/works" className="group block">
              <div className="img-cad-frame">
                <div className="relative w-full h-47.5"><Image src={images.projectMeridian} alt="Meridian Workspace office project" fill sizes="(min-width: 768px) 33vw, 100vw" className="scroll-zoom-img object-cover" /></div>
              </div>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="font-display-lg text-lg text-slate group-hover:text-secondary transition-colors">Meridian Workspace</h3>
                <span className="font-technical-label text-[10px] text-secondary">PRJ.02</span>
              </div>
              <p className="font-technical-label text-[10px] tracking-[0.14em] text-slate/60 uppercase mt-1">Office // Colombo 03</p>
            </a>
      
            {/* PRJ.03 */}
            <a href="/works" className="group block">
              <div className="img-cad-frame">
                <div className="relative w-full h-47.5"><Image src={images.projectAtelierNine} alt="Atelier Nine hospitality project" fill sizes="(min-width: 768px) 33vw, 100vw" className="scroll-zoom-img object-cover" /></div>
              </div>
              <div className="flex items-baseline justify-between mt-3">
                <h3 className="font-display-lg text-lg text-slate group-hover:text-secondary transition-colors">Atelier Nine</h3>
                <span className="font-technical-label text-[10px] text-secondary">PRJ.03</span>
              </div>
              <p className="font-technical-label text-[10px] tracking-[0.14em] text-slate/60 uppercase mt-1">Commercial // Galle Fort</p>
            </a>
          </div>
        </div>
      </section>
      
      
      {/* ===== SHEET A-07 // CONTINUOUS IMAGE FEED ===== */}
      
      <DetailFeed />
      
      
      
      {/* ===== SHEET A-08 // TESTIMONIALS ===== */}
      <section id="sheet-08" className="sheet-full panel-ivory-alt w-full border-t border-slate/15">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
      
          {/* Title Block */}
          <div className="pb-10 border-b border-slate/15">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-08 // CLIENT RECORD</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                Signed off by the <span className="italic text-secondary">people who live in them.</span>
              </h2>
            </div>
          </div>
      
          {/* Six Testimonials, two rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-12 pt-10">
            <figure className="space-y-5">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                They drew the whole house before a single wall moved. We knew exactly what we were getting, and the finished rooms are calmer than the renders promised.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Nirmala &amp; Rushan P.</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Residential // Colombo 07</div>
              </figcaption>
            </figure>

            <figure className="space-y-5 md:border-l md:border-slate/15 md:pl-10">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                Our floor holds forty people and still feels quiet. The lighting plan alone changed how the team works — nobody asks to move desks any more.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Dilhara Weerasinghe</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Office Fit-Out // Colombo 03</div>
              </figcaption>
            </figure>

            <figure className="space-y-5 md:border-l md:border-slate/15 md:pl-10">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                They handled the heritage constraints better than we hoped and still delivered on the opening date. The store photographs beautifully from every angle.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Ayesha Fernando</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Retail // Galle Fort</div>
              </figcaption>
            </figure>

            <figure className="space-y-5 md:pt-10 md:border-t md:border-slate/15">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                Design Ark transformed our commercial space with mathematical precision. The way they manipulated natural light and raw materials completely redefined our brand experience.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Julian Vance</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Commercial // Verdant Holdings</div>
              </figcaption>
            </figure>

            <figure className="space-y-5 md:border-l md:border-slate/15 md:pl-10 md:pt-10 md:border-t">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                Their approach to residential architecture is unparalleled. The balance of warm textures and restrained minimalism created a sanctuary that feels both timeless and deeply personal.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Sarah Chen</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Residential // Private Client</div>
              </figcaption>
            </figure>

            <figure className="space-y-5 md:border-l md:border-slate/15 md:pl-10 md:pt-10 md:border-t">
              <div className="font-display-lg text-5xl text-secondary leading-none">&ldquo;</div>
              <blockquote className="text-base text-slate/85 font-light leading-relaxed">
                We specified Design Ark for a high-end hospitality project. The tectonic rigor they applied to the joinery and spatial flow exceeded every expectation.
              </blockquote>
              <figcaption className="pt-4 border-t border-slate/15">
                <div className="font-technical-label text-[11px] tracking-[0.16em] text-slate font-bold uppercase">Marcus Reynolds</div>
                <div className="font-technical-label text-[10px] tracking-[0.14em] text-slate/55 uppercase mt-1">Hospitality // Lumen Hotels</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      
      
      {/* ===== SHEET A-09 // CLIENT & PARTNER REGISTER ===== */}
      <section id="sheet-09" className="sheet-full w-full border-t border-slate/15 bg-[#FAF9F6]">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
      
          {/* Title Block */}
          <div className="pb-10 border-b border-slate/15">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-09 // PARTNER REGISTER</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                The brands we <span className="italic text-secondary">build with.</span>
              </h2>
            </div>
          </div>
      
          {/* Wordmark Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-l border-t border-slate/15 mt-10">
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-display-lg text-xl text-slate/70 tracking-wide">Arbor &amp; Co</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-technical-label text-sm tracking-[0.3em] text-slate/70">MERIDIAN</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-display-lg text-xl italic text-slate/70">Casa Verde</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-technical-label text-sm tracking-[0.3em] text-slate/70">NORTHFIELD</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-display-lg text-xl text-slate/70">Stone + Oak</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-technical-label text-sm tracking-[0.3em] text-slate/70">LUMEN HOTELS</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-display-lg text-xl italic text-slate/70">Altitude</span>
            </div>
            <div className="border-r border-b border-slate/15 h-24 flex items-center justify-center hover:bg-[#F5F4F0] smooth-hover">
              <span className="font-technical-label text-sm tracking-[0.3em] text-slate/70">VERDANT</span>
            </div>
          </div>
      

        </div>
      </section>

      {/* ===== SHEET A-10 // SOCIAL ARCHIVE ===== */}
      <section className="py-24 border-t border-slate/15">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-12">
          <span className="font-technical-label text-xs text-secondary tracking-[0.25em] block mb-4">SOCIAL ARCHIVE</span>
          <h2 className="font-display-lg text-3xl text-slate">Follow the Process</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailBed} alt="Bedroom detail from a recent commission" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailCoffee} alt="Coffee table styling detail" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailSink} alt="Kitchen sink and fixture detail" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailLaptop} alt="Workspace styling detail" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
        </div>

        {/* Real social channels — TikTok and Facebook are the studio's actual
            profiles (see footer). No Instagram feed is wired up: that needs a
            real handle from the client before it can be built. */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-8 flex items-center justify-center gap-8 font-technical-label text-[10px] tracking-[0.2em] text-slate/70">
          <a href="https://www.tiktok.com/@designark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            FOLLOW ON TIKTOK
          </a>
          <a href="https://www.facebook.com/share/18vZ3rsKJR/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            FOLLOW ON FACEBOOK
          </a>
        </div>
          </section>

      {/* ===== SHEET A-11 // LET'S WORK ===== */}
      <section id="sheet-11" className="w-full bg-[#161616] text-[#FAF9F6] border-t border-secondary/30">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 md:py-20">



          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-light leading-tight mt-6 max-w-2xl">
            Let&rsquo;s work. <span className="italic text-secondary">Bring us the plot, the plan or the problem.</span>
          </h2>
      
          <p className="text-xs md:text-sm text-[#FAF9F6]/70 font-light leading-relaxed mt-5 max-w-lg">
            First consultation is a conversation, not a quotation. Tell us the space, the timeline and roughly where the budget sits &mdash; we will tell you honestly what is possible.
          </p>
      
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact_us" className="btn-brass-solid text-[11px] py-3 px-6">START A PROJECT</a>
            <a href="/works" className="btn-brass-on-dark text-[11px] py-3 px-6">SEE THE PORTFOLIO</a>
          </div>
      
        </div>
      </section>
      
    </>
  );
}

// trigger recompile
