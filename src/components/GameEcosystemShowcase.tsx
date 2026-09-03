import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, 
  Flame, 
  Swords, 
  Crosshair, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  Users, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  Wifi,
  ChevronRight,
  ChevronLeft,
  Crown,
  Check,
  CheckCircle2,
  Star,
  Quote,
  Wallet,
  Smartphone,
  Award,
  ArrowLeft,
  Copy,
  Eye,
  EyeOff,
  Shield,
  Headphones,
  CheckCheck,
  TrendingUp,
  Download,
  Share2,
  Medal,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PageView } from '../types';

interface GameEcosystemShowcaseProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  onNavigate: (page: PageView) => void;
}

/* ==================== 1. GAME MODES DATA ==================== */
interface GameModeInfo {
  id: string;
  titleBn: string;
  titleEn: string;
  tagBn: string;
  tagEn: string;
  badgeBg: string;
  badgeText: string;
  icon: any;
  mapImage: string;
  playersCountBn: string;
  playersCountEn: string;
  matchDurationBn: string;
  matchDurationEn: string;
  avgPrizeBn: string;
  avgPrizeEn: string;
  perKillPrizeBn: string;
  perKillPrizeEn: string;
  mapNameBn: string;
  mapNameEn: string;
  entryFeeBn: string;
  entryFeeEn: string;
  filledSlots: number;
  totalSlots: number;
  featuresBn: string[];
  featuresEn: string[];
  roomStatusBn: string;
  roomStatusEn: string;
  simulatedRoomId: string;
  simulatedPass: string;
}

const ARENA_MODES: GameModeInfo[] = [
  {
    id: 'battle-royale',
    titleBn: 'ব্যাটেল রয়্যাল ক্লাসিক (BR)',
    titleEn: 'Battle Royale Classic (BR)',
    tagBn: 'সবচেয়ে জনপ্রিয়',
    tagEn: 'Most Popular',
    badgeBg: 'bg-[#FED24F]',
    badgeText: 'text-[#0F172A]',
    icon: Flame,
    mapImage: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/33568bf62588e751103772c19d5b82a1890c2bda/1d73da971832b610cc566e53dc74648e.jpg',
    playersCountBn: '৪৮ জন প্লেয়ার (Solo / Squad)',
    playersCountEn: '48 Players (Solo / Squad)',
    matchDurationBn: '১৫-১৮ মিনিট',
    matchDurationEn: '15-18 Minutes',
    avgPrizeBn: '৳১,৫০০ - ৳৫,০০০',
    avgPrizeEn: '৳1,500 - ৳5,000',
    perKillPrizeBn: '৳২০ - ৳৫০',
    perKillPrizeEn: '৳20 - ৳50',
    mapNameBn: 'Bermuda & Purgatory',
    mapNameEn: 'Bermuda & Purgatory',
    entryFeeBn: '৳২০ / ৳৫০',
    entryFeeEn: '৳20 / ৳50',
    filledSlots: 42,
    totalSlots: 48,
    featuresBn: [
      'প্রতি কিলের জন্য সরাসরি নিশ্চিত নগদ টাকা ওয়ালেটে যোগ হবে',
      'Booyah বিজয়ী দলের জন্য মেগা নগদ ট্রফি ও প্রাইজ পুল',
      'ম্যাচ শুরুর ঠিক ৫ মিনিট আগে স্বয়ংক্রিয়ভাবে রুম কোড ডেলিভারি',
      'স্বচ্ছ কিল ভেরিফিকেশন ও লাইভ লিডারবোর্ড ট্র্যাকিং'
    ],
    featuresEn: [
      'Guaranteed instant cash bounty added for every confirmed kill',
      'Massive cash prize pool reserved for Booyah champion squad',
      'Automated room ID and password dispatch 5 mins before kickoff',
      'Transparent kill verification system with live leaderboard stats'
    ],
    roomStatusBn: 'রুম খুলবে: ৭ মিনিট পর',
    roomStatusEn: 'Room Opens in 7 mins',
    simulatedRoomId: '829410',
    simulatedPass: '7788'
  },
  {
    id: 'clash-squad',
    titleBn: 'ক্ল্যাশ স্কোয়াড ৪v৪ (CS)',
    titleEn: 'Clash Squad 4v4 (CS)',
    tagBn: 'হাই-ইনটেনসিটি',
    tagEn: 'High Intensity',
    badgeBg: 'bg-[#7EC151]',
    badgeText: 'text-white',
    icon: Swords,
    mapImage: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/33568bf62588e751103772c19d5b82a1890c2bda/3da726f44471e019cb0f5d54bbd1e2ff.jpg',
    playersCountBn: '৮ জন (৪ vs ৪ তীব্র স্কোয়াড ফাইট)',
    playersCountEn: '8 Players (4 vs 4 Intense Combat)',
    matchDurationBn: '৭ রাউন্ড (১০ মিনিট)',
    matchDurationEn: '7 Rounds (10 Mins)',
    avgPrizeBn: '৳১,০০০ - ৳২,২০০',
    avgPrizeEn: '৳1,000 - ৳2,200',
    perKillPrizeBn: 'ম্যাচ উইনার অল',
    perKillPrizeEn: 'Winner Takes All',
    mapNameBn: 'Kalahari & Bermuda CS',
    mapNameEn: 'Kalahari & Bermuda CS',
    entryFeeBn: '৳১০০ (প্রতি টিম)',
    entryFeeEn: '৳100 (Per Team)',
    filledSlots: 6,
    totalSlots: 8,
    featuresBn: [
      '৭ রাউন্ডের হাড্ডাহাড্ডি স্কোয়াড ব্যাটল ও আনলিমিটেড ড্রপ',
      'গান প্রোপার্টি ও ক্যারেক্টার স্কিল অন/অফ কাস্টমাইজ সুবিধা',
      'উইনার টিম সরাসরি পুরো প্রাইজ মানি বিকাশে উইথড্র করতে পারে',
      'অ্যাম্পায়ার বট দ্বারা সার্ভারভিত্তিক নিখুঁত ম্যাচ মনিটরিং'
    ],
    featuresEn: [
      '7-round nail-biting squad combat with custom tactical drops',
      'Flexible toggle for gun attributes and character skill sets',
      'Champion team claims instant bKash or Nagad cashout rewards',
      'Dedicated automated umpire bots monitor every single round'
    ],
    roomStatusBn: 'স্লট বাকি: মাত্র ২ টি',
    roomStatusEn: '2 Slots Remaining',
    simulatedRoomId: '639120',
    simulatedPass: '4455'
  },
  {
    id: 'one-vs-one',
    titleBn: '১v১ স্নাইপার ও শর্টগান ডুয়েল',
    titleEn: '1v1 Custom Duel Showdown',
    tagBn: 'পিওর স্কিল ম্যাচ',
    tagEn: 'Pure Skill Match',
    badgeBg: 'bg-sky-500',
    badgeText: 'text-white',
    icon: Crosshair,
    mapImage: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/33568bf62588e751103772c19d5b82a1890c2bda/257a454319a418e43e2d580bd4846a0b.jpg',
    playersCountBn: '২ জন প্লেয়ার (Head to Head)',
    playersCountEn: '2 Players (Head to Head)',
    matchDurationBn: '৫-৭ মিনিট',
    matchDurationEn: '5-7 Minutes',
    avgPrizeBn: '৳৫০০ - ৳১,০০০',
    avgPrizeEn: '৳500 - ৳1,000',
    perKillPrizeBn: 'হেডশট উইনার',
    perKillPrizeEn: 'Headshot Duel',
    mapNameBn: 'Iron Cage & Desert Arena',
    mapNameEn: 'Iron Cage & Desert Arena',
    entryFeeBn: '৳৫০',
    entryFeeEn: '৳50',
    filledSlots: 1,
    totalSlots: 2,
    featuresBn: [
      'ওয়ান ট্যাপ ও আনলিমিটেড গ্লু ওয়াল ফাইট ফ্রেন্ড চ্যালেঞ্জ',
      'এম১০১৪, উডপিকার এবং এডব্লিউএম স্নাইপার স্পেশাল রুলস',
      'ম্যাচ শেষে রেজাল্ট সাবমিট করলেই ২ মিনিটের মধ্যে বিকাশ পেআউট',
      'সরাসরি বন্ধুদের রুম লিংক শেয়ার করে বাজি ম্যাচ খেলার সুযোগ'
    ],
    featuresEn: [
      'One-tap reflex combat with unlimited gloo wall friendly duels',
      'Dedicated duel presets for M1014, Woodpecker, and AWM snipers',
      'Instant payout verified and processed to bKash within 2 minutes',
      'Share custom invite links directly with rivals for instant matches'
    ],
    roomStatusBn: 'লাইভ চ্যালেঞ্জ সক্রিয়',
    roomStatusEn: 'Live Challenge Active',
    simulatedRoomId: '519082',
    simulatedPass: '1122'
  },
  {
    id: 'ludo-arena',
    titleBn: 'লুডু টুর্নামেন্ট ও বোর্ড গেমস',
    titleEn: 'Ludo King Tournaments',
    tagBn: 'ইনস্ট্যান্ট ক্যাশ',
    tagEn: 'Instant Cash',
    badgeBg: 'bg-purple-600',
    badgeText: 'text-white',
    icon: Trophy,
    mapImage: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/33568bf62588e751103772c19d5b82a1890c2bda/4ff5e61fff1e3ca229b048763c2476cb%20(1).jpg',
    playersCountBn: '২ বা ৪ জন প্লেয়ার',
    playersCountEn: '2 or 4 Players',
    matchDurationBn: '৮-১২ মিনিট',
    matchDurationEn: '8-12 Minutes',
    avgPrizeBn: '৳৩০০ - ৳৮০০',
    avgPrizeEn: '৳300 - ৳800',
    perKillPrizeBn: '১ম ও ২য় স্থান',
    perKillPrizeEn: '1st & 2nd Place',
    mapNameBn: 'Ludo King Official Room',
    mapNameEn: 'Ludo King Official Room',
    entryFeeBn: '৳৩০',
    entryFeeEn: '৳30',
    filledSlots: 3,
    totalSlots: 4,
    featuresBn: [
      'সহজ Ludo King রুম কোড দিয়ে মুহূর্তেই ম্যাচে অংশগ্রহণ',
      'কোনো জটিলতা ছাড়াই মোবাইল ওয়ালেটে নগদ অর্থ জেতার সুযোগ',
      'স্বয়ংক্রিয় স্ক্রিনশট ও স্কোরবোর্ড ভেরিফিকেশন সিস্টেম',
      'সব বয়সী প্লেয়ারদের জন্য ১০০% সহজ ও নির্ভরযোগ্য নিয়ম'
    ],
    featuresEn: [
      'Instant table joining with official Ludo King custom room code',
      'Zero complex setup; direct real money cashouts to phone wallets',
      'Automated screenshot and dice roll result verification engine',
      '100% transparent and accessible rules tailored for all gamers'
    ],
    roomStatusBn: 'রেজিস্ট্রেশন ওপেন',
    roomStatusEn: 'Registration Open',
    simulatedRoomId: '771924',
    simulatedPass: '9900'
  }
];

