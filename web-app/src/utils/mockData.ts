// Mock Data Store with TypeScript interfaces

export interface ClassCategory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badge: string;
  icon: string;
  targetCategory: string;
  colorKey: string;
}

export interface BatchItem {
  id: string;
  title: string;
  category: string;
  targetClass: string;
  duration: string;
  startDate: string;
  endDate: string;
  faculty: string;
  language: string;
  price: number;
  originalPrice: number;
  discount: string;
  badge: string;
  badgeType: string;
  highlights: string[];
  rating: number;
  reviewsCount: number;
  seatsLeft: number;
}

export interface ExtraActivity {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  features: string[];
  colorKey: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  exam: string;
  rank: string;
  score: string;
  avatar: string;
  quote: string;
  batch: string;
}

export interface ITPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ITCompanyTeaserData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  upcomingPillars: ITPillar[];
}

export const CLASS_CATEGORIES_DATA: ClassCategory[] = [
  {
    id: 'class-6',
    title: 'Class 6th',
    subtitle: 'Foundation & Logic Building',
    tag: 'Foundation',
    badge: 'Popular',
    icon: 'FaBookReader',
    targetCategory: 'class-6-8',
    colorKey: 'primary',
  },
  {
    id: 'class-7',
    title: 'Class 7th',
    subtitle: 'Olympiad & Conceptual Mastery',
    tag: 'Foundation',
    badge: 'Trending',
    icon: 'FaAtom',
    targetCategory: 'class-6-8',
    colorKey: 'accentBlue',
  },
  {
    id: 'class-8',
    title: 'Class 8th',
    subtitle: 'Advanced STEM & Science Sparks',
    tag: 'Foundation',
    badge: 'Comprehensive',
    icon: 'FaFlask',
    targetCategory: 'class-6-8',
    colorKey: 'accentPink',
  },
  {
    id: 'class-9',
    title: 'Class 9th',
    subtitle: 'Pre-JEE & Board Foundation',
    tag: 'Pre-Foundation',
    badge: 'High Impact',
    icon: 'FaCalculator',
    targetCategory: 'class-9-10',
    colorKey: 'accentOrange',
  },
  {
    id: 'class-10',
    title: 'Class 10th',
    subtitle: 'Board Toppers & NTSE Focus',
    tag: 'Boards + NTSE',
    badge: 'Crucial Year',
    icon: 'FaAward',
    targetCategory: 'class-9-10',
    colorKey: 'accentGreen',
  },
  {
    id: 'class-11',
    title: 'Class 11th',
    subtitle: 'Comprehensive Core Science',
    tag: 'PCM / PCB Stream',
    badge: 'Target 2026',
    icon: 'FaMicroscope',
    targetCategory: 'class-11-12',
    colorKey: 'primary',
  },
  {
    id: 'class-12',
    title: 'Class 12th',
    subtitle: 'Board Scoring & Revision Blitz',
    tag: 'Boards + Entrance',
    badge: 'Target 2025',
    icon: 'FaGraduationCap',
    targetCategory: 'class-11-12',
    colorKey: 'accentBlue',
  },
  {
    id: 'jee-mains',
    title: 'JEE Mains',
    subtitle: 'Rank Accelerator & Speed Hacks',
    tag: 'Engineering Entrance',
    badge: 'Bestseller',
    icon: 'FaCogs',
    targetCategory: 'jee-mains',
    colorKey: 'accentOrange',
  },
  {
    id: 'jee-advanced',
    title: 'JEE Advanced',
    subtitle: 'Deep Problem Solving & IIT Target',
    tag: 'Elite Batch',
    badge: 'Star Faculty',
    icon: 'FaRocket',
    targetCategory: 'jee-advanced',
    colorKey: 'primary',
  },
];

