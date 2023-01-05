import classes from "./index.module.css";
import oneforall from "../../assets/oneforall.png";
import Arrow from "../../components/arrow";
import Button from "../../components/button";
import technologyUsed from "../../assets/technologyUsed.png";

const OneForAll = () => {
  const tryMe = () => window.open("http://oneforall.herokuapp.com/");

  return (
    <div>
      <div className={classes.OneForAllContainer}>
        <div>
          <h1>2. OneForAll</h1>
          <img
            src={oneforall}
            alt="OneForAll"
            className={classes.OneForAllImg}
          />
        </div>
        <div className={classes.OneForAllSummaryContainer}>
          <p className={classes.OneForAllDescription}>
            Looking to sleep with eyes wide open or to be fit without going to
            the gym? OneForAll is for you.
            <br />
            Rent temporary superpowers and rent out your superpowers in
            exchange!
          </p>
          <Button onClick={tryMe}>Try Me</Button>
          <img
            src={technologyUsed}
            alt="Technologies Used"
            className={classes.technologyUsed}
          />
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default OneForAll;
