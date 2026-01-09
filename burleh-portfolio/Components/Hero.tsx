
import React from 'react';

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = 1 + scrollY / 2000;

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#f6f8fa]">
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ transform: `scale(${scale})` }}
      >
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=10" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-10 text-center px-4" style={{ opacity }}>
        <h1 className="text-sm font-mono uppercase tracking-[0.4em] mb-8 text-gray-400">
          Metasphere Landscape Photographer
        </h1>
        <div className="text-6xl md:text-[10rem] font-light leading-none tracking-tighter">
          <span className="block">SCULPTING</span>
          <span className="block italic text-gray-300">WITH LIGHT</span>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="max-w-md text-lg text-gray-500 font-light leading-relaxed">
            Burleh Leonard documents the architecture and atmosphere of Second Life's most visionary regions.
          </p>
          <div className="animate-bounce mt-12">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
