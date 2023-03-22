import { createContext, useEffect, useState } from 'react';
import type { Dispatch, SetStateAction, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>> | null;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  setTheme: null,
});

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const getInjectedThemeOrDefault = (): Theme => {
    const injectedTheme = document.documentElement.getAttribute('data-theme');
    return injectedTheme === 'dark' ? 'dark' : 'light';
  };

  useEffect(() => {
    setTheme(getInjectedThemeOrDefault());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
