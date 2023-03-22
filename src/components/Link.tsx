import { ReactNode, MouseEvent, useContext } from 'react';

import { PathContext } from 'src/router';

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  const { currentPath, setCurrentPath } = useContext(PathContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!setCurrentPath) {
      throw new Error('PathContext does not exist outside the PathContext.Provider context.')
    }

    window.history.pushState({}, '', to);
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
    setCurrentPath(to)
  };

  return (
    <a href={to} onClick={handleClick} style={{ color: currentPath === to ? 'var(--primary-color)' : 'var(--text-color)' }}>
      {children}
    </a>
  );
};

export default Link;
