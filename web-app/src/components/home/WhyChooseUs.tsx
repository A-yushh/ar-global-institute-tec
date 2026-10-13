// Why Choose Us Section Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ReactNode } from 'react';
import {
  FaChalkboardTeacher,
  FaMedal,
  FaHandHoldingHeart,
  FaChartLine,
  FaUserShield,
  FaLaptopCode,
} from 'react-icons/fa';
import { WHY_CHOOSE_US_DATA } from '../../utils/mockData';
import type { WhyChooseUsItem } from '../../utils/mockData';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP: Record<string, ReactNode> = {
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaMedal: <FaMedal />,
  FaHandHoldingHeart: <FaHandHoldingHeart />,
  FaChartLine: <FaChartLine />,
  FaUserShield: <FaUserShield />,
  FaLaptopCode: <FaLaptopCode />,
};

export const WhyChooseUs = memo(function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-bg-white py-20 px-5">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          badge="THE A. R. GLOBAL ADVANTAGE"
          title="Why Thousands of Toppers Trust"
          highlightText="Our Institute"
          subtitle="A battle-tested academic framework engineered to bridge the gap between classroom theory and exam excellence."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {WHY_CHOOSE_US_DATA.map((item: WhyChooseUsItem) => (
            <article key={item.id} className="bg-white border border-border-light rounded-2xl p-7 flex flex-col gap-3.5 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 text-left">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-pale to-white border border-primary/25 text-primary flex items-center justify-center text-xl">
                  {ICON_MAP[item.icon] || <FaMedal />}
                </div>
                <span className="text-xs font-bold text-primary-dark bg-primary-pale px-2.5 py-1 rounded-lg">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-lg font-bold text-text-primary m-0">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed m-0">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUs;
