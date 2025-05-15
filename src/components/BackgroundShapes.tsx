import React from 'react';

const BackgroundShapes: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute top-1/2 left-1/2 w-[clamp(3rem,4vw,4rem)] h-[clamp(3rem,4vw,4rem)] rounded-xl bg-blue-400/30 transform -translate-x-1/2 -translate-y-1/2 animate-float"
      />
      <div 
        className="absolute top-1/3 left-1/3 w-[clamp(2.5rem,3vw,3rem)] h-[clamp(2.5rem,3vw,3rem)] rounded-full bg-green-400/30 transform -translate-x-1/2 -translate-y-1/2 animate-float-delayed"
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-[clamp(2.75rem,3.5vw,3.5rem)] h-[clamp(2.75rem,3.5vw,3.5rem)] rounded-lg bg-orange-400/30 transform translate-x-1/2 translate-y-1/2 animate-float-right"
      />
    </div>
  );
};

export default BackgroundShapes; 