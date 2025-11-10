import React from 'react';

const ToysIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 20v-4h8v4"></path>
   <path d="M12 4a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3 -3z"></path>
   <path d="M12 12h-2a2 2 0 0 0 -2 2v2h8v-2a2 2 0 0 0 -2 -2h-2z"></path>
  </svg>
);

export default ToysIcon;
