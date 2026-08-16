import React from 'react';
import { 
  Download, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Trophy, 
  PlayCircle,
  Briefcase,
  Smartphone,
  Globe2,
  Mail,
  CheckCircle2,
  Crown,
  Layers,
  ExternalLink
} from 'lucide-react';
import { Language, PageView } from '../types';
import { BRAND_ASSETS } from '../data/mockData';

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: PageView) => void;
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenDownloadModal,
}) => {
  return (
    <footer className="bg-[#0B1120] text-white pt-14 pb-24 lg:pb-12 border-t border-[#7EC151]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Navigation Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo - Seamless floating blend */}
          <div className="flex items-center space-x-3.5 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="absolute -inset-2 bg-[#7EC151]/20 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <img
                src={BRAND_ASSETS.logo}
                alt="Fast Gaming Logo"
                className="relative w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(126,193,81,0.35)]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#B2D959] transition-colors">
                  FAST GAMING BD
                </span>
                <span className="text-[10px] bg-[#7EC151]/20 text-[#B2D959] font-bold px-1.5 py-0.5 rounded border border-[#7EC151]/40">
                  OFFICIAL
                </span>
              </div>
              <p className="text-xs text-slate-300 font-bengali">
                {currentLang === 'bn' ? 'বাংলাদেশের #1 eSports ও গেমিং টুর্নামেন্ট প্ল্যাটফর্ম' : "Bangladesh's #1 eSports & Gaming Platform"}
              </p>
            </div>
          </div>

          {/* Quick Links Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 font-bengali">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B2D959] transition-colors cursor-pointer">
              {currentLang === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button onClick={() => onNavigate('tutorials')} className="hover:text-[#B2D959] transition-colors cursor-pointer flex items-center space-x-1">
              <span>{currentLang === 'bn' ? 'ভিডিও টিউটোরিয়াল' : 'Tutorials'}</span>
            </button>
            <button onClick={() => onNavigate('tournaments')} className="hover:text-[#B2D959] transition-colors cursor-pointer">
              {currentLang === 'bn' ? 'টুর্নামেন্ট' : 'Tournaments'}
            </button>
            <button onClick={() => onNavigate('rules')} className="hover:text-[#B2D959] transition-colors cursor-pointer">
              {currentLang === 'bn' ? 'নিয়মাবলী' : 'Rules of Play'}
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#B2D959] transition-colors cursor-pointer">
              {currentLang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B2D959] transition-colors cursor-pointer">
              {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
            </button>
            <button onClick={() => onNavigate('download')} className="hover:text-[#FED24F] transition-colors cursor-pointer text-[#B2D959] font-bold">
              {currentLang === 'bn' ? 'APK ডাউনলোড' : 'Download APK'}
            </button>
          </div>
        </div>

        {/* Payment Methods Supported Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 text-xs text-slate-300 font-bengali">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'স্বীকৃত ও নিরাপদ পেমেন্ট মেথডসমূহ:' : 'Supported Instant Payment Gateways:'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-bold">
            {/* bKash */}
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs flex items-center space-x-2 transition-colors">
              <img src={BRAND_ASSETS.payments.bkash} alt="bKash" className="h-5 w-auto object-contain bg-white rounded px-1 py-0.5" referrerPolicy="no-referrer" />
              <span className="text-pink-300 font-extrabold">bKash</span>
            </div>
            {/* Nagad */}
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs flex items-center space-x-2 transition-colors">
              <img src={BRAND_ASSETS.payments.nagad} alt="Nagad" className="h-5 w-auto object-contain bg-white rounded px-1 py-0.5" referrerPolicy="no-referrer" />
              <span className="text-orange-300 font-extrabold">Nagad</span>
            </div>
            {/* Rocket */}
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs flex items-center space-x-2 transition-colors">
              <img src={BRAND_ASSETS.payments.rocket} alt="Rocket" className="h-5 w-auto object-contain bg-white rounded px-1 py-0.5" referrerPolicy="no-referrer" />
              <span className="text-purple-300 font-extrabold">Rocket</span>
            </div>
            {/* Upay */}
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs flex items-center space-x-2 transition-colors">
              <img src={BRAND_ASSETS.payments.upay} alt="Upay" className="h-5 w-auto object-contain bg-white rounded px-1 py-0.5" referrerPolicy="no-referrer" />
              <span className="text-amber-300 font-extrabold">Upay</span>
            </div>
          </div>
        </div>

        {/* Executive Leadership & Engineering Team Showcase (Sleek, Professional & Organized) */}
        <div className="py-6 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Section Header with Professional Icon */}
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-[#FED24F]/15 border border-[#FED24F]/40 text-[#FED24F]">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200 font-bengali">
                  {currentLang === 'bn' ? 'নির্বাহী পরিষদ ও কারিগরি টিম' : 'Executive Leadership & Engineering'}
                </span>
                <p className="text-[11px] text-slate-400 font-bengali">
                  {currentLang === 'bn' ? 'প্ল্যাটফর্মের প্রতিষ্ঠাতা ও মূল ডেভেলপারগণ' : 'Founders & Core System Architects'}
                </p>
              </div>
            </div>

            {/* 2 Clean Structured Founder Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
              
              {/* Jibon Hossain Card */}
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 sm:px-4 sm:py-3 transition-all flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FED24F]/20 border border-[#FED24F]/50 flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4 text-[#FED24F]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-black text-white font-heading-bn">
                        {currentLang === 'bn' ? 'জীবন হোসেন' : 'Jibon Hossain'}
                      </span>
                      <span className="text-[10px] font-bold text-[#FED24F] bg-[#FED24F]/10 px-1.5 py-0.2 rounded border border-[#FED24F]/30">
                        CEO
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-bengali">
                      {currentLang === 'bn' ? 'লিড মোবাইল অ্যাপ ডেভেলপার' : 'Lead Mobile App Developer'}
                    </p>
                  </div>
                </div>
                
                <a 
                  href="mailto:jibonhossen2026@gmail.com" 
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#FED24F]/30 text-slate-300 hover:text-white transition-colors" 
                  title="jibonhossen2026@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Rahad Hossain Card */}
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 sm:px-4 sm:py-3 transition-all flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-[#7EC151]/20 border border-[#7EC151]/50 flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4 text-[#7EC151]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-black text-white font-heading-bn">
                        {currentLang === 'bn' ? 'রাহাদ হোসেন' : 'Rahad Hossain'}
                      </span>
                      <span className="text-[10px] font-bold text-[#7EC151] bg-[#7EC151]/10 px-1.5 py-0.2 rounded border border-[#7EC151]/30">
                        COO
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-bengali">
                      {currentLang === 'bn' ? 'লিড ওয়েব ডেভেলপার' : 'Lead Web Developer'}
                    </p>
                  </div>
                </div>

                <a 
                  href="mailto:hossainrahad632@gmail.com" 
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#7EC151]/30 text-slate-300 hover:text-white transition-colors" 
                  title="hossainrahad632@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-bengali">
          <p>
            © 2026 Fast Gaming BD. {currentLang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </p>

          <div className="flex items-center space-x-6 text-slate-300">
            <span className="hover:text-[#B2D959] cursor-pointer" onClick={() => onNavigate('rules')}>
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#B2D959] cursor-pointer" onClick={() => onNavigate('rules')}>
              Terms of Service
            </span>
            <span>•</span>
            <span className="hover:text-[#B2D959] cursor-pointer" onClick={() => onNavigate('rules')}>
              Fair Play Rules
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
