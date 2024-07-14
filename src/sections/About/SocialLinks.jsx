import { socialLinks } from "../../constants";
import { useTheme } from "../../common/ThemeContext";

const SocialLinks = () => {
  const { theme } = useTheme();
  const links = socialLinks(theme);
  const resumeURL =
    "https://drive.google.com/drive/folders/1HFVndAUWQovcw0m3oUUQWJEwFHQ02Fue?usp=sharing";

  return (
    <div className="flex flex-wrap gap-5 sm:flex-row items-end">
      <div className="flex flex-wrap gap-5 sm:flex-row mt-4">
        {links.map((item, index) => {
          if (index === links.length - 1) {
            return (
              <>
                <a
                  className="scaleOnHover flex flex-col justify-center items-center"
                  key={index}
                  href={item.link}
                  target="_blank"
                >
                  <img height={42} width={42} src={item.iconUrl} />
                </a>
                <a href={resumeURL} target="_blank">
                  <button className="hover"> Resume </button>
                </a>
              </>
            );
          }
          return (
            <a
              className="scaleOnHover flex flex-col justify-center items-center"
              key={index}
              href={item.link}
              target="_blank"
            >
              <img height={42} width={42} src={item.iconUrl} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
