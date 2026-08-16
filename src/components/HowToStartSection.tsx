import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ShieldCheck, 
  Settings, 
  UserCheck, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STEP_GUIDES } from '../data/mockData';
import { Language, PageView } from '../types';

interface HowToStartSectionProps {
  currentLang: Language;
  onNavigate: (page: PageView) => void;
  onOpenDownloadModal: () => void;
}

export const HowToStartSection: React.FC<HowToStartSectionProps> = ({
  currentLang,
  onNavigate,
  onOpenDownloadModal,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Clean 5-second interval without high-frequency 50ms re-renders
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % STEP_GUIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentStepIndex]);

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  const nextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % STEP_GUIDES.length);
  };

  const prevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + STEP_GUIDES.length) % STEP_GUIDES.length);
  };

  const currentStep = STEP_GUIDES[currentStepIndex];

  return (
    <section 
      id="how-to-start-section"
      className="py-16 sm:py-24 bg-[#F8FAFC] bg-dot-pattern border-b border-[#B2D959]/30 relative overflow-hidden contain-paint"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      
      {/* Surrounding Ambient Multi-Glow Background Animations */}
      <div className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#7EC151]/10 rounded-full blur-2xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#B2D959]/15 rounded-full blur-2xl pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 sm:space-y-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center space-x-2 bg-[#B2D959]/25 text-[#0F172A] border border-[#B2D959] px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider font-bengali shadow-xs">
          <Sparkles className="w-4 h-4 text-[#7EC151]" />
          <span>{currentLang === 'bn' ? 'স্বয়ংক্রিয় টিউটোরিয়াল গাইড' : 'AUTOMATED STEP-BY-STEP GUIDE'}</span>
        </div>

        {/* Section Headline */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading-bn tracking-tight leading-tight">
            {currentLang === 'bn' ? 'কিভাবে শুরু করবেন?' : 'How to Get Started?'}
          </h2>
          
          <p className="text-[#334155] text-base sm:text-lg font-bengali max-w-2xl mx-auto leading-relaxed">
            {currentLang === 'bn' 
              ? 'নিচের ৪টি ধাপে স্বয়ংক্রিয়ভাবে দেখুন কিভাবে Fast Gaming অ্যাপ ইনস্টল করবেন ও খেলা শুরু করবেন।'
              : 'Watch the automated step-by-step walkthrough to download, install, and start winning.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL STEP TABS WITH REAL-TIME ACTIVE PROGRESS INDICATORS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {STEP_GUIDES.map((step, idx) => {
            const isActive = currentStepIndex === idx;
            return (
              <button
                key={step.stepNumber}
                id={`how-to-step-tab-${idx}`}
                onClick={() => goToStep(idx)}
                className={`relative overflow-hidden rounded-2xl p-3 sm:p-4 text-left transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#7EC151] shadow-lg ring-2 ring-[#7EC151]/20'
                    : 'bg-white/80 hover:bg-white border-[#B2D959]/40 shadow-2xs'
                }`}
              >
                {/* Active Progress Filling Bar on current step using smooth CSS animation */}
                {isActive && isAutoPlaying && (
                  <div 
                    key={`step-progress-${currentStepIndex}`}
                    className="absolute top-0 left-0 bottom-0 bg-[#7EC151]/15 pointer-events-none animate-progress-fill"
                  />
                )}

                <div className="flex items-center space-x-2.5 relative z-10">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-2xs font-bengali ${
                    isActive ? 'bg-[#7EC151] text-white' : 'bg-[#B2D959]/20 text-[#0F172A]'
                  }`}>
                    {currentLang === 'bn' ? (idx + 1).toLocaleString('bn-BD') : idx + 1}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs sm:text-sm font-black font-bengali truncate ${
                      isActive ? 'text-[#7EC151]' : 'text-[#0F172A]'
                    }`}>
                      {currentLang === 'bn' ? step.titleBn : step.titleEn}
                    </p>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      Step {idx + 1} of 4
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MAIN STEPPER CAROUSEL WITH COMPACT, BALANCED HEIGHT (SHORTER & CLEANER) */}
        {/* ========================================================================= */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-[#7EC151] via-[#B2D959] to-[#7EC151] shadow-lg">
          
          <div className="bg-white rounded-[22px] p-5 sm:p-7 md:p-8 text-left relative overflow-hidden">
            
            {/* Top Auto-Play & Step Indicator Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <div className="flex items-center space-x-1.5 bg-[#7EC151]/15 text-[#064E3B] px-3 py-0.5 rounded-full text-xs font-black font-bengali border border-[#7EC151]/40">
                  <span className="w-2 h-2 rounded-full bg-[#7EC151] animate-pulse"></span>
                  <span>
                    {currentLang === 'bn' ? `ধাপ ${currentStepIndex + 1} / ৪` : `Step ${currentStepIndex + 1} of 4`}
                  </span>
                </div>

                <span className="text-xs text-[#475569] font-bengali hidden sm:inline">
                  {isAutoPlaying 
                    ? (currentLang === 'bn' ? 'অটো পরিবর্তন (৫ সেকেন্ড)' : 'Auto-changing (5s)') 
                    : (currentLang === 'bn' ? 'স্থগিত' : 'Paused')}
                </span>
              </div>

              {/* Play / Pause Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition-colors cursor-pointer text-xs font-bold font-bengali flex items-center space-x-1"
                  title={isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#7EC151]" />
                      <span className="hidden md:inline text-[11px]">পজ</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#7EC151] fill-[#7EC151]" />
                      <span className="hidden md:inline text-[11px]">চালান</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Content Transition using Framer Motion */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center"
              >
                
                {/* Left Column: Step Details (Compact) */}
                <div className="md:col-span-7 space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-xs font-black text-[#7EC151] uppercase font-mono tracking-wider">
                      STEP #{currentStepIndex + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0F172A] font-heading-bn leading-tight">
                      {currentLang === 'bn' ? currentStep.titleBn : currentStep.titleEn}
                    </h3>
                    <p className="text-[#334155] text-xs sm:text-sm font-bengali leading-relaxed font-semibold">
                      {currentLang === 'bn' ? currentStep.subtitleBn : currentStep.subtitleEn}
                    </p>
                  </div>

                  {/* Bullet Points with Checkmarks (Tight Spacing) */}
                  <div className="space-y-2 pt-1">
                    {(currentLang === 'bn' ? currentStep.bulletsBn : currentStep.bulletsEn).map((bullet, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155] font-bengali">
                        <span className="w-4.5 h-4.5 rounded-full bg-[#7EC151]/20 text-[#064E3B] flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5 font-mono border border-[#7EC151]/40">
                          {idx + 1}
                        </span>
                        <span className="leading-snug font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download Button inside step */}
                  <div className="pt-1">
                    <button
                      onClick={onOpenDownloadModal}
                      className="inline-flex items-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all shadow-sm font-bengali cursor-pointer active:scale-98"
                    >
                      <Download className="w-4 h-4" />
                      <span>{currentLang === 'bn' ? 'অফিসিয়াল APK ডাউনলোড করুন' : 'Download APK'}</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Mockup Box (Compact & Shorter) */}
                <div className="md:col-span-5">
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-[#B2D959]/60 shadow-xs relative overflow-hidden">
                    
                    {/* Step 1 Mockup */}
                    {currentStepIndex === 0 && (
                      <div className="text-center py-2 space-y-2.5">
                        <div className="w-14 h-14 bg-[#7EC151]/20 text-[#064E3B] rounded-2xl flex items-center justify-center mx-auto shadow-xs border border-[#7EC151]/40">
                          <Download className="w-7 h-7 animate-bounce text-[#7EC151]" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#0F172A] font-mono">fastgamingbd.apk</p>
                          <span className="text-[10px] text-slate-500 font-mono">15.4 MB • Official v2.4</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div className="bg-[#7EC151] h-full w-4/5 rounded-full"></div>
                        </div>
                        <span className="text-xs text-[#064E3B] font-black font-bengali block">
                          ডাউনলোড হচ্ছে (৮০% সম্পন্ন)...
                        </span>
                      </div>
                    )}

                    {/* Step 2 Mockup */}
                    {currentStepIndex === 1 && (
                      <div className="py-1 space-y-2.5 text-left font-bengali">
                        <div className="flex items-center space-x-2 text-[#0F172A] bg-[#FED24F]/30 px-2.5 py-1 rounded-lg border border-[#FED24F]">
                          <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
                          <span className="text-[11px] font-black">Google Chrome সতর্কবার্তা</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[11px] text-[#0F172A] font-mono leading-tight shadow-2xs">
                          "File might be harmful... Download fastgamingbd.apk anyway?"
                        </div>
                        <button 
                          onClick={onOpenDownloadModal}
                          className="w-full bg-[#7EC151] text-white font-black py-2 rounded-lg text-xs shadow-xs flex items-center justify-center space-x-1.5"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Download Anyway চাপুন</span>
                        </button>
                      </div>
                    )}

                    {/* Step 3 Mockup */}
                    {currentStepIndex === 2 && (
                      <div className="py-2 space-y-3 text-left">
                        <div className="flex items-center justify-center text-slate-600">
                          <Settings className="w-8 h-8 text-[#7EC151]" />
                        </div>
                        <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#B2D959] shadow-2xs">
                          <div>
                            <p className="text-xs font-black text-[#0F172A]">Allow from this source</p>
                            <span className="text-[9px] text-slate-400">Settings &gt; Security</span>
                          </div>
                          <div className="w-12 h-6 bg-[#7EC151] rounded-full p-0.5 flex items-center justify-end">
                            <div className="w-5 h-5 bg-white rounded-full shadow-xs"></div>
                          </div>
                        </div>
                        <p className="text-[11px] text-center text-[#334155] font-bengali font-bold">
                          {currentLang === 'bn' ? 'অনুমতি অন করলেই ইনস্টল সম্পন্ন হবে' : 'Toggle on to proceed installation'}
                        </p>
                      </div>
                    )}

                    {/* Step 4 Mockup */}
                    {currentStepIndex === 3 && (
                      <div className="text-center py-1 space-y-2.5 font-bengali">
                        <div className="w-12 h-12 bg-[#7EC151]/20 text-[#064E3B] rounded-xl flex items-center justify-center mx-auto shadow-xs border border-[#7EC151]/40">
                          <UserCheck className="w-6 h-6 text-[#7EC151]" />
                        </div>
                        <p className="text-xs font-black text-[#0F172A]">
                          মোবাইল নম্বর ও OTP ভেরিফিকেশন
                        </p>
                        <div className="flex justify-center space-x-1.5">
                          {['9', '4', '8', '2'].map((num, i) => (
                            <div key={i} className="w-8 h-9 rounded-lg bg-white border-2 border-[#B2D959] font-black text-[#0F172A] flex items-center justify-center text-sm font-mono shadow-2xs">
                              {num}
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#FED24F]/30 text-[#0F172A] py-1.5 px-2.5 rounded-lg text-[11px] font-black border border-[#FED24F]">
                          🎉 রেজিস্ট্রেশন সম্পন্ন! এখনই খেলুন।
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Stepper Navigation Buttons & Bottom Indicators */}
        <div className="flex items-center justify-center space-x-5 select-none pt-2">
          <button
            id="how-to-prev-step-btn"
            onClick={prevStep}
            className="w-12 h-12 rounded-full bg-white border border-[#B2D959]/60 hover:border-[#7EC151] flex items-center justify-center text-[#0F172A] hover:text-[#7EC151] shadow-md cursor-pointer transition-all hover:scale-105"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2.5">
            {STEP_GUIDES.map((_, idx) => (
              <button
                key={idx}
                id={`step-dot-${idx}`}
                onClick={() => goToStep(idx)}
                className={`h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  currentStepIndex === idx
                    ? 'w-10 bg-[#7EC151] shadow-xs'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="how-to-next-step-btn"
            onClick={nextStep}
            className="w-12 h-12 rounded-full bg-white border border-[#B2D959]/60 hover:border-[#7EC151] flex items-center justify-center text-[#0F172A] hover:text-[#7EC151] shadow-md cursor-pointer transition-all hover:scale-105"
            aria-label="Next step"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Detailed Guide Button */}
        <div className="pt-2">
          <button
            id="how-to-detailed-guide-btn"
            onClick={() => onNavigate('download')}
            className="inline-flex items-center space-x-2.5 bg-[#B2D959]/25 hover:bg-[#B2D959]/40 text-[#0F172A] border border-[#B2D959] px-8 py-4 rounded-full text-sm sm:text-base font-black transition-all shadow-md cursor-pointer font-bengali"
          >
            <BookOpen className="w-5 h-5 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'বিস্তারিত ইনস্টলেশন নির্দেশিকা দেখুন' : 'View Full Installation Guide'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
