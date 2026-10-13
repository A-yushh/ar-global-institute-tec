// Redux Toolkit UI Slice in TypeScript
import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type AuthModalView = 'signin' | 'signup' | 'forgot';

export interface ToastState {
  isOpen: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface UIState {
  isAuthModalOpen: boolean;
  authModalView: AuthModalView;
  selectedBatchForEnroll: string | null;
  activeNavSection: string;
  isMobileMenuOpen: boolean;
  toast: ToastState;
}

const initialState: UIState = {
  isAuthModalOpen: false,
  authModalView: 'signin',
  selectedBatchForEnroll: null,
  activeNavSection: 'hero',
  isMobileMenuOpen: false,
  toast: {
    isOpen: false,
    message: '',
    type: 'success',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openAuthModal(
      state,
      action: PayloadAction<{ view?: AuthModalView; selectedBatch?: string | null } | undefined>
    ) {
      const payload = action.payload || {};
      state.isAuthModalOpen = true;
      state.authModalView = payload.view || 'signin';
      state.selectedBatchForEnroll = payload.selectedBatch || null;
    },
    closeAuthModal(state) {
      state.isAuthModalOpen = false;
      state.selectedBatchForEnroll = null;
    },
    setAuthModalView(state, action: PayloadAction<AuthModalView>) {
      state.authModalView = action.payload;
    },
    setActiveNavSection(state, action: PayloadAction<string>) {
      state.activeNavSection = action.payload;
    },
    toggleMobileMenu(state, action: PayloadAction<boolean | undefined>) {
      if (typeof action.payload === 'boolean') {
        state.isMobileMenuOpen = action.payload;
      } else {
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
      }
    },
    showToast(state, action: PayloadAction<{ message: string; type?: 'success' | 'error' | 'info' }>) {
      const { message, type = 'success' } = action.payload;
      state.toast = {
        isOpen: true,
        message,
        type,
      };
    },
    hideToast(state) {
      state.toast.isOpen = false;
    },
  },
});

export const {
  openAuthModal,
  closeAuthModal,
  setAuthModalView,
  setActiveNavSection,
  toggleMobileMenu,
  showToast,
  hideToast,
} = uiSlice.actions;

// Selectors
export const selectIsAuthModalOpen = (state: RootState): boolean => state.ui.isAuthModalOpen;
export const selectAuthModalView = (state: RootState): AuthModalView => state.ui.authModalView;
export const selectSelectedBatchForEnroll = (state: RootState): string | null => state.ui.selectedBatchForEnroll;

export const selectAuthModalState = createSelector(
  [selectIsAuthModalOpen, selectAuthModalView, selectSelectedBatchForEnroll],
  (isOpen, view, selectedBatch) => ({
    isOpen,
    view,
    selectedBatch,
  })
);

export const selectActiveNavSection = (state: RootState): string => state.ui.activeNavSection;
export const selectIsMobileMenuOpen = (state: RootState): boolean => state.ui.isMobileMenuOpen;
export const selectToast = (state: RootState): ToastState => state.ui.toast;

export default uiSlice.reducer;
