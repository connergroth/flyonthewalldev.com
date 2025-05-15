import React from 'react';

interface FlySVGProps {
  isLanded: boolean;
}

const FlySVG: React.FC<FlySVGProps> = ({ isLanded }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
      {/* Fly body */}
      <ellipse
        cx="12"
        cy="12"
        rx="3.4"
        ry="4"
        fill="#222222"
        stroke="#111111"
        strokeWidth="0.3"
      />
      
      {/* Fly head */}
      <circle
        cx="15.4"
        cy="10.3"
        r="1.9"
        fill="#222222"
        stroke="#111111"
        strokeWidth="0.3"
      />
      
      {/* Wings (upper pair) */}
      <path
        d="M8.2 8.4Q5.9 7.5 4.1 8.6Q6.6 8.9 8.9 9.1"
        fill="#444444"
        fillOpacity="0.9"
        className={isLanded ? "" : "animate-pulse"}
      />
      <path
        d="M15.8 8.4Q18.1 7.5 19.9 8.6Q17.4 8.9 15.1 9.1"
        fill="#444444"
        fillOpacity="0.9"
        className={isLanded ? "" : "animate-pulse"}
      />
      
      {/* Wings (lower pair) */}
      <path
        d="M8.2 15.6Q5.9 16.5 4.1 15.4Q6.6 15.1 8.9 14.9"
        fill="#444444"
        fillOpacity="0.9"
        className={isLanded ? "" : "animate-pulse"}
      />
      <path
        d="M15.8 15.6Q18.1 16.5 19.9 15.4Q17.4 15.1 15.1 14.9"
        fill="#444444"
        fillOpacity="0.9"
        className={isLanded ? "" : "animate-pulse"}
      />
      
      {/* Eyes */}
      <g fill="#FFFFFF">
        <circle cx="16.1" cy="9.5" r="0.65" />
        <circle cx="16.1" cy="11.0" r="0.65" />
        {/* little highlight */}
        <circle cx="15.95" cy="9.35" r="0.2" fill="#999999" />
        <circle cx="15.95" cy="10.85" r="0.2" fill="#999999" />
      </g>
    </svg>
  );
};

export default FlySVG; 