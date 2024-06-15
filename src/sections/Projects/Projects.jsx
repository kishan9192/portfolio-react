import styles from "./ProjectsStyle.module.css";

// import ProjectCard from "../../common/ProjectCard";
import ProjectCard from "./index";
import { projects } from "../../constants";

function Projects() {
  return (
    <section id="projects" className={`max-container ${styles.container}`}>
      <h3 className="subhead-text">Projects</h3>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
