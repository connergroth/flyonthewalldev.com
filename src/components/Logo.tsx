import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor" />
        <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="#FFFFF0" className="dark:fill-white" />
        <path d="M15 15C15 16.1046 13.6569 17 12 17C10.3431 17 9 16.1046 9 15C9 13.8954 10.3431 13 12 13C13.6569 13 15 13.8954 15 15Z" fill="#FFFFF0" className="dark:fill-white" />
      </svg>
      <span className="font-display font-bold">Fly on the Wall</span>
    </div>
  );
};

export default Logo; 