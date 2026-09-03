import React, { useState } from 'react';
import { Download, Menu, X, Globe, PlayCircle, Trophy, HelpCircle, ShieldCheck, PhoneCall, Info, Sparkles } from 'lucide-react';
import { Language, PageView } from '../types';
import { BRAND_ASSETS } from '../data/mockData';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenDownloadModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  currentPage,
  onNavigate,
  onOpenDownloadModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; labelBn: string; labelEn: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home', icon: <Globe className="w-4 h-4" /> },
    { id: 'tutorials', labelBn: 'ভিডিও টিউটোরিয়াল', labelEn: 'Video Tutorials', icon: <PlayCircle className="w-4 h-4 text-[#7EC151]" />, badge: 'NEW' },
    { id: 'tournaments', labelBn: 'টুর্নামেন্ট', labelEn: 'Tournaments', icon: <Trophy className="w-4 h-4 text-[#FED24F]" /> },
    { id: 'download', labelBn: 'ডাউনলোড গাইড', labelEn: 'Download Guide', icon: <Download className="w-4 h-4 text-[#7EC151]" /> },
    { id: 'rules', labelBn: 'নিয়মাবলী', labelEn: 'Rules of Play', icon: <ShieldCheck className="w-4 h-4 text-[#7EC151]" /> },
    { id: 'about', labelBn: 'আমাদের সম্পর্কে', labelEn: 'About Us', icon: <Info className="w-4 h-4 text-slate-600" /> },
    { id: 'contact', labelBn: 'যোগাযোগ', labelEn: 'Contact Us', icon: <PhoneCall className="w-4 h-4 text-[#7EC151]" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#B2D959]/30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand (Google Material 3 Top App Bar Brand) */}
          <div 
            id="brand-logo-btn"
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            {/* Logo Image - Transparent RemoveBG Vector */}
            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                src={BRAND_ASSETS.logo}
                alt="Last Gaming Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_2px_8px_rgba(126,193,81,0.3)] select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-[#0F172A] group-hover:text-[#7EC151] transition-colors">
                  LAST GAMING
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#B2D959]/30 text-[#0F172A] border border-[#B2D959]/60 tracking-wider">
                  BD
                </span>
              </div>
              <p className="text-xs text-[#475569] font-bengali tracking-tight">
                {currentLang === 'bn' ? 'বাংলাদেশের #1 eSports ও গেমিং প্ল্যাটফর্ম' : "Bangladesh's #1 eSports & Gaming Platform"}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links (Google Material 3 Navigation items) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold font-bengali transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#B2D959]/25 text-[#0F172A] m3-elevation-1 border border-[#B2D959]'
                      : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#B2D959]/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{currentLang === 'bn' ? item.labelBn : item.labelEn}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-[#FFF449] text-[#0F172A] font-extrabold border border-[#FED24F] font-mono px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Language Switcher Pill */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center bg-[#F8FAFC] hover:bg-[#B2D959]/15 border border-[#B2D959]/40 rounded-full p-1 text-xs font-bold text-[#0F172A] transition-colors m3-elevation-1 cursor-pointer"
              title={currentLang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <span className={`px-2.5 py-0.5 rounded-full transition-all ${currentLang === 'bn' ? 'bg-[#7EC151] text-white shadow-xs' : 'text-[#475569]'}`}>
                বাং
              </span>
              <span className={`px-2.5 py-0.5 rounded-full transition-all ${currentLang === 'en' ? 'bg-[#7EC151] text-white shadow-xs' : 'text-[#475569]'}`}>
                EN
              </span>
            </button>

            {/* Direct APK Download Button (Material 3 High-Emphasis Filled Button) */}
            <button
              id="header-download-btn"
              onClick={onOpenDownloadModal}
              className="hidden sm:inline-flex items-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold m3-elevation-2 hover:m3-elevation-3 transition-all transform hover:-translate-y-0.5 cursor-pointer font-bengali"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>{currentLang === 'bn' ? 'অ্যাপ ডাউনলোড' : 'Download APK'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-[#0F172A] hover:bg-[#B2D959]/15 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#B2D959]/30 px-4 pt-3 pb-5 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-bold font-bengali transition-colors text-left ${
                currentPage === item.id
                  ? 'bg-[#B2D959]/25 text-[#0F172A] border border-[#B2D959]'
                  : 'text-[#334155] hover:bg-[#F8FAFC]'
              }`}
            >
              <span className="p-1.5 rounded-xl bg-[#B2D959]/15">{item.icon}</span>
              <span>{currentLang === 'bn' ? item.labelBn : item.labelEn}</span>
              {item.badge && (
                <span className="ml-auto text-[10px] bg-[#FFF449] text-[#0F172A] border border-[#FED24F] font-bold px-2 py-0.5 rounded-full font-mono">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100">
            <button
              id="mobile-download-apk-btn"
              onClick={() => {
                onOpenDownloadModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-md font-bengali"
            >
              <Download className="w-5 h-5" />
              <span>{currentLang === 'bn' ? 'অফিসিয়াল APK ডাউনলোড করুন' : 'Download Official APK'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
