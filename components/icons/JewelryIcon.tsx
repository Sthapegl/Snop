
import React from 'react';

const JewelryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 6l-6 6l-3 -3l6 -6l3 3"></path>
   <path d="M12 12l6 6l3 -3l-6 -6l-3 3"></path>
  </svg>
);

export default JewelryIcon;
