import Home from './pages/home';
import classes from './App.module.css';
import Climbark from './pages/climbark';
import OneForAll from './pages/one-for-all';
import JobOracle from './pages/job-oracle';
import Figma from './pages/figma';

function App() {
  return (
    <div className={classes.app}>
        <Home />
        <Climbark />
        <OneForAll />
        <JobOracle />
        <Figma />
    </div>
  );
}

export default App;
