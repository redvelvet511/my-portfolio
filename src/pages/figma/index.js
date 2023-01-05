import classes from "./index.module.css";
import climbarkprototype from "../../assets/climbarkprototype.png";
import climbarkprototypepointer from "../../assets/climbarkprototypepointer.png";
import maternityprototype from "../../assets/maternityprototype.png";
import maternityprototypepointer from "../../assets/maternityprototypepointer.png";
import Arrow from "../../components/arrow";

const Figma = () => {
  const scrollToTop = () => {
    document.getElementById("navBar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="figma" className={classes.figmaContainer}>
        <div className={classes.climbarkSide}>
          <img
            src={climbarkprototype}
            alt="Climbark Protoype"
            className={classes.climbarkPrototype}
          />
        </div>
        <div className={classes.maternitySide}>
          <img
            src={climbarkprototypepointer}
            alt="Climbark Prototype Pointer"
            className={classes.climbarkPrototypePointer}
          />
          <img
            src={maternityprototype}
            alt="Maternity Protoype"
            className={classes.maternityPrototype}
          />
          <img
            src={maternityprototypepointer}
            alt="maternity Prototype Pointer"
            className={classes.maternityPrototypePointer}
          />
        </div>
      </div>

      <Arrow text="Scroll to the top!" up={true} onClick={scrollToTop} />
    </div>
  );
};

export default Figma;
