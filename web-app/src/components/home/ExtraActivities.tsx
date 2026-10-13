// Extra Activities Section Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ReactNode } from 'react';
import {
  FaClipboardCheck,
  FaGamepad,
  FaBolt,
  FaQuestionCircle,
  FaBookOpen,
  FaTrophy,
} from 'react-icons/fa';
import { EXTRA_ACTIVITIES_DATA } from '../../utils/mockData';
import type { ExtraActivity } from '../../utils/mockData';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP: Record<string, ReactNode> = {
  FaClipboardCheck: <FaClipboardCheck />,
  FaGamepad: <FaGamepad />,
  FaBolt: <FaBolt />,
  FaQuestionCircle: <FaQuestionCircle />,
  FaBookOpen: <FaBookOpen />,
  FaTrophy: <FaTrophy />,
};

export const ExtraActivities = memo(function ExtraActivities() {
  return (
    <section id="activities" className="bg-bg-light py-20 px-5 border-y border-border-light">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          badge="BEYOND THE CLASSROOM"
          title="Interactive Learning &"
          highlightText="Extra Activities"
          subtitle="Fuel your curiosity with gamified challenges, simulated computer-based tests, and live doubt solving."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {EXTRA_ACTIVITIES_DATA.map((act: ExtraActivity) => (
            <article key={act.id} className="bg-bg-card border border-border-light rounded-2xl p-6.5 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 text-left">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-pale text-primary flex items-center justify-center text-xl">
                  {ICON_MAP[act.icon] || <FaBolt />}
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-bg-light text-text-secondary border border-border-light">
                  {act.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary m-0">{act.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed m-0">{act.description}</p>

              <ul className="list-none p-0 mt-auto pt-3.5 border-t border-dashed border-border-light flex flex-col gap-2 m-0">
                {act.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExtraActivities;
