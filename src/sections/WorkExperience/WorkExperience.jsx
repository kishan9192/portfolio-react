/* eslint-disable react/no-unescaped-entities */
import { useTheme } from "../../common/ThemeContext";
import { experiences } from "../../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../App.css";

const WorkExperience = () => {
  const { theme } = useTheme();
  return (
    <section className="max-container">
      <h3 className="subhead-text">Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <span
          className={`${
            theme == "dark" ? "text-white" : "text-black"
          } text-lg font-extralight`}
        >
          I've had the privilege of collaborating with diverse companies,
          continuously enhancing my skills and partnering with talented
          individuals. Here's a brief rundown of my journey:
        </span>
      </div>
      <div className="mt-12 flex">
        <VerticalTimeline lineColor={theme === "dark" ? "white" : "#F5F5F5"}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              contentArrowStyle={{
                background: theme === "light" ? "#E3E3E3" : "",
              }}
              dateClassName={`${
                theme === "dark" ? "lg:text-white" : "lg:text-black"
              } lg:mx-3 `}
              icon={
                <div className="flex justify-center items-center w-full h-full ">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{
                background: experience.iconBg,
              }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "0px 4px 16px 0px #00000029",
                background: theme === "light" ? "#FAFAFA" : "",
              }}
            >
              <div>
                <h3 className="text-black text-l font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    className="text-black-500/50 font-normal pl-1 text-sm"
                    key={index}
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {experience.articlesLink && (
                <a
                  className="cursor-pointer relative text-lime-600"
                  href={experience.articlesLink}
                  target="_blank"
                >
                  <span className="text-sm animate-pulse">
                    Checkout to my articles
                  </span>
                  <span className="arrow text-sm"> →</span>
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
