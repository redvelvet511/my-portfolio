import Home from './pages/home';
import classes from './App.module.css';
import Climbark from './pages/climbark';

function App() {
  return (
    <div className={classes.app}>
        <Home />
        <Climbark />
    </div>
  );
}

export default App;
