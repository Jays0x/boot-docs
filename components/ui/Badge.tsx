import React from 'react';

interface BadgeProps {
  label: string;
  className?: string; // allow custom styling
}

function Badge({ label, className }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center bg-[#2C2C2C] h-[25px] px-3 rounded-[5px] border border-white/10 text-sm font-medium whitespace-normal max-w-[500px] ${className}`}
    >
      <p>{label}</p>
    </div>
  );
}

export default Badge;
