
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Bio } from './components/Bio';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('Intro');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['intro', 'vision', 'work', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect active section when it occupies the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="intro">
          <Hero scrollY={scrollY} />
        </section>
        
        <section id="vision">
          <Bio scrollY={scrollY} />
        </section>
        
        <section id="work">
          <Gallery scrollY={scrollY} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="p-8 md:p-16 border-t border-gray-200 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="text-8xl md:text-[12rem] font-light tracking-tighter leading-none select-none">
            BURLEH
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
            <span>© 2024 Burleh Leonard</span>
            <span>Second Life Photography</span>
            <div className="flex gap-4 mt-4 text-gray-800">
              <a href="https://www.flickr.com/photos/124293992@N06/" target="_blank" rel="noopener noreferrer" className="hover:underline">Flickr</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">X (Twitter)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
