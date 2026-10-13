import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { colors } from '../theme/colors';
import { ThemeContext } from './ThemeContext';
import type { ThemeContextType } from './ThemeContext';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo<ThemeContextType>(
    () => ({
      mode,
      colors,
      toggleTheme,
      isDark: mode === 'dark',
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
