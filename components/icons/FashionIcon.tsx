
import React from 'react';

const FashionIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M16 18a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2a2 2 0 0 1 2 -2a2 2 0 0 1 2 2z"></path>
   <path d="M12.5 11.5l-3.5 -1.5"></path>
   <path d="M15 5l-3.5 1.5l-3.5 -1.5l-2 8l4.5 2.5l2 -1.5l1.5 1.5l2 -4l-5 -2.5z"></path>
 </svg>
);

export default FashionIcon;
