
import React from 'react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-light tracking-tighter"
        >
          BURLEH <span className="text-gray-400">LEONARD</span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-12 font-mono text-[10px] uppercase tracking-widest pointer-events-auto">
        {['Intro', 'Vision', 'Work', 'Contact'].map((item) => {
          const sectionId = item.toLowerCase();
          return (
            <a 
              key={item} 
              href={`#${sectionId}`}
              onClick={(e) => handleScroll(e, sectionId)}
              className={`transition-colors duration-500 hover:text-gray-400 ${activeSection === item ? 'text-gray-800' : 'text-gray-300'}`}
            >
              {item}
            </a>
          );
        })}
      </div>

      <div className="pointer-events-auto font-mono text-[10px] uppercase tracking-widest text-gray-400">
        Status: <span className="text-green-500">Available</span>
      </div>
    </nav>
  );
};
