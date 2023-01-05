import arrow from "../../assets/arrow.png";
import upArrow from "../../assets/uparrow.png";
import classes from "./index.module.css";

const Arrow = (props) => {
  return (
    <div>
      <img
        src={props.up ? upArrow : arrow}
        alt="arrow"
        className={classes.arrow}
      />
      {props.text && <p className={classes.arrowText}>{props.text}</p>}
    </div>
  );
};

export default Arrow;
