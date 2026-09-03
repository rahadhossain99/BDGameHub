import React, { useState } from 'react';
import { 
  Play, 
  PlayCircle, 
  Youtube, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Eye, 
  Copy, 
  Check, 
  Gamepad2, 
  Wallet, 
  Key, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Download,
  Flame,
  Tv,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import { TUTORIAL_VIDEOS } from '../data/mockData';
import { Language, TutorialVideo } from '../types';
import { TypingTextEffect } from './TypingTextEffect';
import { TextFlipper } from './TextFlipper';

interface TutorialSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  selectedVideoId?: string;
}

export const TutorialSection: React.FC<TutorialSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
  selectedVideoId,
}) => {
  const [activeVideo, setActiveVideo] = useState<TutorialVideo>(
    TUTORIAL_VIDEOS.find(v => v.id === selectedVideoId) || TUTORIAL_VIDEOS[0]
  );
  const [activeStepTab, setActiveStepTab] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const simulatedSlot = 14;

  const [isPlayingActiveVideo, setIsPlayingActiveVideo] = useState<boolean>(false);

  const handleSelectVideo = (video: TutorialVideo) => {
    setActiveVideo(video);
    setIsPlayingActiveVideo(false);
    setActiveStepTab(0);
  };

  const handleCopyDemoCode = () => {
    navigator.clipboard.writeText('ROOM ID: 948201 | PASS: 7788');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // Phrases for typing animation
  const typingPhrasesBn = [
    'বিকাশ ও নগদে মাত্র ২ মিনিটে ক্যাশআউট',
    'ম্যাচ শুরুর ৫ মিনিট আগে অটো রুম কোড ও পাসওয়ার্ড',
    'সহজে ফ্রি ফায়ার টুর্নামেন্টে জয়েন করার উপায়',
    'প্রতি কিলের জন্য সরাসরি ওয়ালেটে নগদ টাকা লাভ',
    '১০০% নিরাপদ ও স্বয়ংক্রিয় টুর্নামেন্ট প্ল্যাটফর্ম',
  ];

  const typingPhrasesEn = [
    'Instant 2-Minute Cashout via bKash & Nagad',
    'Automated Room ID & Password 5 Mins Before Match',
    'Step-by-Step Free Fire Tournament Joining Guide',
    'Direct Per-Kill Cash Rewards into Your Wallet',
    '100% Fair, Automated & Trusted eSports Platform',
  ];

  // Marquee items for the Left-to-Right moving ribbon
  const marqueeItems = [
    {
      id: 'how-to-play-full',
      icon: <Gamepad2 className="w-4 h-4 text-[#7EC151]" />,
      textBn: '🎮 গাইড: সম্পূর্ণ টুর্নামেন্ট জয়েন ও খেলার নিয়ম',
      textEn: '🎮 Guide: Complete Tournament Walkthrough',
      tagBn: 'ভিডিও ১',
      tagEn: 'Video 1',
    },
    {
      id: 'how-to-deposit-bKash',
      icon: <Wallet className="w-4 h-4 text-[#FED24F]" />,
      textBn: '💳 ডিপোজিট: বিকাশ ও নগদে ১ মিনিটে টাকা অ্যাড',
      textEn: '💳 Deposit: Add Balance in 1-Min via bKash/Nagad',
      tagBn: 'ভিডিও ২',
      tagEn: 'Video 2',
    },
    {
      id: 'how-to-get-room-code',
      icon: <Key className="w-4 h-4 text-[#B2D959]" />,
      textBn: '🔑 রুম কোড: ম্যাচের ৫ মিনিট আগে অটো আইডি ও পাস',
      textEn: '🔑 Room Code: Automated Credentials in App',
      tagBn: 'ভিডিও ৩',
      tagEn: 'Video 3',
    },
    {
      id: 'how-to-withdraw-prize',
      icon: <Sparkles className="w-4 h-4 text-[#FED24F]" />,
      textBn: '💰 উইথড্রয়াল: জেতার পর সরাসরি বিকাশ/নগদে ক্যাশআউট',
      textEn: '💰 Cashout: Instant Winnings Payout in 2 Mins',
      tagBn: 'ভিডিও ৪',
      tagEn: 'Video 4',
    },
    {
      id: 'free-fire-pro-tactics',
      icon: <Flame className="w-4 h-4 text-[#FED24F]" />,
      textBn: '🔥 প্রো গেমপ্লে: কাস্টম ম্যাচে কিল ও বুইয়াহ কৌশল',
      textEn: '🔥 Pro Gameplay: Custom Match High Kills Guide',
      tagBn: 'ভিডিও ৫',
      tagEn: 'Video 5',
    },
    {
      id: 'fair-play',
      icon: <ShieldCheck className="w-4 h-4 text-[#B2D959]" />,
      textBn: '🛡️ ১০০% ফেয়ার প্লে ও হ্যাকার-মুক্ত সিকিউরিটি',
      textEn: '🛡️ 100% Fair Play & Anti-Cheat Security',
      tagBn: 'নিরাপত্তা',
      tagEn: 'Security',
    },
  ];

  return (
    <section 
      id="tutorials-section" 
      className="py-20 sm:py-28 bg-[#F8FAFC] bg-dot-pattern border-b border-[#B2D959]/30 relative overflow-hidden"
    >
      
      {/* Background Soft Glow Accents & Gradients */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#B2D959]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER WITH TYPING EFFECT & CRISP LARGE TYPOGRAPHY */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#7EC151]/15 text-[#064E3B] border border-[#7EC151]/40 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black shadow-xs font-bengali">
            <span className="p-1 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </span>
            <span>{currentLang === 'bn' ? 'অফিসিয়াল ভিডিও টিউটোরিয়াল গাইড' : 'Official Video Guides'}</span>
          </div>

          {/* Main Large Bengali Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] font-heading-bn tracking-tight leading-tight">
            {currentLang === 'bn' ? 'ভিডিও দেখে সহজে শিখুন' : 'Watch Videos & Learn Easily'}
          </h2>

          {/* Upgraded, Larger & Highly Polished Tutorial Highlights Box */}
          <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border-2 border-[#0F172A] shadow-[6px_6px_0px_0px_#0F172A] transform-gpu">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="p-1.5 rounded-xl bg-[#FED24F] text-[#0F172A] border border-[#0F172A] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#0F172A]" />
              </span>
              <p className="text-xs sm:text-sm md:text-base font-black text-[#0F172A] uppercase tracking-wider font-bengali">
                {currentLang === 'bn' ? 'টিউটোরিয়াল হাইলাইটস (Tutorial Highlights):' : 'Tutorial Highlights:'}
              </p>
            </div>
            
            <div className="h-[54px] sm:h-[64px] flex items-center justify-center overflow-hidden">
              <TypingTextEffect
                phrases={currentLang === 'bn' ? typingPhrasesBn : typingPhrasesEn}
                pauseDuration={2800}
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#7EC151] text-center"
              />
            </div>
          </div>

          <p className="text-[#334155] text-base sm:text-lg md:text-xl font-bengali leading-relaxed max-w-3xl mx-auto pt-1">
            {currentLang === 'bn'
              ? 'নিচের ভিডিওগুলো দেখলে আপনি সহজে বুঝতে পারবেন কিভাবে অ্যাপ ইন্সটল করবেন, রুম কোড নিয়ে গেমে ঢুকবেন এবং জয়ী হয়ে মাত্র ২ মিনিটে বিকাশ বা নগদে টাকা ক্যাশআউট করবেন।'
              : 'Watch the step-by-step videos below to master tournament joining, automated room codes, and instant mobile wallet cashouts.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ANIMATED MARQUEE RIBBON (PREMIUM DARK BANNER RESTORED) */}
        {/* ========================================================================= */}
        <div className="relative py-2.5 overflow-hidden select-none bg-[#0F172A] rounded-2xl shadow-xl border border-[#B2D959]/40">
          <div className="animate-marquee-ltr flex items-center space-x-4 py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            {[...marqueeItems, ...marqueeItems].map((item, index) => {
              const isItemVideo = TUTORIAL_VIDEOS.some(v => v.id === item.id);
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => {
                    if (isItemVideo) {
                      const found = TUTORIAL_VIDEOS.find(v => v.id === item.id);
                      if (found) {
                        setActiveVideo(found);
                        setActiveStepTab(0);
                      }
                    }
                  }}
                  className={`inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-[#B2D959]/30 text-white transition-all shadow-xs ${
                    isItemVideo ? 'cursor-pointer hover:border-[#7EC151]' : 'cursor-default'
                  }`}
                >
                  <span className="p-1.5 rounded-lg bg-black/50 text-[#FED24F]">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-bengali whitespace-nowrap text-slate-100">
                    {currentLang === 'bn' ? item.textBn : item.textEn}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#7EC151]/30 text-[#B2D959] font-black border border-[#7EC151]/50">
                    {currentLang === 'bn' ? item.tagBn : item.tagEn}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT & BEAUTIFUL VIDEO CARDS GRID (LESS TALL, TIGHTER PADDING) */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading-bn flex items-center space-x-2">
              <Tv className="w-5 h-5 text-[#7EC151]" />
              <span>{currentLang === 'bn' ? 'সকল ভিডিও টিউটোরিয়াল (ক্লিক করে দেখুন)' : 'All Video Guides (Click to Watch)'}</span>
            </h3>
            <span className="text-xs font-bold text-[#064E3B] bg-[#7EC151]/20 px-3 py-1 rounded-full font-bengali border border-[#7EC151]/40">
              {currentLang === 'bn' ? '৫টি সম্পূর্ণ ভিডিও' : '5 Video Guides'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {TUTORIAL_VIDEOS.map((video, idx) => {
              const isSelected = activeVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  id={`video-card-${video.id}`}
                  onClick={() => handleSelectVideo(video)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-[#7EC151] ring-3 ring-[#7EC151]/30 shadow-lg scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 border-[#B2D959]/50 hover:border-[#7EC151] shadow-sm hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Active Selected Tag Banner */}
                  {isSelected && (
                    <div className="absolute top-2 left-2 z-30 bg-[#7EC151] text-white px-2.5 py-0.5 rounded-full text-[11px] font-black font-bengali flex items-center space-x-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFF449] animate-ping"></span>
                      <span>{currentLang === 'bn' ? 'এখন চলছে' : 'Now Playing'}</span>
                    </div>
                  )}

                  {/* Top Thumbnail Image Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnailUrl}
                      alt={currentLang === 'bn' ? video.titleBn : video.titleEn}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-red-600 text-white scale-110 shadow-md shadow-red-600/50' 
                          : 'bg-black/70 group-hover:bg-red-600 text-white backdrop-blur-xs group-hover:scale-105'
                      }`}>
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge Bottom Right */}
                    <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-white text-[10px] font-bold font-mono flex items-center space-x-1 border border-white/20">
                      <Clock className="w-3 h-3 text-[#B2D959]" />
                      <span>{video.duration}</span>
                    </div>

                    {/* YouTube Badge Top Right */}
                    <div className="absolute top-1.5 right-1.5 bg-red-600 text-white p-1 rounded-md shadow-xs">
                      <Youtube className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>

                  {/* Bottom Text Content & Details (More compact, tighter padding) */}
                  <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between space-y-2">
                    
                    <div className="space-y-1.5">
                      {/* Category Pill */}
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black font-bengali ${
                          isSelected
                            ? 'bg-[#B2D959]/30 text-[#064E3B] border border-[#B2D959]'
                            : 'bg-slate-100 text-[#0F172A]'
                        }`}>
                          {currentLang === 'bn' ? video.categoryBn : video.categoryEn}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono font-bold">
                          #{idx + 1}
                        </span>
                      </div>

                      {/* Video Title */}
                      <h4 className={`text-xs sm:text-sm font-black font-heading-bn leading-snug line-clamp-2 ${
                        isSelected ? 'text-[#7EC151]' : 'text-[#0F172A] group-hover:text-[#7EC151]'
                      }`}>
                        {currentLang === 'bn' ? video.titleBn : video.titleEn}
                      </h4>
                    </div>

                    {/* Action Button at bottom */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold font-bengali text-[#7EC151] group-hover:underline flex items-center space-x-1">
                        <span>{isSelected ? (currentLang === 'bn' ? 'চলমান টিউটোরিয়াল' : 'Active') : (currentLang === 'bn' ? 'ভিডিও দেখুন' : 'Watch Guide')}</span>
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>

                      <span className="text-[10px] text-slate-400 font-bengali">
                        {video.views}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN VIDEO PLAYER VIEW & INTERACTIVE STEP SIMULATOR */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-2">
          
          {/* Left / Main: Clean YouTube Video Player Frame */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border-2 border-[#B2D959]/50 shadow-xl space-y-5">
            
            {/* Embedded YouTube Player - Clean & Pure video without clutter */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-200">
              {!isPlayingActiveVideo ? (
                <div 
                  onClick={() => setIsPlayingActiveVideo(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden group select-none"
                >
                  <img 
                    src={activeVideo.thumbnailUrl} 
                    alt={currentLang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex flex-col items-center justify-center space-y-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                    </div>
                    <span className="bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm font-black font-bengali px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                      {currentLang === 'bn' ? 'ক্লিন মোডে ভিডিও প্লে করুন' : 'Click to Play Clean Video'}
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=1`}
                  title={currentLang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            {/* Video Meta Info */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 bg-red-50 text-red-700 text-xs font-extrabold rounded-full inline-flex items-center space-x-1.5 font-bengali border border-red-200">
                  <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
                  <span>{currentLang === 'bn' ? 'অফিসিয়াল ভিডিও টিউটোরিয়াল' : 'Official Video Tutorial'}</span>
                </span>

                <div className="flex items-center space-x-3 text-xs text-slate-600 font-bold">
                  <span className="flex items-center space-x-1 font-mono bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeVideo.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1 bg-[#7EC151]/15 text-[#064E3B] px-2.5 py-1 rounded-lg font-bengali">
                    <Eye className="w-3.5 h-3.5 text-[#7EC151]" />
                    <span>{activeVideo.views}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0F172A] font-heading-bn leading-tight">
                {currentLang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
              </h3>

              <p className="text-sm sm:text-base text-[#334155] font-bengali leading-relaxed">
                {currentLang === 'bn' ? activeVideo.descriptionBn : activeVideo.descriptionEn}
              </p>
            </div>

            {/* Pro Tips Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FED24F]/20 border-2 border-[#FED24F] shadow-xs">
              <div className="flex items-center space-x-2 text-[#0F172A] font-black text-sm sm:text-base font-heading-bn mb-2.5">
                <Sparkles className="w-4 h-4 text-[#0F172A]" />
                <span>{currentLang === 'bn' ? 'গুরুত্বপূর্ণ প্রো টিপস (Pro Tips):' : 'Important Pro Tips:'}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] font-bengali">
                {(currentLang === 'bn' ? activeVideo.tipsBn : activeVideo.tipsEn).map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#FED24F] text-[#0F172A] border border-[#0F172A] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 font-mono">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-bold">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Step-by-Step Interactive Guide & Room Code Simulator (Light Themed with Fast Gaming Palette) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Steps Breakdown Accordion */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border-2 border-[#B2D959]/50 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#7EC151] text-white flex items-center justify-center font-black text-base font-bengali shadow-sm">
                    {activeVideo.steps.length}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#0F172A] font-heading-bn">
                      {currentLang === 'bn' ? 'টিউটোরিয়ালের মূল ধাপসমূহ' : 'Key Walkthrough Steps'}
                    </h4>
                    <p className="text-xs text-[#475569] font-bengali">
                      {currentLang === 'bn' ? 'ক্লিক করে প্রতিটি ধাপের বিস্তারিত দেখুন' : 'Click to inspect each step'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {activeVideo.steps.map((step, index) => {
                  const isExpanded = activeStepTab === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveStepTab(index)}
                      className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isExpanded
                          ? 'bg-[#7EC151]/10 border-[#7EC151] shadow-sm ring-2 ring-[#7EC151]/20'
                          : 'bg-[#F8FAFC] hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shadow-xs ${
                            isExpanded ? 'bg-[#7EC151] text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {index + 1}
                          </span>
                          <span className={`text-sm sm:text-base font-bold font-bengali ${isExpanded ? 'text-[#064E3B] font-black' : 'text-[#0F172A]'}`}>
                            {currentLang === 'bn' ? step.titleBn : step.titleEn}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transform transition-transform ${isExpanded ? 'rotate-90 text-[#7EC151]' : ''}`} />
                      </div>

                      {isExpanded && (
                        <div className="mt-2.5 pt-2.5 border-t border-[#B2D959]/50 text-xs sm:text-sm text-[#0F172A] font-bengali leading-relaxed font-semibold">
                          {currentLang === 'bn' ? step.detailBn : step.detailEn}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Room Code & Game Join Live Demo Widget - Beautiful Light Palette matching Theme */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-[#0F172A] relative overflow-hidden space-y-4">
              
              {/* Background Light Glow */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#7EC151]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-[#7EC151]/20 rounded-xl text-[#064E3B] border border-[#7EC151]/40">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-black text-[#064E3B] uppercase tracking-wider font-bengali">
                    {currentLang === 'bn' ? 'লাইভ ইন্টারঅ্যাক্টিভ ডেমো' : 'Live Interactive Demo'}
                  </span>
                </div>
                <span className="flex items-center space-x-1.5 text-xs bg-[#FED24F] px-3 py-1 rounded-full text-[#0F172A] font-mono font-bold border border-[#0F172A]/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  <span>Free Fire Custom</span>
                </span>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-black text-[#0F172A] font-heading-bn">
                  {currentLang === 'bn' ? 'স্বয়ংক্রিয় রুম কোড কিভাবে পাবেন?' : 'How Automated Room Code Appears'}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] font-bengali mt-0.5 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'ম্যাচ শুরুর ঠিক ৫ মিনিট আগে অ্যাপে স্বয়ংক্রিয়ভাবে রুম কোড ভেসে ওঠে:'
                    : '5 minutes prior to match, credentials pop up inside your app:'}
                </p>
              </div>

              {/* Demo Room Code Box */}
              <div className="bg-[#F8FAFC] rounded-2xl p-4 border-2 border-[#B2D959]/60 space-y-3.5">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white rounded-xl p-2.5 border-2 border-[#0F172A] shadow-xs">
                    <p className="text-[10px] text-slate-500 font-bold uppercase font-mono tracking-wider">ROOM ID</p>
                    <p className="text-lg sm:text-xl font-black tracking-widest text-[#0F172A] font-mono mt-0.5">948201</p>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border-2 border-[#0F172A] shadow-xs">
                    <p className="text-[10px] text-slate-500 font-bold uppercase font-mono tracking-wider">PASSWORD</p>
                    <p className="text-lg sm:text-xl font-black tracking-widest text-[#0F172A] font-mono mt-0.5">7788</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm font-bengali text-[#0F172A] px-1 font-bold">
                  <span>{currentLang === 'bn' ? 'আপনার নির্দিষ্ট স্লট নম্বর:' : 'Your Designated Slot:'}</span>
                  <span className="font-mono font-black bg-[#FED24F] text-[#0F172A] px-3 py-0.5 rounded-lg text-xs border border-[#0F172A] shadow-2xs">
                    Slot #{simulatedSlot}
                  </span>
                </div>

                <button
                  id="copy-demo-room-code-btn"
                  onClick={handleCopyDemoCode}
                  className="w-full flex items-center justify-center space-x-2 bg-[#FED24F] hover:bg-[#ebd545] text-[#0F172A] font-black py-3 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-bengali border-2 border-[#0F172A] shadow-[3px_3px_0px_0px_#0F172A] active:translate-y-0.5 active:shadow-none"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-[#064E3B]" />
                      <span>{currentLang === 'bn' ? 'কপি সফল হয়েছে!' : 'Copied to Clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{currentLang === 'bn' ? 'এক ক্লিকে রুম আইডি ও পাস কপি করুন' : 'One-Click Copy Room ID & Pass'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct APK Download Prompt */}
              <button
                id="tutorial-download-cta-btn"
                onClick={onOpenDownloadModal}
                className="w-full flex items-center justify-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-black py-3.5 px-4 rounded-2xl text-sm sm:text-base transition-all shadow-md cursor-pointer font-bengali"
              >
                <Download className="w-4.5 h-4.5 text-white" />
                <span>{currentLang === 'bn' ? 'এখনই অফিসিয়াল অ্যাপ ডাউনলোড করুন (APK)' : 'Download Last Gaming APK'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
