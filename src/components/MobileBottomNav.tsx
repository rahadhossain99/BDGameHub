import React from 'react';
import { Globe, PlayCircle, Trophy, Download, ShieldCheck, PhoneCall, HelpCircle } from 'lucide-react';
import { Language, PageView } from '../types';

interface MobileBottomNavProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  currentLang: Language;
  onOpenDownloadModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  currentLang,
  onOpenDownloadModal,
}) => {
  const items: { id: PageView; labelBn: string; labelEn: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home', icon: <Globe className="w-5 h-5" /> },
    { id: 'tutorials', labelBn: 'ভিডিও', labelEn: 'Videos', icon: <PlayCircle className="w-5 h-5" />, badge: 'LIVE' },
    { id: 'tournaments', labelBn: 'ম্যাচ', labelEn: 'Matches', icon: <Trophy className="w-5 h-5" /> },
    { id: 'download', labelBn: 'APK', labelEn: 'APK', icon: <Download className="w-5 h-5" /> },
    { id: 'rules', labelBn: 'নিয়ম', labelEn: 'Rules', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#B2D959]/50 shadow-2xl safe-area-pb"
    >
      <div className="flex items-center justify-around px-2 py-1.5 max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-bottom-nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all group relative cursor-pointer"
            >
              {/* Active Indicator Pill */}
              <div className={`relative px-4 py-1 rounded-full transition-all duration-200 flex items-center justify-center ${
                isActive ? 'bg-[#7EC151] text-white shadow-xs' : 'text-[#475569] hover:text-[#0F172A]'
              }`}>
                {item.icon}

                {/* Badge if any */}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFF449] border border-[#0F172A] animate-ping"></span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] mt-0.5 tracking-tight font-bengali transition-colors ${
                isActive ? 'font-black text-[#0F172A]' : 'font-medium text-[#475569]'
              }`}>
                {currentLang === 'bn' ? item.labelBn : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
