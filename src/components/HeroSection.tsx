import HumanBody3D from './HumanBody3D';
import OrganCallout from './OrganCallout';
import RotationHint from './RotationHint';

interface HeroSectionProps {
  onOrganClick?: (organ: 'brain' | 'heart') => void;
}

export default function HeroSection({ onOrganClick }: HeroSectionProps) {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-[44%] flex flex-col justify-center pl-24 pr-8">
        <div className="max-w-[420px] animate-fade-in">
          <h1 className="text-[60px] leading-[1.02] tracking-[0.01em] font-extrabold uppercase text-white mb-8">
            MEET YOUR
            <br />
            VIRTUAL TWIN
          </h1>

          <div className="space-y-5 text-body-small text-text-onBlueSecondary">
            <p>
              The virtual twin of the human is an accurate model ready for{' '}
              <span className="font-bold text-white">simulation of real life</span>.
            </p>

            <p>
              Your virtual twin can save your life.
            </p>

            <p>
              By merging clinical or wearable sensor observations with your virtual heart or your virtual brain,
              experts can{' '}
              <span className="font-bold text-white">diagnose</span>,{' '}
              <span className="font-bold text-white">monitor</span> or{' '}
              <span className="font-bold text-white">identify a cure</span>, with a{' '}
              <span className="font-bold text-white">non-invasive technic</span>,
              by adapting known treatments to your unique condition.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[56%] relative flex items-center justify-center">
        <div className="relative w-full h-full max-w-[500px]">
          <HumanBody3D
            className="w-full h-full"
            highlightedOrgan="brain"
          />

          <RotationHint />

          <OrganCallout
            label="BRAIN"
            position={{ top: '12%', right: '10%' }}
            connectorDirection="left"
            onClick={() => onOrganClick?.('brain')}
            delay={500}
          />

          <OrganCallout
            label="HEART"
            position={{ top: '32%', right: '5%' }}
            connectorDirection="left"
            onClick={() => onOrganClick?.('heart')}
            delay={800}
          />
        </div>
      </div>
    </div>
  );
}
