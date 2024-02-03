import { IoMdPlay } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
import PropTypes from "prop-types";

const PlaylistIcons = ({ gradient }) => {
  return (
    <div
      className={` px-7 py-6 flex flex-col md:flex-row md:justify-between gap-4 `}
      style={{ background: gradient }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="rounded-full p-2 md:p-3.5 bg-green-500  hover:bg-green-400 hover:scale-105 w-fit duration-300">
          <IoMdPlay className="text-base md:text-2xl" color="black" />
        </div>
        <RiHeartLine className="text-xl md:text-4xl text-white/50 hover:text-white duration-300 cursor-pointer hover:scale-105 animate-pulse hover:animate-none" />
        <HiOutlineDotsHorizontal className="text-lg md:text-3xl text-white/50 hover:text-white duration-300 cursor-pointer hover:scale-105 animate-pulse hover:animate-none" />
      </div>
      <div className="flex items-center gap-2 text-white/50 cursor-pointer font-bold hover:text-white duration-500 transition-all">
        <span className="">List</span>
        <FaListUl />
      </div>
    </div>
  );
};
PlaylistIcons.propTypes = {
  gradient: PropTypes.string,
};
export default PlaylistIcons;
