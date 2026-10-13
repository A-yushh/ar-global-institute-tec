// Hero Section Component with Tailwind CSS v4 in TypeScript
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaStar, FaRocket, FaGraduationCap, FaUserTie, FaCheckDouble } from 'react-icons/fa';
import { STATS } from '../../utils/constants';
import type { StatItem } from '../../utils/constants';
import { openAuthModal } from '../../store/slices/uiSlice';
import type { AppDispatch } from '../../store/store';
import Button from '../common/Button';

export const HeroSection = memo(function HeroSection() {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenDemoModal = useCallback(() => {
    dispatch(openAuthModal({ view: 'signup' }));
  }, [dispatch]);

  const handleExploreBatches = useCallback(() => {
    const el = document.getElementById('batches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="hero" className="bg-bg-white py-16 px-5 relative overflow-hidden">
      {/* Background radial gradient blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-radial from-primary-pale to-transparent opacity-80" />
        <div className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full bg-radial from-info-bg to-transparent opacity-60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 mb-14 text-center lg:text-left">
          {/* Text Content */}
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-pale border border-primary/25 text-xs font-bold text-primary w-fit">
              <FaStar className="text-accent-orange" />
              <span>India’s Most Trusted Coaching Academy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tight leading-[1.15] m-0">
              Transform Your Potential into{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Top All-India Ranks
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl m-0">
              Learn from premier IITian mentors and subject experts. Experience structured syllabus roadmaps, adaptive problem solving, and 24x7 personalized doubt support from Class 6th to JEE Advanced.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleExploreBatches}
                startIcon={<FaRocket />}
              >
                Explore Batches
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleOpenDemoModal}
                startIcon={<FaGraduationCap />}
              >
                Book Free Demo Class
              </Button>
            </div>
          </div>

          {/* Visual Presentation */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-[480px] bg-gradient-to-br from-primary-pale to-white border-[1.5px] border-primary/30 rounded-3xl p-6 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                alt="Students collaborating at A. R. Global Institute"
                className="w-full h-72 object-cover rounded-2xl shadow-md"
                loading="eager"
              />

              {/* Floating Badge 1 */}
              <div className="sm:absolute sm:top-3 sm:-left-5 mt-4 sm:mt-0 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-border-light flex items-center gap-2.5 animate-pulse duration-1000">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white text-base">
                  <FaUserTie />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-text-primary">Top IITian Faculty</span>
                  <span className="text-[11px] text-text-muted">180+ Master Educators</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="sm:absolute sm:-bottom-3 sm:-right-4 mt-3 sm:mt-0 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-border-light flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-success flex items-center justify-center text-white text-base">
                  <FaCheckDouble />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-text-primary">99.4% Doubt Resolution</span>
                  <span className="text-[11px] text-text-muted">Instant Video Explanations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Stats Row */}
        <div className="bg-bg-light border border-border-light rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((st: StatItem) => (
            <div key={st.label} className="flex flex-col gap-1 items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">{st.value}</span>
              <span className="text-sm font-semibold text-text-secondary">{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
