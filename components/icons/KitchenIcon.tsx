import React from 'react';

const KitchenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 12h1a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2 -2z"></path>
   <path d="M15 12h1a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2 -2z"></path>
   <path d="M3 5h18"></path>
   <path d="M4 5v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-11"></path>
   <path d="M12 5v-1"></path>
  </svg>
);

export default KitchenIcon;
