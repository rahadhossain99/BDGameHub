export type Language = 'bn' | 'en';

export type PageView = 'home' | 'tutorials' | 'tournaments' | 'download' | 'about' | 'rules' | 'contact';

export interface TutorialVideo {
  id: string;
  youtubeId: string;
  titleBn: string;
  titleEn: string;
  categoryBn: string;
  categoryEn: string;
  duration: string;
  views: string;
  thumbnailUrl: string;
  descriptionBn: string;
  descriptionEn: string;
  steps: {
    titleBn: string;
    titleEn: string;
    detailBn: string;
    detailEn: string;
  }[];
  tipsBn: string[];
  tipsEn: string[];
}

export interface Tournament {
  id: string;
  titleBn: string;
  titleEn: string;
  gameType: 'Free Fire BR' | 'Free Fire CS' | 'Free Fire 1v1' | 'Ludo King';
  category: 'free' | 'br' | 'cs' | 'special';
  bannerUrl: string;
  status: 'live' | 'upcoming' | 'registering';
  entryFeeBn: string;
  entryFeeEn: string;
  prizePoolBn: string;
  prizePoolEn: string;
  firstPrizeBn: string;
  firstPrizeEn: string;
  perKillBn?: string;
  perKillEn?: string;
  registeredCount: number;
  totalSlots: number;
  matchTimeBn: string;
  matchTimeEn: string;
  mapBn: string;
  mapEn: string;
  modeBn: string;
  modeEn: string;
  rulesBn: string[];
  rulesEn: string[];
}

export interface FaqItem {
  id: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
  category: 'download' | 'gameplay' | 'payment' | 'account';
}

export interface StepGuide {
  stepNumber: number;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
  bulletsBn: string[];
  bulletsEn: string[];
  noteBn?: string;
  noteEn?: string;
  iconType: 'download' | 'shield' | 'settings' | 'user';
}