/* ==================== 2. PODIUM PLAYERS (Leaderboard) ==================== */
interface PodiumPlayer {
  rank: number;
  positionLabelBn: string;
  positionLabelEn: string;
  name: string;
  uid: string;
  regionBn: string;
  regionEn: string;
  totalKills: number;
  matchesWon: number;
  winRate: string;
  earningsBn: string;
  earningsEn: string;
  avatar: string;
  colorTheme: 'gold' | 'silver' | 'bronze';
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  platformHeightDesktop: string;
  platformHeightMobile: string;
}

// Ordered strictly as [Rank 2 (Left), Rank 1 (Center Top), Rank 3 (Right)]
const PODIUM_PLAYERS: PodiumPlayer[] = [
  {
    rank: 2,
    positionLabelBn: '২য় স্থান (রৌপ্য পদক)',
    positionLabelEn: '2nd Place (Silver)',
    name: '⚡NINJA_RAFI⚡',
    uid: 'UID: 394810294',
    regionBn: 'চট্টগ্রাম বিভাগ',
    regionEn: 'Chittagong Div',
    totalKills: 134,
    matchesWon: 22,
    winRate: '71%',
    earningsBn: '৳৯,৮০০',
    earningsEn: '৳9,800',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    colorTheme: 'silver',
    accentBorder: 'border-slate-400',
    badgeBg: 'bg-slate-200 text-slate-900 border-slate-400',
    badgeText: 'text-slate-800',
    platformHeightDesktop: 'h-24',
    platformHeightMobile: 'h-14'
  },
  {
    rank: 1,
    positionLabelBn: '১ম স্থান (স্বর্ণ চ্যাম্পিয়ন)',
    positionLabelEn: '1st Place (Gold Champion)',
    name: '★SHADOW_FF★',
    uid: 'UID: 182930219',
    regionBn: 'ঢাকা বিভাগ',
    regionEn: 'Dhaka Division',
    totalKills: 168,
    matchesWon: 29,
    winRate: '78%',
    earningsBn: '৳১৩,২০০',
    earningsEn: '৳13,200',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    colorTheme: 'gold',
    accentBorder: 'border-amber-500',
    badgeBg: 'bg-[#FED24F] text-[#0F172A] border-amber-600',
    badgeText: 'text-amber-900',
    platformHeightDesktop: 'h-36',
    platformHeightMobile: 'h-20'
  },
  {
    rank: 3,
    positionLabelBn: '৩য় স্থান (ব্রোঞ্জ পদক)',
    positionLabelEn: '3rd Place (Bronze)',
    name: '亗VAMPIRE_07亗',
    uid: 'UID: 928301928',
    regionBn: 'সিলেট বিভাগ',
    regionEn: 'Sylhet Div',
    totalKills: 112,
    matchesWon: 19,
    winRate: '65%',
    earningsBn: '৳৭,৫০০',
    earningsEn: '৳7,500',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    colorTheme: 'bronze',
    accentBorder: 'border-amber-700',
    badgeBg: 'bg-amber-100 text-amber-950 border-amber-600',
    badgeText: 'text-amber-900',
    platformHeightDesktop: 'h-16',
    platformHeightMobile: 'h-10'
  }
];

interface WinnerRecord {
  id: string;
  name: string;
  uid: string;
  cityBn: string;
  cityEn: string;
  mode: string;
  kills: number;
  prizeBn: string;
  prizeEn: string;
  method: 'bKash' | 'Nagad' | 'Rocket';
  trxId: string;
  timeBn: string;
  timeEn: string;
  avatar: string;
}

const RECENT_WINNERS: WinnerRecord[] = [
  {
    id: 'w1',
    name: '★VIPER_GAMER★',
    uid: 'UID: 28491028',
    cityBn: 'মিরপুর, ঢাকা',
    cityEn: 'Mirpur, Dhaka',
    mode: 'BR Solo Bermuda',
    kills: 11,
    prizeBn: '৳১,৪৫০',
    prizeEn: '৳1,450',
    method: 'bKash',
    trxId: '9BK28419X',
    timeBn: '৩ মিনিট পূর্বে',
    timeEn: '3 mins ago',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=160&auto=format&fit=crop&q=80'
  },
  {
    id: 'w2',
    name: '⚡RAFI_SHOOTER⚡',
    uid: 'UID: 39482011',
    cityBn: 'জিইসি, চট্টগ্রাম',
    cityEn: 'GEC, Chittagong',
    mode: 'CS 4v4 Clash',
    kills: 9,
    prizeBn: '৳১,১০০',
    prizeEn: '৳1,100',
    method: 'Nagad',
    trxId: 'NG771924M',
    timeBn: '৭ মিনিট পূর্বে',
    timeEn: '7 mins ago',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&auto=format&fit=crop&q=80'
  },
  {
    id: 'w3',
    name: '亗HUNTER_BOY亗',
    uid: 'UID: 19482039',
    cityBn: 'জিন্দাবাজার, সিলেট',
    cityEn: 'Zindabazar, Sylhet',
    mode: '1v1 Sniper Duel',
    kills: 7,
    prizeBn: '৳৬০০',
    prizeEn: '৳600',
    method: 'bKash',
    trxId: '8BK99120Z',
    timeBn: '১২ মিনিট পূর্বে',
    timeEn: '12 mins ago',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=160&auto=format&fit=crop&q=80'
  },
  {
    id: 'w4',
    name: '☠️GHOST_SQUAD☠️',
    uid: 'UID: 49381022',
    cityBn: 'সাহেব বাজার, রাজশাহী',
    cityEn: 'Saheb Bazar, Rajshahi',
    mode: 'BR Squad Purgatory',
    kills: 18,
    prizeBn: '৳২,৪০০',
    prizeEn: '৳2,400',
    method: 'Rocket',
    trxId: 'RC551029K',
    timeBn: '১৬ মিনিট পূর্বে',
    timeEn: '16 mins ago',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&auto=format&fit=crop&q=80'
  }
];

