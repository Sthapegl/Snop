import React from 'react';

const SportsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
   <path d="M12 21l-4 -4l-3 -3l5 -5"></path>
   <path d="M14.5 11.5l-2.5 2.5l5 5l2.5 -2.5l-5 -5z"></path>
   <path d="M7 10l-3 3l2 2l3 -3"></path>
  </svg>
);

export default SportsIcon;