export const MOCK_BATCHES: BatchItem[] = [
  {
    id: 'batch-jee-adv-elite',
    title: 'Sankalp Elite JEE Advanced 2025/26',
    category: 'jee-advanced',
    targetClass: 'Class 11 & 12 / Droppers',
    duration: '1 Year Intensive',
    startDate: '15 Nov 2025',
    endDate: '30 May 2026',
    faculty: 'Senior IIT Kharagpur & Delhi Alumni',
    language: 'Hinglish & English',
    price: 6499,
    originalPrice: 14999,
    discount: '56% OFF',
    badge: 'Bestseller',
    badgeType: 'highlight',
    highlights: [
      'Daily 4 Hours Live Interactive Classes',
      'Advanced Multi-Concept Problem Sets',
      'Personal 1-on-1 Mentor Allocation',
      'Printed Modules & High-Yield DPPs',
      'Full Syllabus All-India Test Series (AITS)',
    ],
    rating: 4.9,
    reviewsCount: 3820,
    seatsLeft: 14,
  },
  {
    id: 'batch-jee-mains-booster',
    title: 'Arjun JEE Mains Rank Booster 2025',
    category: 'jee-mains',
    targetClass: 'Class 12 & Droppers',
    duration: '6 Months Rapid Track',
    startDate: '01 Dec 2025',
    endDate: '15 Apr 2026',
    faculty: 'Top Kota Ex-Faculty Panel',
    language: 'Hinglish',
    price: 3999,
    originalPrice: 8999,
    discount: '55% OFF',
    badge: 'Trending',
    badgeType: 'popular',
    highlights: [
      'Comprehensive 100-Day Crash Schedule',
      'Formula Maps & Short Trick Masterclasses',
      'Previous 10 Years Solved Chapter-wise',
      'Weekly Computer-Based Mock Tests',
      '24/7 Doubt Engine with Video Solutions',
    ],
    rating: 4.8,
    reviewsCount: 2450,
    seatsLeft: 22,
  },
  {
    id: 'batch-class11-aarambh',
    title: 'Aarambh Class 11th Science Pioneer',
    category: 'class-11-12',
    targetClass: 'Class 11th (PCM / PCB)',
    duration: 'Full Academic Year',
    startDate: '20 Nov 2025',
    endDate: '28 Feb 2026',
    faculty: 'Gold Medalist Educators',
    language: 'English & Hindi',
    price: 4499,
    originalPrice: 9999,
    discount: '55% OFF',
    badge: 'Recommended',
    badgeType: 'recommended',
    highlights: [
      'Zero-to-Hero Fundamental Clarity',
      'NCERT Line-by-Line Micro Lectures',
      'Weekly Subjective & Objective Assessments',
      'Class Notes PDF with Digital Annotations',
      'Special Doubt Resolution Desk',
    ],
    rating: 4.9,
    reviewsCount: 1980,
    seatsLeft: 35,
  },
  {
    id: 'batch-class12-shikhar',
    title: 'Shikhar Class 12th Board + Competitive',
    category: 'class-11-12',
    targetClass: 'Class 12th Board Aspirants',
    duration: '8 Months Comprehensive',
    startDate: '10 Nov 2025',
    endDate: '31 Mar 2026',
    faculty: 'Ex-CBSE Examiners & Master Teachers',
    language: 'Hinglish',
    price: 4999,
    originalPrice: 11000,
    discount: '54% OFF',
    badge: 'Board Special',
    badgeType: 'special',
    highlights: [
      'Full Board Syllabus Coverage + Answer Writing',
      'Sample Paper Solving by Board Evaluators',
      'Competitive Foundation for JEE & CUET',
      'Practical Lab Exam Guides & Viva Prep',
      'Dedicated Parents-Teacher Syncs',
    ],
    rating: 4.8,
    reviewsCount: 1720,
    seatsLeft: 18,
  },
  {
    id: 'batch-class9-10-udaan',
    title: 'Udaan Class 9th & 10th Super Foundation',
    category: 'class-9-10',
    targetClass: 'Class 9th & 10th Students',
    duration: 'Full Academic Year',
    startDate: '25 Nov 2025',
    endDate: '20 Mar 2026',
    faculty: 'Olympiad & NTSE Experts',
    language: 'English & Hinglish',
    price: 3299,
    originalPrice: 7500,
    discount: '56% OFF',
    badge: 'Top Rated',
    badgeType: 'popular',
    highlights: [
      'Science & Maths Deep Intuition Focus',
      'National Talent Search & Olympiad Coaching',
      'Mental Ability & Logical Reasoning Sessions',
      'Interactive Animated 3D Visualizer Modules',
      'Fortnightly Live Parent Progress Conferences',
    ],
    rating: 4.9,
    reviewsCount: 3100,
    seatsLeft: 40,
  },
  {
    id: 'batch-class6-8-neev',
    title: 'Neev Class 6th - 8th Junior Sparks',
    category: 'class-6-8',
    targetClass: 'Class 6th, 7th & 8th',
    duration: 'Full Academic Year',
    startDate: '05 Dec 2025',
    endDate: '15 Mar 2026',
    faculty: 'Child Pedagogy Specialists',
    language: 'English & Hinglish',
    price: 2799,
    originalPrice: 6000,
    discount: '53% OFF',
    badge: 'Early Starter',
    badgeType: 'recommended',
    highlights: [
      'Gamified Math Puzzles & Science Experiments',
      'Communication & Critical Thinking Workshops',
      'Coding & Robotics Fundamental Introduction',
      'Daily Practice Worksheets & Badges',
      'Safe, Student-First Friendly Environment',
    ],
    rating: 4.9,
    reviewsCount: 1450,
    seatsLeft: 28,
  },
];

