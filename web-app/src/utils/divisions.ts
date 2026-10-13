// Division Registry & Architectural Expansion Blueprint in TypeScript

export interface DivisionItem {
  id: string;
  name: string;
  shortName: string;
  status: 'ACTIVE' | 'COMING_SOON';
  routePrefix: string;
  description: string;
  icon: string;
  isPrimary: boolean;
  plannedLaunchYear?: string;
  contactEmail?: string;
}

export const DIVISIONS: DivisionItem[] = [
  {
    id: 'education',
    name: 'Education & Coaching Division',
    shortName: 'Education',
    status: 'ACTIVE',
    routePrefix: '/',
    description: 'Premier coaching institute for Classes 6th-12th, JEE Mains & JEE Advanced.',
    icon: 'FaGraduationCap',
    isPrimary: true,
  },
  {
    id: 'it-technologies',
    name: 'A. R. Global Technologies (IT Division)',
    shortName: 'IT Solutions',
    status: 'COMING_SOON',
    routePrefix: '/it-technologies',
    description: 'Enterprise software development, cloud infrastructure, AI solutions, and student tech incubation.',
    icon: 'FaLaptopCode',
    isPrimary: false,
    plannedLaunchYear: '2026',
    contactEmail: 'tech-division@arglobalinstitute.com',
  },
];

export const getActiveDivisions = (): DivisionItem[] => DIVISIONS.filter((d) => d.status === 'ACTIVE');

export const isDivisionActive = (divisionId: string): boolean => {
  const division = DIVISIONS.find((d) => d.id === divisionId);
  return division ? division.status === 'ACTIVE' : false;
};
