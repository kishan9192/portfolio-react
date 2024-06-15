import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";

function Projects() {
  return (
    <section id="projects" className="max-container flex flex-col">
      <h3 className="subhead-text">Projects</h3>
      <div className="flex flex-col gap-12 sm:flex-row  sm:gap-6 w-full mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
