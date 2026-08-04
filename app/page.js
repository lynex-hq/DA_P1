import Image from 'next/image';
import { images } from '@/lib/images';
import HeroSlider from '@/components/HeroSlider';
import DetailFeed from '@/components/DetailFeed';
import GsapScrollAnimations from '@/components/GsapScrollAnimations';
import HeroText from '@/components/HeroText';
import HeroBottomBar from '@/components/HeroBottomBar';

export default function HomePage() {
  return (
    <>
      <GsapScrollAnimations />

      {/* FULL-SCREEN HERO SECTION WITH ARCHITECTURAL IMAGE BACKDROP & REFINED SMALL TYPOGRAPHY */}
      <section className="relative w-full min-h-screen flex flex-col justify-between bg-[#161616] text-[#FAF9F6] border-b border-slate/80 overflow-hidden group pt-24 pb-8">
        
        {/* Full-Bleed Edge-to-Edge Architectural Background Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src={images.heroBackdrop} alt="Full Architectural Hero Backdrop" fill className="hero-bg-img object-cover opacity-75" priority />
          
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
        <section className="sheet-full pt-24 pb-10 border-b border-slate/15">
          {/* Section Title Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end pb-6 border-b border-slate/15">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-02 // SCOPE OF PRACTICE</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                An interior design studio<br />
                <span className="italic text-secondary">across three disciplines.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                Design Ark crafts inspiring, timeless spaces — from concept and spatial planning through material specification, joinery detailing and site execution. Every commission falls into one of three drawing sets.
              </p>
            </div>
          </div>
      
          {/* Three Discipline Sheets */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-slate/15">
            {/* SVC.01 // RESIDENTIAL */}
            <article className="group border-r border-b border-slate/15 p-6 hover:bg-[#F5F4F0] smooth-hover">
              <div className="flex items-baseline justify-between font-technical-label text-[10px] tracking-[0.2em] text-slate/50">
                <span className="text-secondary font-bold">SVC.01</span>
                <span>SCALE 1:50</span>
              </div>
      
              <div className="img-cad-frame mt-5">
                <div className="relative w-full h-32.5"><Image src={images.serviceResidential} alt="Residential interior design" fill className="scroll-zoom-img object-cover" /></div>
              </div>
      
              <h3 className="font-display-lg text-xl text-slate mt-4">Residential Interior Design</h3>
              <p className="text-sm text-slate/75 font-light leading-relaxed mt-3">
                Private homes composed around light, proportion and the way a family actually lives in a space.
              </p>
      
              <ul className="mt-4 space-y-1.5 font-technical-label text-[10px] tracking-[0.14em] text-slate/70 uppercase">
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>House Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Apartment Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Living Room Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Kitchen Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Bedroom Design</li>
              </ul>
            </article>
      
            {/* SVC.02 // OFFICE */}
            <article className="group border-r border-b border-slate/15 p-6 hover:bg-[#F5F4F0] smooth-hover">
              <div className="flex items-baseline justify-between font-technical-label text-[10px] tracking-[0.2em] text-slate/50">
                <span className="text-secondary font-bold">SVC.02</span>
                <span>SCALE 1:100</span>
              </div>
      
              <div className="img-cad-frame mt-5">
                <div className="relative w-full h-32.5"><Image src={images.serviceOffice} alt="Office interior design" fill className="scroll-zoom-img object-cover" /></div>
              </div>
      
              <h3 className="font-display-lg text-xl text-slate mt-4">Office Interior Design</h3>
              <p className="text-sm text-slate/75 font-light leading-relaxed mt-3">
                Workplaces planned for focus and flow — efficient footprints that still read as considered and calm.
              </p>
      
              <ul className="mt-4 space-y-1.5 font-technical-label text-[10px] tracking-[0.14em] text-slate/70 uppercase">
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Workspace Planning</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Reception Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Meeting Room Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Furniture Planning</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Lighting Planning</li>
              </ul>
            </article>
      
            {/* SVC.03 // COMMERCIAL */}
            <article className="group border-r border-b border-slate/15 p-6 hover:bg-[#F5F4F0] smooth-hover">
              <div className="flex items-baseline justify-between font-technical-label text-[10px] tracking-[0.2em] text-slate/50">
                <span className="text-secondary font-bold">SVC.03</span>
                <span>SCALE 1:200</span>
              </div>
      
              <div className="img-cad-frame mt-5">
                <div className="relative w-full h-32.5"><Image src={images.serviceCommercial} alt="Commercial interior design" fill className="scroll-zoom-img object-cover" /></div>
              </div>
      
              <h3 className="font-display-lg text-xl text-slate mt-4">Commercial Interior Design</h3>
              <p className="text-sm text-slate/75 font-light leading-relaxed mt-3">
                Retail, hospitality and brand environments built to hold attention and carry a brand in three dimensions.
              </p>
      
              <ul className="mt-4 space-y-1.5 font-technical-label text-[10px] tracking-[0.14em] text-slate/70 uppercase">
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Retail Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Showroom Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Hospitality Design</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Brand Experience Spaces</li>
                <li className="flex items-center gap-3 border-t border-slate/10 pt-2"><span className="text-secondary">+</span>Space Optimization</li>
              </ul>
            </article>
          </div>
      
          {/* Section Footer Strip */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-technical-label text-[10px] text-slate/50 tracking-[0.15em]">FIG. 02 // DISCIPLINE INDEX — RES / OFF / COM</span>
            <a href="/contact_us" className="btn-brass-outline">
              REQUEST A CONSULTATION
            </a>
          </div>
        </section>
      
        {/* Floor Plan Walkthrough Image Flow (Section 1: Left Image, Right Text) */}
        <section className="sheet-full py-16 border-b border-slate/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1 relative group">
              <div className="border border-slate/20 p-2 bg-white shadow-lg overflow-hidden">
                <div className="relative w-full h-100 md:h-[58vh]"><Image src={images.processMaterial} alt="Material Curation Spec" fill className="scroll-zoom-img object-cover" /></div>
              </div>
              <span className="font-technical-label text-[10px] text-secondary mt-2 block">FIG. 03 // MATERIAL CURATION & TEXTURE TINTS</span>
            </div>
      
            <div className="md:col-span-6 order-1 md:order-2 space-y-4">
              <span className="font-technical-label text-xs text-secondary tracking-[0.2em]">01 // MATERIAL TACTILITY</span>
              <h2 className="font-display-lg text-3xl text-slate">Tectonic Purity & Structural Grain</h2>
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                Sourcing unrefined basalt and hand-honed travertine directly from European quarries. Every surface is specified to age with dignity, absorbing natural daylight to create quiet, atmospheric depth.
              </p>
            </div>
          </div>
        </section>
      
        {/* Floor Plan Walkthrough Image Flow (Section 2: Right Image, Left Text) */}
        <section className="sheet-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="font-technical-label text-xs text-secondary tracking-[0.2em]">02 // LUX ENGINEERING</span>
              <h2 className="font-display-lg text-3xl text-slate">Algorithmic Lighting & Shadow Paths</h2>
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                Precision recessed lighting engineered along golden ratio grid lines. Ambient reflections cast soft twilight hues across metallic brass fixtures throughout the day.
              </p>
            </div>
      
            <div className="md:col-span-6 relative group">
              <div className="border border-slate/20 p-2 bg-white shadow-lg overflow-hidden">
                <div className="relative w-full h-100 md:h-[58vh]"><Image src={images.processLighting} alt="Lighting Engineering Spec" fill className="scroll-zoom-img object-cover" /></div>
              </div>
              <span className="font-technical-label text-[10px] text-secondary mt-2 block">FIG. 04 // LUX FLOW & AMBIENT HARMONY</span>
            </div>
          </div>
        </section>
      </main>
      
      
      {/* ===== SHEET A-05 // FULL-BLEED PROJECT SLIDER ===== */}
      
      <HeroSlider />
      
      
      
      
      {/* ===== SHEET A-06 // CAPABILITY INDEX + PROJECT GALLERY ===== */}
      <section id="sheet-06" className="sheet-full cad-blueprint-grid w-full border-t border-slate/15">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
      
          {/* Title Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end pb-6 border-b border-slate/15">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-06 // CAPABILITY INDEX</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                What we are <span className="italic text-secondary">capable of.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                A single studio carries the work from first sketch to final handover — no drawings lost between consultants, no detail left to chance on site.
              </p>
            </div>
          </div>
      
          {/* Capability Strip */}
          <div className="grid grid-cols-2 md:grid-cols-6 border-l border-slate/15 mb-8">
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.01</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">Concept &amp; Spatial Planning</div>
            </div>
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.02</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">3D Visualisation</div>
            </div>
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.03</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">Material Specification</div>
            </div>
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.04</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">Joinery Detailing</div>
            </div>
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.05</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">Lighting Design</div>
            </div>
            <div className="border-r border-b border-slate/15 px-4 py-4">
              <div className="font-technical-label text-[10px] text-secondary tracking-[0.2em]">CAP.06</div>
              <div className="font-technical-label text-[10px] tracking-[0.12em] text-slate/80 uppercase mt-2">Site Execution</div>
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
                <div className="relative w-full h-47.5"><Image src={images.projectBasaltHouse} alt="Basalt House residential project" fill className="scroll-zoom-img object-cover" /></div>
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
                <div className="relative w-full h-47.5"><Image src={images.projectMeridian} alt="Meridian Workspace office project" fill className="scroll-zoom-img object-cover" /></div>
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
                <div className="relative w-full h-47.5"><Image src={images.projectAtelierNine} alt="Atelier Nine hospitality project" fill className="scroll-zoom-img object-cover" /></div>
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end pb-10 border-b border-slate/15">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-08 // CLIENT RECORD</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                Signed off by the <span className="italic text-secondary">people who live in them.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                Every commission closes with a handover walkthrough. These are the notes that came back afterwards.
              </p>
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
      <section id="sheet-09" className="sheet-full cad-blueprint-grid w-full border-t border-slate/15">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
      
          {/* Title Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end pb-10 border-b border-slate/15">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-px bg-secondary"></span>
                <span>SHEET A-09 // PARTNER REGISTER</span>
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-slate font-light leading-tight">
                The brands we <span className="italic text-secondary">build with.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm text-slate/80 font-light leading-relaxed">
                Developers, hospitality groups and furniture houses we specify alongside — long enough that the detailing is second nature.
              </p>
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
      
          <div className="pt-6">
            <span className="font-technical-label text-[10px] text-slate/50 tracking-[0.15em]">FIG. 09 // REGISTER OF SPECIFIED PARTNERS</span>
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
             <Image src={images.detailBed} alt="Bedroom detail from a recent commission" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailCoffee} alt="Coffee table styling detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailSink} alt="Kitchen sink and fixture detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square border border-slate/15 overflow-hidden relative">
             <Image src={images.detailLaptop} alt="Workspace styling detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
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
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-4">

          <div className="flex items-center gap-2 font-technical-label text-[9px] text-secondary tracking-[0.25em]">
            <span className="w-6 h-[1px] bg-secondary"></span>
            <span>SHEET A-11 // COMMENCEMENT</span>
          </div>

          <h2 className="font-display-lg text-lg sm:text-xl md:text-2xl font-light leading-tight mt-2 max-w-xl">
            Let&rsquo;s work. <span className="italic text-secondary">Bring us the plot, the plan or the problem.</span>
          </h2>
      
          <p className="text-[10px] text-[#FAF9F6]/70 font-light leading-relaxed mt-2 max-w-md">
            First consultation is a conversation, not a quotation. Tell us the space, the timeline and roughly where the budget sits — we will tell you honestly what is possible.
          </p>
      
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a href="/contact_us" className="btn-brass-solid text-[9px] py-1.5 px-3">START A PROJECT</a>
            <a href="/works" className="btn-brass-on-dark text-[9px] py-1.5 px-3">SEE THE PORTFOLIO</a>
          </div>
      
        </div>
      </section>
      
      
      {/* CHARCOAL SLATE ANCHOR FOOTER */}
    </>
  );
}

// trigger recompile
