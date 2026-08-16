import React from 'react';
import { X, Youtube, Sparkles, Clock, Eye } from 'lucide-react';
import { TUTORIAL_VIDEOS } from '../data/mockData';
import { Language } from '../types';

interface VideoModalProps {
  videoId?: string;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const video = TUTORIAL_VIDEOS.find((v) => v.id === videoId) || TUTORIAL_VIDEOS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
      <div className="bg-[#0F172A] text-white rounded-3xl max-w-3xl w-full border border-[#B2D959]/50 shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button
          id="close-video-modal-btn"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.titleEn}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Info Bottom */}
        <div className="p-5 sm:p-6 bg-[#0F172A] border-t border-slate-800">
          <div className="flex items-center space-x-2 text-[#FED24F] text-xs font-bold mb-2">
            <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="font-bengali">{currentLang === 'bn' ? video.categoryBn : video.categoryEn}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-bengali text-white mb-2">
            {currentLang === 'bn' ? video.titleBn : video.titleEn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-bengali leading-relaxed">
            {currentLang === 'bn' ? video.descriptionBn : video.descriptionEn}
          </p>
        </div>

      </div>
    </div>
  );
};
