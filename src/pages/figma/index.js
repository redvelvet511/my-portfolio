import classes from "./index.module.css";
import climbarkprototype from "../../assets/climbarkprototype.png";
import maternityprototype from "../../assets/maternityprototype.png";
import Arrow from "../../components/arrow";

const Figma = () => {
  return (
    <div>
      <div className={classes.figmaContainer}>
        <img
          src={climbarkprototype}
          alt="Climbark Protoype"
          className={classes.climbarkPrototype}
        />
        <div></div>
        <img
          src={maternityprototype}
          alt="Maternity Protoype"
          className={classes.maternityPrototype}
        />
        <div></div>
      </div>
      <Arrow text="Scroll to the top!" up={true} />
    </div>
  );
};

export default Figma;
