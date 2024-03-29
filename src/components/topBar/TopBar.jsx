import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import useColor from "../../contexts/color";
import useScroll from "../../contexts/scroll";
import usePlaylist from "../../contexts/playlist";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useUser from "../../contexts/user";

const TopBar = () => {
  const { topBarColor } = useColor();
  const { isScrollHeightReached } = useScroll();
  const { playlistTitle } = usePlaylist();
  const { pathname } = useLocation();
  const [isplaylist, setIsPlaylist] = useState(false);
  const { isUserLiggedIn, handleUserId, handleUserLoggedIn, userId } =
    useUser();
  const [user] = useState(userId.charAt(0).toUpperCase() ?? "");

  useEffect(() => {
    if (pathname.includes("playlist")) {
      setIsPlaylist(true);
    } else {
      setIsPlaylist(false);
    }
  }, [pathname]);
  const handleLogout = () => {
    handleUserLoggedIn(false);
    handleUserId("");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div
        className={`text-white px-7 py-3  ${topBarColor} bg-opacity-80 rounded-t-lg flex justify-between sticky z-50 `}
      >
        <div className="flex gap-2 items-center">
          <div className="bg-black rounded-full w-fit  text-white/30">
            <MdOutlineKeyboardArrowLeft className="text-xl md:text-3xl " />
          </div>
          <div className="bg-black rounded-full  w-fit text-white/30">
            <MdOutlineKeyboardArrowRight className="text-xl md:text-3xl " />
          </div>
          {isScrollHeightReached && isplaylist && (
            <>
              <div className="rounded-full p-3 bg-green-500  hover:bg-green-400 hover:scale-105 w-fit duration-300 cursor-pointer hidden md:block">
                <IoMdPlay size={20} color="black" />
              </div>
              <div>
                <h1 className="text-base md:text-2xl font-semibold md:font-extrabold cursor-default">
                  {playlistTitle}
                </h1>
              </div>
            </>
          )}
        </div>
        <div className="hidden lg:flex gap-4 md:gap-8 items-center">
          {isUserLiggedIn ? (
            <div
              title={userId}
              className="rounded-full w-10 h-10 flex items-center justify-center border-2 hover:bg-blue-500 cursor-default text-white bg-blue-600 text-lg font-bold"
            >
              {user}
            </div>
          ) : (
            <Link className="font-bold text-white/50 hover:scale-105 inline-block hover:text-white transition-all duration-300 animate-pulse hover:animate-none ">
              Sign up
            </Link>
          )}
          {isUserLiggedIn ? (
            <div
              onClick={handleLogout}
              className="bg-white px-1 md:px-8 py-1 md:py-3 rounded-full text-black font-bold inline-block transform hover:scale-105 transition-transform cursor-default"
            >
              Log out
            </div>
          ) : (
            <Link
              to={"/login"}
              className="bg-white px-1 md:px-8 py-1 md:py-3 rounded-full text-black font-bold inline-block transform hover:scale-105 transition-transform"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
