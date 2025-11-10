
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center space-x-1.5 text-center">
      <div className="bg-brand-orange text-white p-1.5 rounded-md">
        <span className="font-bold text-sm">{formatTime(hours)}</span>
      </div>
      <span className="font-bold text-brand-orange">:</span>
      <div className="bg-brand-orange text-white p-1.5 rounded-md">
        <span className="font-bold text-sm">{formatTime(minutes)}</span>
      </div>
      <span className="font-bold text-brand-orange">:</span>
      <div className="bg-brand-orange text-white p-1.5 rounded-md">
        <span className="font-bold text-sm">{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
