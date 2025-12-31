import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Left - Red */}
      <path d="M45 50V20C45 14.4772 40.5228 10 35 10H15C12.2386 10 10 12.2386 10 15V35C10 43.2843 16.7157 50 25 50H45Z" fill="#DC2626" />
      
      {/* Top Right - Green */}
      <path d="M55 50V20C55 14.4772 59.4772 10 65 10H85C87.7614 10 90 12.2386 90 15V35C90 43.2843 83.2843 50 75 50H55Z" fill="#16A34A" />
      
      {/* Bottom Left - Yellow/Gold */}
      <path d="M45 50V80C45 85.5228 40.5228 90 35 90H15C12.2386 90 10 87.7614 10 85V65C10 56.7157 16.7157 50 25 50H45Z" fill="#EAB308" />
      
      {/* Bottom Right - Blue */}
      <path d="M55 50V80C55 85.5228 59.4772 90 65 90H85C87.7614 90 90 87.7614 90 85V65C90 56.7157 83.2843 50 75 50H55Z" fill="#2563EB" />
    </svg>
  );
};

export default Logo;