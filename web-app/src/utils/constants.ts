// Application Constants & System Configurations
export const APP_NAME = 'A. R. Global Institute';
export const APP_TAGLINE = 'Empowering Minds, Shaping the Future of Learning & Technology';

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'categories', label: 'Courses', href: '#categories' },
  { id: 'batches', label: 'Batches', href: '#batches' },
  { id: 'activities', label: 'Activities', href: '#activities' },
  { id: 'why-us', label: 'Why Us', href: '#why-us' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'it-division', label: 'IT Division', href: '#it-division', badge: 'Coming Soon' },
];

export interface SelectOption {
  value: string;
  label: string;
}

export const CLASS_OPTIONS: SelectOption[] = [
  { value: 'Class 6th', label: 'Class 6th Foundation' },
  { value: 'Class 7th', label: 'Class 7th Foundation' },
  { value: 'Class 8th', label: 'Class 8th Foundation' },
  { value: 'Class 9th', label: 'Class 9th Pre-Foundation' },
  { value: 'Class 10th', label: 'Class 10th Boards & NTSE' },
  { value: 'Class 11th', label: 'Class 11th (CBSE / State)' },
  { value: 'Class 12th', label: 'Class 12th (Boards Focus)' },
  { value: 'JEE Mains', label: 'JEE Mains Target 2025/2026' },
  { value: 'JEE Advanced', label: 'JEE Advanced Target 2025/2026' },
];

export const GENDER_OPTIONS: SelectOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export interface FilterTabItem {
  id: string;
  label: string;
}

export const BATCH_FILTER_TABS: FilterTabItem[] = [
  { id: 'all', label: 'All Batches' },
  { id: 'class-6-8', label: 'Class 6 - 8' },
  { id: 'class-9-10', label: 'Class 9 - 10' },
  { id: 'class-11-12', label: 'Class 11 - 12' },
  { id: 'jee-mains', label: 'JEE Mains' },
  { id: 'jee-advanced', label: 'JEE Advanced' },
];

export interface StatItem {
  label: string;
  value: string;
}

export const STATS: StatItem[] = [
  { label: 'Enrolled Students', value: '45,000+' },
  { label: 'Expert Faculty', value: '180+' },
  { label: 'Top 1000 JEE Ranks', value: '1,250+' },
  { label: 'Doubt Resolution Rate', value: '99.4%' },
];

export const CONTACT_INFO = {
  phone: '+91 (800) 274-5622',
  email: 'admissions@arglobalinstitute.com',
  address: 'Knowledge Park IV, Educational Hub, Tech Corridor, New Delhi - 110001',
  supportHours: 'Mon - Sun: 8:00 AM - 10:00 PM',
};

export const SOCIAL_LINKS = [
  { name: 'YouTube', href: 'https://youtube.com', icon: 'FaYoutube' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'FaInstagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'FaTwitter' },
  { name: 'Telegram', href: 'https://telegram.org', icon: 'FaTelegram' },
];
