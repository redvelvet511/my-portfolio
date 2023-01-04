import { useState } from "react";

import classes from "./index.module.css";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";
import InsgramIcon from "../../../assets/InstagramIcon.png";
import GithubIcon from "../../../assets/GithubIcon.png";

const Navbar = () => {
  const [isHoveringLinkedIn, setIsHoveringLinkedIn] = useState(false);
  const [isHoveringInstagram, setIsHoveringInstagram] = useState(false);
  const [isHoveringGithub, setIsHoveringGithub] = useState(false);

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
    <div className={classes["navbar-container"]}>
      <div className={classes["social-links"]}>
        <img
          src={LinkedInIcon}
          alt="LinkedinIcon"
          onClick={onLinkedInClick}
          onMouseOver={() => setIsHoveringLinkedIn(true)}
          onMouseOut={() => setIsHoveringLinkedIn(false)}
        />
        <img
          src={InsgramIcon}
          alt="InstagramIcon"
          onClick={onInstagramClick}
          onMouseOver={() => setIsHoveringInstagram(true)}
          onMouseOut={() => setIsHoveringInstagram(false)}
        />
        <img
          src={GithubIcon}
          alt="GithubIcon"
          onClick={onGithubClick}
          onMouseOver={() => setIsHoveringGithub(true)}
          onMouseOut={() => setIsHoveringGithub(false)}
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
