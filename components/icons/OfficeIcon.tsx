import React from 'react';

const OfficeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 18h16"></path>
   <path d="M5 18v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v12"></path>
   <path d="M9 14h6"></path>
   <path d="M12 11v3"></path>
  </svg>
);

export default OfficeIcon;
