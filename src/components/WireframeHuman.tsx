interface WireframeHumanProps {
  className?: string;
}

export default function WireframeHuman({ className = '' }: WireframeHumanProps) {
  return (
    <svg
      viewBox="0 0 400 700"
      className={`wireframe-glow ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a9eda" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2d7bb8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a5a8a" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff9999" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#cc6666" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7777" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#cc4444" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow)">
        <ellipse
          cx="200"
          cy="50"
          rx="35"
          ry="42"
          fill="none"
          stroke="url(#bodyGradient)"
          strokeWidth="1.5"
        />
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={`head-h-${i}`}
            cx="200"
            cy={20 + i * 8}
            rx={25 + Math.sin(i * 0.5) * 10}
            ry="3"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="0.8"
            opacity={0.6 + i * 0.05}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <path
            key={`head-v-${i}`}
            d={`M ${175 + i * 10} 15 Q ${175 + i * 10} 50, ${175 + i * 10} 85`}
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="0.6"
            opacity={0.5}
          />
        ))}

        <ellipse
          cx="200"
          cy="45"
          rx="18"
          ry="20"
          fill="url(#brainGradient)"
          opacity="0.7"
          className="organ-highlight"
        />
        <path
          d="M 185 40 Q 195 35, 200 42 Q 205 35, 215 40"
          fill="none"
          stroke="#ffaaaa"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <path
          d="M 188 48 Q 200 55, 212 48"
          fill="none"
          stroke="#ffaaaa"
          strokeWidth="1.5"
          opacity="0.8"
        />

        <path
          d="M 165 95 Q 140 100, 140 130 Q 140 160, 165 170"
          fill="none"
          stroke="url(#bodyGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M 235 95 Q 260 100, 260 130 Q 260 160, 235 170"
          fill="none"
          stroke="url(#bodyGradient)"
          strokeWidth="1.5"
        />

        <ellipse
          cx="200"
          cy="180"
          rx="65"
          ry="90"
          fill="none"
          stroke="url(#bodyGradient)"
          strokeWidth="1.5"
        />
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={`torso-h-${i}`}
            cx="200"
            cy={100 + i * 15}
            rx={40 + Math.sin(i * 0.4) * 25}
            ry="4"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="0.8"
            opacity={0.5 + i * 0.03}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <path
            key={`torso-v-${i}`}
            d={`M ${145 + i * 15} 95 Q ${145 + i * 15} 180, ${145 + i * 15} 265`}
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="0.6"
            opacity={0.4}
          />
        ))}

        <ellipse
          cx="185"
          cy="155"
          rx="15"
          ry="18"
          fill="url(#heartGradient)"
          opacity="0.8"
          className="organ-highlight"
        />
        <path
          d="M 175 150 L 185 165 L 195 150"
          fill="none"
          stroke="#ff9999"
          strokeWidth="2"
          opacity="0.9"
        />

        <g>
          <path
            d="M 135 110 Q 90 130, 60 200 Q 40 280, 30 350"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="1.5"
          />
          <ellipse cx="30" cy="360" rx="12" ry="18" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.2" />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={`larm-${i}`}
              cx={120 - i * 15}
              cy={130 + i * 40}
              rx={12 - i}
              ry="3"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="0.6"
              opacity={0.5}
            />
          ))}
        </g>

        <g>
          <path
            d="M 265 110 Q 310 130, 340 200 Q 360 280, 370 350"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="1.5"
          />
          <ellipse cx="370" cy="360" rx="12" ry="18" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.2" />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={`rarm-${i}`}
              cx={280 + i * 15}
              cy={130 + i * 40}
              rx={12 - i}
              ry="3"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="0.6"
              opacity={0.5}
            />
          ))}
        </g>

        <g>
          <path
            d="M 165 265 Q 150 350, 145 450 Q 140 550, 135 650"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="1.5"
          />
          <ellipse cx="135" cy="660" rx="18" ry="10" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.2" />
          {[...Array(10)].map((_, i) => (
            <ellipse
              key={`lleg-${i}`}
              cx={160 - i * 2.5}
              cy={280 + i * 40}
              rx={18 - i}
              ry="4"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="0.6"
              opacity={0.5}
            />
          ))}
        </g>

        <g>
          <path
            d="M 235 265 Q 250 350, 255 450 Q 260 550, 265 650"
            fill="none"
            stroke="url(#bodyGradient)"
            strokeWidth="1.5"
          />
          <ellipse cx="265" cy="660" rx="18" ry="10" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.2" />
          {[...Array(10)].map((_, i) => (
            <ellipse
              key={`rleg-${i}`}
              cx={240 + i * 2.5}
              cy={280 + i * 40}
              rx={18 - i}
              ry="4"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="0.6"
              opacity={0.5}
            />
          ))}
        </g>

        {[...Array(36)].map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const x = 200 + Math.cos(angle) * 85;
          const y = 320 + Math.sin(angle) * 20;
          return (
            <circle
              key={`dot-${i}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="#4a9eda"
              opacity={0.6}
            />
          );
        })}
      </g>

      <ellipse
        cx="200"
        cy="685"
        rx="80"
        ry="8"
        fill="url(#bodyGradient)"
        opacity="0.3"
      />
    </svg>
  );
}
