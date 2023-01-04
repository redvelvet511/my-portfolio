import { useState } from "react";
import { clsx } from "clsx";

import classes from "./index.module.css";

const ClickableIcon = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <img
      className={clsx(classes.clickableIcon, props.className)}
      src={isHovering ? props.hoverIcon : props.icon}
      alt={props.alt}
      onClick={props.onClick}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    />
  );
};

export default ClickableIcon;
