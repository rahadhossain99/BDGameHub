import React, { useState } from 'react';
import { Calculator, Trophy, Flame, Coins, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { BRAND_ASSETS } from '../data/mockData';

interface PrizeCalculatorProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
}

export const PrizeCalculator: React.FC<PrizeCalculatorProps> = ({
  currentLang,
  onOpenDownloadModal,
}) => {
  const [matchType, setMatchType] = useState<'br-squad' | 'br-solo' | 'cs-4v4' | '1v1'>('br-squad');
  const [kills, setKills] = useState<number>(4);
  const [position, setPosition] = useState<'1st' | '2nd' | '3rd' | 'top10' | 'none'>('1st');

  // Match configurations
  const configs = {
    'br-squad': {
      titleBn: 'ব্যাটেল রয়্যাল (BR Squad)',
      titleEn: 'Battle Royale (Squad)',
      entryFee: 20,
      perKillRate: 25,
      prizes: { '1st': 800, '2nd': 400, '3rd': 200, 'top10': 50, 'none': 0 }
    },
    'br-solo': {
      titleBn: 'ব্যাটেল রয়্যাল (BR Solo)',
      titleEn: 'Battle Royale (Solo)',
      entryFee: 25,
      perKillRate: 15,
      prizes: { '1st': 500, '2nd': 250, '3rd': 100, 'top10': 30, 'none': 0 }
    },
    'cs-4v4': {
      titleBn: 'ক্ল্যাশ স্কোয়াড (CS 4v4)',
      titleEn: 'Clash Squad (4v4)',
      entryFee: 50,
      perKillRate: 0, // Team win takes pool
      prizes: { '1st': 1000, '2nd': 0, '3rd': 0, 'top10': 0, 'none': 0 }
    },
    '1v1': {
      titleBn: '১v১ কাস্টম চ্যালেঞ্জ',
      titleEn: '1v1 Custom Challenge',
      entryFee: 30,
      perKillRate: 0,
      prizes: { '1st': 600, '2nd': 0, '3rd': 0, 'top10': 0, 'none': 0 }
    }
  };

  const selectedConfig = configs[matchType];
  const positionPrize = selectedConfig.prizes[position];
  const killBonus = kills * selectedConfig.perKillRate;
  const totalPrize = positionPrize + killBonus;
  const netProfit = totalPrize - selectedConfig.entryFee;

  return (
    <div className="bg-white rounded-3xl m3-elevation-2 border border-[#B2D959]/50 p-5 sm:p-7 max-w-4xl mx-auto my-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-[#B2D959]/30 text-[#0F172A] flex items-center justify-center font-black shadow-xs border border-[#B2D959]">
            <Calculator className="w-6 h-6 text-[#7EC151]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading-bn">
              {currentLang === 'bn' ? 'ম্যাচ প্রাইজ ও ইনকাম ক্যালকুলেটর' : 'Match Prize & Earnings Calculator'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-bengali">
              {currentLang === 'bn' ? 'ম্যাচের ধরণ, কিল সংখ্যা ও র‍্যাংক দিয়ে আপনার সম্ভাব্য প্রাইজ মানি হিসাব করুন' : 'Estimate your match earnings based on kill count and match placement'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 bg-[#B2D959]/20 px-3 py-1 rounded-full border border-[#B2D959] text-xs font-bold text-[#064E3B] font-bengali self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#7EC151]" />
          <span>{currentLang === 'bn' ? 'রিয়েল-টাইম ক্যালকুলেশন' : 'Real-time Math'}</span>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-start">
        
        {/* Left Inputs */}
        <div className="md:col-span-7 space-y-5">
          
          {/* Match Type Select */}
          <div>
            <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-bengali">
              {currentLang === 'bn' ? '১. টুর্নামেন্টের মোড বেছে নিন' : '1. Select Match Mode'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(configs) as Array<keyof typeof configs>).map((type) => (
                <button
                  key={type}
                  id={`calc-mode-${type}`}
                  onClick={() => setMatchType(type)}
                  className={`p-3 rounded-2xl text-left border transition-all text-xs font-bold font-bengali cursor-pointer ${
                    matchType === type
                      ? 'bg-[#7EC151] text-white border-[#7EC151] shadow-md'
                      : 'bg-[#F8FAFC] hover:bg-slate-100 text-[#0F172A] border-[#B2D959]/40'
                  }`}
                >
                  <p>{currentLang === 'bn' ? configs[type].titleBn : configs[type].titleEn}</p>
                  <p className={`text-[10px] mt-0.5 ${matchType === type ? 'text-white/90 font-mono' : 'text-[#475569]'}`}>
                    এন্ট্রি: ৳{configs[type].entryFee}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Kills Slider (if applicable) */}
          {selectedConfig.perKillRate > 0 && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-bengali">
                  {currentLang === 'bn' ? '২. কিল সংখ্যা (Kill Count):' : '2. Estimated Kills:'}
                </label>
                <span className="font-mono text-sm font-black text-[#064E3B] bg-[#FED24F]/30 border border-[#FED24F] px-2.5 py-0.5 rounded-lg">
                  {kills} {currentLang === 'bn' ? 'কিল' : 'Kills'} (৳{kills * selectedConfig.perKillRate})
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={kills}
                onChange={(e) => setKills(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#7EC151]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>0 Kill</span>
                <span>5 Kills</span>
                <span>10 Kills</span>
                <span>15+ Kills</span>
              </div>
            </div>
          )}

          {/* Placement Selection */}
          <div>
            <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-bengali">
              {currentLang === 'bn' ? '৩. আপনার পজিশন / র‍্যাংক' : '3. Match Placement'}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-xs font-bold font-bengali">
              {[
                { id: '1st', labelBn: '🏆 Booyah (#1)', labelEn: '🏆 Booyah (#1)' },
                { id: '2nd', labelBn: '🥈 ২য় স্থান', labelEn: '🥈 2nd Place' },
                { id: '3rd', labelBn: '🥉 ৩য় স্থান', labelEn: '🥉 3rd Place' },
                { id: 'top10', labelBn: '🎖️ Top 10', labelEn: '🎖️ Top 10' },
                { id: 'none', labelBn: '❌ অন্যান্য', labelEn: '❌ No Rank' },
              ].map((pos) => (
                <button
                  key={pos.id}
                  id={`calc-pos-${pos.id}`}
                  onClick={() => setPosition(pos.id as any)}
                  className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                    position === pos.id
                      ? 'bg-[#B2D959]/40 text-[#0F172A] border-[#7EC151] font-black ring-2 ring-[#7EC151]/30'
                      : 'bg-slate-50 hover:bg-slate-100 text-[#475569] border-slate-200'
                  }`}
                >
                  <p className="text-[11px]">{currentLang === 'bn' ? pos.labelBn : pos.labelEn}</p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output Card */}
        <div className="md:col-span-5 bg-[#0F172A] text-white rounded-2xl p-5 shadow-lg border border-[#B2D959]/40 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs text-[#B2D959] font-bold uppercase tracking-wider font-mono">
                {currentLang === 'bn' ? 'আনুমানিক প্রাইজ মানি' : 'Estimated Winning'}
              </span>
              <Coins className="w-5 h-5 text-[#FED24F]" />
            </div>

            <div className="text-center my-3">
              <span className="text-xs text-slate-300 font-bengali">
                {currentLang === 'bn' ? 'মোট উপার্জিত টাকা' : 'Total Match Reward'}
              </span>
              <p className="text-4xl sm:text-5xl font-black text-[#FED24F] font-mono tracking-tight my-1">
                ৳{totalPrize}
              </p>
              <p className="text-[11px] text-[#B2D959] font-bengali">
                {netProfit >= 0 ? `লাভ: ৳${netProfit} (এন্ট্রি ফি বাদ দিয়ে)` : 'কোনো প্রাইজ অর্জিত হয়নি'}
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs font-bengali bg-black/40 p-3 rounded-xl border border-white/10 mb-4">
              <div className="flex justify-between text-slate-200">
                <span>পজিশন প্রাইজ ({position}):</span>
                <span className="font-mono font-bold text-[#FED24F]">৳{positionPrize}</span>
              </div>
              {selectedConfig.perKillRate > 0 && (
                <div className="flex justify-between text-slate-200">
                  <span>কিল বোনাস ({kills} × ৳{selectedConfig.perKillRate}):</span>
                  <span className="font-mono font-bold text-[#FED24F]">৳{killBonus}</span>
                </div>
              )}
              <div className="flex justify-between text-[#B2D959] pt-1 border-t border-white/10">
                <span>এন্ট্রি ফি:</span>
                <span className="font-mono font-bold">- ৳{selectedConfig.entryFee}</span>
              </div>
            </div>

            {/* Instant payout partner badges */}
            <div className="flex items-center justify-between bg-black/30 px-3 py-2 rounded-xl border border-white/10 mb-4 text-[11px] font-bengali">
              <span className="text-[#B2D959]">{currentLang === 'bn' ? 'ইনস্ট্যান্ট উইথড্র:' : 'Instant Cashout:'}</span>
              <div className="flex items-center space-x-1.5 bg-white/95 px-2 py-0.5 rounded-lg shadow-2xs">
                <img src={BRAND_ASSETS.payments.bkash} alt="bKash" className="h-3.5 w-auto object-contain" referrerPolicy="no-referrer" />
                <img src={BRAND_ASSETS.payments.nagad} alt="Nagad" className="h-3.5 w-auto object-contain" referrerPolicy="no-referrer" />
                <img src={BRAND_ASSETS.payments.rocket} alt="Rocket" className="h-3.5 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <button
            id="calc-join-now-btn"
            onClick={onOpenDownloadModal}
            className="w-full flex items-center justify-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-black py-2.5 px-4 rounded-xl text-sm transition-all shadow-md cursor-pointer font-bengali"
          >
            <span>{currentLang === 'bn' ? 'এখনই টুর্নামেন্টে জয়েন করুন' : 'Join Tournament Now'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
