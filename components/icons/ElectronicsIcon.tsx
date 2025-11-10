import React from 'react';

const ElectronicsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 18h.01"></path>
   <path d="M7 18h.01"></path>
   <path d="M17 18h.01"></path>
   <path d="M7 6h10"></path>
   <path d="M10 6v-1h4v1"></path>
   <path d="M6 9h12v7a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-7z"></path>
  </svg>
);

export default ElectronicsIcon;
