import { MapPin, Phone, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container-template">
        <div className="flex items-center justify-between">
          {/* Location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ярославль</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <span className="hidden md:inline text-white/70">
              пр-т. Октября, 74
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-6">
            <a href="tel:+74852780000" className="flex items-center gap-2 hover:text-template-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (4852) 78-00-00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
