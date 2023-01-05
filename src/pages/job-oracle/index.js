import classes from "./index.module.css";
import jobhuntingoracle from "../../assets/jobhuntingoracle.png";
import Arrow from "../../components/arrow";

const JobOracle = () => {
  const scrollToFigma = () => {
    document.getElementById("figma").scrollIntoView({behavior: "smooth"});
  }

  return (
    <div>
      <div className={classes.JobOracleContainer}>
        <div className={classes.JobOracleDescription}>
          <h1 id="jobhuntingoracle">3. Job Hunting Oracle</h1>
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
        </div>
        <div>
          <iframe
            title="Job Hunting Oracle"
            width="710"
            height="400"
            src="https://drive.google.com/file/d/1GcShpyUlOvMUQvy0C531r9ywdZ79zfJr/preview"
          />
        </div>
      </div>
      <Arrow text="Figma Prototypes" onClick={scrollToFigma}/>
    </div>
  );
};

export default JobOracle;
