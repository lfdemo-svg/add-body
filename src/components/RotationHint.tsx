export default function RotationHint() {
  return (
    <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 pointer-events-none">
      <div className="relative">
        <svg width="180" height="50" viewBox="0 0 180 50" className="opacity-50">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <ellipse
            cx="90"
            cy="25"
            rx="85"
            ry="20"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="1"
            strokeDasharray="6 4"
            className="animate-rotate-ring"
            style={{ transformOrigin: '90px 25px' }}
          />
        </svg>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2">
          <span className="text-text-onBlueMuted text-sm font-light tracking-wider">360&deg;</span>
        </div>
      </div>
    </div>
  );
}
