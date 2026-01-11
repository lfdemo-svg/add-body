import BrainCallout from './BrainCallout';
import RotationHint from './RotationHint';
import Brain3D from './Brain3D';

interface Stat {
  value: string;
  label: string;
}

interface LivingBrainSectionProps {
  onDiseaseClick: (disease: string) => void;
}

const stats: Stat[] = [
  { value: '42%', label: 'Cerebrovascular disease' },
  { value: '11%', label: 'Alzheimer' },
  { value: '5%', label: 'Epilepsy' },
  { value: '0.5%', label: 'Multiple Sclerosis' },
];

export default function LivingBrainSection({ onDiseaseClick }: LivingBrainSectionProps) {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-[55%] flex flex-col justify-start pt-36 pl-24 pr-8">
        <div className="max-w-[500px] animate-fade-in">
          <h2 className="text-[42px] leading-[1.06] tracking-[0.01em] font-extrabold uppercase text-white mb-6">
            THE LIVING BRAIN
          </h2>

          <p className="text-body-small text-text-onBlueSecondary mb-8">
            Neurological disorders are the leading cause of years of life lost by diseases, with a major prevalence
            of strokes (Cerebro-vascular diseases), with also Alzheimer&apos;s disease, Epilepsy, or Multiple Sclerosis.
          </p>

          <div className="flex gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-body-small text-text-onBlueSecondary">
            <p>
              Those pathologies involve{' '}
              <span className="font-bold text-white">complex pathological mechanisms</span>{' '}
              requiring multiple exams and costly hospital stays to be correctly diagnosed, treated and monitored.
            </p>

            <p>
              If we automatically build a personalized 3D Twin of the brain{' '}
              <span className="font-bold text-white">could we improve the decision making of practitioners?</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[45%] relative flex items-center justify-center">
        <div className="relative w-full h-full max-w-[450px]">
          <Brain3D className="w-full h-full" />

          <RotationHint />

          <BrainCallout
            label="MULTIPLE SCLEROSIS"
            position={{ top: '15%', left: '50%' }}
            onClick={() => onDiseaseClick('multiple-sclerosis')}
            delay={300}
          />

          <BrainCallout
            label="ALZHEIMER"
            position={{ top: '45%', left: '15%' }}
            onClick={() => onDiseaseClick('alzheimer')}
            delay={500}
          />

          <BrainCallout
            label="EPILEPSY"
            position={{ bottom: '25%', left: '45%' }}
            onClick={() => onDiseaseClick('epilepsy')}
            delay={700}
          />
        </div>
      </div>
    </div>
  );
}
