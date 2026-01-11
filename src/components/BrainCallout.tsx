import { useState } from 'react';

interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface BrainCalloutProps {
  label: string;
  position: Position;
  onClick?: () => void;
  delay?: number;
}

export default function BrainCallout({
  label,
  position,
  onClick,
  delay = 0,
}: BrainCalloutProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute opacity-0 animate-fade-in z-10"
      style={{
        ...position,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        transform: position.left === '50%' ? 'translateX(-50%)' : undefined,
      }}
    >
      <div className="relative flex flex-col items-center">
        <svg width="12" height="40" className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <line
            x1="6"
            y1="0"
            x2="6"
            y2="30"
            stroke="#44E6FD"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset="100"
            style={{
              animation: `drawLine 0.6s ease-out ${delay + 200}ms forwards`,
            }}
          />
          <circle
            cx="6"
            cy="36"
            r="5"
            fill="#44E6FD"
            style={{
              opacity: 0,
              animation: `fadeIn 0.3s ease-out ${delay + 500}ms forwards`,
            }}
          />
        </svg>

        <button
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-4 py-2 rounded-pill border text-[11px] font-bold tracking-[0.08em] uppercase
            whitespace-nowrap transition-all duration-200 ease-out
            ${isHovered
              ? 'bg-accent-cyan text-[#063B55] border-accent-cyan shadow-[0_0_20px_rgba(68,230,253,0.55)]'
              : 'bg-black/5 text-white/90 border-accent-cyan'
            }
          `}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
