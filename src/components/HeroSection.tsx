import React, { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Download, 
  PlayCircle, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  Users, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Gamepad2,
  Coins,
  Flame,
  Target,
  Quote,
  FlameKindling,
  Key,
  Crown,
  Check,
  Tv,
  Pause,
  Play
} from 'lucide-react';
import { Language, PageView } from '../types';
import { TypingTextEffect, TypewriterText, RollingPhraseItem } from './TypingTextEffect';
import { BRAND_ASSETS } from '../data/mockData';

interface HeroSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  onNavigate: (page: PageView) => void;
  onOpenVideoModal: (videoId?: string) => void;
}

interface OrbitFeature {
  id: string;
  icon: React.ReactNode;
  bg: string;
  badge: string;
  tagBn: string;
  tagEn: string;
  labelBn: string;
  labelEn: string;
  leftMessageBn: string;
  leftMessageEn: string;
  rightMessageBn: string;
  rightMessageEn: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
  onNavigate,
  onOpenVideoModal,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);
  const [isLogoPulsing, setIsLogoPulsing] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // 8 synchronized orbiting features
  const orbitNodes: OrbitFeature[] = [
    {
      id: 'trophy',
      icon: <Trophy className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#FED24F] border-[#FED24F]',
      badge: '৳১০,০০০+',
      tagBn: 'মেগা পুল',
      tagEn: 'Mega Pool',
      labelBn: 'দৈনিক প্রাইজ পুল',
      labelEn: 'Daily Prize Pool',
      leftMessageBn: 'প্রতিদিন নগদ ৳১০,০০০+ টাকা গ্যারান্টিড টুর্নামেন্ট পুরস্কার পুল!',
      leftMessageEn: 'Win from ৳10,000+ guaranteed daily tournament prize pools!',
      rightMessageBn: '১ম স্থান অধিকারী জিতে নেবে সরাসরি বড় অংকের নিশ্চিত ক্যাশ প্রাইজ।',
      rightMessageEn: 'Top rankers win massive guaranteed cash payouts direct to wallet.',
    },
    {
      id: 'gamepad',
      icon: <Gamepad2 className="w-5 h-5 text-white" />,
      bg: 'bg-[#7EC151] border-[#7EC151]',
      badge: 'Free Fire',
      tagBn: 'সব মোড',
      tagEn: 'All Modes',
      labelBn: 'Free Fire টুর্নামেন্ট',
      labelEn: 'Free Fire Tournaments',
      leftMessageBn: 'Solo, Duo, Squad, Clash Squad ও 1v1 কাস্টম রুম টুর্নামেন্ট।',
      leftMessageEn: 'Solo, Duo, Squad, CS 4v4 & 1v1 custom tournaments.',
      rightMessageBn: 'সারাদিন যেকোনো সময় যেকোনো পছন্দের মোডে তাৎক্ষণিক জয়েন করার সুযোগ!',
      rightMessageEn: 'Join instant matches anytime across all custom game modes!',
    },
    {
      id: 'shield',
      icon: <ShieldCheck className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#B2D959] border-[#B2D959]',
      badge: '১০০% নিরাপদ',
      tagBn: 'এন্টি-চিট',
      tagEn: 'Anti-Cheat',
      labelBn: 'নিরাপদ ও সুরক্ষিত',
      labelEn: '100% Secure & Fair',
      leftMessageBn: 'শতভাগ এন্টি-চিট ও গুগল প্লে প্রটেক্ট ভেরিফাইড সুরক্ষিত সিস্টেম।',
      leftMessageEn: 'Anti-cheat & Google Play Protect verified fair ecosystem.',
      rightMessageBn: 'হ্যাকারমুক্ত, স্বচ্ছ ও সম্পূর্ণ নিরপেক্ষ গেমপ্লে গ্যারান্টি।',
      rightMessageEn: 'Zero-hacker fair play gameplay with 24/7 active referee moderation.',
    },
    {
      id: 'zap',
      icon: <Zap className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#FFF449] border-[#FED24F]',
      badge: '২ মিনিট',
      tagBn: 'ইনস্ট্যান্ট',
      tagEn: 'Instant',
      labelBn: 'ইনস্ট্যান্ট উইথড্রয়াল',
      labelEn: 'Instant Payouts',
      leftMessageBn: 'ম্যাচ জেতার পর ২ মিনিটে বিকাশ ও নগদ স্বয়ংক্রিয় ক্যাশআউট!',
      leftMessageEn: 'Automated 2-minute instant bKash & Nagad cashout system!',
      rightMessageBn: 'জিতলেই কোনো ঝামেলা ছাড়াই সরাসরি আপনার নিজস্ব মোবাইল ওয়ালেটে টাকা জমা।',
      rightMessageEn: 'Winnings credited directly into your personal mobile wallet.',
    },
    {
      id: 'coins',
      icon: <Coins className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#FED24F] border-[#FED24F]',
      badge: 'অটো ব্যালেন্স',
      tagBn: '১ মিনিট',
      tagEn: '1 Min',
      labelBn: 'বিকাশ ও নগদ ডিপোজিট',
      labelEn: 'bKash & Nagad Deposit',
      leftMessageBn: 'মাত্র ১ মিনিটে বিকাশ ও নগদ দিয়ে দ্রুত ব্যালেন্স রিচার্জ সুবিধা।',
      leftMessageEn: 'Instant automated 1-minute wallet balance recharge.',
      rightMessageBn: 'বিকাশ, নগদ, রকেট ও উপায় দিয়ে দ্রুততম পেমেন্ট সার্ভিস।',
      rightMessageEn: 'Fast and reliable payment via bKash, Nagad, Rocket & Upay.',
    },
    {
      id: 'flame',
      icon: <Flame className="w-5 h-5 text-white" />,
      bg: 'bg-[#7EC151] border-[#7EC151]',
      badge: 'অটো কোড',
      tagBn: '৫ মিনিট আগে',
      tagEn: '5m Before',
      labelBn: 'অটো রুম আইডি ও পাস',
      labelEn: 'Auto Room ID & Pass',
      leftMessageBn: 'ম্যাচ শুরুর ঠিক ৫ মিনিট আগে অ্যাপে অটো রুম কোড উন্মুক্ত হয়।',
      leftMessageEn: 'Auto room ID & password released 5 mins before match.',
      rightMessageBn: 'এক ক্লিকেই রুম আইডি ও পাসওয়ার্ড কপি করে কাস্টম ম্যাচে প্রবেশ করুন।',
      rightMessageEn: 'Single-tap copy custom room credentials directly inside app.',
    },
    {
      id: 'users',
      icon: <Users className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#B2D959] border-[#B2D959]',
      badge: '১ লাখ+ প্লেয়ার',
      tagBn: 'কমিউনিটি',
      tagEn: 'Community',
      labelBn: '১ লাখ+ সক্রিয় গেমার',
      labelEn: '100K+ Active Players',
      leftMessageBn: 'সারা বাংলাদেশ থেকে লাখো সক্রিয় শীর্ষ প্লেয়ারদের বড় কমিউনিটি।',
      leftMessageEn: 'Active community of 100,000+ gamers across Bangladesh.',
      rightMessageBn: 'প্রতিদিন হাজারো দক্ষ প্লেয়ারের সাথে লাইভ প্রতিদ্বন্দ্বিতা করে প্রমাণ করুন নিজেকে।',
      rightMessageEn: 'Compete live with thousands of active players every single day.',
    },
    {
      id: 'target',
      icon: <Target className="w-5 h-5 text-[#0F172A]" />,
      bg: 'bg-[#FFF449] border-[#FED24F]',
      badge: 'পার কিল',
      tagBn: 'কিল বাউন্টি',
      tagEn: 'Kill Bounty',
      labelBn: 'প্রতি কিলের পুরস্কার',
      labelEn: 'Per-Kill Cash Rewards',
      leftMessageBn: 'প্রতিটি সফল কিলের জন্য সরাসরি ওয়ালেটে নগদ অর্থ বাউন্টি।',
      leftMessageEn: 'Earn instant real cash for every single verified kill.',
      rightMessageBn: 'বুয়াহ না পেলেও সর্বোচ্চ কিল করে বড় ক্যাশ প্রাইজ জেতার সেরা সুযোগ!',
      rightMessageEn: 'Earn massive cash rewards from kills even if you don\'t secure Booyah!',
    }
  ];

  // Auto-cycle every 3.5 seconds to allow comfortable reading time
  useEffect(() => {
    if (isOrbitPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitNodes.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isOrbitPaused, orbitNodes.length]);

  // Web Audio synthesizer for interactive chime
  const playCoinSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const notes = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6 (arcade chime)
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.06 + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.28);
      });
    } catch {
      // Audio playback silently guarded
    }
  };

  const [isTvGlitching, setIsTvGlitching] = useState(false);

  // Trigger celebratory flower & starburst confetti
  const triggerFlowerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.36 },
        colors: ['#7EC151', '#FED24F', '#FFF449', '#10B981', '#FF6B6B', '#38BDF8', '#EC4899'],
        ticks: 180,
        scalar: 1.15,
        shapes: ['circle', 'square'],
      });
    } catch {
      // Confetti fallback
    }
  };

  // Center logo click -> Toggle Orbit Rotation with TV effect & Flower Confetti
  const handleLogoClick = () => {
    setIsOrbitPaused(prev => !prev);
    setIsTvGlitching(true);
    triggerFlowerConfetti();
    playCoinSound();
    setIsLogoPulsing(true);

    setTimeout(() => {
      setIsTvGlitching(false);
      setIsLogoPulsing(false);
    }, 450);
  };

  const currentFeature = orbitNodes[activeIndex];

  // Dynamic vertical rolling phrases with rich icons and badges for "প্রতি ম্যাচে"
  const rollingMatchPerks: RollingPhraseItem[] = useMemo(() => {
    return currentLang === 'bn' ? [
      { text: '১ম পুরস্কার সর্বোচ্চ নগদ প্রাইজমানি', icon: <Trophy className="w-5 h-5 text-amber-500" />, badge: '৳১,০০০+' },
      { text: 'বিকাশ ও নগদে ২ মিনিটে ইনস্ট্যান্ট উইথড্র', icon: <Zap className="w-5 h-5 text-emerald-600" />, badge: 'ইনস্ট্যান্ট' },
      { text: 'প্রতি কিলে সরাসরি নিশ্চিত ক্যাশ বাউন্টি', icon: <Target className="w-5 h-5 text-rose-500" />, badge: 'পার কিল' },
      { text: 'ম্যাচের ৫ মিনিট আগে অটো রুম কোড ও পাসওয়ার্ড', icon: <Key className="w-5 h-5 text-indigo-500" />, badge: 'অটো কোড' },
      { text: '১০০% ফেয়ার প্লে ও হ্যাকারমুক্ত গ্যারান্টি', icon: <ShieldCheck className="w-5 h-5 text-teal-600" />, badge: 'ভেরিফাইড' },
      { text: '১ মিনিটে অটো বিকাশ ও নগদ ব্যালেন্স রিচার্জ', icon: <Coins className="w-5 h-5 text-yellow-600" />, badge: 'অটো গেটওয়ে' },
      { text: 'সোলো, ডুও, স্কোয়াড ও CS 4v4 কাস্টম রুম', icon: <Gamepad2 className="w-5 h-5 text-blue-500" />, badge: 'অল মোড' },
      { text: 'প্রতিদিন ৳১০,০০০+ টাকা মেগা প্রাইজপুল', icon: <Flame className="w-5 h-5 text-orange-500" />, badge: 'দৈনিক পুল' },
      { text: '২৪/৭ লাইভ হোয়াটসঅ্যাপ ও টেলিগ্রাম সাপোর্ট', icon: <Crown className="w-5 h-5 text-purple-600" />, badge: '২৪/৭ লাইভ' },
    ] : [
      { text: 'Top Rank Guaranteed Cash Prize Pool', icon: <Trophy className="w-5 h-5 text-amber-500" />, badge: '৳1,000+' },
      { text: 'Instant 2-Minute bKash & Nagad Cashout', icon: <Zap className="w-5 h-5 text-emerald-600" />, badge: 'Instant' },
      { text: 'Per Kill Direct Cash Bounty to Wallet', icon: <Target className="w-5 h-5 text-rose-500" />, badge: 'Per Kill' },
      { text: 'Auto Room ID & Password 5 Mins Before Match', icon: <Key className="w-5 h-5 text-indigo-500" />, badge: 'Auto Room' },
      { text: '100% Anti-Cheat & Fair Play Guarantee', icon: <ShieldCheck className="w-5 h-5 text-teal-600" />, badge: 'Verified' },
      { text: 'Instant 1-Minute Automated Wallet Recharge', icon: <Coins className="w-5 h-5 text-yellow-600" />, badge: 'Auto Deposit' },
      { text: 'Solo, Duo, Squad & CS 4v4 Matchups', icon: <Gamepad2 className="w-5 h-5 text-blue-500" />, badge: 'All Modes' },
      { text: 'Daily ৳10,000+ Tournament Prize Pools', icon: <Flame className="w-5 h-5 text-orange-500" />, badge: 'Daily Pool' },
      { text: '24/7 Dedicated Live Customer Support', icon: <Crown className="w-5 h-5 text-purple-600" />, badge: '24/7 Live' },
    ];
  }, [currentLang]);

  return (
    <section className="relative overflow-hidden bg-grid-pattern bg-[#F8FAFC] pt-8 pb-20 sm:pt-12 sm:pb-28 border-b border-[#B2D959]/30">
      
      {/* Soft Ambient Frosted Glow Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#B2D959]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FED24F]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* ========================================================================= */}
        {/* SYNCHRONIZED AUTO-CYCLING ORBIT WITH FULL-WIDTH EXPANDED SPEECH BUBBLES */}
        {/* ========================================================================= */}
        <div className="relative mx-auto my-3 max-w-6xl flex flex-col items-center justify-center">
          
          {/* Main Desktop & Tablet Row: [Left Bubble] [Center Orbit Rig] [Right Bubble] */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-7 w-full">
            
            {/* LEFT DOODLE SPEECH BUBBLE (Desktop & Large screens on Left) */}
            <div className="hidden lg:flex w-full max-w-[360px] xl:max-w-[390px] justify-end transition-all duration-500">
              <div 
                key={`left-bubble-desktop-${activeIndex}`}
                className="relative bg-white border-2 border-[#0F172A] rounded-3xl p-5 shadow-[6px_6px_0px_0px_#0F172A] w-full h-[185px] flex flex-col justify-between text-left animate-in fade-in slide-in-from-left-4 duration-300 transform"
              >
                {/* Comic Doodle Accent Rays */}
                <div className="absolute -top-3.5 left-6 flex space-x-1">
                  <span className="w-1.5 h-4 bg-[#0F172A] rotate-[-20deg] rounded-full" />
                  <span className="w-1.5 h-5 bg-[#0F172A] rotate-[0deg] rounded-full" />
                  <span className="w-1.5 h-4 bg-[#0F172A] rotate-[20deg] rounded-full" />
                </div>

                {/* Speech Bubble Pointer Tail (Points Right towards Orbit) */}
                <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[14px] border-l-[#0F172A]" />
                <div className="absolute top-1/2 -right-[11px] -translate-y-1/2 w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[11px] border-l-white" />

                {/* Bubble Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A] ${currentFeature.bg}`}>
                      {currentFeature.icon}
                    </div>
                    <div>
                      <span className="bg-[#FED24F] text-[#0F172A] text-xs font-black px-2 py-0.5 rounded-full border border-[#0F172A] shadow-xs">
                        {currentFeature.badge}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-[#0F172A] font-bengali mt-0.5 leading-tight truncate max-w-[150px]">
                        {currentLang === 'bn' ? currentFeature.labelBn : currentFeature.labelEn}
                      </h4>
                    </div>
                  </div>

                  {/* Top Right Mini Tag */}
                  <span className="text-[11px] font-black text-[#064E3B] bg-[#7EC151]/20 border border-[#7EC151]/50 px-2.5 py-0.5 rounded-full font-bengali shrink-0">
                    {currentLang === 'bn' ? currentFeature.tagBn : currentFeature.tagEn}
                  </span>
                </div>

                {/* Left Message Text with Prominent High-Contrast Typewriter Effect (Fixed Height Container) */}
                <div className="text-base sm:text-lg font-black text-[#0F172A] font-bengali leading-snug border-t border-dashed border-slate-200 pt-2 h-[64px] flex items-center overflow-hidden">
                  <TypewriterText
                    text={currentLang === 'bn' ? currentFeature.leftMessageBn : currentFeature.leftMessageEn}
                    speed={16}
                    cursorColor="#7EC151"
                  />
                </div>

                {/* Bottom Status bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <div className="flex items-center space-x-1.5 text-[#064E3B] font-bengali font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#FED24F]" />
                    <span>{currentLang === 'bn' ? 'ফিচার হাইলাইট' : 'Key Feature'}</span>
                  </div>
                  <div className="flex space-x-1.5 items-center">
                    {orbitNodes.map((_, i) => (
                      <span 
                        key={i} 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeIndex ? 'w-5 bg-[#7EC151]' : 'w-2 bg-slate-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER ORBIT ROTATING RIG WITH RETRO TV POWER ON/OFF DESIGN */}
            <div className="relative flex flex-col items-center select-none shrink-0">
              <div className={`relative w-[280px] sm:w-[350px] md:w-[380px] h-[280px] sm:h-[350px] md:h-[380px] flex items-center justify-center transition-all duration-500 ${
                isTvGlitching ? 'scale-95 filter brightness-150 contrast-125' : ''
              }`}>
                
                {/* TV Scanlines Overlay when Paused */}
                {isOrbitPaused && (
                  <div className="absolute inset-2 sm:inset-4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-amber-950/5 to-transparent pointer-events-none z-10 border-2 border-dashed border-amber-400/80 animate-pulse" />
                )}

                {/* Outer Track Rings */}
                <div className={`absolute inset-3 sm:inset-5 rounded-full border-2 transition-all duration-500 pointer-events-none ${
                  isOrbitPaused ? 'border-amber-400/70 border-dashed' : 'border-dashed border-[#B2D959]/60 shadow-[0_0_25px_rgba(126,193,81,0.15)]'
                }`} />
                <div className="absolute inset-12 sm:inset-16 rounded-full border border-[#7EC151]/25 pointer-events-none" />

                {/* Orbit Container that rotates so that activeIndex is always smoothly at Top-Head (-90 deg) */}
                <div 
                  className={`absolute inset-0 w-full h-full rounded-full transition-transform duration-700 ease-out pointer-events-none ${
                    isOrbitPaused ? 'filter saturate-75 opacity-90' : ''
                  }`}
                  style={{
                    transform: `rotate(${-activeIndex * 45}deg)`,
                  }}
                >
                  {orbitNodes.map((node, index) => {
                    const nodeAngle = index * 45;
                    const radiusPercent = 44;
                    const rad = ((nodeAngle - 90) * Math.PI) / 180;
                    const leftPercent = 50 + radiusPercent * Math.cos(rad);
                    const topPercent = 50 + radiusPercent * Math.sin(rad);
                    const isApexActive = index === activeIndex;

                    return (
                      <div
                        key={node.id}
                        style={{
                          position: 'absolute',
                          left: `${leftPercent}%`,
                          top: `${topPercent}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className="z-30 pointer-events-none"
                      >
                        {/* Counter-rotate icon box so it always stays perfectly vertical and right side up */}
                        <div 
                          className="transition-transform duration-700 ease-out"
                          style={{
                            transform: `rotate(${activeIndex * 45}deg)`,
                          }}
                        >
                          {/* Node Icon Box with Active Apex Spotlight Animation */}
                          <div className={`relative rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            isApexActive
                              ? 'w-12 h-12 sm:w-14 sm:h-14 ring-4 ring-[#0F172A] scale-110 shadow-[0_0_20px_rgba(254,210,79,0.7)] border-2 border-[#0F172A] ' + node.bg
                              : 'w-9 h-9 sm:w-10 sm:h-10 opacity-75 border shadow-md ' + node.bg
                          }`}>
                            {/* Glow halo when at top head */}
                            {isApexActive && !isOrbitPaused && (
                              <span className="absolute -inset-1 rounded-2xl bg-[#FED24F]/50 animate-ping pointer-events-none" />
                            )}
                            <div className="relative z-10">
                              {node.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Central Fast Gaming Interactive Logo with TV Power Switch & Confetti */}
                <button 
                  type="button"
                  onClick={handleLogoClick}
                  id="hero-center-interactive-logo"
                  aria-label="Toggle Orbit Rotation and TV Power"
                  className={`relative z-40 flex flex-col items-center justify-center transform-gpu transition-all duration-300 cursor-pointer group bg-transparent border-0 p-0 focus:outline-hidden ${
                    isLogoPulsing ? 'scale-110' : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Dynamic glowing background halo */}
                  <div className={`absolute inset-0 -m-3 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ${
                    isOrbitPaused ? 'bg-amber-400/40' : 'bg-gradient-to-r from-[#7EC151]/30 via-[#FED24F]/35 to-[#B2D959]/30'
                  }`} />

                  {/* Logo graphic */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                    <img
                      src={BRAND_ASSETS.logo}
                      alt="Fast Gaming Official Logo"
                      className={`w-full h-full object-contain filter transition-all duration-300 select-none ${
                        isOrbitPaused 
                          ? 'drop-shadow-[0_8px_20px_rgba(251,191,36,0.5)] contrast-110' 
                          : 'drop-shadow-[0_8px_20px_rgba(126,193,81,0.4)] group-hover:scale-105'
                      }`}
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* TV Power/Glitch flash bloom effect */}
                    {isTvGlitching && (
                      <span className="absolute inset-0 rounded-full bg-white/60 animate-ping pointer-events-none" />
                    )}
                    
                    {isLogoPulsing && (
                      <span className="absolute inset-0 rounded-full border-2 border-[#7EC151] animate-ping opacity-75 pointer-events-none" />
                    )}
                  </div>
                </button>

              </div>

              {/* TV Mode Indicator Pill directly under Center Logo */}
              <button
                type="button"
                onClick={handleLogoClick}
                className={`mt-1.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black font-bengali border transition-all shadow-xs cursor-pointer ${
                  isOrbitPaused 
                    ? 'bg-amber-100 text-amber-900 border-amber-400 hover:bg-amber-200 animate-pulse' 
                    : 'bg-[#7EC151]/15 text-[#064E3B] border-[#7EC151]/40 hover:bg-[#7EC151]/25'
                }`}
              >
                {isOrbitPaused ? (
                  <>
                    <Tv className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{currentLang === 'bn' ? 'টিভি বিরতি মোড (চালু করতে ক্লিক করুন)' : 'TV Paused (Click to Resume)'}</span>
                    <Play className="w-3 h-3 fill-amber-700 text-amber-700 shrink-0" />
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-[#7EC151] shrink-0" />
                    <span>{currentLang === 'bn' ? 'ঘূর্ণন সক্রিয় (থামাতে লোগোতে ক্লিক করুন)' : 'Orbit Active (Click Logo to Pause)'}</span>
                    <Pause className="w-3 h-3 fill-slate-700 text-slate-700 shrink-0" />
                  </>
                )}
              </button>
            </div>

            {/* RIGHT DOODLE SPEECH BUBBLE (Desktop & Large screens on Right) */}
            <div className="hidden lg:flex w-full max-w-[360px] xl:max-w-[390px] justify-start transition-all duration-500">
              <div 
                key={`right-bubble-desktop-${activeIndex}`}
                className="relative bg-white border-2 border-[#0F172A] rounded-3xl p-5 shadow-[6px_6px_0px_0px_#0F172A] w-full h-[185px] flex flex-col justify-between text-left animate-in fade-in slide-in-from-right-4 duration-300 transform"
              >
                {/* Comic Doodle Accent Rays */}
                <div className="absolute -top-3.5 right-6 flex space-x-1">
                  <span className="w-1.5 h-4 bg-[#0F172A] rotate-[-20deg] rounded-full" />
                  <span className="w-1.5 h-5 bg-[#0F172A] rotate-[0deg] rounded-full" />
                  <span className="w-1.5 h-4 bg-[#0F172A] rotate-[20deg] rounded-full" />
                </div>

                {/* Speech Bubble Pointer Tail (Points Left towards Orbit) */}
                <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[14px] border-r-[#0F172A]" />
                <div className="absolute top-1/2 -left-[11px] -translate-y-1/2 w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-r-[11px] border-r-white" />

                {/* Bubble Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A] ${currentFeature.bg}`}>
                      {currentFeature.icon}
                    </div>
                    <div>
                      <span className="bg-[#7EC151] text-white text-xs font-black px-2 py-0.5 rounded-full border border-[#0F172A] shadow-xs">
                        {currentLang === 'bn' ? 'সুবিধা' : 'Benefit'}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-[#0F172A] font-bengali mt-0.5 leading-tight truncate max-w-[150px]">
                        {currentLang === 'bn' ? currentFeature.labelBn : currentFeature.labelEn}
                      </h4>
                    </div>
                  </div>

                  {/* Top Right Mini Tag */}
                  <span className="text-[11px] font-black text-amber-900 bg-[#FED24F]/30 border border-[#FED24F]/70 px-2.5 py-0.5 rounded-full font-bengali shrink-0">
                    {currentLang === 'bn' ? 'গ্যারান্টিড' : 'Guaranteed'}
                  </span>
                </div>

                {/* Right Message Text with Prominent High-Contrast Typewriter Effect (Fixed Height Container) */}
                <div className="text-base sm:text-lg font-black text-[#0F172A] font-bengali leading-snug border-t border-dashed border-slate-200 pt-2 h-[64px] flex items-center overflow-hidden">
                  <TypewriterText
                    text={currentLang === 'bn' ? currentFeature.rightMessageBn : currentFeature.rightMessageEn}
                    speed={16}
                    cursorColor="#FED24F"
                  />
                </div>

                {/* Bottom Status bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <div className="flex items-center space-x-1.5 text-amber-800 font-bengali font-bold">
                    <Trophy className="w-3.5 h-3.5 text-amber-600" />
                    <span>{currentLang === 'bn' ? 'উইনিং নিশ্চয়তা' : 'Win Guarantee'}</span>
                  </div>
                  <div className="flex space-x-1.5 items-center">
                    {orbitNodes.map((_, i) => (
                      <span 
                        key={i} 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeIndex ? 'w-5 bg-[#FED24F]' : 'w-2 bg-slate-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE & TABLET: FULL-WIDTH SIDE-BY-SIDE 2-COLUMN BUBBLES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-2xl mx-auto mt-4 lg:hidden">
            
            {/* Mobile Left Bubble */}
            <div 
              key={`left-bubble-mobile-${activeIndex}`}
              className="relative bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#0F172A] w-full h-[145px] flex flex-col justify-between text-left animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <div className="flex items-center justify-between space-x-2.5">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border border-[#0F172A] shrink-0 ${currentFeature.bg}`}>
                    {currentFeature.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="bg-[#FED24F] text-[#0F172A] text-[10px] font-black px-2 py-0.5 rounded border border-[#0F172A]">
                      {currentFeature.badge}
                    </span>
                    <h5 className="text-xs sm:text-sm font-black text-[#0F172A] font-bengali truncate mt-0.5">
                      {currentLang === 'bn' ? currentFeature.labelBn : currentFeature.labelEn}
                    </h5>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#7EC151]/20 text-[#064E3B] px-2 py-0.5 rounded border border-[#7EC151]/40 shrink-0 font-bengali">
                  {currentLang === 'bn' ? currentFeature.tagBn : currentFeature.tagEn}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] font-bengali leading-snug border-t border-dashed border-slate-200 pt-2 h-[48px] flex items-center overflow-hidden">
                <TypewriterText
                  text={currentLang === 'bn' ? currentFeature.leftMessageBn : currentFeature.leftMessageEn}
                  speed={15}
                  cursorColor="#7EC151"
                />
              </div>
            </div>

            {/* Mobile Right Bubble */}
            <div 
              key={`right-bubble-mobile-${activeIndex}`}
              className="relative bg-white border-2 border-[#0F172A] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#0F172A] w-full h-[145px] flex flex-col justify-between text-left animate-in fade-in slide-in-from-right-2 duration-300"
            >
              <div className="flex items-center justify-between space-x-2.5">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border border-[#0F172A] shrink-0 ${currentFeature.bg}`}>
                    {currentFeature.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="bg-[#7EC151] text-white text-[10px] font-black px-2 py-0.5 rounded border border-[#0F172A]">
                      {currentLang === 'bn' ? 'সুবিধা' : 'Benefit'}
                    </span>
                    <h5 className="text-xs sm:text-sm font-black text-[#0F172A] font-bengali truncate mt-0.5">
                      {currentLang === 'bn' ? currentFeature.labelBn : currentFeature.labelEn}
                    </h5>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#FED24F]/30 text-amber-900 px-2 py-0.5 rounded border border-[#FED24F]/70 shrink-0 font-bengali">
                  {currentLang === 'bn' ? 'গ্যারান্টি' : 'Guaranteed'}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] font-bengali leading-snug border-t border-dashed border-slate-200 pt-2 h-[48px] flex items-center overflow-hidden">
                <TypewriterText
                  text={currentLang === 'bn' ? currentFeature.rightMessageBn : currentFeature.rightMessageEn}
                  speed={15}
                  cursorColor="#FED24F"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Material 3 Tonal Filter Chip / Banner Pill */}
        <div className="inline-flex items-center mt-3 mb-5">
          <button
            id="hero-premium-pill-btn"
            onClick={() => onNavigate('tutorials')}
            className="group inline-flex items-center space-x-2.5 bg-[#B2D959]/20 hover:bg-[#B2D959]/35 text-[#0F172A] border border-[#B2D959] px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer font-bengali"
          >
            <Trophy className="w-4 h-4 text-[#0F172A]" />
            <span>{currentLang === 'bn' ? 'বাংলাদেশের #1 প্রিমিয়াম ও বিশ্বস্ত eSports প্ল্যাটফর্ম' : "Bangladesh's #1 Premium eSports App"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#7EC151]" />
          </button>
        </div>

        {/* Main Headline with Distinctive Bengali Display Font Pairing & Dynamic Typing */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] font-heading-bn">
            {currentLang === 'bn' ? 'বাংলাদেশের সবচেয়ে দ্রুততম ও' : "Bangladesh's Most Trusted &"}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#7EC151] font-heading-bn leading-tight">
            {currentLang === 'bn' ? 'স্বয়ংক্রিয় গেমিং প্ল্যাটফর্ম' : 'AUTOMATED ESPORTS'}
          </h1>
          
          {/* Enhanced "প্রতি ম্যাচে" Vertical Slot Roller with Zero-Layout-Shift Fixed Height */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl px-4 sm:px-8 h-[54px] sm:h-[64px] md:h-[72px] border-2 border-[#0F172A] shadow-[5px_5px_0px_0px_#0F172A] inline-flex items-center justify-center gap-2 sm:gap-3 max-w-full overflow-hidden select-none">
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-[#0F172A] font-heading-bn shrink-0 whitespace-nowrap">
              {currentLang === 'bn' ? 'প্রতি ম্যাচে ' : 'Every Match '}
            </span>
            <TypingTextEffect
              phrases={rollingMatchPerks}
              pauseDuration={2800}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#7EC151]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REQUESTED TEXT INSIDE A SOPHISTICATED QUOTATION BOX WITH RAINBOW UNDERLINE */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto mt-8 mb-8 text-center">
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-[#0F172A] shadow-[5px_5px_0px_0px_#0F172A] transition-all duration-300">
            
            {/* Opening Quotation Icon Mark */}
            <div className="absolute -top-5 left-6 bg-[#FED24F] p-2 rounded-2xl border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A]">
              <Quote className="w-5 h-5 text-[#0F172A] rotate-180 fill-[#0F172A]" />
            </div>

            {/* Closing Quotation Icon Mark */}
            <div className="absolute -bottom-5 right-6 bg-[#FED24F] p-2 rounded-2xl border-2 border-[#0F172A] shadow-[2px_2px_0px_0px_#0F172A]">
              <Quote className="w-5 h-5 text-[#0F172A] fill-[#0F172A]" />
            </div>

            {/* The Clear Bengali Quotation Text */}
            <blockquote className="relative z-10 text-[#0F172A] text-base sm:text-lg md:text-xl leading-relaxed font-bengali font-bold px-4 py-2">
              <span className="text-[#7EC151] text-2xl font-black mr-1">“</span>
              {currentLang === 'bn'
                ? 'Fast Gaming অ্যাপে খেলুন আপনার পছন্দের Free Fire টুর্নামেন্ট (Solo, Duo, Squad, Clash Squad ও 1v1) এবং জিতে নিন আকর্ষণীয় সব নগদ অর্থ পুরস্কার। বিকাশ ও নগদে ২ মিনিটে উইথড্র করুন।'
                : 'Play your favorite Free Fire custom tournaments (Solo, Duo, Squad, Clash Squad & 1v1) on the Fast Gaming app and win exciting real cash prizes with instant 2-minute bKash and Nagad withdrawals.'}
              <span className="text-[#7EC151] text-2xl font-black ml-1">”</span>
            </blockquote>

            {/* Continuous Smooth Color-Changing Rainbow Animated Underline inside the Quotation Box */}
            <div className="mt-4 pt-1 relative w-full px-2">
              <div className="h-1.5 sm:h-2 w-full rounded-full bg-gradient-to-r from-[#7EC151] via-[#FED24F] via-[#FFF449] via-[#B2D959] via-[#10B981] via-[#FED24F] to-[#7EC151] bg-[length:300%_100%] animate-rainbow-shift shadow-[0_2px_10px_rgba(126,193,81,0.35)]" />
            </div>

          </div>
        </div>

        {/* Official Featured Gaming Banner - Clean & Beautiful Artwork */}
        <div className="max-w-4xl mx-auto my-8 sm:my-10 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#B2D959]/70 bg-white">
            <img
              src={BRAND_ASSETS.banner}
              alt="Fast Gaming Official Banner"
              className="w-full h-auto max-h-[460px] object-cover object-center"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          {/* Main Download Button */}
          <button
            id="hero-main-download-btn"
            onClick={onOpenDownloadModal}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-3 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full m3-elevation-2 hover:m3-elevation-3 transition-all transform hover:-translate-y-0.5 cursor-pointer font-bengali shadow-emerald-800/20"
          >
            <Download className="w-5 h-5 animate-bounce" />
            <span>{currentLang === 'bn' ? 'অ্যাপ ডাউনলোড করুন (APK)' : 'Download App (APK)'}</span>
          </button>

          {/* YouTube Video Tutorial Button */}
          <button
            id="hero-watch-tutorial-btn"
            onClick={() => onOpenVideoModal('how-to-play-full')}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2.5 bg-white/90 backdrop-blur-md hover:bg-white text-[#0F172A] border border-[#B2D959]/60 font-extrabold text-base sm:text-lg px-7 py-4 rounded-full m3-elevation-1 hover:m3-elevation-2 transition-all cursor-pointer font-bengali"
          >
            <PlayCircle className="w-6 h-6 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'ভিডিও টিউটোরিয়াল দেখুন' : 'Watch Tutorial'}</span>
          </button>
        </div>

        {/* Official Instant Payment Gateway Badges Strip with High-Res Transparent Logos */}
        <div className="mt-12 p-4 sm:p-5 bg-white/80 backdrop-blur-xl rounded-3xl border border-[#B2D959]/40 shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-xs font-bold text-[#064E3B] font-bengali flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FED24F]" />
                <span>{currentLang === 'bn' ? 'ইনস্ট্যান্ট অটোমেটেড পেমেন্ট মেথড' : 'Instant Automated Payment Gateways'}</span>
              </span>
              <p className="text-sm font-extrabold text-[#0F172A] font-bengali">
                {currentLang === 'bn' ? 'যেকোনো মোবাইল ওয়ালেটে ২ মিনিটে ক্যাশআউট করুন' : 'Deposit & Withdraw within 2 Minutes'}
              </p>
            </div>

            {/* 4 Official Payment Logos with soft translucent glass blend */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full md:w-auto">
              {/* bKash */}
              <div className="bg-white/90 hover:bg-white rounded-2xl p-2 sm:px-3.5 sm:py-2 border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 transition-all">
                <img
                  src={BRAND_ASSETS.payments.bkash}
                  alt="bKash Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Nagad */}
              <div className="bg-white/90 hover:bg-white rounded-2xl p-2 sm:px-3.5 sm:py-2 border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 transition-all">
                <img
                  src={BRAND_ASSETS.payments.nagad}
                  alt="Nagad Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Rocket */}
              <div className="bg-white/90 hover:bg-white rounded-2xl p-2 sm:px-3.5 sm:py-2 border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 transition-all">
                <img
                  src={BRAND_ASSETS.payments.rocket}
                  alt="Rocket Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Upay */}
              <div className="bg-white/90 hover:bg-white rounded-2xl p-2 sm:px-3.5 sm:py-2 border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-105 transition-all">
                <img
                  src={BRAND_ASSETS.payments.upay}
                  alt="Upay Logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Material 3 Trust Guarantees Bar */}
        <div className="mt-8 pt-6 border-t border-[#B2D959]/30 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-[#0F172A] font-bengali">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#B2D959]/50 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'স্বয়ংক্রিয় রুম আইডি ও পাসওয়ার্ড' : 'Automated Room Code'}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#B2D959]/50 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'বিকাশ ও নগদে ২ মিনিটে উইথড্র' : 'Instant 2-Min Payout'}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#B2D959]/50 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? '১০০% ফেয়ার প্লে ও এন্টি-চিট' : '100% Fair Play'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};



