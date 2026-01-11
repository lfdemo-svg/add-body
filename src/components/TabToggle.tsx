interface TabToggleProps {
  activeTab: 'brain' | 'heart';
  onTabChange: (tab: 'brain' | 'heart') => void;
}

export default function TabToggle({ activeTab, onTabChange }: TabToggleProps) {
  const tabs = [
    { key: 'brain' as const, label: 'BRAIN' },
    { key: 'heart' as const, label: 'HEART' },
  ];

  return (
    <div className="inline-flex h-7 rounded-pill border border-white/25 bg-black/10 p-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`
            px-4 h-full rounded-pill text-[11px] font-bold tracking-widest uppercase
            transition-all duration-200 ease-out
            ${activeTab === tab.key
              ? 'bg-white/95 text-[#0E5994]'
              : 'bg-transparent text-white/85 hover:text-white'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
