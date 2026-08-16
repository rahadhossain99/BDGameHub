import React, { useState } from 'react';
import { MessageSquare, Phone, Youtube, X, ChevronUp, Sparkles, Send } from 'lucide-react';
import { Language, PageView } from '../types';

interface FloatingSupportWidgetProps {
  currentLang: Language;
  onNavigate: (page: PageView) => void;
  onOpenVideoModal: (videoId?: string) => void;
}

export const FloatingSupportWidget: React.FC<FloatingSupportWidgetProps> = ({
  currentLang,
  onNavigate,
  onOpenVideoModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40">
      {isOpen && (
        <div className="mb-3 bg-white rounded-3xl p-4 m3-elevation-4 border border-[#B2D959]/50 w-72 animate-in slide-in-from-bottom-4 font-bengali">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7EC151] animate-pulse"></span>
              <span className="text-xs font-bold text-[#0F172A]">
                {currentLang === 'bn' ? 'সরাসরি হেল্পডেস্ক (24/7)' : 'Live Helpdesk 24/7'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8801400389396"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 p-2.5 rounded-2xl bg-[#B2D959]/20 hover:bg-[#B2D959]/30 text-[#0F172A] transition-colors border border-[#B2D959]/50"
            >
              <div className="w-8 h-8 rounded-xl bg-[#7EC151] text-white flex items-center justify-center font-bold">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold">{currentLang === 'bn' ? 'হোয়াটসঅ্যাপ হেল্প' : 'WhatsApp Support'}</p>
                <p className="text-[10px] text-[#064E3B] font-mono font-bold">+880 1400-389396</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 p-2.5 rounded-2xl bg-[#FED24F]/20 hover:bg-[#FED24F]/30 text-[#0F172A] transition-colors border border-[#FED24F]/60"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FED24F] text-[#0F172A] flex items-center justify-center font-bold">
                <Send className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold">{currentLang === 'bn' ? 'টেলিগ্রাম চ্যানেল' : 'Telegram Channel'}</p>
                <p className="text-[10px] text-[#0F172A] font-mono font-bold">@fastgamingbd_official</p>
              </div>
            </a>

            {/* YouTube Guide */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenVideoModal('how-to-play-full');
              }}
              className="w-full flex items-center space-x-2.5 p-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-950 transition-colors border border-red-200/80 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                <Youtube className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold">{currentLang === 'bn' ? 'ভিডিও টিউটোরিয়াল' : 'Video Tutorial'}</p>
                <p className="text-[10px] text-red-800">{currentLang === 'bn' ? 'কিভাবে খেলবেন দেখুন' : 'Watch how to play'}</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-help-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold px-4 py-3 rounded-full m3-elevation-3 transition-transform transform hover:scale-105 cursor-pointer font-bengali shadow-lg"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs sm:text-sm font-bold">
          {currentLang === 'bn' ? 'সাহায্য চান?' : 'Need Help?'}
        </span>
      </button>
    </div>
  );
};
