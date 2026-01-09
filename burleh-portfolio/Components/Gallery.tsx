
import React, { useState, useRef, useEffect } from 'react';

interface GalleryProps {
  scrollY: number;
}

/**
 * ---------------------------------------------------------------------------
 * IMAGE PLACEHOLDERS (Starting Line 16)
 * ---------------------------------------------------------------------------
 * To add your own pictures:
 * Replace the 'url' values below with your direct links from Flickr.
 * IMPORTANT: Link must end in .jpg or .png (Right-click image > Copy Image Address)
 */
const IMAGES = [
  { 
    id: 1, 
    title: 'Ꮻꭱꮯꮖɴꮜꮪ Ꮖꮪꮮꭼ', 
    category: 'Landscape', 
    url: 'https://live.staticflickr.com/65535/53097671689_90c748c48d_b.jpg' 
  },
  { id: 2, title: 'Nꮻꭱꭰꮪꮋꮻꭱꭼ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/52911876771_0718a82f53_b.jpg' },
  { id: 3, title: 'Ꮪꭼꭱꭼɴꮖꭲꭹ Ꮻꮖꮮꭼꭺ́ꮖɴ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/53153485930_e07a9e685d_b.jpg' },
  { id: 4, title: 'Ꭼɴꭰꮮꭼꮪꮪ Ᏼꮖꭱꭰꮮꮖɴꮐꮪ Fꮮꭺꭲ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/52812586446_a0fa426bba_b.jpg' },
  { id: 5, title: 'Nꭺꭲꭲꮋꮖꮇꮇꭼꮮ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/53092093503_4d41d0807c_b.jpg' },
  { id: 6, title: 'Ꮖꮪꮮꭼ ꮻF Ꮇꭺꭹ', category: 'Atmosphere', url: 'https://live.staticflickr.com/65535/52431507659_baaf4ab8b1_b.jpg' },
  { id: 7, title: 'Ꮪꭺꮶꭱꮖꮪꮻꭹꭺ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/55011784424_67b2666411_b.jpg' },
  { id: 8, title: 'Ꭰꭱꮻɴꭼ Ꮋꭺꮩꭼɴ', category: 'Atmosphere', url: 'https://live.staticflickr.com/65535/54317051435_ee8ac79190_b.jpg' },
  { id: 9, title: 'Ꭼꮩꭼꭱꮇꮻꭱꭼ Ꭲꮋꭼ Fꮻꮮꮶꮮꮻꭱꭼ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/54017853442_8aa95e6f7a_b.jpg' },
  { id: 10, title: 'Ꮪꮲꭺꭱꮶꮮꭼ Ꭼɴꮯꮋꭺɴꭲꭼꭰ', category: 'Landscape', url: 'https://live.staticflickr.com/65535/53985750430_db8eaef0a3_b.jpg' },
];

export const Gallery: React.FC<GalleryProps> = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedImg, setSelectedImg] = useState<typeof IMAGES[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1e272d] text-white py-32 px-4 md:px-0 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">02 — Selected Works</h2>
            <div className="text-5xl md:text-7xl font-light tracking-tighter uppercase">Portfolio Carousel</div>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar px-4 md:px-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {IMAGES.map((img) => (
          <div 
            key={img.id}
            className="flex-none w-[85vw] md:w-[60vw] snap-center group"
            onMouseEnter={() => setHoveredId(img.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div 
              className="overflow-hidden aspect-[16/10] relative rounded-sm cursor-none"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${hoveredId === img.id ? 'scale-105' : 'scale-100'}`}
              />
              
              <div className={`absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-32 h-32 glass-container flex items-center justify-center border-white/20 pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Detail</span>
                 </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-start border-b border-white/10 pb-6">
              <div>
                <h3 className="text-2xl font-light tracking-wide">{img.title}</h3>
                <p className="text-[10px] font-mono text-gray-500 uppercase mt-2 tracking-[0.2em]">{img.category}</p>
              </div>
              <div className="text-xs font-mono text-gray-500">IMAGE {img.id.toString().padStart(2, '0')} / 10</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="absolute top-10 right-10 text-white cursor-pointer hover:text-gray-400 z-[210]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </div>
          
          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg.url} 
              alt={selectedImg.title}
              className="object-contain max-h-[75vh] shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h4 className="text-xl font-light tracking-widest uppercase">{selectedImg.title}</h4>
              <p className="text-xs font-mono text-gray-500 uppercase mt-2">{selectedImg.category}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center md:hidden">
        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Swipe to explore grid</p>
      </div>
    </div>
  );
};
