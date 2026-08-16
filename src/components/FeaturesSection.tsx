import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Trophy, 
  Smartphone, 
  CreditCard, 
  Lock, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Download, 
  Send, 
  RefreshCw,
  Flame,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language, PageView } from '../types';
import { STATS, CORE_VALUES, BRAND_ASSETS } from '../data/mockData';
import { AnimatedCounter } from './AnimatedCounter';

interface FeaturesSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  onNavigate: (page: PageView) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
  onNavigate,
}) => {
  const [activePaymentTab, setActivePaymentTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'rocket'>('bkash');
  const [simulatedAmount, setSimulatedAmount] = useState<number>(100);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState<boolean>(false);

  const handleSimulatePayment = () => {
    setIsVerifying(true);
    setVerifiedSuccess(false);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedSuccess(true);
    }, 1200);
  };

  const statCounters = [
    { target: 50000, prefix: '', suffix: '+', labelBn: 'সক্রিয় নিবন্ধিত গেমার', labelEn: 'Active Registered Gamers', subBn: 'সারাদেশ থেকে যুক্ত খেলোয়াড়', subEn: 'Competitive players BD' },
    { target: 10, prefix: '৳', suffix: ' লাখ+', labelBn: 'নগদ পুরস্কার বিতরণ', labelEn: 'Cash Prizes Distributed', subBn: 'বিকাশ ও নগদে পরিশোধিত', subEn: 'Instant mobile payouts' },
    { target: 100000, prefix: '', suffix: '+', labelBn: 'সম্পন্ন টুর্নামেন্ট', labelEn: 'Tournaments Hosted', subBn: 'সোলো, ডুও ও স্কোয়াড ম্যাচ', subEn: 'Custom matches played' },
    { target: 100, prefix: '', suffix: '%', labelBn: 'স্বয়ংক্রিয় নিরাপদ সিস্টেম', labelEn: 'Automated Fair Play', subBn: '১০০% হ্যাকার-মুক্ত পরিবেশ', subEn: 'Anti-cheat protection' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#B2D959]/30 relative overflow-hidden">
      
      {/* Background Frosted Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B2D959]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#B2D959]/25 text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-bengali shadow-2xs border border-[#B2D959]"
          >
            <Sparkles className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'কেন Fast Gaming BD সেরা?' : 'Why Choose Fast Gaming BD?'}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading-bn tracking-tight leading-tight"
          >
            {currentLang === 'bn' ? 'বাংলাদেশের সবচেয়ে নির্ভরযোগ্য গেমিং প্ল্যাটফর্ম' : "Bangladesh's Most Reliable Gaming Platform"}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#334155] text-base sm:text-lg md:text-xl font-bengali leading-relaxed"
          >
            {currentLang === 'bn'
              ? 'অটোমেটেড সিস্টেম, স্বচ্ছ ফলাফল ও বিকাশ-নগদে দ্রুততম পেআউট নিয়ে আমরা প্রতিজ্ঞাবদ্ধ।'
              : 'Empowering Bangladeshi gamers with automated room management, transparent leaderboards, and instant mobile payouts.'}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 4 TRUST METRICS BENTO GRID WITH SCROLL COUNT-UP ANIMATION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCounters.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-[#B2D959]/40 m3-elevation-2 text-center hover:m3-elevation-3 transition-all duration-300 shadow-md group hover:-translate-y-1"
            >
              <p className="text-3xl sm:text-5xl font-black text-[#7EC151] font-display mb-2 group-hover:scale-105 transition-transform">
                <AnimatedCounter
                  end={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isBengali={currentLang === 'bn'}
                />
              </p>
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading-bn mb-1">
                {currentLang === 'bn' ? stat.labelBn : stat.labelEn}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] font-bengali">
                {currentLang === 'bn' ? stat.subBn : stat.subEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* AUTOMATED PAYMENT SIMULATOR CARD */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl border border-[#B2D959]/50 m3-elevation-3 p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Explanation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#B2D959]/20 text-[#0F172A] px-3.5 py-1 rounded-full text-xs font-bold font-bengali border border-[#B2D959]">
                <Zap className="w-4 h-4 text-[#FED24F] fill-[#FED24F]" />
                <span>{currentLang === 'bn' ? 'স্বয়ংক্রিয় ওয়ালেট গেটওয়ে' : 'Automated Wallet System'}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-heading-bn leading-tight">
                {currentLang === 'bn' ? 'বিকাশ, নগদ ও রকেটে ২ মিনিটে ডিপোজিট ও উইথড্র' : '2-Minute Deposit & Cashout via bKash, Nagad & Rocket'}
              </h3>

              <p className="text-sm sm:text-base text-[#334155] font-bengali leading-relaxed">
                {currentLang === 'bn'
                  ? 'কোনো ম্যানুয়াল অপেক্ষা নেই! আপনি ম্যাচ জেতার পর আপনার উইনিং ব্যালেন্স স্বয়ংক্রিয়ভাবে সরাসরি ওয়ালেটে যোগ হয় এবং আপনি সেকেন্ডের মধ্যে আপনার বিকাশ ও নগদ নম্বরে উইথড্র গ্রহণ করতে পারেন।'
                  : 'Zero manual bottlenecks. Match rewards credit automatically into your gamer wallet, and withdrawals dispatch instantly.'}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm font-bengali text-[#0F172A] pt-2 font-medium">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC151] shrink-0" />
                  <span>সর্বনিম্ন ডিপোজিট মাত্র ২০ টাকা • সর্বনিম্ন উইথড্র মাত্র ৫০ টাকা</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC151] shrink-0" />
                  <span>কোনো অতিরিক্ত সার্ভিস চার্জ বা হিডেন ফি নেই (০% ফি)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC151] shrink-0" />
                  <span>২৪/৭ লাইভ সাপোর্ট ও তাৎক্ষণিক ট্রানজেকশন ট্র্যাকিং</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Simulator Widget */}
            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-6 border border-[#B2D959]/50 shadow-inner">
              {/* Tab Selector */}
              <div className="flex bg-slate-200/90 p-1.5 rounded-2xl mb-5 font-bengali text-xs sm:text-sm font-bold">
                <button
                  id="tab-deposit-sim"
                  onClick={() => { setActivePaymentTab('deposit'); setVerifiedSuccess(false); }}
                  className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer ${
                    activePaymentTab === 'deposit' ? 'bg-[#7EC151] text-white shadow-md font-black' : 'text-slate-600'
                  }`}
                >
                  {currentLang === 'bn' ? 'টাকা অ্যাড (Deposit)' : 'Add Money (Deposit)'}
                </button>
                <button
                  id="tab-withdraw-sim"
                  onClick={() => { setActivePaymentTab('withdraw'); setVerifiedSuccess(false); }}
                  className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer ${
                    activePaymentTab === 'withdraw' ? 'bg-[#7EC151] text-white shadow-md font-black' : 'text-slate-600'
                  }`}
                >
                  {currentLang === 'bn' ? 'টাকা উইথড্র (Cashout)' : 'Withdraw (Cashout)'}
                </button>
              </div>

              {/* Gateway Choice with Official Vector Logos */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {[
                  { id: 'bkash', label: 'bKash', img: BRAND_ASSETS.payments.bkash, color: 'border-[#B2D959] text-pink-700 bg-pink-50/80 shadow-pink-500/10' },
                  { id: 'nagad', label: 'Nagad', img: BRAND_ASSETS.payments.nagad, color: 'border-[#B2D959] text-orange-700 bg-orange-50/80 shadow-orange-500/10' },
                  { id: 'rocket', label: 'Rocket', img: BRAND_ASSETS.payments.rocket, color: 'border-[#B2D959] text-purple-700 bg-purple-50/80 shadow-purple-500/10' },
                ].map((gw) => (
                  <button
                    key={gw.id}
                    onClick={() => setPaymentMethod(gw.id as any)}
                    className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === gw.id 
                        ? `${gw.color} ring-2 ring-[#7EC151] font-black shadow-md scale-102` 
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={gw.img} alt={gw.label} className="h-6 w-auto object-contain" referrerPolicy="no-referrer" />
                    <span>{gw.label}</span>
                  </button>
                ))}
              </div>

              {/* Amount Quick Select */}
              <div className="mb-5">
                <label className="block text-xs sm:text-sm font-bold text-[#0F172A] font-bengali mb-2">
                  {currentLang === 'bn' ? 'টাকার পরিমাণ নির্বাচন করুন:' : 'Select Amount (BDT):'}
                </label>
                <div className="flex gap-2.5">
                  {[50, 100, 200, 500].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSimulatedAmount(amt)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
                        simulatedAmount === amt ? 'bg-[#7EC151] text-white border-[#7EC151] shadow-sm font-black' : 'bg-white text-[#0F172A] border-slate-300'
                      }`}
                    >
                      ৳{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              {!verifiedSuccess ? (
                <button
                  id="sim-action-btn"
                  disabled={isVerifying}
                  onClick={handleSimulatePayment}
                  className="w-full bg-[#7EC151] hover:bg-[#72b047] disabled:bg-slate-400 text-white font-extrabold py-4 px-4 rounded-2xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center space-x-2 font-bengali cursor-pointer active:scale-98"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{currentLang === 'bn' ? 'পেমেন্ট গেটওয়ে ভেরিফাই হচ্ছে...' : 'Verifying gateway...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>
                        {activePaymentTab === 'deposit' 
                          ? (currentLang === 'bn' ? `৳${simulatedAmount} স্বয়ংক্রিয় ডিপোজিট টেস্ট করুন` : `Simulate ৳${simulatedAmount} Deposit`)
                          : (currentLang === 'bn' ? `৳${simulatedAmount} ইনস্ট্যান্ট উইথড্র টেস্ট করুন` : `Simulate ৳${simulatedAmount} Cashout`)}
                      </span>
                    </>
                  )}
                </button>
              ) : (
                <div className="p-4 bg-[#B2D959]/30 rounded-2xl border border-[#B2D959] text-center font-bengali text-xs sm:text-sm space-y-1.5 shadow-xs">
                  <p className="font-black text-[#0F172A] flex items-center justify-center space-x-1.5">
                    <CheckCircle2 className="w-5 h-5 text-[#7EC151]" />
                    <span>{currentLang === 'bn' ? 'সফলভাবে ভেরিফাইড!' : 'Verified Successfully!'}</span>
                  </p>
                  <p className="text-[#064E3B] leading-relaxed font-medium">
                    {activePaymentTab === 'deposit' 
                      ? `৳${simulatedAmount} ব্যালেন্স আপনার গেমিং ওয়ালেটে যুক্ত হয়েছে।`
                      : `৳${simulatedAmount} আপনার ${paymentMethod} নম্বরে স্বয়ংক্রিয়ভাবে ট্রান্সফার সম্পন্ন।`}
                  </p>
                </div>
              )}

            </div>

          </div>
        </motion.div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-7 border border-[#B2D959]/40 m3-elevation-1 flex flex-col justify-between hover:m3-elevation-3 transition-all duration-300 shadow-sm hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#B2D959]/30 text-[#7EC151] border border-[#B2D959] flex items-center justify-center mb-5 shadow-xs">
                  {idx === 0 && <ShieldCheck className="w-7 h-7" />}
                  {idx === 1 && <Zap className="w-7 h-7" />}
                  {idx === 2 && <Smartphone className="w-7 h-7" />}
                  {idx === 3 && <Trophy className="w-7 h-7 text-[#FED24F]" />}
                </div>

                <h4 className="text-xl font-extrabold text-[#0F172A] font-heading-bn mb-2.5">
                  {currentLang === 'bn' ? pillar.titleBn : pillar.titleEn}
                </h4>

                <p className="text-sm text-[#475569] font-bengali leading-relaxed">
                  {currentLang === 'bn' ? pillar.descBn : pillar.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
