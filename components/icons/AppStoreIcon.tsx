import React from 'react';

const AppStoreIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 300 100" preserveAspectRatio="xMinYMin meet">
    <a href="#" target="_blank">
      <rect width="300" height="100" rx="20" fill="#000000" />
      <text x="150" y="60" fontSize="30" fill="white" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
        Download on the
      </text>
      <text x="150" y="30" fontSize="25" fill="white" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif">
        App Store
      </text>
    </a>
  </svg>
);

export default AppStoreIcon;