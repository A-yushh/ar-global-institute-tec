// Reusable accessible Modal Component with Tailwind CSS v4 in TypeScript
import { memo, useEffect, useRef, useCallback } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { FaTimes } from 'react-icons/fa';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: 'max-w-[420px]',
  md: 'max-w-[540px]',
  lg: 'max-w-[700px]',
};

export const Modal = memo(function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = 'md',
  showCloseButton = true,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<Element | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
      if (previousActiveElement.current && previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-4 z-[9999] animate-in fade-in duration-200"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`bg-bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] flex flex-col relative border border-border-light overflow-hidden animate-in zoom-in-95 duration-200 ${
          sizeClasses[size] || sizeClasses.md
        } ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-dialog-title' : undefined}
        tabIndex={-1}
      >
        {(title || showCloseButton) && (
          <div className="px-6 py-5 flex items-center justify-between border-b border-border-light bg-bg-light">
            <div className="flex flex-col gap-1 text-left">
              {title && (
                <h3 id="modal-dialog-title" className="m-0 text-lg font-bold text-text-primary">
                  {title}
                </h3>
              )}
              {subtitle && <p className="m-0 text-xs text-text-muted">{subtitle}</p>}
            </div>
            {showCloseButton && (
              <button
                type="button"
                className="bg-transparent border-none rounded-lg w-8.5 h-8.5 flex items-center justify-center text-text-muted hover:bg-border-light hover:text-text-primary cursor-pointer transition-colors"
                onClick={onClose}
                aria-label="Close modal dialog"
              >
                <FaTimes size={16} />
              </button>
            )}
          </div>
        )}

        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
});

export default Modal;
