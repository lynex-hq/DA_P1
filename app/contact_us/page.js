import Image from 'next/image';
import { images } from '@/lib/images';
import { submitEnquiry } from './actions';

export const metadata = {
  title: 'DESIGN ARK // Coordinates & Contact Inquiry',
  description:
    'Start a project with Design Ark — send an enquiry, call or WhatsApp the studio directly, or find our Colombo, New York and Zurich locations.',
};

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
              {/* Numbers/email/addresses below are placeholder studio data carried
                  over from the original design brief — swap for the client's real
                  details, then these tel:/mailto:/maps links keep working as-is. */}
              <p><span className="text-slate/60">COLOMBO:</span> <a href="tel:+94112345678" className="hover:text-secondary transition-colors">+94 11 234 5678</a></p>
              <p><span className="text-slate/60">NEW YORK:</span> <a href="tel:+12129876543" className="hover:text-secondary transition-colors">+1 212 987 6543</a></p>
              <p><span className="text-slate/60">ZURICH:</span> <a href="tel:+41441234567" className="hover:text-secondary transition-colors">+41 44 123 4567</a></p>
              <p><span className="text-slate/60">DIRECT:</span> <a href="mailto:inquiry@designark.com" className="hover:text-secondary transition-colors">INQUIRY@DESIGNARK.COM</a></p>
            </div>

            <div className="panel-ivory-alt p-6 border border-slate/15 space-y-3 font-technical-label text-xs">
              <div className="text-secondary font-bold tracking-widest mb-1">STUDIO ADDRESSES</div>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=142+Tectonic+Way%2C+Colombo+03%2C+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  COLOMBO // 142 Tectonic Way, District 03 ↗
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=450+Hudson+Street%2C+Suite+800%2C+New+York"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  NEW YORK // 450 Hudson Street, Suite 800 ↗
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Basaltstrasse+12%2C+8001+Zurich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  ZURICH // Basaltstrasse 12, 8001 ↗
                </a>
              </p>
              <p className="pt-2 text-[10px] text-slate/50 normal-case tracking-normal">
                Addresses are placeholder studio locations pending the client&apos;s real details — links open a Google Maps search for the text shown.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
