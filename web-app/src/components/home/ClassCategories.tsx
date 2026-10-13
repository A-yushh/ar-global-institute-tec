// Class Categories Section Component with Tailwind CSS v4 in TypeScript
import { memo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import {
  FaBookReader,
  FaAtom,
  FaFlask,
  FaCalculator,
  FaAward,
  FaMicroscope,
  FaGraduationCap,
  FaCogs,
  FaRocket,
  FaArrowRight,
} from 'react-icons/fa';
import { CLASS_CATEGORIES_DATA } from '../../utils/mockData';
import type { ClassCategory } from '../../utils/mockData';
import { setActiveFilter } from '../../store/slices/batchSlice';
import type { AppDispatch } from '../../store/store';
import SectionHeading from '../common/SectionHeading';

const ICON_MAP: Record<string, ReactNode> = {
  FaBookReader: <FaBookReader />,
  FaAtom: <FaAtom />,
  FaFlask: <FaFlask />,
  FaCalculator: <FaCalculator />,
  FaAward: <FaAward />,
  FaMicroscope: <FaMicroscope />,
  FaGraduationCap: <FaGraduationCap />,
  FaCogs: <FaCogs />,
  FaRocket: <FaRocket />,
};

export const ClassCategories = memo(function ClassCategories() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectCategory = useCallback(
    (targetCategory: string) => {
      dispatch(setActiveFilter(targetCategory));
      const batchesEl = document.getElementById('batches');
      if (batchesEl) {
        batchesEl.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [dispatch]
  );

  return (
    <section id="categories" className="bg-bg-light py-20 px-5 border-y border-border-light">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          badge="ACADEMIC SPECTRUM"
          title="Explore Programs Tailored for Your"
          highlightText="Class & Goals"
          subtitle="From Class 6th foundational skills to JEE Advanced mastery, choose your curriculum pathway."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLASS_CATEGORIES_DATA.map((cat: ClassCategory) => (
            <div
              key={cat.id}
              className="bg-bg-card border-[1.5px] border-border-light rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-200 shadow-xs hover:-translate-y-1 hover:border-primary hover:shadow-xl group text-left"
              onClick={() => handleSelectCategory(cat.targetCategory)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectCategory(cat.targetCategory);
                }
              }}
            >
              <div className="w-13 h-13 min-w-13 rounded-xl bg-primary-pale text-primary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-200">
                {ICON_MAP[cat.icon] || <FaGraduationCap />}
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary m-0">{cat.title}</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-bg-light text-text-secondary border border-border-light">
                    {cat.tag}
                  </span>
                </div>
                <p className="text-xs text-text-muted m-0">{cat.subtitle}</p>
                <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 mt-1">
                  Explore Batches <FaArrowRight size={10} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ClassCategories;
