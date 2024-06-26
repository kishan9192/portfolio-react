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
  const { theme } = useTheme();
  return (
    <div className="text-slate-500 text-justify sm:text-start sm:mt-8">
      <span
        className={`${
          theme == "dark" ? "text-white" : "text-black"
        } text-2xl font-light`}
      >
        I'm a full-stack developer at Innovaccer with over 3 years of
        experience. By day (and often night), I'm a frontend wizard,
        transforming the digital landscape with my expertise in React and
        JavaScript. I enjoy building dynamic, creative products from start to
        finish, focusing on developing intuitive experiences that continuously
        grow and improve based on user metrics. I've also written tech articles,
        sharing my passion and knowledge with the community. When I'm not
        coding, you’ll find me strumming my guitar or trekking up mountains.
        Code, strum, hike, repeat!
      </span>
    </div>
  );
};

export default Info;
