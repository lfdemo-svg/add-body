interface OrganLabelProps {
  label: string;
  position: 'top-right' | 'middle-right';
  delay?: number;
}

export default function OrganLabel({ label, position, delay = 0 }: OrganLabelProps) {
  const positionClasses = {
    'top-right': 'top-[8%] right-[5%]',
    'middle-right': 'top-[28%] right-[3%]',
  };

  const lineConfig = {
    'top-right': {
      startX: 0,
      startY: 20,
      endX: -80,
      endY: 20,
    },
    'middle-right': {
      startX: 0,
      startY: 20,
      endX: -100,
      endY: 20,
    },
  };

  const line = lineConfig[position];

  return (
    <div
      className={`absolute ${positionClasses[position]} flex items-center gap-3 fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <svg
        width="120"
        height="40"
        className="absolute right-full mr-2"
        style={{ overflow: 'visible' }}
      >
        <line
          x1={line.startX + 110}
          y1={line.startY}
          x2={line.endX + 110}
          y2={line.endY}
          stroke="#4a9eda"
          strokeWidth="2"
          className="label-line"
          style={{ animationDelay: `${delay + 200}ms` }}
        />
        <circle
          cx={line.endX + 110}
          cy={line.endY}
          r="4"
          fill="#4a9eda"
          className="fade-in"
          style={{ animationDelay: `${delay + 400}ms` }}
        />
      </svg>
      <button
        className="px-6 py-2.5 rounded-full border-2 border-[#4a9eda]/60 bg-transparent
                   text-white text-sm font-semibold tracking-widest uppercase
                   hover:bg-[#4a9eda]/20 hover:border-[#4a9eda] transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-[#4a9eda]/50 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        {label}
      </button>
    </div>
  );
}
