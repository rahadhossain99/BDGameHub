import React, { useState, useEffect, useCallback } from 'react';
import { Language, PageView } from './types';
import { Header } from './components/Header';
import { LiveTicker } from './components/LiveTicker';
import { LivePlayersTicker } from './components/LivePlayersTicker';
import { HeroSection } from './components/HeroSection';
import { TutorialSection } from './components/TutorialSection';
import { HowToStartSection } from './components/HowToStartSection';
import { TournamentsSection } from './components/TournamentsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { DownloadGuideSection } from './components/DownloadGuideSection';
import { RulesSection } from './components/RulesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { VideoModal } from './components/VideoModal';
import { FloatingSupportWidget } from './components/FloatingSupportWidget';
import { MobileBottomNav } from './components/MobileBottomNav';

// Bidirectional hash mappings for dynamic URL routing
const PAGE_TO_HASH: Record<PageView, string> = {
  home: 'home',
  tutorials: 'video',
  tournaments: 'match',
  download: 'apk',
  rules: 'rules',
  about: 'about',
  contact: 'contact',
};

const HASH_TO_PAGE: Record<string, PageView> = {
  '': 'home',
  '#': 'home',
  '#/': 'home',
  '#home': 'home',
  '#video': 'tutorials',
  '#videos': 'tutorials',
  '#tutorials': 'tutorials',
  '#tutorial': 'tutorials',
  '#match': 'tournaments',
  '#matches': 'tournaments',
  '#tournaments': 'tournaments',
  '#tournament': 'tournaments',
  '#apk': 'download',
  '#download': 'download',
  '#app': 'download',
  '#rules': 'rules',
  '#rule': 'rules',
  '#about': 'about',
  '#about-us': 'about',
  '#contact': 'contact',
  '#contact-us': 'contact',
  '#support': 'contact',
};

const getPageFromHash = (): PageView => {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.toLowerCase().trim();
  return HASH_TO_PAGE[rawHash] || 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(getPageFromHash);
  const [currentLang, setCurrentLang] = useState<Language>('bn');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [activeVideoModalId, setActiveVideoModalId] = useState<string | null>(null);

  // Sync hash changes (direct URL visit, refresh, or browser back/forward buttons)
  useEffect(() => {
    const handleHashSync = () => {
      const targetPage = getPageFromHash();
      setCurrentPage(targetPage);
    };

    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);

    // Initial check
    handleHashSync();

    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  // Update hash when user interacts with navigation controls
  const handleNavigate = useCallback((page: PageView) => {
    const targetHash = `#${PAGE_TO_HASH[page] || page}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const handleOpenVideoModal = (videoId?: string) => {
    setActiveVideoModalId(videoId || 'how-to-play-full');
  };

  const handleCloseVideoModal = () => {
    setActiveVideoModalId(null);
  };

  return (
    <div className="min-h-screen bg-[#f7fbf7] text-[#181d1a] flex flex-col font-bengali selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentLang={currentLang}
        onToggleLang={() => setCurrentLang(prev => (prev === 'bn' ? 'en' : 'bn'))}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      {/* Real-time Live Ticker Alert Bar */}
      <LiveTicker
        currentLang={currentLang}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      {/* Main Content Areas */}
      <main className="flex-grow pb-16 lg:pb-0">
        {currentPage === 'home' && (
          <>
            {/* Hero Section with Trust Metrics & Orbiting Revolving Icons */}
            <HeroSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
              onOpenVideoModal={handleOpenVideoModal}
              onNavigate={handleNavigate}
            />

            {/* Live Active Players Counter & Marquee Live Winnings Ticker */}
            <LivePlayersTicker
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenDownloadModal={handleOpenDownloadModal}
            />

            {/* Dedicated YouTube Tutorial & Interactive Walkthrough Section */}
            <TutorialSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
            />

            {/* How to Get Started 4-Step Interactive Carousel with Left-to-Right Autoplay & Glowing Aura */}
            <HowToStartSection
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenDownloadModal={handleOpenDownloadModal}
            />

            {/* Popular Tournaments Cards (Free, BR, CS, 1v1) */}
            <TournamentsSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
            />

            {/* Platform Features, Instant ৳ Withdrawals & Security Benefits with Scroll Counter */}
            <FeaturesSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentPage === 'tutorials' && (
          <div className="py-6">
            <LivePlayersTicker
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenDownloadModal={handleOpenDownloadModal}
            />
            <TutorialSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
            />
            <HowToStartSection
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenDownloadModal={handleOpenDownloadModal}
            />
          </div>
        )}

        {currentPage === 'tournaments' && (
          <div className="py-6">
            <LivePlayersTicker
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenDownloadModal={handleOpenDownloadModal}
            />
            <TournamentsSection
              currentLang={currentLang}
              onOpenDownloadModal={handleOpenDownloadModal}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutSection
            currentLang={currentLang}
            onOpenDownloadModal={handleOpenDownloadModal}
          />
        )}

        {currentPage === 'download' && (
          <DownloadGuideSection
            currentLang={currentLang}
            onOpenDownloadModal={handleOpenDownloadModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'rules' && (
          <RulesSection
            currentLang={currentLang}
            onOpenDownloadModal={handleOpenDownloadModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactSection
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      {/* Floating 24/7 Support & Video Quick Launcher */}
      <FloatingSupportWidget
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenVideoModal={handleOpenVideoModal}
      />

      {/* APK Direct Download Modal with Confetti & Instructions */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={handleCloseDownloadModal}
        currentLang={currentLang}
      />

      {/* Fullscreen YouTube Video Player Modal */}
      <VideoModal
        videoId={activeVideoModalId || undefined}
        isOpen={!!activeVideoModalId}
        onClose={handleCloseVideoModal}
        currentLang={currentLang}
      />

      {/* Material 3 Ergonomic Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentLang={currentLang}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

    </div>
  );
}
