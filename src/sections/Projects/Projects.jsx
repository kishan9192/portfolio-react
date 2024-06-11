import styles from "./ProjectsStyle.module.css";
import hipster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import budget from "../../assets/budget.png";

function Projects() {
  return (
    <section id="projects" className={`max-container ${styles.container}`}>
      <h3 className="subhead-text">Projects</h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitlift}
          title="Workout Pulse"
          description="Add workout, track your calorie burn"
          link={"https://github.com/kishan9192/fitness-tracker"}
        />
        <ProjectCard
          src={budget}
          title="Expense Calculator"
          description="Add your income and expenses, it shows your balance and transaction history"
          link="https://github.com/kishan9192/expense-calculator"
        />
        <ProjectCard
          src={hipster}
          title="Hipster"
          description="Hipster app"
          link={"https://github.com/kishan9192/Expense-Tracker---React"}
        />
        <ProjectCard
          src={fitlift}
          title="Fit Lift"
          description="Fit lift app"
          link="https://github.com/kishan9192/Expense-Tracker---React"
        />
      </div>
    </section>
  );
}

export default Projects;
