import classes from './index.module.css';
import Navbar from './navbar';

const Home = () => {
  return <div className={classes['home-container']}>
    <Navbar/>
  </div>
};

export default Home;
