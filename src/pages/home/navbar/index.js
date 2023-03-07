import classes from "./index.module.css";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";
import LinkedInIconHover from "../../../assets/LinkedInIconHover.png";
import ResumeIcon from "../../../assets/ResumeIcon.png";
import ResumeIconHover from "../../../assets/ResumeIconHover.png";
import GithubIcon from "../../../assets/GithubIcon.png";
import GithubIconHover from "../../../assets/GithubIconHover.png";
import ClickableIcon from "../../../components/clickable-icon";
import Lisandra_Bautista_Resume from "../../../assets/Lisandra_Bautista_Resume.pdf"

const Navbar = () => {
  const scrollToProjects = () => {
    document.getElementById("climbark").scrollIntoView({behavior: "smooth"});
  }
  const scrollToFigma = () => {
    document.getElementById("figma").scrollIntoView({behavior: "smooth"});
  }

  const openResume = () => {
    window.open(Lisandra_Bautista_Resume);
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/lsndrabr");
  };
  const openGithub = () => {
    window.open("https://github.com/redvelvet511");
  };

  return (
    <div id="navBar" className={classes.navbarContainer}>
      <div>
        <ClickableIcon
          className={classes.socialLink}
          icon={LinkedInIcon}
          hoverIcon={LinkedInIconHover}
          alt="Linkedin"
          onClick={openLinkedIn}
        />
        <ClickableIcon
          className={classes.socialLink}
          icon={GithubIcon}
          hoverIcon={GithubIconHover}
          alt="Github"
          onClick={openGithub}
        />
        {/* <ClickableIcon
          className={classes.socialLink}
          icon={ResumeIcon}
          hoverIcon={ResumeIconHover}
          alt="Resume"
          onClick={openResume}
        /> */}
      </div>
      <div className={classes.directory}>
        <p onClick={scrollToProjects}>Projects</p>
        <p onClick={scrollToFigma}>Designs</p>
      </div>
    </div>
  );
};

export default Navbar;
