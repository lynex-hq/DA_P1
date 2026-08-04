import Image from 'next/image';
import { images } from '@/lib/images';
import { submitEnquiry } from './actions';

export const metadata = { title: "DESIGN ARK // Coordinates & Contact Inquiry" };

export default function ContactPage() {
  return (
    <>
      <main className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="py-10 border-b border-slate/15 mb-12">
          <span className="font-technical-label text-xs text-secondary tracking-[0.25em] block mb-2">05 // COORDINATES & INQUIRY</span>
          <h1 className="font-display-lg text-4xl sm:text-5xl text-slate">Initiate Architectural Dialogue</h1>
        </section>
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-7 bg-white p-8 border border-slate/15 shadow-sm space-y-6">
            <h2 className="font-headline-md text-2xl text-slate">Inquiry Specification</h2>
            
            <form className="space-y-5 font-technical-label text-xs" action={submitEnquiry}>
              <div>
                <label className="block text-slate/70 mb-2">01 // CLIENT NAME</label>
                <input type="text" name="name" required={true} placeholder="Full Name or Principal Entity" className="w-full bg-[#FAF9F6] border border-slate/20 p-3 text-slate focus:border-secondary focus:outline-none" />
              </div>
      
              <div>
                <label className="block text-slate/70 mb-2">02 // ELECTRONIC MAIL</label>
                <input type="email" name="email" required={true} placeholder="client@firm.com" className="w-full bg-[#FAF9F6] border border-slate/20 p-3 text-slate focus:border-secondary focus:outline-none" />
              </div>
      
              <div>
                <label className="block text-slate/70 mb-2">03 // PROJECT CATEGORY</label>
                <select name="category" title="Project Category" aria-label="Project Category" className="w-full bg-[#FAF9F6] border border-slate/20 p-3 text-slate focus:border-secondary focus:outline-none">
                  <option>RESIDENTIAL PAVILION</option>
                  <option>EXECUTIVE WORKSPACE</option>
                  <option>COMMERCIAL MONUMENT</option>
                  <option>MATERIAL CONSULTATION</option>
                </select>
              </div>
      
              <div>
                <label className="block text-slate/70 mb-2">04 // BRIEF SPECIFICATION</label>
                <textarea name="message" rows="4" required={true} placeholder="Outline spatial requirements, site coordinates, and timeline." className="w-full bg-[#FAF9F6] border border-slate/20 p-3 text-slate focus:border-secondary focus:outline-none"></textarea>
              </div>
      
              <button type="submit" className="btn-brass-outline w-full py-4 text-center">
                TRANSMIT INQUIRY
              </button>
            </form>
          </div>
      
          {/* Coordinates Info & Office Image */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-slate/15 bg-white p-2 shadow-sm overflow-hidden">
              <div className="relative w-full h-64">
                <Image src={images.contactReception} alt="Studio Reception" fill className="scroll-zoom-img object-cover" />
              </div>
            </div>
      
            <div className="panel-ivory-alt p-6 border border-slate/15 space-y-3 font-technical-label text-xs">
              <div className="text-secondary font-bold tracking-widest mb-1">GLOBAL COORDINATES</div>
              <p><span className="text-slate/60">COLOMBO:</span> +94 11 234 5678</p>
              <p><span className="text-slate/60">NEW YORK:</span> +1 212 987 6543</p>
              <p><span className="text-slate/60">ZURICH:</span> +41 44 123 4567</p>
              <p><span className="text-slate/60">DIRECT:</span> INQUIRY@DESIGNARK.COM</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
