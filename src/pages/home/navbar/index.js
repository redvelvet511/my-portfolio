import classes from "./index.module.css";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";
import LinkedInIconHover from "../../../assets/LinkedInIconHover.png";
import InstagramIcon from "../../../assets/InstagramIcon.png";
import InstagramIconHover from "../../../assets/InstagramIconHover.png";
import GithubIcon from "../../../assets/GithubIcon.png";
import GithubIconHover from "../../../assets/GithubIconHover.png";
import ClickableIcon from "../../../components/clickable-icon";

const Navbar = () => {
  const onInstagramClick = (event) => {
    window.open("");
  };
  const onLinkedInClick = (event) => {
    window.open("");
  };
  const onGithubClick = (event) => {
    window.open("");
  };

  return (
    <div className={classes.navbarContainer}>
      <div>
        <ClickableIcon
          className={classes.socialLink}
          icon={LinkedInIcon}
          hoverIcon={LinkedInIconHover}
          alt="Linkedin"
          onClick={onLinkedInClick}
        />
        <ClickableIcon
          className={classes.socialLink}
          icon={InstagramIcon}
          hoverIcon={InstagramIconHover}
          alt="Instagram"
          onClick={onInstagramClick}
        />
        <ClickableIcon
          className={classes.socialLink}
          icon={GithubIcon}
          hoverIcon={GithubIconHover}
          alt="Github"
          onClick={onGithubClick}
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
