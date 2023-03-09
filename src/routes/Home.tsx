import Link from 'src/components/Link';

const Home = () => {
  return (
    <>
      <Link to="/page">Page</Link>
      <h2 onClick={() => console.log('clicked!')}>Home</h2>
      <p>a fun sentence</p>
    </>
  );
};

export default Home;
