
import React from 'react';

interface BioProps {
  scrollY: number;
}

export const Bio: React.FC<BioProps> = ({ scrollY }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8 md:px-0 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-12">
          01 — The Vision
        </h2>
        <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-gray-800">
          Burleh Leonard is the <span className="text-gray-400">visual architect</span> of Second Life's most compelling stories. Through a lens of 
          <span className="italic"> high-fidelity realism</span> and emotional depth, his work transcends the digital medium, finding the 
          <span className="text-gray-400"> soul in the code</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold">Candid Immersion</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              I don't just take pictures. I capture moments that shouldn't exist—brief flashes of humanity within a synthetic world. Every frame is a study in lighting, texture, and digital emotion.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold">Editorial Precision</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              My process mirrors real-world fashion photography. From location scouting across the grid to post-production color grading that defies the expectations of the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
