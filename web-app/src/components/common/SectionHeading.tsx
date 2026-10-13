// Reusable Section Heading Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading = memo(function SectionHeading({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 max-w-[780px] ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary bg-primary-pale border border-primary/25 mb-3">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-text-primary tracking-tight mb-3">
          {title}{' '}
          {highlightText && (
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
        </h2>
      )}
      {subtitle && <p className="text-base text-text-secondary leading-relaxed m-0">{subtitle}</p>}
    </div>
  );
});

export default SectionHeading;
