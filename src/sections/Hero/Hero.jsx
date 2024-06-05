import styles from "./Herostyle.module.css";
import heroImage from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Kishan_Mishra_SDE_2.pdf";
import { useTheme } from "../../common/ThemeContext";
import Info, { NameTitle, SubTitle } from "../About/Info";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const themeLinkedIn = theme === "light" ? linkedInLight : linkedInDark;
  const themeGithub = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className="">
        <NameTitle />
        <div className="flex flex-col-reverse justify-center items-center sm:justify-between sm:items-start gap-6 sm:flex-row sm:gap-20">
          <div>
            <SubTitle />
            <Info />
          </div>
          <div className={styles.colorModeContainer}>
            <img
              className={styles.hero}
              src={heroImage}
              alt="Profile picture of Kishan Mishra"
            />
            <img
              src={themeIcon}
              className={styles.colorMode}
              onClick={toggleTheme}
              alt="Toggle mode"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center border">
          <span>
            <a
              href="https://www.linkedin.com/in/kishanmishraa/"
              target="_blank"
            >
              <img src={themeLinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/kishan9192" target="_blank">
              <img src={themeGithub} alt="Github" />
            </a>
          </span>
          <a href={CV} download>
            <button className="hover"> Resume </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
