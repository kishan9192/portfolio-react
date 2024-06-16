/* eslint-disable react/prop-types */
import { useTheme } from "../../common/ThemeContext";
import "../../../src/index.css";
const TechStackChip = ({ tech }) => {
  return (
    <div className="mr-2 bg-[#eaeaea] mt-2 px-1 rounded-md">
      <span className="text-sm text-sky-600">#{tech}</span>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const { name, iconUrl, techStack, description, link } = project;
  return (
    <div
      className={`scaleProjectCard ${
        theme == "dark" ? "shadow-dark" : "shadow"
      } hover:shadow-lg  hover:cursor-pointer bg-[#fbfbfb] sm:max-w-72 rounded-t-2xl rounded-b-md`}
    >
      <a href={link} target="_blank">
        <div className="m-0">
          <img
            className="sm:h-44 h-64 w-full max-w-full rounded-t-2xl"
            src={iconUrl}
          />
        </div>
        <div className="p-4 w-full">
          <span className=" font-medium text-2xl">{name}</span>
          <div className="mt-4">
            <span className=" text-sm">{description}</span>
            <div className="mt-2 flex flex-row flex-wrap">
              {techStack.map((tech, index) => (
                <TechStackChip key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
