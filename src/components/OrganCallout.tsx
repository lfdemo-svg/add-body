import { useState } from 'react';

interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface OrganCalloutProps {
  label: string;
  position: Position;
  connectorDirection: 'left' | 'right' | 'up' | 'down';
  onClick?: () => void;
  delay?: number;
}

export default function OrganCallout({
  label,
  position,
  connectorDirection,
  onClick,
  delay = 0,
}: OrganCalloutProps) {
  const [isHovered, setIsHovered] = useState(false);

  const connectorLength = 80;
  const nodeRadius = 5;

  const getConnectorPath = () => {
    switch (connectorDirection) {
      case 'left':
        return {
          width: connectorLength + nodeRadius * 2,
          height: 20,
          linePath: `M ${connectorLength + nodeRadius * 2} 10 L ${nodeRadius * 2} 10`,
          nodePosition: { cx: nodeRadius, cy: 10 },
          svgPosition: { right: '100%', top: '50%', transform: 'translateY(-50%)' },
        };
      case 'right':
        return {
          width: connectorLength + nodeRadius * 2,
          height: 20,
          linePath: `M 0 10 L ${connectorLength} 10`,
          nodePosition: { cx: connectorLength + nodeRadius, cy: 10 },
          svgPosition: { left: '100%', top: '50%', transform: 'translateY(-50%)' },
        };
      default:
        return {
          width: connectorLength + nodeRadius * 2,
          height: 20,
          linePath: `M ${connectorLength + nodeRadius * 2} 10 L ${nodeRadius * 2} 10`,
          nodePosition: { cx: nodeRadius, cy: 10 },
          svgPosition: { right: '100%', top: '50%', transform: 'translateY(-50%)' },
        };
    }
  };

  const connector = getConnectorPath();

  return (
    <div
      className="absolute flex items-center opacity-0 animate-fade-in"
      style={{
        ...position,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <svg
        width={connector.width}
        height={connector.height}
        className="absolute"
        style={connector.svgPosition as React.CSSProperties}
      >
        <path
          d={connector.linePath}
          className={`connector-line transition-all duration-200 ${
            isHovered ? 'stroke-[3px]' : ''
          }`}
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{
            animation: `drawLine 0.8s ease-out ${delay + 200}ms forwards`,
          }}
        />
        <circle
          cx={connector.nodePosition.cx}
          cy={connector.nodePosition.cy}
          r={nodeRadius}
          className={`connector-node transition-all duration-200 ${
            isHovered ? 'r-[7px]' : ''
          }`}
          style={{
            opacity: 0,
            animation: `fadeIn 0.3s ease-out ${delay + 600}ms forwards`,
          }}
        />
      </svg>

      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          px-4 py-2 rounded-pill border text-[11px] font-bold tracking-[0.08em] uppercase
          transition-all duration-200 ease-out
          ${isHovered
            ? 'bg-accent-cyan text-[#063B55] border-accent-cyan shadow-[0_0_20px_rgba(68,230,253,0.55)]'
            : 'bg-black/5 text-white/90 border-accent-cyan'
          }
        `}
      >
        {label}
      </button>
    </div>
  );
}
