import React, { useState } from 'react';
import { 
  Trophy, 
  Gamepad2, 
  ShieldCheck, 
  RefreshCcw, 
  AlertOctagon, 
  CheckCircle2, 
  Download,
  Flame,
  Scale,
  Search,
  HelpCircle
} from 'lucide-react';
import { RULES_DATA } from '../data/mockData';
import { Language, PageView } from '../types';

interface RulesSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  onNavigate: (page: PageView) => void;
}

export const RulesSection: React.FC<RulesSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'freefire' | 'fairplay' | 'refund'>('general');
  const [searchRule, setSearchRule] = useState('');

  const tabs: { id: 'general' | 'freefire' | 'fairplay' | 'refund'; labelBn: string; labelEn: string; icon: React.ReactNode }[] = [
    { id: 'general', labelBn: 'সাধারণ নিয়ম', labelEn: 'General Rules', icon: <Trophy className="w-4 h-4" /> },
    { id: 'freefire', labelBn: 'Free Fire', labelEn: 'Free Fire Rules', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'fairplay', labelBn: 'Fair Play', labelEn: 'Fair Play & Anti-Cheat', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'refund', labelBn: 'রিফান্ড পলিসি', labelEn: 'Refund Policy', icon: <RefreshCcw className="w-4 h-4" /> },
  ];

  const currentRules = RULES_DATA[activeTab].filter(r => 
    r.toLowerCase().includes(searchRule.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5 font-bengali">
          <span className="hover:text-[#7EC151] cursor-pointer" onClick={() => onNavigate('home')}>হোম</span>
          <span>›</span>
          <span className="text-[#0F172A] font-medium">টুর্নামেন্ট নিয়মাবলী ও ফেয়ার প্লে গাইডলাইন</span>
        </div>

        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-[#B2D959]/25 text-[#0F172A] px-3.5 py-0.5 rounded-full text-xs font-bold font-bengali border border-[#B2D959]">
            <span>টুর্নামেন্ট নিয়মাবলী</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-heading-bn tracking-tight">
            Rules of Play & Fair Play Guidelines
          </h1>

          <p className="text-[#334155] text-sm sm:text-base font-bengali">
            Fast Gaming BD টুর্নামেন্টের সার্বিক নিয়মাবলী, ইন-গেম নীতিমালা এবং ফেয়ার প্লে গাইডলাইন।
          </p>
        </div>

        {/* Tab Switcher Bar */}
        <div className="bg-[#B2D959]/20 p-1.5 rounded-2xl border border-[#B2D959]/50 flex flex-wrap gap-1.5 m3-elevation-1">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`rules-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[130px] flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#7EC151] text-white shadow-xs font-black'
                    : 'text-[#334155] hover:text-[#0F172A] hover:bg-white/60'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{currentLang === 'bn' ? tab.labelBn : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Rules Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#B2D959]/40 m3-elevation-1 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#B2D959]/30 text-[#7EC151] border border-[#B2D959] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading-bn">
                {activeTab === 'general' && (currentLang === 'bn' ? 'সাধারণ নিয়মাবলী (General Rules)' : 'General Rules')}
                {activeTab === 'freefire' && (currentLang === 'bn' ? 'ফ্রি ফায়ার ইন-গেম রুলস' : 'Free Fire Gameplay Rules')}
                {activeTab === 'fairplay' && (currentLang === 'bn' ? 'ফেয়ার প্লে ও এন্টি-চিট নীতিমালা' : 'Fair Play & Anti-Cheat Policies')}
                {activeTab === 'refund' && (currentLang === 'bn' ? 'রিফান্ড ও ক্ষতিপূরণ নীতি' : 'Refund & Reimbursement Policy')}
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {currentRules.map((rule, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5 border border-[#B2D959]/30"
              >
                <span className="w-6 h-6 rounded-full bg-[#B2D959]/40 text-[#064E3B] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  {index + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#0F172A] font-bengali leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-Cheating Warning Box */}
        <div className="bg-amber-50 border border-amber-300 rounded-3xl p-5 sm:p-6 flex items-start space-x-4 text-amber-950 font-bengali">
          <AlertOctagon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-amber-900">
              {currentLang === 'bn' ? 'সতর্কবার্তা: জিরো টলারেন্স নীতি' : 'Warning: Zero Tolerance Policy'}
            </p>
            <p className="text-amber-800/90 leading-relaxed">
              {currentLang === 'bn'
                ? 'যেকোনো তৃতীয় পক্ষের স্ক্রিপ্ট, হ্যাক বা অনৈতিক সুবিধাজনক টুল ব্যবহার করলে আপনার একাউন্ট স্থায়ীভাবে নিষ্ক্রিয় করা হবে এবং উইনিং প্রাইজ বাজেয়াপ্ত করা হবে।'
                : 'Using any third-party tools, injection scripts, or unethical exploits leads to an immediate permanent ban and confiscation of winnings.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
