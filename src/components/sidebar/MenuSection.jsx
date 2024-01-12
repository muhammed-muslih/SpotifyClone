import { createElement } from "react";
import { FaSpotify } from "react-icons/fa6";
import { GoHomeFill, GoHome } from "react-icons/go";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MenuSection = () => {
  const location = useLocation();
  console.log(location);
  const menus = [
    { name: "home", link: "/", icon: GoHome, activeIcon: GoHomeFill },
    {
      name: "search",
      link: "/search",
      icon: RiSearchLine,
      activeIcon: RiSearchFill,
    },
  ];
  return (
    <div className="bg-[rgba(18,18,18)] rounded-lg text-white px-6 py-5 h-screen md:h-auto">
      <div className="flex items-center gap-0.5 cursor-pointer" title="spotify">
        <FaSpotify size={26} />
        <span className="font-medium hidden md:block">Spotify</span>
      </div>
      <div className="mt-5">
        {menus.map((menu, i) => (
          <Link
            key={i}
            className={`flex items-center gap-5 mt-5  hover:text-white transition-all duration-700 ${
              location.pathname === menu.link ? "text-white" : " text-white/50"
            }`}
          >
            <div>
              {createElement(
                location.pathname === menu.link ? menu.activeIcon : menu.icon,
                { size: 26 }
              )}
            </div>
            <h1 className="capitalize font-medium hidden md:block">{menu.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MenuSection;
