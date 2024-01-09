import { createElement } from "react";
import { FaSpotify } from "react-icons/fa6";
import { GoHomeFill, GoHome } from "react-icons/go";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const MenuSection = () => {
  const menus = [
    { name: "home", link: "/", icon: GoHome, activeIcon: GoHomeFill },
    { name: "search", link: "/", icon: RiSearchLine, activeIcon: RiSearchFill },
  ];
  return (
    <div className="bg-[rgba(18,18,18)] rounded-lg text-white px-6 py-5">
      <div className="flex items-center gap-0.5 cursor-pointer" title="spotify">
        <FaSpotify size={26} />
        <span className="font-medium">Spotify</span>
      </div>
      <div className="mt-5">
        {menus.map((menu, i) => (
          <Link
            key={i}
            className="flex items-center gap-5 mt-5  text-white/50 hover:text-white transition-all duration-700"
          >
            <div>{createElement(menu.icon, { size: 26 })}</div>
            <h1 className="capitalize font-medium">{menu.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MenuSection;
