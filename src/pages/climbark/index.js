import classes from "./index.module.css";
import technologyUsed from "../../assets/technologyUsed.png";
import Phone from "./phone";
import Arrow from '../../components/arrow';

const Climbark = () => {
  return (
    <div>
    <div className={classes.climbarkContainer}>
      <div>
        <Phone />
      </div>
      <div className={classes.climbarkSummaryContainer}>
        <h1>1. Climbark</h1>
        <p className={classes.climbarkDescription1}>
          Climbark's purpose is to make the overall climbing experience for
          outdoor rock climbers easier. The idea is to scrap the book that we,
          rock climbers use outdoors and instead have it all in one phone app.
        </p>
        <div className={classes.climbarkDescription2wrap}>
          <p className={classes.climbarkDescription2}>
            Never worry about forgetting your book in the car!
          </p>
          <img
            src={technologyUsed}
            alt="Technologies Used"
            className={classes.technologyUsed}
          />
        </div>
        <div className={classes.pitchContainer}>
          <div className={classes.climbarkTarget}>
            <h2>Target</h2>
            <p>- Rock climbers of all levels (beginner, intermediate, advanced)</p>
          </div>
          <div className={classes.climbarkPain}>
            <h2>Pain</h2>
            <p>- Inconvenient route checking<br/>- Inefficient logs<br/>-No progress tracking</p>
          </div>
          <div className={classes.climbarkSolution}>
            <h2>Solution</h2>
            <p>- Pocket book<br/>- Log your climbs<br/>- Track projects & progress</p>
          </div>
        </div>
      </div>
      </div>
      <Arrow />
    </div>
  );
};

export default Climbark;
