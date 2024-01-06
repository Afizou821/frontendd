import React from 'react';

const ScrollText = () => {
  return (
    <div className="bg-red-200 z-10 relative w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="whitespace-nowrap overflow-hidden animate-marquee">
          <span className="text-2xl font-bold text-black">
            Votre texte qui défile de gauche à droite...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
