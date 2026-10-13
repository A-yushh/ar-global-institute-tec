// AuthModal Container with smooth view switcher in TypeScript
import { memo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthModalOpen,
  selectAuthModalView,
  selectSelectedBatchForEnroll,
  closeAuthModal,
  setAuthModalView,
} from '../../store/slices/uiSlice';
import type { AppDispatch } from '../../store/store';
import Modal from '../common/Modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';

export const AuthModal = memo(function AuthModal() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(selectIsAuthModalOpen);
  const view = useSelector(selectAuthModalView);
  const selectedBatch = useSelector(selectSelectedBatchForEnroll);

  const handleClose = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  const handleSwitchToSignIn = useCallback(() => {
    dispatch(setAuthModalView('signin'));
  }, [dispatch]);

  const handleSwitchToSignUp = useCallback(() => {
    dispatch(setAuthModalView('signup'));
  }, [dispatch]);

  const handleSwitchToForgot = useCallback(() => {
    dispatch(setAuthModalView('forgot'));
  }, [dispatch]);

  const getModalMeta = (): { title: ReactNode; subtitle: string; size: 'sm' | 'md' | 'lg' } => {
    switch (view) {
      case 'signup':
        return {
          title: selectedBatch ? 'Enroll in Batch – Create Account' : 'Join A. R. Global Institute',
          subtitle: selectedBatch
            ? 'Complete your one-step registration to confirm admission'
            : 'Start your journey towards academic excellence with top mentors',
          size: 'md',
        };
      case 'forgot':
        return {
          title: 'Account Recovery',
          subtitle: 'Recover access to your student dashboard & batch materials',
          size: 'sm',
        };
      case 'signin':
      default:
        return {
          title: 'Welcome Back, Student!',
          subtitle: 'Sign in to access your live classes, tests, and study notes',
          size: 'sm',
        };
    }
  };

  const meta = getModalMeta();

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={meta.title}
      subtitle={meta.subtitle}
      size={meta.size}
    >
      {view === 'signin' && (
        <SignInForm
          onSwitchToSignUp={handleSwitchToSignUp}
          onSwitchToForgot={handleSwitchToForgot}
        />
      )}

      {view === 'signup' && (
        <SignUpForm onSwitchToSignIn={handleSwitchToSignIn} />
      )}

      {view === 'forgot' && (
        <ForgotPasswordForm onSwitchToSignIn={handleSwitchToSignIn} />
      )}
    </Modal>
  );
});

export default AuthModal;
