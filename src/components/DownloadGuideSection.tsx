import React, { useState } from 'react';
import { 
  Download, 
  ShieldCheck, 
  Settings, 
  UserCheck, 
  Check, 
  Lightbulb, 
  ChevronDown, 
  AlertTriangle,
  ArrowLeft,
  Smartphone,
  ExternalLink,
  Sparkles,
  Lock,
  Copy
} from 'lucide-react';
import { STEP_GUIDES, FAQS, BRAND_ASSETS } from '../data/mockData';
import { Language, PageView } from '../types';

interface DownloadGuideSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
  onNavigate: (page: PageView) => void;
}

export const DownloadGuideSection: React.FC<DownloadGuideSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
  onNavigate,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [copiedHash, setCopiedHash] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const handleCopySha = () => {
    navigator.clipboard.writeText('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-[#B2D959]/25 text-[#0F172A] border border-[#B2D959] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-bengali">
            <Download className="w-3.5 h-3.5 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'অফিসিয়াল APK গাইড' : 'Official APK Guide'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-heading-bn tracking-tight">
            {currentLang === 'bn' 
              ? 'Last Gaming অ্যাপ ডাউনলোড ও ইনস্টলেশন গাইড'
              : 'Last Gaming App Download & Installation Guide'}
          </h1>

          <p className="text-[#334155] text-sm sm:text-base font-bengali">
            {currentLang === 'bn'
              ? 'আপনার অ্যান্ড্রয়েড ডিভাইসে Last Gaming অ্যাপ ডাউনলোড, ইনস্টল ও সেটআপ করার বিস্তারিত নির্দেশিকা।'
              : 'Detailed step-by-step instructions to download, install and configure Last Gaming APK on your Android device.'}
          </p>

          <div className="pt-2">
            <button
              id="download-guide-top-cta-btn"
              onClick={onOpenDownloadModal}
              className="inline-flex items-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full m3-elevation-2 hover:m3-elevation-3 transition-all cursor-pointer font-bengali shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{currentLang === 'bn' ? 'অফিসিয়াল APK ডাউনলোড করুন (v2.4.0)' : 'Download App APK (v2.4.0)'}</span>
            </button>
          </div>

          <p className="text-xs text-[#64748B] font-bengali">
            {currentLang === 'bn'
              ? 'Android 6.0+ সমর্থিত • ১৫.৪ MB • গুগল প্লে প্রটেক্ট ভেরিফাইড'
              : 'Android 6.0+ Supported • 15.4 MB • Google Play Protect Verified'}
          </p>
        </div>

        {/* Official App Showcase Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#B2D959] bg-white">
          <img
            src={BRAND_ASSETS.banner}
            alt="Last Gaming App"
            className="w-full h-48 sm:h-64 object-cover object-center"
            referrerPolicy="no-referrer"
          />

          <div className="p-4 sm:p-5 bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#B2D959]/40">
            <div className="flex items-center space-x-3.5 text-left">
              {/* Seamless Logo */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src={BRAND_ASSETS.logo} alt="Last Gaming" className="w-full h-full object-contain drop-shadow-sm" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0F172A] font-heading-bn">
                  {currentLang === 'bn' ? 'লাস্ট গেমিং অফিসিয়াল অ্যান্ড্রয়েড অ্যাপ' : 'Last Gaming Official Android App'}
                </h4>
                <p className="text-xs text-[#334155] font-bengali">
                  {currentLang === 'bn' ? 'বিকাশ, নগদ, রকেট ও উপায় ইনস্ট্যান্ট ক্যাশআউট সমর্থিত' : 'Supports Instant bKash, Nagad, Rocket & Upay'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-2xl border border-[#B2D959]/50 shadow-xs">
              <img src={BRAND_ASSETS.payments.bkash} alt="bKash" className="h-4.5 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src={BRAND_ASSETS.payments.nagad} alt="Nagad" className="h-4.5 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src={BRAND_ASSETS.payments.rocket} alt="Rocket" className="h-4.5 w-auto object-contain" referrerPolicy="no-referrer" />
              <img src={BRAND_ASSETS.payments.upay} alt="Upay" className="h-4.5 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* SHA-256 APK Integrity Card */}
        <div className="bg-white rounded-3xl p-5 border border-[#B2D959]/50 m3-elevation-1 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#B2D959]/25 text-[#064E3B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#0F172A] font-bengali">
                {currentLang === 'bn' ? 'SHA-256 এপিকে সিকিউরিটি হ্যাশ ভেরিফিকেশন' : 'SHA-256 APK Integrity Hash'}
              </p>
              <p className="font-mono text-[#64748B] text-[11px] truncate max-w-xs sm:max-w-md">
                e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
              </p>
            </div>
          </div>

          <button
            onClick={handleCopySha}
            className="shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-xl transition-colors flex items-center space-x-1 cursor-pointer"
          >
            {copiedHash ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#7EC151]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Hash</span>
              </>
            )}
          </button>
        </div>

        {/* Requirements Box */}
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] font-heading-bn mb-3">
            {currentLang === 'bn' ? 'প্রয়োজনীয় শর্তসমূহ (Prerequisites)' : 'Prerequisites'}
          </h2>

          <div className="bg-[#B2D959]/15 rounded-3xl p-6 sm:p-7 border border-[#B2D959]/40 m3-elevation-1 space-y-3 font-bengali">
            {[
              { textBn: 'Android 6.0 (Marshmallow) বা তার উপরে চালিত স্মার্টফোন ডিভাইস', textEn: 'Device running Android 6.0 (Marshmallow) or higher' },
              { textBn: 'অন্তত 50MB ফ্রি ইন্টারনাল স্টোরেজ স্পেস', textEn: 'At least 50MB free internal storage' },
              { textBn: 'স্থিতিশীল ইন্টারনেট সংযোগ (4G / 5G / WiFi)', textEn: 'Stable 4G / 5G / WiFi internet connection' },
              { textBn: 'ডিভাইস সেটিংসে "Install Unknown Apps" অন করার অনুমতি', textEn: 'Permission to install apps from third-party sources' },
            ].map((req, i) => (
              <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-[#0F172A]">
                <span className="w-5 h-5 rounded-full bg-[#7EC151] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>{currentLang === 'bn' ? req.textBn : req.textEn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Step Cards (Compact & Elegant Layout) */}
        <div className="space-y-4">
          {STEP_GUIDES.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-[#B2D959]/50 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              {/* Step Header */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#7EC151]/15 text-[#064E3B] flex items-center justify-center shrink-0 font-black border border-[#7EC151]/30">
                  {step.iconType === 'download' && <Download className="w-5 h-5" />}
                  {step.iconType === 'shield' && <ShieldCheck className="w-5 h-5" />}
                  {step.iconType === 'settings' && <Settings className="w-5 h-5" />}
                  {step.iconType === 'user' && <UserCheck className="w-5 h-5" />}
                </div>

                <div>
                  <p className="text-[11px] font-black text-[#7EC151] uppercase tracking-wider font-mono">
                    {currentLang === 'bn' ? `ধাপ 0${step.stepNumber}` : `STEP 0${step.stepNumber}`}
                  </p>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] font-heading-bn">
                    {currentLang === 'bn' ? step.titleBn.split(':')[1]?.trim() || step.titleBn : step.titleEn}
                  </h3>
                  <p className="text-xs text-[#475569] font-bengali mt-0.5">
                    {currentLang === 'bn' ? step.subtitleBn : step.subtitleEn}
                  </p>
                </div>
              </div>

              {/* Numbered Bullets (Tighter padding) */}
              <div className="space-y-1.5 pl-1 sm:pl-14">
                {(currentLang === 'bn' ? step.bulletsBn : step.bulletsEn).map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#0F172A] font-bengali">
                    <span className="w-4.5 h-4.5 rounded-full bg-[#7EC151]/20 text-[#064E3B] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 border border-[#7EC151]/40 font-mono">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Step Warning/Note if any */}
              {step.noteBn && (
                <div className="sm:ml-14 bg-[#FED24F]/20 border border-[#FED24F] rounded-xl p-2.5 flex items-start space-x-2 text-xs text-[#0F172A] font-bengali">
                  <AlertTriangle className="w-4 h-4 text-[#0F172A] shrink-0 mt-0.5" />
                  <span>{currentLang === 'bn' ? step.noteBn : step.noteEn}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Tips Card */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 m3-elevation-3 space-y-4 border border-[#B2D959]/30">
          <div className="flex items-center space-x-2.5 text-[#FED24F]">
            <Lightbulb className="w-6 h-6" />
            <h3 className="text-xl font-bold font-heading-bn">
              {currentLang === 'bn' ? 'সিকিউরিটি ও ইনস্টলেশন টিপস' : 'Security & Installation Tips'}
            </h3>
          </div>

          <div className="space-y-3 font-bengali">
            {[
              { textBn: 'নিরাপত্তার জন্য শুধুমাত্র আমাদের অফিসিয়াল ওয়েবসাইট থেকে অ্যাপ ডাউনলোড করুন', textEn: 'Download exclusively from our official website for guaranteed security' },
              { textBn: 'ইনস্টলেশনের সময় যেকোনো সমস্যায় আমাদের 24/7 সাপোর্ট টিমের সাথে যোগাযোগ করুন', textEn: 'Contact our 24/7 support agents for any download or setup assistance' },
              { textBn: 'আপনার অ্যাকাউন্ট নিরাপদ রাখতে শক্তিশালী পাসওয়ার্ড ও ওটিপি গোপন রাখুন', textEn: 'Keep your account secure with a strong password and OTP privacy' },
              { textBn: 'প্রথমবার টুর্নামেন্টে অংশ নেওয়ার আগে নিয়ম-কানুন ভালোভাবে পড়ুন', textEn: 'Review official tournament and fair-play rules before joining matches' },
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#7EC151] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{currentLang === 'bn' ? tip.textBn : tip.textEn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading-bn">
              {currentLang === 'bn' ? 'সাধারণ জিজ্ঞাসা (FAQ)' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#B2D959]/40 overflow-hidden m3-elevation-1"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-[#F8FAFC]"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0F172A] font-bengali">
                      {currentLang === 'bn' ? faq.questionBn : faq.questionEn}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#7EC151]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] font-bengali leading-relaxed border-t border-slate-100">
                      {currentLang === 'bn' ? faq.answerBn : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Download CTA Card */}
        <div className="text-center space-y-5 pt-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading-bn">
            {currentLang === 'bn' ? 'খেলা শুরু করতে এখনই ডাউনলোড করুন' : 'Download Now to Start Playing'}
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <button
              id="guide-bottom-download-btn"
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full m3-elevation-2 hover:m3-elevation-3 transition-all cursor-pointer font-bengali shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{currentLang === 'bn' ? 'অ্যাপ ডাউনলোড (APK)' : 'Download App (APK)'}</span>
            </button>

            <button
              id="guide-bottom-back-home-btn"
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-[#0F172A] border border-[#B2D959]/50 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full m3-elevation-1 transition-all cursor-pointer font-bengali"
            >
              <ArrowLeft className="w-4 h-4 text-[#0F172A]" />
              <span>{currentLang === 'bn' ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
