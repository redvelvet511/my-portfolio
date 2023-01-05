import classes from "./index.module.css";
import jobhuntingoracle from "../../assets/jobhuntingoracle.png";
import pressplay from "../../assets/pressplay.png";
import Arrow from "../../components/arrow";

const JobOracle = () => {
  const scrollToFigma = () => {
    document.getElementById("figma").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="jobhuntingoracle" className={classes.jobOracleContainer}>
        <div className={classes.jobOracleDescription}>
          <h1>3. Job Hunting Oracle</h1>
          <p>
            Keep track of the latest job postings you’re interested in from
            different job sites through email and SMS with keywords you used to
            search for jobs.
          </p>
          <img
            src={jobhuntingoracle}
            alt="Technologies Used"
            className={classes.technologyUsedJobOracle}
          />
          <div className={classes.pressPlayImg}>
          <img
            src={pressplay}
            alt="Press Play Pointer"
            className={classes.pressPlayPointer}
          />
          </div>
        </div>
        <div className={classes.videoContainer}>
          <div>
            <iframe
              title="Job Hunting Oracle"
              width="650"
              height="380"
              src="https://drive.google.com/file/d/1GcShpyUlOvMUQvy0C531r9ywdZ79zfJr/preview"
            />
          </div>
        </div>
      </div>
      <div className={classes.arrowPointerToFigma}>
        <Arrow text="Figma Prototypes" onClick={scrollToFigma} />
      </div>
    </div>
  );
};

export default JobOracle;
