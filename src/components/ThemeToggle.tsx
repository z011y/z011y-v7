import { useContext } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

import { Theme, ThemeContext } from 'src/contexts/theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const transitionTheme = (targetTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme);
  };

  const toggleTheme = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        transitionTheme('dark');
        break;
      case 'dark':
        transitionTheme('light');
        break;
      default:
        throw new Error('Unknown theme');
    }
  };

  return theme === 'dark' ? (
    <Sun onClick={() => toggleTheme(theme)} />
  ) : (
    <Moon onClick={() => toggleTheme(theme)} />
  );
};

export default ThemeToggle;
