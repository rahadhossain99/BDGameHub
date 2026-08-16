import React, { useState, useEffect } from 'react';
import { Users, Flame, Trophy, Sparkles, Zap, ArrowRight, ShieldCheck, Gamepad2 } from 'lucide-react';
import { Language, PageView } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface LivePlayersTickerProps {
  currentLang: Language;
  onNavigate?: (page: PageView) => void;
  onOpenDownloadModal?: () => void;
}

export const LivePlayersTicker: React.FC<LivePlayersTickerProps> = ({
  currentLang,
  onNavigate,
  onOpenDownloadModal,
}) => {
  // Live player count with subtle realistic micro-fluctuation
  const [livePlayersCount, setLivePlayersCount] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change by -3 to +5 players every 4 seconds
      setLivePlayersCount(prev => {
        const delta = Math.floor(Math.random() * 9) - 3;
        const next = prev + delta;
        return next < 1200 ? 1230 : next > 1450 ? 1390 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const liveFeeds = [
    {
      id: 1,
      tagBn: 'নগদ প্রাইজ জয়ী',
      tagEn: 'Cash Winner',
      textBn: '🎮 তানভীর আহমেদ সোলো BR ম্যাচে ৯ কিল করে ৳৮০০ জিতলেন',
      textEn: '🎮 Tanvir Ahmed scored 9 kills in Solo BR and won ৳800',
      timeBn: 'এইমাত্র',
      timeEn: 'Just now',
      color: 'bg-[#FED24F]/30 text-[#FFF449] border-[#FED24F]/60',
    },
    {
      id: 2,
      tagBn: 'বিকাশ ক্যাশআউট',
      tagEn: 'bKash Cashout',
      textBn: '⚡ সাব্বির হাসান বিকাশ একাউন্টে ৳৫০০ ইনস্ট্যান্ট উইথড্র পেলেন',
      textEn: '⚡ Sabbir Hasan received instant ৳500 cashout via bKash',
      timeBn: '১ মিনিট আগে',
      timeEn: '1m ago',
      color: 'bg-[#7EC151]/30 text-white border-[#7EC151]/60',
    },
    {
      id: 3,
      tagBn: 'CS 4v4 চ্যাম্পিয়ন',
      tagEn: 'CS Champion',
      textBn: '🏆 Team Apex CS 4v4 গ্র্যান্ড ফাইনালে চ্যাম্পিয়ন হয়ে ৳১,০০০ জিতলো',
      textEn: '🏆 Team Apex won CS 4v4 Grand Final winning ৳1,000',
      timeBn: '২ মিনিট আগে',
      timeEn: '2m ago',
      color: 'bg-[#FED24F]/30 text-[#FED24F] border-[#FED24F]/60',
    },
    {
      id: 4,
      tagBn: 'নগদ অটো ডিপোজিট',
      tagEn: 'Nagad Deposit',
      textBn: '💳 ফাহিম চৌধুরী নগদে মাত্র ৩০ সেকেন্ডে ৳৩০০ ব্যালেন্স অ্যাড করলেন',
      textEn: '💳 Fahim Chowdhury funded ৳300 in 30s via Nagad Auto Gateway',
      timeBn: '৩ মিনিট আগে',
      timeEn: '3m ago',
      color: 'bg-[#B2D959]/30 text-[#B2D959] border-[#B2D959]/60',
    },
    {
      id: 5,
      tagBn: 'নতুন ম্যাচ জয়েন',
      tagEn: 'Match Joined',
      textBn: '🔥 রাকিব সহ ১২ জন গেমার রাত ৯:০০ PM ফ্রি ম্যাচে যুক্ত হয়েছেন',
      textEn: '🔥 12 gamers just joined 9:00 PM Free Fire Custom Room',
      timeBn: '৪ মিনিট আগে',
      timeEn: '4m ago',
      color: 'bg-[#FFF449]/30 text-[#FFF449] border-[#FED24F]/60',
    },
  ];

  return (
    <div className="bg-[#0F172A] text-white border-y border-[#B2D959]/40 py-3 sm:py-3.5 relative overflow-hidden shadow-xl transform-gpu">
      {/* Background Animated Subtle Glow Particles */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        
        {/* Left Side: Live Online Players Counter with Pulsing Indicator */}
        <div className="flex items-center space-x-3 shrink-0 bg-white/10 px-4 py-2 rounded-2xl border border-[#B2D959]/40 shadow-inner">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EC151] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7EC151]"></span>
          </div>

          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-4 h-4 text-[#B2D959]" />
            <div className="text-xs sm:text-sm font-bengali">
              <span className="text-slate-300">
                {currentLang === 'bn' ? 'এখন অনলাইনে খেলছেন:' : 'Live Online Gamers:'}
              </span>{' '}
              <span className="font-mono font-black text-[#FED24F] text-sm sm:text-base tracking-wider bg-black/50 px-2 py-0.5 rounded-lg border border-[#FED24F]/40">
                {currentLang === 'bn' ? livePlayersCount.toLocaleString('bn-BD') : livePlayersCount.toLocaleString()}
              </span>
              <span className="text-[#B2D959] text-[11px] font-bold ml-1">
                {currentLang === 'bn' ? 'জন' : 'active'}
              </span>
            </div>
          </div>
        </div>

        {/* Center / Right: Continuous Smooth Scrolling Left-to-Right / Right-to-Left Ticker Feed */}
        <div className="flex-1 overflow-hidden min-w-0 mx-2 select-none relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="animate-marquee-ltr flex items-center space-x-4">
            {[...liveFeeds, ...liveFeeds].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center space-x-2.5 bg-black/50 px-3.5 py-1.5 rounded-xl border border-white/10 shrink-0 text-xs sm:text-sm font-bengali transform-gpu"
              >
                <span className={`px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-black uppercase font-mono border ${item.color}`}>
                  {currentLang === 'bn' ? item.tagBn : item.tagEn}
                </span>
                <span className="text-white font-medium">
                  {currentLang === 'bn' ? item.textBn : item.textEn}
                </span>
                <span className="text-[10px] text-[#FED24F]/90 font-mono">
                  ({currentLang === 'bn' ? item.timeBn : item.timeEn})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Quick Action Button */}
        {onOpenDownloadModal && (
          <button
            onClick={onOpenDownloadModal}
            className="hidden lg:inline-flex items-center space-x-1.5 bg-[#FED24F] hover:bg-[#ffe17d] text-[#0F172A] px-4 py-1.5 rounded-xl text-xs font-black font-bengali shadow-md transition-all shrink-0 cursor-pointer active:scale-95"
          >
            <Trophy className="w-3.5 h-3.5 text-[#0F172A]" />
            <span>{currentLang === 'bn' ? 'এখনই খেলুন' : 'Play Now'}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}

      </div>
    </div>
  );
};
