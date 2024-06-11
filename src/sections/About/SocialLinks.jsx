import { socialLinks } from "../../constants";
import CV from "../../assets/Kishan_Mishra_SDE-2.pdf";
import { useTheme } from "../../common/ThemeContext";

const SocialLinks = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-wrap gap-5 sm:flex-row items-end">
      <div className="flex flex-wrap gap-5 sm:flex-row mt-4">
        {socialLinks(theme).map((item, index) => (
          <a
            className="scaleOnHover flex flex-col justify-center items-center"
            key={index}
            href={item.link}
            target="_blank"
          >
            <img height={42} width={42} src={item.iconUrl} />
          </a>
        ))}
      </div>
      <div>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
