import { useState, useEffect } from "react";

export const AnimatedFly = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setPosition({
          x: 20 + Math.random() * 60,
          y: 30 + Math.random() * 40,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-24 h-24 overflow-visible">
      <div
        className="absolute transition-all duration-[2000ms] ease-in-out cursor-pointer"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative group ${isHovered ? 'animate-pulse' : ''}`}>
          {/* Fly body */}
          <div className="w-3 h-6 bg-slate-200 rounded-full relative">
            {/* Wings */}
            <div className="absolute -left-2 top-1 w-4 h-2 bg-slate-300/70 rounded-full animate-[wiggle_0.3s_ease-in-out_infinite] origin-[100%_50%]"></div>
            <div className="absolute -right-2 top-1 w-4 h-2 bg-slate-300/70 rounded-full animate-[wiggle_0.3s_ease-in-out_infinite] origin-[0%_50%]"></div>
            
            {/* Eyes */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full"></div>
          </div>
          
          {/* Hover tooltip */}
          {isHovered && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in border border-slate-600">
              👋 Hey there!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
