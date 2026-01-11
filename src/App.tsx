import { Home, Maximize2 } from 'lucide-react';
import WireframeHuman from './components/WireframeHuman';
import OrganLabel from './components/OrganLabel';
import RotationIndicator from './components/RotationIndicator';

function App() {
  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 lg:p-8">
        <button
          className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center
                     text-white/80 hover:bg-white/10 hover:border-white/50 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Home"
        >
          <Home size={20} strokeWidth={1.5} />
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center text-white/60
                     hover:text-white/90 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 size={20} strokeWidth={1.5} />
        </button>
      </nav>

      <main className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="z-10 pt-24 lg:pt-0 fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8">
                <span className="text-ds-corporate block">MEET YOUR</span>
                <span className="text-ds-corporate block">VIRTUAL TWIN</span>
              </h1>

              <div className="space-y-6 max-w-xl">
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  The <span className="font-semibold">virtual twin of the human</span> is an accurate model ready for{' '}
                  <span className="font-semibold">simulation of real life</span>.
                </p>

                <div className="space-y-4">
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                    Your virtual twin can save your life.
                  </p>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    By merging clinical or wearable sensor observations with your virtual heart or your virtual brain,
                    experts can{' '}
                    <span className="font-semibold text-white/90">
                      diagnose, monitor or identify a cure, with a non-invasive technic
                    </span>
                    , by adapting known treatments to your unique condition.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-[400px] mx-auto">
                <WireframeHuman className="w-full h-full" />
                <RotationIndicator />
              </div>

              <OrganLabel label="BRAIN" position="top-right" delay={500} />
              <OrganLabel label="HEART" position="middle-right" delay={800} />
            </div>
          </div>
        </div>
      </main>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ds-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ds-corporate/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default App;
