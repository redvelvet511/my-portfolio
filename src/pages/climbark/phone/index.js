import classes from "./index.module.css";
import PhoneFrame from "../../../assets/iphone-frame.png";
import arrowphone from "../../../assets/arrowphone.png";

const Phone = () => {
  return (
    <div>
      <img
        src={arrowphone}
        alt="Pointer to phone"
        className={classes.pointerToPhone}
      />
      <div className={classes.phoneFrameWrapper}>
        <div className={classes.phoneiFrameWrapper}>
          <iframe
            className={classes.phoneiFrame}
            frameBorder="no"
            title="Climbark"
            src="http://www.climbark.com"
          />
        </div>
        <img
          className={classes.phoneFrame}
          src={PhoneFrame}
          alt="Phone Frame"
        />
      </div>
    </div>
  );
};

export default Phone;
