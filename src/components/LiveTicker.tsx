import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Zap, ShieldCheck, ArrowUpRight, Flame, BellRing, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface LiveTickerProps {
  currentLang: Language;
  onOpenDownloadModal?: () => void;
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ currentLang, onOpenDownloadModal }) => {
  const [activeAlertIndex, setActiveAlertIndex] = useState(0);

  const tickerAlerts = [
    {
      id: 1,
      badge: 'ক্যাশআউট সফল',
      badgeEn: 'Cashout Success',
      text: 'তানভীর আহমেদ (Dhaka) বিকাশ একাউন্টে ৳১২০০ ইনস্ট্যান্ট উইথড্র গ্রহণ করেছেন।',
      textEn: 'Tanvir Ahmed (Dhaka) received instant ৳1,200 cashout via bKash.',
      type: 'payout',
      time: '১ মিনিট আগে',
      timeEn: '1m ago',
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      id: 2,
      badge: 'টুর্নামেন্ট জয়ী',
      badgeEn: 'Match Winner',
      text: 'CS 4v4 কাস্টম ম্যাচে "Team Apex" চ্যাম্পিয়ন হয়ে ৳৮০০ প্রাইজমানি জিতে নিল!',
      textEn: '"Team Apex" won CS 4v4 Grand Final and claimed ৳800 prize pool!',
      type: 'winner',
      time: '৩ মিনিট আগে',
      timeEn: '3m ago',
      color: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 3,
      badge: 'রুম কোড লাইভ',
      badgeEn: 'Room Code Live',
      text: 'ফ্রি ফায়ার Squad Match #108 এর স্বয়ংক্রিয় রুম আইডি ও পাসওয়ার্ড উন্মুক্ত হয়েছে।',
      textEn: 'Automated Room ID & Password for Squad Match #108 is now live.',
      type: 'room',
      time: '৫ মিনিট আগে',
      timeEn: '5m ago',
      color: 'bg-blue-100 text-blue-900 border-blue-300',
    },
    {
      id: 4,
      badge: 'নগদ ডিপোজিট',
      badgeEn: 'Nagad Deposit',
      text: 'সাকিবুল হাসান মাত্র ৪০ সেকেন্ডে ওয়ালেটে ৳৫০০ ডিপোজিট সম্পন্ন করেছেন।',
      textEn: 'Sakibul Hasan funded ৳500 in 40s via Nagad Auto Gateway.',
      type: 'deposit',
      time: '৭ মিনিট আগে',
      timeEn: '7m ago',
      color: 'bg-lime-100 text-lime-900 border-lime-300',
    },
    {
      id: 5,
      badge: 'টপ কিলার',
      badgeEn: 'Top Fragger',
      text: 'রাকিব আহমেদ সোলো ম্যাচে ৯ কিল করে ৳২৭০ কিল বাউন্টি বোনাস অর্জন করেছেন।',
      textEn: 'Rakib scored 9 kills in Solo BR securing ৳270 kill bounty bonus.',
      type: 'kill',
      time: '১০ মিনিট আগে',
      timeEn: '10m ago',
      color: 'bg-orange-100 text-orange-900 border-orange-300',
    },
  ];

  // Auto-cycle through alerts vertically with smooth kinetic cadence
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlertIndex((prev) => (prev + 1) % tickerAlerts.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [tickerAlerts.length]);

  const currentAlert = tickerAlerts[activeAlertIndex];

  return (
    <div className="relative z-30 bg-white/95 backdrop-blur-md border-y border-[#B2D959]/40 py-2 sm:py-2.5 px-3 sm:px-6 shadow-2xs select-none w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
        
        {/* Left Tag with Animated Pulse Indicator */}
        <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto space-x-2 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EC151] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7EC151]"></span>
            </span>
            <div className="inline-flex items-center space-x-1.5 bg-[#0F172A] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider font-bengali shadow-xs border border-[#7EC151]/40">
              <Flame className="w-3.5 h-3.5 text-[#FED24F] fill-[#FED24F] animate-pulse" />
              <span>{currentLang === 'bn' ? 'লাইভ আপডেট' : 'LIVE UPDATES'}</span>
            </div>
          </div>

          {/* Mobile Right Badge (visible on mobile only) */}
          <span className="sm:hidden text-[10px] font-bold text-[#475569] font-mono bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            {currentLang === 'bn' ? currentAlert.time : currentAlert.timeEn}
          </span>
        </div>

        {/* Dynamic Vertical Sliding Alert Display with Edge Masking & Zero Viewport Bleed */}
        <div className="w-full flex-1 min-w-0 overflow-hidden relative py-0.5 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentAlert.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(2px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(2px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm font-bold text-[#0F172A] font-bengali w-full"
            >
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase border shadow-2xs shrink-0 ${currentAlert.color}`}>
                {currentLang === 'bn' ? currentAlert.badge : currentAlert.badgeEn}
              </span>
              <span className="text-[#0F172A] font-extrabold truncate max-w-full text-center sm:text-left">
                {currentLang === 'bn' ? currentAlert.text : currentAlert.textEn}
              </span>
              <span className="text-[11px] text-[#475569] font-mono shrink-0 hidden md:inline bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                {currentLang === 'bn' ? currentAlert.time : currentAlert.timeEn}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right CTA / Quick Link */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0 text-xs font-black text-[#064E3B] font-bengali">
          <div className="flex items-center space-x-1.5 bg-[#B2D959]/15 hover:bg-[#B2D959]/30 px-3 py-1 rounded-full border border-[#B2D959]/60 shadow-2xs transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? '১০০% অটোমেটেড পেআউট' : '100% Automated Payout'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
