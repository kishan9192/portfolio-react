/* eslint-disable react/prop-types */

const ProjectCard = ({ src, link, title, description }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={src} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;