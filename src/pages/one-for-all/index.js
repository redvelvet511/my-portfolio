import classes from "./index.module.css";
import oneforall from "../../assets/oneforall.png";
import Arrow from "../../components/arrow";
import Button from "../../components/button";
import technologyUsed from "../../assets/technologyUsed.png";

const OneForAll = () => {
  const viewOneForAllCode = () =>
    window.open(
      "https://github.com/Komezu/rails-superpowersbnb.git"
    );
  const scrollToJobHuntingOracle = () => {
    document
      .getElementById("jobhuntingoracle")
      .scrollIntoView({ behavior: "smooth" });
  };
  const tryMe = () => window.open("http://oneforall.herokuapp.com/");

  return (
    <div>
      <div id="oneforall" className={classes.OneForAllContainer}>
        <div className={classes.titleAndImgContainer}>
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
          <div className={classes.buttonAndTechnologyUsed}>
            <Button onClick={tryMe}>Try Me</Button>
            <img
              src={technologyUsed}
              alt="Technologies Used"
              className={classes.technologyUsed}
            />
          </div>
          <div className={classes.viewOneForAllCode}>
            <p onClick={viewOneForAllCode}>View oneforall code &gt;</p>
          </div>
        </div>
      </div>
      <div className={classes.arrowToJobOracle}>
        <Arrow onClick={scrollToJobHuntingOracle} />
      </div>
    </div>
  );
};

export default OneForAll;
