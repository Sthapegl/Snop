import React from 'react';

const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 300 100" preserveAspectRatio="xMinYMin meet">
    <a href="#" target="_blank">
      <rect width="300" height="100" rx="20" fill="#000000" />
      <text x="150" y="30" fontSize="20" fill="white" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif">
        GET IT ON
      </text>
      <text x="150" y="65" fontSize="35" fill="white" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
        Google Play
      </text>
    </a>
  </svg>
);

export default GooglePlayIcon;