import Image from 'next/image';
import { images } from '@/lib/images';
export const metadata = {
  title: 'DESIGN ARK // Studio & Manifesto',
  description:
    'Meet the studio behind Design Ark — our practice pillars, principal architects, and the material and geometric principles that shape every commission.',
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Studio Hero Header */}
        <section className="py-16 border-b border-slate/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-3 font-technical-label text-xs text-secondary tracking-[0.25em]">
                <span className="w-8 h-[1px] bg-secondary"></span>
                <span>STUDIO MANIFESTO & PROFILE</span>
              </div>
              <h1 className="font-display-lg text-4xl sm:text-6xl text-slate font-light leading-tight">
                Restraint in Form. <br />
                <span className="italic text-secondary">Warmth in Detail.</span>
              </h1>
              <p className="text-base text-slate/80 font-light leading-relaxed max-w-xl">
                Founded on the mathematical principles of basalt permanence and golden ratio proportions, Design Ark formulates architectural living environments across Europe, Asia, and North America.
              </p>
            </div>
      
            <div className="md:col-span-5 relative group">
              <div className="border border-slate/20 p-2 bg-white shadow-xl overflow-hidden">
                <div className="relative w-full h-[380px]">
                  <Image src={images.studioOffice} alt="Studio Architecture Office" fill className="scroll-zoom-img object-cover" />
                </div>
              </div>
              <span className="font-technical-label text-[10px] text-secondary mt-2 block">ATELIER HEADQUARTERS // EST. 2018</span>
            </div>
          </div>
        </section>
      
        {/* Foundational Pillars Panel */}
        <section className="py-20 border-b border-slate/15">
          <div className="mb-12">
            <span className="font-technical-label text-xs text-secondary tracking-[0.2em] block mb-2">02 // CODE OF TECTONIC RIGOR</span>
            <h2 className="font-display-lg text-3xl text-slate">Foundational Practice Pillars</h2>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="panel-ivory-alt p-8 border border-slate/15 space-y-4">
              <span className="font-technical-label text-secondary text-xs">PILLAR 01</span>
              <h3 className="font-headline-md text-2xl text-slate">Material Intelligence</h3>
              <p className="text-xs text-slate/80 font-light leading-relaxed">
                Selecting raw volcanic stone, carbonized oak, and champagne-gold alloys specified for physical durability and tactile patina.
              </p>
            </div>
      
            <div className="panel-ivory-alt p-8 border border-slate/15 space-y-4">
              <span className="font-technical-label text-secondary text-xs">PILLAR 02</span>
              <h3 className="font-headline-md text-2xl text-slate">Algorithmic Geometry</h3>
              <p className="text-xs text-slate/80 font-light leading-relaxed">
                Parametric spatial proportioning aligned with human movement, natural acoustic resonance, and golden ratio scale ratios.
              </p>
            </div>
      
            <div className="panel-ivory-alt p-8 border border-slate/15 space-y-4">
              <span className="font-technical-label text-secondary text-xs">PILLAR 03</span>
              <h3 className="font-headline-md text-2xl text-slate">Lux Engineering</h3>
              <p className="text-xs text-slate/80 font-light leading-relaxed">
                Calculated daylight ingress and recessed metallic reflectors creating perpetual twilight atmosphere within living rooms.
              </p>
            </div>
          </div>
        </section>
      
        {/* Leadership Section */}
        <section className="py-20">
          <div className="mb-12">
            <span className="font-technical-label text-xs text-secondary tracking-[0.2em] block mb-2">03 // PRINCIPAL DIRECTORS</span>
            <h2 className="font-display-lg text-3xl text-slate">Studio Leadership</h2>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col sm:flex-row gap-6 p-6 border border-slate/15 bg-white shadow-sm group">
              <div className="w-full sm:w-44 h-56 border border-slate/20 overflow-hidden shrink-0 relative">
                <Image src={images.teamElenaRoth} alt="Elena Roth" fill className="scroll-zoom-img object-cover" />
              </div>
              <div className="space-y-3 flex flex-col justify-center">
                <span className="font-technical-label text-[10px] text-secondary">PRINCIPAL ARCHITECT</span>
                <h3 className="font-headline-md text-2xl text-slate">Elena Roth, M.Arch</h3>
                <p className="text-xs text-slate/80 font-light leading-relaxed">
                  Specializing in high-density urban residential monuments and parametric spatial drafting.
                </p>
              </div>
            </div>
      
            <div className="flex flex-col sm:flex-row gap-6 p-6 border border-slate/15 bg-white shadow-sm group">
              <div className="w-full sm:w-44 h-56 border border-slate/20 overflow-hidden shrink-0 relative">
                <Image src={images.teamMarcusThorne} alt="Marcus Thorne" fill className="scroll-zoom-img object-cover" />
              </div>
              <div className="space-y-3 flex flex-col justify-center">
                <span className="font-technical-label text-[10px] text-secondary">DIRECTOR OF TECTONICS</span>
                <h3 className="font-headline-md text-2xl text-slate">Marcus Thorne, PE</h3>
                <p className="text-xs text-slate/80 font-light leading-relaxed">
                  18 years leading volcanic stone joinery, metallic alloys, and precision CAD drafting lifecycle management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
