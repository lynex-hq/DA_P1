import { images } from '@/lib/images';
import Image from 'next/image';

const COLUMNS = [
  {
    plates: [
      { h: 'h-[30vh]', src: images.detailBed, alt: 'Bed' },
      { h: 'h-[22vh]', src: images.detailKitchen, alt: 'Kitchen' },
      { h: 'h-[26vh]', src: images.detailLaptop, alt: 'Laptop' },
      { h: 'h-[24vh]', src: images.detailStorage, alt: 'Storage' },
    ],
  },
  {
    plates: [
      { h: 'h-[24vh]', src: images.detailBooks, alt: 'Books' },
      { h: 'h-[32vh]', src: images.detailBlinds, alt: 'Blinds' },
      { h: 'h-[20vh]', src: images.detailDoors, alt: 'Doors' },
      { h: 'h-[27vh]', src: images.detailCandle, alt: 'Candle' },
    ],
  },
  {
    plates: [
      { h: 'h-[26vh]', src: images.detailSink, alt: 'Sink' },
      { h: 'h-[23vh]', src: images.detailChairs, alt: 'Chairs' },
      { h: 'h-[30vh]', src: images.detailCoffee, alt: 'Coffee' },
      { h: 'h-[22vh]', src: images.detailCoffeeTable, alt: 'Coffee table' },
    ],
  },
];

export default function DetailFeed() {
  return (
    <section id="sheet-07" className="detail-scroll-track w-full border-t border-slate/15" aria-label="Detail image grid">
      <div className="detail-sheet w-full">
        <div className="detail-columns">
          {COLUMNS.map((col, ci) => (
            <div key={ci} className="detail-col">
              {col.plates.map((plate) => (
                <figure key={plate.src} className={`detail-plate ${plate.h}`}>
                  <Image src={plate.src} alt={plate.alt} fill sizes="33vw" className="object-cover" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
