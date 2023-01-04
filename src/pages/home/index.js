import classes from "./index.module.css";
import Navbar from "./navbar";
import MyImg from "../../assets/MyImg.png";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <Navbar />
      <div className={classes.introductionContainerWrapper}>
        <div className={classes.introductionContainer}>
          <div className={classes.introductionBody}>
            <p className={classes.greetings}>
              Hi, I'm <span className={classes.myName}>Sandra</span>
            </p>
            <p className={classes.aboutMe}>
              Full Stack Dev | Rock Climber | Chess Beginner
            </p>
            <p className={classes.introductionSummary}>
              I have a bachelor’s in International Relations but recently fell
              in love with coding, project management & design :&#41;
              ..transitioning my career in the tech industry.
            </p>
          </div>
          <img src={MyImg} alt="MyImg" className={classes.myPhoto} />
        </div>
      </div>
    </div>
  );
};

export default Home;
