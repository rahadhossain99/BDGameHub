import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  ExternalLink,
  HelpCircle,
  Headphones,
  Users,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/mockData';
import { Language, PageView } from '../types';
import { LeadershipSection } from './LeadershipSection';

interface ContactSectionProps {
  currentLang: Language;
  onNavigate?: (page: PageView) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'deposit_issue',
    message: '',
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const supportChannels = [
    {
      id: 'telegram',
      titleBn: 'অফিসিয়াল টেলিগ্রাম চ্যানেল ও সাপোর্ট',
      titleEn: 'Official Telegram Channel & Support',
      descBn: 'সর্বশেষ টুর্নামেন্ট আপডেট, লাইভ রুম কোড ও জরুরি সাপোর্ট পেতে যুক্ত হোন।',
      descEn: 'Get instant room codes, tournament alerts, and direct admin assistance.',
      handle: '@fastgamingbd_official',
      url: 'https://t.me/fastgamingbd',
      icon: BRAND_ASSETS.support.telegram,
      isImage: true,
      color: 'border-[#B2D959]/60 text-[#0F172A]',
      badgeBn: '⚡ সবচেয়ে দ্রুত রেসপন্স (১ মিনিট)',
      badgeEn: '⚡ Fastest Response (1 min)',
      badgeColor: 'bg-[#FED24F]/20 text-[#0F172A] border-[#FED24F]',
    },
    {
      id: 'whatsapp',
      titleBn: 'হোয়াটসঅ্যাপ হেল্পলাইন (WhatsApp)',
      titleEn: 'WhatsApp Live Helpline',
      descBn: 'ডিপোজিট, উইথড্রয়াল বা আইডি সংক্রান্ত যেকোনো সমস্যায় চ্যাট করুন।',
      descEn: 'Direct live chat assistance for deposit, withdrawal, or account queries.',
      handle: '+880 1400-389396',
      url: 'https://wa.me/8801400389396',
      icon: BRAND_ASSETS.support.whatsapp,
      isImage: true,
      color: 'border-[#B2D959]/60 text-[#0F172A]',
      badgeBn: '🟢 ২৪/৭ সক্রিয় কাস্টমার কেয়ার',
      badgeEn: '🟢 24/7 Active Support',
      badgeColor: 'bg-[#B2D959]/25 text-[#064E3B] border-[#B2D959]',
    },
    {
      id: 'email',
      titleBn: 'অফিসিয়াল ইমেইল সাপোর্ট',
      titleEn: 'Official Email Support',
      descBn: 'ব্যবসায়িক পার্টনারশিপ ও যেকোনো আনুষ্ঠানিক অভিযোগ বা পরামর্শের জন্য।',
      descEn: 'For partnership proposals, official sponsorship, or business inquiries.',
      handle: 'support@fastgamingbd.com',
      url: 'mailto:support@fastgamingbd.com',
      icon: Mail,
      isImage: false,
      color: 'border-[#B2D959]/60 text-[#0F172A]',
      badgeBn: '📧 প্রাতিষ্ঠানিক সাপোর্ট',
      badgeEn: '📧 Official Inquiries',
      badgeColor: 'bg-[#B2D959]/20 text-[#0F172A] border-[#B2D959]',
    },
    {
      id: 'facebook',
      titleBn: 'ফেসবুক পেজ ও কমিউনিটি গ্রুপ',
      titleEn: 'Facebook Page & Community',
      descBn: 'হাজারো গেমারের সাথে মতামত শেয়ার করুন ও লাইভ টুর্নামেন্ট হাইলাইটস দেখুন।',
      descEn: 'Join thousands of competitive gamers in Bangladesh and share tips.',
      handle: 'Fast Gaming BD Official',
      url: 'https://facebook.com',
      icon: BRAND_ASSETS.support.facebook,
      isImage: true,
      color: 'border-[#B2D959]/60 text-[#0F172A]',
      badgeBn: '👥 ৫০,০০০+ গেমার পরিবার',
      badgeEn: '👥 50,000+ Community',
      badgeColor: 'bg-[#FED24F]/20 text-[#0F172A] border-[#FED24F]',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#7EC151]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FED24F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#B2D959]/25 text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-bengali border border-[#B2D959] shadow-2xs"
          >
            <Headphones className="w-4 h-4 text-[#7EC151]" />
            <span>{currentLang === 'bn' ? '২৪/৭ ডেডিকেটেড হেল্পডেস্ক' : '24/7 DEDICATED HELPDESK'}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading-bn tracking-tight leading-tight"
          >
            {currentLang === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact & Support Center'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#334155] text-base sm:text-lg md:text-xl font-bengali leading-relaxed"
          >
            {currentLang === 'bn'
              ? 'অ্যাপ সংক্রান্ত যেকোনো প্রশ্ন, অভিযোগ বা তাৎক্ষণিক ডিপোজিট/উইথড্র সহায়তায় আমাদের কাস্টমার সাপোর্ট টিম সর্বদা প্রস্তুত।'
              : 'Our dedicated support admins are online 24/7 via WhatsApp and Telegram to ensure smooth gaming for you.'}
          </motion.p>

          {/* Active Live Status Pill */}
          <div className="inline-flex items-center space-x-2 bg-white text-[#064E3B] px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-[#B2D959] shadow-xs font-bengali">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7EC151] animate-ping"></span>
            <span>{currentLang === 'bn' ? '🟢 সাপোর্ট টিম এখন লাইভ ও সক্রিয় • গড় রেসপন্স টাইম: ২ মিনিট' : '🟢 Support Team Online • Avg Response: 2 mins'}</span>
          </div>
        </div>

        {/* 4 PROFESSIONAL ESPORTS SUPPORT CHANNEL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {supportChannels.map((ch, idx) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-7 sm:p-8 border ${ch.color} m3-elevation-2 hover:m3-elevation-4 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1`}
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2.5 border border-[#B2D959]/50 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {ch.isImage ? (
                        <img 
                          src={ch.icon as string} 
                          alt={ch.titleEn} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Mail className="w-7 h-7 text-[#7EC151]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading-bn">
                        {currentLang === 'bn' ? ch.titleBn : ch.titleEn}
                      </h3>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border font-bengali ${ch.badgeColor}`}>
                        {currentLang === 'bn' ? ch.badgeBn : ch.badgeEn}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[#334155] text-sm sm:text-base font-bengali leading-relaxed">
                  {currentLang === 'bn' ? ch.descBn : ch.descEn}
                </p>

                {/* Copyable Handle Box */}
                <div className="flex items-center justify-between bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#B2D959]/50 text-xs sm:text-sm font-mono text-[#0F172A] shadow-inner">
                  <span className="truncate font-bold">{ch.handle}</span>
                  <button
                    onClick={() => handleCopy(ch.handle, ch.id)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#064E3B] bg-white px-3 py-1.5 rounded-xl border border-[#B2D959] hover:bg-[#B2D959]/20 transition-colors shadow-2xs cursor-pointer shrink-0 font-bengali"
                  >
                    {copiedKey === ch.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#7EC151]" />
                        <span className="text-[#064E3B]">কপি হয়েছে!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>কপি করুন</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Open Link Button */}
              <div className="pt-6">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2.5 bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md transition-all font-bengali group-hover:shadow-lg"
                >
                  <span>{currentLang === 'bn' ? 'সরাসরি ওপেন করুন' : 'Open Channel'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DIRECT SUPPORT INQUIRY FORM & LIVE FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Support Ticket Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#B2D959]/50 m3-elevation-2 shadow-xl">
            <div className="flex items-center space-x-2 text-[#7EC151] text-xs font-bold uppercase tracking-wider mb-2 font-bengali">
              <MessageSquare className="w-4 h-4" />
              <span>{currentLang === 'bn' ? 'তাৎক্ষণিক সাপোর্ট টিকেট' : 'Instant Ticket'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading-bn mb-3">
              {currentLang === 'bn' ? 'বার্তা পাঠান বা সমস্যা জানান' : 'Send a Message or Report Issue'}
            </h3>

            <p className="text-xs sm:text-sm text-[#334155] font-bengali mb-6 leading-relaxed">
              {currentLang === 'bn'
                ? 'আপনার তথ্য লিখে সাবমিট করুন। আমাদের প্রতিনিধি আপনার সাথে টেলিগ্রাম বা হোয়াটসঅ্যাপে দ্রুত যোগাযোগ করবে।'
                : 'Submit your inquiry. Our support team will reach out directly.'}
            </p>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-bengali">
                
                {/* Topic Selector Chips */}
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-2">
                    {currentLang === 'bn' ? 'সমস্যার ধরণ নির্বাচন করুন:' : 'Select Topic:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'deposit_issue', label: 'ডিপোজিট সমস্যা' },
                      { id: 'withdraw_issue', label: 'উইথড্র সংক্রান্ত' },
                      { id: 'room_issue', label: 'রুম কোড সমস্যা' },
                      { id: 'account_issue', label: 'আইডি/পাসওয়ার্ড' },
                      { id: 'report_player', label: 'হ্যাক রিপোর্ট' },
                      { id: 'other', label: 'অন্যান্য পরামর্শ' },
                    ].map((topic) => (
                      <button
                        type="button"
                        key={topic.id}
                        onClick={() => setFormData({ ...formData, topic: topic.id })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer truncate ${
                          formData.topic === topic.id
                            ? 'bg-[#7EC151] text-white border-[#7EC151] shadow-xs'
                            : 'bg-[#F8FAFC] text-[#0F172A] border-[#B2D959]/50 hover:border-[#B2D959]'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      {currentLang === 'bn' ? 'আপনার নাম:' : 'Your Name:'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. তানভীর আহমেদ"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#B2D959]/50 rounded-xl text-sm focus:ring-2 focus:ring-[#7EC151] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      {currentLang === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ নম্বর:' : 'WhatsApp / Mobile Number:'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#B2D959]/50 rounded-xl text-sm focus:ring-2 focus:ring-[#7EC151] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                    {currentLang === 'bn' ? 'আপনার মেসেজ বা বিস্তারিত বিবরণ:' : 'Your Message / Details:'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="আপনার সমস্যা সংক্ষেপে বর্ণনা করুন (ট্রানজেকশন আইডি বা গেমের IGN উল্লেখ করুন)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#B2D959]/50 rounded-xl text-sm focus:ring-2 focus:ring-[#7EC151] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  className="w-full bg-[#7EC151] hover:bg-[#72b047] text-white font-extrabold py-4 px-4 rounded-xl text-sm sm:text-base transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'bn' ? 'মেসেজ সাবমিট করুন' : 'Submit Support Ticket'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 font-bengali bg-[#B2D959]/15 rounded-2xl p-6 border border-[#B2D959]">
                <div className="w-16 h-16 bg-[#7EC151] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-black text-[#0F172A] font-heading-bn">
                  {currentLang === 'bn' ? 'বার্তা সফলভাবে পৌঁছানো হয়েছে!' : 'Message Received!'}
                </h4>
                <p className="text-sm text-[#334155] leading-relaxed max-w-sm mx-auto">
                  {currentLang === 'bn'
                    ? `ধন্যবাদ ${formData.name}! আপনার বার্তাটি সাপোর্ট টিমের নিকট পৌঁছেছে। দ্রুত সমাধানের জন্য আপনি সরাসরি হোয়াটসঅ্যাপেও মেসেজ দিতে পারেন।`
                    : `Thank you ${formData.name}! We will review your message shortly.`}
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/8801400389396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#7EC151] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md"
                  >
                    <span>হোয়াটসঅ্যাপে সরাসরি যোগাযোগ করুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right: Instant Help FAQs */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#B2D959]/50 m3-elevation-2 shadow-xl space-y-5">
            <div className="flex items-center space-x-2 text-[#7EC151] text-xs font-bold uppercase tracking-wider font-bengali">
              <HelpCircle className="w-4 h-4" />
              <span>{currentLang === 'bn' ? 'দ্রুত সমাধান (FAQ)' : 'Quick Answers'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading-bn">
              {currentLang === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী' : 'Frequently Asked Questions'}
            </h3>

            <div className="space-y-3 font-bengali text-xs sm:text-sm">
              {[
                {
                  q: 'টাকা যোগ করার পর ব্যালেন্স যোগ হতে কতক্ষণ লাগে?',
                  a: 'স্বয়ংক্রিয় গেটওয়ের মাধ্যমে বিকাশ বা নগদে টাকা পাঠালে সর্বোচ্চ ৩০ সেকেন্ড থেকে ১ মিনিটের মধ্যে ওয়ালেটে টাকা যোগ হয়।',
                },
                {
                  q: 'উইথড্র রিকোয়েস্ট দেওয়ার কতক্ষণ পর টাকা পাওয়া যায়?',
                  a: 'উইনিং ব্যালেন্স উইথড্র রিকোয়েস্ট দেওয়ার ২ থেকে ৫ মিনিটের মধ্যে বিকাশ/নগদে চলে যায়।',
                },
                {
                  q: 'কাস্টম রুম কোড ও পাসওয়ার্ড কখন দেওয়া হয়?',
                  a: 'ম্যাচ শুরুর ঠিক ৫ মিনিট আগে অ্যাপের ভেতরে টুর্নামেন্ট কার্ডে রুম আইডি ও পাসওয়ার্ড স্বয়ংক্রিয়ভাবে ভেসে উঠবে।',
                },
                {
                  q: 'হ্যাকার বা চিটারদের বিরুদ্ধে কি ব্যবস্থা নেওয়া হয়?',
                  a: 'আমাদের ১০০% অ্যান্টি-চিট নীতি রয়েছে। কোনো খেলোয়াড় হ্যাকিং করলে তৎক্ষণাৎ আজীবনের জন্য ব্যান করা হয় এবং পুরস্কার বাতিল হয়।',
                },
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#B2D959]/40 space-y-1.5">
                  <p className="font-bold text-[#0F172A] flex items-start space-x-2">
                    <span className="text-[#7EC151] font-black">Q{i + 1}.</span>
                    <span>{faq.q}</span>
                  </p>
                  <p className="text-[#475569] text-xs leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Leadership & Founders Info */}
        <LeadershipSection currentLang={currentLang} />

      </div>
    </section>
  );
};
