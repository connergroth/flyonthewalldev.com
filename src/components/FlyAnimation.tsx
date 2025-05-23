import React, { useEffect, useRef, useState } from 'react';
import FlySVG from './FlySVG';
import BackgroundShapes from './BackgroundShapes';
import '../styles/animations.css';

const FlyAnimation: React.FC = () => {
  const [isLanded, setIsLanded] = useState(false);
  const [landingPosition, setLandingPosition] = useState({ x: 0, y: 0 });
  const [landingSurface, setLandingSurface] = useState<'wall' | 'title'>('wall');
  
  // Use refs instead of state to avoid re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const flyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const previousPositions = useRef<Array<{x: number, y: number}>>([]);
  const frameCount = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const restingTimeRef = useRef<number>(0);
  
  // Flight parameters - slower and more erratic
  const baseSpeed = 0.5; // base pixels per frame 
  const speedVariation = 1.5; // random variation
  const turnChance = 0.08; // increased probability of changing direction
  const maxTurn = Math.PI / 6; // increased maximum turn angle
  const directionRef = useRef<number>(Math.random() * Math.PI * 2); // Initial random direction
  const buzzingRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  
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
      
      const shouldLand = Math.random() > 0.3; // 40% chance to land (increased from 30%)

      if (shouldLand && containerRef.current) {
        // Decide where to land - on walls or title
        const landOnTitle = Math.random() > 0.7 && titleRef.current;
        
        if (landOnTitle && titleRef.current) {
          // Land on title
          const titleRect = titleRef.current.getBoundingClientRect();
          const x = Math.random() * titleRect.width - titleRect.width / 2;
          const y = Math.random() * titleRect.height - titleRect.height / 2;
          setLandingPosition({ x, y });
          setLandingSurface('title');
        } else {
          // Land on a wall
          const rect = containerRef.current.getBoundingClientRect();
          const halfWidth = rect.width / 2;
          const halfHeight = rect.height / 2;
          
          // Choose which wall to land on
          const wallChoices = [
            { x: Math.random() * (rect.width - 40) - halfWidth + 20, y: -halfHeight + 10 }, // top
            { x: Math.random() * (rect.width - 40) - halfWidth + 20, y: halfHeight - 10 }, // bottom
            { x: -halfWidth + 10, y: Math.random() * (rect.height - 40) - halfHeight + 20 }, // left
            { x: halfWidth - 10, y: Math.random() * (rect.height - 40) - halfHeight + 20 } // right
          ];
          
          const wallIdx = Math.floor(Math.random() * 4);
          setLandingPosition(wallChoices[wallIdx]);
          setLandingSurface('wall');
        }
        
        setIsLanded(true);
        
        // Random resting time - longer than before (4-8 seconds)
        const restTime = 4000 + Math.random() * 4000;
        restingTimeRef.current = Date.now() + restTime;
        
        setTimeout(() => {
          setIsLanded(false);
        }, restTime);
      }
    }, 5000); // Check less frequently (5s instead of 3s)

    return () => {
      clearInterval(landingInterval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Run only once on mount
  
  // Update the trail path update logic in the animation function
  const updateTrailPath = () => {
    if (pathRef.current && frameCount.current % 3 === 0 && !isLanded) {
      // Add current position to trail with buzzing effect applied
      previousPositions.current.push({
        x: positionRef.current.x + buzzingRef.current.x, 
        y: positionRef.current.y + buzzingRef.current.y
      });
      
      // Keep only last 40 positions for better performance
      if (previousPositions.current.length > 40) {
        previousPositions.current.shift();
      }
      
      if (previousPositions.current.length > 1) {
        // Generate path data using quadratic curves for smoother trail
        let pathData = `M${previousPositions.current[0].x},${previousPositions.current[0].y}`;
        
        for (let i = 1; i < previousPositions.current.length - 1; i++) {
          const xc = (previousPositions.current[i].x + previousPositions.current[i + 1].x) / 2;
          const yc = (previousPositions.current[i].y + previousPositions.current[i + 1].y) / 2;
          pathData += ` Q${previousPositions.current[i].x},${previousPositions.current[i].y} ${xc},${yc}`;
        }
        
        // Add the last point
        const lastPoint = previousPositions.current[previousPositions.current.length - 1];
        pathData += ` L${lastPoint.x},${lastPoint.y}`;
        
        // Update the path with smooth transition
        pathRef.current.setAttribute('d', pathData);
        
        // Add fade effect to older parts of the trail
        const fadeStart = Math.max(0, previousPositions.current.length - 20);
        const fadeEnd = previousPositions.current.length;
        
        if (fadeStart < fadeEnd) {
          pathRef.current.classList.add('fly-trail-fade');
        } else {
          pathRef.current.classList.remove('fly-trail-fade');
        }
      }
    }
  };

  // Update the animation function to use the new trail update
  const startAnimation = () => {
    const updateFlyPosition = () => {
      if (!isLanded && containerRef.current && flyRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        
        // Randomly change direction sometimes
        if (Math.random() < turnChance) {
          // More dramatic turns sometimes
          if (Math.random() < 0.2) {
            // Sharp turn
            directionRef.current += (Math.random() * 2 - 1) * maxTurn * 2;
          } else {
            // Normal turn
            directionRef.current += (Math.random() * 2 - 1) * maxTurn;
          }
        }
        
        // Occasional pause mid-air (hovering)
        const isHovering = Math.random() < 0.005; // 0.5% chance per frame
        
        // Calculate speed with more variation
        const speed = isHovering ? 0.2 : baseSpeed + Math.random() * speedVariation;
        
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
        
        // Add small random buzzing effect (small figure-8 like movements)
        buzzingRef.current.x = Math.sin(frameCount.current * 0.2) * 1.5;
        buzzingRef.current.y = Math.sin(frameCount.current * 0.3) * 1.5;
        
        // Update position ref (no state update to avoid re-renders)
        positionRef.current = { x: newX, y: newY };
        
        // Update fly position directly with buzzing effect
        flyRef.current.style.transform = `translate(${positionRef.current.x + buzzingRef.current.x}px, ${positionRef.current.y + buzzingRef.current.y}px) rotate(${directionRef.current}rad)`;
      } else if (isLanded && flyRef.current) {
        // Subtle movement when landed (slight buzzing)
        const now = Date.now();
        const restTimeRemaining = restingTimeRef.current - now;
        const restProgress = Math.max(0, 1 - restTimeRemaining / 4000);
        
        // Increase movement as the fly is about to take off
        const buzzAmplitude = restProgress < 0.7 ? 0.4 : 0.4 + (restProgress - 0.7) * 3;
        
        // Small buzzing even when landed
        const landedBuzzX = Math.sin(frameCount.current * 0.1) * buzzAmplitude;
        const landedBuzzY = Math.sin(frameCount.current * 0.15) * buzzAmplitude;
        
        flyRef.current.style.transform = `translate(${landingPosition.x + landedBuzzX}px, ${landingPosition.y + landedBuzzY}px) rotate(${landingSurface === 'wall' ? 0 : directionRef.current}rad)`;
      }
      
      // Update the trail path
      updateTrailPath();
      
      frameCount.current++;
      animationFrameId.current = requestAnimationFrame(updateFlyPosition);
    };
    
    animationFrameId.current = requestAnimationFrame(updateFlyPosition);
  };

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Path tracing for the dotted line trail */}
      <svg className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <defs>
          <linearGradient id="trailGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#222222" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#222222" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M0,0"
          fill="none"
          className="fly-trail motion-reduce:hidden"
        />
      </svg>
      
      {/* Fly */}
      <div
        ref={flyRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={isLanded ? 
          { transform: `translate(${landingPosition.x}px, ${landingPosition.y}px) rotate(${landingSurface === 'wall' ? 0 : directionRef.current}rad)` } : 
          { transform: `translate(${positionRef.current.x}px, ${positionRef.current.y}px) rotate(${directionRef.current}rad)` }
        }
      >
        <FlySVG isLanded={isLanded} />
      </div>
      
      {/* Background shapes */}
      <BackgroundShapes />
    </div>
  );
};

export default FlyAnimation;
