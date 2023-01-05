import classes from "./index.module.css";

const Phone = () => {
  return (
    <iframe
      className={classes.phone}
      height="700"
      width="375"
      frameBorder="no"
      title="Climbark"
      src="http://www.climbark.com"
    />
  );
};

export default Phone;
