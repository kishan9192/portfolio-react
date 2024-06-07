/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useTheme } from "../../common/ThemeContext";
import { skills } from "../../constants";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section className="max-container flex flex-col">
      <h3 className="subhead-text">My Skills</h3>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill, index) => (
          <div
            title={skill.name}
            key={index}
            draggable
            className="block-container w-20 h-20 relative"
          >
            <div
              className={`btn-back rounded-xl ${
                theme == "dark" ? "shadow-dark" : ""
              }`}
            />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
