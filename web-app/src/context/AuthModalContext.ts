import { createContext, useContext } from 'react';
import type { AuthModalView } from '../store/slices/uiSlice';

export interface AuthModalContextType {
  isOpen: boolean;
  view: AuthModalView;
  selectedBatch: string | null;
  openSignIn: (selectedBatch?: string | null) => void;
  openSignUp: (selectedBatch?: string | null) => void;
  openForgotPassword: () => void;
  switchView: (view: AuthModalView) => void;
  close: () => void;
}

export const AuthModalContext = createContext<AuthModalContextType | null>(null);

export const useAuthModal = (): AuthModalContextType => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
};
