// Toast Notification Component with Tailwind CSS v4 in TypeScript
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { selectToast, hideToast } from '../../store/slices/uiSlice';
import type { ToastState } from '../../store/slices/uiSlice';

const typeBorderClasses: Record<string, string> = {
  success: 'border-l-4 border-l-success',
  error: 'border-l-4 border-l-error',
  info: 'border-l-4 border-l-primary',
};

const typeIconClasses: Record<string, string> = {
  success: 'text-success',
  error: 'text-error',
  info: 'text-primary',
};

export const Toast = memo(function Toast() {
  const dispatch = useDispatch();
  const toast: ToastState = useSelector(selectToast);

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.isOpen, dispatch]);

  if (!toast.isOpen) return null;

  const renderIcon = () => {
    switch (toast.type) {
      case 'error':
        return <FaExclamationCircle />;
      case 'info':
        return <FaInfoCircle />;
      case 'success':
      default:
        return <FaCheckCircle />;
    }
  };

  return (
    <aside
      className={`fixed bottom-6 right-6 z-[10000] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-bg-white shadow-2xl border border-border-light max-w-[420px] animate-in slide-in-from-bottom duration-200 ${
        typeBorderClasses[toast.type] || typeBorderClasses.success
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={`text-xl flex items-center ${typeIconClasses[toast.type] || typeIconClasses.success}`}>
        {renderIcon()}
      </div>
      <p className="text-sm font-medium text-text-primary m-0 leading-snug">{toast.message}</p>
      <button
        type="button"
        className="ml-auto p-1 text-text-muted hover:text-text-primary hover:bg-bg-light rounded-md cursor-pointer bg-transparent border-none transition-colors"
        onClick={() => dispatch(hideToast())}
        aria-label="Dismiss notification"
      >
        <FaTimes size={12} />
      </button>
    </aside>
  );
});

export default Toast;
