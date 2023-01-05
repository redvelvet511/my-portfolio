import classes from "./index.module.css";
import climbarkprototype from "../../assets/climbarkprototype.png";
import climbarkprototypepointer from "../../assets/climbarkprototypepointer.png";
import maternityprototype from "../../assets/maternityprototype.png";
import maternityprototypepointer from "../../assets/maternityprototypepointer.png";
import Arrow from "../../components/arrow";

const Figma = () => {
  const viewClimbarkProtoype = () =>
    window.open(
      "https://www.figma.com/file/18dCVKsWyAoByod9rY2eAf/Climbark-Prototype?node-id=8%3A14&t=2lSNzgAYYvmvjv2a-1"
    );
  const viewMaternityProtoype = () =>
    window.open(
      "https://www.figma.com/file/57SRmu4melszZTmLeYIljJ/Maternity-Protoype?node-id=0%3A1&t=VVGCX9b1uQWFBm5I-1"
    );
  const scrollToTop = () => {
    document.getElementById("navBar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="figma" className={classes.figmaContainer}>
        <div className={classes.climbarkSide}>
          <img
            onClick={viewClimbarkProtoype}
            src={climbarkprototypepointer}
            alt="Climbark Prototype Pointer"
            className={classes.climbarkPrototypePointer}
          />
          <img
            onClick={viewClimbarkProtoype}
            src={climbarkprototype}
            alt="Climbark Protoype"
            className={classes.climbarkPrototype}
          />
        </div>
        <div className={classes.maternitySide}>
          <img
            onClick={viewMaternityProtoype}
            src={maternityprototype}
            alt="Maternity Protoype"
            className={classes.maternityPrototype}
          />
          <img
            onClick={viewMaternityProtoype}
            src={maternityprototypepointer}
            alt="maternity Prototype Pointer"
            className={classes.maternityPrototypePointer}
          />
        </div>
      </div>
      <div className={classes.arrowToTop}>
        <Arrow text="Scroll to the top!" up={true} onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Figma;
