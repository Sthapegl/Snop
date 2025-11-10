import React from 'react';

const PetsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 16l-4.5 -4.5"></path>
   <path d="M15 5l-1.5 1.5"></path>
   <path d="M21.121 21.121a3 3 0 0 1 -4.242 0c-2.487 -2.487 -3.286 -6.347 -2.88 -9.88l-4.114 -4.113a3 3 0 0 1 0 -4.243a3 3 0 0 1 4.242 0l4.114 4.113c3.533 .407 7.393 -.4 9.88 -2.88a3 3 0 0 1 0 4.242l-5.657 5.657z"></path>
  </svg>
);

export default PetsIcon;