export const EXTRA_ACTIVITIES_DATA: ExtraActivity[] = [
  {
    id: 'test-series',
    title: 'All-India Test Series & CBT',
    description: 'Realistic exam simulation with real-time percentile, time-per-question analysis, and topic heatmaps.',
    icon: 'FaClipboardCheck',
    tag: 'Simulated Exams',
    features: ['Real NTA Interface', 'AI Difficulty Calibration', 'Step-by-step Video Solvers'],
    colorKey: 'primary',
  },
  {
    id: 'gaming-learning',
    title: 'Gamified Learning Arena',
    description: 'Master physics formulas and organic chemistry reactions through quests, daily streaks, and leaderboard duels.',
    icon: 'FaGamepad',
    tag: 'Interactive Fun',
    features: ['Formula Battles', 'Daily Streak Rewards', 'Institute Guilds & XP'],
    colorKey: 'accentPink',
  },
  {
    id: 'live-quizzes',
    title: 'Daily Micro-Quizzes',
    description: 'Bite-sized 10-minute quizzes after every lecture to lock in concepts and build rapid reflex recall.',
    icon: 'FaBolt',
    tag: 'Instant Retention',
    features: ['Speed & Accuracy Metrics', 'Live Kahoot-style Polls', 'Concept Weakness Alerts'],
    colorKey: 'accentOrange',
  },
  {
    id: 'doubt-solving',
    title: '24x7 AI + Human Doubt Solving',
    description: 'Snap a photo of any tough question and get verified step-by-step video solutions within minutes.',
    icon: 'FaQuestionCircle',
    tag: 'Instant Help',
    features: ['Camera Snap Upload', 'Audio Notes Clarification', 'Top Mentor Follow-ups'],
    colorKey: 'accentGreen',
  },
  {
    id: 'study-material',
    title: 'Curated Smart Study Material',
    description: 'Crisp summary mind maps, formula handbooks, NCERT punchbooks, and high-yield solved question banks.',
    icon: 'FaBookOpen',
    tag: 'High-Yield Notes',
    features: ['Downloadable Colored PDFs', 'Physical Delivery Option', 'Mind Maps & Infographics'],
    colorKey: 'accentBlue',
  },
  {
    id: 'competitions',
    title: 'National Olympiads & Hackathons',
    description: 'Represent A. R. Global Institute in national science olympiads, coding contests, and logic decathlons.',
    icon: 'FaTrophy',
    tag: 'Talent Showcase',
    features: ['Cash Scholarships', 'Certificates of Excellence', 'Mentorship for Top 100'],
    colorKey: 'primary',
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'faculty',
    title: 'Top IITian & Elite Pedagogy',
    description: 'Our faculty members are top-rankers and veteran educators who turn complex derivations into intuitive insights.',
    icon: 'FaChalkboardTeacher',
    metric: '180+ Educators',
  },
  {
    id: 'results',
    title: 'Proven Consistent Track Record',
    description: 'Every year, our students break into the top AIR 100 and secure admissions into prestigious IITs, NITs, and AIIMS.',
    icon: 'FaMedal',
    metric: '98.6% Success Ratio',
  },
  {
    id: 'affordable',
    title: 'Democratized Affordable Quality',
    description: 'World-class education at a fraction of Kota offline fees, making premium learning accessible to every aspiring mind.',
    icon: 'FaHandHoldingHeart',
    metric: '70% Cost Advantage',
  },
  {
    id: 'analytics',
    title: 'AI-Powered Progress Diagnostics',
    description: 'Smart dashboard maps your strengths, tracks syllabus coverage, and suggests custom practice drills.',
    icon: 'FaChartLine',
    metric: 'Granular Insights',
  },
  {
    id: 'doubt-culture',
    title: 'Uncompromised 1-on-1 Mentorship',
    description: 'No student is left behind. Dedicated academic advisors track attendance, homework submission, and mental wellness.',
    icon: 'FaUserShield',
    metric: '100% Dedicated Mentors',
  },
  {
    id: 'tech-forward',
    title: 'Next-Gen Educational Technology',
    description: 'Seamless cross-device learning apps, adaptive practice engines, and smooth offline video downloads.',
    icon: 'FaLaptopCode',
    metric: 'Zero Lag Infrastructure',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Aarav Sharma',
    exam: 'JEE Advanced 2024',
    rank: 'AIR 42',
    score: '318 / 360',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    quote: 'The structured problem sheets and 24/7 doubt resolution at A. R. Global Institute gave me the confidence to crack tough multi-concept questions effortlessly. The teachers are always available!',
    batch: 'Sankalp JEE Elite Batch',
  },
  {
    id: 'test-2',
    name: 'Ananya Verma',
    exam: 'JEE Mains 2024',
    rank: 'AIR 118',
    score: '99.94 Percentile',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'I used to struggle with Physical Chemistry calculations. The formula tricks and animated diagrams transformed my preparation completely. Highly recommended for every serious aspirant.',
    batch: 'Arjun JEE Booster',
  },
  {
    id: 'test-3',
    name: 'Rohan Deshmukh',
    exam: 'Class 12th CBSE Boards',
    rank: 'City Topper',
    score: '98.8% Aggregate',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Balanced my board prep and competitive foundation seamlessly. The subjective mock evaluations with detailed examiner feedback were game-changers for scoring top marks.',
    batch: 'Shikhar Board + Competitive',
  },
];

export const IT_COMPANY_TEASER: ITCompanyTeaserData = {
  title: 'A. R. Global Technologies – Enterprise IT Division',
  badge: 'Coming Soon • Expansion 2026',
  tagline: 'Bridging Education with Real-World Software Engineering & Industry Impact',
  description: 'A. R. Global Institute is actively expanding into modern software solutions, cloud architectures, and artificial intelligence product engineering. In the upcoming phase, our students and partners will gain direct access to industry incubation, enterprise software development, and specialized tech apprenticeships.',
  upcomingPillars: [
    {
      title: 'Full-Stack & Cloud Systems',
      description: 'Enterprise React, Node.js, Microservices, and DevOps deployment pipelines.',
      icon: 'FaServer',
    },
    {
      title: 'Applied AI & Machine Learning',
      description: 'Computer vision, natural language models, and predictive analytics platforms.',
      icon: 'FaBrain',
    },
    {
      title: 'Student Tech Incubator',
      description: 'Direct internship pipelines for top institute students to build live enterprise software.',
      icon: 'FaUsersCog',
    },
    {
      title: 'Custom EdTech Innovations',
      description: 'Proprietary LMS, automated grading engines, and interactive virtual classrooms.',
      icon: 'FaCodeBranch',
    },
  ],
};
