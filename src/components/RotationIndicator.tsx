export default function RotationIndicator() {
  return (
    <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 pointer-events-none">
      <svg width="200" height="60" viewBox="0 0 200 60" className="opacity-60">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a9eda" stopOpacity="0" />
            <stop offset="50%" stopColor="#4a9eda" stopOpacity="1" />
            <stop offset="100%" stopColor="#4a9eda" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse
          cx="100"
          cy="30"
          rx="90"
          ry="25"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          className="rotate-indicator"
          style={{ transformOrigin: '100px 30px' }}
        />
      </svg>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4">
        <span className="text-[#4a9eda] text-lg font-light tracking-wider">360</span>
      </div>
    </div>
  );
}