/* ==================== 3. VERIFIED REVIEWS DATA ==================== */
interface ReviewItem {
  id: string;
  name: string;
  ign: string;
  rankBn: string;
  rankEn: string;
  cityBn: string;
  cityEn: string;
  avatar: string;
  stars: number;
  badgeBn: string;
  badgeEn: string;
  payoutBadge: string;
  quoteBn: string;
  quoteEn: string;
  category: 'all' | 'bkash' | 'squad' | 'solo';
}

const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'তানভীর আহমেদ সাজিদ',
    ign: '亗_TANVIR_FF_亗',
    rankBn: 'গ্র্যান্ডমাস্টার টিয়ার',
    rankEn: 'Grandmaster Tier',
    cityBn: 'মিরপুর, ঢাকা',
    cityEn: 'Mirpur, Dhaka',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: 'ভেরিফায়েড প্লেয়ার',
    badgeEn: 'Verified Player',
    payoutBadge: 'bKash Payout: ৳৩,৪০০',
    quoteBn: 'গত ৩ মাস ধরে আমি Last Gaming BD অ্যাপে সোলো এবং ক্ল্যাশ স্কোয়াড টুর্নামেন্ট খেলছি। সবচেয়ে অবিশ্বাস্য বিষয় হলো ম্যাচ শেষ হওয়ার ঠিক ২ মিনিটের মাথায় বিকাশ নাম্বারে টাকা চলে আসে। কোনো হ্যাকার নেই, সম্পূর্ণ ফেয়ার ও ট্রাস্টেড!',
    quoteEn: 'I have been competing in Last Gaming BD solo and clash squad rooms for 3 months. The most incredible part is receiving bKash money in exactly 2 minutes after match conclusion. Zero hackers, 100% fair play!',
    category: 'bkash'
  },
  {
    id: 'r2',
    name: 'রাকিবুল হাসান রাফি',
    ign: '⚡RAFI_ONE_TAP⚡',
    rankBn: 'হিরোয়িক ৫-স্টার',
    rankEn: 'Heroic 5-Star',
    cityBn: 'জিইসি, চট্টগ্রাম',
    cityEn: 'GEC, Chittagong',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: 'টপ কিলার',
    badgeEn: 'Top Killer',
    payoutBadge: 'Nagad Payout: ৳২,২০০',
    quoteBn: 'অটোমেটেড রুম কোড সিস্টেমটা দুর্দান্ত। ম্যাচ শুরুর ঠিক ৫ মিনিট আগে ইন-অ্যাপ নোটিফিকেশনে রুম আইডি ও পাসওয়ার্ড চলে আসে। কোনো অ্যাডমিনকে মেসেজ দিয়ে অপেক্ষা করতে হয় না, খুব দ্রুত সব চালু হয়ে যায়।',
    quoteEn: 'The automated room code dispatch is phenomenal. 5 minutes before match start, the room ID and password ping straight in-app. No tedious waiting for manual admins.',
    category: 'squad'
  },
  {
    id: 'r3',
    name: 'মাহমুদুল করিম তামিম',
    ign: '★TAMIM_SNIPER★',
    rankBn: 'এলিট স্নাইপার',
    rankEn: 'Elite Sniper',
    cityBn: 'জিন্দাবাজার, সিলেট',
    cityEn: 'Zindabazar, Sylhet',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: '১v১ চ্যাম্পিয়ন',
    badgeEn: '1v1 Champion',
    payoutBadge: 'bKash Payout: ৳১,৬০০',
    quoteBn: 'বন্ধুদের সাথে ১v১ স্নাইপার কাস্টম ডুয়েল খেলে প্রতিদিন পকেট খরচ বের হয়ে যায়। অ্যাপের ইন্টারফেস খুবই স্মুথ, কোনো ল্যাগ বা বাগ নেই। ১০০% ট্রাস্টেড টুর্নামেন্ট অ্যাপ!',
    quoteEn: 'Playing 1v1 sniper duels against rivals easily covers my daily pocket cash. The mobile app interface is super slick with zero lags. Truly trusted!',
    category: 'solo'
  },
  {
    id: 'r4',
    name: 'মোস্তাফিজুর রহমান',
    ign: '☠️MUSTAF_KILLER☠️',
    rankBn: 'মাস্টার র‍্যাংক',
    rankEn: 'Master Rank',
    cityBn: 'উত্তরা, ঢাকা',
    cityEn: 'Uttara, Dhaka',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: 'সাপ্তাহিক টপ ৩',
    badgeEn: 'Weekly Top 3',
    payoutBadge: 'bKash Payout: ৳৫,১০০',
    quoteBn: 'আমরা পুরো স্কোয়াড নিয়ে প্রতি রাতে Last Gaming BD টুর্নামেন্টে জয়েন করি। পয়েন্ট টেবিল এবং প্রাইজ মানি ডিস্ট্রিবিউশন একদম স্বচ্ছ। বাংলাদেশের সেরা ই-স্পোর্টস প্ল্যাটফর্ম!',
    quoteEn: 'Our entire squad drops into Last Gaming BD custom tournaments every night. Point tables and cash payouts are ultra-clear. Easily the best eSports app in BD!',
    category: 'squad'
  },
  {
    id: 'r5',
    name: 'শাহরিয়ার নাফিস',
    ign: '⚡NAFIS_SNIPER⚡',
    rankBn: 'হিরোয়িক টিয়ার',
    rankEn: 'Heroic Tier',
    cityBn: 'খুলনা সদর',
    cityEn: 'Khulna Sadar',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: 'ভেরিফায়েড প্লেয়ার',
    badgeEn: 'Verified Player',
    payoutBadge: 'Nagad Payout: ৳১,৯৫০',
    quoteBn: 'এডব্লিউএম ও শর্টগান ম্যাচে কোনো হ্যাকার টিকতে পারে না। অ্যান্টি-চিট সিকিউরিটি খুবই কড়া। যারা সত্যিকারের স্কিল দেখিয়ে টাকা জিততে চায় তাদের জন্য সেরা জায়গা।',
    quoteEn: 'No cheater survives here! The anti-cheat protection is rock solid. Best destination for players looking to earn cash purely based on skills.',
    category: 'solo'
  },
  {
    id: 'r6',
    name: 'ফারহান আহমেদ জয়',
    ign: '★JOY_BOOYAH★',
    rankBn: 'গ্র্যান্ডমাস্টার',
    rankEn: 'Grandmaster',
    cityBn: 'মতিহার, রাজশাহী',
    cityEn: 'Motihar, Rajshahi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    badgeBn: 'প্রো গেমার',
    badgeEn: 'Pro Gamer',
    payoutBadge: 'bKash Payout: ৳৪,২০০',
    quoteBn: 'বিকাশে সরাসরি উইথড্র নেওয়া যায় যা অন্য কোনো অ্যাপে এত ফাস্ট পাওয়া যায় না। লাস্ট গেমিং বিডি সত্যিই আমাদের বাংলাদেশি গেমারদের স্বপ্ন পূরণ করছে।',
    quoteEn: 'Direct instant bKash cashout is faster than anything else in Bangladesh. Last Gaming BD is truly a dream come true for our gaming community.',
    category: 'bkash'
  }
];

