
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor flex items-center justify-center transition-transform duration-300 hidden md:flex ${isHovering ? 'scale-[2.5] bg-white mix-blend-difference border-none' : 'scale-100'}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(2.5)' : 'scale(1)'}` 
      }}
    >
        {isHovering && <span className="text-[4px] uppercase font-bold text-black opacity-0">CLICK</span>}
    </div>
  );
};