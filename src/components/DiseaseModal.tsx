import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface DiseaseData {
  title: string;
  videoUrl?: string;
  body: string[];
}

const diseaseContent: Record<string, DiseaseData> = {
  'multiple-sclerosis': {
    title: 'Multiple Sclerosis',
    body: [
      'Multiple Sclerosis (MS) is a chronic autoimmune disease affecting the central nervous system. The diagnosis relies heavily on MRI imaging, particularly using a modality named **FLAIR** (Fluid-Attenuated Inversion Recovery).',
      'The McDonald criteria for MS diagnosis require demonstration of **Dissemination in Space** (DIS) - lesions in multiple areas of the CNS, and **Dissemination in Time** (DIT) - new lesions appearing over time.',
      'A personalized 3D brain twin can automatically detect and track lesion burden, monitor disease progression, and help clinicians make informed treatment decisions by visualizing spatial and temporal patterns of demyelination.',
    ],
  },
  'alzheimer': {
    title: 'Alzheimer\'s Disease',
    body: [
      'Alzheimer\'s Disease is a progressive neurodegenerative disorder characterized by memory loss and cognitive decline. Early detection relies on identifying **biomarkers** including amyloid plaques and tau tangles.',
      'Structural MRI reveals characteristic patterns of **cortex thinning**, particularly in the medial temporal lobe, hippocampus, and posterior cingulate regions. These changes can precede clinical symptoms by years.',
      'By building a personalized 3D brain model, we can quantify regional atrophy patterns, track disease progression over time, and potentially identify individuals at risk before irreversible damage occurs.',
    ],
  },
  'epilepsy': {
    title: 'Epilepsy',
    body: [
      'Epilepsy is characterized by **uncontrolled neuronal activation** leading to recurrent seizures. While many patients respond to anti-epileptic medications, approximately 30% have **drug-resistant cases** requiring alternative interventions.',
      'For these patients, options include **electrical stimulation** therapies (such as VNS or DBS) or surgical resection of the epileptogenic zone. Precise localization of seizure onset is critical for successful outcomes.',
      'A virtual brain twin integrating structural MRI, EEG data, and connectivity mapping can help identify seizure networks, plan surgical approaches, and predict treatment outcomes with greater accuracy.',
    ],
  },
};

interface DiseaseModalProps {
  diseaseKey: string | null;
  onClose: () => void;
}

export default function DiseaseModal({ diseaseKey, onClose }: DiseaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (diseaseKey) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [diseaseKey, onClose]);

  if (!diseaseKey) return null;

  const disease = diseaseContent[diseaseKey];
  if (!disease) return null;

  const renderBody = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="font-extrabold text-modal-text">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start pointer-events-none">
      <div
        ref={modalRef}
        className="absolute pointer-events-auto animate-fade-in"
        style={{
          top: '120px',
          left: '120px',
          width: '480px',
          maxHeight: '520px',
        }}
      >
        <div className="bg-modal-bg rounded-modal shadow-modal border border-modal-border overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 border border-black/10
                       flex items-center justify-center text-gray-500 hover:text-gray-700
                       transition-colors duration-200 z-10"
            aria-label="Close modal"
          >
            <X size={16} strokeWidth={2} />
          </button>

          <div className="h-60 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Video placeholder</div>
          </div>

          <div className="p-6 max-h-64 overflow-y-auto modal-scrollbar">
            <h3 className="text-lg font-extrabold text-modal-text mb-4">
              {disease.title}
            </h3>

            <div className="space-y-4">
              {disease.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[12.5px] leading-[1.55] text-modal-textMuted"
                >
                  {renderBody(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
