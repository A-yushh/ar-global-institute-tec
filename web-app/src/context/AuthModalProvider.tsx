import { useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAuthModal,
  closeAuthModal,
  setAuthModalView,
  selectIsAuthModalOpen,
  selectAuthModalView,
  selectSelectedBatchForEnroll,
} from '../store/slices/uiSlice';
import type { AuthModalView } from '../store/slices/uiSlice';
import { AuthModalContext } from './AuthModalContext';
import type { AuthModalContextType } from './AuthModalContext';

export const AuthModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsAuthModalOpen);
  const view = useSelector(selectAuthModalView);
  const selectedBatch = useSelector(selectSelectedBatchForEnroll);

  const openSignIn = useCallback(
    (batch: string | null = null) => {
      dispatch(openAuthModal({ view: 'signin', selectedBatch: batch }));
    },
    [dispatch]
  );

  const openSignUp = useCallback(
    (batch: string | null = null) => {
      dispatch(openAuthModal({ view: 'signup', selectedBatch: batch }));
    },
    [dispatch]
  );

  const openForgotPassword = useCallback(() => {
    dispatch(setAuthModalView('forgot'));
  }, [dispatch]);

  const switchView = useCallback(
    (nextView: AuthModalView) => {
      dispatch(setAuthModalView(nextView));
    },
    [dispatch]
  );

  const close = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  const value = useMemo<AuthModalContextType>(
    () => ({
      isOpen,
      view,
      selectedBatch,
      openSignIn,
      openSignUp,
      openForgotPassword,
      switchView,
      close,
    }),
    [isOpen, view, selectedBatch, openSignIn, openSignUp, openForgotPassword, switchView, close]
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
};
