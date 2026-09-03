import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Swords, 
  Play, 
  Flame, 
  Coins, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  X, 
  Download,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Search,
  Calculator,
  Filter
} from 'lucide-react';
import { TOURNAMENTS, BRAND_ASSETS } from '../data/mockData';
import { Language, Tournament } from '../types';
import { PrizeCalculator } from './PrizeCalculator';

interface TournamentsSectionProps {
  currentLang: Language;
  onOpenDownloadModal: () => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = ({
  currentLang,
  onOpenDownloadModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'free' | 'br' | 'cs' | 'special'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeTournamentModal, setActiveTournamentModal] = useState<Tournament | null>(null);
  const [joinedSuccess, setJoinedSuccess] = useState(false);
  const [inGameName, setInGameName] = useState('');
  const [inGameUid, setInGameUid] = useState('');

  const filteredTournaments = TOURNAMENTS.filter((t) => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = 
      t.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.gameType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.mapEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulateJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inGameName.trim()) return;
    setJoinedSuccess(true);
  };

  const closeModal = () => {
    setActiveTournamentModal(null);
    setJoinedSuccess(false);
    setInGameName('');
    setInGameUid('');
  };

  return (
    <section id="tournaments-list-section" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#B2D959]/30 relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#B2D959]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#B2D959]/25 text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-bengali shadow-2xs border border-[#B2D959]">
            <Trophy className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? 'লাইভ গেমিং টুর্নামেন্ট ও শিডিউল' : 'Live Tournament Schedule'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading-bn tracking-tight mb-4">
            {currentLang === 'bn' ? 'জনপ্রিয় মোবাইল eSports টুর্নামেন্ট' : 'Popular eSports Mobile Tournaments'}
          </h2>

          <p className="text-[#334155] text-base sm:text-lg md:text-xl font-bengali leading-relaxed">
            {currentLang === 'bn'
              ? 'আপনার পছন্দের টুর্নামেন্ট বেছে নিন এবং অংশ নিয়ে বিকাশ/নগদে জিতে নিন আকর্ষণীয় সব নগদ অর্থ পুরস্কার।'
              : 'Pick your preferred custom tournament, jump onto the battlefield, and win real cash payouts directly to your wallet.'}
          </p>
        </div>

        {/* Search & Action Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={currentLang === 'bn' ? 'টুর্নামেন্ট বা ম্যাপ সার্চ করুন...' : 'Search match or map...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/90 backdrop-blur-md hover:bg-white border border-[#B2D959]/60 rounded-full text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#7EC151] focus:outline-none transition-all font-bengali shadow-xs text-[#0F172A]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Prize Calculator Toggle Button */}
          <button
            id="toggle-calculator-btn"
            onClick={() => setShowCalculator(!showCalculator)}
            className={`inline-flex items-center space-x-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer shadow-xs ${
              showCalculator
                ? 'bg-[#7EC151] text-white shadow-md'
                : 'bg-[#B2D959]/25 hover:bg-[#B2D959]/40 text-[#0F172A] border border-[#B2D959]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{showCalculator ? (currentLang === 'bn' ? 'ক্যালকুলেটর লুকান' : 'Hide Calculator') : (currentLang === 'bn' ? 'প্রাইজ ক্যালকুলেটর ওপেন করুন' : 'Open Prize Calculator')}</span>
          </button>
        </div>

        {/* Dynamic Calculator if Toggled */}
        {showCalculator && (
          <div className="animate-in fade-in duration-300 mb-12">
            <PrizeCalculator currentLang={currentLang} onOpenDownloadModal={onOpenDownloadModal} />
          </div>
        )}

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: 'all', labelBn: 'সকল টুর্নামেন্ট', labelEn: 'All Matches' },
            { id: 'free', labelBn: '🎁 ১০০% ফ্রি ম্যাচ', labelEn: '🎁 100% Free Match' },
            { id: 'br', labelBn: '🔥 ব্যাটেল রয়্যাল (BR)', labelEn: '🔥 Battle Royale (BR)' },
            { id: 'cs', labelBn: '⚔️ ক্ল্যাশ স্কোয়াড (4v4)', labelEn: '⚔️ Clash Squad (4v4)' },
            { id: 'special', labelBn: '👑 ১v১ ও লুডু', labelEn: '👑 1v1 & Ludo' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`filter-tab-${tab.id}`}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer shadow-2xs ${
                selectedCategory === tab.id
                  ? 'bg-[#7EC151] text-white m3-elevation-1 ring-2 ring-[#7EC151]/30 font-black'
                  : 'bg-white/90 backdrop-blur-md hover:bg-white text-[#0F172A] border border-[#B2D959]/50'
              }`}
            >
              {currentLang === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Tournaments Cards Grid (Frosted Glass Elevated Cards) */}
        {filteredTournaments.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur-md rounded-3xl border border-dashed border-slate-300 max-w-md mx-auto">
            <Trophy className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-700 font-bengali">কোনো টুর্নামেন্ট পাওয়া যায়নি</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs sm:text-sm text-[#7EC151] font-bold hover:underline font-bengali cursor-pointer"
            >
              সকল টুর্নামেন্ট ফিল্টার রিসেট করুন
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredTournaments.map((tournament) => (
              <div
                key={tournament.id}
                id={`tournament-card-${tournament.id}`}
                className="bg-white/95 backdrop-blur-xl rounded-3xl border border-[#B2D959]/40 overflow-hidden m3-elevation-2 hover:m3-elevation-3 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Banner Thumbnail - 100% Clear and Crisp without dark haze */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={tournament.bannerUrl}
                      alt={tournament.titleEn}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top Live Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center space-x-1.5 bg-[#7EC151] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md font-bengali">
                      <span className="w-2 h-2 rounded-full bg-[#FFF449] animate-ping"></span>
                      <span>{currentLang === 'bn' ? 'লাইভ রেজিস্ট্রেশন' : 'Live Registration'}</span>
                    </div>

                    {/* Top Right Fee Tag */}
                    <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-[#FED24F] border border-[#FED24F]/60 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full font-mono shadow-md">
                      {currentLang === 'bn' ? tournament.entryFeeBn : tournament.entryFeeEn}
                    </div>
                  </div>

                  {/* Card Header & 3 Metrics Badge Row */}
                  <div className="p-5 sm:p-6 pb-3">
                    <div className="mb-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-wide font-heading-bn leading-tight">
                        {currentLang === 'bn' ? tournament.titleBn : tournament.titleEn}
                      </h3>
                      <p className="text-xs text-[#064E3B] font-mono mt-1 flex items-center space-x-2 font-bold">
                        <span>Map: {tournament.mapEn}</span>
                        <span>•</span>
                        <span>{tournament.matchTimeEn}</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs font-bold text-[#0F172A] bg-[#F8FAFC] p-3 rounded-2xl border border-[#B2D959]/50 mb-4 font-bengali">
                      <div className="flex items-center space-x-1.5 truncate">
                        <Users className="w-4 h-4 text-[#7EC151] shrink-0" />
                        <span className="truncate">{tournament.registeredCount}/{tournament.totalSlots} স্লট বুক</span>
                      </div>
                      <div className="flex items-center space-x-1.5 truncate">
                        <Trophy className="w-4 h-4 text-[#FED24F] shrink-0" />
                        <span className="truncate text-[#0F172A] font-bold font-mono">
                          {tournament.prizePoolBn}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5 truncate">
                        <Swords className="w-4 h-4 text-[#7EC151] shrink-0" />
                        <span className="truncate">{tournament.modeBn}</span>
                      </div>
                    </div>

                    {/* Match Description */}
                    <p className="text-[#334155] text-xs sm:text-sm font-bengali leading-relaxed line-clamp-2">
                      {currentLang === 'bn'
                        ? tournament.category === 'free'
                          ? 'দৈনিক ফ্রি টুর্নামেন্ট! সম্পূর্ণ ফ্রিতে জয়েন করুন এবং কোন ফি ছাড়াই প্রাইজ মানি জিতে নিন।'
                          : tournament.category === 'br'
                          ? 'সোলো, ডুও এবং স্কোয়াড ব্যাটেল রয়্যাল টুর্নামেন্ট। রুম কোড নিয়ে যোগ দিন এবং প্রাইজ মানি জিতুন।'
                          : tournament.rulesBn[0]
                        : tournament.rulesEn[0]}
                    </p>
                  </div>
                </div>

                {/* Join Button */}
                <div className="px-5 sm:px-6 pb-6">
                  <button
                    id={`join-tournament-btn-${tournament.id}`}
                    onClick={() => setActiveTournamentModal(tournament)}
                    className="w-full flex items-center justify-center space-x-2 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold text-sm sm:text-base py-4 px-4 rounded-2xl m3-elevation-2 hover:m3-elevation-3 transition-all transform hover:-translate-y-0.5 cursor-pointer font-bengali shadow-md"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{currentLang === 'bn' ? 'টুর্নামেন্টে যোগ দিন' : 'Join Tournament'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Live Tournament Details & Join Modal */}
      {activeTournamentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#B2D959] m3-elevation-4 p-6 sm:p-7 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              id="close-tournament-modal-btn"
              onClick={closeModal}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {!joinedSuccess ? (
              <div>
                <div className="flex items-center space-x-2 text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2 font-bengali">
                  <Trophy className="w-4 h-4 text-[#FED24F]" />
                  <span>{currentLang === 'bn' ? 'টুর্নামেন্ট ডিটেইলস ও জয়েনিং' : 'Tournament Details'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading-bn mb-1">
                  {currentLang === 'bn' ? activeTournamentModal.titleBn : activeTournamentModal.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 font-mono mb-5">
                  Mode: {activeTournamentModal.gameType} • Map: {activeTournamentModal.mapEn}
                </p>

                {/* Prize Breakdown Box */}
                <div className="bg-[#0F172A] text-white p-5 rounded-2xl mb-6 shadow-md border border-[#B2D959]/40">
                  <p className="text-xs text-[#B2D959] font-bold uppercase font-mono">{currentLang === 'bn' ? 'মোট পুরস্কার পুল' : 'Total Prize Pool'}</p>
                  <p className="text-3xl font-black text-[#FED24F] font-mono mt-0.5">
                    {currentLang === 'bn' ? activeTournamentModal.prizePoolBn : activeTournamentModal.prizePoolEn}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm font-bengali">
                    <div>
                      <span className="text-slate-300">১ম পুরষ্কার:</span>{' '}
                      <span className="font-bold font-mono text-[#FED24F]">
                        {currentLang === 'bn' ? activeTournamentModal.firstPrizeBn : activeTournamentModal.firstPrizeEn}
                      </span>
                    </div>
                    {activeTournamentModal.perKillBn && (
                      <div>
                        <span className="text-slate-300">প্রতি কিল:</span>{' '}
                        <span className="font-bold font-mono text-[#FED24F]">
                          {currentLang === 'bn' ? activeTournamentModal.perKillBn : activeTournamentModal.perKillEn}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSimulateJoin} className="space-y-4 font-bengali">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
                      {currentLang === 'bn' ? 'আপনার গেমের নাম (IGN):' : 'Your Free Fire In-Game Name:'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BD_SNIPER_99"
                      value={inGameName}
                      onChange={(e) => setInGameName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#B2D959]/60 rounded-xl text-sm focus:ring-2 focus:ring-[#7EC151] focus:outline-none text-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F172A] mb-1.5">
                      {currentLang === 'bn' ? 'আপনার গেম UID:' : 'Your Free Fire UID:'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 293847291"
                      value={inGameUid}
                      onChange={(e) => setInGameUid(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#B2D959]/60 rounded-xl text-sm focus:ring-2 focus:ring-[#7EC151] focus:outline-none text-[#0F172A]"
                    />
                  </div>

                  <div className="bg-[#FED24F]/20 border border-[#FED24F] rounded-xl p-3 text-xs text-[#0F172A]">
                    <p className="font-bold mb-0.5">⚠️ গুরুত্বপূর্ণ নিয়ম:</p>
                    <p>ম্যাচ শুরুর ৫ মিনিট আগে অ্যাপে রুম কোড দেওয়া হবে। সঠিক স্লটে বসবেন।</p>
                  </div>

                  {/* Accepted Payment Logos for Prize & Entry */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-bengali">
                    <span>ইনস্ট্যান্ট উইথড্রয়াল ও ফি:</span>
                    <div className="flex items-center space-x-1.5">
                      <div className="h-6 w-10 bg-white rounded border border-slate-200 p-0.5 flex items-center justify-center">
                        <img src={BRAND_ASSETS.payments.bkash} alt="bKash" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="h-6 w-10 bg-white rounded border border-slate-200 p-0.5 flex items-center justify-center">
                        <img src={BRAND_ASSETS.payments.nagad} alt="Nagad" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="h-6 w-10 bg-white rounded border border-slate-200 p-0.5 flex items-center justify-center">
                        <img src={BRAND_ASSETS.payments.rocket} alt="Rocket" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="h-6 w-10 bg-white rounded border border-slate-200 p-0.5 flex items-center justify-center">
                        <img src={BRAND_ASSETS.payments.upay} alt="Upay" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit-join-form-btn"
                    className="w-full bg-[#7EC151] hover:bg-[#72b047] text-white font-black py-4 px-4 rounded-xl text-base transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{currentLang === 'bn' ? 'নিবন্ধন নিশ্চিত করুন' : 'Confirm Registration'}</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 font-bengali">
                <div className="w-16 h-16 bg-[#B2D959]/30 text-[#7EC151] border border-[#B2D959] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="text-2xl font-black text-[#0F172A] font-heading-bn">
                  {currentLang === 'bn' ? 'রেজিস্ট্রেশন সফল হয়েছে!' : 'Registration Successful!'}
                </h3>

                <p className="text-sm text-[#334155] leading-relaxed max-w-sm mx-auto">
                  {currentLang === 'bn'
                    ? `অভিনন্দন ${inGameName}! আপনার টুর্নামেন্ট স্লট বুক হয়েছে। ম্যাচ শুরুর ৫ মিনিট আগে অ্যাপে স্বয়ংক্রিয়ভাবে রুম কোড দেখতে পাবেন।`
                    : `Congratulations ${inGameName}! Your slot is confirmed. Automated room codes will appear 5 mins prior to match time.`}
                </p>

                <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#B2D959]/50 text-left space-y-1 text-xs">
                  <p className="font-bold text-[#0F172A]">ম্যাচ আইডি: #{activeTournamentModal.id}</p>
                  <p className="text-[#334155]">আপনার প্লেয়ার নাম: <span className="font-mono font-bold text-[#0F172A]">{inGameName}</span></p>
                  <p className="text-[#334155]">UID: <span className="font-mono font-bold text-[#0F172A]">{inGameUid}</span></p>
                </div>

                <button
                  id="modal-download-app-btn"
                  onClick={() => {
                    closeModal();
                    onOpenDownloadModal();
                  }}
                  className="w-full bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentLang === 'bn' ? 'অফিসিয়াল অ্যাপ ডাউনলোড করুন' : 'Download Last Gaming App'}</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
