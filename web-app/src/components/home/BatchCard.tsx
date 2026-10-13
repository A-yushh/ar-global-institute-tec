// BatchCard Component with Tailwind CSS v4 in TypeScript
import { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import type { BatchItem } from '../../utils/mockData';
import { openAuthModal } from '../../store/slices/uiSlice';
import type { AppDispatch } from '../../store/store';
import Button from '../common/Button';

export interface BatchCardProps {
  batch: BatchItem;
}

export const BatchCard = memo(function BatchCard({ batch }: BatchCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [showFullHighlights, setShowFullHighlights] = useState<boolean>(false);

  const handleEnrollNow = useCallback(() => {
    dispatch(
      openAuthModal({
        view: 'signup',
        selectedBatch: batch.title,
      })
    );
  }, [dispatch, batch.title]);

  const toggleHighlights = useCallback(() => {
    setShowFullHighlights((prev) => !prev);
  }, []);

  const visibleHighlights = showFullHighlights
    ? batch.highlights
    : batch.highlights.slice(0, 3);

  return (
    <article className="bg-bg-card border border-border-light rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-200 flex flex-col overflow-hidden text-left hover:-translate-y-1">
      {/* Header */}
      <div className="p-5 pb-3.5 border-b border-border-light bg-gradient-to-b from-bg-light to-white flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-primary text-white">
            {batch.badge}
          </span>
          <div className="flex items-center gap-1 text-xs font-bold text-accent-orange">
            <FaStar size={12} />
            <span>
              {batch.rating} ({batch.reviewsCount})
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-text-primary leading-snug m-0">{batch.title}</h3>
        <p className="text-xs font-semibold text-primary m-0">{batch.targetClass}</p>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3.5 flex-1">
        <div className="grid grid-cols-2 gap-2.5 bg-bg-light p-3 rounded-xl border border-border-light">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <FaClock className="text-primary shrink-0" size={13} />
            <span>{batch.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <FaCalendarAlt className="text-primary shrink-0" size={13} />
            <span>Starts: {batch.startDate}</span>
          </div>
        </div>

        <div className="text-xs text-text-muted flex items-center gap-1.5">
          <FaChalkboardTeacher size={14} className="text-primary shrink-0" />
          <span>
            Faculty: <strong className="font-semibold text-text-primary">{batch.faculty}</strong>
          </span>
        </div>

        <ul className="list-none p-0 m-0 flex flex-col gap-2">
          {visibleHighlights.map((highlight: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary leading-normal">
              <FaCheckCircle className="text-success mt-0.5 shrink-0" size={13} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {batch.highlights.length > 3 && (
          <button
            type="button"
            onClick={toggleHighlights}
            className="bg-transparent border-none text-primary text-xs font-semibold cursor-pointer text-left p-0 mt-0.5 hover:underline"
          >
            {showFullHighlights ? 'Show Less' : `+${batch.highlights.length - 3} More Benefits`}
          </button>
        )}
      </div>

      {/* Footer & Enrollment CTA */}
      <div className="p-5 pt-4 border-t border-border-light bg-white flex flex-col gap-3.5">
        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-extrabold text-text-primary">₹{batch.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-text-light line-through">₹{batch.originalPrice.toLocaleString('en-IN')}</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-success-bg text-success-dark border border-success-border">
            {batch.discount}
          </span>
        </div>

        <div className="flex gap-2.5">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={handleEnrollNow}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </article>
  );
});

export default BatchCard;
