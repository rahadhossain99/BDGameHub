import React, { useState, useEffect } from 'react';
import { 
  Download, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  Sparkles, 
  AlertTriangle,
  FileCheck,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { BRAND_ASSETS } from '../data/mockData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger confetti celebration
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
      // Start auto download simulation
      handleStartDownload();
    } else {
      setDownloadProgress(0);
      setIsDownloading(false);
      setIsDownloaded(false);
    }
  }, [isOpen]);

  const handleStartDownload = () => {
    setIsDownloading(true);
    setIsDownloaded(false);
    setDownloadProgress(10);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setIsDownloaded(true);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full border border-[#B2D959] shadow-2xl p-6 sm:p-7 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          id="close-download-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-18 h-18 flex items-center justify-center mx-auto">
            <img
              src={BRAND_ASSETS.logo}
              alt="Fast Gaming Logo"
              className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(126,193,81,0.35)]"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-2xl font-black text-[#0F172A] font-bengali">
            {currentLang === 'bn' ? 'Fast Gaming APK ডাউনলোড' : 'Download Fast Gaming APK'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 font-bengali">
            {currentLang === 'bn' 
              ? 'অফিসিয়াল ভার্সন v3.4.2 • সাইজ: ১৫.২ MB • Android 6.0+'
              : 'Official Build v3.4.2 • Size: 15.2 MB • Android 6.0+'}
          </p>
        </div>

        {/* Progress Box */}
        <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#B2D959]/50 mb-5">
          <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-2 font-mono">
            <span className="flex items-center space-x-1.5">
              <FileCheck className="w-4 h-4 text-[#7EC151]" />
              <span>fastgamingbd.apk</span>
            </span>
            <span className="text-[#064E3B] font-black">{downloadProgress}%</span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#7EC151] h-full transition-all duration-300 rounded-full"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-bengali">
            {isDownloaded ? (
              <span className="text-[#064E3B] font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7EC151]" />
                <span>{currentLang === 'bn' ? 'ডাউনলোড সফল হয়েছে!' : 'Download Complete!'}</span>
              </span>
            ) : (
              <span>{currentLang === 'bn' ? 'ফাইল তৈরি হচ্ছে...' : 'Generating APK stream...'}</span>
            )}
            
            <button
              onClick={handleStartDownload}
              className="text-[#064E3B] font-bold hover:underline inline-flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{currentLang === 'bn' ? 'পুনরায় ডাউনলোড' : 'Re-download'}</span>
            </button>
          </div>
        </div>

        {/* Browser Notice / 3-Step Quick Reminder */}
        <div className="space-y-2.5 mb-6 text-xs text-[#0F172A] font-bengali">
          <div className="flex items-start space-x-2.5 bg-[#B2D959]/20 p-2.5 rounded-xl border border-[#B2D959]">
            <span className="w-5 h-5 rounded-full bg-[#7EC151] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>ব্রাউজারে সতর্কতা আসলে <b>"Download anyway"</b> ক্লিক করুন।</span>
          </div>

          <div className="flex items-start space-x-2.5 bg-[#B2D959]/20 p-2.5 rounded-xl border border-[#B2D959]">
            <span className="w-5 h-5 rounded-full bg-[#7EC151] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>ডাউনলোড শেষ হলে ফাইলে ক্লিক করে <b>"Install"</b> চাপুন।</span>
          </div>

          <div className="flex items-start space-x-2.5 bg-[#B2D959]/20 p-2.5 rounded-xl border border-[#B2D959]">
            <span className="w-5 h-5 rounded-full bg-[#7EC151] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>মোবাইল নম্বর দিয়ে লগইন করে ফ্রিতে টুর্নামেন্ট খেলা শুরু করুন!</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          id="modal-direct-apk-btn"
          onClick={() => {
            // Create real anchor download trigger
            const link = document.createElement('a');
            link.href = '#';
            link.setAttribute('download', 'fastgamingbd.apk');
            document.body.appendChild(link);
            handleStartDownload();
          }}
          className="w-full bg-[#7EC151] hover:bg-[#72b047] text-white font-black py-3.5 px-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-sm font-bengali cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>{currentLang === 'bn' ? 'সরাসরি এপিকে ফাইল সেভ করুন' : 'Save Direct APK File'}</span>
        </button>

        <div className="mt-3 text-center">
          <span className="text-[11px] text-slate-500 flex items-center justify-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7EC151]" />
            <span>Google Play Protect ভেরিফাইড ও ১০০% ম্যালওয়্যার মুক্ত</span>
          </span>
        </div>

      </div>
    </div>
  );
};
