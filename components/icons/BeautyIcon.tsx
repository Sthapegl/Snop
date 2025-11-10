import React from 'react';

const BeautyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 6h.01"></path>
   <path d="M15.5 10.5a3.5 3.5 0 1 0 -5 0a3.5 3.5 0 1 0 5 0z"></path>
   <path d="M17.5 15.5a2.5 2.5 0 1 0 -5 0a2.5 2.5 0 1 0 5 0z"></path>
   <path d="M8.5 15.5a2.5 2.5 0 1 0 -5 0a2.5 2.5 0 1 0 5 0z"></path>
  </svg>
);

export default BeautyIcon;
