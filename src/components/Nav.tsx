import ThemeToggle from 'src/components/ThemeToggle';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>logo</div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Nav;
