import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  type: 'link' | 'dropdown';
  caret?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Manufacturing Industries', type: 'link' },
  { label: 'Life Sciences & Healthcare', type: 'dropdown', caret: true },
  { label: 'Infrastructure & Cities', type: 'link' },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-header-divider">
      <div className="max-w-page mx-auto h-14 px-6 flex items-center justify-between">
        <div className="text-sm font-medium text-header-text">
          Virtual Twin
        </div>

        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-xs font-medium text-header-text
                         hover:text-gray-600 transition-colors duration-200"
              onClick={() => item.type === 'dropdown' && setActiveDropdown(
                activeDropdown === item.label ? null : item.label
              )}
            >
              {item.label}
              {item.caret && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
