
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', location: '', message: '' });

  return (
    <div className="bg-[#f6f8fa] min-h-screen py-32 px-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">03 — Commissions</h2>
          <div className="text-5xl md:text-7xl font-light tracking-tighter mb-8 uppercase">Sim Landscapes</div>
          <p className="text-gray-500 font-light text-lg">
            I specialize in capturing the soul of Second Life regions. If you own a sim with a unique vision, I’d love to document its atmosphere and light.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">Prefer Flickr?</p>
            <a 
              href="https://www.flickr.com/photos/124293992@N06/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-light hover:text-gray-400 transition-colors"
            >
              Contact me via Flickr Mail 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <form className="space-y-12">
          <div className="relative border-b border-gray-300 focus-within:border-gray-800 transition-colors py-4">
            <input 
              type="text"
              id="name"
              placeholder=" "
              className="w-full bg-transparent outline-none text-2xl font-light pt-4 peer"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 top-0 text-xs font-mono uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Your Name
            </label>
          </div>

          <div className="relative border-b border-gray-300 focus-within:border-gray-800 transition-colors py-4">
            <input 
              type="text"
              id="location"
              placeholder=" "
              className="w-full bg-transparent outline-none text-2xl font-light pt-4 peer"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
            <label 
              htmlFor="location" 
              className="absolute left-0 top-0 text-xs font-mono uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Region Name / LM
            </label>
          </div>

          <div className="relative border-b border-gray-300 focus-within:border-gray-800 transition-colors py-4">
            <textarea 
              id="message"
              placeholder=" "
              className="w-full bg-transparent outline-none text-xl font-light pt-4 peer min-h-[100px] resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-0 top-0 text-xs font-mono uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Tell me about your sim's concept
            </label>
          </div>

          <div className="flex justify-center mt-16">
            <button 
              type="submit"
              className="group relative px-12 py-6 overflow-hidden rounded-full border border-gray-800 transition-colors hover:text-white"
            >
              <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-sm font-mono uppercase tracking-widest">Request Landscape Session</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
