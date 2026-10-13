// Testimonials & Hall of Fame Section Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { TESTIMONIALS_DATA } from '../../utils/mockData';
import type { TestimonialItem } from '../../utils/mockData';
import SectionHeading from '../common/SectionHeading';

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section id="results" className="bg-bg-light py-20 px-5 border-y border-border-light">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          badge="HALL OF FAME & RESULTS"
          title="Stories of Triumph From Our"
          highlightText="Top Rankers"
          subtitle="Real results from determined students who achieved stellar ranks with A. R. Global Institute."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
          {TESTIMONIALS_DATA.map((item: TestimonialItem) => (
            <article key={item.id} className="bg-bg-card border border-border-light rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4.5">
              <div className="flex justify-between items-center">
                <FaQuoteLeft className="text-primary-lighter text-2xl" />
                <div className="flex gap-0.5 text-accent-orange">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed italic m-0 flex-1">"{item.quote}"</p>

              <div className="flex items-center gap-3.5 pt-3.5 border-t border-border-light">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-primary"
                  loading="lazy"
                />

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary">{item.name}</span>
                    <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-accent-orange-bg text-accent-orange border border-warning-border">
                      {item.rank}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary">{item.exam} • {item.score}</span>
                  <span className="text-[11px] text-text-muted">{item.batch}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
