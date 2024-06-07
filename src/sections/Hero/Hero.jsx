import styles from "./Herostyle.module.css";
import heroImage from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import Info, { NameTitle, SubTitle } from "../About/Info";
import SocialLinks from "../About/SocialLinks";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className="">
        <NameTitle />
        <div className="flex flex-col-reverse justify-center items-center sm:justify-between sm:items-start gap-8 sm:flex-row sm:gap-20">
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
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
