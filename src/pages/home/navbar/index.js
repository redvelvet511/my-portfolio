import classes from "./index.module.css";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";
import LinkedInIconHover from "../../../assets/LinkedInIconHover.png";
import InstagramIcon from "../../../assets/InstagramIcon.png";
import InstagramIconHover from "../../../assets/InstagramIconHover.png";
import GithubIcon from "../../../assets/GithubIcon.png";
import GithubIconHover from "../../../assets/GithubIconHover.png";
import ClickableIcon from "../../../components/clickable-icon";

const Navbar = () => {
  const openInstagram = (event) => {
    window.open("https://www.instagram.com/sndrabr/");
  };
  const openLinkedIn = (event) => {
    window.open("https://www.linkedin.com/in/lsndrabr");
  };
  const openGithub = (event) => {
    window.open("https://github.com/redvelvet511");
  };

  return (
    <div className={classes.navbarContainer}>
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
          icon={InstagramIcon}
          hoverIcon={InstagramIconHover}
          alt="Instagram"
          onClick={openInstagram}
        />
        <ClickableIcon
          className={classes.socialLink}
          icon={GithubIcon}
          hoverIcon={GithubIconHover}
          alt="Github"
          onClick={openGithub}
        />
      </div>
      <div className={classes.directory}>
        <p>About Me</p>
        <p>Projects</p>
        <p>Designs</p>
      </div>
    </div>
  );
};

export default Navbar;
