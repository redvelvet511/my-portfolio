import classes from "./index.module.css";
import Navbar from "./navbar";
import MyImg from "../../assets/MyImg.png";
import Arrow from "../../components/arrow";
import Button from "../../components/button";

const Home = () => {
  const scrollToClimbark = () => {
    document.getElementById("climbark").scrollIntoView({ behavior: "smooth" });
  };
  const getInTouch = () =>
    window.open(
      "https://www.linkedin.com/messaging/thread/new/?recipients=List(urn%3Ali%3Afsd_profile%3AACoAADgtGEABIfEao7KMOsUx8rOwmDnAW4-zz-A)&composeOptionType=PREMIUM_INMAIL"
    );

  return (
    <div className={classes.homeContainer}>
      <Navbar />
      <div className={classes.introductionContainerWrapper}>
        <div className={classes.introductionContainer}>
          <div className={classes.introductionBody}>
            <p className={classes.greetings}>
              Hi, I'm <span className={classes.myName}>Lisandra</span>
            </p>
            <p className={classes.aboutMe}>
              Full Stack Dev | Rock Climber | Chess Beginner
            </p>
            <p className={classes.introductionSummary}>
              I have a bachelor’s in International Relations but recently fell
              in love with coding, project management & design :&#41;
              ..transitioning my career in the tech industry.
            </p>
            <Button onClick={getInTouch}>Get in touch!</Button>
          </div>
          <img src={MyImg} alt="MyImg" className={classes.myPhoto} />
        </div>
      </div>
      <div className={classes.arrowToProject}>
      <Arrow text="Projects" onClick={scrollToClimbark} />
      </div>
    </div>
  );
};

export default Home;
