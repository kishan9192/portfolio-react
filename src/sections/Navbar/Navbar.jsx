import { useTheme } from "../../common/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDark ? "bg-[#222] border-gray-700" : "bg-white border-gray-200"
      } border-b`}
    >
      <div className="max-w-5xl mx-auto px-8 py-4 flex items-center gap-6 overflow-x-auto">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-blue-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
