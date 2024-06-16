import { socialLinks } from "../../constants";
import CV from "../../assets/Kishan_Mishra_SDE-2.pdf";
import { useTheme } from "../../common/ThemeContext";

const SocialLinks = () => {
  const { theme } = useTheme();
  const links = socialLinks(theme);

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
                <a href={CV} download>
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
