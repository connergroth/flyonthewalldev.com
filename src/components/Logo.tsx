import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '', variant = 'default' }) => {
  const isWhite = variant === 'white';
  const badgeColor = isWhite ? 'white' : 'currentColor';
  const flyColor = isWhite ? '#222222' : '#FFFFF0';  // Dark fly for white background, light fly for dark background
  const strokeColor = isWhite ? '#222222' : 'currentColor';
  
  const handleClick = (e: React.MouseEvent) => {
    // If we're already on the home page, scroll to top
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className={`inline-flex items-center hover:opacity-90 transition-opacity ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        aria-labelledby="flyLogoTitle"
        role="img"
      >
        <title id="flyLogoTitle">Fly on the Wall logo</title>

        {/* Badge - drawn first so it's behind everything */}
        <circle cx="12" cy="12" r="9" fill={badgeColor} />

        {/* Wings (upper pair) - drawn before body for layering */}
        <path
          d="M8.2 8.4Q5.9 7.5 4.1 8.6Q6.6 8.9 8.9 9.1"
          fill={flyColor}
          fillOpacity="0.9"
        />
        <path
          d="M15.8 8.4Q18.1 7.5 19.9 8.6Q17.4 8.9 15.1 9.1"
          fill={flyColor}
          fillOpacity="0.9"
        />

        {/* Wings (lower pair) */}
        <path
          d="M8.2 15.6Q5.9 16.5 4.1 15.4Q6.6 15.1 8.9 14.9"
          fill={flyColor}
          fillOpacity="0.9"
        />
        <path
          d="M15.8 15.6Q18.1 16.5 19.9 15.4Q17.4 15.1 15.1 14.9"
          fill={flyColor}
          fillOpacity="0.9"
        />

        {/* Fly body - drawn after wings */}
        <ellipse
          cx="12"
          cy="12"
          rx="3.4"
          ry="4"
          fill={flyColor}
          stroke={strokeColor}
          strokeWidth="0.3"
        />

        {/* Fly head - drawn after body */}
        <circle
          cx="15.4"
          cy="10.3"
          r="1.9"
          fill={flyColor}
          stroke={strokeColor}
          strokeWidth="0.3"
        />

        {/* Eyes - drawn last so they're on top */}
        <g fill={strokeColor}>
          <circle cx="16.1" cy="9.5" r="0.65" />
          <circle cx="16.1" cy="11.0" r="0.65" />
          {/* little highlight */}
          <circle cx="15.95" cy="9.35" r="0.2" fill={isWhite ? 'white' : '#FFFFF0'} />
          <circle cx="15.95" cy="10.85" r="0.2" fill={isWhite ? 'white' : '#FFFFF0'} />
        </g>
      </svg>

      {/* Wordmark */}
      <span className="font-display font-bold">Fly on the Wall</span>
    </Link>
  );
};

export default Logo;
