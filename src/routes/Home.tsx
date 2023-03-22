import Link from 'src/components/Link';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/blog">Blog</Link>
      <h2 onClick={() => console.log('clicked!')}>Home</h2>
      <p>a fun sentence</p>
    </div>
  );
};

export default Home;
