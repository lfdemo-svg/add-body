import { useState } from 'react';
import InteractiveCanvas from './components/InteractiveCanvas';
import TabToggle from './components/TabToggle';
import HeroSection from './components/HeroSection';
import LivingBrainSection from './components/LivingBrainSection';
import DiseaseModal from './components/DiseaseModal';

type TabKey = 'brain' | 'heart';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('brain');
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);

  const handleOrganClick = (organ: 'brain' | 'heart') => {
    setActiveTab(organ);
  };

  const handleDiseaseClick = (disease: string) => {
    setSelectedDisease(disease);
  };

  const handleCloseModal = () => {
    setSelectedDisease(null);
  };

  return (
    <div className="min-h-screen bg-page-bg">
      <main>
        <InteractiveCanvas
          topCenterContent={
            <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
          }
        >
          {activeTab === 'brain' ? (
            <LivingBrainSection onDiseaseClick={handleDiseaseClick} />
          ) : (
            <HeroSection onOrganClick={handleOrganClick} />
          )}
        </InteractiveCanvas>
      </main>

      <DiseaseModal
        diseaseKey={selectedDisease}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
