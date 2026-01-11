import { ReactNode } from 'react';
import { Home, Maximize2 } from 'lucide-react';

interface InteractiveCanvasProps {
  children: ReactNode;
  topCenterContent?: ReactNode;
}

export default function InteractiveCanvas({ children, topCenterContent }: InteractiveCanvasProps) {
  const handleFullscreen = () => {
    const canvas = document.getElementById('interactive-canvas');
    if (canvas) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        canvas.requestFullscreen();
      }
    }
  };

  return (
    <div
      id="interactive-canvas"
      className="relative w-full max-w-page mx-auto h-canvas canvas-gradient overflow-hidden"
    >
      <button
        className="absolute top-6 left-6 w-9 h-9 rounded-full border border-white/25
                   bg-transparent flex items-center justify-center
                   text-white/65 hover:text-white/90 hover:border-white/40
                   transition-all duration-200 z-10"
        aria-label="Home"
      >
        <Home size={18} strokeWidth={1.5} />
      </button>

      <button
        onClick={handleFullscreen}
        className="absolute top-6 right-6 w-5 h-5 flex items-center justify-center
                   text-white/65 hover:text-white/90 transition-all duration-200 z-10"
        aria-label="Toggle fullscreen"
      >
        <Maximize2 size={18} strokeWidth={1.5} />
      </button>

      {topCenterContent && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
          {topCenterContent}
        </div>
      )}

      {children}
    </div>
  );
}
