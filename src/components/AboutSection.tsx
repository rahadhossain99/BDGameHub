import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Trophy, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Gamepad2,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { CORE_VALUES } from '../data/mockData';
import { Language } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
}) => {
  const statNumbers = [
    { target: 50000, prefix: '', suffix: '+', labelBn: 'সক্রিয় নিবন্ধিত গেমার', labelEn: 'Active Registered Gamers', subBn: 'সারাদেশ থেকে যুক্ত খেলোয়াড়', subEn: 'Competitive players BD' },
    { target: 10, prefix: '৳', suffix: ' লাখ+', labelBn: 'নগদ পুরস্কার বিতরণ', labelEn: 'Cash Prizes Distributed', subBn: 'বিকাশ ও নগদে পরিশোধিত', subEn: 'Instant mobile payouts' },
    { target: 100000, prefix: '', suffix: '+', labelBn: 'সম্পন্ন টুর্নামেন্ট', labelEn: 'Tournaments Hosted', subBn: 'সোলো, ডুও ও স্কোয়াড ম্যাচ', subEn: 'Custom matches played' },
    { target: 100, prefix: '', suffix: '%', labelBn: 'স্বয়ংক্রিয় নিরাপদ সিস্টেম', labelEn: 'Automated Fair Play', subBn: '১০০% হ্যাকার-মুক্ত পরিবেশ', subEn: 'Anti-cheat protection' },
  ];

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Top Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-14 border border-[#B2D959]/50 m3-elevation-2 shadow-xl"
        >
          <div className="inline-flex items-center space-x-2 bg-[#B2D959]/25 text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-[#B2D959] shadow-2xs font-bengali">
            <Sparkles className="w-4 h-4 text-[#FED24F]" />
            <span>{currentLang === 'bn' ? 'আমাদের ইকোসিস্টেম' : 'Our Ecosystem'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading-bn tracking-tight mb-5 leading-tight">
            {currentLang === 'bn' ? 'আমাদের লক্ষ্য ও মূল উদ্দেশ্য' : 'Our Mission & Vision'}
          </h1>

          <p className="text-[#334155] text-base sm:text-xl font-bengali leading-relaxed">
            {currentLang === 'bn'
              ? 'বাংলাদেশে কোটি কোটি ই-স্পোর্টস প্রেমী গেমার রয়েছেন। আমাদের লক্ষ্য হলো গেমারদের মেধা ও স্কিল প্রদর্শনের জন্য একটি ১ নম্বর সুরক্ষিত, স্বয়ংক্রিয় ও আধুনিক টুর্নামেন্ট ইকোসিস্টেম তৈরি করা, যেখানে প্রতিটি ম্যাচ হয় স্বচ্ছ এবং প্রাইজ উইথড্রয়াল হয় মুহূর্তেই।'
              : 'There are millions of passionate eSports gamers across Bangladesh. Our mission is to build the #1 automated, highly secure tournament platform where every match is 100% fair and prize cashouts are instant.'}
          </p>
        </motion.div>

        {/* Numbers & Stats */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading-bn mb-3">
              {currentLang === 'bn' ? 'সংখ্যায় Fast Gaming BD' : 'Fast Gaming BD in Numbers'}
            </h2>
            <p className="text-[#475569] text-base sm:text-lg font-bengali">
              {currentLang === 'bn'
                ? 'বাংলাদেশের প্রতিটি প্রান্ত থেকে যুক্ত থাকা বিশ্বস্ত গেমিং পরিসংখ্যান।'
                : 'Verified statistics of our growing competitive gaming community.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statNumbers.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 text-center border border-[#B2D959]/40 m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 shadow-md group"
              >
                <p className="text-4xl sm:text-5xl font-black text-[#7EC151] font-display mb-2 group-hover:scale-105 transition-transform">
                  <AnimatedCounter
                    end={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isBengali={currentLang === 'bn'}
                  />
                </p>
                <p className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading-bn mb-1">
                  {currentLang === 'bn' ? stat.labelBn : stat.labelEn}
                </p>
                <p className="text-xs sm:text-sm text-[#475569] font-bengali">
                  {currentLang === 'bn' ? stat.subBn : stat.subEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Drivers / Values */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading-bn mb-3">
              {currentLang === 'bn' ? 'আমাদের মূল চালিকাশক্তি' : 'Our Core Pillars'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-[#B2D959]/40 m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 shadow-md flex items-start space-x-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#B2D959]/25 text-[#064E3B] flex items-center justify-center shrink-0 shadow-xs">
                  {idx === 0 && <ShieldCheck className="w-7 h-7" />}
                  {idx === 1 && <Zap className="w-7 h-7" />}
                  {idx === 2 && <Users className="w-7 h-7" />}
                  {idx === 3 && <Trophy className="w-7 h-7" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-black text-[#0F172A] font-heading-bn">
                    {currentLang === 'bn' ? val.titleBn : val.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] font-bengali leading-relaxed">
                    {currentLang === 'bn' ? val.descBn : val.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner: বাংলাদেশের গেমারদের আস্থা */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 border border-[#B2D959]/30 m3-elevation-4 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#7EC151]/20 text-[#B2D959] px-3.5 py-1 rounded-full text-xs font-bold border border-[#7EC151]/30 font-bengali">
              <ShieldCheck className="w-4 h-4 text-[#7EC151]" />
              <span>{currentLang === 'bn' ? 'অফিসিয়াল eSports প্ল্যাটফর্ম' : 'Official eSports Platform'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-heading-bn">
              {currentLang === 'bn' ? 'বাংলাদেশের গেমারদের আস্থা' : 'Trusted by Bangladeshi Gamers'}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-bengali leading-relaxed">
              {currentLang === 'bn'
                ? 'Fast Gaming BD শুধুমাত্র একটি অ্যাপ নয়, এটি বাংলাদেশের eSports কমিউনিটির জন্য একটি নির্ভরযোগ্য পরিবার ও আস্থার প্রতীক।'
                : 'Fast Gaming BD is not just an app—it is a dependable family and platform for competitive eSports players.'}
            </p>
          </div>

          <button
            id="about-download-cta-btn"
            onClick={onOpenDownloadModal}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center space-x-3 bg-[#7EC151] hover:bg-[#72b047] text-white font-black text-base sm:text-lg px-8 py-4 rounded-full m3-elevation-2 hover:m3-elevation-3 transition-all cursor-pointer font-bengali shadow-lg active:scale-98"
          >
            <Download className="w-5 h-5" />
            <span>{currentLang === 'bn' ? 'অ্যাপ ডাউনলোড করুন (APK)' : 'Download App (APK)'}</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
};
