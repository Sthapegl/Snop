import React from 'react';

const SeasonalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 4l2 1l2 -1l-2 -1z"></path>
   <path d="M12 21l-2.121 -2.121"></path>
   <path d="M14.121 18.879l-2.121 -2.121"></path>
   <path d="M18.879 14.121l-2.121 -2.121"></path>
   <path d="M21 12l-2.121 -2.121"></path>
   <path d="M18.879 9.879l-2.121 -2.121"></path>
   <path d="M14.121 5.121l-2.121 -2.121"></path>
   <path d="M9.879 5.121l-2.121 2.121"></path>
   <path d="M5.121 9.879l-2.121 2.121"></path>
   <path d="M3 12l2.121 2.121"></path>
   <path d="M5.121 14.121l2.121 2.121"></path>
   <path d="M9.879 18.879l2.121 2.121"></path>
  </svg>
);

export default SeasonalIcon;
