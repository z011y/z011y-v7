import Link from 'src/components/Link';

const SubNav = () => {
  return (
    <div className="subnav-container">
      <div className="subnav-links-wrapper">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default SubNav;
