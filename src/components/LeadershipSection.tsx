import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Briefcase,
  Terminal,
  Smartphone,
  Globe2,
  Gamepad2,
  Bot,
  Crown,
  Palette,
  Server,
  Lock,
  Rocket,
  Zap,
  Activity,
  Radio,
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface LeadershipSectionProps {
  currentLang: Language;
}

interface SkillItem {
  title: string;
  titleBn: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ currentLang }) => {
  const leaders: Array<{
    role: string;
    roleBn: string;
    techTitle: string;
    techTitleBn: string;
    name: string;
    nameBn: string;
    email: string;
    avatar: string;
    bioBn: string;
    bioEn: string;
    skills: SkillItem[];
    platformIcon: React.ComponentType<{ className?: string }>;
    glowColor: string;
    topBarGradient: string;
    cardBorder: string;
    badgeStyle: string;
    tagBg1: string;
    tagBorder1: string;
    tagText1: string;
    quoteAccent: string;
    wingLeft: { titleBn: string; titleEn: string; icon: React.ComponentType<{ className?: string }> };
    wingRight: { titleBn: string; titleEn: string; icon: React.ComponentType<{ className?: string }> };
  }> = [
    {
      role: 'Founder & CEO',
      roleBn: 'ফাউন্ডার ও প্রধান নির্বাহী কর্মকর্তা (CEO)',
      techTitle: 'Lead Mobile App Developer & Room Architect',
      techTitleBn: 'লিড মোবাইল অ্যাপ ডেভেলপার ও রুম আর্কিটেক্ট',
      name: 'Jibon Hossain',
      nameBn: 'জীবন হোসেন',
      email: 'jibonhossen2026@gmail.com',
      avatar: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/13e9f6337f9a0e592e138bbc73186654484880ed/KnzPNU_a.jpg',
      bioBn: 'Fast Gaming BD-এর কৌশলগত প্রতিষ্ঠাতা ও মূল অ্যান্ড্রয়েড অ্যাপ আর্কিটেক্ট। টুর্নামেন্ট রুম অটোমেশন, অ্যান্টি-চিট সিকিউরিটি ও প্ল্যাটফর্ম ইনোভেশনের রূপকার।',
      bioEn: 'Founder and Lead Mobile App Developer of Fast Gaming BD. Architect of automated match rooms, anti-cheat security, and executive operations.',
      skills: [
        { title: 'Android App Dev', titleBn: 'অ্যান্ড্রয়েড অ্যাপ ইঞ্জিন', icon: Smartphone },
        { title: 'Room Automation APIs', titleBn: 'রুম অটোমেশন এপিআই', icon: Bot },
        { title: 'eSports Architecture', titleBn: 'ই-স্পোর্টস আর্কিটেকচার', icon: Gamepad2 },
        { title: 'Anti-Cheat Protection', titleBn: 'অ্যান্টি-চিট সিকিউরিটি', icon: ShieldCheck },
        { title: 'Realtime Sync Engine', titleBn: 'রিয়েলটাইম সিঙ্ক ইঞ্জিন', icon: Zap },
        { title: 'Strategic Leadership', titleBn: 'কৌশলগত নেতৃত্ব', icon: Crown }
      ],
      platformIcon: Smartphone,
      glowColor: 'rgba(254, 210, 79, 0.22)',
      topBarGradient: 'from-[#FED24F] via-[#FBBF24] to-[#F59E0B]',
      cardBorder: 'border-2 border-[#FED24F]/70 hover:border-[#FED24F]',
      badgeStyle: 'bg-[#FED24F]/25 text-[#78350F] border-[#FED24F]',
      tagBg1: 'bg-[#FED24F]/20',
      tagBorder1: 'border-[#FED24F]/60',
      tagText1: 'text-[#78350F]',
      quoteAccent: 'text-[#F59E0B]',
      wingLeft: { titleBn: 'অ্যান্ড্রয়েড কোর', titleEn: 'Android Core', icon: Smartphone },
      wingRight: { titleBn: 'রুম অটোমেশন', titleEn: 'Automation', icon: Bot }
    },
    {
      role: 'Co-Founder & COO',
      roleBn: 'সহ-প্রতিষ্ঠাতা ও প্রধান পরিচালনা কর্মকর্তা (COO)',
      techTitle: 'Lead Full-Stack Web Developer & UI Engineer',
      techTitleBn: 'লিড ফুল-স্ট্যাক ওয়েব ডেভেলপার ও ইউআই আর্কিটেক্ট',
      name: 'Rahad Hossain',
      nameBn: 'রাহাদ হোসেন',
      email: 'hossainrahad632@gmail.com',
      avatar: 'https://raw.githubusercontent.com/rahadhossain99/vector-transparent-img/4b02b5347051820728d1ce144a7c600ea262bd09/Adobe%20Express%20-%20file.png',
      bioBn: 'সম্পূর্ণ ওয়েবসাইট ও ওয়েব প্ল্যাটফর্মের প্রতিষ্ঠাতা ও ডেভেলপার। অত্যাধুনিক ফুল-স্ট্যাক ওয়েব আর্কিটেকচার, ইউজার ইন্টারফেস ও স্মুথ অপারেশন পরিচালনার দায়িত্বে নিয়োজিত।',
      bioEn: 'Creator & Lead Full-Stack Web Developer of the Fast Gaming web ecosystem. Overseeing operations, high-performance UI engineering, and web automation.',
      skills: [
        { title: 'Full-Stack Web Dev', titleBn: 'ফুল-স্ট্যাক ওয়েব সিস্টেম', icon: Globe2 },
        { title: 'Modern UI/UX Design', titleBn: 'মডার্ন ইউআই/ইউএক্স', icon: Palette },
        { title: 'Cloud Infrastructure', titleBn: 'ক্লাউড ইনফ্রাস্ট্রাকচার', icon: Server },
        { title: 'Web Security & SEO', titleBn: 'ওয়েব সিকিউরিটি ও এসইও', icon: Lock },
        { title: 'Operations & Scaling', titleBn: 'প্ল্যাটফর্ম স্কেলিং ও অপস', icon: Rocket },
        { title: 'High-Speed Engine', titleBn: 'হাই-স্পিড পারফরম্যান্স', icon: Activity }
      ],
      platformIcon: Globe2,
      glowColor: 'rgba(126, 193, 81, 0.22)',
      topBarGradient: 'from-[#7EC151] via-[#B2D959] to-[#10B981]',
      cardBorder: 'border-2 border-[#7EC151]/70 hover:border-[#7EC151]',
      badgeStyle: 'bg-[#7EC151]/25 text-[#064E3B] border-[#7EC151]',
      tagBg1: 'bg-[#7EC151]/20',
      tagBorder1: 'border-[#7EC151]/60',
      tagText1: 'text-[#064E3B]',
      quoteAccent: 'text-[#7EC151]',
      wingLeft: { titleBn: 'ওয়েব আর্কিটেক্ট', titleEn: 'Web Architect', icon: Globe2 },
      wingRight: { titleBn: 'ক্লাউড সিস্টেম', titleEn: 'Cloud Ops', icon: Zap }
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-slate-50/60" id="leadership-team">
      
      {/* Background Decorative Tech Dot Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white text-[#064E3B] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider font-bengali border-2 border-[#7EC151]/40 shadow-xs">
            <Briefcase className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'ফাউন্ডার ও লিডারশিপ টিম' : 'EXECUTIVE FOUNDERS & DEVELOPERS'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-heading-bn">
            {currentLang === 'bn' ? 'আমাদের কারিগর ও নির্বাহী পরিষদ' : 'Meet the Founders & Engineering Leads'}
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-bengali leading-relaxed">
            {currentLang === 'bn'
              ? 'Fast Gaming BD-এর পেছনের মূল আর্কিটেক্ট ও ডেভেলপারদের পরিচিতি—যাঁদের উদ্ভাবনে তৈরি হয়েছে দেশের শীর্ষ ফ্রি ফায়ার টুর্নামেন্ট প্ল্যাটফর্ম।'
              : 'The innovative minds powering Fast Gaming BD through mobile app development, full-stack web engineering, and seamless operations.'}
          </p>
        </div>

        {/* 2-Column Leadership Cards with Distinct Gold / Green Theme Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => {
            const PlatformIcon = leader.platformIcon;
            const WingLeftIcon = leader.wingLeft.icon;
            const WingRightIcon = leader.wingRight.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.45 }}
                className={`bg-white rounded-3xl p-6 sm:p-8 ${leader.cardBorder} shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
              >
                {/* Ambient Soft Glow in Top Right */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-85"
                  style={{ backgroundColor: leader.glowColor }}
                />

                {/* Top Accent Gradient Bar Matching Each Leader's Identity */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r ${leader.topBarGradient}`} 
                />

                <div className="relative z-10">
                  
                  {/* Photo Showcase & Decorative Side Wings */}
                  <div className="flex flex-col items-center text-center mb-5 pt-2">
                    
                    {/* Centered Avatar with Left and Right Floating Wings */}
                    <div className="relative flex items-center justify-center space-x-3 sm:space-x-4 mb-3">
                      
                      {/* Left Wing Badge */}
                      <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs font-bengali text-xs font-black text-[#0F172A] transform -translate-y-1 hover:scale-105 transition-all">
                        <div className="p-1 rounded-lg bg-white shadow-2xs">
                          <WingLeftIcon className="w-3.5 h-3.5 text-[#064E3B]" />
                        </div>
                        <span>{currentLang === 'bn' ? leader.wingLeft.titleBn : leader.wingLeft.titleEn}</span>
                      </div>

                      {/* Natural Crisp Photo Frame with Platform Badge */}
                      <div className="relative shrink-0">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                          <img 
                            src={leader.avatar} 
                            alt={leader.name} 
                            className="w-full h-full object-cover object-top filter contrast-[1.02]"
                            loading="eager"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        {/* Platform Icon Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-[#0F172A] text-white p-2 rounded-xl shadow-md border-2 border-white z-20">
                          <PlatformIcon className="w-4 h-4 text-[#FED24F]" />
                        </div>
                      </div>

                      {/* Right Wing Badge */}
                      <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs font-bengali text-xs font-black text-[#0F172A] transform -translate-y-1 hover:scale-105 transition-all">
                        <div className="p-1 rounded-lg bg-white shadow-2xs">
                          <WingRightIcon className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span>{currentLang === 'bn' ? leader.wingRight.titleBn : leader.wingRight.titleEn}</span>
                      </div>

                    </div>

                    {/* Mobile Floating Wing Badges */}
                    <div className="flex sm:hidden items-center justify-center gap-2 mb-3">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-black text-[#0F172A] font-bengali shadow-2xs">
                        <WingLeftIcon className="w-3.5 h-3.5 text-[#064E3B]" />
                        <span>{currentLang === 'bn' ? leader.wingLeft.titleBn : leader.wingLeft.titleEn}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-black text-[#0F172A] font-bengali shadow-2xs">
                        <WingRightIcon className="w-3.5 h-3.5 text-amber-600" />
                        <span>{currentLang === 'bn' ? leader.wingRight.titleBn : leader.wingRight.titleEn}</span>
                      </span>
                    </div>

                    {/* Non-repetitive, High-clarity Title Hierarchy */}
                    <div className="space-y-1.5 w-full flex flex-col items-center">
                      
                      {/* Executive Category Pill */}
                      <div className={`inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-black border font-bengali shadow-xs ${leader.badgeStyle}`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{currentLang === 'bn' ? leader.roleBn : leader.role}</span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading-bn tracking-tight pt-1">
                        {currentLang === 'bn' ? leader.nameBn : leader.name}
                      </h3>

                      {/* Clear Technical Role */}
                      <p className="text-xs sm:text-sm font-extrabold text-[#064E3B] font-bengali bg-slate-100 px-3.5 py-1 rounded-lg inline-block border border-slate-200 shadow-2xs">
                        {currentLang === 'bn' ? leader.techTitleBn : leader.techTitle}
                      </p>

                    </div>
                  </div>

                  {/* Bio / Responsibility Quote Statement Box with Stylish Micro-Texture & Decorative Quotes */}
                  <div className="mb-5 relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50/90 via-white to-slate-50/60 border border-slate-200/90 shadow-xs overflow-hidden group/box">
                    
                    {/* Micro Subtle Grid Texture */}
                    <div 
                      className="absolute inset-0 opacity-[0.035] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
                        backgroundSize: '12px 12px'
                      }}
                    />

                    {/* Left Accent Color Indicator Bar */}
                    <div 
                      className={`absolute top-3 bottom-3 left-0 w-1 rounded-r-full bg-gradient-to-b ${leader.topBarGradient}`}
                    />

                    {/* Top Right Decorative Quote Icon */}
                    <div className="absolute top-2.5 right-3 opacity-20 group-hover/box:opacity-40 transition-opacity">
                      <Quote className={`w-8 h-8 ${leader.quoteAccent}`} />
                    </div>

                    <div className="relative z-10 pl-2">
                      <p className="text-xs sm:text-sm text-[#334155] font-bengali leading-relaxed font-medium">
                        <span className={`text-base font-serif font-black ${leader.quoteAccent} mr-1`}>“</span>
                        {currentLang === 'bn' ? leader.bioBn : leader.bioEn}
                        <span className={`text-base font-serif font-black ${leader.quoteAccent} ml-1`}>”</span>
                      </p>
                    </div>
                  </div>

                  {/* Skills & Duties with Customized Icons & Smooth Dual Direction Auto-Scroll */}
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#0F172A] font-bengali uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-3.5 h-3.5 text-[#7EC151]" />
                        <span>{currentLang === 'bn' ? 'প্রধান প্রযুক্তি ও দক্ষতা:' : 'Key Tech & Specializations:'}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[10px] text-emerald-800 font-mono font-black bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                        <Radio className="w-2.5 h-2.5 animate-ping text-emerald-700" />
                        <span>Live Stream</span>
                      </div>
                    </div>
                    
                    {/* Smooth Auto-scrolling Ribbon Row 1 (Theme Accent Colored) */}
                    <div className="relative overflow-hidden py-1 select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                      <div className={`flex items-center space-x-2 ${idx % 2 === 0 ? 'animate-marquee-ltr' : 'animate-marquee-rtl'}`}>
                        {[...leader.skills, ...leader.skills, ...leader.skills].map((skill, sIdx) => {
                          const IconComponent = skill.icon;
                          return (
                            <div 
                              key={sIdx}
                              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black font-bengali whitespace-nowrap border shadow-2xs ${leader.tagBg1} ${leader.tagBorder1} ${leader.tagText1}`}
                            >
                              <IconComponent className="w-3.5 h-3.5 shrink-0 opacity-90" />
                              <span>{currentLang === 'bn' ? skill.titleBn : skill.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Smooth Auto-scrolling Ribbon Row 2 in Opposite Direction (Crisp Neutral Card) */}
                    <div className="relative overflow-hidden py-1 select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                      <div className={`flex items-center space-x-2 ${idx % 2 === 0 ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}`}>
                        {[...leader.skills.slice().reverse(), ...leader.skills.slice().reverse(), ...leader.skills.slice().reverse()].map((skill, sIdx) => {
                          const IconComponent = skill.icon;
                          return (
                            <div 
                              key={sIdx}
                              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black font-bengali whitespace-nowrap border border-slate-200 bg-white text-[#0F172A] shadow-2xs"
                            >
                              <IconComponent className="w-3.5 h-3.5 text-[#7EC151] shrink-0" />
                              <span>{currentLang === 'bn' ? skill.titleBn : skill.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Direct Verified Contact Pill & Trust Badge */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center space-x-2 text-xs font-black text-[#064E3B] bg-[#7EC151]/15 hover:bg-[#7EC151]/30 px-4 py-2.5 rounded-xl border border-[#7EC151]/40 transition-all font-mono active:scale-95 shadow-xs"
                    title="Direct Email Contact"
                  >
                    <Mail className="w-4 h-4 text-[#7EC151]" />
                    <span>{leader.email}</span>
                  </a>

                  <div className="inline-flex items-center space-x-1.5 text-emerald-800 text-xs font-black font-bengali bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-[#7EC151]" />
                    <span>{currentLang === 'bn' ? 'অফিসিয়াল প্রোফাইল' : 'Verified Profile'}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