export const GameEcosystemShowcase: React.FC<GameEcosystemShowcaseProps> = ({
  currentLang,
  onOpenDownloadModal,
  onNavigate,
}) => {
  // Main Tab State: 'modes' | 'champions' | 'reviews'
  const [activeTab, setActiveTab] = useState<'modes' | 'champions' | 'reviews'>('champions');

  // Sub-state for Modes
  const [selectedModeId, setSelectedModeId] = useState<string>('battle-royale');
  const [showRoomDetails, setShowRoomDetails] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Sub-state for Champions
  const [championFilter, setChampionFilter] = useState<'podium' | 'recent'>('podium');

  // Reviews Carousel (Left to Right) Animation & Navigation State
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const selectedMode = ARENA_MODES.find(m => m.id === selectedModeId) || ARENA_MODES[0];
  const ModeIcon = selectedMode.icon;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Manual Carousel Scroll Controls
  const scrollReviews = (direction: 'left' | 'right') => {
    if (carouselTrackRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="game-ecosystem-showcase" 
      className="py-14 sm:py-20 bg-[#FAFAFA] text-[#0F172A] border-t-2 border-b-2 border-slate-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* =================================================================== */}
        {/* SECTION HEADER: Large, Crisp, High-Contrast & Professional */}
        {/* =================================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          <div className="inline-flex items-center space-x-2 bg-[#7EC151] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm font-bengali">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span>{currentLang === 'bn' ? 'অফিসিয়াল প্লেয়ার হাব ও টুর্নামেন্ট স্টুডিও' : 'Official Player Hub & Tournament Studio'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] font-heading-bn tracking-tight mb-4 leading-tight">
            {currentLang === 'bn' ? (
              <>
                লাইভ লিডারবোর্ড, গেম অ্যারেনা ও{' '}
                <span className="text-[#064E3B] underline decoration-[#7EC151] decoration-4 underline-offset-8">
                  গেমারদের রিভিউ
                </span>
              </>
            ) : (
              <>
                Live Leaderboard, Arenas &{' '}
                <span className="text-[#064E3B] underline decoration-[#7EC151] decoration-4 underline-offset-8">
                  Player Reviews
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-800 text-base sm:text-lg md:text-xl font-bengali font-semibold max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'bn'
              ? 'সাপ্তাহিক চ্যাম্পিয়নদের টপ ৩ পোডিয়াম লিডারবোর্ড দেখুন, বাঁ থেকে ডানে স্লাইড হওয়া লাইভ প্লেয়ার রিভিউ পড়ুন এবং টুর্নামেন্ট রুমে অংশ নিন।'
              : 'Explore the Top 3 champions podium leaderboard, read authentic player reviews animated left to right, and join tournament arenas.'}
          </p>

        </div>

        {/* =================================================================== */}
        {/* MASTER HIGH-CONTRAST NAVIGATION TABS */}
        {/* =================================================================== */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white p-2 rounded-2xl border-2 border-slate-300 shadow-md flex items-center space-x-1.5 sm:space-x-3 max-w-2xl w-full">
            
            {/* Tab 1: Champions & Leaderboard Podium */}
            <button
              id="tab-champions"
              onClick={() => setActiveTab('champions')}
              className={`flex-1 py-3.5 px-2 sm:px-4 rounded-xl font-black text-sm sm:text-base font-bengali transition-all duration-200 flex items-center justify-center space-x-1.5 sm:space-x-2 cursor-pointer border-2 ${
                activeTab === 'champions'
                  ? 'bg-[#7EC151] text-white border-[#064E3B] shadow-md scale-[1.02]'
                  : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Trophy className="w-5 h-5 shrink-0" />
              <span className="truncate">{currentLang === 'bn' ? '🏆 লিডারবোর্ড পোডিয়াম' : '🏆 Champions'}</span>
            </button>

            {/* Tab 2: Reviews Left-to-Right */}
            <button
              id="tab-reviews"
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-3.5 px-2 sm:px-4 rounded-xl font-black text-sm sm:text-base font-bengali transition-all duration-200 flex items-center justify-center space-x-1.5 sm:space-x-2 cursor-pointer border-2 ${
                activeTab === 'reviews'
                  ? 'bg-[#7EC151] text-white border-[#064E3B] shadow-md scale-[1.02]'
                  : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Star className="w-5 h-5 shrink-0 fill-current" />
              <span className="truncate">{currentLang === 'bn' ? '⭐ গেমার রিভিউ' : '⭐ Reviews'}</span>
            </button>

            {/* Tab 3: Game Arenas */}
            <button
              id="tab-modes"
              onClick={() => setActiveTab('modes')}
              className={`flex-1 py-3.5 px-2 sm:px-4 rounded-xl font-black text-sm sm:text-base font-bengali transition-all duration-200 flex items-center justify-center space-x-1.5 sm:space-x-2 cursor-pointer border-2 ${
                activeTab === 'modes'
                  ? 'bg-[#7EC151] text-white border-[#064E3B] shadow-md scale-[1.02]'
                  : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Gamepad2 className="w-5 h-5 shrink-0" />
              <span className="truncate">{currentLang === 'bn' ? '🎮 গেম অ্যারেনা' : '🎮 Arenas'}</span>
            </button>

          </div>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CHAMPIONS & LEADERBOARD PODIUM (Olympic 3D Podium Layout) */}
        {/* =================================================================== */}
        {activeTab === 'champions' && (
          <motion.div
            key="champions-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* View Sub-Toggle: Weekly Podium vs Recent Real-Time Winners */}
            <div className="flex justify-center">
              <div className="bg-white p-1.5 rounded-2xl flex items-center space-x-2 border-2 border-slate-300 shadow-sm">
                <button
                  onClick={() => setChampionFilter('podium')}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-black text-xs sm:text-base font-bengali transition-all cursor-pointer flex items-center space-x-2 border-2 ${
                    championFilter === 'podium'
                      ? 'bg-[#FED24F] text-[#0F172A] border-amber-600 shadow-sm'
                      : 'bg-transparent text-slate-700 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <Trophy className="w-5 h-5 text-amber-900" />
                  <span>{currentLang === 'bn' ? 'সাপ্তাহিক টপ ৩ পোডিয়াম (১ম উপরে, ২য় ও ৩য় পাশে)' : 'Weekly Top 3 Podium'}</span>
                </button>

                <button
                  onClick={() => setChampionFilter('recent')}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-black text-xs sm:text-base font-bengali transition-all cursor-pointer flex items-center space-x-2 border-2 ${
                    championFilter === 'recent'
                      ? 'bg-[#7EC151] text-white border-[#064E3B] shadow-sm'
                      : 'bg-transparent text-slate-700 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <Zap className="w-5 h-5 text-white" />
                  <span>{currentLang === 'bn' ? 'রিয়েল-টাইম ক্যাশআউট লিস্ট' : 'Live Payout List'}</span>
                </button>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OLYMPIC PODIUM LEADERBOARD: 2nd Left, 1st Center TOP Elevated, 3rd Right */}
            {/* =============================================================== */}
            {championFilter === 'podium' && (
              <div className="space-y-6">
                
                {/* Podiums Container: Responsive 3 Columns side-by-side on all screens */}
                <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 rounded-3xl p-3 sm:p-8 border-2 border-slate-300 shadow-lg">
                  
                  {/* Podium Header Label */}
                  <div className="text-center mb-6 sm:mb-10">
                    <span className="inline-block px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-black text-xs sm:text-sm font-bengali uppercase tracking-wider mb-2">
                      {currentLang === 'bn' ? 'সাপ্তাহিক অফিসিয়াল হল অব ফেম' : 'Weekly Official Hall of Fame'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] font-heading-bn">
                      {currentLang === 'bn' ? 'লিডারবোর্ড শীর্ষ ৩ চ্যাম্পিয়ন' : 'Leaderboard Top 3 Champions'}
                    </h3>
                  </div>

                  {/* 3-Column Podium Display: Left = Rank 2, Center = Rank 1 (Raised high), Right = Rank 3 */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end max-w-5xl mx-auto">
                    
                    {/* ------------------------------------------------------------- */}
                    {/* LEFT COLUMN: RANK #2 (Silver Medal - Ninja Rafi) */}
                    {/* ------------------------------------------------------------- */}
                    <div className="flex flex-col items-center">
                      
                      {/* Rank #2 Card */}
                      <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-6 border-2 border-slate-300 shadow-md hover:border-slate-400 transition-all duration-200 text-center flex flex-col justify-between mb-2">
                        
                        {/* Rank Badge */}
                        <div className="mb-2 sm:mb-3">
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider bg-slate-200 text-slate-800 border border-slate-400 font-bengali">
                            {currentLang === 'bn' ? '২য় স্থান' : 'Rank #2'}
                          </span>
                        </div>

                        {/* Avatar with Silver Ring */}
                        <div className="relative inline-block mx-auto mb-2 sm:mb-3">
                          <img
                            src={PODIUM_PLAYERS[0].avatar}
                            alt={PODIUM_PLAYERS[0].name}
                            className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl object-cover border-3 sm:border-4 border-slate-300 shadow-md mx-auto"
                          />
                          <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px] sm:text-xs font-black border-2 border-white shadow">
                            #2
                          </div>
                        </div>

                        {/* Player Name */}
                        <h4 className="text-xs sm:text-lg md:text-xl font-black text-[#0F172A] font-heading-bn truncate mb-0.5">
                          {PODIUM_PLAYERS[0].name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-slate-600 font-bengali font-bold truncate mb-2">
                          {currentLang === 'bn' ? PODIUM_PLAYERS[0].regionBn : PODIUM_PLAYERS[0].regionEn}
                        </p>

                        {/* Stats Pill */}
                        <div className="bg-[#F8FAFC] p-1.5 sm:p-2.5 rounded-xl border border-slate-200 mb-2 sm:mb-3 space-y-1">
                          <div className="flex justify-between items-center text-[10px] sm:text-xs font-bengali">
                            <span className="text-slate-500 font-bold">{currentLang === 'bn' ? 'কিল' : 'Kills'}:</span>
                            <span className="font-black text-slate-900">{PODIUM_PLAYERS[0].totalKills}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] sm:text-xs font-bengali">
                            <span className="text-slate-500 font-bold">{currentLang === 'bn' ? 'জয়' : 'Won'}:</span>
                            <span className="font-black text-[#064E3B]">{PODIUM_PLAYERS[0].matchesWon}</span>
                          </div>
                        </div>

                        {/* Cash Prize */}
                        <div className="pt-1.5 sm:pt-2 border-t border-slate-200">
                          <span className="text-[9px] sm:text-xs text-slate-500 font-bengali font-bold block uppercase">
                            {currentLang === 'bn' ? 'প্রাইজ মানি' : 'Prize'}
                          </span>
                          <span className="text-sm sm:text-xl md:text-2xl font-black text-[#064E3B] font-heading-bn">
                            {currentLang === 'bn' ? PODIUM_PLAYERS[0].earningsBn : PODIUM_PLAYERS[0].earningsEn}
                          </span>
                        </div>

                      </div>

                      {/* Podium Base #2 (Silver Pedestal) */}
                      <div className="w-full bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-2xl border-2 border-b-0 border-slate-400 flex flex-col items-center justify-center shadow-inner h-16 sm:h-24 md:h-28">
                        <span className="text-2xl sm:text-4xl font-black text-slate-600 font-mono">2</span>
                        <span className="text-[9px] sm:text-xs font-black text-slate-700 font-bengali uppercase tracking-wider">
                          {currentLang === 'bn' ? 'রৌপ্য পদক' : 'Silver'}
                        </span>
                      </div>

                    </div>

                    {/* ------------------------------------------------------------- */}
                    {/* CENTER COLUMN: RANK #1 (Gold Champion - Shadow FF) RAISED TOP */}
                    {/* ------------------------------------------------------------- */}
                    <div className="flex flex-col items-center z-10 -mt-6 sm:-mt-10 md:-mt-12">
                      
                      {/* Floating Gold Crown Badge on Top */}
                      <div className="mb-2 flex items-center justify-center animate-bounce">
                        <div className="bg-[#FED24F] text-[#0F172A] p-2 sm:p-3 rounded-2xl border-2 border-amber-600 shadow-lg flex items-center space-x-1 sm:space-x-1.5">
                          <Crown className="w-5 h-5 sm:w-7 sm:h-7 text-amber-900 fill-current" />
                          <span className="font-black text-xs sm:text-sm font-bengali hidden sm:inline">
                            {currentLang === 'bn' ? 'সাপ্তাহিক চ্যাম্পিয়ন' : 'Champion'}
                          </span>
                        </div>
                      </div>

                      {/* Rank #1 Grand Card (Highlighted with Gold border & Rich Glow) */}
                      <div className="w-full bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 rounded-2xl sm:rounded-3xl p-3 sm:p-7 border-3 sm:border-4 border-amber-500 shadow-xl ring-2 sm:ring-4 ring-amber-300/50 text-center flex flex-col justify-between mb-2">
                        
                        {/* Rank Badge */}
                        <div className="mb-2 sm:mb-3">
                          <span className="inline-block px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#FED24F] text-[#0F172A] border-2 border-amber-600 font-bengali shadow-sm">
                            {currentLang === 'bn' ? '👑 ১ম স্থান (শীর্ষ)' : '👑 Rank #1 (Top)'}
                          </span>
                        </div>

                        {/* Avatar with Gold Border */}
                        <div className="relative inline-block mx-auto mb-2 sm:mb-3">
                          <img
                            src={PODIUM_PLAYERS[1].avatar}
                            alt={PODIUM_PLAYERS[1].name}
                            className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl object-cover border-3 sm:border-4 border-amber-400 shadow-lg mx-auto"
                          />
                          <div className="absolute -bottom-2 -right-2 sm:-bottom-2.5 sm:-right-2.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-xs sm:text-sm font-black border-2 border-white shadow-md">
                            #1
                          </div>
                        </div>

                        {/* Player Name */}
                        <h4 className="text-sm sm:text-xl md:text-2xl font-black text-[#0F172A] font-heading-bn truncate mb-0.5">
                          {PODIUM_PLAYERS[1].name}
                        </h4>
                        <p className="text-[11px] sm:text-sm text-slate-700 font-bengali font-bold truncate mb-2 sm:mb-3">
                          {currentLang === 'bn' ? PODIUM_PLAYERS[1].regionBn : PODIUM_PLAYERS[1].regionEn} • {PODIUM_PLAYERS[1].uid}
                        </p>

                        {/* Stats Pill */}
                        <div className="bg-amber-100/70 p-2 sm:p-3 rounded-xl border border-amber-300 mb-2 sm:mb-3 space-y-1">
                          <div className="flex justify-between items-center text-[11px] sm:text-sm font-bengali">
                            <span className="text-amber-950 font-bold">{currentLang === 'bn' ? 'মোট কিল' : 'Kills'}:</span>
                            <span className="font-black text-amber-900">{PODIUM_PLAYERS[1].totalKills}</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] sm:text-sm font-bengali">
                            <span className="text-amber-950 font-bold">{currentLang === 'bn' ? 'ম্যাচ জয়' : 'Won'}:</span>
                            <span className="font-black text-[#064E3B]">{PODIUM_PLAYERS[1].matchesWon}</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] sm:text-sm font-bengali">
                            <span className="text-amber-950 font-bold">{currentLang === 'bn' ? 'উইন রেট' : 'Win %'}:</span>
                            <span className="font-black text-amber-800">{PODIUM_PLAYERS[1].winRate}</span>
                          </div>
                        </div>

                        {/* Grand Cash Prize */}
                        <div className="pt-2 sm:pt-3 border-t-2 border-amber-200">
                          <span className="text-[10px] sm:text-xs text-amber-950 font-bengali font-bold block uppercase tracking-wider mb-0.5">
                            {currentLang === 'bn' ? 'সাপ্তাহিক প্রাইজ মানি' : 'Grand Weekly Cash'}
                          </span>
                          <span className="text-lg sm:text-2xl md:text-3xl font-black text-[#064E3B] font-heading-bn">
                            {currentLang === 'bn' ? PODIUM_PLAYERS[1].earningsBn : PODIUM_PLAYERS[1].earningsEn}
                          </span>
                        </div>

                      </div>

                      {/* Podium Base #1 (Gold Pedestal - Tallest) */}
                      <div className="w-full bg-gradient-to-b from-[#FED24F] via-amber-300 to-amber-400 rounded-t-2xl border-3 border-b-0 border-amber-600 flex flex-col items-center justify-center shadow-lg h-24 sm:h-36 md:h-40">
                        <span className="text-3xl sm:text-5xl md:text-6xl font-black text-amber-900 font-mono">1</span>
                        <span className="text-[10px] sm:text-sm font-black text-amber-950 font-bengali uppercase tracking-wider">
                          {currentLang === 'bn' ? 'স্বর্ণ চ্যাম্পিয়ন' : 'Gold Champion'}
                        </span>
                      </div>

                    </div>

                    {/* ------------------------------------------------------------- */}
                    {/* RIGHT COLUMN: RANK #3 (Bronze Medal - Vampire 07) */}
                    {/* ------------------------------------------------------------- */}
                    <div className="flex flex-col items-center">
                      
                      {/* Rank #3 Card */}
                      <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-6 border-2 border-slate-300 shadow-md hover:border-slate-400 transition-all duration-200 text-center flex flex-col justify-between mb-2">
                        
                        {/* Rank Badge */}
                        <div className="mb-2 sm:mb-3">
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-600 font-bengali">
                            {currentLang === 'bn' ? '৩য় স্থান' : 'Rank #3'}
                          </span>
                        </div>

                        {/* Avatar with Bronze Ring */}
                        <div className="relative inline-block mx-auto mb-2 sm:mb-3">
                          <img
                            src={PODIUM_PLAYERS[2].avatar}
                            alt={PODIUM_PLAYERS[2].name}
                            className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl object-cover border-3 sm:border-4 border-amber-700/60 shadow-md mx-auto"
                          />
                          <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-900 text-white flex items-center justify-center text-[10px] sm:text-xs font-black border-2 border-white shadow">
                            #3
                          </div>
                        </div>

                        {/* Player Name */}
                        <h4 className="text-xs sm:text-lg md:text-xl font-black text-[#0F172A] font-heading-bn truncate mb-0.5">
                          {PODIUM_PLAYERS[2].name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-slate-600 font-bengali font-bold truncate mb-2">
                          {currentLang === 'bn' ? PODIUM_PLAYERS[2].regionBn : PODIUM_PLAYERS[2].regionEn}
                        </p>

                        {/* Stats Pill */}
                        <div className="bg-[#F8FAFC] p-1.5 sm:p-2.5 rounded-xl border border-slate-200 mb-2 sm:mb-3 space-y-1">
                          <div className="flex justify-between items-center text-[10px] sm:text-xs font-bengali">
                            <span className="text-slate-500 font-bold">{currentLang === 'bn' ? 'কিল' : 'Kills'}:</span>
                            <span className="font-black text-slate-900">{PODIUM_PLAYERS[2].totalKills}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] sm:text-xs font-bengali">
                            <span className="text-slate-500 font-bold">{currentLang === 'bn' ? 'জয়' : 'Won'}:</span>
                            <span className="font-black text-[#064E3B]">{PODIUM_PLAYERS[2].matchesWon}</span>
                          </div>
                        </div>

                        {/* Cash Prize */}
                        <div className="pt-1.5 sm:pt-2 border-t border-slate-200">
                          <span className="text-[9px] sm:text-xs text-slate-500 font-bengali font-bold block uppercase">
                            {currentLang === 'bn' ? 'প্রাইজ মানি' : 'Prize'}
                          </span>
                          <span className="text-sm sm:text-xl md:text-2xl font-black text-[#064E3B] font-heading-bn">
                            {currentLang === 'bn' ? PODIUM_PLAYERS[2].earningsBn : PODIUM_PLAYERS[2].earningsEn}
                          </span>
                        </div>

                      </div>

                      {/* Podium Base #3 (Bronze Pedestal) */}
                      <div className="w-full bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-2xl border-2 border-b-0 border-amber-600 flex flex-col items-center justify-center shadow-inner h-12 sm:h-16 md:h-20">
                        <span className="text-xl sm:text-3xl font-black text-amber-900 font-mono">3</span>
                        <span className="text-[9px] sm:text-xs font-black text-amber-950 font-bengali uppercase tracking-wider">
                          {currentLang === 'bn' ? 'ব্রোঞ্জ পদক' : 'Bronze'}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Callout action banner */}
                <div className="bg-[#F0FDF4] rounded-3xl p-6 sm:p-8 border-2 border-[#7EC151] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#7EC151] flex items-center justify-center shrink-0 shadow-xs">
                      <Wallet className="w-7 h-7 text-[#064E3B]" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-2xl font-black font-heading-bn text-[#0F172A]">
                        {currentLang === 'bn' ? 'আপনিও হতে পারেন পরবর্তী শীর্ষ চ্যাম্পিয়ন!' : 'You Can Be The Next Top Champion!'}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-800 font-bengali font-bold">
                        {currentLang === 'bn' 
                          ? 'প্রতিদিন টুর্নামেন্টে জয়েন করে সরাসরি আপনার বিকাশ/নগদে টাকা তুলে নিন।' 
                          : 'Join daily tournaments, climb the leaderboard, and withdraw real cash.'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenDownloadModal}
                    className="w-full md:w-auto bg-[#7EC151] hover:bg-[#72b047] text-white font-black px-7 py-4 rounded-2xl text-base transition-all border-2 border-[#064E3B] shadow-md flex items-center justify-center space-x-2 shrink-0 cursor-pointer font-bengali"
                  >
                    <Download className="w-5 h-5 text-white" />
                    <span>{currentLang === 'bn' ? 'অ্যাপ নামিয়ে টুর্নামেন্ট খেলুন' : 'Download APK to Play'}</span>
                  </button>
                </div>

              </div>
            )}

            {/* Sub-view: Real-time Winners List */}
            {championFilter === 'recent' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {RECENT_WINNERS.map((winner) => (
                  <div
                    key={winner.id}
                    className="bg-white rounded-3xl p-5 border-2 border-slate-300 hover:border-[#7EC151] shadow-md hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={winner.avatar}
                          alt={winner.name}
                          className="w-12 h-12 rounded-2xl object-cover border-2 border-[#7EC151]"
                        />
                        <div className="overflow-hidden">
                          <h4 className="text-base font-black text-[#0F172A] truncate font-heading-bn">
                            {winner.name}
                          </h4>
                          <p className="text-xs text-slate-500 font-mono font-bold">
                            {winner.uid}
                          </p>
                          <p className="text-xs text-slate-700 font-bengali font-bold">
                            {currentLang === 'bn' ? winner.cityBn : winner.cityEn}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-300 space-y-2 mb-4 font-bengali">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-slate-600 font-bold">{currentLang === 'bn' ? 'ম্যাচ মোড' : 'Mode'}:</span>
                          <span className="font-black text-[#0F172A]">{winner.mode}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-slate-600 font-bold">{currentLang === 'bn' ? 'মোট কিল' : 'Kills'}:</span>
                          <span className="font-black text-amber-700 flex items-center space-x-1">
                            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span>{winner.kills} Kills</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t-2 border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 font-bengali block uppercase tracking-wider font-bold">
                          {currentLang === 'bn' ? 'পরিশোধিত অর্থ' : 'Cash Prize'}
                        </span>
                        <span className="text-xl font-black text-[#064E3B] font-heading-bn">
                          {currentLang === 'bn' ? winner.prizeBn : winner.prizeEn}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-400 text-xs font-black">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{winner.method} Paid</span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono block mt-1 font-bold">
                          {winner.trxId} • {currentLang === 'bn' ? winner.timeBn : winner.timeEn}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </motion.div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: REVIEWS LEFT-TO-RIGHT ANIMATED INFINITE CAROUSEL */}
        {/* =================================================================== */}
        {activeTab === 'reviews' && (
          <motion.div
            key="reviews-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Reviews Header Banner & Stats */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-5 sm:p-7 rounded-3xl border-2 border-slate-300 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center shrink-0">
                  <Star className="w-8 h-8 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#0F172A] font-mono">4.9 / 5.0</span>
                    <span className="text-xs bg-[#7EC151] text-white font-black px-2.5 py-1 rounded-full font-bengali">
                      {currentLang === 'bn' ? '১০০% ভেরিফায়েড গেমার' : '100% Verified'}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-bengali font-bold block">
                    {currentLang === 'bn' ? '১৫,০০০+ বাংলাদেশি প্লেয়ারদের রিভিউ • বাম থেকে ডানে স্লাইড হচ্ছে' : '15,000+ Verified Player Reviews • Sliding Left-to-Right'}
                  </span>
                </div>
              </div>

              {/* Controls: Left / Right Navigation & Pause/Play */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border-2 border-slate-300 cursor-pointer transition-all"
                  title={isPaused ? 'Resume Animation' : 'Pause Animation'}
                >
                  {isPaused ? <Play className="w-5 h-5 text-[#064E3B]" /> : <Pause className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => scrollReviews('left')}
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 cursor-pointer shadow-sm transition-all"
                  title="Previous Reviews"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scrollReviews('right')}
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 cursor-pointer shadow-sm transition-all"
                  title="Next Reviews"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* LEFT-TO-RIGHT ANIMATED CONTINUOUS CAROUSEL TRACK */}
            <div 
              className="relative w-full overflow-hidden py-4 select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Subtle edge fades for smooth visual polish */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

              {/* Scrollable Container with Continuous LTR Animation */}
              <div 
                ref={carouselTrackRef}
                className="flex space-x-5 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-2"
              >
                {/* 
                  Double set of reviews for seamless continuous animation from Left to Right.
                  Using Framer Motion with easeLinear.
                */}
                <motion.div
                  className="flex space-x-5 shrink-0"
                  animate={{
                    x: isPaused ? 0 : [0, 1200]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35,
                      ease: "linear",
                    }
                  }}
                >
                  {[...VERIFIED_REVIEWS, ...VERIFIED_REVIEWS].map((review, idx) => (
                    <div
                      key={`${review.id}-${idx}`}
                      className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 hover:border-[#7EC151] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Rating Stars & Cashout Stamp */}
                        <div className="flex items-center justify-between">
                          <div className="flex text-amber-500 space-x-1">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                            ))}
                          </div>

                          <span className="text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-400 px-3 py-1 rounded-md font-mono">
                            {review.payoutBadge}
                          </span>
                        </div>

                        {/* Review Content with Large, High-Legibility Font */}
                        <p className="text-base sm:text-lg font-bengali font-bold text-[#0F172A] leading-relaxed">
                          "{currentLang === 'bn' ? review.quoteBn : review.quoteEn}"
                        </p>
                      </div>

                      {/* Reviewer Bio */}
                      <div className="pt-5 mt-5 border-t-2 border-slate-100 flex items-center space-x-3.5">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-[#7EC151] shadow-sm"
                        />
                        <div>
                          <h4 className="text-base sm:text-lg font-black font-heading-bn text-[#0F172A]">
                            {review.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#064E3B] font-mono font-bold">
                            {review.ign}
                          </p>
                          <p className="text-xs text-slate-600 font-bengali font-bold">
                            {currentLang === 'bn' ? review.cityBn : review.cityEn} • {currentLang === 'bn' ? review.rankBn : review.rankEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Guide hint */}
              <div className="text-center mt-3">
                <span className="text-xs text-slate-500 font-bengali font-semibold">
                  {currentLang === 'bn' ? '💡 রিভিউগুলো বাঁ থেকে ডানে চলছে। থামিয়ে পড়তে কার্ডের উপর মাউস রাখুন অথবা অ্যারো বাটনে চাপুন।' : '💡 Reviews are smoothly animated left-to-right. Hover over any card to pause.'}
                </span>
              </div>
            </div>

            {/* 4 Solid Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              
              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 flex items-start space-x-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0F172A] font-heading-bn mb-1">
                    {currentLang === 'bn' ? '২ মিনিটে নিশ্চিত উইথড্র' : '2-Min Instant Payout'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-bengali font-bold leading-snug">
                    {currentLang === 'bn' ? 'বিকাশ ও নগদে কোনো চার্জ ছাড়াই স্বয়ংক্রিয় দ্রুত ক্যাশআউট।' : 'Direct mobile wallet cashouts without hidden fees.'}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 flex items-start space-x-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0F172A] font-heading-bn mb-1">
                    {currentLang === 'bn' ? 'অটো রুম আইডি ও পাস' : 'Automated Room Codes'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-bengali font-bold leading-snug">
                    {currentLang === 'bn' ? 'ম্যাচ শুরুর ঠিক ৫ মিনিট আগে স্বয়ংক্রিয় নোটিফিকেশনে রুম ডেলিভারি।' : 'Instant notifications with room details 5 mins prior.'}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 flex items-start space-x-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-sky-100 text-sky-900 border border-sky-300 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0F172A] font-heading-bn mb-1">
                    {currentLang === 'bn' ? '১০০% অ্যান্টি-চিট প্রোটেকশন' : '100% Anti-Cheat System'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-bengali font-bold leading-snug">
                    {currentLang === 'bn' ? 'শক্তিশালী সার্ভার অ্যান্টি-হ্যাক ইঞ্জিন যা স্বচ্ছ ফেয়ার প্লে নিশ্চিত করে।' : 'Real-time anti-hack detection guarantees honest matches.'}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 flex items-start space-x-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-purple-100 text-purple-900 border border-purple-300 shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#0F172A] font-heading-bn mb-1">
                    {currentLang === 'bn' ? '২৪/৭ লাইভ সাপোর্ট' : '24/7 Dedicated Support'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-bengali font-bold leading-snug">
                    {currentLang === 'bn' ? 'টেলিগ্রাম ও হোয়াটসঅ্যাপে সার্বক্ষণিক অ্যাক্টিভ অ্যাডমিন সহায়তা।' : 'Instant round-the-clock help via Telegram & WhatsApp.'}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: GAME ARENAS STUDIO (Solid Cards, Room Preview, Rules) */}
        {/* =================================================================== */}
        {activeTab === 'modes' && (
          <motion.div
            key="modes-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* 4 Mode Selectors - Solid Crisp Physical Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {ARENA_MODES.map((mode) => {
                const Icon = mode.icon;
                const isSelected = selectedModeId === mode.id;

                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setSelectedModeId(mode.id);
                      setShowRoomDetails(false);
                    }}
                    className={`relative text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#7EC151] ring-2 ring-[#7EC151]/20 shadow-md translate-y-[-2px]'
                        : 'bg-[#F8FAFC] border-slate-300 hover:border-slate-400 hover:bg-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border-2 ${
                        isSelected 
                          ? 'bg-[#7EC151] text-white border-[#064E3B]' 
                          : 'bg-white text-[#0F172A] border-slate-300'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-md ${mode.badgeBg} ${mode.badgeText}`}>
                        {currentLang === 'bn' ? mode.tagBn : mode.tagEn}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black font-heading-bn text-[#0F172A] mb-1 leading-snug">
                      {currentLang === 'bn' ? mode.titleBn : mode.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 font-bengali font-bold">
                      {currentLang === 'bn' ? mode.playersCountBn : mode.playersCountEn}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Mode Showcase: Solid Layout with Interactive Room Simulator */}
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Visual Map Artwork & Server Specs */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-white aspect-video sm:aspect-4/3">
                    <img
                      src={selectedMode.mapImage}
                      alt={selectedMode.titleEn}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                    {/* Solid Map Badge (Top-Left) */}
                    <div className="absolute top-3 left-3 bg-white px-3.5 py-1.5 rounded-xl border-2 border-slate-300 text-xs sm:text-sm font-black text-[#0F172A] flex items-center space-x-1.5 shadow-sm">
                      <MapPin className="w-4 h-4 text-[#7EC151]" />
                      <span>{currentLang === 'bn' ? selectedMode.mapNameBn : selectedMode.mapNameEn}</span>
                    </div>

                    {/* Solid Live Status Badge (Top-Right) */}
                    <div className="absolute top-3 right-3 bg-[#FED24F] text-[#0F172A] px-3.5 py-1.5 rounded-xl border-2 border-amber-500 font-black text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] animate-pulse" />
                      <span>{currentLang === 'bn' ? selectedMode.roomStatusBn : selectedMode.roomStatusEn}</span>
                    </div>

                    {/* Solid Bottom Banner */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white p-3.5 rounded-xl border-2 border-slate-300 flex items-center justify-between text-xs sm:text-sm font-bengali shadow-md">
                      <div className="flex items-center space-x-2 text-slate-900 font-black">
                        <Clock className="w-4 h-4 text-[#7EC151]" />
                        <span>{currentLang === 'bn' ? selectedMode.matchDurationBn : selectedMode.matchDurationEn}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#064E3B] font-black">
                        <Trophy className="w-4 h-4 text-[#D97706]" />
                        <span>{currentLang === 'bn' ? selectedMode.avgPrizeBn : selectedMode.avgPrizeEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Solid Server Latency & Slot Fill Meter */}
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border-2 border-slate-300 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bengali">
                      <span className="text-slate-700 font-bold">
                        {currentLang === 'bn' ? 'স্লট বুকিং স্ট্যাটাস:' : 'Slot Capacity:'}
                      </span>
                      <span className="font-black text-[#0F172A]">
                        {selectedMode.filledSlots} / {selectedMode.totalSlots} {currentLang === 'bn' ? 'প্লেয়ার' : 'Players'}
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden border border-slate-300">
                      <div 
                        className="bg-[#7EC151] h-full rounded-full transition-all duration-500" 
                        style={{ width: `${(selectedMode.filledSlots / selectedMode.totalSlots) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-slate-800 pt-1 border-t border-slate-200">
                      <span className="flex items-center space-x-1.5 text-emerald-900 font-black">
                        <Wifi className="w-4 h-4 text-[#7EC151]" />
                        <span>BD-DHAKA (Direct Server)</span>
                      </span>
                      <span className="font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                        14ms Latency
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Specifications & Feature Bullets */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-[#F8FAFC] px-3.5 py-1.5 rounded-lg border-2 border-slate-300 text-xs sm:text-sm font-black text-[#0F172A] mb-2.5">
                      <ModeIcon className="w-4 h-4 text-[#7EC151]" />
                      <span>{currentLang === 'bn' ? 'ম্যাচ স্পেসিফিকেশন ও নিয়ামাবলী' : 'Match Specs & Rules'}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] font-heading-bn">
                      {currentLang === 'bn' ? selectedMode.titleBn : selectedMode.titleEn}
                    </h3>
                  </div>

                  {/* 3 Stat Badges in Solid White */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                    <div className="bg-[#F8FAFC] p-4 rounded-2xl border-2 border-slate-300">
                      <span className="text-xs sm:text-sm text-slate-600 font-bengali font-bold block mb-1">
                        {currentLang === 'bn' ? 'এন্ট্রি ফি' : 'Entry Fee'}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-[#0F172A]">
                        {currentLang === 'bn' ? selectedMode.entryFeeBn : selectedMode.entryFeeEn}
                      </span>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-2xl border-2 border-slate-300">
                      <span className="text-xs sm:text-sm text-slate-600 font-bengali font-bold block mb-1">
                        {currentLang === 'bn' ? 'কিল রিওয়ার্ড' : 'Kill Reward'}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-[#064E3B]">
                        {currentLang === 'bn' ? selectedMode.perKillPrizeBn : selectedMode.perKillPrizeEn}
                      </span>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-2xl border-2 border-slate-300 col-span-2 sm:col-span-1">
                      <span className="text-xs sm:text-sm text-slate-600 font-bengali font-bold block mb-1">
                        {currentLang === 'bn' ? 'মোট প্রাইজ পুল' : 'Prize Pool'}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-amber-700">
                        {currentLang === 'bn' ? selectedMode.avgPrizeBn : selectedMode.avgPrizeEn}
                      </span>
                    </div>
                  </div>

                  {/* Match Rules & Features */}
                  <div className="space-y-2.5">
                    <span className="text-sm font-black text-[#0F172A] uppercase tracking-wider font-bengali block">
                      {currentLang === 'bn' ? 'এই মোডের মূল সুবিধাসমূহ:' : 'Key Highlights & Rules:'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(currentLang === 'bn' ? selectedMode.featuresBn : selectedMode.featuresEn).map((feat, idx) => (
                        <div 
                          key={idx} 
                          className="bg-[#F8FAFC] p-3 rounded-xl border-2 border-slate-300 flex items-start space-x-2.5 text-xs sm:text-sm text-slate-900 font-bengali font-bold"
                        >
                          <div className="w-5 h-5 rounded-md bg-[#7EC151] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Automated Room Delivery Interactive Demo Box */}
                  <div className="bg-amber-50/70 p-4 sm:p-5 rounded-2xl border-2 border-amber-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm font-black text-amber-950 font-bengali">
                        <Smartphone className="w-4 h-4 text-amber-800" />
                        <span>{currentLang === 'bn' ? 'অটোমেটেড রুম আইডি প্রিভিউ (সিমুলেটর):' : 'Automated Room ID Preview (Simulator):'}</span>
                      </div>
                      
                      <button
                        onClick={() => setShowRoomDetails(!showRoomDetails)}
                        className="text-xs sm:text-sm font-black text-[#064E3B] hover:text-[#7EC151] flex items-center space-x-1 cursor-pointer font-bengali"
                      >
                        {showRoomDetails ? (
                          <>
                            <EyeOff className="w-4 h-4" />
                            <span>{currentLang === 'bn' ? 'লুকান' : 'Hide'}</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>{currentLang === 'bn' ? 'রুম কোড দেখুন' : 'View Code'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs sm:text-sm">
                      <div className="bg-white p-3 rounded-xl border border-amber-300 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-600 font-bold block">Room ID:</span>
                          <span className="text-base font-black text-[#0F172A]">
                            {showRoomDetails ? selectedMode.simulatedRoomId : '••••••'}
                          </span>
                        </div>
                        {showRoomDetails && (
                          <button
                            onClick={() => handleCopy(selectedMode.simulatedRoomId, 'room')}
                            className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                            title="Copy Room ID"
                          >
                            {copiedKey === 'room' ? <CheckCheck className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        )}
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-amber-300 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-600 font-bold block">Password:</span>
                          <span className="text-base font-black text-[#0F172A]">
                            {showRoomDetails ? selectedMode.simulatedPass : '••••'}
                          </span>
                        </div>
                        {showRoomDetails && (
                          <button
                            onClick={() => handleCopy(selectedMode.simulatedPass, 'pass')}
                            className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                            title="Copy Password"
                          >
                            {copiedKey === 'pass' ? <CheckCheck className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      onClick={onOpenDownloadModal}
                      className="w-full sm:w-auto flex-1 bg-[#7EC151] hover:bg-[#72b047] text-white font-black py-4 px-6 rounded-2xl text-base transition-all border-2 border-[#064E3B] shadow-md flex items-center justify-center space-x-2 cursor-pointer font-bengali"
                    >
                      <Download className="w-5 h-5 text-white" />
                      <span>{currentLang === 'bn' ? 'অ্যাপ ডাউনলোড করে ম্যাচ খেলুন' : 'Download APK to Play'}</span>
                    </button>

                    <button
                      onClick={() => onNavigate('tournaments')}
                      className="w-full sm:w-auto bg-[#FED24F] hover:bg-[#f3c940] text-[#0F172A] font-black py-4 px-6 rounded-2xl text-base transition-all border-2 border-amber-600 shadow-sm flex items-center justify-center space-x-2 cursor-pointer font-bengali"
                    >
                      <span>{currentLang === 'bn' ? 'লাইভ ম্যাচ শিডিউল' : 'View Tournament Schedule'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
