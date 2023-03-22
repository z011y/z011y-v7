import { GithubLogo } from '@phosphor-icons/react';

import ThemeToggle from 'src/components/ThemeToggle';
import Logo from 'src/components/icons/Logo';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>
        <Logo />
      </div>
      <div className='nav-icons-wrapper'>
        <ThemeToggle />
        <GithubLogo />
      </div>
    </nav>
  );
};

export default Nav;
