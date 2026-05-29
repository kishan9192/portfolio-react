/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../../common/ThemeContext";

export const SubTitle = () => {
  return (
    <h1 className="head-text sm:flex-1 sm:flex flex-wrap my-6 sm:text-start text-center">
      I build
      <span className="blue-gradient_text flex-wrap sm:text-start text-center font-semibold drop-shadow sm:ml-3">
        <Typewriter
          words={[
            "web apps",
            "mobile apps",
            "RESTful APIs",
            "async backend",
            "OpenAI prompts",
            "responsive UI",
            "intuitive design",
          ]}
          loop={1}
          cursor
          cursorBlinking
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export const NameTitle = () => {
  return (
    <h1 className="head-text flex sm:flex-1 my-4 sm:my-0 justify-center sm:justify-start">
      Hola, I'm
      <span className="blue-gradient_text font-semibold drop-shadow ml-3">
        Kishan
      </span>
    </h1>
  );
};

const Info = () => {
  const info = `I’m a Software Development Engineer II with 5+ years of experience building scalable full-stack systems using React, TypeScript, Python, Django, FastAPI, MongoDB, and distributed backend architectures.`

 const subtext =`I’ve led initiatives in building feature-flag library, a frontend microservice, API optimization, platform design, and system performance improvements, significantly reducing response times and development overhead through reusable infrastructure and architecture improvements.`

const footnote = `Outside of work, I play guitar and make music, and go for treks.`

  const { theme } = useTheme();
  return (
    <div className="text-slate-500 text-justify sm:text-start sm:mt-8 flex flex-col items-center justify-start">
      <div>
        <span
          className={`${
            theme == "dark" ? "text-white" : "text-black"
          } text-2xl font-light`}
        >
        {info}
        </span>
      </div>
      <div className="mt-4">
        <span
          className={`${
            theme == "dark" ? "text-white" : "text-black"
          } text-2xl font-light`}
        >
        {subtext}
        </span>
      </div>
      <div className="mt-4 flex items-start w-full">
        <span
          className={`${
            theme == "dark" ? "text-white" : "text-black"
          } text-2xl font-light`}
        >
        {footnote}
        </span>
      </div>
    </div>
  );
};

export default Info;
