import React, { useEffect, useRef, useState } from 'react';

const FlyAnimation: React.FC = () => {
  const [isLanded, setIsLanded] = useState(false);
  const [landingPosition, setLandingPosition] = useState({ x: 0, y: 0 });
  
  // Use refs instead of state to avoid re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const flyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const previousPositions = useRef<Array<{x: number, y: number}>>([]);
  const frameCount = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  
  // Flight parameters
  const baseSpeed = 5; // base pixels per frame
  const speedVariation = 2; // random variation
  const turnChance = 0.05; // probability of changing direction each frame
  const maxTurn = Math.PI / 8; // maximum turn angle in radians
  const directionRef = useRef<number>(Math.random() * Math.PI * 2); // Initial random direction
  
  // Initialize fly position
  useEffect(() => {
    // Get a reference to the title element
    titleRef.current = document.querySelector('h1') as HTMLHeadingElement;
    
    // Initialize random starting position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      positionRef.current = {
        x: Math.random() * rect.width - rect.width / 2,
        y: Math.random() * rect.height - rect.height / 2
      };
    }
    
    // Start the animation immediately
    startAnimation();
    
    // Landing interval logic
    const landingInterval = setInterval(() => {
      if (isLanded) return; // Skip if already landed
      
      const shouldLand = Math.random() > 0.7; // 30% chance to land

      if (shouldLand && titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        // Pick a random spot on the title
        const x = Math.random() * titleRect.width - titleRect.width / 2;
        const y = Math.random() * titleRect.height - titleRect.height / 2;
        setLandingPosition({ x, y });
        setIsLanded(true);
        
        // Take off after 2-4 seconds
        setTimeout(() => {
          setIsLanded(false);
        }, 2000 + Math.random() * 2000);
      }
    }, 3000); // Check every 3 seconds

    return () => {
      clearInterval(landingInterval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Run only once on mount
  
  // Handle landing state change
  useEffect(() => {
    if (isLanded) {
      // Don't cancel animation frame, just stop updating position
    } else {
      // No need to restart animation since we never stopped it
    }
  }, [isLanded]);
  
  // Animation function
  const startAnimation = () => {
    const updateFlyPosition = () => {
      if (!isLanded && containerRef.current && flyRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        
        // Randomly change direction sometimes
        if (Math.random() < turnChance) {
          directionRef.current += (Math.random() * 2 - 1) * maxTurn;
        }
        
        // Calculate speed with some variation
        const speed = baseSpeed + Math.random() * speedVariation;
        
        // Calculate new position
        let newX = positionRef.current.x + Math.cos(directionRef.current) * speed;
        let newY = positionRef.current.y + Math.sin(directionRef.current) * speed;
        
        // Bounce off edges with new direction
        if (newX < -halfWidth || newX > halfWidth) {
          directionRef.current = Math.PI - directionRef.current;
          newX = Math.max(-halfWidth, Math.min(halfWidth, newX));
        }
        
        if (newY < -halfHeight || newY > halfHeight) {
          directionRef.current = -directionRef.current;
          newY = Math.max(-halfHeight, Math.min(halfHeight, newY));
        }
        
        // Update position ref (no state update to avoid re-renders)
        positionRef.current = { x: newX, y: newY };
        
        // Update fly position directly
        flyRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) rotate(${directionRef.current}rad)`;
      }
      
      // Always update path regardless of landed state to ensure continuous trail
      if (pathRef.current && frameCount.current % 2 === 0) {
        // Add current position to trail
        previousPositions.current.push({...positionRef.current});
        
        // Keep only last 40 positions for longer trail
        if (previousPositions.current.length > 40) {
          previousPositions.current.shift();
        }
        
        if (previousPositions.current.length > 1) {
          // Create path
          let pathData = `M${previousPositions.current[0].x},${previousPositions.current[0].y}`;
          for (let i = 1; i < previousPositions.current.length; i++) {
            pathData += ` L${previousPositions.current[i].x},${previousPositions.current[i].y}`;
          }
          pathRef.current.setAttribute('d', pathData);
        }
      }
      
      frameCount.current++;
      // Always continue the animation loop
      animationFrameId.current = requestAnimationFrame(updateFlyPosition);
    };
    
    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(updateFlyPosition);
  };

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full overflow-visible pointer-events-none">
      {/* Path tracing */}
      <svg className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 overflow-visible">
        <path
          ref={pathRef}
          d="M0,0"
          fill="none"
          stroke="#222222"
          strokeWidth="2"
          strokeDasharray="4,3"
          strokeLinecap="round"
          strokeOpacity="0.6"
          className="motion-reduce:hidden"
        />
      </svg>
      
      {/* Fly */}
      <div
        ref={flyRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={isLanded ? 
          { transform: `translate(${landingPosition.x}px, ${landingPosition.y}px)` } : 
          { transform: `translate(${positionRef.current.x}px, ${positionRef.current.y}px) rotate(${directionRef.current}rad)` }
        }
      >
        <svg width="30" height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
          {/* Fly body */}
          <ellipse cx="10" cy="8" rx="4" ry="5" fill="#222222" />
          
          {/* Fly head */}
          <circle cx="14" cy="6" r="2.5" fill="#222222" />
          
          {/* Fly wings - top */}
          <path d="M8 5C6 3 3 3 1 4C3 5 5 5 8 5Z" fill="#555555" fillOpacity="0.7" />
          <path d="M12 5C14 3 17 3 19 4C17 5 15 5 12 5Z" fill="#555555" fillOpacity="0.7" />
          
          {/* Fly wings - bottom */}
          <path d="M8 11C6 13 3 13 1 12C3 11 5 11 8 11Z" fill="#555555" fillOpacity="0.7" />
          <path d="M12 11C14 13 17 13 19 12C17 11 15 11 12 11Z" fill="#555555" fillOpacity="0.7" />
          
          {/* Fly eyes */}
          <circle cx="15" cy="5" r="0.8" fill="white" />
          <circle cx="15" cy="7" r="0.8" fill="white" />
        </svg>
      </div>
      
      {/* Abstract shapes in background (from original component) */}
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-opacity-30 bg-blue-400 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-opacity-30 bg-green-400 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-lg bg-opacity-30 bg-fly-accent animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default FlyAnimation;
